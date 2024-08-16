import { JettyPreview, NashdaPreview, TalkidsPreview } from '@/assets';

export const projectList = [
  'jetty-chart',
  'nashda',
  'talkids',
] as const;

export const projectDetail = {
  'jetty-chart': {
    title: "Jetty Chart",
    introduce: "자유롭게 커스텀 가능한 React/Next.js 차트 라이브러리",
    members: 'Frontend 6명',
    period: {
      from: '2023.10.09',
      to: '2023.11.17',
    },
    skills: ['React', 'Next.js', 'babel'],
    images: [
      {
        name: '메인 페이지',
        src: 'https://raw.githubusercontent.com/sdh20282/image-archive/main/Portfolio/jetty-chart/main.png'
      },
      {
        name: '차트 미리보기 페이지',
        src: 'https://raw.githubusercontent.com/sdh20282/image-archive/main/Portfolio/jetty-chart/summary.png'
      },
      {
        name: '차트 커스텀 페이지',
        src: 'https://raw.githubusercontent.com/sdh20282/image-archive/main/Portfolio/jetty-chart/detail.png'
      }
    ],
    hilight: {
      type: 'image',
      src: 'https://raw.githubusercontent.com/sdh20282/image-archive/main/Portfolio/hilight/jetty-chart.gif',
    },
    links: {
      live: "https://jetty-chart-demo.vercel.app/",
      github: 'https://github.com/sdh20282/jetty-chart',
    },
    role: [
      {
        category: 'Library',
        detail: [
          'bar-chart, stacked-bar-chart 차트 제작',
          'x/y grid line, left/right/top/bottom label, left/right/top/bottom legend, legend 공통 컴포넌트 제작'
        ]
      },
      {
        category: 'Micro Page',
        detail: [
          '커스텀 차트 선택 페이지 디자인 및 개발, 기능 구현',
          '차트 커스텀 및 샘플 확인 페이지 디자인 및 개발, 기능 구현'
        ]
      },
      {
        category: 'Deploy',
        detail: [
          '라이브러리 배포'
        ]
      }
    ],
    learns: [
      {
        main: '사용자의 긍정적인 경험을 위해 프로토타입 개발론을 적용했습니다.',
        sub: [
          '주기적으로 프로토타입을 만들고 주변 개발자들에게 피드백을 받고 수정하는 과정을 반복했습니다.',
          '10개 팀 피드백 중 8개 팀에서 ‘직관적이다’, ‘사용하기 편하다’ 등의 긍정적인 평가를 받을 수 있었습니다.',
          'npm에서 위클리 다운로드 1300회를 기록할 수 있었습니다.'
        ]
      },
      {
        main: '데모 사이트의 차트 커스텀 페이지에서 모듈화를 적용해 개발 시간을 크게 단축했습니다.',
        sub: [
          '차트에 존재하는, 커스텀 가능한 속성들에 대해 이름, 타입, 종속성 등을 정의한 object를 통해 페이지가 생성되도록 했습니다.',
          '차트 커스텀 페이지 하나의 구현을 위해 필요한 시간을 1시간 내외로 크게 단축했습니다.',
        ]
      },
      {
        main: '개발 도중 발생한 Pull Request에 대한 코드 리뷰를 주도적으로 진행했습니다.',
        sub: [
          '실제 동작 시 발생할 수 있는 문제를 코드 리뷰를 통해 어느정도 예방하여 디버깅에 소모되는 시간을 단축할 수 있었습니다.',
          '다른 사람들의 코드를 읽어 보며 발생할 수 있는 문제점을 파악하고, 개선점을 찾아 갈 수 있었습니다.'
        ]
      }
    ]
  },
  'nashda': {
    title: "내쉬다",
    introduce: "실어증 환자들을 위한 발음 재활 서비스",
    members: 'Frontend 3명, Backend 3명',
    period: {
      from: '2023.08.21',
      to: '2023.10.06',
    },
    skills: ['React', 'SpringBoot', 'FastAPI', 'Pytorch', 'MySQL', 'MongoDB'],
    images: [
      {
        name: '발음 연습 페이지',
        src: 'https://raw.githubusercontent.com/sdh20282/image-archive/main/Portfolio/nashda/pron.gif',
      },
      {
        name: '대화 시뮬레이션 페이지',
        src: 'https://raw.githubusercontent.com/sdh20282/image-archive/main/Portfolio/nashda/simulation.gif',
      },
      {
        name: '통계 페이지',
        src: 'https://raw.githubusercontent.com/sdh20282/image-archive/main/Portfolio/nashda/statistics.gif',
      },
      {
        name: '회원 정보 수정 페이지',
        src: 'https://raw.githubusercontent.com/sdh20282/image-archive/main/Portfolio/nashda/modify.gif',
      },
    ],
    hilight: {
      type: 'image',
      src: 'https://raw.githubusercontent.com/sdh20282/image-archive/main/Portfolio/hilight/nashda.gif',
    },
    links: {
      github: "https://github.com/D105-SSAFY/NASHDA",
    },
    role: [
      {
        category: 'Frontend',
        detail: [
          '메인 페이지, 발음 연습 페이지, 대화 시뮬레이션 페이지, 스피드 퀴즈 페이지, 드라마 플레이 페이지, 주간 테스트 페이지 개발 및 기능 구현',
          'Redux persist storage 구현 및 session storage 연동',
          '음성 처리 관련 부분 구현'
        ]
      },
      {
        category: 'Backend',
        detail: [
          'STT 서버 구현'
        ]
      },
      {
        category: 'Database',
        detail: [
          '테이블 구조 설계'
        ]
      },
      {
        category: 'AI',
        detail: [
          '모델 비교 및 선정',
          '데이터 전처리',
          'fine tuning 수행'
        ]
      }
    ],
    learns: [
      {
        main: '인지 능력이 부족한 사용자들을 위한 UX를 고려했습니다.',
        sub: [
          '실어증 환자들 중에는 인지 능력의 저하를 수반하는 경우가 있다는 것을 알았습니다.',
          '인지 능력이 부족한 사용자들은 다채로운 색상과 화려한 디자인, 분산되어 있는 구조에 혼란을 느낄 수 있다는 점을 배웠습니다.'
        ]
      },
      {
        main: '직접 fine tuning한 모델을 통해 한국어 발음 인식 결과를 얻었습니다.',
        sub: [
          '다양한 모델의 성능을 비교했고, 가장 성능이 뛰어났던 whisper 모델을 선택했습니다.',
          'ai hub의 한국어 음성 데이터를 한국어 발음으로 변경하고, fine tuning에 활용했습니다.',
          '한국어 발음에 대해 wer 0.3의 결과를 얻을 수 있었습니다.',
          '모르는 부분이라도 일단 시도하고, 단계적으로 개선해나간다면 어떻게든 할 수 있다는 자신감을 얻었습니다.'
        ]
      }
    ]
  },
  'talkids': {
    title: "Talkids",
    introduce: "초등학생/중학생을 위한 언어 교류 플랫폼",
    members: 'Frontend 2명, Backend 3명',
    period: {
      from: '2023.07.17',
      to: '2023.08.18',
    },
    skills: ['React', 'SpringBoot', 'Express', 'MySQL', 'Socket.io'],
    images: [
      {
        name: '메인 페이지',
        src: 'https://raw.githubusercontent.com/sdh20282/image-archive/main/Portfolio/talkids/main.gif'
      },
      {
        name: '채팅 페이지',
        src: 'https://raw.githubusercontent.com/sdh20282/image-archive/main/Portfolio/talkids/chat.gif'
      },
      {
        name: '팔로우 페이지',
        src: 'https://raw.githubusercontent.com/sdh20282/image-archive/main/Portfolio/talkids/follow.gif'
      }
    ],
    hilight: {
      type: 'image',
      src: 'https://raw.githubusercontent.com/sdh20282/image-archive/main/Portfolio/hilight/talkids.gif',
    },
    links: {
      github: "https://github.com/Talkids/Talkids",
    },
    role: [
      {
        category: 'Frontend',
        detail: [
          '헤더 레이아웃, 모달 공통 컴포넌트 개발',
          '1대1 채팅/화상 페이지, 그룹 채팅/화상 페이지 개발',
          '음성 인식 관련 처리 구현'
        ]
      },
      {
        category: 'Backend',
        detail: [
          '채팅, webRTC 서버 구현',
          'STT, 번역 서버 구현'
        ]
      },
      {
        category: 'Database',
        detail: [
          '테이블 구조 설계'
        ]
      },
    ],
    learns: [
      {
        main: 'mesh 서버를 구현하여 지연 시간을 단축했습니다.',
        sub: [
          '프로젝트 기획 상 사용자 간의 연결이 1:1 혹은 1:N(소수)에서 발생할 것이라 판단했고, 논의 끝에 사용자에게 보다 쾌적한 환경을 제공하기로 하였습니다.',
          '0.3초의 지연 시간이 발생한 SFU 방식에 비해, 지연 시간을 0.1초로 단축했습니다.'
        ]
      },
      {
        main: '팀원들 간의 소통에 대한 이해를 높일 수 있었습니다.',
        sub: [
          'Jira를 통해 각자 어떤 일을 해야하고, 어떤 일을 하고 있는지를 공유하며 현재 진행 상황을 수월하게 공유할 수 있었습니다.',
          '매일 10분 정도의 데일리 스크럼을 통해 팀원들 간의 진행 상황을 공유하고, 문제가 있거나 도움이 필요한 부분들에 대해 이야기 할 수 있었습니다.'
        ]
      }
    ]
  }
};

export const recentWorkOptions = [
  {
    title: 'Jetty Chart',
    link: 'jetty-chart',
    image: JettyPreview,
    year: '2023',
  },
  {
    title: '내쉬다',
    link: 'nashda',
    image: NashdaPreview,
    year: '2023',
  },
  {
    title: 'Talkids',
    link: 'talkids',
    image: TalkidsPreview,
    year: '2023',
  }
];

export const moreWorkOptions = [
  {
    title: 'Jetty Chart',
    link: 'jetty-chart',
    image: JettyPreview,
    year: '2023',
  },
  {
    title: '내쉬다',
    link: 'nashda',
    image: NashdaPreview,
    year: '2023',
  },
  {
    title: 'Talkids',
    link: 'talkids',
    image: TalkidsPreview,
    year: '2023',
  }
];

export const projectOptions = {
  first: [
    {
      type: 'image',
      source: 'https://raw.githubusercontent.com/sdh20282/image-archive/main/Portfolio/hilight/talkids.gif',
      title: "Talkids",
      description: "초등학생/중학생을 위한 언어 교류 플랫폼",
      link: "https://github.com/Talkids/Talkids",
    },
    {
      type: 'image',
      source: 'https://raw.githubusercontent.com/sdh20282/image-archive/main/Portfolio/thumbnail/zomato.png',
      title: "Zomato",
      description: "zomato 사이트 클론 코딩",
      link: "https://github.com/sdh20282/zomato_clone_coding",
    },
    {
      type: 'image',
      source: 'https://raw.githubusercontent.com/sdh20282/image-archive/main/Portfolio/hilight/jetty-chart.gif',
      title: "Jetty Chart",
      description: "React/Next.js에서 사용 가능한 차트 라이브러리",
      link: "https://github.com/sdh20282/jetty-chart",
    },
    {
      type: 'image',
      source: 'https://raw.githubusercontent.com/sdh20282/image-archive/main/Portfolio/thumbnail/your-trip.png',
      title: "Your Trip",
      description: "여행지 추천 서비스",
      link: "https://github.com/R3act-lion",
    },
  ],
  second: [
    {
      type: 'image',
      source: 'https://raw.githubusercontent.com/sdh20282/image-archive/main/Portfolio/thumbnail/sqool.png',
      title: "SQooL",
      description: "웹페이지에서 실행 가능한 교육 목적의 SQL 튜토리얼 사이트",
      link: "https://github.com/websqldb/SQooL",
    },
    {
      type: 'image',
      source: 'https://raw.githubusercontent.com/sdh20282/image-archive/main/Portfolio/thumbnail/portfolio.gif',
      title: "Portfolio",
      description: "sdh20282's 포트폴리오 사이트",
      link: "https://github.com/sdh20282/sdh20282-portfolio",
    },
    {
      type: 'image',
      source: 'https://raw.githubusercontent.com/sdh20282/image-archive/main/Portfolio/thumbnail/youcance.png',
      title: "Youcance",
      description: "공공 API를 활용한 여행 사이트",
      link: "https://github.com/Enjoy-Trip/YOUCANCE",
    },
    {
      type: 'image',
      source: 'https://raw.githubusercontent.com/sdh20282/image-archive/main/Portfolio/hilight/nashda.gif',
      title: "내쉬다",
      description: "실어증 환자들을 위한 재활 서비스",
      link: "https://github.com/D105-SSAFY/NASHDA",
    },
  ],
};