import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AppStore {
  // Favorites
  favorites: string[];
  toggleFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;

  // View mode
  viewMode: 'grid' | 'compact';
  setViewMode: (mode: 'grid' | 'compact') => void;

  // Recent searches
  recentSearches: string[];
  addRecentSearch: (query: string) => void;
  clearRecentSearches: () => void;
}

export const useAppStore = create<AppStore>()(
  persist(
    (set, get) => ({
      // Favorites
      favorites: [],
      toggleFavorite: (id: string) =>
        set((state) => ({
          favorites: state.favorites.includes(id)
            ? state.favorites.filter((fav) => fav !== id)
            : [...state.favorites, id],
        })),
      isFavorite: (id: string) => get().favorites.includes(id),

      // View mode
      viewMode: 'grid',
      setViewMode: (mode) => set({ viewMode: mode }),

      // Recent searches
      recentSearches: [],
      addRecentSearch: (query: string) =>
        set((state) => {
          const searches = [query, ...state.recentSearches.filter((s) => s !== query)].slice(0, 5);
          return { recentSearches: searches };
        }),
      clearRecentSearches: () => set({ recentSearches: [] }),
    }),
    {
      name: 'platform-showcase-storage',
    }
  )
);
