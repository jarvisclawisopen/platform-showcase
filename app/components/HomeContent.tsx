'use client';

import { useState, useEffect, useMemo } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Toaster } from 'sonner';
import Header from './Header';
import SearchBar from './SearchBar';
import Controls from './Controls';
import Grid from './Grid';
import Footer from './Footer';
import DetailModal from './DetailModal';
import { useAppStore } from '@/lib/store';
import type { App } from '../types';
import appsData from '../apps-data.json';

export default function HomeContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [apps, setApps] = useState<App[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [pricingFilter, setPricingFilter] = useState<string[]>([]);
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [selectedApp, setSelectedApp] = useState<App | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { favorites } = useAppStore();

  const categories = [
    'All',
    'AI',
    'Crypto',
    'Design',
    'Development',
    'Finance',
    'Marketing',
    'Productivity',
    'Research',
    'Security',
    'Other'
  ];

  // Load apps
  useEffect(() => {
    setIsLoading(true);
    // Simulate loading for skeleton
    setTimeout(() => {
      setApps(appsData as App[]);
      setIsLoading(false);
    }, 300);
  }, []);

  // Sync with URL params
  useEffect(() => {
    const category = searchParams.get('category');
    const search = searchParams.get('search');
    
    if (category && categories.includes(category)) {
      setSelectedCategory(category);
    }
    if (search) {
      setSearchQuery(search);
    }
  }, [searchParams]);

  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams();
    if (selectedCategory !== 'All') {
      params.set('category', selectedCategory);
    }
    if (searchQuery) {
      params.set('search', searchQuery);
    }
    
    const newUrl = params.toString() ? `?${params.toString()}` : '/';
    router.replace(newUrl, { scroll: false });
  }, [selectedCategory, searchQuery, router]);

  // Filter and sort apps
  const filteredApps = useMemo(() => {
    let result = [...apps];

    // Category filter
    if (selectedCategory !== 'All') {
      result = result.filter((app) => app.category === selectedCategory);
    }

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (app) =>
          app.name.toLowerCase().includes(query) ||
          app.description.toLowerCase().includes(query) ||
          app.detailed.toLowerCase().includes(query) ||
          app.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    // Pricing filter
    if (pricingFilter.length > 0) {
      result = result.filter((app) => pricingFilter.includes(app.pricingModel));
    }

    // Favorites filter
    if (showFavoritesOnly) {
      result = result.filter((app) => favorites.includes(app.id));
    }

    // Sort
    switch (sortBy) {
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'category':
        result.sort((a, b) => a.category.localeCompare(b.category));
        break;
      case 'pricing':
        result.sort((a, b) => a.pricingModel.localeCompare(b.pricingModel));
        break;
      case 'recent':
        result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        break;
    }

    return result;
  }, [apps, selectedCategory, searchQuery, pricingFilter, showFavoritesOnly, sortBy, favorites]);

  const handleOpenDetail = (app: App) => {
    setSelectedApp(app);
    setIsModalOpen(true);
  };

  const handleClearFilters = () => {
    setSelectedCategory('All');
    setSearchQuery('');
    setPricingFilter([]);
    setShowFavoritesOnly(false);
  };

  const hasActiveFilters =
    selectedCategory !== 'All' ||
    searchQuery !== '' ||
    pricingFilter.length > 0 ||
    showFavoritesOnly;

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) {
        setIsModalOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen]);

  return (
    <>
      <Toaster 
        position="bottom-right" 
        theme="light"
        toastOptions={{
          style: {
            background: '#ffffff',
            color: '#1a1a1a',
            border: '1px solid #e5e7eb',
          },
        }}
      />
      
      <main className="min-h-screen">
        <Header
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          apps={apps}
        />

        {/* Search + Controls */}
        <div className="container-max px-6 mb-8 space-y-6 relative z-10">
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            totalResults={filteredApps.length}
          />

          <Controls
            sortBy={sortBy}
            onSortChange={setSortBy}
            pricingFilter={pricingFilter}
            onPricingFilterChange={setPricingFilter}
            showFavoritesOnly={showFavoritesOnly}
            onToggleFavorites={() => setShowFavoritesOnly(!showFavoritesOnly)}
            onClearFilters={handleClearFilters}
            hasActiveFilters={hasActiveFilters}
          />

          {/* Results Info */}
          {hasActiveFilters && (
            <div className="text-sm text-gray-600">
              Showing <span className="text-gray-900 font-semibold">{filteredApps.length}</span> of{' '}
              <span className="text-gray-900 font-semibold">{apps.length}</span> platforms
            </div>
          )}
        </div>

        <Grid apps={filteredApps} isLoading={isLoading} onOpenDetail={handleOpenDetail} />

        <Footer />
      </main>

      <DetailModal app={selectedApp} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
