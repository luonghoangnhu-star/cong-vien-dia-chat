import React, { useState, useMemo } from 'react';
import { Search, MapPin, Filter, Sparkles, ExternalLink, Compass, Layers, Info } from 'lucide-react';
import { GEOPARK_SITES, GEOPARK_ROUTES, GeoparkSite } from '../data/geoparkData';

interface SitesCatalogProps {
  onSelectSite: (site: GeoparkSite) => void;
  initialRouteFilter?: number | null;
}

export const SitesCatalog: React.FC<SitesCatalogProps> = ({ onSelectSite, initialRouteFilter = null }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRoute, setSelectedRoute] = useState<number | 'all'>(initialRouteFilter || 'all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDistrict, setSelectedDistrict] = useState<string>('all');

  // Categories definition
  const categories = [
    { id: 'all', label: 'Tất cả loại hình' },
    { id: 'geology', label: 'Địa chất - Cổ sinh' },
    { id: 'culture_spiritual', label: 'Văn hóa - Tâm linh' },
    { id: 'history_archeology', label: 'Lịch sử - Khảo cổ' },
    { id: 'biodiversity_nature', label: 'Sinh thái - Tự nhiên' },
    { id: 'craft_community', label: 'Làng nghề - Bản địa' },
  ];

  // Unique districts in the dataset
  const districts = useMemo(() => {
    const list = Array.from(new Set(GEOPARK_SITES.map((s) => s.district)));
    return ['all', ...list];
  }, []);

  // Filtered sites
  const filteredSites = useMemo(() => {
    return GEOPARK_SITES.filter((site) => {
      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchName = site.name.toLowerCase().includes(query);
        const matchDesc = site.shortDesc.toLowerCase().includes(query) || site.fullDesc.toLowerCase().includes(query);
        const matchDistrict = site.district.toLowerCase().includes(query);
        const matchCode = site.siteCode.toLowerCase().includes(query);
        if (!matchName && !matchDesc && !matchDistrict && !matchCode) return false;
      }

      // Route filter
      if (selectedRoute !== 'all' && site.routeId !== selectedRoute) {
        return false;
      }

      // Category filter
      if (selectedCategory !== 'all' && site.category !== selectedCategory) {
        return false;
      }

      // District filter
      if (selectedDistrict !== 'all' && site.district !== selectedDistrict) {
        return false;
      }

      return true;
    });
  }, [searchQuery, selectedRoute, selectedCategory, selectedDistrict]);

  const getRouteBadge = (routeId: 1 | 2 | 3 | 4) => {
    const route = GEOPARK_ROUTES.find((r) => r.id === routeId);
    return {
      name: `Tuyến ${routeId}`,
      color: route ? route.colorHex : '#10b981',
    };
  };

  const getCategoryLabel = (cat: string) => {
    switch (cat) {
      case 'geology':
        return 'Địa chất - Cổ sinh';
      case 'culture_spiritual':
        return 'Văn hóa - Tâm linh';
      case 'history_archeology':
        return 'Lịch sử - Khảo cổ';
      case 'biodiversity_nature':
        return 'Sinh thái - Tự nhiên';
      case 'craft_community':
        return 'Làng nghề - Cộng đồng';
      default:
        return 'Di sản tổng hợp';
    }
  };

  return (
    <section id="sites" className="py-16 sm:py-20 bg-stone-950 text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/70 border border-amber-600/40 text-amber-300 text-xs font-semibold mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>DANH MỤC 38 ĐIỂM THAM QUAN DI SẢN</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold font-serif tracking-tight text-white">
            Khám Phá Chi Tiết 38 Điểm Đến Tiêu Biểu
          </h2>
          <p className="mt-3 text-stone-300 text-sm sm:text-base leading-relaxed">
            Tra cứu toàn diện các di sản địa chất quốc tế, cổ sinh triệu năm, di tích lịch sử kháng chiến và không gian văn hóa bản địa theo dữ liệu chính thức của Ban Quản lý Công viên địa chất Lạng Sơn.
          </p>
        </div>

        {/* Filter & Search Bar Controls */}
        <div className="bg-stone-900/90 rounded-2xl p-4 sm:p-6 border border-stone-800 shadow-xl mb-8 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
            {/* Search input */}
            <div className="md:col-span-5 relative">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm theo tên điểm, huyện, hóa thạch, di tích..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-stone-950 border border-stone-700/80 text-sm text-stone-100 placeholder-stone-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-2.5 text-xs text-stone-400 hover:text-white"
                >
                  Xóa
                </button>
              )}
            </div>

            {/* Route selector dropdown */}
            <div className="md:col-span-3">
              <select
                value={selectedRoute}
                onChange={(e) => setSelectedRoute(e.target.value === 'all' ? 'all' : Number(e.target.value))}
                className="w-full px-3 py-2.5 rounded-xl bg-stone-950 border border-stone-700/80 text-sm text-stone-200 focus:outline-none focus:border-emerald-500"
              >
                <option value="all">Tất cả 4 Tuyến di sản</option>
                <option value="1">Tuyến 1: Khám phá Thế giới Thượng ngàn</option>
                <option value="2">Tuyến 2: Hành trình về miền Thiên giới</option>
                <option value="3">Tuyến 3: Cuộc sống dân dã nơi trần thế</option>
                <option value="4">Tuyến 4: Đường đến Thủy cung</option>
              </select>
            </div>

            {/* District selector dropdown */}
            <div className="md:col-span-4">
              <select
                value={selectedDistrict}
                onChange={(e) => setSelectedDistrict(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl bg-stone-950 border border-stone-700/80 text-sm text-stone-200 focus:outline-none focus:border-emerald-500"
              >
                <option value="all">Tất cả địa bàn Huyện / Thành phố</option>
                {districts.filter((d) => d !== 'all').map((dist) => (
                  <option key={dist} value={dist}>
                    {dist}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-stone-800/80">
            <span className="text-xs text-stone-400 font-medium flex items-center gap-1.5 mr-2">
              <Filter className="w-3.5 h-3.5 text-amber-400" />
              <span>Phân loại:</span>
            </span>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'bg-stone-950/70 text-stone-300 hover:bg-stone-800 border border-stone-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Search Results Summary */}
        <div className="flex justify-between items-center mb-6 text-xs text-stone-400">
          <div>
            Hiển thị <strong className="text-emerald-400 font-bold">{filteredSites.length}</strong> / 38 điểm di sản
          </div>
          {(searchQuery || selectedRoute !== 'all' || selectedCategory !== 'all' || selectedDistrict !== 'all') && (
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedRoute('all');
                setSelectedCategory('all');
                setSelectedDistrict('all');
              }}
              className="text-amber-400 hover:underline cursor-pointer"
            >
              Đặt lại tất cả bộ lọc
            </button>
          )}
        </div>

        {/* Sites Grid */}
        {filteredSites.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredSites.map((site) => {
              const routeBadge = getRouteBadge(site.routeId);
              return (
                <div
                  key={site.id}
                  onClick={() => onSelectSite(site)}
                  className="bg-stone-900/90 rounded-2xl border border-stone-800 hover:border-amber-500/50 p-5 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-xl cursor-pointer group"
                >
                  <div className="space-y-3">
                    {/* Header Badges */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-stone-950 border border-stone-700 text-amber-300">
                          {site.siteCode}
                        </span>
                        <span
                          className="text-[11px] font-semibold px-2 py-0.5 rounded text-white shadow-xs"
                          style={{ backgroundColor: routeBadge.color }}
                        >
                          {routeBadge.name}
                        </span>
                      </div>
                      <span className="text-[11px] text-stone-400 font-medium px-2 py-0.5 rounded bg-stone-950 border border-stone-800">
                        {getCategoryLabel(site.category)}
                      </span>
                    </div>

                    {/* Site Title */}
                    <div>
                      <h3 className="text-base font-bold font-serif text-white group-hover:text-amber-300 transition-colors line-clamp-1">
                        {site.name}
                      </h3>
                      <p className="text-xs text-stone-400 italic line-clamp-1">
                        {site.nameEn}
                      </p>
                    </div>

                    {/* Location */}
                    <div className="flex items-center gap-1.5 text-xs text-emerald-400/90">
                      <MapPin className="w-3.5 h-3.5 shrink-0" />
                      <span>{site.district}</span>
                    </div>

                    {/* Short Description */}
                    <p className="text-xs text-stone-300 line-clamp-3 leading-relaxed">
                      {site.shortDesc}
                    </p>

                    {/* Geological Age Tag if available */}
                    {site.geologicalAge && (
                      <div className="text-[11px] text-amber-300/90 bg-amber-950/40 px-2 py-1 rounded border border-amber-800/40">
                        <strong>Niên đại:</strong> {site.geologicalAge}
                      </div>
                    )}
                  </div>

                  {/* Highlights and Details link */}
                  <div className="pt-4 mt-4 border-t border-stone-800/80 flex items-center justify-between text-xs">
                    <span className="text-stone-400 group-hover:text-stone-300">
                      {site.highlights.length} điểm nhấn nổi bật
                    </span>
                    <span className="text-amber-400 font-medium group-hover:translate-x-1 transition-transform flex items-center gap-1">
                      <span>Chi tiết</span>
                      <span>→</span>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16 bg-stone-900/50 rounded-2xl border border-stone-800">
            <Info className="w-8 h-8 text-stone-500 mx-auto mb-2" />
            <p className="text-stone-300 text-sm font-medium">Không tìm thấy điểm di sản nào phù hợp với bộ lọc.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedRoute('all');
                setSelectedCategory('all');
                setSelectedDistrict('all');
              }}
              className="mt-3 px-4 py-2 text-xs rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-medium cursor-pointer"
            >
              Xem toàn bộ 38 điểm
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
