import React, { useState } from 'react';
import { Award, Layers, Sparkles, BookOpen, ExternalLink, ShieldCheck, Microscope } from 'lucide-react';

export const NaDuongFossilShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'basin' | 'croc' | 'anthraco' | 'flora' | 'significance'>('basin');

  const specimens = [
    {
      id: 'croc',
      name: 'Cá sấu cổ Na Dương (Asiatosuchus / Vietnamosuchus)',
      period: 'Eocene (~40 triệu năm trước)',
      desc: 'Hóa thạch xương sọ và răng sắc nhọn của loài cá sấu khổng lồ cổ đại sinh sống ở vùng đầm hồ nước ngọt nhiệt đới Na Dương. Đây là mẫu hóa thạch cá sấu cổ hoàn chỉnh bậc nhất từng được phát hiện tại Đông Nam Á.',
      tags: ['Bò sát cổ', 'Đầm hồ nhiệt đới', 'Sọ & răng hóa thạch']
    },
    {
      id: 'anthraco',
      name: 'Thú móng guốc cổ Anthracotheriidae (Tổ tiên hà mã)',
      period: 'Eocene - Oligocene (~35 - 40 triệu năm trước)',
      desc: 'Hóa thạch xương hàm và răng của loài thú móng guốc bán thủy sinh cổ đại thuộc họ Anthracotheriidae (như Bakrotherium). Sinh vật này có lối sống ngâm mình dưới đầm nước tương tự hà mã hiện đại, cung cấp bằng chứng then chốt về tiến hóa động vật có vú ở châu Á.',
      tags: ['Động vật có vú cổ', 'Tổ tiên hà mã', 'Răng hàm quý hiếm']
    },
    {
      id: 'flora',
      name: 'Vết in Lá Sen cổ & Trai ngọc hai mảnh vỏ (Pelecypoda)',
      period: 'Hệ tầng Na Dương & Rinh Chùa (~40 Ma)',
      desc: 'Hàng nghìn vết in lá sen cổ (họ Nelumbonaceae), cành lá thực vật nhiệt đới và 5 loài trai nước ngọt được bảo tồn nguyên vẹn từng đường gân trong các lớp sét bột kết xám ghi, tái hiện khung cảnh đầm hồ xanh ngát.',
      tags: ['Cổ thực vật', 'Lá sen cổ', 'Trai hai mảnh vỏ']
    }
  ];

  return (
    <section id="naduong" className="py-16 sm:py-20 bg-stone-950 text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/70 border border-amber-600/40 text-amber-300 text-xs font-semibold mb-3">
            <Microscope className="w-3.5 h-3.5" />
            <span>KHO TÀNG CỔ SINH ĐỊA TẦNG QUỐC TẾ</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold font-serif tracking-tight text-white">
            Thế Giới Đầm Hồ Cổ Đại Na Dương
          </h2>
          <p className="mt-3 text-stone-300 text-sm sm:text-base leading-relaxed">
            Được mệnh danh là <strong className="text-amber-300 font-semibold">"Cánh cửa độc nhất vô nhị nhìn vào các hệ sinh thái Eocene Đông Nam Á"</strong>, Bồn trũng Na Dương (Lộc Bình) lưu giữ những trang sử tiến hóa sinh học chấn động giới khoa học toàn cầu.
          </p>
        </div>

        {/* Feature Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8">
          <button
            onClick={() => setActiveTab('basin')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
              activeTab === 'basin'
                ? 'bg-amber-600 text-white shadow-md'
                : 'bg-stone-900 text-stone-400 hover:text-stone-200 border border-stone-800'
            }`}
          >
            Cấu tạo Bồn trũng 570m
          </button>
          <button
            onClick={() => setActiveTab('croc')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
              activeTab === 'croc'
                ? 'bg-amber-600 text-white shadow-md'
                : 'bg-stone-900 text-stone-400 hover:text-stone-200 border border-stone-800'
            }`}
          >
            Cá sấu cổ Asiatosuchus
          </button>
          <button
            onClick={() => setActiveTab('anthraco')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
              activeTab === 'anthraco'
                ? 'bg-amber-600 text-white shadow-md'
                : 'bg-stone-900 text-stone-400 hover:text-stone-200 border border-stone-800'
            }`}
          >
            Thú móng guốc cổ
          </button>
          <button
            onClick={() => setActiveTab('flora')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
              activeTab === 'flora'
                ? 'bg-amber-600 text-white shadow-md'
                : 'bg-stone-900 text-stone-400 hover:text-stone-200 border border-stone-800'
            }`}
          >
            Lá sen cổ & Trai ốc
          </button>
          <button
            onClick={() => setActiveTab('significance')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
              activeTab === 'significance'
                ? 'bg-amber-600 text-white shadow-md'
                : 'bg-stone-900 text-stone-400 hover:text-stone-200 border border-stone-800'
            }`}
          >
            Giá trị quốc tế & UNESCO
          </button>
        </div>

        {/* Dynamic Content Display */}
        <div className="bg-stone-900/90 rounded-3xl border border-stone-800 p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden">
          {activeTab === 'basin' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-950/80 text-amber-300 border border-amber-800/50">
                  Địa mạo & Trầm tích học
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-serif text-white">
                  Bể than nâu đất liền lớn nhất Việt Nam
                </h3>
                <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                  Bồn trũng Na Dương nằm tại xã Sàn Viên, huyện Lộc Bình với hình elip theo phương Đông Bắc - Tây Nam, diện tích khoảng <strong>80 km²</strong> và trữ lượng than nâu trên <strong>100 triệu tấn</strong>.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-4 rounded-xl bg-stone-950/80 border border-stone-800">
                    <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">Hệ tầng Na Dương (Dưới)</div>
                    <div className="text-lg font-bold font-mono text-white mt-1">Dày ~240 mét</div>
                    <p className="text-xs text-stone-400 mt-1">
                      Cát kết, bột kết xám ghi xen kẽ các vỉa than nâu dày chứa kho tàng hóa thạch động vật có xương sống cổ đại.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-stone-950/80 border border-stone-800">
                    <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Hệ tầng Rinh Chùa (Trên)</div>
                    <div className="text-lg font-bold font-mono text-white mt-1">Dày ~300 mét</div>
                    <p className="text-xs text-stone-400 mt-1">
                      Sét kết, bột kết màu tím gụ và xám nhạt, chứa phong phú vết in lá cây nhiệt đới và vỏ trai hai mảnh vỏ.
                    </p>
                  </div>
                </div>
                <div className="text-xs text-stone-400 flex items-center gap-2 pt-2">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>Hình thành từ hoạt động dịch trượt dọc đới đứt gãy Cao Bằng - Tiên Yên kỷ Tân sinh.</span>
                </div>
              </div>

              {/* Graphical cross-section card */}
              <div className="lg:col-span-5 bg-stone-950 rounded-2xl border border-stone-800 p-5 space-y-4">
                <div className="text-xs font-bold uppercase tracking-wider text-stone-400 flex items-center justify-between">
                  <span>Mặt cắt địa tầng Na Dương</span>
                  <span className="font-mono text-amber-300">Tổng dày: 570m</span>
                </div>

                {/* Layered schematic visualization */}
                <div className="space-y-2 text-xs">
                  <div className="p-3 rounded-lg bg-stone-800/80 border-l-4 border-amber-600 flex justify-between items-center">
                    <div>
                      <span className="font-bold text-stone-200">Lớp phủ thổ nhưỡng & Đất phong hóa</span>
                      <div className="text-[11px] text-stone-400">Đệ Tứ (Quaternary)</div>
                    </div>
                    <span className="font-mono text-stone-400">0 - 15m</span>
                  </div>

                  <div className="p-3 rounded-lg bg-cyan-950/50 border-l-4 border-cyan-500 flex justify-between items-center">
                    <div>
                      <span className="font-bold text-cyan-200">Hệ tầng Rinh Chùa</span>
                      <div className="text-[11px] text-stone-400">Sét bột kết xám tím, lá sen & trai ốc cổ</div>
                    </div>
                    <span className="font-mono text-cyan-300">~300m</span>
                  </div>

                  <div className="p-3 rounded-lg bg-amber-950/60 border-l-4 border-amber-500 flex justify-between items-center">
                    <div>
                      <span className="font-bold text-amber-200">Hệ tầng Na Dương</span>
                      <div className="text-[11px] text-stone-400">Than nâu, hóa thạch cá sấu, thú cổ Anthracotheriidae</div>
                    </div>
                    <span className="font-mono text-amber-300">~240m</span>
                  </div>

                  <div className="p-3 rounded-lg bg-stone-900 border-l-4 border-stone-600 flex justify-between items-center">
                    <div>
                      <span className="font-bold text-stone-400">Tầng móng đá vôi cổ</span>
                      <div className="text-[11px] text-stone-500">Đá vôi nứt nẻ kỷ Carbon - Permian</div>
                    </div>
                    <span className="font-mono text-stone-500">&gt; 570m</span>
                  </div>
                </div>

                <div className="text-[11px] text-stone-400 italic text-center">
                  *Minh họa phân tầng chuẩn theo hồ sơ đề cử Geopark quốc tế
                </div>
              </div>
            </div>
          )}

          {activeTab === 'croc' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-950 text-emerald-300 border border-emerald-800">
                  Cổ sinh vật học có xương sống
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-serif text-white">
                  Cá sấu cổ Asiatosuchus & Vietnamosuchus
                </h3>
                <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                  Tại mỏ than Na Dương, các nhà khoa học Viện Cổ sinh vật học và Địa tầng học cùng các chuyên gia quốc tế đã phát hiện các phần xương sọ, xương hàm và răng của loài cá sấu khổng lồ <em>Asiatosuchus</em> và loài mới được định danh <em>Vietnamosuchus</em>.
                </p>
                <div className="p-4 rounded-xl bg-stone-950 border border-stone-800 space-y-2 text-xs sm:text-sm text-stone-300">
                  <div className="font-semibold text-amber-300">Đặc điểm sinh học cổ sinh:</div>
                  <ul className="list-disc list-inside space-y-1 text-stone-400">
                    <li>Chiều dài ước tính từ 4 - 6 mét, là loài săn mồi đỉnh cao trong hệ sinh thái đầm hồ Na Dương cổ đại.</li>
                    <li>Răng hình nón chắc khỏe thích nghi với việc ngoạm giữ con mồi lớn như cá nước ngọt khổng lồ và thú móng guốc.</li>
                    <li>Minh chứng cho khí hậu Đông Nam Á cách đây 40 triệu năm vô cùng ấm áp, ẩm ướt với lượng mưa dồi dào.</li>
                  </ul>
                </div>
              </div>
              <div className="lg:col-span-4 bg-stone-950 p-6 rounded-2xl border border-stone-800 text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mx-auto text-amber-400">
                  <Award className="w-8 h-8" />
                </div>
                <div className="font-serif font-bold text-white text-lg">Mẫu vật trưng bày</div>
                <p className="text-xs text-stone-400">
                  Các mẫu sọ cá sấu và răng hóa thạch hiện được lưu giữ và trưng bày tại Bảo tàng Thiên nhiên Việt Nam và Trung tâm Thông tin Geopark Lạng Sơn.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'anthraco' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-rose-950 text-rose-300 border border-rose-800">
                  Động vật có vú cổ đại
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-serif text-white">
                  Họ thú móng guốc Anthracotheriidae (Tổ tiên hà mã)
                </h3>
                <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                  Một trong những phát hiện chấn động nhất tại Na Dương là các hóa thạch của phân bộ Suina / Whippomorpha thuộc họ thú móng guốc <strong>Anthracotheriidae</strong> (như loài <em>Bakrotherium</em>). Đây là nhánh tiến hóa quan trọng liên kết các loài móng guốc cổ với loài hà mã ngày nay.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-stone-950 rounded-xl border border-stone-800">
                    <strong className="text-amber-300 block mb-1">Môi trường sống đầm lầy:</strong>
                    Loài thú này có bốn chân ngắn, thân tròn và sống chủ yếu ngâm mình dưới đầm nước ăn thực vật thủy sinh.
                  </div>
                  <div className="p-3 bg-stone-950 rounded-xl border border-stone-800">
                    <strong className="text-amber-300 block mb-1">Giá trị tiến hóa thế giới:</strong>
                    Giải mã con đường di cư và tiến hóa của các loài thú có vú giữa lục địa Á - Âu trong kỷ Tân sinh.
                  </div>
                </div>
              </div>
              <div className="lg:col-span-4 bg-stone-950 p-6 rounded-2xl border border-stone-800 text-center space-y-3">
                <div className="text-3xl font-mono font-bold text-rose-400">~40 Ma</div>
                <div className="text-xs font-semibold uppercase text-stone-300">Niên đại Eocene muộn</div>
                <p className="text-xs text-stone-400">
                  Được đồng chủ trì nghiên cứu bởi các viện hàn lâm khoa học hàng đầu Đức, Pháp và Việt Nam.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'flora' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-teal-950 text-teal-300 border border-teal-800">
                  Thực vật cổ & Thân mềm hai mảnh vỏ
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-serif text-white">
                  Khu rừng sen cổ & Quần xã Trai hai mảnh vỏ
                </h3>
                <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                  Trong các tầng đá sét bột kết màu xám nhạt, các nhà khoa học đã tìm thấy hàng vạn vết in lá sen cổ <em>(Nelumbo)</em>, họ cau dừa, cùng 5 loài trai nước ngọt và 9 loài cá cổ.
                </p>
                <div className="p-4 rounded-xl bg-stone-950 border border-stone-800 space-y-2 text-xs sm:text-sm text-stone-300">
                  <p>
                    • <strong>Vết in lá sen cổ:</strong> Rõ nét từng gân lá tròn tỏa đều từ cuống, chứng minh thảm hoa sen đã ngự trị tại các đầm hồ nhiệt đới Việt Nam từ hàng chục triệu năm trước.
                  </p>
                  <p>
                    • <strong>Trai hai mảnh vỏ (Pelecypoda):</strong> Giữ nguyên lớp vỏ xà cừ hóa thạch, cung cấp chỉ thị tuyệt hảo về độ sâu và độ mặn của vùng nước cổ.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-4 bg-stone-950 p-6 rounded-2xl border border-stone-800 text-center space-y-3">
                <div className="text-2xl font-bold font-mono text-teal-300">9 loài cá cổ</div>
                <div className="text-xs font-semibold uppercase text-stone-300">5 loài trai hai mảnh vỏ</div>
                <p className="text-xs text-stone-400">
                  Tái hiện hoàn chỉnh chuỗi thức ăn khép kín của hệ sinh thái đầm hồ cổ đại.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'significance' && (
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <h3 className="text-2xl font-bold font-serif text-white">
                  Tầm Quan Trọng Quốc Tế Trong Hồ Sơ UNESCO Geopark
                </h3>
              </div>
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                Na Dương là một trong những tiêu chí địa chất cốt lõi giúp Công viên địa chất Lạng Sơn xuất sắc vượt qua các kỳ thẩm định khắt khe của Mạng lưới Công viên Địa chất Toàn cầu UNESCO (GGN):
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-stone-950 border border-stone-800 space-y-2">
                  <div className="text-amber-400 font-bold text-sm">1. Tính độc bản toàn cầu</div>
                  <p className="text-xs text-stone-400 leading-relaxed">
                    Rất hiếm nơi trên Trái Đất có bể than nâu bảo tồn liên tục cả trầm tích động vật có vú, bò sát lớn, cá và thực vật Eocene hoàn chỉnh như Na Dương.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-stone-950 border border-stone-800 space-y-2">
                  <div className="text-emerald-400 font-bold text-sm">2. Công bố khoa học đỉnh cao</div>
                  <p className="text-xs text-stone-400 leading-relaxed">
                    Hàng chục công trình nghiên cứu về Na Dương đã được đăng tải trên các tạp chí quốc tế hàng đầu (Nature, PLoS ONE), khẳng định vị thế khoa học của Việt Nam.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-stone-950 border border-stone-800 space-y-2">
                  <div className="text-cyan-400 font-bold text-sm">3. Giáo dục & Du lịch bền vững</div>
                  <p className="text-xs text-stone-400 leading-relaxed">
                    Là giảng đường địa chất ngoài trời lý tưởng cho sinh viên, học sinh và du khách quốc tế tìm hiểu về lịch sử biến đổi khí hậu Trái Đất.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
