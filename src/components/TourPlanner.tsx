import React, { useState } from 'react';
import { Compass, Calendar, Clock, MapPin, CheckCircle2, Utensils, Home, Sparkles, ArrowRight } from 'lucide-react';
import { GEOPARK_ROUTES, GEOPARK_SITES, GeoparkSite } from '../data/geoparkData';

interface TourPlannerProps {
  onSelectSite: (site: GeoparkSite) => void;
}

export const TourPlanner: React.FC<TourPlannerProps> = ({ onSelectSite }) => {
  const [duration, setDuration] = useState<'1day' | '2days' | '3days' | '4days'>('2days');
  const [interest, setInterest] = useState<'geology' | 'spiritual' | 'nature' | 'craft'>('geology');

  // Pre-configured official recommended itineraries based on duration & interest
  const getItinerary = () => {
    switch (duration) {
      case '1day':
        if (interest === 'spiritual') {
          return {
            title: 'Hành trình Chiêm bái Miền Đất Thiêng (1 Ngày)',
            route: 'Tuyến 1 & Tuyến 2 (Hữu Lũng - TP. Lạng Sơn - Cao Lộc)',
            km: '~110 km',
            highlights: ['Đền Công Đồng Bắc Lệ (Hữu Lũng)', 'Đền Mẫu Đồng Đăng (Cao Lộc)', 'Động Nhị Thanh - Chùa Tam Thanh'],
            meals: ['Khau nhục', 'Phở chua Lạng Sơn', 'Vịt quay mác mật'],
            stay: 'Về trong ngày hoặc nghỉ ngơi tại TP. Lạng Sơn',
            timeline: [
              { time: '07:30 - 09:30', activity: 'Khởi hành đến Đền Công Đồng Bắc Lệ (Hữu Lũng), thực hành tín ngưỡng thờ Mẫu Thượng Ngàn.' },
              { time: '10:00 - 11:30', activity: 'Di chuyển về TP. Lạng Sơn, vãn cảnh Động Nhị Thanh, chiêm bái tượng Phật vách đá Chùa Tam Thanh.' },
              { time: '12:00 - 13:30', activity: 'Ăn trưa đặc sản Vịt quay lá mác mật và Phở chua xứ Lạng.' },
              { time: '14:00 - 16:30', activity: 'Lên thị trấn Đồng Đăng chiêm bái Đền Mẫu Đồng Đăng và check-in Cửa khẩu Quốc tế Hữu Nghị.' },
              { time: '17:00', activity: 'Kết thúc hành trình, mua đặc sản hoa hồi và quà lưu niệm.' }
            ]
          };
        }
        return {
          title: 'Khám phá Đầm hồ Cổ đại Na Dương & Đỉnh Mẫu Sơn (1 Ngày)',
          route: 'Tuyến 4: Đường đến Thủy cung (Lộc Bình - Cao Lộc - TP. Lạng Sơn)',
          km: '~95 km',
          highlights: ['Bồn trũng than nâu Na Dương', 'Khu du lịch Quốc gia Mẫu Sơn', 'Thác Bản Khiếng'],
          meals: ['Gà sáu cựa nướng', 'Thịt lợn bản quay lá mác mật', 'Chè tuyết sơn'],
          stay: 'Về trong ngày hoặc nghỉ đêm trên đỉnh Mẫu Sơn ngắm sao',
          timeline: [
            { time: '08:00 - 10:30', activity: 'Tham quan Bồn trũng than nâu Na Dương (xã Sàn Viên), tìm hiểu tầng hóa thạch Eocene triệu năm.' },
            { time: '11:00 - 12:00', activity: 'Dừng chân ngắm Thác Bản Khiếng mát lành bắt nguồn từ dãy Mẫu Sơn.' },
            { time: '12:30 - 14:00', activity: 'Lên đỉnh Mẫu Sơn (1.541m), thưởng thức bữa trưa đậm đà ẩm thực người Dao đỏ.' },
            { time: '14:30 - 16:30', activity: 'Dạo bước chiêm ngưỡng các biệt thự cổ thời Pháp và không gian sương mây ngàn.' }
          ]
        };

      case '2days':
        return {
          title: 'Hành trình Huyền thoại Thượng Ngàn & Thảo nguyên Đồng Lâm (2 Ngày 1 Đêm)',
          route: 'Tuyến 1 & Tuyến 3 (Hữu Lũng - Chi Lăng - Bắc Sơn)',
          km: '~180 km',
          highlights: ['Đền Bắc Lệ', 'Thung lũng thần tiên Đồng Lâm', 'Ải Chi Lăng', 'Làng ngói âm dương Quỳnh Sơn', 'Đỉnh Nà Lay'],
          meals: ['Rau dớn xào tỏi Hữu Liên', 'Ốc núi đá vôi', 'Cao khô Vạn Linh', 'Lợn quay đòn'],
          stay: 'Homestay nhà sàn người Tày tại Làng du lịch cộng đồng Hữu Liên hoặc Quỳnh Sơn',
          timeline: [
            { time: 'Ngày 1 - Sáng', activity: 'Đến Đền Bắc Lệ dâng hương; khám phá bãi đá hóa thạch san hô cổ đại dương Permi Yên Thịnh (300 triệu năm).' },
            { time: 'Ngày 1 - Chiều', activity: 'Check-in thung lũng karst Đồng Lâm ngập nước, chèo thuyền kayak, cắm trại trên thảm cỏ xanh.' },
            { time: 'Ngày 1 - Tối', activity: 'Giao lưu văn hóa người Tày, thưởng thức Then đàn tính và ngủ đêm tại Homestay Sơn Thủy Hữu Liên.' },
            { time: 'Ngày 2 - Sáng', activity: 'Vượt đèo thăm Khu di tích lịch sử Quốc gia đặc biệt Ải Chi Lăng (núi Mã Yên, núi Mặt Quỷ).' },
            { time: 'Ngày 2 - Chiều', activity: 'Đến Bắc Sơn thăm Làng nghề ngói âm dương Quỳnh Sơn và chinh phục đỉnh Nà Lay ngắm thung lũng lúa vàng.' }
          ]
        };

      case '3days':
        return {
          title: 'Hành trình Xuyên lòng Geopark: Từ Đáy Biển Cổ đến Đỉnh Mây Mẫu Sơn (3 Ngày 2 Đêm)',
          route: 'Kết nối toàn diện Tuyến 1, Tuyến 2, Tuyến 4',
          km: '~280 km',
          highlights: ['Thảo nguyên Đồng Lâm', 'Hang Thẩm Khuyên (Người Vượn cổ)', 'Bãi đá nhảy Đèo Lùng Pa', 'Rừng Hồi Văn Quan', 'Đỉnh Mẫu Sơn', 'Bồn trũng Na Dương'],
          meals: ['Khau nhục', 'Vịt quay mác mật', 'Cao khô Vạn Linh', 'Rượu men lá Mẫu Sơn'],
          stay: 'Đêm 1: Homestay Quỳnh Sơn (Bắc Sơn) | Đêm 2: Khách sạn TP. Lạng Sơn hoặc Mẫu Sơn Resort',
          timeline: [
            { time: 'Ngày 1', activity: 'Khám phá thế giới Thượng ngàn Hữu Lũng: Đền Bắc Lệ, bãi đá hóa thạch san hô, thung lũng Đồng Lâm.' },
            { time: 'Ngày 2', activity: 'Hành trình miền Thiên giới: Hang Thẩm Khuyên (Bình Gia), Rừng hồi Văn Quan, Bãi đá nhảy Đèo Lùng Pa, Đền Mẫu Đồng Đăng.' },
            { time: 'Ngày 3', activity: 'Đường đến Thủy cung: Động Nhị Thanh - Chùa Tam Thanh, bồn trũng cổ sinh Na Dương và đỉnh núi Mẫu Sơn.' }
          ]
        };

      case '4days':
        return {
          title: 'Đại Hành Trình Di Sản Toàn Cầu UNESCO Lạng Sơn Trọn Vẹn (4 Ngày 3 Đêm)',
          route: 'Trọn vẹn 04 Tuyến di sản & 08 đơn vị hành chính',
          km: '~380 km',
          highlights: ['Toàn bộ các di sản cốt lõi của 4 tuyến: Hữu Lũng, Chi Lăng, Bắc Sơn, Bình Gia, Văn Quan, TP. Lạng Sơn, Cao Lộc, Lộc Bình.'],
          meals: ['Trọn bộ tinh hoa ẩm thực 7 dân tộc anh em'],
          stay: 'Nghỉ đêm luân phiên tại các Làng du lịch cộng đồng và trung tâm Geopark',
          timeline: [
            { time: 'Ngày 1: Tuyến 1', activity: 'Khám phá Thế giới Thượng ngàn (Hữu Lũng - Chi Lăng).' },
            { time: 'Ngày 2: Tuyến 2', activity: 'Hành trình về miền Thiên giới (Bắc Sơn - Bình Gia - Văn Quan).' },
            { time: 'Ngày 3: Tuyến 3', activity: 'Cuộc sống dân dã nơi trần thế (Làng nghề ngói, cao khô Vạn Linh, vườn na vách đá).' },
            { time: 'Ngày 4: Tuyến 4', activity: 'Đường đến Thủy cung (Na Dương, đỉnh Mẫu Sơn, Nhị Thanh - Tam Thanh, Đền Mẫu Thoải).' }
          ]
        };
    }
  };

  const itinerary = getItinerary();

  return (
    <section id="planner" className="py-16 sm:py-20 bg-stone-900 text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-600/40 text-emerald-300 text-xs font-semibold mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>CÔNG CỤ LẬP KẾ HOẠCH HÀNH TRÌNH CHUẨN GEOPARK</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold font-serif tracking-tight text-white">
            Gợi Ý Lịch Trình Khám Phá Tối Ưu
          </h2>
          <p className="mt-3 text-stone-300 text-sm sm:text-base leading-relaxed">
            Chọn thời lượng và chủ đề bạn yêu thích để nhận ngay hành trình gợi ý bám sát 4 tuyến di sản, đảm bảo an toàn, bảo tồn thiên nhiên và trải nghiệm bản sắc địa phương sâu sắc nhất.
          </p>
        </div>

        {/* Filters Controls */}
        <div className="bg-stone-950 rounded-2xl border border-stone-800 p-5 sm:p-6 mb-8 max-w-4xl mx-auto space-y-5">
          {/* Duration Selector */}
          <div>
            <div className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-amber-400" />
              <span>Thời lượng hành trình:</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { id: '1day', label: '1 Ngày (Trong ngày)' },
                { id: '2days', label: '2 Ngày 1 Đêm (Lý tưởng)' },
                { id: '3days', label: '3 Ngày 2 Đêm (Chuyên sâu)' },
                { id: '4days', label: '4 Ngày 3 Đêm (Trọn vẹn 4 tuyến)' },
              ].map((d) => (
                <button
                  key={d.id}
                  onClick={() => setDuration(d.id as any)}
                  className={`py-2 px-3 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                    duration === d.id
                      ? 'bg-emerald-600 text-white shadow-md'
                      : 'bg-stone-900 text-stone-400 hover:text-stone-200 border border-stone-800'
                  }`}
                >
                  {d.label}
                </button>
              ))}
            </div>
          </div>

          {/* Interest Selector */}
          <div>
            <div className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Chủ đề ưu tiên:</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { id: 'geology', label: 'Địa chất & Hóa thạch' },
                { id: 'spiritual', label: 'Văn hóa & Tín ngưỡng' },
                { id: 'nature', label: 'Sinh thái & Cắm trại' },
                { id: 'craft', label: 'Làng nghề & Bản làng' },
              ].map((i) => (
                <button
                  key={i.id}
                  onClick={() => setInterest(i.id as any)}
                  className={`py-2 px-3 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                    interest === i.id
                      ? 'bg-amber-600 text-white shadow-md'
                      : 'bg-stone-900 text-stone-400 hover:text-stone-200 border border-stone-800'
                  }`}
                >
                  {i.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Itinerary Result Card */}
        <div className="bg-stone-950 rounded-3xl border border-stone-800 p-6 sm:p-8 lg:p-10 shadow-2xl max-w-4xl mx-auto space-y-6">
          <div className="border-b border-stone-800 pb-4">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-950 text-emerald-300 border border-emerald-800">
              Lịch trình đề xuất
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-white mt-2">
              {itinerary.title}
            </h3>
            <div className="flex flex-wrap items-center gap-3 text-xs text-stone-400 mt-2">
              <span>Tuyến kết nối: <strong className="text-stone-200">{itinerary.route}</strong></span>
              <span>•</span>
              <span>Ước tính cự ly: <strong className="text-amber-300 font-mono">{itinerary.km}</strong></span>
            </div>
          </div>

          {/* Timeline details */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400">
              Chi tiết các chặng dừng chân & hoạt động:
            </h4>
            <div className="space-y-2.5">
              {itinerary.timeline.map((step, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-stone-900/80 border border-stone-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                >
                  <div className="flex items-start gap-3">
                    <span className="font-mono text-xs font-bold text-amber-400 shrink-0 mt-0.5">
                      {step.time}
                    </span>
                    <span className="text-xs sm:text-sm text-stone-200">
                      {step.activity}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Meals and Accommodation suggestions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-stone-900/70 border border-stone-800 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-400">
                <Utensils className="w-4 h-4" />
                <span>Ẩm thực đặc sản gợi ý</span>
              </div>
              <p className="text-xs text-stone-300">
                {itinerary.meals.join(', ')}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-stone-900/70 border border-stone-800 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400">
                <Home className="w-4 h-4" />
                <span>Lưu trú khuyến nghị</span>
              </div>
              <p className="text-xs text-stone-300">
                {itinerary.stay}
              </p>
            </div>
          </div>

          {/* Sustainable tourism etiquette notice */}
          <div className="p-3 rounded-xl bg-emerald-950/30 border border-emerald-800/40 text-[11px] text-stone-400 leading-relaxed">
            <strong className="text-emerald-300 font-semibold">Quy tắc ứng xử Geopark:</strong> Không bẻ nhũ đá, không lấy mẫu hóa thạch trái phép, tôn trọng tín ngưỡng bản địa và bảo vệ nguyên vẹn môi trường thiên nhiên.
          </div>
        </div>
      </div>
    </section>
  );
};
