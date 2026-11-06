import React from 'react';
import { X, MapPin, Award, CheckCircle2, Compass, Layers, ShieldCheck } from 'lucide-react';
import { GeoparkSite, GEOPARK_ROUTES } from '../data/geoparkData';

interface SiteModalProps {
  site: GeoparkSite | null;
  onClose: () => void;
  onViewRoute: (routeId: 1 | 2 | 3 | 4) => void;
}

export const SiteModal: React.FC<SiteModalProps> = ({ site, onClose, onViewRoute }) => {
  if (!site) return null;

  const route = GEOPARK_ROUTES.find((r) => r.id === site.routeId);

  const getCategoryLabel = (cat: string) => {
    switch (cat) {
      case 'geology':
        return 'Di sản Địa chất - Cổ sinh';
      case 'culture_spiritual':
        return 'Văn hóa - Tâm linh - Tín ngưỡng';
      case 'history_archeology':
        return 'Lịch sử - Cổ nhân chủng học';
      case 'biodiversity_nature':
        return 'Đa dạng sinh học - Cảnh quan Karst';
      case 'craft_community':
        return 'Làng nghề - Du lịch cộng đồng';
      default:
        return 'Di sản tổng hợp';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl max-h-[90vh] bg-stone-900 border border-stone-700/80 rounded-3xl shadow-2xl flex flex-col overflow-hidden text-stone-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 border-b border-stone-800 flex items-start justify-between gap-4 bg-stone-950/70">
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-stone-800 text-amber-300 border border-stone-700">
                {site.siteCode}
              </span>
              {route && (
                <span
                  className="text-xs font-semibold px-2.5 py-0.5 rounded-full text-white shadow-xs"
                  style={{ backgroundColor: route.colorHex }}
                >
                  Tuyến {route.id}: {route.name}
                </span>
              )}
              <span className="text-xs text-stone-400 font-medium px-2 py-0.5 rounded bg-stone-900 border border-stone-800">
                {getCategoryLabel(site.category)}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold font-serif text-white pt-1">
              {site.name}
            </h3>
            <p className="text-xs text-stone-400 italic">
              {site.nameEn}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-white rounded-xl bg-stone-800/80 hover:bg-stone-700 transition-colors shrink-0 cursor-pointer"
            aria-label="Đóng cửa sổ"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body Scrollable */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs sm:text-sm">
          {/* Location & GPS Info */}
          <div className="flex flex-wrap items-center justify-between gap-2 p-3 rounded-xl bg-stone-950 border border-stone-800 text-stone-300">
            <div className="flex items-center gap-1.5 text-emerald-400 font-medium">
              <MapPin className="w-4 h-4 shrink-0" />
              <span>{site.district}</span>
            </div>
            <div className="font-mono text-stone-400 text-xs">
              Tọa độ: {site.coordinates.lat.toFixed(4)}°B, {site.coordinates.lng.toFixed(4)}°Đ
            </div>
          </div>

          {/* Geological Age if available */}
          {site.geologicalAge && (
            <div className="p-3 rounded-xl bg-amber-950/30 border border-amber-800/40 text-amber-300 flex items-center gap-2">
              <Layers className="w-4 h-4 shrink-0" />
              <span><strong>Niên đại địa chất:</strong> {site.geologicalAge}</span>
            </div>
          )}

          {/* Detailed Description */}
          <div className="space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-stone-400">
              Mô tả chi tiết di sản
            </div>
            <p className="text-stone-300 leading-relaxed bg-stone-950/60 p-4 rounded-xl border border-stone-800/60">
              {site.fullDesc}
            </p>
          </div>

          {/* Highlights */}
          <div className="space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-stone-400">
              Điểm nhấn tham quan nổi bật
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {site.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2 p-2.5 rounded-lg bg-stone-950/70 border border-stone-800/80 text-stone-300 text-xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* UNESCO Significance */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-950/40 to-stone-950 border border-emerald-800/40 space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              <span>Giá trị tiêu biểu trong hồ sơ UNESCO Geopark:</span>
            </div>
            <p className="text-stone-300 text-xs leading-relaxed">
              {site.unescoSignificance}
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-stone-800 bg-stone-950/80 flex flex-wrap items-center justify-between gap-3 text-xs">
          <button
            onClick={() => {
              onClose();
              onViewRoute(site.routeId);
            }}
            className="text-amber-400 hover:underline flex items-center gap-1.5 cursor-pointer font-medium"
          >
            <Compass className="w-3.5 h-3.5" />
            <span>Xem thông tin Tuyến {site.routeId}</span>
          </button>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 transition-colors cursor-pointer"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};
