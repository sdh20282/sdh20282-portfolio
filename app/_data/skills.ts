export const skillDesc = `'이 정도면 해당 기술에 능숙하다'를 100%라고 볼 때, 제가 해당 기술을 어느정도로 이해하고 있는지를 저의 기준으로 생각해 본, 주관적인 지표입니다.
기술 이름 위에 마우스를 올리면 보다 상세한 설명을 확인할 수 있습니다. 설명은 기술 이름 위에서 확인할 수 있습니다.`;

export const skillCategory = [
  {
    name: 'Frontend',
    color: '#39a494',
    percentage: '90%'
  },
  {
    name: 'Backend',
    color: '#87253e',
    percentage: '55%'
  },
  {
    name: 'AI',
    color: '#946a91',
    percentage: '30%'
  }
];

export const skillSummary = [
  {
    name: 'HTML',
    percentage: '85',
    color: '#e44c26'
  },
  {
    name: 'CSS',
    percentage: '85',
    color: '#3698d5'
  },
  {
    name: 'JS',
    percentage: '85',
    color: '#f1d432'
  },
  {
    name: 'React',
    percentage: '80',
    color: '#61dcfb'
  },
  {
    name: 'Next.js',
    percentage: '40',
    color: '#000'
  },
  {
    name: 'Vue.js',
    percentage: '30',
    color: '#41b882'
  }
];

export const skillOptions = {
  'HTML': `시맨틱 마크업을 이해하고, 실제 프로젝트에 적용하여 검색 엔진 최적화(SEO)를 수행하고 있습니다.\n 브라우저 별로, 버전 별로 지원하는 태그를 확인하고, 적절한 태그를 활용하여 크로스 브라우징 및 성능 최적화를 시도하고 있습니다.\n 그리고 웹 접근성을 고려하여 구조를 설계할 수 있습니다.`,
  'CSS': `스크린 리더를 고려하여 CSS 처리하려고 노력합니다.\n CSS 속성들을 이해하고, 프레임워크 없이 대부분의 UI 구현이 가능합니다.`,
  'JS': `다양한 Web API를 이용하여 필요한 기능을 구현해본 경험이 있습니다.\n Vanilla JS로 SPA를 구현해본 경험이 있습니다.\n JavaScript의 기본 개념들을 이해하고, 디버깅 및 최적화에 이를 활용하려고 합니다.`,
  'React': `리액트 Hook들의 기능을 알고 있고, 필요한 커스텀 Hook을 생성하여 사용할 수 있습니다. 또한 이를 배포해본 경험이 있습니다.\n 오픈소스 라이브러리의 동작 과정을 분석하고, 현재 프로젝트에 적절하게 변형하여 적용해본 경험이 있습니다.\n 사용자 경험과 성능을 위해 Lazy Loading, 메모이제이션 등의 방안을 적용할 수 있습니다.`,
  'Next.js': `개발 속도 개선을 위한 모듈화 및 자동화를 수행해본 경험이 있습니다.\n getStaticPaths와 getStaticProps를 사용하여 개발 속도를 개선한 경험이 있습니다.`,
  'Vue.js': `2회의 프로젝트를 진행한 경험이 있습니다.\n 기본적인 CRUD를 구현할 수 있습니다.`,
};