import React from 'react';
import { Trees, Users, UtensilsCrossed, Sparkles, Award, Globe, Leaf } from 'lucide-react';
import { CULTURAL_AND_BIODIVERSITY_DATA } from '../data/geoparkData';

export const CultureBiodiversity: React.FC = () => {
  return (
    <section id="culture" className="py-16 sm:py-20 bg-stone-950 text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-950/80 border border-teal-600/40 text-teal-300 text-xs font-semibold mb-3">
            <Globe className="w-3.5 h-3.5" />
            <span>KHO TÀNG SINH THÁI & DI SẢN PHI VẬT THỂ</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold font-serif tracking-tight text-white">
            Đa Dạng Sinh Học & Bản Sắc 7 Dân Tộc
          </h2>
          <p className="mt-3 text-stone-300 text-sm sm:text-base leading-relaxed">
            Nơi hội tụ của những cánh rừng nguyên sinh trên núi đá vôi, khí hậu sương mây Mẫu Sơn và truyền thống văn hóa ngàn đời của đồng bào Tày, Nùng, Kinh, Dao, Hoa, Sán Chay, Mông.
          </p>
        </div>

        {/* 1. Biodiversity Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 border-b border-stone-800 pb-3">
            <Trees className="w-5 h-5 text-emerald-400" />
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-white">
              Hệ Sinh Thái & Đa Dạng Sinh Học
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CULTURAL_AND_BIODIVERSITY_DATA.biodiversity.map((bio, idx) => (
              <div
                key={idx}
                className="bg-stone-900/90 rounded-2xl border border-stone-800 p-6 flex flex-col justify-between hover:border-emerald-500/40 transition-colors"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">
                      {bio.metric}
                    </span>
                    <Leaf className="w-4 h-4 text-emerald-400" />
                  </div>
                  <h4 className="text-lg font-bold font-serif text-white">{bio.title}</h4>
                  <p className="text-xs text-stone-300 leading-relaxed">{bio.desc}</p>
                </div>

                <div className="pt-4 mt-4 border-t border-stone-800/80">
                  <div className="text-[11px] font-semibold text-stone-400 uppercase tracking-wider mb-2">
                    Loài tiêu biểu Sách Đỏ & Đặc hữu:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {bio.species.map((sp, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[11px] px-2 py-1 rounded bg-stone-950 text-stone-300 border border-stone-800"
                      >
                        {sp}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Cultural & Ethnic Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 border-b border-stone-800 pb-3">
            <Users className="w-5 h-5 text-amber-400" />
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-white">
              07 Dân Tộc Anh Em & Di Sản Văn Hóa Phi Vật Thể
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CULTURAL_AND_BIODIVERSITY_DATA.ethnicCultures.map((eth, idx) => (
              <div
                key={idx}
                className="bg-stone-900/90 rounded-2xl border border-stone-800 p-5 space-y-3 hover:border-amber-500/40 transition-colors"
              >
                <div className="text-sm font-bold font-serif text-amber-300">
                  {eth.name}
                </div>
                <p className="text-xs text-stone-300 leading-relaxed">
                  {eth.heritage}
                </p>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-2xl bg-amber-950/20 border border-amber-800/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-stone-300">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-400 shrink-0" />
              <span>
                <strong>02 Di sản UNESCO tiêu biểu:</strong> Thực hành Tín ngưỡng thờ Mẫu Tam phủ & Thực hành Hát Then - Đàn Tính của người Tày, Nùng.
              </span>
            </div>
            <span className="text-amber-400 font-medium">Bảo tồn sống trong cộng đồng</span>
          </div>
        </div>

        {/* 3. Culinary Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 border-b border-stone-800 pb-3">
            <UtensilsCrossed className="w-5 h-5 text-rose-400" />
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-white">
              Ẩm Thực Dân Dã Đậm Đà Bản Sắc Xứ Lạng
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CULTURAL_AND_BIODIVERSITY_DATA.cuisine.map((food, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-stone-900/80 border border-stone-800 hover:border-stone-700 transition-colors space-y-1"
              >
                <div className="text-sm font-bold text-white flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-rose-500 inline-block" />
                  <span>{food.name}</span>
                </div>
                <p className="text-xs text-stone-400 leading-relaxed pl-3.5">
                  {food.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
