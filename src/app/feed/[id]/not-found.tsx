import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container-custom flex min-h-[60vh] flex-col items-center justify-center py-16">
      <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
        피드를 찾을 수 없습니다
      </h2>
      <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">
        요청하신 피드가 존재하지 않거나 삭제되었습니다.
      </p>
      <Link
        href="/"
        className="rounded-md bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700"
      >
        홈으로 돌아가기
      </Link>
    </div>
  );
}
