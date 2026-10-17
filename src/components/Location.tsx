import React, { useState, useEffect, useRef } from 'react';
import { CompanyConfig } from '../types';
import { MapPin, Copy, Check, ExternalLink, HelpCircle, Code, Navigation, Info } from 'lucide-react';

interface LocationProps {
  company: CompanyConfig;
}

declare global {
  interface Window {
    daum?: {
      roughmap?: {
        Lander: new (params: {
          timestamp: string;
          key: string;
          mapWidth: string;
          mapHeight: string;
        }) => { render: () => void };
        onDataLoad?: (data: string) => void;
        instances?: Record<string, any>;
      };
      maps?: any;
    };
    kakao?: any;
  }
}

export const Location: React.FC<LocationProps> = ({ company }) => {
  const [copied, setCopied] = useState(false);
  const [showGuide, setShowGuide] = useState(false);
  const [isRendered, setIsRendered] = useState(false);
  const mapWrapperRef = useRef<HTMLDivElement>(null);

  // Default roughmap timestamp & key
  const roughmapTimestamp = company.kakaoRoughmapTimestamp || '1792207371702';
  const roughmapKey = company.kakaoRoughmapKey || '3euhdqeanio';

  // Address copy handler
  const copyAddress = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(company.address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Render Kakao Map Roughmap (지도 퍼가기)
  useEffect(() => {
  let isCancelled = false;
  let retryTimer: ReturnType<typeof setTimeout>;

  const renderKakaoRoughmap = () => {
    if (isCancelled) return;

    const container = document.getElementById(
      `daumRoughmapContainer${roughmapTimestamp}`
    );

    if (!container) return;

    if (window.daum?.roughmap?.Lander) {
      container.innerHTML = '';

      new window.daum.roughmap.Lander({
        timestamp: roughmapTimestamp,
        key: roughmapKey,
        mapWidth: '100%',
        mapHeight: '350',
      }).render();
    } else {
      retryTimer = setTimeout(renderKakaoRoughmap, 200);
    }
  };

  retryTimer = setTimeout(renderKakaoRoughmap, 200);

  return () => {
    isCancelled = true;
    clearTimeout(retryTimer);
  };
}, [roughmapTimestamp, roughmapKey]);




  // Search URLs for Kakao Map and Naver Map
  const kakaoMapUrl = `https://map.kakao.com/link/search/${encodeURIComponent(company.address)}`;
  const naverMapUrl = `https://map.naver.com/v5/search/${encodeURIComponent(company.address)}`;

  return (
    <section id="location" className="py-20 md:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
              오시는 길
            </h2>
          </div>


        </div>

      

        {/* Map Viewer Container with Address Display & Actions */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
          {/* Map Top Header: Address & Copy Action Bar */}
          <div className="p-4 sm:p-5 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-8 h-8 rounded-lg bg-gray-100 text-gray-700 flex items-center justify-center shrink-0 border border-gray-200/60">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  회사 위치 주소
                </span>
                <span className="text-sm sm:text-base font-bold text-slate-900 truncate block">
                  {company.address}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
              {/* Address Copy Button */}
              <button
                type="button"
                onClick={copyAddress}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 active:bg-slate-300 rounded-lg transition-colors cursor-pointer"
                title="주소 클립보드 복사"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700 font-bold">주소 복사됨</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-500" />
                    <span>주소 복사</span>
                  </>
                )}
              </button>

              {/* Direct Kakao Search Link */}
              <a
                href={kakaoMapUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1.5 bg-slate-50 hover:bg-slate-200 text-slate-700 rounded-lg transition-colors text-xs font-bold shadow-2xs border border-slate-200"
                title="카카오맵에서 크게보기 및 길찾기"
              >
                <Navigation className="w-3 h-3 text-slate-900" />
                <span>카카오맵 길찾기</span>
                <ExternalLink className="w-3 h-3 text-slate-700 ml-0.5" />
              </a>

              {/* Naver Map Link */}
              <a
                href={naverMapUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1.5 bg-slate-50 hover:bg-slate-200 text-slate-700 rounded-lg transition-colors text-xs font-semibold border border-slate-200"
                title="네이버 지도에서 보기"
              >
                <span>네이버 지도</span>
                <ExternalLink className="w-3 h-3 text-slate-700" />
              </a>
            </div>
          </div>
          

          {/* Map Body: Pure Kakao Map Roughmap Container */}
          <div ref={mapWrapperRef} className="relative min-h-[440px] w-full bg-slate-100 overflow-hidden isolate select-none flex flex-col justify-center">
            {/* Kakao Roughmap Target Container */}
            <div
              id={`daumRoughmapContainer${roughmapTimestamp}`}
              className="root_daum_roughmap root_daum_roughmap_landing w-full"
              style={{ width: '100%', minHeight: '440px' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
