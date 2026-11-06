import React, { useState } from 'react';
import { Globe, MapPin, Compass, BookOpen, Award, Phone, ExternalLink, Menu, X, Landmark } from 'lucide-react';
import { OFFICIAL_OVERVIEW } from '../data/geoparkData';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'overview', label: 'Tổng quan', icon: Globe },
    { id: 'routes', label: '4 Tuyến di sản', icon: Compass },
    { id: 'sites', label: '38 Điểm đến', icon: MapPin },
    { id: 'map', label: 'Bản đồ di sản', icon: Landmark },
    { id: 'naduong', label: 'Cổ sinh Na Dương', icon: Award },
    { id: 'timeline', label: '500 triệu năm', icon: BookOpen },
    { id: 'culture', label: 'Văn hóa & Sinh thái', icon: Globe },
    { id: 'planner', label: 'Lập tour', icon: Compass },
    { id: 'quiz', label: 'Trắc nghiệm', icon: Award },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-stone-900/95 backdrop-blur-md border-b border-stone-800 text-stone-100 shadow-xl">
      {/* Top micro bar for official accreditation */}
      <div className="bg-gradient-to-r from-emerald-900 via-stone-900 to-amber-950 py-1 px-4 text-xs font-medium border-b border-stone-800 text-stone-300">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-600/30 text-emerald-300 border border-emerald-500/40">
              UNESCO Global Geopark
            </span>
            <span className="hidden sm:inline text-stone-400">|</span>
            <span className="hidden sm:inline italic text-stone-300 font-serif">
              "{OFFICIAL_OVERVIEW.themeSlogan}"
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <a
              href="tel:0358479368"
              className="inline-flex items-center gap-1.5 text-stone-300 hover:text-amber-400 transition-colors"
            >
              <Phone className="w-3 h-3 text-amber-400" />
              <span>Hotline BQL: 0358 479 368</span>
            </a>
            <a
              href="https://langsongeopark.com.vn/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
            >
              <span>langsongeopark.com.vn</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-18">
          {/* Brand identity */}
          <div 
            onClick={() => handleNavClick('overview')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-600 via-teal-700 to-amber-700 p-0.5 shadow-lg group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-stone-900 rounded-[10px] flex items-center justify-center">
                <Globe className="w-5 h-5 text-emerald-400 group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            <div>
              <div className="text-sm sm:text-base font-bold tracking-tight text-stone-100 flex items-center gap-1.5">
                <span>CVĐC TOÀN CẦU LẠNG SƠN</span>
              </div>
              <div className="text-[11px] font-medium text-stone-400 uppercase tracking-wider">
                Lang Son UNESCO Global Geopark
              </div>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 shadow-sm'
                      : 'text-stone-300 hover:text-white hover:bg-stone-800/60'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-emerald-400' : 'text-stone-400'}`} />
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Mobile menu button */}
          <div className="flex items-center xl:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-stone-300 hover:text-white hover:bg-stone-800 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drop-down menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-stone-900/98 border-b border-stone-800 px-4 pt-2 pb-6 space-y-1 shadow-2xl">
          <div className="grid grid-cols-2 gap-2 pt-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-2.5 rounded-lg text-xs font-medium text-left flex items-center gap-2 transition-colors ${
                    isActive
                      ? 'bg-emerald-600/25 text-emerald-300 border border-emerald-500/40'
                      : 'text-stone-300 hover:bg-stone-800'
                  }`}
                >
                  <Icon className="w-4 h-4 text-emerald-400" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
          <div className="pt-4 mt-2 border-t border-stone-800 text-xs text-stone-400 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>Hotline BQL: 0358 479 368</span>
            </div>
            <a
              href="https://langsongeopark.com.vn/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 flex items-center gap-1 hover:underline"
            >
              <span>Trang web chính thức: langsongeopark.com.vn</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
