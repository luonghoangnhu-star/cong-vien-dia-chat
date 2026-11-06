/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { RoutesSection } from './components/RoutesSection';
import { SitesCatalog } from './components/SitesCatalog';
import { InteractiveMap } from './components/InteractiveMap';
import { NaDuongFossilShowcase } from './components/NaDuongFossilShowcase';
import { GeologicalTimeline } from './components/GeologicalTimeline';
import { CultureBiodiversity } from './components/CultureBiodiversity';
import { TourPlanner } from './components/TourPlanner';
import { GeoparkQuiz } from './components/GeoparkQuiz';
import { SiteModal } from './components/SiteModal';
import { Footer } from './components/Footer';
import { GeoparkSite } from './data/geoparkData';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('overview');
  const [selectedSite, setSelectedSite] = useState<GeoparkSite | null>(null);
  const [routeFilter, setRouteFilter] = useState<number | null>(null);

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFilterByRoute = (routeId: 1 | 2 | 3 | 4) => {
    setRouteFilter(routeId);
    scrollToSection('sites');
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-white">
      {/* Top Sticky Navigation */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 1. Hero with Official Overview & Stats */}
        <Hero
          onExploreRoutes={() => scrollToSection('routes')}
          onExploreSites={() => scrollToSection('sites')}
          onExploreMap={() => scrollToSection('map')}
          onExploreNaDuong={() => scrollToSection('naduong')}
        />

        {/* 2. The 04 Official Thematic Heritage Routes */}
        <RoutesSection
          onSelectSite={(site) => setSelectedSite(site)}
          onFilterByRoute={handleFilterByRoute}
        />

        {/* 3. Catalog of all 38 Geopark Sites */}
        <SitesCatalog
          onSelectSite={(site) => setSelectedSite(site)}
          initialRouteFilter={routeFilter}
        />

        {/* 4. Interactive Geographic & Heritage Map */}
        <InteractiveMap onSelectSite={(site) => setSelectedSite(site)} />

        {/* 5. Na Duong Eocene Paleontological Showcase */}
        <NaDuongFossilShowcase />

        {/* 6. 500 Million Years Geological Evolution Timeline */}
        <GeologicalTimeline />

        {/* 7. Biodiversity & 7 Ethnic Cultures */}
        <CultureBiodiversity />

        {/* 8. Interactive Tour Itinerary Planner */}
        <TourPlanner onSelectSite={(site) => setSelectedSite(site)} />

        {/* 9. Interactive Geopark Knowledge Quiz */}
        <GeoparkQuiz />
      </main>

      {/* Site Detail Modal Dialog */}
      <SiteModal
        site={selectedSite}
        onClose={() => setSelectedSite(null)}
        onViewRoute={(rId) => {
          setSelectedSite(null);
          scrollToSection('routes');
        }}
      />

      {/* Official Agency Footer & Attribution */}
      <Footer />
    </div>
  );
}
