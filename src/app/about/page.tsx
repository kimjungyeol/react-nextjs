import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '소개 - NewsFeed App',
  description: 'NewsFeed App에 대해 알아보세요',
};

export default function AboutPage() {
  return (
    <div className="container-custom py-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-8 text-4xl font-bold text-gray-900 dark:text-white">
          NewsFeed App 소개
        </h1>

        <div className="space-y-6 text-gray-700 dark:text-gray-300">
          <section>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
              프로젝트 개요
            </h2>
            <p className="leading-relaxed">
              NewsFeed App은 Next.js 15, React, TypeScript를 활용하여 구축된
              현대적인 뉴스피드 애플리케이션입니다. 반응형 디자인으로 모든
              기기에서 최적의 사용자 경험을 제공합니다.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
              주요 기능
            </h2>
            <ul className="list-inside list-disc space-y-2 leading-relaxed">
              <li>반응형 디자인으로 모바일, 태블릿, 데스크톱 지원</li>
              <li>뉴스피드 목록 보기 및 상세 페이지</li>
              <li>카테고리별 분류 및 태그 시스템</li>
              <li>다크 모드 지원</li>
              <li>최적화된 이미지 로딩</li>
              <li>SEO 친화적인 구조</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
              기술 스택
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">
                  Frontend
                </h3>
                <ul className="space-y-1 text-sm">
                  <li>Next.js 15 (App Router)</li>
                  <li>React 18</li>
                  <li>TypeScript 5</li>
                  <li>Tailwind CSS 3</li>
                </ul>
              </div>
              <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
                <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">
                  도구
                </h3>
                <ul className="space-y-1 text-sm">
                  <li>ESLint</li>
                  <li>Prettier</li>
                  <li>PostCSS</li>
                  <li>Git</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
              개발 방식
            </h2>
            <p className="leading-relaxed">
              이 프로젝트는 실무에서 널리 사용되는 개발 방식을 적용했습니다:
            </p>
            <ul className="mt-4 list-inside list-disc space-y-2 leading-relaxed">
              <li>컴포넌트 기반 아키텍처</li>
              <li>타입 안정성을 위한 TypeScript</li>
              <li>서버 컴포넌트와 클라이언트 컴포넌트 분리</li>
              <li>재사용 가능한 유틸리티 함수</li>
              <li>일관된 코드 스타일 (ESLint, Prettier)</li>
              <li>모바일 퍼스트 반응형 디자인</li>
            </ul>
          </section>

          <section className="rounded-lg border border-blue-200 bg-blue-50 p-6 dark:border-blue-800 dark:bg-blue-900/20">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
              연락처
            </h2>
            <p className="leading-relaxed">
              프로젝트에 대한 문의사항이나 피드백이 있으시면 언제든지
              연락해주세요.
            </p>
            <p className="mt-4 font-medium">이메일: info@newsfeed.com</p>
          </section>
        </div>
      </div>
    </div>
  );
}
