import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getFeedById } from '@/data/mockFeeds';
import { formatDate, formatNumber } from '@/lib/utils';

interface FeedDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({ params }: FeedDetailPageProps) {
  const { id } = await params;
  const feed = getFeedById(id);

  if (!feed) {
    return {
      title: 'Feed Not Found',
    };
  }

  return {
    title: `${feed.title} - NewsFeed App`,
    description: feed.excerpt,
  };
}

export default async function FeedDetailPage({ params }: FeedDetailPageProps) {
  const { id } = await params;
  const feed = getFeedById(id);

  if (!feed) {
    notFound();
  }

  return (
    <div className="container-custom py-8">
      <div className="mx-auto max-w-4xl">
        {/* 뒤로가기 버튼 */}
        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-2 text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          목록으로 돌아가기
        </Link>

        {/* 메타 정보 */}
        <div className="mb-6 flex flex-wrap items-center gap-4">
          <span className="inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200">
            {feed.category}
          </span>
          <span className="text-gray-500 dark:text-gray-400">
            {formatDate(feed.createdAt)}
          </span>
        </div>

        {/* 제목 */}
        <h1 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl lg:text-5xl">
          {feed.title}
        </h1>

        {/* 작성자 정보 */}
        <div className="mb-8 flex items-center justify-between border-b border-gray-200 pb-6 dark:border-gray-700">
          <div className="flex items-center gap-4">
            <div className="relative h-12 w-12 overflow-hidden rounded-full">
              <Image
                src={feed.author.avatar}
                alt={feed.author.name}
                fill
                className="object-cover"
                sizes="48px"
              />
            </div>
            <div>
              <p className="font-semibold text-gray-900 dark:text-white">
                {feed.author.name}
              </p>
              {feed.author.bio && (
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {feed.author.bio}
                </p>
              )}
            </div>
          </div>

          <div className="flex items-center gap-6 text-gray-600 dark:text-gray-400">
            <span className="flex items-center gap-2">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
              {formatNumber(feed.views)}
            </span>
            <span className="flex items-center gap-2">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              {formatNumber(feed.likes)}
            </span>
          </div>
        </div>

        {/* 대표 이미지 */}
        <div className="relative mb-8 aspect-video overflow-hidden rounded-xl">
          <Image
            src={feed.imageUrl}
            alt={feed.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
          />
        </div>

        {/* 본문 내용 */}
        <div
          className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-bold prose-h2:mb-4 prose-h2:mt-8 prose-h2:text-2xl prose-p:mb-4 prose-p:leading-relaxed prose-a:text-blue-600 prose-strong:text-gray-900 dark:prose-strong:text-white"
          dangerouslySetInnerHTML={{ __html: feed.content }}
        />

        {/* 태그 */}
        <div className="mt-8 border-t border-gray-200 pt-6 dark:border-gray-700">
          <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
            태그
          </h3>
          <div className="flex flex-wrap gap-2">
            {feed.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* 공유 버튼 */}
        <div className="mt-8 rounded-lg border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800">
          <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
            이 글이 마음에 드셨나요?
          </h3>
          <div className="flex flex-wrap gap-4">
            <button className="flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700">
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              좋아요
            </button>
            <button className="flex items-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                />
              </svg>
              공유하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
