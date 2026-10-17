import React, { useState } from 'react';
import { CompanyConfig, CareerItem } from '../types';
import { Settings2, X, RotateCcw, Check, FileCode2, Plus, Trash2 } from 'lucide-react';
import { initialCompanyConfig, defaultCareers } from '../data/companyData';

interface CustomizerProps {
  company: CompanyConfig;
  onChangeCompany: (updated: CompanyConfig) => void;
  careers: CareerItem[];
  onChangeCareers: (updated: CareerItem[]) => void;
}

export const CompanyCustomizer: React.FC<CustomizerProps> = ({
  company,
  onChangeCompany,
  careers,
  onChangeCareers,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'info' | 'career'>('info');
  const [showCodeGuide, setShowCodeGuide] = useState(false);

  const handleChange = (field: keyof CompanyConfig, value: string) => {
    onChangeCompany({
      ...company,
      [field]: value,
    });
  };

  const handleCareerChange = (index: number, value: string) => {
    const updated = [...careers];
    updated[index] = {
      ...updated[index],
      content: value,
    };
    onChangeCareers(updated);
  };

  const handleAddCareer = () => {
    const newItem: CareerItem = {
      id: `career-${Date.now()}`,
      content: `[경력 내용 ${careers.length + 1}] 신규 주요 프로젝트 및 전문 수행 실적`,
    };
    onChangeCareers([...careers, newItem]);
  };

  const handleRemoveCareer = (index: number) => {
    const updated = careers.filter((_, i) => i !== index);
    onChangeCareers(updated);
  };

  const handleReset = () => {
    onChangeCompany(initialCompanyConfig);
    onChangeCareers(defaultCareers);
  };

  return (
    <>
      {/* Floating Toggle Button */}
      {/*<div className="fixed bottom-6 right-6 z-40">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 px-3.5 py-2.5 bg-slate-900 text-white hover:bg-blue-900 rounded-full shadow-lg border border-slate-700 text-xs font-semibold transition-all hover:scale-105"
        >
          <Settings2 className="w-4 h-4 text-blue-400" />
          <span>정보 및 경력기술 실시간 편집</span>
        </button>
      </div>*/}

      {/* Slide-over Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-slate-950/40 backdrop-blur-xs">
          <div className="bg-white w-full max-w-lg h-full flex flex-col shadow-2xl border-l border-slate-200 animate-in slide-in-from-right duration-200">
            {/* Header */}
            <div className="p-4 sm:p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
              <div>
                <h3 className="text-sm font-bold text-slate-900">실시간 정보 & 경력기술 수정기</h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  입력 시 홈페이지에 즉시 반영되어 실시간으로 확인하실 수 있습니다.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Tabs */}
            <div className="flex border-b border-slate-200 bg-slate-100/70 p-1 gap-1">
              <button
                type="button"
                onClick={() => setActiveTab('info')}
                className={`flex-1 py-2 text-xs font-semibold rounded-md transition-colors ${
                  activeTab === 'info'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                기본 회사정보
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('career')}
                className={`flex-1 py-2 text-xs font-semibold rounded-md transition-colors ${
                  activeTab === 'career'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                경력기술 관리 ({careers.length})
              </button>
            </div>

            {/* Form Body */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4 text-xs">
              {activeTab === 'info' ? (
                <>
                  <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg text-blue-900 leading-relaxed">
                    <strong>안내:</strong> 현재 기본값은 요청 규격에 맞춰 <code>[회사명]</code>, <code>[회사 소개]</code>, <code>[주소]</code> 등으로 표기되어 있습니다. 실제 정보로 변경해 보실 수 있습니다.
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">회사명</label>
                    <input
                      type="text"
                      value={company.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-1 focus:ring-blue-600 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">로고 이미지 URL (선택)</label>
                    <input
                      type="text"
                      value={company.logo || ''}
                      onChange={(e) => handleChange('logo', e.target.value)}
                      placeholder="https://... 또는 이미지 경로"
                      className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-1 focus:ring-blue-600 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">한 줄 소개 (슬로건)</label>
                    <input
                      type="text"
                      value={company.tagline}
                      onChange={(e) => handleChange('tagline', e.target.value)}
                      className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-1 focus:ring-blue-600 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">회사 설명 (Hero)</label>
                    <textarea
                      rows={2}
                      value={company.description}
                      onChange={(e) => handleChange('description', e.target.value)}
                      className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-1 focus:ring-blue-600 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">상세 소개 (About)</label>
                    <textarea
                      rows={2}
                      value={company.aboutDetail}
                      onChange={(e) => handleChange('aboutDetail', e.target.value)}
                      className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-1 focus:ring-blue-600 focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">전화번호</label>
                      <input
                        type="text"
                        value={company.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        className="w-full px-2.5 py-2 border border-slate-300 rounded-md focus:ring-1 focus:ring-blue-600 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">이메일</label>
                      <input
                        type="text"
                        value={company.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        className="w-full px-2.5 py-2 border border-slate-300 rounded-md focus:ring-1 focus:ring-blue-600 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">팩스번호</label>
                      <input
                        type="text"
                        value={company.fax || ''}
                        onChange={(e) => handleChange('fax', e.target.value)}
                        className="w-full px-2.5 py-2 border border-slate-300 rounded-md focus:ring-1 focus:ring-blue-600 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">회사 주소</label>
                    <input
                      type="text"
                      value={company.address}
                      onChange={(e) => handleChange('address', e.target.value)}
                      className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-1 focus:ring-blue-600 focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">영업시간</label>
                      <input
                        type="text"
                        value={company.hours}
                        onChange={(e) => handleChange('hours', e.target.value)}
                        className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-1 focus:ring-blue-600 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">대표자명</label>
                      <input
                        type="text"
                        value={company.ceo}
                        onChange={(e) => handleChange('ceo', e.target.value)}
                        className="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-1 focus:ring-blue-600 focus:outline-none"
                      />
                    </div>
                  </div>
                </>
              ) : (
                /* Career List Tab */
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                    <span className="font-semibold text-slate-700">경력 및 프로젝트 목록</span>
                    <button
                      type="button"
                      onClick={handleAddCareer}
                      className="inline-flex items-center gap-1 px-2.5 py-1.5 bg-blue-700 hover:bg-blue-800 text-white rounded-md text-xs font-semibold transition-colors"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>경력 항목 추가</span>
                    </button>
                  </div>

                  {careers.map((career, idx) => (
                    <div
                      key={career.id}
                      className="p-3.5 bg-slate-50 rounded-lg border border-slate-200 space-y-2.5 relative"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-slate-800">이력 #{idx + 1}</span>
                        {careers.length > 1 && (
                          <button
                            type="button"
                            onClick={() => handleRemoveCareer(idx)}
                            className="text-rose-500 hover:text-rose-700 p-1"
                            title="삭제"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>

                      <div>
                        <label className="block text-slate-600 font-medium mb-1">경력 내용 (기간 제외)</label>
                        <textarea
                          rows={2}
                          value={career.content}
                          onChange={(e) => handleCareerChange(idx, e.target.value)}
                          placeholder="[경력 내용 입력]"
                          className="w-full px-2.5 py-1.5 border border-slate-300 rounded bg-white text-xs leading-relaxed focus:ring-1 focus:ring-blue-600 focus:outline-none"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Code Modification Location Guide */}
              <div className="pt-3 border-t border-slate-200">
                <button
                  type="button"
                  onClick={() => setShowCodeGuide(!showCodeGuide)}
                  className="flex items-center gap-1.5 text-blue-700 font-semibold hover:underline"
                >
                  <FileCode2 className="w-3.5 h-3.5" />
                  <span>소스코드에서 영구 변경하는 위치 보기</span>
                </button>

                {showCodeGuide && (
                  <div className="mt-2 p-3 bg-slate-900 text-slate-200 rounded-lg text-[11px] font-mono leading-relaxed">
                    <p className="text-slate-400 mb-1">// 수정할 파일 위치:</p>
                    <p className="text-emerald-400 font-bold">src/data/companyData.ts</p>
                    <p className="mt-2 text-slate-300">
                      해당 파일에서 <code>initialCompanyConfig</code> 및 <code>defaultCareers</code> 데이터를 수정하시면 모든 화면에 일괄 영구 반영됩니다.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Drawer Footer Actions */}
            <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={handleReset}
                className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-700 bg-white border border-slate-300 hover:bg-slate-100 rounded-lg transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>템플릿 기본값 복원</span>
              </button>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-1 px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-blue-900 rounded-lg transition-colors"
              >
                <Check className="w-3.5 h-3.5" />
                <span>적용 및 닫기</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
