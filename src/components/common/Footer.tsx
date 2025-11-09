import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-900">
      <div className="container-custom py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
              NewsFeed App
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              최신 뉴스와 트렌드를 한눈에 확인하세요.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
              링크
            </h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <Link
                  href="/"
                  className="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                >
                  홈
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                >
                  소개
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
              연락처
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              이메일: info@newsfeed.com
            </p>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-8 text-center text-sm text-gray-600 dark:border-gray-700 dark:text-gray-400">
          <p>&copy; 2024 NewsFeed App. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
