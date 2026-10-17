import { useState } from 'react';
import { initialCompanyConfig, defaultCareers } from './data/companyData';
import { CompanyConfig, CareerItem } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Location } from './components/Location';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CompanyCustomizer } from './components/CompanyCustomizer';

export default function App() {
  const [company, setCompany] = useState<CompanyConfig>(initialCompanyConfig);
  const [careers, setCareers] = useState<CareerItem[]>(defaultCareers);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* 1. 상단 네비게이션 (Fixed Topbar) */}
      <Navbar company={company} />

      {/* Main One-Page Content Container */}
      <main className="flex-1">
        {/* 2. 메인 화면 (HERO Section) */}
        <Hero company={company} />

        {/* 3. 회사소개 & 경력기술 섹션 (ABOUT Section) */}
        <About company={company} careers={careers} />

        {/* 4. 서비스 섹션 (SERVICES Section) */}
        <Services />

        {/* 5. 오시는 길 및 회사 정보 섹션 (LOCATION Section) */}
        <Location company={company} />

        {/* 6. 상담문의 섹션 (CONTACT Section) */}
        <Contact company={company} />
      </main>

      {/* 7. 푸터 (FOOTER Section) */}
      <Footer company={company} />

      {/* 8. 간편 정보 & 경력기술 수정 및 유지보수 가이드 패널 */}
      <CompanyCustomizer
        company={company}
        onChangeCompany={(updated) => setCompany(updated)}
        careers={careers}
        onChangeCareers={(updated) => setCareers(updated)}
      />
    </div>
  );
}
