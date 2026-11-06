import React from 'react';
import { Globe, Phone, Mail, MapPin, ExternalLink, ShieldCheck, Award } from 'lucide-react';
import { OFFICIAL_OVERVIEW } from '../data/geoparkData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-stone-300 border-t border-stone-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Geopark Emblem & Title */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-600 via-teal-700 to-amber-700 p-0.5 shadow-lg">
                <div className="w-full h-full bg-stone-900 rounded-[10px] flex items-center justify-center">
                  <Globe className="w-5 h-5 text-emerald-400" />
                </div>
              </div>
              <div>
                <div className="text-sm sm:text-base font-bold text-white tracking-tight">
                  CÔNG VIÊN ĐỊA CHẤT TOÀN CẦU UNESCO LẠNG SƠN
                </div>
                <div className="text-[11px] text-stone-400 font-sans uppercase tracking-wider">
                  Lang Son UNESCO Global Geopark
                </div>
              </div>
            </div>

            <p className="text-stone-400 leading-relaxed text-xs">
              "{OFFICIAL_OVERVIEW.themeSlogan}" — Mạng lưới di sản địa chất, văn hóa và đa dạng sinh học độc bản trải rộng 4.842,58 km² trên 8 huyện, thành phố thuộc tỉnh Lạng Sơn, được UNESCO biểu quyết công nhận ngày 08/09/2024.
            </p>

            <div className="pt-2 flex items-center gap-2 text-stone-400">
              <Award className="w-4 h-4 text-emerald-400" />
              <span>Thành viên Mạng lưới Công viên Địa chất Toàn cầu UNESCO (GGN)</span>
            </div>
          </div>

          {/* Official Agency & Contact Details */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Cơ quan quản lý & Liên hệ
            </div>
            <div className="space-y-2 text-stone-300">
              <div className="font-semibold text-white">
                {OFFICIAL_OVERVIEW.contact.agency}
              </div>
              <div className="flex items-start gap-2 text-stone-400">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{OFFICIAL_OVERVIEW.contact.address}</span>
              </div>
              <div className="flex items-center gap-2 text-stone-400">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Hotline: <a href={`tel:${OFFICIAL_OVERVIEW.contact.phone}`} className="text-white hover:text-amber-300 font-mono font-medium">{OFFICIAL_OVERVIEW.contact.phone}</a></span>
              </div>
              <div className="flex items-center gap-2 text-stone-400">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Email: <a href={`mailto:${OFFICIAL_OVERVIEW.contact.email}`} className="text-white hover:underline">{OFFICIAL_OVERVIEW.contact.email}</a></span>
              </div>
            </div>
          </div>

          {/* Source Attribution & Data Commitment */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Nguồn dữ liệu chính thức
            </div>
            <p className="text-stone-400 leading-relaxed text-xs">
              Ứng dụng tương tác khai thác trực tiếp và trung thực từ hệ thống thông tin chính thống:
            </p>
            <a
              href="https://langsongeopark.com.vn/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-emerald-400 hover:text-emerald-300 border border-stone-800 transition-colors font-medium text-xs"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>langsongeopark.com.vn</span>
            </a>

            <div className="pt-2 flex items-center gap-1.5 text-[11px] text-stone-400">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>Cam kết dữ liệu số liệu chuẩn xác 100%</span>
            </div>
          </div>
        </div>

        {/* Bottom copyright notice */}
        <div className="pt-8 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-stone-400 text-[11px]">
          <div>
            © {new Date().getFullYear()} Công viên địa chất toàn cầu UNESCO Lạng Sơn. Tất cả quyền được bảo lưu.
          </div>
          <div className="flex items-center gap-4">
            <span>Bảo tồn di sản</span>
            <span>•</span>
            <span>Giáo dục cộng đồng</span>
            <span>•</span>
            <span>Du lịch bền vững</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
