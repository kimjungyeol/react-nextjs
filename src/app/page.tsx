import FeedList from '@/components/feed/FeedList';
import { mockFeeds } from '@/data/mockFeeds';

export default function Home() {
  return (
    <div className="container-custom py-8">
      <div className="mb-8">
        <h1 className="mb-2 text-4xl font-bold text-gray-900 dark:text-white">
          최신 뉴스피드
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          다양한 주제의 최신 소식을 확인해보세요
        </p>
      </div>

      <FeedList feeds={mockFeeds} />
    </div>
  );
}
