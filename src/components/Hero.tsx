import React from 'react';
import { ArrowRight } from 'lucide-react';
import { CompanyConfig } from '../types';

interface HeroProps {
  company: CompanyConfig;
}

export const Hero: React.FC<HeroProps> = ({ company }) => {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="pt-44 pb-36 md:pt-56 md:pb-48 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-8">
          {/* Logo and Core Headline: [회사 한 줄 소개] */}
          <div className="flex items-center gap-3.5 sm:gap-4.5">
            {/* Small Logo Image Slot */}
            <div
              className="w-11 h-11 sm:w-13 sm:h-13 rounded-xl bg-transparent overflow-hidden shrink-0 flex items-center justify-center shadow-xs"
              title="로고 이미지 영역"
            >
              {company.logo ? (
                <img
                  src={company.logo}
                  alt="로고"
                  className="w-full h-full object-contain p-1"
                  onError={(e) => {
                    (e.currentTarget as HTMLElement).style.display = 'none';
                    const fallback = e.currentTarget.parentElement?.querySelector('.logo-fallback') as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
              ) : null}
              <div
                className={`logo-fallback ${
                  company.logo ? 'hidden' : 'flex'
                } w-full h-full items-center justify-center bg-slate-900 text-white font-bold text-xs tracking-wider font-mono`}
              >
                [로고]
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.25] text-balance">
              {company.tagline}
            </h1>
          </div>

          {/* Simple Company Description: [회사 설명] */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-2xl font-normal text-pretty">
            {company.description}
          </p>

          {/* Single CTA: "문의하기" Button with further lowered spacing */}
          <div className="pt-10 sm:pt-16">
            <a
              href="#contact"
              onClick={scrollToContact}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 text-sm sm:text-base font-semibold text-white bg-blue-900 hover:bg-blue-950 active:bg-slate-950 rounded-xl transition-colors shadow-xs whitespace-nowrap"
            >
              <span>문의하기</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
