import React from 'react';
import { CompanyConfig } from '../types';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  company: CompanyConfig;
}

export const Footer: React.FC<FooterProps> = ({ company }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: '세무사 소개', href: '#about' },
    { label: '서비스안내', href: '#services' },
    { label: '오시는 길', href: '#location' },
    { label: '상담문의', href: '#contact' },
  ];

  return (
    <footer className="bg-slate-900 text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-800">
          {/* Brand Wordmark (회사설명칸 삭제) */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-md overflow-hidden bg-white border border-slate-700 flex items-center justify-center shrink-0 shadow-xs">
              {company.logo ? (
                <img
                  src={company.logo}
                  alt={company.name || '로고'}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top p-0.5"
                  onError={(e) => {
                    (e.currentTarget as HTMLElement).style.display = 'none';
                    const fallback = e.currentTarget.parentElement?.querySelector('.footer-logo-fallback') as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
              ) : null}
              <div
                className={`footer-logo-fallback ${
                  company.logo ? 'hidden' : 'flex'
                } w-full h-full items-center justify-center bg-slate-800 text-white font-bold text-xs`}
              >
                CO
              </div> 
            </div>
            <span className="text-base font-bold text-white tracking-tight">
              {company.name}
            </span>
          </div>

          {/* Quick Nav Mirror */}
          <div className="flex flex-wrap items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-300 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              <span>맨 위로</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Corporate Legal Registration Information (통신판매업신고 삭제) */}
        <div className="pt-8 space-y-4">
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-slate-400">
            <div>
              <span className="text-slate-500">상호명:</span>{' '}
              <span className="text-slate-300">{company.name}</span>
            </div>
            <div>
              <span className="text-slate-500">대표자:</span>{' '}
              <span className="text-slate-300">{company.ceo}</span>
            </div>
            <div>
              <span className="text-slate-500">사업자등록번호:</span>{' '}
              <span className="text-slate-300 font-mono">{company.businessNumber}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-slate-400">
            <div>
              <span className="text-slate-500">사업장 주소:</span>{' '}
              <span className="text-slate-300">{company.address}</span>
            </div>
            <div>
              <span className="text-slate-500">대표전화:</span>{' '}
              <span className="text-slate-300 font-mono">{company.phone}</span>
            </div>
            <div>
              <span className="text-slate-500">대표이메일:</span>{' '}
              <span className="text-slate-300 font-mono">{company.email}</span>
            </div>
            <div>
              <span className="text-slate-500">팩스번호:</span>{' '}
              <span className="text-slate-300 font-mono">{company.fax}</span>
            </div>
            <div>
              <span className="text-slate-500">영업시간:</span>{' '}
              <span className="text-slate-300">{company.hours}</span>
            </div>
          </div>

          {/* Copyright line (개인정보처리방침 및 이용약관 삭제) */}
          <div className="pt-4 border-t border-slate-800/60 text-slate-500">
            <p>
              © {new Date().getFullYear()} {company.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
