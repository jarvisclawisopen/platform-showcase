export interface App {
  id: string;
  name: string;
  url: string;
  description: string;
  detailed: string;
  category: string;
  pricingModel: string;
  tags: string[];
  votes: number;
  createdAt: string;
}

export interface AppCardProps {
  app: App;
  onVote: (id: string) => void;
  onFavorite: (id: string) => void;
  onOpenDetail: (app: App) => void;
  isFavorited: boolean;
  userVotes: Record<string, boolean>;
}

export interface FilterState {
  search: string;
  category: string;
  sortBy: 'name' | 'category' | 'votes' | 'default';
  showFavoritesOnly: boolean;
}
