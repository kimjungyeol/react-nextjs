import { Feed } from '@/types';

export const mockFeeds: Feed[] = [
  {
    id: '1',
    title: 'Next.js 15의 새로운 기능들',
    excerpt:
      'Next.js 15가 출시되면서 App Router의 성능이 크게 개선되었습니다. 새로운 캐싱 전략과 서버 컴포넌트의 향상된 기능을 확인해보세요.',
    content: `
      <p>Next.js 15는 웹 개발의 새로운 지평을 열었습니다. 이번 버전에서는 다음과 같은 주요 개선사항이 포함되었습니다:</p>

      <h2>주요 기능</h2>
      <ul>
        <li><strong>향상된 App Router</strong>: 더 빠른 라우팅과 개선된 레이아웃 시스템</li>
        <li><strong>서버 컴포넌트 최적화</strong>: 더 나은 성능과 작은 번들 크기</li>
        <li><strong>새로운 캐싱 전략</strong>: 더 효율적인 데이터 관리</li>
        <li><strong>개선된 이미지 최적화</strong>: 자동 WebP 변환 및 레이지 로딩</li>
      </ul>

      <h2>성능 개선</h2>
      <p>벤치마크 테스트 결과 이전 버전 대비 40% 이상의 성능 향상이 있었습니다. 특히 초기 페이지 로딩 속도가 크게 개선되었습니다.</p>

      <h2>개발자 경험</h2>
      <p>TypeScript 지원이 강화되었으며, 더 나은 타입 추론과 자동완성 기능이 제공됩니다.</p>
    `,
    author: {
      id: 'author-1',
      name: '김철수',
      avatar: 'https://via.placeholder.com/100',
      bio: '프론트엔드 개발자, Next.js 전문가',
    },
    category: '기술',
    imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800',
    createdAt: '2024-11-08T10:00:00Z',
    updatedAt: '2024-11-08T10:00:00Z',
    views: 1250,
    likes: 89,
    tags: ['Next.js', 'React', 'Web Development'],
  },
  {
    id: '2',
    title: 'TypeScript 5.3의 혁신적인 기능',
    excerpt:
      'TypeScript 5.3이 출시되었습니다. 새로운 타입 시스템과 개선된 성능을 경험해보세요.',
    content: `
      <p>TypeScript 5.3은 개발자들이 기다려온 많은 기능을 포함하고 있습니다.</p>

      <h2>새로운 기능</h2>
      <ul>
        <li><strong>Import Attributes</strong>: JSON 모듈 임포트 개선</li>
        <li><strong>Resolution 모드</strong>: 더 나은 모듈 해석</li>
        <li><strong>타입 좁히기 개선</strong>: 더 스마트한 타입 추론</li>
      </ul>
    `,
    author: {
      id: 'author-2',
      name: '이영희',
      avatar: 'https://via.placeholder.com/100',
      bio: 'TypeScript 컨트리뷰터',
    },
    category: '기술',
    imageUrl: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800',
    createdAt: '2024-11-07T14:30:00Z',
    updatedAt: '2024-11-07T14:30:00Z',
    views: 980,
    likes: 67,
    tags: ['TypeScript', 'Programming'],
  },
  {
    id: '3',
    title: '모바일 퍼스트 디자인의 중요성',
    excerpt:
      '2024년 현재 모바일 트래픽이 전체의 70%를 차지합니다. 모바일 퍼스트 접근법이 왜 중요한지 알아봅니다.',
    content: `
      <p>모바일 기기의 보급률이 증가하면서 웹 트래픽의 대부분이 모바일에서 발생하고 있습니다.</p>

      <h2>모바일 퍼스트란?</h2>
      <p>작은 화면부터 디자인을 시작하여 점진적으로 큰 화면으로 확장하는 방법론입니다.</p>

      <h2>주요 이점</h2>
      <ul>
        <li>더 나은 사용자 경험</li>
        <li>향상된 성능</li>
        <li>SEO 최적화</li>
      </ul>
    `,
    author: {
      id: 'author-3',
      name: '박민수',
      avatar: 'https://via.placeholder.com/100',
      bio: 'UX/UI 디자이너',
    },
    category: '디자인',
    imageUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800',
    createdAt: '2024-11-06T09:15:00Z',
    updatedAt: '2024-11-06T09:15:00Z',
    views: 1540,
    likes: 123,
    tags: ['Mobile', 'Design', 'UX'],
  },
  {
    id: '4',
    title: 'Tailwind CSS로 빠른 UI 개발하기',
    excerpt:
      'Tailwind CSS를 사용하면 커스텀 CSS 없이도 아름다운 UI를 빠르게 구축할 수 있습니다.',
    content: `
      <p>Tailwind CSS는 유틸리티 퍼스트 CSS 프레임워크로, 빠른 개발과 일관된 디자인을 가능하게 합니다.</p>

      <h2>장점</h2>
      <ul>
        <li>빠른 개발 속도</li>
        <li>작은 번들 크기</li>
        <li>높은 커스터마이징 가능성</li>
        <li>반응형 디자인 간편화</li>
      </ul>

      <h2>실무 활용</h2>
      <p>많은 스타트업과 대기업에서 Tailwind CSS를 채택하여 생산성을 높이고 있습니다.</p>
    `,
    author: {
      id: 'author-1',
      name: '김철수',
      avatar: 'https://via.placeholder.com/100',
      bio: '프론트엔드 개발자, Next.js 전문가',
    },
    category: '기술',
    imageUrl: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800',
    createdAt: '2024-11-05T16:45:00Z',
    updatedAt: '2024-11-05T16:45:00Z',
    views: 890,
    likes: 54,
    tags: ['CSS', 'Tailwind', 'Web Development'],
  },
  {
    id: '5',
    title: 'React Server Components 완벽 가이드',
    excerpt:
      'React Server Components가 웹 개발의 패러다임을 바꾸고 있습니다. 개념부터 실전 활용까지 알아봅니다.',
    content: `
      <p>React Server Components는 React 18에서 도입된 혁신적인 기능입니다.</p>

      <h2>핵심 개념</h2>
      <ul>
        <li>서버에서 렌더링되는 컴포넌트</li>
        <li>제로 번들 크기</li>
        <li>서버 리소스 직접 접근</li>
      </ul>

      <h2>사용 사례</h2>
      <p>데이터베이스 쿼리, 파일 시스템 접근 등 서버 리소스가 필요한 경우 유용합니다.</p>
    `,
    author: {
      id: 'author-2',
      name: '이영희',
      avatar: 'https://via.placeholder.com/100',
      bio: 'TypeScript 컨트리뷰터',
    },
    category: '기술',
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800',
    createdAt: '2024-11-04T11:20:00Z',
    updatedAt: '2024-11-04T11:20:00Z',
    views: 2100,
    likes: 156,
    tags: ['React', 'Server Components', 'Web Development'],
  },
  {
    id: '6',
    title: '웹 성능 최적화 베스트 프랙티스',
    excerpt:
      '웹사이트 로딩 속도를 개선하는 실용적인 방법들을 소개합니다.',
    content: `
      <p>웹 성능은 사용자 경험과 SEO에 직접적인 영향을 미칩니다.</p>

      <h2>최적화 전략</h2>
      <ul>
        <li>이미지 최적화 및 레이지 로딩</li>
        <li>코드 스플리팅</li>
        <li>캐싱 전략</li>
        <li>CDN 활용</li>
      </ul>

      <h2>측정 도구</h2>
      <p>Lighthouse, WebPageTest 등을 활용하여 성능을 측정하고 개선할 수 있습니다.</p>
    `,
    author: {
      id: 'author-3',
      name: '박민수',
      avatar: 'https://via.placeholder.com/100',
      bio: 'UX/UI 디자이너',
    },
    category: '성능',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
    createdAt: '2024-11-03T13:00:00Z',
    updatedAt: '2024-11-03T13:00:00Z',
    views: 1680,
    likes: 92,
    tags: ['Performance', 'Optimization', 'Web'],
  },
];

export function getFeedById(id: string): Feed | undefined {
  return mockFeeds.find((feed) => feed.id === id);
}

export function getFeedsByCategory(category: string): Feed[] {
  return mockFeeds.filter((feed) => feed.category === category);
}

export function getFeedsByTag(tag: string): Feed[] {
  return mockFeeds.filter((feed) => feed.tags.includes(tag));
}
