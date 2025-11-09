export interface Author {
  id: string;
  name: string;
  avatar: string;
  bio?: string;
}

export interface Feed {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  author: Author;
  category: string;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
  views: number;
  likes: number;
  tags: string[];
}

export interface FeedCardProps {
  feed: Feed;
}

export interface FeedListProps {
  feeds: Feed[];
}
