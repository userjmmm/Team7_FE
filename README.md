# Team7_FE
인플레이스

### 폴더 구조 설명
```bash
.root
├── node_modules
├── public
├── src
│   ├── api
│   │   ├── hooks       // api 호출과 관련된 custom hook
│   │   ├── instance    // 기본 api의 axios instance
│   ├── assets          // 이미지, 폰트 등 미디어 파일
│   ├── components      // 주요 컴포넌트
│   │   ├── common    // 여러 페이지에서 공통으로 사용되는 컴포넌트
│   │   ├── Main    // 페이지별 사용되는 컴포넌트
│   │   ├── Influencer    // 페이지별 사용되는 컴포넌트
│   ├── provider
│   │   ├── Auth    // 사용자 정보 전역 상태로 관리
│   ├── hooks           // 커스텀 훅
│   ├── pages           // 페이지 컴포넌트
│   └── utils           // 공통함수, 상수 등
└── └── types           // 타입
```