import React, { useState } from 'react';
import { CompanyConfig } from '../types';
import { Phone, Mail, Printer, Copy, Check, ArrowUpRight } from 'lucide-react';

interface ContactProps {
  company: CompanyConfig;
}

export const Contact: React.FC<ContactProps> = ({ company }) => {
  const [copiedType, setCopiedType] = useState<'phone' | 'email' | 'fax' | null>(null);

  const copyToClipboard = (text: string, type: 'phone' | 'email' | 'fax') => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedType(type);
      setTimeout(() => setCopiedType(null), 2000);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: 설명칸 없이 간결하게 구성 */}
        <div className="max-w-3xl mb-12">
          {/*<div className="text-xs font-semibold text-blue-800 tracking-wider uppercase mb-2">
            상담문의
          </div>*/}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
            상담 문의
          </h2>
        </div>

        {/* 3 Direct Contact Cards: 전화상담, 이메일접수, 팩스번호 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: 전화 상담 문의 */}
          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs flex flex-col justify-between hover:border-slate-300 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-11 h-11 rounded-xl bg-blue-900 text-white flex items-center justify-center shadow-xs">
                  <Phone className="w-5 h-5" />
                </div>
                {/*<span className="text-[11px] font-semibold text-blue-800 bg-blue-100/70 px-2.5 py-0.5 rounded-full">
                  실시간 유선 상담
                </span>*/}
              </div>

              {/*<span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                전화 상담
              </span>*/}
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                전화 상담
              </h3>
              <p className="text-base text-slate-600 leading-relaxed mb-5">
                전화로 문의하시면 담당자가 친절하게 안내해 드리겠습니다.
              </p>

              {/* Display Phone */}
              <div className="p-3.5 bg-white rounded-xl border border-slate-200 flex items-center justify-between gap-3 mb-5">
                <div className="min-w-0">
                  <span className="text-[10px] text-slate-400 block font-medium">전화번호</span>
                  <span className="text-lg sm:text-xl font-extrabold text-slate-900 font-mono tracking-tight truncate block">
                    {company.phone}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard(company.phone, 'phone')}
                  className="px-2.5 py-1 text-xs font-medium text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors flex items-center gap-1 shrink-0"
                >
                  {copiedType === 'phone' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-semibold">복사됨</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-500" />
                      <span>복사</span>
                    </>
                  )}
                </button>
              </div>

              {/* Operating Info */}
              <div className="space-y-1.5 text-xs text-slate-600 border-t border-slate-200/70 pt-3.5">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">운영시간</span>
                  <span className="text-sm font-semibold text-slate-800">평일 09:30 - 17:30</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">휴무</span>
                  <span className="text-sm text-slate-700">주말 및 공휴일</span>
                </div>
              </div>
            </div>

            {/* Call Action Button */}
            <div className="pt-5 mt-5 border-t border-slate-200">
              <a
                href={`tel:${company.phone}`}
                className="w-full flex items-center justify-center gap-1.5 py-3 px-3 text-xs sm:text-sm font-semibold text-white bg-blue-900 hover:bg-blue-950 active:bg-slate-950 rounded-xl transition-colors shadow-xs"
              >
                <Phone className="w-4 h-4" />
                <span>전화 연결하기</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Card 2: 이메일 접수 문의 */}
          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs flex flex-col justify-between hover:border-slate-300 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-11 h-11 rounded-xl bg-slate-900 text-white flex items-center justify-center shadow-xs">
                  <Mail className="w-5 h-5" />
                </div>
                {/*<span className="text-[11px] font-semibold text-slate-700 bg-slate-200/80 px-2.5 py-0.5 rounded-full">
                  상시 서면 접수
                </span>*/}
              </div>

              {/*<span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                이메일 접수
              </span>*/}
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                이메일 접수
              </h3>
              <p className="text-base text-slate-600 leading-relaxed mb-5">
                문의 내용을 이메일로 보내주시면 확인 후 답변해 드리겠습니다.
              </p>

              {/* Display Email */}
              <div className="p-3.5 bg-white rounded-xl border border-slate-200 flex items-center justify-between gap-3 mb-5">
                <div className="min-w-0 flex-1">
                  <span className="text-[10px] text-slate-400 block font-medium">이메일 주소</span>
                  <span className="text-sm sm:text-base font-bold text-slate-900 font-mono tracking-tight truncate block">
                    {company.email}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard(company.email, 'email')}
                  className="px-2.5 py-1 text-xs font-medium text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors flex items-center gap-1 shrink-0"
                >
                  {copiedType === 'email' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-semibold">복사됨</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-500" />
                      <span>복사</span>
                    </>
                  )}
                </button>
              </div>

              {/* Operating Info */}
              <div className="space-y-1.5 text-xs text-slate-600 border-t border-slate-200/70 pt-3.5">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">접수 시간</span>
                  <span className="text-sm font-semibold text-slate-800">24시간 상시 접수</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">회신</span>
                  <span className="text-sm text-slate-700">영업일 기준 24시간 내</span>
                </div>
              </div>
            </div>

            {/* Email Copy Button */}
            <div className="pt-5 mt-5 border-t border-slate-200">
              <button
                type="button"
                onClick={() => copyToClipboard(company.email, 'email')}
                className="w-full flex items-center justify-center gap-1.5 py-3 px-3 text-xs sm:text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 active:bg-slate-950 rounded-xl transition-colors shadow-xs cursor-pointer"
              >
                {copiedType === 'email' ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>이메일 주소 복사 완료</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>이메일 주소 복사</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Card 3: 팩스 번호 안내 */}
          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs flex flex-col justify-between hover:border-slate-300 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-11 h-11 rounded-xl bg-slate-800 text-white flex items-center justify-center shadow-xs">
                  <Printer className="w-5 h-5" />
                </div>
                {/*<span className="text-[11px] font-semibold text-slate-700 bg-slate-200/80 px-2.5 py-0.5 rounded-full">
                  문서 자동 수신
                </span>*/}
              </div>

              {/*<span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                팩스 접수
              </span>*/}
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                팩스 접수
              </h3>
              <p className="text-base text-slate-600 leading-relaxed mb-5">
                관련 서류를 팩스로 보내주시면 담당자가 확인 후 안내해 드리겠습니다.
              </p>

              {/* Display Fax */}
              <div className="p-3.5 bg-white rounded-xl border border-slate-200 flex items-center justify-between gap-3 mb-5">
                <div className="min-w-0 flex-1">
                  <span className="text-[10px] text-slate-400 block font-medium">팩스번호</span>
                  <span className="text-lg sm:text-xl font-extrabold text-slate-900 font-mono tracking-tight truncate block">
                    {company.fax}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard(company.fax, 'fax')}
                  className="px-2.5 py-1 text-xs font-medium text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors flex items-center gap-1 shrink-0"
                >
                  {copiedType === 'fax' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-semibold">복사됨</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-500" />
                      <span>복사</span>
                    </>
                  )}
                </button>
              </div>

              {/* Operating Info */}
              <div className="space-y-1.5 text-xs text-slate-600 border-t border-slate-200/70 pt-3.5">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">수신 방식</span>
                  <span className="text-sm font-semibold text-slate-800">24시간 전자 팩스</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">수신 확인</span>
                  <span className="text-sm text-slate-700">전송 후 유선 확인</span>
                </div>
              </div>
            </div>

            {/* Fax Copy Button */}
            <div className="pt-5 mt-5 border-t border-slate-200">
              <button
                type="button"
                onClick={() => copyToClipboard(company.fax, 'fax')}
                className="w-full flex items-center justify-center gap-1.5 py-3 px-3 text-xs sm:text-sm font-semibold text-slate-800 bg-slate-200/80 hover:bg-slate-300 active:bg-slate-400 rounded-xl transition-colors shadow-xs cursor-pointer"
              >
                {copiedType === 'fax' ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span className="text-emerald-800">팩스번호 복사 완료</span>
                  </>
                ) : (
                  <>
                    <Printer className="w-4 h-4 text-slate-600" />
                    <span>팩스번호 클립보드 복사</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
