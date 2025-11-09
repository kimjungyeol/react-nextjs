import { FeedListProps } from '@/types';
import FeedCard from './FeedCard';

export default function FeedList({ feeds }: FeedListProps) {
  if (feeds.length === 0) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <p className="text-gray-500 dark:text-gray-400">
          표시할 피드가 없습니다.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {feeds.map((feed) => (
        <FeedCard key={feed.id} feed={feed} />
      ))}
    </div>
  );
}
