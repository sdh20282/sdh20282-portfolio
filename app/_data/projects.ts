import { JettyPreview, NashdaPreview, TalkidsPreview } from '@/assets';

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
          '커스텀 차트 선택 페이지 디자인 및 개발',
          '차트 커스텀 및 샘플 확인 페이지 디자인 및 개발'
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
        main: '모듈화를 통해 개발 시간을 크게 단축했습니다.',
        sub: [
          '차트 하나에 존재하는, 커스텀 가능한 속성들에 대한 이름, 타입, 종속성 등을 정의한 object를 통해 페이지가 생성되게 했습니다.',
          '커스텀 페이지 하나의 구현을 위해 필요한 시간을 1시간 내외로 크게 단축했고, 4일이라는 짧은 시간 안에 데모 사이트 개발을 완료할 수 있었습니다.',
          '코드의 재사용성과 구조적인 설계에 대해 고민하는 습관을 가지게 되었습니다.',
        ]
      },
      {
        main: '위클리 다운로드 1400회를 기록했습니다.',
        sub: [
          '프로토타입 개발론을 적용, 주기적으로 프로토타입을 만들고 피드백을 받아 수정하는 과정을 반복했습니다.',
          '다양한 피드백을 접하고, 수용할 수 있는 자세를 가지게 되었습니다',
          '최종적으로 10개 팀 피드백 중 8개 팀에서 ‘직관적이다’, ‘사용하기 편하다’ 등의 긍정적인 평가를 받을 수 있었습니다.',
        ]
      },
      {
        main: '코드 리뷰하는 습관을 가지게 되었습니다.',
        sub: [
          '실제 동작 시 발생할 수 있는 문제를 코드 리뷰를 통해 예방하며 디버깅에 소모되는 시간을 단축했습니다.',
          '다른 사람들의 코드를 읽어 보며 문제점들을 파악하고, 함께 개선점을 찾아나갈 수 있었습니다.',
          '코드를 작성할 때 어떤 문제가 발생할지, 더 좋은 방법은 없는지 고민하며 코드를 작성하는 계기가 되었습니다.',
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
          '메인 페이지, 발음 연습 페이지, 대화 시뮬레이션 페이지, 스피드 퀴즈 페이지, 드라마 플레이 페이지, 주간 테스트 페이지 개발',
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
          '데이터 전처리 및 fine tuning 진행'
        ]
      }
    ],
    learns: [
      {
        main: 'UI/UX에 대한 이해를 높일 수 있었습니다.',
        sub: [
          '실어증 환자들 중에는 인지 능력의 저하를 수반하는 경우가 있다는 것을 배웠습니다.',
          '인지 능력이 부족한 사용자들은 다채로운 색상과 화려한 디자인, 분산되어 있는 구조에 혼란을 느낄 수 있다는 점을 배웠습니다.',
          '이러한 사용자를 위한 UI/UX에 대해 고민하고 적용해볼 수 있었습니다.',
        ]
      },
      {
        main: '생각을 정리하고, 공유하는 습관을 가지게 되었습니다.',
        sub: [
          '기능에 대해 서로 이해하는 바가 달라 문제가 발생한 경험이 있습니다.',
          '서로 생각하는 유저 시나리오에 대해 정리하고, 이를 공유하고 토론하며 문제를 해결할 수 있었습니다.',
        ]
      },
      {
        main: '무엇이든 해낼 수 있다는 자신감을 얻었습니다.',
        sub: [
          '한국어 발음 인식을 위해 직접 fine tuning을 진행해야 했습니다.',
          '다양한 모델의 성능을 비교하고, 적절한 모델을 선택 후, ai hub의 한국어 음성 데이터를 한국어 발음으로 변경하여 fine tuning에 활용했습니다.',
          '한국어 발음에 대해 wer 0.3의 결과를 얻을 수 있었습니다.',
          '모르는 부분이라도 일단 시도하고, 단계적으로 접근한다면 어떻게든 해낼 수 있다는 자신감을 얻었습니다.',
        ]
      },
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
        main: '새로운 기술을 적용할 때 해당 기술이 꼭 필요한지, 어떻게 필요한지 고민하게 되었습니다.',
        sub: [
          '프로젝트 기획 상 webRTC 기술을 적용할 필요가 있었고 초기에 open vidu 오픈소스를 활용하자는 의견이 있었습니다.',
          '사용자 간의 연결이 1:1 혹은 1:N(소수)에서 주로 발생할 것이라 판단했고, 논의 끝에 보다 쾌적한 경험을 제공하기 위해 서버를 직접 구현하기로 했습니다.',
          'mesh 서버를 구현했고 0.3초의 지연 시간이 발생한 SFU 방식의 open vidu에 비해 지연 시간을 0.1초로 단축했습니다.'
        ]
      },
      {
        main: '토론을 통한 성장을 경험했습니다.',
        sub: [
          '효율적인 구조를 설계하기 위해 팀원들과 토론하며 고민하는 과정에서 성장을 경험했고, 즐거움을 느꼈습니다.',
        ]
      },
      {
        main: '소통에 대한 이해를 높일 수 있었습니다.',
        sub: [
          'Jira를 통해 각자 어떤 일을 해야하고, 어떤 일을 하고 있는지를 공유하며 현재 진행 상황을 수월하게 공유할 수 있었습니다.',
          '매일 10분 정도의 데일리 스크럼을 통해 팀원들 간의 진행 상황을 공유하고, 문제가 있거나 도움이 필요한 부분들에 대해 이야기 할 수 있었습니다.'
        ]
      },
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