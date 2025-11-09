import Link from 'next/link';
import Image from 'next/image';
import { FeedCardProps } from '@/types';
import { formatDate, formatNumber } from '@/lib/utils';

export default function FeedCard({ feed }: FeedCardProps) {
  return (
    <article className="card group">
      <Link href={`/feed/${feed.id}`} className="block">
        <div className="relative mb-4 aspect-video overflow-hidden rounded-lg">
          <Image
            src={feed.imageUrl}
            alt={feed.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200">
              {feed.category}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {formatDate(feed.createdAt)}
            </span>
          </div>

          <h2 className="line-clamp-2 text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
            {feed.title}
          </h2>

          <p className="line-clamp-3 text-gray-600 dark:text-gray-300">
            {feed.excerpt}
          </p>

          <div className="flex items-center justify-between border-t border-gray-200 pt-3 dark:border-gray-700">
            <div className="flex items-center gap-3">
              <div className="relative h-8 w-8 overflow-hidden rounded-full">
                <Image
                  src={feed.author.avatar}
                  alt={feed.author.name}
                  fill
                  className="object-cover"
                  sizes="32px"
                />
              </div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {feed.author.name}
              </span>
            </div>

            <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
              <span className="flex items-center gap-1">
                <svg
                  className="h-4 w-4"
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
              <span className="flex items-center gap-1">
                <svg
                  className="h-4 w-4"
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

          <div className="flex flex-wrap gap-2">
            {feed.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs text-gray-500 dark:text-gray-400"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </article>
  );
}
