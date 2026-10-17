export interface CompanyConfig {
  name: string; // [회사명]
  tagline: string; // [회사 한 줄 소개]
  description: string; // [회사 설명]
  aboutDetail: string; // [회사 소개]
  phone: string; // [전화번호]
  email: string; // [이메일]
  fax: string; // [팩스번호]
  address: string; // [주소]
  hours: string; // [영업시간]
  businessNumber: string; // [사업자등록번호]
  ceo: string; // [대표자명]
  mailOrderReport: string; // [통신판매업신고번호]
  heroImage: string;
  logo?: string;
  kakaoRoughmapTimestamp?: string; // 카카오맵 지도 퍼가기 타임스탬프
  kakaoRoughmapKey?: string; // 카카오맵 지도 퍼가기 고유 키
  kakaoRoughmapHtml?: string; // 카카오맵 퍼가기 원본 HTML 태그
}

export interface CareerItem {
  id: string;
  content: string;
}

export interface CareerHighlight {
  label: string;
  value: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  imageUrl: string;
  imageAlt: string;
  category: string;
  features: string[];
}

export interface CoreValue {
  id: string;
  number: string;
  title: string;
  description: string;
  keywords: string[];
}
