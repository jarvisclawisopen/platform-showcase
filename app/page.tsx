'use client';

import { useState, useEffect } from 'react';
import Header from './components/Header';
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

  const filteredApps = selectedCategory === 'All' 
    ? apps 
    : apps.filter(app => app.category === selectedCategory);

  return (
    <main className="min-h-screen">
      <Header
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      
      <Grid apps={filteredApps} />
      
      <Footer />
    </main>
  );
}
