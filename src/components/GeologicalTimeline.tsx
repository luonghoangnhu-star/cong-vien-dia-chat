import React, { useState } from 'react';
import { Clock, BookOpen, Layers, Sparkles, ChevronRight } from 'lucide-react';
import { GEOLOGICAL_TIMELINE } from '../data/geoparkData';

export const GeologicalTimeline: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState<number>(0);
  const currentItem = GEOLOGICAL_TIMELINE[selectedIdx];

  return (
    <section id="timeline" className="py-16 sm:py-20 bg-stone-900 text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-600/40 text-cyan-300 text-xs font-semibold mb-3">
            <Clock className="w-3.5 h-3.5" />
            <span>TIẾN HÓA VỎ TRÁI ĐẤT QUA CÁC THỜI KỲ</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold font-serif tracking-tight text-white">
            Lịch Sử Địa Chất 500 Triệu Năm Xứ Lạng
          </h2>
          <p className="mt-3 text-stone-300 text-sm sm:text-base leading-relaxed">
            Từ đại dương cổ nguyên sơ kỷ Than đá - Pecmi đến sự nâng lên của những dãy núi đá vôi karst kỳ vĩ và cái nôi xuất hiện sớm của loài người tiền sử.
          </p>
        </div>

        {/* Timeline Nav Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {GEOLOGICAL_TIMELINE.map((item, idx) => {
            const isSelected = selectedIdx === idx;
            return (
              <button
                key={idx}
                onClick={() => setSelectedIdx(idx)}
                className={`p-5 rounded-2xl text-left border transition-all duration-200 cursor-pointer relative ${
                  isSelected
                    ? 'bg-stone-950 border-cyan-500/80 ring-2 ring-cyan-500/20 shadow-xl'
                    : 'bg-stone-950/50 hover:bg-stone-800/60 border-stone-800 text-stone-400'
                }`}
              >
                <div className="text-xs font-mono font-bold text-cyan-400">
                  GIAI ĐOẠN 0{idx + 1}
                </div>
                <div className={`text-base font-bold font-serif mt-1 ${isSelected ? 'text-white' : 'text-stone-300'}`}>
                  {item.era}
                </div>
                <div className="text-xs text-stone-400 mt-1 line-clamp-1">
                  {item.period}
                </div>
                <div className="text-xs text-amber-300/90 font-medium mt-2 line-clamp-1">
                  {item.theme}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Period Deep-Dive Box */}
        <div className="bg-stone-950 rounded-3xl border border-stone-800 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="max-w-4xl space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-950 text-cyan-300 border border-cyan-800">
                {currentItem.era}
              </span>
              <span className="text-xs font-mono text-stone-400">
                {currentItem.period}
              </span>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-serif text-white">
                {currentItem.theme}
              </h3>
            </div>

            <p className="text-stone-300 text-sm sm:text-base leading-relaxed bg-stone-900/60 p-5 rounded-2xl border border-stone-800">
              {currentItem.description}
            </p>

            <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-800/40 flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                  Bằng chứng di sản thực địa tại Lạng Sơn Geopark:
                </span>
                <p className="text-xs sm:text-sm text-stone-300 mt-1">
                  {currentItem.keyEvidence}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
