import React, { useState } from 'react';
import { Map, MapPin, Layers, Navigation, Info, ExternalLink, Sparkles } from 'lucide-react';
import { GEOPARK_SITES, GEOPARK_ROUTES, GeoparkSite } from '../data/geoparkData';

interface InteractiveMapProps {
  onSelectSite: (site: GeoparkSite) => void;
}

export const InteractiveMap: React.FC<InteractiveMapProps> = ({ onSelectSite }) => {
  const [activeDistrict, setActiveDistrict] = useState<string | null>(null);
  const [filterRoute, setFilterRoute] = useState<number | 'all'>('all');
  const [hoveredSite, setHoveredSite] = useState<GeoparkSite | null>(null);

  // Administrative districts information
  const districtData: Record<
    string,
    { name: string; tag: string; description: string; dominantRoute: number; center: { x: number; y: number } }
  > = {
    'Bắc Sơn': {
      name: 'Huyện Bắc Sơn',
      tag: 'Miền thung lũng karst & Khởi nghĩa',
      description: 'Cái nôi văn hóa khảo cổ học Bắc Sơn, làng ngói âm dương Quỳnh Sơn, đỉnh Nà Lay và phong trào Khởi nghĩa Bắc Sơn 1940.',
      dominantRoute: 2,
      center: { x: 22, y: 38 },
    },
    'Bình Gia': {
      name: 'Một phần Huyện Bình Gia',
      tag: 'Cái nôi cổ nhân chủng học',
      description: 'Cụm hang động Thẩm Khuyên - Thẩm Hai nơi phát hiện răng Người vượn cổ Homo erectus và Gigantopithecus hàng trăm nghìn năm.',
      dominantRoute: 2,
      center: { x: 34, y: 22 },
    },
    'Văn Quan': {
      name: 'Huyện Văn Quan',
      tag: 'Xứ sở Hồi & Bãi đá nhảy',
      description: 'Thủ phủ hoa hồi với những cánh rừng hồi ngút ngàn, tinh dầu hồi quý và hiện tượng kiến tạo Bãi đá nhảy Đèo Lùng Pa.',
      dominantRoute: 2,
      center: { x: 44, y: 48 },
    },
    'Hữu Lũng': {
      name: 'Huyện Hữu Lũng',
      tag: 'Thảo nguyên karst & Đền Bắc Lệ',
      description: 'Khu bảo tồn Hữu Liên, thảo nguyên Đồng Lâm kỳ vĩ, bãi đá san hô cổ đại dương Permian và trung tâm thờ Mẫu Đền Bắc Lệ.',
      dominantRoute: 1,
      center: { x: 28, y: 78 },
    },
    'Chi Lăng': {
      name: 'Huyện Chi Lăng',
      tag: 'Cửa ải lịch sử & Vương quốc na',
      description: 'Ải Chi Lăng hiểm trở vang dội chiến công đánh giặc Liễu Thăng, vương quốc na leo vách đá và làng nghề cao khô Vạn Linh.',
      dominantRoute: 1,
      center: { x: 46, y: 72 },
    },
    'TP. Lạng Sơn': {
      name: 'Thành phố Lạng Sơn',
      tag: 'Đệ nhất bát cảnh & Trung tâm Geopark',
      description: 'Trung tâm thông tin Geopark, Động Nhị Thanh - Chùa Tam Thanh, sông Kỳ Cùng chảy ngược, Đền Mẫu Thoải và di chỉ Mai Pha.',
      dominantRoute: 4,
      center: { x: 62, y: 52 },
    },
    'Cao Lộc': {
      name: 'Một phần Huyện Cao Lộc',
      tag: 'Cửa ngõ biên cương & Cửa khẩu Hữu Nghị',
      description: 'Cột mốc Cửa khẩu Quốc tế Hữu Nghị, Đền Mẫu Đồng Đăng biên giới và dải đồi núi giáp biên kiên cường.',
      dominantRoute: 2,
      center: { x: 66, y: 32 },
    },
    'Lộc Bình': {
      name: 'Huyện Lộc Bình',
      tag: 'Cánh cửa Eocene Na Dương & Đỉnh Mẫu Sơn',
      description: 'Bồn trũng đầm hồ than nâu Na Dương lưu giữ hóa thạch cá sấu cổ 40-50 triệu năm, thác Bản Khiếng và đỉnh non cao Mẫu Sơn 1.541m.',
      dominantRoute: 4,
      center: { x: 78, y: 64 },
    },
  };

  // Filtered sites for map view
  const mapSites = GEOPARK_SITES.filter((site) => {
    if (filterRoute !== 'all' && site.routeId !== filterRoute) return false;
    if (activeDistrict && !site.district.includes(activeDistrict)) return false;
    return true;
  });

  // Calculate approximate SVG coordinates based on lat/lng range of Lang Son
  // Lat: 21.5 to 22.0, Lng: 106.25 to 107.05
  const getSvgCoordinates = (lat: number, lng: number) => {
    const minLat = 21.5;
    const maxLat = 22.02;
    const minLng = 106.25;
    const maxLng = 107.05;

    const x = ((lng - minLng) / (maxLng - minLng)) * 88 + 6;
    const y = ((maxLat - lat) / (maxLat - minLat)) * 82 + 9;
    return { x: Math.max(5, Math.min(95, x)), y: Math.max(5, Math.min(95, y)) };
  };

  const getRouteColor = (routeId: 1 | 2 | 3 | 4) => {
    switch (routeId) {
      case 1:
        return '#16a34a'; // Green
      case 2:
        return '#dc2626'; // Red
      case 3:
        return '#ca8a04'; // Yellow
      case 4:
        return '#0284c7'; // Blue
      default:
        return '#10b981';
    }
  };

  return (
    <section id="map" className="py-16 sm:py-20 bg-stone-900 text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-600/40 text-emerald-300 text-xs font-semibold mb-3">
            <Navigation className="w-3.5 h-3.5" />
            <span>MẠNG LƯỚI KHÔNG GIAN ĐỊA CHẤT & DI SẢN</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold font-serif tracking-tight text-white">
            Bản Đồ Tương Tác 08 Đơn Vị Hành Chính & 4 Tuyến
          </h2>
          <p className="mt-3 text-stone-300 text-sm sm:text-base leading-relaxed">
            Khám phá sự phân bố địa lý của 38 điểm di sản qua 8 huyện/thành phố trên tổng diện tích 4.842,58 km². Nhấp vào từng phân vùng hoặc điểm ghim để xem thông tin trực quan.
          </p>
        </div>

        {/* Map Route Filter Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 bg-stone-950/80 p-3 rounded-2xl border border-stone-800">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-stone-400 font-medium px-2">Lọc theo tuyến:</span>
            <button
              onClick={() => setFilterRoute('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer transition-colors ${
                filterRoute === 'all'
                  ? 'bg-stone-700 text-white'
                  : 'bg-stone-900 text-stone-400 hover:text-stone-200'
              }`}
            >
              Toàn bộ mạng lưới
            </button>
            {GEOPARK_ROUTES.map((r) => (
              <button
                key={r.id}
                onClick={() => setFilterRoute(r.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer transition-all flex items-center gap-1.5 ${
                  filterRoute === r.id
                    ? 'text-white shadow-sm ring-1 ring-white/20'
                    : 'bg-stone-900/90 text-stone-400 hover:text-stone-200'
                }`}
                style={{
                  backgroundColor: filterRoute === r.id ? r.colorHex : undefined,
                }}
              >
                <span
                  className="w-2 h-2 rounded-full inline-block"
                  style={{ backgroundColor: r.colorHex }}
                />
                <span>Tuyến {r.id}</span>
              </button>
            ))}
          </div>

          {activeDistrict && (
            <div className="flex items-center gap-2 text-xs">
              <span className="text-amber-300 font-medium">Đang chọn: {districtData[activeDistrict]?.name}</span>
              <button
                onClick={() => setActiveDistrict(null)}
                className="text-stone-400 hover:text-white underline cursor-pointer"
              >
                Bỏ chọn
              </button>
            </div>
          )}
        </div>

        {/* Map Display & District Insight Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Visual SVG Interactive Map Canvas */}
          <div className="lg:col-span-8 bg-stone-950 rounded-3xl border border-stone-800 p-4 sm:p-6 shadow-2xl relative">
            <div className="flex items-center justify-between pb-3 mb-2 border-b border-stone-800/80 text-xs text-stone-400">
              <span className="flex items-center gap-1.5 font-medium text-emerald-400">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Sơ đồ không gian di sản số hóa Lạng Sơn Geopark</span>
              </span>
              <span>Khu vực: Đông Bắc Việt Nam (Biên giới Việt - Trung)</span>
            </div>

            {/* SVG Visual Canvas */}
            <div className="relative w-full aspect-[4/3] bg-radial from-stone-900 via-stone-950 to-black rounded-2xl overflow-hidden border border-stone-800/60 p-2">
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full select-none"
                style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.5))' }}
              >
                {/* Background grid lines */}
                <defs>
                  <pattern id="mapGrid" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100" height="100" fill="url(#mapGrid)" />

                {/* Conceptual Schematic Regions of the 8 Units */}
                {/* North-West: Bắc Sơn */}
                <path
                  d="M 8,25 L 30,22 L 34,48 L 16,52 Z"
                  fill={activeDistrict === 'Bắc Sơn' ? 'rgba(202, 138, 4, 0.4)' : 'rgba(202, 138, 4, 0.12)'}
                  stroke="#ca8a04"
                  strokeWidth={activeDistrict === 'Bắc Sơn' ? '0.8' : '0.4'}
                  strokeDasharray="1,1"
                  className="cursor-pointer transition-colors hover:fill-amber-500/30"
                  onClick={() => setActiveDistrict('Bắc Sơn')}
                />

                {/* North: Bình Gia */}
                <path
                  d="M 28,12 L 48,10 L 46,30 L 30,22 Z"
                  fill={activeDistrict === 'Bình Gia' ? 'rgba(220, 38, 38, 0.4)' : 'rgba(220, 38, 38, 0.12)'}
                  stroke="#dc2626"
                  strokeWidth={activeDistrict === 'Bình Gia' ? '0.8' : '0.4'}
                  strokeDasharray="1,1"
                  className="cursor-pointer transition-colors hover:fill-red-500/30"
                  onClick={() => setActiveDistrict('Bình Gia')}
                />

                {/* Center-West: Văn Quan */}
                <path
                  d="M 32,38 L 52,34 L 54,60 L 34,60 Z"
                  fill={activeDistrict === 'Văn Quan' ? 'rgba(220, 38, 38, 0.4)' : 'rgba(220, 38, 38, 0.12)'}
                  stroke="#dc2626"
                  strokeWidth={activeDistrict === 'Văn Quan' ? '0.8' : '0.4'}
                  strokeDasharray="1,1"
                  className="cursor-pointer transition-colors hover:fill-red-500/30"
                  onClick={() => setActiveDistrict('Văn Quan')}
                />

                {/* South-West: Hữu Lũng */}
                <path
                  d="M 14,64 L 38,62 L 36,92 L 18,94 Z"
                  fill={activeDistrict === 'Hữu Lũng' ? 'rgba(22, 163, 74, 0.4)' : 'rgba(22, 163, 74, 0.12)'}
                  stroke="#16a34a"
                  strokeWidth={activeDistrict === 'Hữu Lũng' ? '0.8' : '0.4'}
                  strokeDasharray="1,1"
                  className="cursor-pointer transition-colors hover:fill-emerald-500/30"
                  onClick={() => setActiveDistrict('Hữu Lũng')}
                />

                {/* South: Chi Lăng */}
                <path
                  d="M 38,62 L 56,58 L 56,86 L 36,92 Z"
                  fill={activeDistrict === 'Chi Lăng' ? 'rgba(22, 163, 74, 0.4)' : 'rgba(22, 163, 74, 0.12)'}
                  stroke="#16a34a"
                  strokeWidth={activeDistrict === 'Chi Lăng' ? '0.8' : '0.4'}
                  strokeDasharray="1,1"
                  className="cursor-pointer transition-colors hover:fill-emerald-500/30"
                  onClick={() => setActiveDistrict('Chi Lăng')}
                />

                {/* Center-North: Cao Lộc */}
                <path
                  d="M 54,20 L 78,16 L 80,44 L 58,40 Z"
                  fill={activeDistrict === 'Cao Lộc' ? 'rgba(220, 38, 38, 0.4)' : 'rgba(220, 38, 38, 0.12)'}
                  stroke="#dc2626"
                  strokeWidth={activeDistrict === 'Cao Lộc' ? '0.8' : '0.4'}
                  strokeDasharray="1,1"
                  className="cursor-pointer transition-colors hover:fill-red-500/30"
                  onClick={() => setActiveDistrict('Cao Lộc')}
                />

                {/* Center: TP. Lạng Sơn */}
                <circle
                  cx="62"
                  cy="52"
                  r="6.5"
                  fill={activeDistrict === 'TP. Lạng Sơn' ? 'rgba(2, 132, 199, 0.5)' : 'rgba(2, 132, 199, 0.2)'}
                  stroke="#0284c7"
                  strokeWidth={activeDistrict === 'TP. Lạng Sơn' ? '1' : '0.5'}
                  className="cursor-pointer transition-colors hover:fill-cyan-500/40"
                  onClick={() => setActiveDistrict('TP. Lạng Sơn')}
                />

                {/* South-East: Lộc Bình (Na Dương + Mẫu Sơn) */}
                <path
                  d="M 64,54 L 90,46 L 94,82 L 62,84 Z"
                  fill={activeDistrict === 'Lộc Bình' ? 'rgba(2, 132, 199, 0.4)' : 'rgba(2, 132, 199, 0.12)'}
                  stroke="#0284c7"
                  strokeWidth={activeDistrict === 'Lộc Bình' ? '0.8' : '0.4'}
                  strokeDasharray="1,1"
                  className="cursor-pointer transition-colors hover:fill-cyan-500/30"
                  onClick={() => setActiveDistrict('Lộc Bình')}
                />

                {/* Connecting Route Corridor Lines */}
                {/* Route 1 corridor (Green): Hữu Lũng - Chi Lăng */}
                {(filterRoute === 'all' || filterRoute === 1) && (
                  <path
                    d="M 24,78 Q 38,72 48,70"
                    fill="none"
                    stroke="#16a34a"
                    strokeWidth="1.2"
                    strokeDasharray="2,1"
                  />
                )}

                {/* Route 2 corridor (Red): TP Lạng Sơn - Cao Lộc - Văn Quan - Bình Gia - Bắc Sơn */}
                {(filterRoute === 'all' || filterRoute === 2) && (
                  <path
                    d="M 68,26 L 62,50 L 46,46 L 36,24 L 24,36"
                    fill="none"
                    stroke="#dc2626"
                    strokeWidth="1.2"
                    strokeDasharray="2,1"
                  />
                )}

                {/* Route 3 corridor (Yellow): Bắc Sơn - Chi Lăng */}
                {(filterRoute === 'all' || filterRoute === 3) && (
                  <path
                    d="M 24,38 Q 36,54 48,68"
                    fill="none"
                    stroke="#ca8a04"
                    strokeWidth="1.2"
                    strokeDasharray="2,1"
                  />
                )}

                {/* Route 4 corridor (Blue): TP Lạng Sơn - Lộc Bình (Mẫu Sơn, Na Dương) */}
                {(filterRoute === 'all' || filterRoute === 4) && (
                  <path
                    d="M 62,52 L 78,64 L 84,48"
                    fill="none"
                    stroke="#0284c7"
                    strokeWidth="1.2"
                    strokeDasharray="2,1"
                  />
                )}

                {/* District Labels */}
                {Object.entries(districtData).map(([key, info]) => (
                  <text
                    key={key}
                    x={info.center.x}
                    y={info.center.y}
                    textAnchor="middle"
                    fill={activeDistrict === key ? '#fde047' : '#e2e8f0'}
                    fontSize="2.8"
                    fontWeight="bold"
                    className="cursor-pointer select-none pointer-events-none drop-shadow-md"
                  >
                    {key}
                  </text>
                ))}

                {/* Site markers pins */}
                {mapSites.map((site) => {
                  const coords = getSvgCoordinates(site.coordinates.lat, site.coordinates.lng);
                  const color = getRouteColor(site.routeId);
                  const isHovered = hoveredSite?.id === site.id;

                  return (
                    <g
                      key={site.id}
                      className="cursor-pointer group"
                      onClick={() => onSelectSite(site)}
                      onMouseEnter={() => setHoveredSite(site)}
                      onMouseLeave={() => setHoveredSite(null)}
                    >
                      {/* Glow circle */}
                      <circle
                        cx={coords.x}
                        cy={coords.y}
                        r={isHovered ? '2.4' : '1.4'}
                        fill={color}
                        stroke="#ffffff"
                        strokeWidth={isHovered ? '0.6' : '0.3'}
                        className="transition-all duration-200"
                      />
                      {isHovered && (
                        <circle
                          cx={coords.x}
                          cy={coords.y}
                          r="4"
                          fill="none"
                          stroke={color}
                          strokeWidth="0.4"
                          className="animate-ping"
                        />
                      )}
                    </g>
                  );
                })}
              </svg>

              {/* Hover Tooltip Overlay */}
              {hoveredSite && (
                <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs bg-stone-900/95 backdrop-blur-md p-3 rounded-xl border border-amber-500/60 shadow-2xl z-20 pointer-events-none">
                  <div className="flex items-center gap-1.5 text-[11px] text-amber-300 font-mono font-bold">
                    <span>{hoveredSite.siteCode}</span>
                    <span>•</span>
                    <span>Tuyến {hoveredSite.routeId}</span>
                  </div>
                  <div className="text-xs font-bold text-white mt-0.5">{hoveredSite.name}</div>
                  <div className="text-[11px] text-stone-300 line-clamp-1 mt-0.5">{hoveredSite.shortDesc}</div>
                  <div className="text-[10px] text-emerald-400 mt-1 font-medium">{hoveredSite.district}</div>
                </div>
              )}
            </div>

            {/* Legend bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-4 text-[11px] text-stone-400 border-t border-stone-800/80">
              <div className="flex flex-wrap items-center gap-4">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 inline-block" />
                  <span>Tuyến 1: Thượng Ngàn</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-600 inline-block" />
                  <span>Tuyến 2: Thiên Giới</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-600 inline-block" />
                  <span>Tuyến 3: Trần Thế</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-sky-600 inline-block" />
                  <span>Tuyến 4: Thủy Cung</span>
                </span>
              </div>
              <div className="italic text-stone-500">
                *Tọa độ và phân bố số hóa chuẩn theo hệ thống Ban Quản lý
              </div>
            </div>
          </div>

          {/* District & Area Exploration Panel */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-stone-950 rounded-3xl border border-stone-800 p-6 shadow-xl space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
                <Layers className="w-4 h-4" />
                <span>Chi tiết địa bàn hành chính</span>
              </div>

              {activeDistrict ? (
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold font-serif text-white">
                      {districtData[activeDistrict]?.name}
                    </h3>
                    <p className="text-xs text-amber-300 font-medium mt-0.5">
                      {districtData[activeDistrict]?.tag}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-300 leading-relaxed bg-stone-900/60 p-3 rounded-xl border border-stone-800">
                    {districtData[activeDistrict]?.description}
                  </p>

                  <div>
                    <div className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-2">
                      Các điểm đến thuộc {activeDistrict}:
                    </div>
                    <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
                      {GEOPARK_SITES.filter((s) => s.district.includes(activeDistrict)).map((site) => (
                        <div
                          key={site.id}
                          onClick={() => onSelectSite(site)}
                          className="p-2.5 rounded-xl bg-stone-900/90 hover:bg-stone-800 border border-stone-800 hover:border-amber-500/40 cursor-pointer text-xs transition-colors"
                        >
                          <div className="font-semibold text-stone-200 hover:text-amber-300">
                            {site.siteCode}: {site.name}
                          </div>
                          <div className="text-[11px] text-stone-400 line-clamp-1 mt-0.5">
                            {site.shortDesc}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => setActiveDistrict(null)}
                    className="w-full py-2 text-xs font-medium rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 cursor-pointer"
                  >
                    Đóng chi tiết {activeDistrict}
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <p className="text-xs text-stone-300 leading-relaxed">
                    Công viên địa chất Lạng Sơn bao phủ diện tích <strong className="text-emerald-300">4.842,58 km²</strong> trên 8 đơn vị hành chính. Chọn một địa bàn dưới đây hoặc trên bản đồ để khám phá:
                  </p>

                  <div className="grid grid-cols-2 gap-2">
                    {Object.keys(districtData).map((dist) => (
                      <button
                        key={dist}
                        onClick={() => setActiveDistrict(dist)}
                        className="p-2.5 text-left rounded-xl bg-stone-900 hover:bg-stone-800 border border-stone-800 hover:border-emerald-500/40 text-xs font-medium text-stone-200 transition-colors cursor-pointer"
                      >
                        <div className="font-semibold text-white">{dist}</div>
                        <div className="text-[10px] text-stone-400 line-clamp-1">
                          {GEOPARK_SITES.filter((s) => s.district.includes(dist)).length} điểm di sản
                        </div>
                      </button>
                    ))}
                  </div>

                  <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-700/30 text-xs text-stone-300 space-y-1">
                    <div className="font-semibold text-emerald-300">Quy hoạch liên hoàn:</div>
                    <p className="text-stone-400">
                      Các tuyến di sản kết nối từ cửa khẩu biên giới phía Bắc, qua trung tâm tỉnh lỵ đến các huyện miền núi phía Nam và phía Tây, tạo thành mạng lưới du lịch địa chất bền vững.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
