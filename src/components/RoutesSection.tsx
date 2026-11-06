import React, { useState } from 'react';
import { Compass, Sparkles, MapPin, ArrowRight, CheckCircle2, Trees, ShieldAlert, Mountain } from 'lucide-react';
import { GEOPARK_ROUTES, GEOPARK_SITES, GeoparkSite } from '../data/geoparkData';

interface RoutesSectionProps {
  onSelectSite: (site: GeoparkSite) => void;
  onFilterByRoute: (routeId: 1 | 2 | 3 | 4) => void;
}

export const RoutesSection: React.FC<RoutesSectionProps> = ({ onSelectSite, onFilterByRoute }) => {
  const [selectedRouteId, setSelectedRouteId] = useState<1 | 2 | 3 | 4>(1);

  const currentRoute = GEOPARK_ROUTES.find((r) => r.id === selectedRouteId) || GEOPARK_ROUTES[0];
  const routeSites = GEOPARK_SITES.filter((s) => s.routeId === selectedRouteId);

  return (
    <section id="routes" className="py-16 sm:py-20 bg-stone-900 text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-600/40 text-emerald-300 text-xs font-semibold mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>HỆ THỐNG DU LỊCH CHUYÊN ĐỀ CHÍNH THỨC</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold font-serif tracking-tight text-white">
            04 Tuyến Du Lịch Di Sản Kỳ Thú
          </h2>
          <p className="mt-3 text-stone-300 text-sm sm:text-base leading-relaxed">
            Hệ thống tuyến điểm được thiết kế hài hòa giữa địa chất, lịch sử hào hùng và tín ngưỡng dân gian Tứ Phủ (Thượng Ngàn - Thiên Giới - Trần Thế - Thủy Cung), đưa du khách trải nghiệm trọn vẹn bản sắc văn hóa xứ Lạng.
          </p>
        </div>

        {/* 4 Route Selectors */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {GEOPARK_ROUTES.map((route) => {
            const isSelected = route.id === selectedRouteId;
            return (
              <button
                key={route.id}
                onClick={() => setSelectedRouteId(route.id)}
                className={`text-left p-4 rounded-2xl transition-all duration-200 border cursor-pointer relative overflow-hidden ${
                  isSelected
                    ? 'bg-stone-800/90 shadow-xl border-amber-500/80 ring-2 ring-amber-500/20'
                    : 'bg-stone-950/60 hover:bg-stone-800/50 border-stone-800 text-stone-400 hover:text-stone-200'
                }`}
              >
                {/* Visual color bar indicator */}
                <div
                  className="h-1.5 w-12 rounded-full mb-3"
                  style={{ backgroundColor: route.colorHex }}
                />

                <div className="text-xs font-semibold uppercase tracking-wider text-stone-400 flex items-center justify-between">
                  <span>Tuyến số {route.id}</span>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-stone-900 border border-stone-700 text-stone-300">
                    ~{route.lengthKm} km
                  </span>
                </div>

                <div className={`text-base font-bold mt-1 font-serif line-clamp-1 ${isSelected ? 'text-white' : 'text-stone-300'}`}>
                  {route.name}
                </div>

                <div className="text-xs text-stone-400 mt-2 line-clamp-2 leading-relaxed">
                  {route.spiritualMeaning}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Route Spotlight Card */}
        <div className="bg-stone-950/90 rounded-3xl border border-stone-800 p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden">
          {/* Decorative glowing background accent */}
          <div
            className="absolute -top-24 -right-24 w-96 h-96 rounded-full blur-3xl opacity-15 pointer-events-none"
            style={{ backgroundColor: currentRoute.colorHex }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
            {/* Route description & spiritual meaning */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span
                  className="px-3 py-1 rounded-full text-xs font-bold text-white shadow-sm"
                  style={{ backgroundColor: currentRoute.colorHex }}
                >
                  Tuyến {currentRoute.id}
                </span>
                <span className="text-xs font-medium text-stone-400">
                  Chiều dài: <strong className="text-stone-200">{currentRoute.lengthKm} km</strong>
                </span>
                <span className="text-stone-600">|</span>
                <span className="text-xs font-medium text-stone-400">
                  Địa bàn: <strong className="text-stone-200">{currentRoute.mainDistricts.join(', ')}</strong>
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-serif text-white tracking-tight">
                  {currentRoute.name}
                </h3>
                <p className="text-xs sm:text-sm text-stone-400 italic mt-0.5 font-sans">
                  {currentRoute.nameEn}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-stone-900/80 border border-stone-800">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-300 mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Ý nghĩa tâm linh & Triết lý Đạo Mẫu</span>
                </div>
                <p className="text-sm text-stone-300 leading-relaxed font-sans">
                  {currentRoute.spiritualMeaning}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-2">
                  Hành trình tóm tắt
                </h4>
                <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                  {currentRoute.summary}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-3">
                  Điểm nhấn nổi bật trong tuyến
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentRoute.keyFeatures.map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 text-xs sm:text-sm text-stone-300 bg-stone-900/60 p-2.5 rounded-xl border border-stone-800/80"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={() => onFilterByRoute(currentRoute.id)}
                  className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer shadow-md"
                >
                  <span>Xem tất cả điểm đến Tuyến {currentRoute.id}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Sites list under this route */}
            <div className="lg:col-span-5 bg-stone-900/80 rounded-2xl border border-stone-800 p-5 space-y-4">
              <div className="flex items-center justify-between border-b border-stone-800 pb-3">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-amber-400" />
                  <span className="text-sm font-bold text-white uppercase tracking-wider">
                    Các điểm đến tiêu biểu
                  </span>
                </div>
                <span className="text-xs text-stone-400">
                  {routeSites.length} điểm ghi nhận
                </span>
              </div>

              <div className="space-y-2.5 max-h-[440px] overflow-y-auto pr-1">
                {routeSites.map((site) => (
                  <div
                    key={site.id}
                    onClick={() => onSelectSite(site)}
                    className="p-3 rounded-xl bg-stone-950/70 hover:bg-stone-800/90 border border-stone-800 hover:border-amber-500/40 transition-all cursor-pointer group flex items-start justify-between gap-3"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-stone-800 text-amber-300 border border-stone-700">
                          {site.siteCode}
                        </span>
                        <span className="text-xs text-stone-400">
                          {site.district}
                        </span>
                      </div>
                      <div className="text-sm font-semibold text-stone-200 group-hover:text-amber-300 transition-colors mt-1">
                        {site.name}
                      </div>
                      <p className="text-xs text-stone-400 line-clamp-1 mt-0.5">
                        {site.shortDesc}
                      </p>
                    </div>

                    <ArrowRight className="w-4 h-4 text-stone-500 group-hover:text-amber-400 group-hover:translate-x-1 transition-all shrink-0 mt-2" />
                  </div>
                ))}
              </div>

              <div className="pt-2 text-center text-xs text-stone-400 border-t border-stone-800">
                Nhấp vào từng điểm để mở thông tin chi tiết, tọa độ và giá trị di sản.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
