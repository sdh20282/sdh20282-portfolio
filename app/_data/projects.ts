import { JettyMain, JettySummary, JettyDetail, JettyPreview, NashdaPreview, TalkidsPreview } from '@/assets';

export const projectDesc = `제가 진행한 프로젝트 중 개인적으로 성과나 성장이 있었다고 생각한 프로젝트들입니다.
결과물에 대한 화면과 고민했던 점을 확인할 수 있습니다.`;

export const projectList = [
  {
    name: 'Jetty Chart',
    desc: 'React/Next.js에서 사용 가능한 차트 라이브러리',
    role: 'Development',
  },
  {
    name: '내쉬다',
    desc: '실어증 환자들을 위한 재활 서비스',
    role: 'Development',
  },
  {
    name: 'Talkids',
    desc: '초등학생/중학생을 위한 언어 교류 플랫폼',
    role: 'Development',
  }
];

export const projectDetail = {
  'Jetty Chart': {
    introduce: [
      {
        main: '자유롭게 커스텀 가능한 React/Next.js 차트 라이브러리',
        sub: [
          '색상, 애니메이션을 포함한 최대 170개 정도의 커스텀 가능한 속성들을 제공합니다.'
        ]
      },
      {
        main: '차트들을 자유롭게 커스텀 해보고 샘플을 확인할 수 있는 데모 사이트',
        sub: [
          '사용자가 차트 선택 시 해당 차트에서 커스텀 가능한 속성들이 설명과 함께 화면에 나타나며, 해당 속성들이 적용된 차트의 샘플을 확인할 수 있습니다.',
          '사용자는 속성들을 자유롭게 만져보고, 해당 차트가 어떻게 변하는지 확인할 수 있습니다.',
          '커스텀 한 속성들이 마음에 들 경우 해당 속성들을 복사하여 코드에 바로 적용할 수 있습니다.'
        ]
      }
    ],
    person: 'Frontend 6명',
    from: '2023.10.09',
    to: '2023.11.17',
    imageList: [
      ['메인 페이지', JettyMain],
      ['차트 미리보기 페이지', JettySummary],
      ['차트 커스텀 페이지', JettyDetail]
    ],
    links: [
      ['npm 링크', 'https://www.npmjs.com/package/jetty-chart'],
      ['데모 사이트 링크', 'https://jetty-chart-demo.vercel.app/'],
      ['Github 링크', 'https://github.com/sdh20282/jetty-chart']
    ],
    worries: [
      {
        main: '단순 프로젝트에서 끝나는 것이 아니라 프로젝트가 끝나고도 개발, 유지보수를 지속적으로 진행하며 사람들이 실제로 사용해주는 오픈소스를 만들고 싶었습니다. 이를 위해 ‘어떻게 하면 사람들이 사용하고 싶을까?’에 대해 고민했습니다.',
        sub: [
          '아무리 고민하더라도 놓치거나 부족한 부분은 항상 등장하였습니다.',
          '이를 해결하기 위해 프로토타입 개발론을 적용하여 주기적으로 프로토타입을 만들고, 주변 개발자들에게 피드백을 받아 이를 반영하였습니다.',
          '10개 팀 피드백 중 8개 팀에서 ‘직관적이다’, ‘사용하기 편하다’등과 같은 긍정적인 평가를 받을 수 있었고 npm에서 위클리 다운로드 1300회를 기록할 수 있었습니다.'
        ]
      },
      {
        main: '개발 마감이 1주일 밖에 남지 않은 시점에서 데모 사이트 작업이 시작도 되어 있지 않았고, 버그 수정 및 최종 배포 과정을 고려하여 최대 5일의 시간 안에 데모 사이트를 완성해야 했습니다.',
        sub: [
          '공통으로 사용되는 컴포넌트를 미리 정의해놓더라도, 각각의 차트에 대해 커스텀 가능한 속성이 너무 많아 페이지를 직접 구현하기에는 시간이 부족하고, 관리 측면에서도 좋지 않다고 판단하였습니다.',
          '데모 사이트 모듈화 및 자동화를 통해 개발 시간을 크게 단축하였습니다.',
          '차트 하나에 대해 이름, 설명, 타입, 종속성 등을 정의한 object를 선언한 파일 하나만 작성하면 이를 참고하여 페이지가 생성되도록 하여 차트당 1시간 내외의 시간이 소요될 수 있게 하여 차트 개발 및 디버깅을 병행했음에도 4일이라는 기간 내에 사이트 개발을 마무리할 수 있었습니다.'
        ]
      }
    ],
    learns: [
      {
        main: '6주간의 개발 기간 중 발생한 68개의 Pull Request (이하 PR) 중 60개 이상의 PR에 대한 코드 리뷰를 진행하였습니다.',
        sub: [
          '이를 통해 실제 동작 시 발생할 수 있는 문제를 코드 리뷰를 통해 어느정도 예방하여 디버깅에 소모되는 시간을 단축할 수 있었습니다.',
          '또한 다른 사람들의 코드를 읽어 보며 발생할 수 있는 문제점을 파악하고, 같이 개선점을 찾아 갈 수 있었습니다.'
        ]
      },
      {
        main: '오픈소스 라이브러리를 개발부터 유지,보수까지 경험하며 다양한 환경에서 발생하는 문제들을 마주하고, 테스트의 중요성을 느낄 수 있었습니다.',
        sub: [
          '개발 환경에서 발생하지 않던 에러가 배포 환경에서 발생하였고,  React에서 정상적으로 동작하더라도 Next.js에서 문제가 발생하였습니다.',
          '이러한 단계적인 오류로 인해 배포 버전이 쌓여가는 것을 보며 이런한 점에 대해 고민을 시작하게 되었습니다.'
        ]
      }
    ]
  },
  '내쉬다': {
    introduce: [
      {
        main: '실어증 환자들을 위한 재활 서비스',
        sub: [
          '사용자들은 해당 서비스를 통해 언어학적, 의사소통적인 측면에서의 재활을 시도할 수 있습니다.',
          '사용자들은 스스로의 발음을 확인하고, 교정할 수 있으며 챗봇과의 대화 시뮬레이션을 통해 별도의 보조인 없이 의사소통 능력을 기를 수 있습니다.',
          '사용자들 중 인지 능력 저하를 동반하는 경우에도 스피드 퀴즈와 드라마 플레이를 통해 인지 능력과 순간 판단 능력을 기를 수 있습니다.',
          '주간 테스트를 통해 스스로의 성장 정도를 파악할 수 있으며 자신의 연습 결과를 통계를 통해 확인할 수 있습니다.'
        ]
      }
    ],
    person: 'Frontend 3명, Backend 3명',
    from: '2023.08.21',
    to: '2023.10.06',
    imageList: [
      ['메인 페이지', 'https://media.githubusercontent.com/media/D105-SSAFY/NASHDA/master/img/%EC%9D%B8%ED%8A%B8%EB%A1%9C.gif'],
      ['발음 연습 페이지', 'https://media.githubusercontent.com/media/D105-SSAFY/NASHDA/master/img/%EB%B0%9C%EC%9D%8C.gif'],
      ['대화 시뮬레이션 페이지', 'https://media.githubusercontent.com/media/D105-SSAFY/NASHDA/master/img/%EC%8B%9C%EB%AE%AC_%EA%B2%BD%EC%B0%B0%EC%84%9C.gif'],
      ['업적 페이지', 'https://media.githubusercontent.com/media/D105-SSAFY/NASHDA/master/img/%EC%97%85%EC%A0%81.gif'],
      ['로그인 페이지', 'https://media.githubusercontent.com/media/D105-SSAFY/NASHDA/master/img/%EB%A1%9C%EA%B7%B8%EC%9D%B8.gif'],
    ],
    links: [
      ['Github 링크', 'https://github.com/D105-SSAFY/NASHDA']
    ],
    worries: [
      {
        main: '프로젝트를 위해 실어증에 대해 조사하던 중 실어증 환자들 중에는 단순히 말을 제대로 못하는 것이 아니라 인지 능력의 저하를 수반하는 경우가 있다는 것을 알았고, 이러한 사용자들을 위한 UI/UX 역시 고려해야했습니다.',
        sub: [
          '평소에 스크린 리더는 고려하였으나 이러한 부분에서는 생각해보지 못했기에 어떻게 UI/UX를 설계해야 할 지 막막했습니다.',
          '팀원 1명과 시간을 들여 사회적 약자를 위한 다양한 사이트와 논문을 찾아보았습니다. 끝에 인지 능력이 부족한 환자를 위한 디자인에 관한 외국 논문을 발견하였고, 이러한 사람들은 다채로운 색상과 화려한 디자인에 혼란을 느낀다는 점을 파악할 수 있었습니다.'
        ]
      },
      {
        main: '정확한 한국어 발음 인식을 위해 관련 모델이나 API가 존재하는지 찾아 보았습니다. 부정확한 발음을 정확한 한국어로 변경해주는 API는 많았지만 한국어 발음을 그대로 변경해주는 모델이나 API는 찾을 수 없었습니다.',
        sub: [
          '이를 위해 whisper, ksponspeech, wav2vec 세 모델에 대해 한국어 인식 결과를 비교하였고, 성능이 제일 우수한 whisper 모델을 활용하였습니다.',
          '한국어 발음 데이터를 얻기 위해 ai hub의 한국어 음성 데이터를 활용하였고, 이를 g2p 라이브러리로 발음 형태로 바꾸고 최대한 검수하여 fine tuning을 진행하였습니다.',
        ]
      }
    ],
    learns: [
      {
        main: '사용자 경험에 대한 보다 깊은 이해를 할 수 있었습니다.',
        sub: [
          '인지 능력이 떨어지는 사용자들은 다채로운 색상과 화려한 디자인, 컴포넌트들이 분산되어 있는 구조에 혼란을 느낄 수 있다는 점을 배웠습니다.'
        ]
      }
    ]
  },
  'Talkids': {
    introduce: [
      {
        main: '언어 교류를 위한 온라인 플랫폼',
        sub: [
          '1대1 채팅 및 화상, 그룹 채팅 및 화상 기능을 통해 외국인 친구들과 직접 얼굴을 마주하고 소통 할 수 있습니다.',
          '음성은 텍스트로 변환되어 채팅 창에 나타나며 실시간으로 번역되어 화면에 출력됩니다.',
          '채팅 내용은 번역이 가능하며, 사전을 통해 필요한 단어를 검색할 수 있습니다.',
          '언어 교류 그룹 담당자는 상대방 그룹 담당자와 일정을 조율할 수 있습니다.',
          '언어 교류에 참여한 정도에 따라 메인 화면의 배경이 다양해집니다.'
        ]
      }
    ],
    person: 'Frontend 2명, Backend 3명',
    from: '2023.07.17',
    to: '2023.08.18',
    videoList: [
      // ['실행 화면', () => { return <iframe height="620" src="https://www.youtube.com/embed/xUB10RPruSQ" title="TalKids 화상전화 및 실시간 번역" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /> }],
    ],
    links: [
      ['Github 링크', 'https://github.com/Talkids/Talkids']
    ],
    worries: [
      {
        main: 'MCU 방식을 사용할 경우 OpenVidu라는 WebRTC 오픈소스를 활용할 수 있었지만 0.3초 정도의 지연 시간이 발생하였습니다. 또한 후술할 실시간 자막 관련 문제가 발생하였습니다.',
        sub: [
          '프로젝트 기획 상 다수의 화상 통화 보다는 1:1 혹은 1:소수가 핵심이었고, 팀원들과 논의 끝에 Mesh 방식을 이용하여 사용자에게 보다 쾌적한 환경을 제공하기로 하였습니다.',
          'Socket.io를 활용하여 직접 Mesh 서버를 구현하였고, 화상 통화의 지연 시간을 0.1초 정도로 줄일 수 있었습니다.',
        ]
      },
      {
        main: '화상 통화에서 실시간 자막 사용 시 발화자 측의 음성을 청취자 측에서 받아서 처리할 경우 클라이언트가 늘어늘수록 중복된 처리가 많아 비효율적이었습니다.',
        sub: [
          'WebRTC 서버를 Mesh 방식으로 구현하는 과정에서, 발화자 측에서 음성을 텍스트화 하여 청취자 측으로 전달하는 방식으로 코드를 변경하였고, 성능을 향상시킬 수 있었습니다.',
        ]
      }
    ],
    learns: [
      {
        main: '토론을 통한 성장을 경험했습니다.',
        sub: [
          '데이터 베이스 설계 과정에서 현업 경험이 있으신 분과 역정규화와 같은 효율적인 구조를 위해 토론하며 성장하는 과정의 즐거음을 느꼈습니다.'
        ]
      },
      {
        main: '팀원들 간의 소통에 대한 이해를 높일 수 있었습니다.',
        sub: [
          '처음으로 Jira를 사용해보았고, 이를 통해 각자 어떤 일을 해야하고, 어떤 일을 하고 있는지를 공유하며 현재 진행 상황을 수월하게 공유할 수 있었습니다.',
          '매일 개발 시작 전, 10분 정도 팀원들과의 데일리 스크럼을 통해 팀원들 간의 진행 상황을 공유하고, 작업의 싱크를 맞출 수 있었고, 문제가 있거나 도움이 필요한 부분들에 대해 부담 없이 이야기 할 수 있었습니다.'
        ]
      }
    ]
  }
};

export const thumbnailOptions = [
  {
    title: 'Jetty Chart',
    image: JettyPreview,
  },
  {
    title: '내쉬다',
    image: NashdaPreview,
  },
  {
    title: 'Talkids',
    image: TalkidsPreview,
  }
];

export const projectOptions = {
  first: [
    {
      type: 'image',
      source: 'https://images.unsplash.com/photo-1495360010541-f48722b34f7d?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      type: 'image',
      source: 'https://images.unsplash.com/photo-1495360010541-f48722b34f7d?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      type: 'image',
      source: 'https://images.unsplash.com/photo-1495360010541-f48722b34f7d?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      type: 'image',
      source: 'https://images.unsplash.com/photo-1495360010541-f48722b34f7d?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ],
  second: [
    {
      type: 'image',
      source: 'https://images.unsplash.com/photo-1495360010541-f48722b34f7d?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      type: 'image',
      source: 'https://images.unsplash.com/photo-1495360010541-f48722b34f7d?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      type: 'image',
      source: 'https://images.unsplash.com/photo-1495360010541-f48722b34f7d?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      type: 'image',
      source: 'https://images.unsplash.com/photo-1495360010541-f48722b34f7d?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ],
};