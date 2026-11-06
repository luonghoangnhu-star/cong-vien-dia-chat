import React from 'react';
import { Award, Compass, MapPin, Sparkles, ShieldCheck, ChevronRight, FileCheck } from 'lucide-react';
import { OFFICIAL_OVERVIEW } from '../data/geoparkData';

interface HeroProps {
  onExploreRoutes: () => void;
  onExploreSites: () => void;
  onExploreMap: () => void;
  onExploreNaDuong: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreRoutes,
  onExploreSites,
  onExploreMap,
  onExploreNaDuong,
}) => {
  return (
    <div id="overview" className="relative overflow-hidden bg-stone-950 text-stone-100 border-b border-stone-800">
      {/* Background atmospheric gradient and subtle topographic pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(16,185,129,0.18),rgba(0,0,0,0))] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-stone-900/60 via-stone-950/80 to-stone-950 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 lg:pt-20 lg:pb-24">
        {/* UNESCO Recognition Banner */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/70 border border-emerald-500/40 text-emerald-300 text-xs sm:text-sm font-semibold shadow-inner">
            <Award className="w-4 h-4 text-emerald-400" />
            <span>DANH HIỆU CÔNG VIÊN ĐỊA CHẤT TOÀN CẦU UNESCO</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-stone-900/80 border border-stone-800 text-stone-300 text-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            <span>Nguồn chính thức: langsongeopark.com.vn</span>
          </div>
        </div>

        {/* Hero Titles */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight font-serif">
            CÔNG VIÊN ĐỊA CHẤT TOÀN CẦU <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300">
              UNESCO LẠNG SƠN
            </span>
          </h1>

          <div className="flex items-center justify-center gap-3">
            <div className="h-[1px] w-12 bg-amber-500/40" />
            <p className="text-base sm:text-xl lg:text-2xl font-serif italic text-amber-200/90 tracking-wide font-normal">
              "{OFFICIAL_OVERVIEW.themeSlogan}"
            </p>
            <div className="h-[1px] w-12 bg-amber-500/40" />
          </div>

          <p className="text-stone-300 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed pt-2">
            Không gian di sản hùng vĩ trải rộng trên diện tích <strong className="text-emerald-300 font-semibold">{OFFICIAL_OVERVIEW.areaKm2} km²</strong> (chiếm 58% toàn tỉnh Lạng Sơn), nơi hội tụ kỳ quan karst đại dương cổ 300 triệu năm, "cửa sổ thế giới đầm hồ cổ sinh Eocene" Na Dương độc nhất vô nhị, cùng bề dày lịch sử tiền sử Thẩm Khuyên và linh khí Tín ngưỡng thờ Mẫu Tam phủ của 7 dân tộc anh em.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 pt-8">
          <button
            onClick={onExploreRoutes}
            className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-sm sm:text-base shadow-lg shadow-emerald-900/30 flex items-center gap-2 hover:gap-3 transition-all cursor-pointer"
          >
            <Compass className="w-5 h-5" />
            <span>Khám phá 04 Tuyến di sản</span>
            <ChevronRight className="w-4 h-4" />
          </button>

          <button
            onClick={onExploreSites}
            className="px-5 py-3 rounded-xl bg-stone-800/90 hover:bg-stone-700/90 text-stone-200 hover:text-white font-medium text-sm sm:text-base border border-stone-700 shadow-md flex items-center gap-2 transition-all cursor-pointer"
          >
            <MapPin className="w-5 h-5 text-amber-400" />
            <span>Tra cứu 38 Điểm di sản</span>
          </button>

          <button
            onClick={onExploreMap}
            className="px-5 py-3 rounded-xl bg-stone-900/90 hover:bg-stone-800 text-stone-300 hover:text-emerald-300 font-medium text-sm sm:text-base border border-stone-800 flex items-center gap-2 transition-all cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span>Bản đồ số hóa</span>
          </button>

          <button
            onClick={onExploreNaDuong}
            className="px-5 py-3 rounded-xl bg-amber-950/40 hover:bg-amber-900/50 text-amber-300 font-medium text-sm sm:text-base border border-amber-600/40 flex items-center gap-2 transition-all cursor-pointer"
          >
            <Award className="w-4 h-4 text-amber-400" />
            <span>Bồn trũng Na Dương</span>
          </button>
        </div>

        {/* Official Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mt-12 pt-8 border-t border-stone-800/80">
          <div className="bg-stone-900/60 p-4 rounded-xl border border-stone-800 text-center hover:border-emerald-500/30 transition-colors">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono">
              {OFFICIAL_OVERVIEW.areaKm2}
            </div>
            <div className="text-xs text-stone-400 font-medium mt-1">km² Tổng diện tích</div>
            <div className="text-[11px] text-emerald-500/80 mt-0.5">58% diện tích tỉnh</div>
          </div>

          <div className="bg-stone-900/60 p-4 rounded-xl border border-stone-800 text-center hover:border-emerald-500/30 transition-colors">
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono">
              04
            </div>
            <div className="text-xs text-stone-400 font-medium mt-1">Tuyến du lịch di sản</div>
            <div className="text-[11px] text-amber-500/80 mt-0.5">Quy hoạch chuyên đề</div>
          </div>

          <div className="bg-stone-900/60 p-4 rounded-xl border border-stone-800 text-center hover:border-emerald-500/30 transition-colors">
            <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-mono">
              38
            </div>
            <div className="text-xs text-stone-400 font-medium mt-1">Điểm tham quan</div>
            <div className="text-[11px] text-cyan-500/80 mt-0.5">Địa chất - Văn hóa</div>
          </div>

          <div className="bg-stone-900/60 p-4 rounded-xl border border-stone-800 text-center hover:border-emerald-500/30 transition-colors">
            <div className="text-2xl sm:text-3xl font-extrabold text-purple-400 font-mono">
              08
            </div>
            <div className="text-xs text-stone-400 font-medium mt-1">Huyện & Thành phố</div>
            <div className="text-[11px] text-purple-400/80 mt-0.5">Thuộc phạm vi CVĐC</div>
          </div>

          <div className="bg-stone-900/60 p-4 rounded-xl border border-stone-800 text-center hover:border-emerald-500/30 transition-colors">
            <div className="text-2xl sm:text-3xl font-extrabold text-rose-400 font-mono">
              627.500
            </div>
            <div className="text-xs text-stone-400 font-medium mt-1">Người dân</div>
            <div className="text-[11px] text-rose-400/80 mt-0.5">78% dân số tỉnh</div>
          </div>

          <div className="bg-stone-900/60 p-4 rounded-xl border border-stone-800 text-center hover:border-emerald-500/30 transition-colors">
            <div className="text-2xl sm:text-3xl font-extrabold text-teal-400 font-mono">
              07
            </div>
            <div className="text-xs text-stone-400 font-medium mt-1">Dân tộc anh em</div>
            <div className="text-[11px] text-teal-400/80 mt-0.5">Tày, Nùng, Kinh, Dao...</div>
          </div>
        </div>

        {/* UNESCO Milestone & Mission highlight box */}
        <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-stone-900 via-stone-900/95 to-emerald-950/40 border border-emerald-900/50 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-xl bg-emerald-900/50 border border-emerald-700/40 text-emerald-300 shrink-0">
              <FileCheck className="w-5 h-5" />
            </div>
            <div className="text-xs sm:text-sm text-stone-300">
              <p className="font-semibold text-emerald-300">
                Mốc công nhận lịch sử:
              </p>
              <p className="text-stone-400 mt-0.5">
                Ngày <strong className="text-stone-200">08/09/2024</strong>: Hội đồng Công viên Địa chất Toàn cầu UNESCO biểu quyết thông qua công nhận tại Cao Bằng; chính thức vinh danh đón nhận bằng vào <strong className="text-stone-200">tháng 4/2025</strong>.
              </p>
            </div>
          </div>

          <div className="text-xs text-stone-400 shrink-0 pl-11 md:pl-0 border-t md:border-t-0 md:border-l border-stone-800 pt-2 md:pt-0 md:pl-4">
            <span className="text-amber-300 font-medium">Sứ mệnh cốt lõi:</span> Bảo tồn di sản địa chất & văn hóa gắn với giáo dục cộng đồng và du lịch bền vững.
          </div>
        </div>
      </div>
    </div>
  );
};
