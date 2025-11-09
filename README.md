# NewsFeed App

Next.js, React, TypeScript를 활용한 현대적인 뉴스피드 애플리케이션입니다.

## 주요 기능

- 반응형 디자인 (모바일, 태블릿, 데스크톱)
- 뉴스피드 목록 및 상세 페이지
- 카테고리별 분류
- 태그 시스템
- 다크 모드 지원
- 최적화된 이미지 로딩
- SEO 친화적 구조

## 기술 스택

### Frontend
- **Next.js 15** - App Router 사용
- **React 18** - 최신 React 기능 활용
- **TypeScript 5** - 타입 안정성
- **Tailwind CSS 3** - 유틸리티 퍼스트 CSS

### 개발 도구
- **ESLint** - 코드 품질 관리
- **Prettier** - 코드 포맷팅
- **PostCSS** - CSS 처리

## 프로젝트 구조

```
react-nextjs/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── feed/[id]/      # 피드 상세 페이지
│   │   ├── about/          # 소개 페이지
│   │   ├── layout.tsx      # 루트 레이아웃
│   │   ├── page.tsx        # 홈 페이지
│   │   └── globals.css     # 전역 스타일
│   ├── components/          # 재사용 가능한 컴포넌트
│   │   ├── common/         # 공통 컴포넌트
│   │   └── feed/           # 피드 관련 컴포넌트
│   ├── types/              # TypeScript 타입 정의
│   ├── lib/                # 유틸리티 함수
│   └── data/               # Mock 데이터
├── public/                 # 정적 파일
└── package.json
```

## 시작하기

### 필수 요구사항

- Node.js 18.17 이상
- npm, yarn, 또는 pnpm

### 설치

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 결과를 확인하세요.

### 빌드

```bash
# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start
```

### 코드 품질

```bash
# ESLint 실행
npm run lint

# Prettier 포맷팅
npm run format
```

## 주요 페이지

- `/` - 뉴스피드 목록
- `/feed/[id]` - 피드 상세 페이지
- `/about` - 소개 페이지

## 개발 방식

이 프로젝트는 실무에서 널리 사용되는 개발 방식을 적용했습니다:

- **컴포넌트 기반 아키텍처**: 재사용 가능하고 유지보수가 쉬운 컴포넌트
- **타입 안정성**: TypeScript로 런타임 에러 방지
- **서버/클라이언트 컴포넌트 분리**: 최적의 성능을 위한 렌더링 전략
- **유틸리티 함수**: 공통 로직의 재사용
- **일관된 코드 스타일**: ESLint와 Prettier 적용
- **모바일 퍼스트**: 반응형 디자인

## 반응형 브레이크포인트

- **xs**: 475px
- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px
- **2xl**: 1536px

## 라이선스

MIT
