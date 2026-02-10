'use client';

import { useState, useEffect, useMemo } from 'react';
import Hero from './components/Hero';
import FilterBar from './components/FilterBar';
import AppCard from './components/AppCard';
import AppModal from './components/AppModal';
import EmptyState from './components/EmptyState';
import LoadingState from './components/LoadingState';
import type { App } from './types';
import appsData from './apps-data.json';

export default function Home() {
  const [apps, setApps] = useState<App[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('default');
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [selectedApp, setSelectedApp] = useState<App | null>(null);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [userVotes, setUserVotes] = useState<Record<string, boolean>>({});

  // Load data and localStorage
  useEffect(() => {
    const loadedApps = appsData as App[];
    
    const savedFavorites = localStorage.getItem('app-favorites');
    if (savedFavorites) {
      setFavorites(new Set(JSON.parse(savedFavorites)));
    }

    const savedVotes = localStorage.getItem('app-votes');
    if (savedVotes) {
      const votes = JSON.parse(savedVotes);
      setUserVotes(votes);
      
      const appsWithVotes = loadedApps.map(app => ({
        ...app,
        votes: votes[app.id] ? app.votes + 1 : app.votes
      }));
      setApps(appsWithVotes);
    } else {
      setApps(loadedApps);
    }

    setLoading(false);
  }, []);

  const categories = useMemo(() => {
    const cats = new Set(apps.map(app => app.category));
    return Array.from(cats).sort();
  }, [apps]);

  const filteredApps = useMemo(() => {
    let filtered = [...apps];

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        app =>
          app.name.toLowerCase().includes(query) ||
          app.description.toLowerCase().includes(query) ||
          app.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(app => app.category === selectedCategory);
    }

    if (showFavoritesOnly) {
      filtered = filtered.filter(app => favorites.has(app.id));
    }

    switch (sortBy) {
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'category':
        filtered.sort((a, b) => a.category.localeCompare(b.category));
        break;
      case 'votes':
        filtered.sort((a, b) => b.votes - a.votes);
        break;
    }

    return filtered;
  }, [apps, searchQuery, selectedCategory, sortBy, showFavoritesOnly, favorites]);

  const handleVote = (id: string) => {
    const hasVoted = userVotes[id];
    const newVotes = { ...userVotes };
    
    if (hasVoted) {
      delete newVotes[id];
      setApps(apps.map(app => 
        app.id === id ? { ...app, votes: app.votes - 1 } : app
      ));
    } else {
      newVotes[id] = true;
      setApps(apps.map(app => 
        app.id === id ? { ...app, votes: app.votes + 1 } : app
      ));
    }
    
    setUserVotes(newVotes);
    localStorage.setItem('app-votes', JSON.stringify(newVotes));
  };

  const handleFavorite = (id: string) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(id)) {
      newFavorites.delete(id);
    } else {
      newFavorites.add(id);
    }
    setFavorites(newFavorites);
    localStorage.setItem('app-favorites', JSON.stringify(Array.from(newFavorites)));
  };

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSortBy('default');
    setShowFavoritesOnly(false);
  };

  return (
    <main className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Hero searchQuery={searchQuery} onSearchChange={setSearchQuery} />

        <FilterBar
          category={selectedCategory}
          sortBy={sortBy}
          showFavoritesOnly={showFavoritesOnly}
          onCategoryChange={setSelectedCategory}
          onSortChange={setSortBy}
          onToggleFavorites={() => setShowFavoritesOnly(!showFavoritesOnly)}
          categories={categories}
        />

        {loading ? (
          <LoadingState />
        ) : filteredApps.length === 0 ? (
          <EmptyState
            type={showFavoritesOnly ? 'favorites' : 'search'}
            onReset={resetFilters}
          />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredApps.map((app) => (
              <AppCard
                key={app.id}
                app={app}
                onVote={handleVote}
                onFavorite={handleFavorite}
                onOpenDetail={setSelectedApp}
                isFavorited={favorites.has(app.id)}
                userVotes={userVotes}
              />
            ))}
          </div>
        )}
      </div>

      <AppModal
        app={selectedApp}
        isOpen={selectedApp !== null}
        onClose={() => setSelectedApp(null)}
        onVote={handleVote}
        onFavorite={handleFavorite}
        isFavorited={selectedApp ? favorites.has(selectedApp.id) : false}
        userVotes={userVotes}
      />
    </main>
  );
}
