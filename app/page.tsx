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

  const categories = ['All', 'AI', 'Crypto', 'Design', 'Development', 'Marketing', 'Other'];

  const filteredApps = selectedCategory === 'All' 
    ? apps 
    : apps.filter(app => app.category === selectedCategory);

  return (
    <main className="min-h-screen">
      <div className="max-w-[1400px] mx-auto px-6 py-16 md:py-24">
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
