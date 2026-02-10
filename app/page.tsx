'use client';

import { useState, useEffect } from 'react';
import Header from './components/Header';
import FilterButtons from './components/FilterButtons';
import Grid from './components/Grid';
import Footer from './components/Footer';
import type { App } from './types';
import appsData from './apps-data.json';

export default function Home() {
  const [apps, setApps] = useState<App[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  useEffect(() => {
    setApps(appsData as App[]);
  }, []);

  const categories = ['All', 'AI', 'Crypto', 'Design', 'Development', 'Finance', 'Marketing', 'Productivity', 'Research', 'Security', 'Other'];

  const filteredApps = selectedCategory === 'All' 
    ? apps 
    : apps.filter(app => app.category === selectedCategory);

  return (
    <main className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <Header />
        
        <FilterButtons
          categories={categories}
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        />
        
        <Grid apps={filteredApps} />
        
        <Footer />
      </div>
    </main>
  );
}
