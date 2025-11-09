# 프로젝트 세팅 상세 가이드

## 목차
1. [프로젝트 개요](#프로젝트-개요)
2. [기술 스택](#기술-스택)
3. [프로젝트 구조](#프로젝트-구조)
4. [설정 파일](#설정-파일)
5. [컴포넌트 상세](#컴포넌트-상세)
6. [페이지 상세](#페이지-상세)
7. [타입 시스템](#타입-시스템)
8. [유틸리티 함수](#유틸리티-함수)
9. [Mock 데이터](#mock-데이터)
10. [스타일링](#스타일링)
11. [개발 가이드](#개발-가이드)

---

## 프로젝트 개요

Next.js 15, React 18, TypeScript 5를 기반으로 구축된 현대적인 뉴스피드 애플리케이션입니다.

### 주요 특징
- **App Router 사용**: Next.js 13+ 의 App Router를 활용한 파일 기반 라우팅
- **Server Components**: 서버 컴포넌트를 활용한 최적화된 렌더링
- **TypeScript**: 타입 안정성을 통한 버그 방지
- **Tailwind CSS**: 유틸리티 퍼스트 CSS로 빠른 UI 개발
- **반응형 디자인**: 모바일 퍼스트 접근으로 모든 디바이스 지원
- **다크 모드**: 시스템 테마 설정에 따른 자동 전환
- **SEO 최적화**: 메타데이터 API를 활용한 검색 엔진 최적화

---

## 기술 스택

### Core Dependencies

#### Next.js 15.0.3
- **App Router**: 파일 시스템 기반 라우팅
- **Server Components**: 기본 서버 컴포넌트 렌더링
- **Image Optimization**: 자동 이미지 최적화 및 레이지 로딩
- **Metadata API**: SEO를 위한 메타데이터 관리

#### React 18.3.1
- **Server/Client Components**: 하이브리드 렌더링
- **Suspense**: 로딩 상태 관리
- **Hooks**: useState, useEffect 등 React 훅 활용

#### TypeScript 5
- **엄격한 타입 체크**: strict 모드 활성화
- **타입 추론**: 자동 타입 추론으로 생산성 향상
- **인터페이스 정의**: Feed, Author 등 비즈니스 로직 타입화

### Styling

#### Tailwind CSS 3.4.1
- **유틸리티 클래스**: 빠른 스타일링
- **커스텀 설정**: 프로젝트에 맞는 테마 확장
- **반응형 디자인**: 브레이크포인트 기반 레이아웃
- **다크 모드**: 자동 다크 모드 지원

#### PostCSS & Autoprefixer
- **벤더 프리픽스**: 자동 크로스 브라우저 지원
- **CSS 최적화**: 빌드 시 CSS 최소화

### Development Tools

#### ESLint 9
- **Next.js 규칙**: next/core-web-vitals 설정
- **TypeScript 규칙**: @typescript-eslint 플러그인
- **코드 품질**: 잠재적 버그 사전 방지

#### Prettier 3.3.3
- **코드 포맷팅**: 일관된 코드 스타일
- **Tailwind 플러그인**: Tailwind 클래스 자동 정렬
- **자동 포맷팅**: 저장 시 자동 포맷 적용 가능

---

## 프로젝트 구조

```
react-nextjs/
├── src/                          # 소스 코드 디렉토리
│   ├── app/                      # Next.js App Router
│   │   ├── feed/                 # 피드 관련 페이지
│   │   │   └── [id]/            # 동적 라우팅
│   │   │       ├── page.tsx     # 피드 상세 페이지
│   │   │       └── not-found.tsx # 404 페이지
│   │   ├── about/               # 소개 페이지
│   │   │   └── page.tsx
│   │   ├── layout.tsx           # 루트 레이아웃
│   │   ├── page.tsx             # 홈 페이지 (피드 목록)
│   │   └── globals.css          # 전역 스타일
│   │
│   ├── components/              # 재사용 가능한 컴포넌트
│   │   ├── common/              # 공통 컴포넌트
│   │   │   ├── Header.tsx       # 헤더 네비게이션
│   │   │   ├── Footer.tsx       # 푸터
│   │   │   └── Loading.tsx      # 로딩 스피너
│   │   └── feed/                # 피드 관련 컴포넌트
│   │       ├── FeedCard.tsx     # 피드 카드
│   │       └── FeedList.tsx     # 피드 목록
│   │
│   ├── types/                   # TypeScript 타입 정의
│   │   ├── feed.ts              # Feed 관련 타입
│   │   └── index.ts             # 타입 재수출
│   │
│   ├── lib/                     # 유틸리티 함수
│   │   └── utils.ts             # 공통 유틸리티
│   │
│   └── data/                    # 데이터
│       └── mockFeeds.ts         # Mock 피드 데이터
│
├── public/                      # 정적 파일
│   └── images/                  # 이미지 저장소
│
├── .eslintrc.json              # ESLint 설정
├── .prettierrc                 # Prettier 설정
├── .gitignore                  # Git 무시 파일
├── next.config.ts              # Next.js 설정
├── tailwind.config.ts          # Tailwind CSS 설정
├── tsconfig.json               # TypeScript 설정
├── postcss.config.mjs          # PostCSS 설정
├── package.json                # 의존성 관리
└── README.md                   # 프로젝트 소개
```

---

## 설정 파일

### 1. package.json

```json
{
  "name": "react-nextjs-newsfeed",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",          // 개발 서버 실행 (포트 3000)
    "build": "next build",      // 프로덕션 빌드
    "start": "next start",      // 프로덕션 서버 실행
    "lint": "next lint",        // ESLint 실행
    "format": "prettier --write" // Prettier 포맷팅
  }
}
```

**주요 스크립트 설명:**
- `dev`: 핫 리로드가 지원되는 개발 서버 실행
- `build`: 정적 최적화 및 번들링
- `start`: 빌드된 애플리케이션 실행
- `lint`: 코드 품질 검사
- `format`: 코드 스타일 자동 정리

### 2. next.config.ts

```typescript
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,  // React Strict Mode 활성화
  images: {
    domains: [           // 외부 이미지 도메인 허용
      'images.unsplash.com',
      'via.placeholder.com'
    ],
  },
};
```

**설정 설명:**
- `reactStrictMode`: 개발 중 잠재적 문제 감지
- `images.domains`: Next.js Image 컴포넌트에서 사용 가능한 외부 도메인

### 3. tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2020",           // ECMAScript 타겟 버전
    "lib": ["dom", "esnext"],     // 사용 가능한 라이브러리
    "strict": true,               // 엄격한 타입 체크
    "esModuleInterop": true,      // CommonJS 호환성
    "module": "esnext",           // 모듈 시스템
    "moduleResolution": "bundler", // 모듈 해석 전략
    "jsx": "preserve",            // JSX 변환 방식
    "paths": {
      "@/*": ["./src/*"]          // 절대 경로 임포트
    }
  }
}
```

**주요 옵션:**
- `strict`: 모든 엄격한 타입 검사 옵션 활성화
- `paths`: `@/` 별칭으로 src 디렉토리 참조 가능

### 4. tailwind.config.ts

```typescript
{
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'xs': '475px',  // 추가 브레이크포인트
      },
    },
  },
}
```

**브레이크포인트:**
- `xs`: 475px (커스텀)
- `sm`: 640px (기본)
- `md`: 768px (기본)
- `lg`: 1024px (기본)
- `xl`: 1280px (기본)
- `2xl`: 1536px (기본)

### 5. .eslintrc.json

```json
{
  "extends": [
    "next/core-web-vitals",    // Next.js 권장 규칙
    "next/typescript"          // TypeScript 규칙
  ],
  "rules": {
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/no-explicit-any": "warn"
  }
}
```

### 6. .prettierrc

```json
{
  "semi": true,                // 세미콜론 사용
  "trailingComma": "all",      // 후행 쉼표
  "singleQuote": true,         // 싱글 쿼트 사용
  "printWidth": 80,            // 줄 길이 제한
  "tabWidth": 2,               // 탭 크기
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

---

## 컴포넌트 상세

### 1. Header 컴포넌트
**경로:** `src/components/common/Header.tsx`

**기능:**
- 고정 헤더 (sticky top-0)
- 로고 및 네비게이션 링크
- 반응형 레이아웃

**구현 특징:**
```typescript
// Sticky 헤더로 스크롤 시에도 상단 고정
className="sticky top-0 z-50"

// Next.js Link 컴포넌트 사용 (클라이언트 사이드 라우팅)
import Link from 'next/link';
```

**스타일링:**
- `container-custom`: 최대 너비 및 패딩 설정
- 다크 모드 지원 (`dark:` 클래스)
- 호버 효과 (`hover:` 클래스)

### 2. Footer 컴포넌트
**경로:** `src/components/common/Footer.tsx`

**기능:**
- 3단 그리드 레이아웃 (md 이상)
- 회사 정보, 링크, 연락처
- 저작권 표시

**구현 특징:**
```typescript
// Link 컴포넌트 사용 (ESLint 규칙 준수)
<Link href="/" className="...">홈</Link>

// 반응형 그리드
className="grid grid-cols-1 md:grid-cols-3"
```

### 3. Loading 컴포넌트
**경로:** `src/components/common/Loading.tsx`

**기능:**
- 애니메이션 스피너
- 중앙 정렬 레이아웃

**구현 특징:**
```typescript
// Tailwind 애니메이션
className="animate-spin"

// Flexbox 중앙 정렬
className="flex min-h-screen items-center justify-center"
```

### 4. FeedCard 컴포넌트
**경로:** `src/components/feed/FeedCard.tsx`

**기능:**
- 피드 데이터 카드 형태로 표시
- 이미지, 제목, 요약, 작성자, 통계 정보
- 호버 효과

**Props:**
```typescript
interface FeedCardProps {
  feed: Feed;  // Feed 타입의 피드 데이터
}
```

**주요 구현:**
```typescript
// Next.js Image 최적화
<Image
  src={feed.imageUrl}
  alt={feed.title}
  fill
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>

// 텍스트 줄 수 제한
className="line-clamp-2"  // 2줄 제한
className="line-clamp-3"  // 3줄 제한

// 호버 시 이미지 확대
className="group-hover:scale-105"
```

**반응형 디자인:**
- 모바일: 카드 전체 너비
- 태블릿: 2열 그리드
- 데스크톱: 3열 그리드

### 5. FeedList 컴포넌트
**경로:** `src/components/feed/FeedList.tsx`

**기능:**
- 피드 배열을 그리드로 표시
- 빈 상태 처리

**Props:**
```typescript
interface FeedListProps {
  feeds: Feed[];  // Feed 배열
}
```

**주요 구현:**
```typescript
// 빈 상태 처리
if (feeds.length === 0) {
  return <div>표시할 피드가 없습니다.</div>;
}

// 그리드 레이아웃
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
```

---

## 페이지 상세

### 1. 루트 레이아웃
**경로:** `src/app/layout.tsx`

**역할:**
- 모든 페이지의 공통 레이아웃
- HTML 구조 정의
- 전역 스타일 임포트

**구현:**
```typescript
export const metadata: Metadata = {
  title: 'NewsFeed App',
  description: '...',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
```

**특징:**
- Flexbox를 활용한 Sticky Footer 패턴
- `lang="ko"`: 한국어 설정
- `min-h-screen`: 전체 화면 높이

### 2. 홈 페이지
**경로:** `src/app/page.tsx`

**기능:**
- 뉴스피드 목록 표시
- 제목 및 설명

**구현:**
```typescript
import FeedList from '@/components/feed/FeedList';
import { mockFeeds } from '@/data/mockFeeds';

export default function Home() {
  return (
    <div className="container-custom py-8">
      <h1>최신 뉴스피드</h1>
      <FeedList feeds={mockFeeds} />
    </div>
  );
}
```

**특징:**
- Server Component (기본)
- Mock 데이터 직접 임포트
- SEO 친화적 제목

### 3. 피드 상세 페이지
**경로:** `src/app/feed/[id]/page.tsx`

**기능:**
- 개별 피드 상세 정보 표시
- 동적 라우팅 (`[id]`)
- 메타데이터 생성

**Props:**
```typescript
interface FeedDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}
```

**메타데이터 생성:**
```typescript
export async function generateMetadata({ params }: FeedDetailPageProps) {
  const { id } = await params;
  const feed = getFeedById(id);

  return {
    title: `${feed.title} - NewsFeed App`,
    description: feed.excerpt,
  };
}
```

**주요 섹션:**
1. **뒤로가기 버튼**: 목록으로 이동
2. **메타 정보**: 카테고리, 작성일
3. **제목**: 큰 폰트로 강조
4. **작성자 정보**: 아바타, 이름, 바이오
5. **통계**: 조회수, 좋아요
6. **대표 이미지**: 최적화된 이미지
7. **본문**: HTML 렌더링
8. **태그**: 관련 태그 목록
9. **액션 버튼**: 좋아요, 공유

**보안 주의:**
```typescript
// dangerouslySetInnerHTML 사용 시 주의
// Mock 데이터이므로 안전하지만, 실제 환경에서는
// 서버 사이드에서 sanitize 필요
<div dangerouslySetInnerHTML={{ __html: feed.content }} />
```

### 4. 404 페이지
**경로:** `src/app/feed/[id]/not-found.tsx`

**기능:**
- 존재하지 않는 피드 처리
- 홈으로 돌아가기 버튼

**사용법:**
```typescript
// page.tsx에서 호출
import { notFound } from 'next/navigation';

if (!feed) {
  notFound();  // not-found.tsx 렌더링
}
```

### 5. 소개 페이지
**경로:** `src/app/about/page.tsx`

**기능:**
- 프로젝트 소개
- 기술 스택 설명
- 개발 방식 안내

**메타데이터:**
```typescript
export const metadata: Metadata = {
  title: '소개 - NewsFeed App',
  description: 'NewsFeed App에 대해 알아보세요',
};
```

---

## 타입 시스템

### Feed 타입
**경로:** `src/types/feed.ts`

```typescript
export interface Feed {
  id: string;              // 고유 식별자
  title: string;           // 제목
  content: string;         // 본문 (HTML)
  excerpt: string;         // 요약
  author: Author;          // 작성자 정보
  category: string;        // 카테고리
  imageUrl: string;        // 대표 이미지 URL
  createdAt: string;       // 작성일 (ISO 8601)
  updatedAt: string;       // 수정일 (ISO 8601)
  views: number;           // 조회수
  likes: number;           // 좋아요 수
  tags: string[];          // 태그 배열
}
```

### Author 타입
```typescript
export interface Author {
  id: string;              // 작성자 ID
  name: string;            // 이름
  avatar: string;          // 아바타 이미지 URL
  bio?: string;            // 소개 (선택)
}
```

### Component Props 타입
```typescript
export interface FeedCardProps {
  feed: Feed;
}

export interface FeedListProps {
  feeds: Feed[];
}
```

**타입 재수출:**
```typescript
// src/types/index.ts
export type { Feed, Author, FeedCardProps, FeedListProps } from './feed';
```

---

## 유틸리티 함수

**경로:** `src/lib/utils.ts`

### 1. formatDate
날짜를 상대적 시간으로 변환

```typescript
formatDate('2024-11-08T10:00:00Z')
// '방금 전', '2시간 전', '3일 전', '2024년 11월 8일'
```

**로직:**
- 1시간 이내: "방금 전"
- 24시간 이내: "N시간 전"
- 7일 이내: "N일 전"
- 그 외: 전체 날짜

### 2. formatNumber
숫자를 간략한 형태로 변환

```typescript
formatNumber(1500)   // '1.5K'
formatNumber(2500000) // '2.5M'
formatNumber(999)    // '999'
```

**로직:**
- 1,000,000 이상: "N.NM"
- 1,000 이상: "N.NK"
- 그 외: 그대로 표시

### 3. truncateText
텍스트를 지정 길이로 자르기

```typescript
truncateText('긴 텍스트입니다', 5)
// '긴 텍스...'
```

### 4. cn (classNames)
조건부 클래스명 결합

```typescript
cn('base-class', isActive && 'active-class', null, false)
// 'base-class active-class'
```

**사용 예시:**
```typescript
className={cn(
  'btn',
  isPrimary && 'btn-primary',
  isDisabled && 'opacity-50'
)}
```

---

## Mock 데이터

**경로:** `src/data/mockFeeds.ts`

### 데이터 구조
6개의 샘플 피드 제공:
1. Next.js 15의 새로운 기능들
2. TypeScript 5.3의 혁신적인 기능
3. 모바일 퍼스트 디자인의 중요성
4. Tailwind CSS로 빠른 UI 개발하기
5. React Server Components 완벽 가이드
6. 웹 성능 최적화 베스트 프랙티스

### 유틸리티 함수

#### getFeedById
```typescript
getFeedById('1')  // id가 1인 피드 반환
```

#### getFeedsByCategory
```typescript
getFeedsByCategory('기술')  // 기술 카테고리 피드 배열
```

#### getFeedsByTag
```typescript
getFeedsByTag('React')  // React 태그가 있는 피드 배열
```

### 실제 API 연동 시
```typescript
// mockFeeds.ts 대신 API 호출
async function getFeeds() {
  const res = await fetch('https://api.example.com/feeds');
  return res.json();
}
```

---

## 스타일링

### 전역 스타일
**경로:** `src/app/globals.css`

#### CSS 변수
```css
:root {
  --background: #ffffff;
  --foreground: #171717;
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}
```

#### 커스텀 컴포넌트 클래스
```css
.container-custom {
  @apply mx-auto max-w-7xl px-4 sm:px-6 lg:px-8;
}

.card {
  @apply rounded-lg border border-gray-200 bg-white p-6
         shadow-sm transition-shadow hover:shadow-md
         dark:border-gray-700 dark:bg-gray-800;
}

.btn-primary {
  @apply rounded-md bg-blue-600 px-4 py-2 text-white
         transition-colors hover:bg-blue-700
         focus:outline-none focus:ring-2 focus:ring-blue-500;
}
```

### Tailwind 유틸리티

#### 반응형 디자인
```typescript
// 모바일: 1열, 태블릿: 2열, 데스크톱: 3열
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"

// 모바일: 숨김, 데스크톱: 표시
className="hidden lg:block"
```

#### 다크 모드
```typescript
// 라이트: 흰 배경, 다크: 회색 배경
className="bg-white dark:bg-gray-800"

// 라이트: 검정 텍스트, 다크: 흰 텍스트
className="text-gray-900 dark:text-white"
```

#### 상태 기반 스타일
```typescript
// 호버
className="hover:bg-blue-700"

// 포커스
className="focus:ring-2 focus:ring-blue-500"

// 그룹 호버
className="group-hover:scale-105"
```

---

## 개발 가이드

### 1. 개발 환경 설정

```bash
# 저장소 클론
git clone <repository-url>
cd react-nextjs

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

### 2. 새로운 페이지 추가

```bash
# 1. 페이지 디렉토리 생성
mkdir -p src/app/new-page

# 2. page.tsx 생성
touch src/app/new-page/page.tsx
```

```typescript
// src/app/new-page/page.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '새 페이지 - NewsFeed App',
  description: '새 페이지 설명',
};

export default function NewPage() {
  return (
    <div className="container-custom py-8">
      <h1>새 페이지</h1>
    </div>
  );
}
```

### 3. 새로운 컴포넌트 추가

```typescript
// src/components/common/NewComponent.tsx
interface NewComponentProps {
  title: string;
  description?: string;
}

export default function NewComponent({
  title,
  description
}: NewComponentProps) {
  return (
    <div className="card">
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
```

### 4. 타입 정의 추가

```typescript
// src/types/newType.ts
export interface NewType {
  id: string;
  name: string;
}

// src/types/index.ts에 추가
export type { NewType } from './newType';
```

### 5. API 라우트 추가 (선택)

```typescript
// src/app/api/feeds/route.ts
import { NextResponse } from 'next/server';
import { mockFeeds } from '@/data/mockFeeds';

export async function GET() {
  return NextResponse.json(mockFeeds);
}
```

### 6. 환경 변수 사용

```bash
# .env.local 파일 생성
NEXT_PUBLIC_API_URL=https://api.example.com
API_SECRET=your-secret-key
```

```typescript
// 클라이언트 사이드 (NEXT_PUBLIC_ 접두사 필요)
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

// 서버 사이드
const apiSecret = process.env.API_SECRET;
```

### 7. 코드 품질 유지

```bash
# ESLint 실행
npm run lint

# Prettier 포맷팅
npm run format

# TypeScript 타입 체크
npx tsc --noEmit
```

### 8. 빌드 및 배포

```bash
# 프로덕션 빌드
npm run build

# 빌드 결과 확인
npm start

# Vercel 배포 (권장)
vercel deploy
```

### 9. 성능 최적화 체크리스트

- [ ] Image 컴포넌트 사용 (자동 최적화)
- [ ] 동적 임포트 활용 (코드 스플리팅)
- [ ] Server Component 우선 사용
- [ ] 메타데이터 최적화 (SEO)
- [ ] 불필요한 리렌더링 방지
- [ ] 캐싱 전략 적용

### 10. 디버깅 팁

```typescript
// 서버 컴포넌트 로그 (터미널에 출력)
console.log('Server Component:', data);

// 클라이언트 컴포넌트 로그 (브라우저 콘솔)
'use client';
console.log('Client Component:', data);

// React DevTools 사용
// Chrome 확장 프로그램 설치
```

---

## 실무 개발 패턴

### 1. 컴포넌트 분리 원칙

**Presentational vs Container**
```typescript
// Presentational Component (UI만 담당)
export function FeedCard({ feed }: FeedCardProps) {
  return <div>...</div>;
}

// Container Component (로직 + UI)
export default function FeedListContainer() {
  const feeds = await fetchFeeds();
  return <FeedList feeds={feeds} />;
}
```

### 2. 에러 처리

```typescript
// error.tsx (에러 경계)
'use client';

export default function Error({
  error,
  reset
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <h2>오류가 발생했습니다</h2>
      <button onClick={reset}>다시 시도</button>
    </div>
  );
}
```

### 3. 로딩 상태

```typescript
// loading.tsx (Suspense 경계)
export default function Loading() {
  return <LoadingSpinner />;
}
```

### 4. 재사용 가능한 훅

```typescript
// src/hooks/useFeeds.ts
export function useFeeds() {
  const [feeds, setFeeds] = useState<Feed[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFeeds().then(setFeeds).finally(() => setLoading(false));
  }, []);

  return { feeds, loading };
}
```

---

## 트러블슈팅

### 1. 이미지 로드 실패

**문제:** External 이미지가 로드되지 않음

**해결:**
```typescript
// next.config.ts에 도메인 추가
images: {
  domains: ['your-image-domain.com'],
}
```

### 2. Hydration 에러

**문제:** 서버와 클라이언트 렌더링 불일치

**해결:**
```typescript
// 클라이언트 전용 렌더링
'use client';
import { useEffect, useState } from 'react';

export default function ClientOnly({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return <>{children}</>;
}
```

### 3. 타입 에러

**문제:** TypeScript 타입 불일치

**해결:**
```typescript
// 명시적 타입 정의
const feed: Feed = {
  id: '1',
  // ... 모든 필드 포함
};

// 타입 가드 사용
function isFeed(obj: unknown): obj is Feed {
  return typeof obj === 'object' && obj !== null && 'id' in obj;
}
```

---

## 참고 자료

### 공식 문서
- [Next.js 공식 문서](https://nextjs.org/docs)
- [React 공식 문서](https://react.dev)
- [TypeScript 공식 문서](https://www.typescriptlang.org/docs)
- [Tailwind CSS 공식 문서](https://tailwindcss.com/docs)

### 커뮤니티
- [Next.js GitHub Discussions](https://github.com/vercel/next.js/discussions)
- [React Community](https://react.dev/community)
- [Tailwind CSS Discord](https://tailwindcss.com/discord)

### 학습 자료
- [Next.js Learn](https://nextjs.org/learn)
- [React Tutorial](https://react.dev/learn)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

---

## 라이선스

MIT License - 자유롭게 사용, 수정, 배포 가능합니다.

---

**작성일:** 2024-11-09
**버전:** 1.0.0
**작성자:** Claude AI Assistant
