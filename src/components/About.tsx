import React from 'react';
import { CompanyConfig, CareerItem } from '../types';
import { defaultCareers } from '../data/companyData';

interface AboutProps {
  company: CompanyConfig;
  careers?: CareerItem[];
}

export const About: React.FC<AboutProps> = ({ company, careers = defaultCareers }) => {
  return (
    <section id="about" className="py-20 md:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
            세무사 윤종현
          </h2>
        </div>

        {/* 주요 경력기술서: 01-08 번호 대신 '-' 기호 적용 및 컴팩트한 수직 리스트 구성 */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs max-w-4xl">
          <div className="pb-4 mb-4 border-b border-slate-100">
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              경력사항
            </h3>
          </div>

          {/* 8 Compact Career Items with '-' Dash Bullet */}
          <div className="space-y-2">
            {careers.map((career) => (
              <div
                key={career.id}
                className="py-2.5 px-3.5 sm:py-3 sm:px-4 rounded-lg border border-slate-200/80 bg-slate-50/50 hover:bg-white hover:border-blue-200 hover:shadow-xs transition-colors flex items-center gap-2.5 group"
              >
                {/* '-' Dash Replacement for 01-08 numbering */}
                <span className="font-bold text-slate-400 group-hover:text-blue-700 text-sm select-none shrink-0 transition-colors">
                  -
                </span>

                {/* Compact Career Content */}
                <p className="text-xs sm:text-sm text-slate-800 font-medium leading-normal flex-1">
                  {career.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
