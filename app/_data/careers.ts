export const careerDetail = {
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