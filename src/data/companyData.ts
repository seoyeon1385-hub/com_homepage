import { CompanyConfig, CoreValue, ServiceItem, CareerItem, CareerHighlight } from '../types';

export const initialCompanyConfig: CompanyConfig = {
  name: '윤종현 세무사 사무소',
  tagline: '윤종현 세무사 사무소',
  description: '국세청 26년 근무 경험으로 전문적인 세무 상담을 도와드리겠습니다.',
  aboutDetail: '[회사 소개]',
  phone: '031-286-6600',
  email: 'yunjhtaxtax@naver.com',
  fax: '031-679-0078',
  address: '경기 용인시 기흥구 동백죽전대로 444 쥬네브썬월드빌딩 3층 제씨301호',
  hours: '평일 09:30 - 17:30 (주말 및 공휴일 휴무)',
  businessNumber: '666-05-02332',
  ceo: '윤종현',
  mailOrderReport: '[통신판매업신고번호]',
  heroImage: '/src/assets/images/hero_corporate_building_1791279375133.jpg',
  logo: '/ci_1_logo2.png',  
  kakaoRoughmapTimestamp: '1792321717219',
  kakaoRoughmapKey: '3hbrqy89uqm',
  /*kakaoRoughmapTimestamp: '1740000000000',
  kakaoRoughmapKey: 'kakaomap_default',
  mapMode: 'roughmap'*/
};

export const defaultCareers: CareerItem[] = [
  {
    id: 'career-1',
    content: '국세청 26년 근무(조사 경력 17년)',
  },
  {
    id: 'career-2',
    content: '경기 광주 세무서 조사 과장',
  },
  {
    id: 'career-3',
    content: '중부 지방 국세청 조사 3국 1과 팀장',
  },
  {
    id: 'career-4',
    content: '중부 지방 국세청 조사 1국 2과 팀장',
  },
  {
    id: 'career-5',
    content: '국세청 전산실 원천개발 팀장',
  },
  {
    id: 'career-6',
    content: '중부 지방 국세청 조사 1국 1과/2과',
  },
  {
    id: 'career-7',
    content: '동수원, 수원, 시흥, 용인, 북인천, 남동 세무서 등 근무',
  },
  {
    id: 'career-8',
    content: '국세청 7급 공채',
  },
];

export const defaultCareerHighlights: CareerHighlight[] = [
  {
    label: '전문 분야 실무 경력',
    value: '10+ 년',
    description: '오랜 현장 실무와 노하우 축적',
  },
  {
    label: '누적 프로젝트 수행',
    value: '100+ 건',
    description: '[주요 실적] 다양한 산업군 프로젝트 성공적 완료',
  },
  {
    label: '보유 자격 및 인증',
    value: '다수 보유',
    description: '[인증 현황] 공인 전문 자격 및 품질 인증 획득',
  },
  {
    label: '고객사 재계약률',
    value: '95% 이상',
    description: '신뢰 기반의 장기적 파트너십 구축',
  },
];

export const defaultCoreValues: CoreValue[] = [
  {
    id: 'trust',
    number: '01',
    title: '신뢰와 투명성',
    description: '[회사 소개] 고객과의 투명하고 지속 가능한 신뢰 관계를 최우선으로 생각합니다.',
    keywords: ['신뢰 보장', '원칙 준수', '파트너십'],
  },
  {
    id: 'innovation',
    number: '02',
    title: '전문 기술 혁신',
    description: '[회사 소개] 시장 변화를 선도하는 전문 역량과 지속적인 기술 혁신을 추구합니다.',
    keywords: ['전문성', '품질 고도화', '혁신 역량'],
  },
  {
    id: 'customer',
    number: '03',
    title: '고객 중심 가치',
    description: '[회사 소개] 고객의 비즈니스 성공과 실질적인 만족을 창출하는 솔루션을 제공합니다.',
    keywords: ['고객 맞춤', '신속한 대응', '가치 창출'],
  },
  {
    id: 'responsibility',
    number: '04',
    title: '책임과 성장',
    description: '[회사 소개] 엄격한 품질 관리와 책임 있는 자세로 기업과 사회의 동반 성장을 도모합니다.',
    keywords: ['사회적 책임', '품질 보증', '동반 성장'],
  },
];

export const defaultServices: ServiceItem[] = [
  {
    id: 'service-1',
    name: '개인 및 법인 기장',
    shortDesc: '[제품 설명]',
    fullDesc: '[제품 설명] 고객사의 핵심 요구사항을 분석하여 최적화된 프로세스와 안정적인 결과물을 제공합니다.',
    imageUrl: '/src/assets/images/service_consulting_tech_1791279388639.jpg',
    imageAlt: '[제품 이미지]',
    category: '핵심 서비스',
    features: ['맞춤형 컨설팅', '단계별 실행 전략', '사후 관리 지원'],
  },
  {
    id: 'service-2',
    name: '세무 조정',
    shortDesc: '[제품 설명]',
    fullDesc: '[제품 설명] 고도화된 시스템과 전문 노하우를 바탕으로 효율적이고 체계적인 운영 방안을 제시합니다.',
    imageUrl: '/src/assets/images/service_operations_logistics_1791279398953.jpg',
    imageAlt: '[제품 이미지]',
    category: '운영 솔루션',
    features: ['시스템 구축', '운영 최적화', '리스크 관리'],
  },
  {
    id: 'service-3',
    name: '조세 불복',
    shortDesc: '[제품 설명]',
    fullDesc: '[제품 설명] 철저한 기준과 데이터 기반의 품질 검증을 통해 오차 없는 최상의 만족도를 실현합니다.',
    imageUrl: '/src/assets/images/service_quality_system_1791279411346.jpg',
    imageAlt: '[제품 이미지]',
    category: '품질 관리',
    features: ['품질 표준 인증', '성능 검증', '지속적 피드백'],
  },
  {
    id: 'service-4',
    name: '조사 수임',
    shortDesc: '[제품 설명]',
    fullDesc: '[제품 설명] 전담 매니저 체제와 체계적인 유지보수 인프라를 통해 문제 발생 시 즉각 대응합니다.',
    imageUrl: '/src/assets/images/service_customer_solution_1791279422149.jpg',
    imageAlt: '[제품 이미지]',
    category: '고객 지원',
    features: ['전담 지원 체계', '정기 점검', '24시간 모니터링'],
  },
  {
    id: 'service-5',
    name: '양도, 상속, 증여',
    shortDesc: '[제품 설명]',
    fullDesc: '[제품 설명] 기업 역량 강화를 위한 심화 기술 자문 및 전략적 파트너십 구축 지원.',
    imageUrl: '/src/assets/images/service_consulting_tech_1791279388639.jpg',
    imageAlt: '[제품 이미지]',
    category: '전략 컨설팅',
    features: ['기술 자문', '로드맵 수립', '실행 지원'],
  },
  {
    id: 'service-6',
    name: '세무 컨설팅',
    shortDesc: '[제품 설명]',
    fullDesc: '[제품 설명] 안정적인 비즈니스 연속성을 위한 통합 유지관리 및 위험 예방 솔루션.',
    imageUrl: '/src/assets/images/service_operations_logistics_1791279398953.jpg',
    imageAlt: '[제품 이미지]',
    category: '통합 유지관리',
    features: ['정기 진단', '보안 관리', '신속 복구'],
  },
];
