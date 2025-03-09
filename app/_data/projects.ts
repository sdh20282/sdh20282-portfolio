import { TsxCraftPreview, PortFolioPreview, VanillaJSSPAPreview, JettyPreview, NashdaPreview, TalkidsPreview } from '@/assets';

export const projectDetail = {
  'tsx-craft': {
    title: "TSX Craft",
    introduce: "TypeScript, Babel, Webpack으로 React를 개발하는 프로젝트",
    members: "FE 2명",
    period: {
      from: '2025.02.20',
      to: '진행중',
    },
    skills: ['TypeScript', 'Babel', 'Webpack'],
    background: [
      '\'모던 리액트 Deep Dive\'란 책을 읽으며 React의 동작 원리를 이해하고, 기본기를 다질 수 있었습니다.',
      '이를 바탕으로 이전 직장인 MEMENTO AI에서 리액트 렌더링이나 최적화 관점에서 나름의 성과를 거둘 수 있었습니다.',
      '프론트엔드 개발자로서 더욱 성장하기 위해서는 제가 다루는 도구들의 동작 원리를 정확하게 이해하고 이를 활용할 수 있어야 한다는 생각이 명확해지게 되었고, TSX Craft 프로젝트를 시작하게 되었습니다.',
    ],
    images: [
      {
        name: 'App.tsx 사용 예시',
        src: 'https://raw.githubusercontent.com/sdh20282/image-archive/main/Portfolio/tsx-craft/app.png'
      },
    ],
    hilight: {
      type: 'image',
      src: 'https://raw.githubusercontent.com/sdh20282/image-archive/main/Portfolio/hilight/tsx-craft.gif',
    },
    links: {
      github: 'https://github.com/TSXCraft/ts-react',
    },
    role: [
      {
        category: 'Babel, Webpack 세팅',
        detail: [
          'React와 같은 폴더 구조를 활용할 수 있게 구현',
          '개발 서버 빌드 타임 100ms 내외로 구성',
        ]
      },
      {
        category: 'JSX 파싱 구현',
        detail: [
          'JSX로 작성된 함수형 컴포넌트를 파싱 및 바벨에 연동',
          'createElement 함수를 통해 바벨에서 변경된 결과 처리',
        ]
      },
      {
        category: 'Renderer 클래스 구현',
        detail: [
          'createElement로 생성된 데이터를 렌더링하는 클래스 구현',
          'React 15 버전의 동기식 재조정 과정과 유사한 재조정 알고리즘 구현(추후 concurrent mode로 수정 예정)',
        ]
      },
      {
        category: 'Router 구현',
        detail: [
          'react에서의 동작 방식와 마찬가지로 화면을 새로고침 하지 않고 파이버 노드 업데이트를 통한 화면 갱신 로직 구현',
        ]
      }
    ],
    learns: [],
  },
  'just-swim': {
    title: "Just Swim",
    introduce: "수영 회원 VIP 관리 서비스",
    members: "BE 1명, FE 3명, 기획 및 디자인 1명",
    period: {
      from: '2024.06',
      to: '2024.09',
    },
    skills: ['Next.js', 'Tailwind CSS', 'Express'],
    background: [
      '수영 강사였던 지인을 통해 여전히 현장에서는 수기나 카카오톡으로 하나하나 수강생이나 수업들을 체크하고 있는 것을 알게 되었습니다.',
      '이러한 점을 해결해보고 싶어 해당 프로젝트를 진행하게 되었습니다.'
    ],
    images: [],
    hilight: {
      type: 'empty',
      src: '',
    },
    links: {
      github: 'https://github.com/Just-Swim-service/Just-Swim-FE',
    },
    role: [
      {
        category: '수영 강사 스케줄 관리',
        detail: [
          'unstable_cache를 활용하여 fetch 캐싱 및 fetch 된 데이터를 활용한 함수를 캐싱하여 최적화 수행',
          'useTransition 훅 및 suspense를 활용하여 작업의 우선순위를 조정하여 UX 향상',
          '수업 QR 코드 저장 및 복사 기능 구현'
        ]
      },
      {
        category: '사용자 input 공통 컴포넌트 구현',
        detail: [
          'React Hook Form과 server action 연동',
          'dispatchEvent 활용하여 React Hook Form에 변경 사항 강제 연동',
        ]
      },
      {
        category: 'date, time 모달 및 picker 구현',
        detail: [
          '일반적인 time/date picker 및 무한 순환하는 time/date picker 구현',
          '마우스 드래그 및 모바일 터치 기능 구현',
        ]
      }
    ],
    learns: [],
  },
  'portfolio': {
    title: "sdh20282's Portfolio",
    introduce: "Next.js와 framer-motion으로 만든 포트폴리오",
    members: "개인 프로젝트",
    period: {
      from: '2024.05',
      to: '진행중',
    },
    skills: ['Next.js', 'framer-motion', 'gsap'],
    background: [
      '노션이나 프레젠테이션 등의 플랫폼을 이용해서 포트폴리오를 정리하는 사람들이 많습니다.',
      '하지만 저는 프론트엔드 개발자로서 언젠가는 저만의 포트폴리오 사이트는 꼭 만들고 싶다고 생각했습니다.',
      '또한 평소에 애니메이션을 직접 구현하는 것을 좋아하기에 다양한 사용자 인터렉션을 추가하여 포트폴리오를 만들어보고 싶었습니다.',
      '이러한 점들 때문에 지금의 포트폴리오 사이트를 제작하게 되었습니다.'
    ],
    images: [],
    hilight: {
      type: 'empty',
      src: 'https://raw.githubusercontent.com/sdh20282/image-archive/main/Portfolio/hilight/portfolio.gif',
    },
    links: {
      github: 'https://github.com/sdh20282/sdh20282-portfolio',
    },
    role: [
      {
        category: 'custom hook을 활용한 중복 로직 최소화',
        detail: [
          'cursor follow 효과, magnetic 효과 등을 custom hook로 처리하여 중복 로직 최소화',
        ]
      },
      {
        category: 'gsap, framer-motion 라이브러리를 사용한 사용자 인터렉션 구현',
        detail: [
          'parallax scroll, magnetic 등의 사용자 인터렉션 구현',
          '벡터 이미지와 AnimatePresence 컴포넌트를 활용하여 페이지 전환 애니메이션 구현'
        ]
      }
    ],
    learns: [
      {
        main: 'Next.js의 렌더링 과정에 대해 이해할 수 있었습니다.',
        sub: [
          'framer-motion을 활용하여 페이지 전환 애니메이션을 처리하는 과정에서 app router에서 페이지 전환 애니메이션이 동작하지 않는 문제를 마주했습니다.',
          'LayoutRouterContext를 통해 router 갱신을 강제로 막는 frozen router를 통해 문제를 해결하는 과정에서 page router와 app router의 렌더링 과정 차이를 이해할 수 있었습니다.',
          'LINK::관련 이슈를 다룬 블로그 포스팅::https://velog.io/@sdh20282/App-Router%EC%97%90%EC%84%9C-framer-motion-%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC%EC%9D%98-exit-animation%EC%9D%B4-%EC%A0%9C%EB%8C%80%EB%A1%9C-%EB%8F%99%EC%9E%91%ED%95%98%EC%A7%80-%EC%95%8A%EB%8A%94-%EB%AC%B8%EC%A0%9C',
        ]
      },
    ]
  },
  'vanilla-js-spa': {
    title: "Vanilla JS SPA",
    introduce: "Vanilla JavaScript를 기반으로 한 SPA",
    members: "개인 프로젝트",
    period: {
      from: '2024.01.07',
      to: '2024.02.01',
    },
    skills: ['JavaScript', 'Express'],
    background: [
      '삼성 청년 SW 아카데미를 수료한 이후, 프론트엔드 개발자로서 성장하기 위해 JavaScript 관련 지식들을 점검하고 있었습니다.',
      '해당 지식들을 활용해서 단순한 서비스가 아닌, JavaScript를 활용해서 조금 더 깊이가 있는 프로젝트를 해보고 싶었습니다.',
      '이러한 생각들 때문에 해당 프로젝트를 시작하게 되었습니다.'
    ],
    images: [
      {
        name: '부포 컴포넌트',
        src: 'https://raw.githubusercontent.com/sdh20282/image-archive/main/Portfolio/vanilla-js-spa/parent.png'
      },
      {
        name: '자식 컴포넌트',
        src: 'https://raw.githubusercontent.com/sdh20282/image-archive/main/Portfolio/vanilla-js-spa/child.png'
      },
    ],
    hilight: {
      type: 'image',
      src: 'https://raw.githubusercontent.com/sdh20282/image-archive/main/Portfolio/hilight/vanilla-js-spa.gif',
    },
    links: {
      github: 'https://github.com/sdh20282/vanilla-js-spa',
    },
    role: [
      {
        category: 'Routing',
        detail: [
          'Express를 활용한 미들웨어를 구현하여 새로고침 및 직접 url을 입력하는 경우 처리',
          'history API를 활용하여 화면 깜빡임 없이 url 변경에 대한 라우팅 구현',
          '이벤트 위임을 통해 anchor 요소에 이벤트 핸들러를 등록하지 않아도 페이지가 변경되게 구현'
        ]
      },
      {
        category: 'State Management',
        detail: [
          'proxy를 활용하여 불변성을 유지하지 않는 vue-like한 상태 관리 구현'
        ]
      },
      {
        category: 'Rendering & Life Cycle',
        detail: [
          'custom element를 활용하여 컴포넌트 클래스 구현 및 props 처리',
          'requestAnimationFrame을 활용하여 렌더링 최적화 구현',
          'beforeMount, mounted, beforeUpdate, updated 라이프사이클 메서드 구현'
        ]
      }
    ],
    learns: [
      {
        main: 'JavaScript 관련 지식을 재정립할 수 있었습니다.',
        sub: [
          'Vanilla JS 기반의 SPA를 구현하며 기존에 확실히 모르던 부분들에 대해 짚고 넘아갈 수 있었습니다.',
          'Proxy와 Object.defineProperty의 차이나 custom element와 같이 JavaScript에 관련된, 보다 근본적인 부분들에 대해 이해할 수 있었습니다.',
        ]
      },
      {
        main: 'SPA의 동작 과정을 이해하고, 이를 활용할 수 있게 되었습니다.',
        sub: [
          'SPA에서의 라우팅을 처리하는 기본적인 원리와 렌더링을 적용하는 방식, 컴포넌트의 라이프 사이클을 체험할 수 있었습니다.',
          '리액트에서 이를 어떻게 적용하면 좋을 지 고민해보는 시간을 가질 수 있게 되었습니다.',
        ]
      }
    ]
  },
  'jetty-chart': {
    title: "Jetty Chart",
    introduce: "자유롭게 커스텀 가능한 React/Next.js 차트 라이브러리",
    members: 'Frontend 6명',
    period: {
      from: '2023.10.09',
      to: '2023.11.17',
    },
    skills: ['React', 'Next.js', 'babel'],
    background: [
      '오픈 소스 관련 팀 프로젝트를 진행하고 싶었고, 사람들이 많이 사용할 수 있는 라이브러리를 만들어보고 싶었습니다.',
      '기존 차트 라이브러리들에서 적용할 수 있는 속성이나 애니메이션들이 생각보다 제한적이라는 것을 알게 되었습니다.',
      '사용자가 선택할 수 있는 선택의 폭을 최대한 많이 제공하는 차트 라이브러리를 만들어 보고 싶었고, 이를 실행하게 되었습니다.'
    ],
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
          'x/y grid line, left/right/top/bottom label, left/right/top/bottom legend, legend 공통 컴포넌트 제작',
          'bar-chart, stacked-bar-chart 차트 제작',
          '수식을 직접 계산하고 최적화하여 계산에 소모되는 시간을 줄이고 transform 속성을 통해 gpu를 활용 및 composite 단계만 수행되도록 하여 성능 최적화 수행'
        ]
      },
      {
        category: 'Micro Page',
        detail: [
          '커스텀 차트 선택 페이지 디자인 및 개발',
          '차트 커스텀 및 샘플 확인 페이지 디자인 및 개발 및 모듈화를 적용하여 생산성 향상'
        ]
      },
      {
        category: 'Deploy',
        detail: [
          'babel을 통해 라이브러리 배포'
        ]
      }
    ],
    troubleShootings: [
      {
        title: '',
      }
    ],
    review: [

    ],
    learns: [
      {
        main: '모듈화를 통해 개발 시간을 크게 단축했습니다.',
        sub: [
          '차트 하나에 존재하는, 커스텀 가능한 속성들에 대한 이름, 타입, 종속성 등을 정의한 object를 통해 페이지가 생성되게 했습니다.',
          '커스텀 페이지 하나의 구현을 위해 필요한 시간을 1시간 내외로 크게 단축했고, 4일이라는 짧은 시간 안에 전체 차트에 대한 샘플이 포함된 데모 사이트 개발을 완료할 수 있었습니다.',
          '코드의 재사용성과 구조적인 설계에 대해 고민하는 습관을 가지게 되었습니다.',
        ]
      },
      {
        main: '위클리 다운로드 1300회를 기록했습니다.',
        sub: [
          '프로토타입 개발론을 적용, 주기적으로 프로토타입을 만들고 피드백을 받아 수정하는 과정을 반복했습니다.',
          '다양한 피드백을 접하고, 수용할 수 있는 자세를 가지게 되었습니다',
          '최종적으로 10개 팀 피드백 중 8개 팀에서 ‘직관적이다’, ‘사용하기 편하다’ 등의 긍정적인 평가를 받을 수 있었습니다.',
          '지금도 꾸준히 사용자가 발생하고 있습니다.'
        ]
      },
      {
        main: '코드 리뷰하는 습관을 가지게 되었습니다.',
        sub: [
          '코드가 합쳐진 이후 발생한 문제로 인해 디버깅에 많은 시간이 소모했습니다.',
          '실제 동작 시 발생할 수 있는 문제를 코드 리뷰를 통해 예방하며 디버깅에 소모되는 대폭 시간을 단축했습니다.',
          '코드를 작성할 때 어떤 문제가 발생할지, 더 좋은 방법은 없는지 고민하며 코드를 작성하는 계기가 되었으며 코드 리뷰가 가지는 긍정적 효과를 느꼈습니다.',
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
    background: [
      '팀원 중 한 분의 지인이 뇌 질환을 앓았는데 병원에서 재활을 위해 인쇄된 그림을 사용해서 재활 치료를 한다는 것을 알게 되었습니다.',
      'AI 기술을 접목하여 이 문제를 해결해보고 싶었고, 프로젝트를 시작하게 되었습니다.'
    ],
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
          'Redux persist storage 구현 및 session storage 연동하여 전역 저장소 구현',
          'web speech api를 활용하여 음성 처리 관련 부분 구현'
        ]
      },
      {
        category: 'Backend',
        detail: [
          'Pytorch와 Fast API로 STT 서버 구현'
        ]
      },
      {
        category: 'AI',
        detail: [
          '음성 인식 모델 비교 및 선정',
          'Ai Hub의 데이터를 활용하여 데이터 전처리 및 whisper 모델 fine tuning 진행'
        ]
      }
    ],
    learns: [
      {
        main: 'UI/UX에 대한 이해를 높일 수 있었습니다.',
        sub: [
          '기획을 위해 논문 등을 조사하며 실어증 환자들 중에는 인지 능력의 저하를 수반하는 경우가 있다는 것을 배웠습니다.',
          '또한 인지 능력이 부족한 사용자들은 다채로운 색상과 화려한 디자인, 분산되어 있는 구조에 혼란을 느낄 수 있다는 점을 배웠습니다.',
          '이러한 불리한 위치에 있는 사용자들을 위한 UI/UX에 대해 고민하는 계기가 되었습니다다.',
        ]
      },
      {
        main: '생각을 정리하고, 공유하는 습관을 가지게 되었습니다.',
        sub: [
          '기능에 대해 서로 이해하는 바가 달라 문제가 발생했고, 개발 단계를 일시중지하고 기획 단계부터 다시 수정한 경험이 있습니다.',
          '서로 생각하는 유저 시나리오에 대해 정리하고, 이를 문서화하여 같은 문제를 겪지 않을 수 있었습니다.',
        ]
      },
      {
        main: '무엇이든 해낼 수 있다는 자신감을 얻었습니다.',
        sub: [
          '한국어 발음 인식을 위해 직접 fine tuning을 진행해야 했습니다.',
          '다양한 모델의 성능을 비교하고, 적절한 모델을 선택 후, ai hub의 한국어 음성 데이터를 한국어 발음으로 변경하여 fine tuning에 활용했습니다.',
          '결과적으로 한국어 발음에 대해 wer 0.3의 결과를 얻을 수 있었습니다.',
          '모르는 부분이라도 일단 시도하며, 단계적으로 접근해 나간다면 어떻게든 해낼 수 있다는 자신감을 얻었습니다.',
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
    background: [
      '학급에서 언어 교류를 위한 플랫폼이 굉장히 제한적인 것을 보았습니다.',
      'Web RTC 기술과 Web Socket을 활용해 이를 해결해보고자 해당 프로젝트를 진행하게 되었습니다.',
    ],
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
          'web socket을 활용하여 1대1 채팅/화상 페이지 및 그룹 채팅/화상 페이지 개발',
          'web speech api를 통해 음성 인식 관련 처리 구현'
        ]
      },
      {
        category: 'Backend',
        detail: [
          'web socket을 활용하여 채팅 및 webRTC 서버 구현',
          'Express로 STT, 번역을 처리하는 서버 구현'
        ]
      },
      {
        category: 'Database',
        detail: [
          '채팅, 사용자 테이블 구조 설계'
        ]
      },
    ],
    learns: [
      {
        main: '새로운 기술을 적용할 때 해당 기술이 꼭 필요한지, 어떻게 필요한지 고민하게 되었습니다.',
        sub: [
          '프로젝트 기획 상 webRTC 기술을 적용할 필요가 있었고 초기에 open vidu 오픈소스를 활용하자는 의견이 있었습니다.',
          '사용자 간의 연결이 1:1 혹은 1:N(소수)에서 주로 발생할 것이라 판단했고, 논의 끝에 보다 쾌적한 경험을 제공하기 위해 서버를 직접 구현하기로 했습니다.',
          'mesh 서버를 구현했고 0.3초의 지연 시간이 발생한 SFU 방식의 open vidu에 비해 지연 시간을 0.1초 내외로 단축할 수 있었습니다.'
        ]
      },
      {
        main: '토론을 통한 성장을 경험했습니다.',
        sub: [
          '효율적인 구조를 설계하기 위해 팀원들과 토론하며 고민하는 과정과 조금씩 개선되는 코드를 보며며 성장을 경험했고, 즐거움을 느꼈습니다.',
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
    title: 'TSX Craft',
    link: 'tsx-craft',
    image: TsxCraftPreview,
    year: '2025',
  },
  {
    title: 'sdh20282\'s portfolio',
    link: 'portfolio',
    image: PortFolioPreview,
    year: '2024',
  },
  {
    title: 'Jetty Chart',
    link: 'jetty-chart',
    image: JettyPreview,
    year: '2023',
  },
];

export const moreWorkOptions = [
  {
    title: 'TSX Craft',
    link: 'tsx-craft',
    image: TsxCraftPreview,
    year: '2025',
  },
  {
    title: 'Just Swim',
    link: 'just-swim',
    image: PortFolioPreview,
    year: '2024',
  },
  {
    title: 'sdh20282\'s portfolio',
    link: 'portfolio',
    image: PortFolioPreview,
    year: '2024',
  },
  {
    title: 'Vanilla JS SPA',
    link: 'vanilla-js-spa',
    image: VanillaJSSPAPreview,
    year: '2024',
  },
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
      source: 'https://raw.githubusercontent.com/sdh20282/image-archive/main/Portfolio/thumbnail/talkids.gif',
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
      source: 'https://raw.githubusercontent.com/sdh20282/image-archive/main/Portfolio/thumbnail/jetty-chart.gif',
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
      source: 'https://raw.githubusercontent.com/sdh20282/image-archive/main/Portfolio/thumbnail/nashda.gif',
      title: "내쉬다",
      description: "실어증 환자들을 위한 재활 서비스",
      link: "https://github.com/D105-SSAFY/NASHDA",
    },
  ],
};