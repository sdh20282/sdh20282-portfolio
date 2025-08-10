export const careerDetail = {
  'insert': {
    name: 'INSERT',
    description: '일평균 방문자 수 약 800명의, 암호화폐 관련 데이터를 실시간으로 확인할 수 있는 서비스',
    role: '사원 • IT 개발팀',
    position: '정규직',
    period: {
      from: '2025.04',
      to: '',
    },
    workSummaries: [
      '프론트엔드 서비스 안정화 및 최적화',
      '백엔드 서비스 안정화 및 운영',
      '브랜드별 홈페이지 개발 및 유지보수',
    ],
    works: [
      {
        title: '프론트엔드 서비스 안정화 및 최적화',
        description: '암호화폐 관련 다양한 정보를 실시간으로 확인할 수 있는 서비스',
        period: {
          from: '2025.04',
          to: '',
        },
        details: [
          {
            main: 'Next.js 프론트엔드 코드 구조 및 렌더링 로직 최적화로 사용자 응답 지연 시간 최대 90% 단축 및 메모리 누수 문제 해결',
            subs: [],
          },
          {
            main: 'Next.js + PM2 환경에서 발생하는 청크 서빙 문제 해결',
            subs: [],
          },
          {
            main: 'TanStack-Query를 활용하여 api 호출 전략 수립, 불필요한 api 호출 방지 및 트래픽 최적화를 통해 서버 트래픽 약 70% 절감',
            subs: [],
          },
          {
            main: 'mutation 표준화를 통해 반복 코드 제거 및 자동화, 기능 추가 시 코드 변경 범위 최소화',
            subs: [],
          },
          {
            main: '반응형 설계를 통해 모바일/데스크탑 환경 대응 및 분산된 소스 통합, UI/렌더링 최적화 및 데이터 처리 로직 단일화',
            subs: [],
          },
          {
            main: 'MultiSocketService 추상 클래스 설계 및 팩토리 패턴, 싱글톤 패턴을 통해 웹소켓 핑 관리, 재연결, 구독·해제, 청크 처리 구조화 및 자동화',
            subs: [],
          },
          {
            main: 'Next.js Streaming SSR를 통해 초기 HTML 전송 시점 단축, FCP와 관계없이 페이지 구조를 즉시 표시하여 체감 로딩 속도 개선',
            subs: [],
          },
          {
            main: 'next-auth와 next-session을 활용, authOptions 커스터마이징을 통한 sso 로직 처리',
            subs: [],
          },
          {
            main: 'Promise 기반의 overlay-kit 개발, Overlay/Toast 피드백 로직 표준화',
            subs: [],
          },
          {
            main: 'ECharts를 활용한 암호화폐 데이터 시각화 컴포넌트 구현',
            subs: [],
          },
          {
            main: 'SEO 최적화를 위한 generateMetadata 기반 동적 메타데이터 구성, Google/Naver Search 환경에서 검증',
            subs: [],
          },
        ],
        skills: [
          'Next.js',
          'TanStack Query',
          'Tailwind CSS',
        ]
      },
      {
        title: '백엔드 서비스 안정화 및 운영',
        description: '',
        period: {
          from: '2025.04',
          to: '',
        },
        details: [
          {
            main: 'PHP + Express 서버를 Express 단일 서버로 통합, api 관리 포인트 단일화',
            subs: [],
          },
          {
            main: '네이버 클라우드 -> 사설 서버로의 운영 환경 이전, 월간 서버 비용 약 80% 절감',
            subs: [],
          },
          {
            main: 'VM(KVM) 기반 서버 구성, NAT 네트워크 세팅',
            subs: [],
          },
          {
            main: 'PM2 기반 무중단 배포, Nginx Reverse Proxy, SSL 인증서 자동갱신(Certbot) 적용',
            subs: [],
          },
          {
            main: '외부 API 호출 스케줄링/캐싱 처리로 Rate Limit 대응 및 서비스 연속성 확보',
            subs: [],
          },
          {
            main: 'Google Analytics(GA4) 연동을 통한 서버사이드 데이터 시각화 적용',
            subs: [],
          },
        ],
        skills: [
          'Express',
          'PM2',
          'PHP',
          'Nginx'
        ]
      },
      {
        title: '실시간 암호화폐 데이터 수집/가공',
        description: '',
        period: {
          from: '2025.04',
          to: '',
        },
        details: [
          {
            main: 'API Rate Limit 대응을 위한 외부 API 호출 스케줄링 및 캐싱 처리',
            subs: [],
          },
          {
            main: '시세/거래 데이터 기반의 파생 지표(RSI, 펀딩비 등) 산출 알고리즘 설계 및 구현',
            subs: [],
          },
          {
            main: 'Liquidation Heatmap, Visual-Screener 등 시각화용 데이터 가공 및 제공',
            subs: [],
          },
          {
            main: '실시간 체결, OHLC, 24시간 거래량 등 원시 데이터 수집 및 전처리',
            subs: [],
          },
          {
            main: '거래소별 메시지 타입 표준화 및 심볼 매핑으로 데이터 구조 일관성 확보',
            subs: [],
          },
        ],
        skills: [
          'JavaScript',
        ]
      },
    ],
  },
  'mementoAI': {
    name: 'MEMENTO AI',
    description: '피부과 운영에 필요한 서비스 개발',
    role: '사원 • 제품 개발팀',
    position: '정규직',
    period: {
      from: '2024.09',
      to: '2025.01',
    },
    workSummaries: [
      '관리자(ADMIN) 사이트 개발 및 유지보수',
      'CRM 사이트 개발 및 유지보수',
      '브랜드별 홈페이지 개발 및 유지보수',
    ],
    works: [
      {
        title: '관리자(ADMIN) 사이트 개편',
        description: 'CRM 사이트 및 홈페이지에서 출력되는 상품, 이벤트 등의 정보를 다루는 관리자 사이트 개발 및 유지보수',
        period: {
          from: '2024.09',
          to: '2025.01',
        },
        details: [
          {
            main: '관리자 사이트 코어 기능 개발 및 유지보수',
            subs: [
              '운영일 설정, 원내 상황 설정, 온라인 예약 가능 인원 관리, 온라인 예약 현황 관리',
              '카테고리/대분류 설정, 시술 및 상품 설정, 재고 관리, 고장 장비 관리',
              '상품 분류/목록 설정, 이벤트 설정, 기타 홈페이지 설정, 전자 서명 관리 등의 기능 구현'
            ],
          },
          {
            main: 'i18n 라이브러리를 사용하여 다국어 처리, 홍콩, 베트남 현지 지점의 사용자 접근성 및 사용성 개선',
            subs: [],
          },
          {
            main: '이미지 업로드를 multi part로 처리하여 AWS API Gateway의 10MB 제한을 극복',
            subs: [],
          },
          {
            main: '데이터 가상화를 통해 네트워크 통신 용량 21MB → 약 3KB로 축소',
            subs: [],
          },
          {
            main: 'transform 레이어 도입, 데이터 관리 효율 향상',
            subs: [],
          },
          {
            main: 'BrowserRouter로 작성된 라우터를 createBrowserRouter를 활용하도록 마이그레이션',
            subs: [
              'nextjs의 app router와 같은 형식으로 라우팅 방식 구현',
              '데이터 변경을 감지하도록 하여 UX 개선'
            ],
          },
          {
            main: '중첩 객체 변경을 위한 커스텀 훅을 통해 상태 변경을 위한 코드 기존 대비 80% 축소',
            subs: [],
          },
          {
            main: 'dnd 활용, 홈페이지 데이터 노출 순서 조절 기능 구현',
            subs: [],
          },
          {
            main: '태스크 분배 및 일정 관리, 배포 관리',
            subs: [],
          },
        ],
        skills: [
          'react',
          'react-query',
          'tailwind',
        ]
      },
      {
        title: 'CRM 사이트 개편',
        description: '예약 현황, 접수 현황 등 병원을 운영하는데 필요한 정보를 다루는 CRM 사이트 개발 및 유지보수',
        period: {
          from: '2024.09',
          to: '2025.01',
        },
        details: [
          {
            main: 'CRM 사이트 코어 기능 개발 및 유지보수',
            subs: [
              '원내 상황 출력, 통합 검색, 공지사항, 채팅',
              '고객 주의 사항, 고객 정보, 결제, 처방전',
              '해피콜'
            ],
          },
          {
            main: 'i18n 라이브러리를 사용하여 다국어 처리, 홍콩, 베트남 현지 지점의 사용자 접근성 및 사용성 개선',
            subs: [],
          },
          {
            main: '전체 컴포넌트에 rem 적용, 사용자가 화면 비율을 조절 가능하도록 함',
            subs: [],
          },
          {
            main: 'transform 레이어 도입, 데이터 관리 효율 향상',
            subs: [],
          },
          {
            main: 'BrowserRouter로 작성된 라우터를 createBrowserRouter를 활용하도록 마이그레이션',
            subs: [
              'nextjs의 app router와 같은 형식으로 라우팅 방식 구현',
            ],
          },
          {
            main: '태스크 분배 및 일정 관리, 배포 관리',
            subs: [],
          },
        ],
        skills: [
          'react',
          'react-query',
          'tailwind',
        ]
      },
      {
        title: '브랜드별 홈페이지 개편',
        description: 'Muse Clinic, Shinebeam Clinic, Skin & Beam Clinic 3개의 브랜드에 대한 홈페이지 개발 및 유지보수',
        period: {
          from: '2024.09',
          to: '2025.01',
        },
        details: [
          {
            main: '브랜드별 홈페이지 코어 기능 개발 및 유지보수',
            subs: [
              '회원/비회원 관리',
              '장바구니, 예약 확인, 예약 확정 및 예약 변경',
              '이벤트 목록 및 이벤트 세부 사항'
            ],
          },
          {
            main: '웹뷰 기반의 반응형 화면 설계 및 구현을 통해 모바일 환경에서의 사용자 경험 최적화',
            subs: [],
          },
          {
            main: 'dynamic parameter와 커스텀 훅을 활용하여 dictionary 구현, 6개 다국어 언어 대응',
            subs: [],
          },
          {
            main: 'next-auth와 next-session을 활용하여, 일반 회원 및 sso 회원 관련 로직 처리',
            subs: [],
          },
          {
            main: '태스크 분배 및 일정 관리, 배포 관리',
            subs: [],
          },
        ],
        skills: [
          'nextjs',
          'framer-motion',
          'tailwind',
        ]
      },
    ],
  },
}