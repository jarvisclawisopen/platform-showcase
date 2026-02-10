'use client';

import { useState, useEffect, useMemo } from 'react';
import Navigation from './components/Navigation';
import FloatingBadge from './components/FloatingBadge';
import PlatformsTable from './components/PlatformsTable';
import Footer from './components/Footer';
import AppModal from './components/AppModal';
import type { App } from './types';
import appsData from './apps-data.json';

export default function Home() {
  const [apps, setApps] = useState<App[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedApp, setSelectedApp] = useState<App | null>(null);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [userVotes, setUserVotes] = useState<Record<string, boolean>>({});

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

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-black/60">Loading...</div>
      </div>
    );
  }

  return (
    <main className="min-h-screen relative">
      <Navigation />
      <FloatingBadge />
      
      <PlatformsTable
        apps={apps}
        favorites={favorites}
        userVotes={userVotes}
        onFavorite={handleFavorite}
        onVote={handleVote}
        onOpenDetail={setSelectedApp}
      />

      <Footer />

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
