import React from 'react';
import { defaultServices } from '../data/companyData';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          {/*<div className="text-xs font-semibold text-blue-800 tracking-wider uppercase mb-2">
            서비스안내
          </div>*/}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
            서비스 안내
          </h2>
        </div>

        {/* 6 Minimalist Service Cards: Index Numbering & Service Name Only (3 Columns Grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {defaultServices.map((service, index) => (
            <div
              key={service.id}
              className="bg-slate-50/70 hover:bg-white rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all duration-200 p-8 sm:p-10 flex flex-col justify-between group min-h-[200px]"
            >
              {/* Index Numbering: 01 ~ 06 */}
              <div className="text-3xl sm:text-4xl font-extrabold font-mono text-blue-900/80 group-hover:text-blue-900 transition-colors tracking-tight mb-8">
                0{index + 1}
              </div>

              {/* Service Name */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-blue-900 transition-colors leading-snug">
                  {service.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
