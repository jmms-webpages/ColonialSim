import React, { useState } from 'react';
import { COLONIES } from '../data/colonies';
import { Colony, ColonialRegion } from '../types';
import { useGame } from '../context/GameContext';
import { HISTORICAL_EVENTS } from '../data/events';
import { 
  MapPin, 
  Anchor, 
  Wheat, 
  TreePine, 
  Building2, 
  Users, 
  ShieldAlert, 
  ChevronRight, 
  Compass, 
  Search,
  Flame,
  Shield,
  Scale
} from 'lucide-react';

interface InteractiveMapProps {
  onTriggerEvent?: (eventId: string) => void;
}

export const InteractiveMap: React.FC<InteractiveMapProps> = ({ onTriggerEvent }) => {
  const { colonyAlignments, selectedColony, selectColony, openEvent, progress } = useGame();
  const [selectedRegion, setSelectedRegion] = useState<ColonialRegion | 'ALL'>('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredColonies = COLONIES.filter(colony => {
    const matchesRegion = selectedRegion === 'ALL' || colony.region === selectedRegion;
    const matchesSearch = colony.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          colony.capital.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          colony.keyConcepts.some(k => k.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesRegion && matchesSearch;
  });

  const getRegionBadge = (region: ColonialRegion) => {
    switch (region) {
      case 'new_england':
        return {
          label: 'New England',
          color: 'bg-sky-900/60 text-sky-200 border-sky-700',
          icon: <TreePine className="w-3.5 h-3.5" />
        };
      case 'middle':
        return {
          label: 'Middle Colonies',
          color: 'bg-amber-900/60 text-amber-200 border-amber-700',
          icon: <Wheat className="w-3.5 h-3.5" />
        };
      case 'southern':
        return {
          label: 'Southern Colonies',
          color: 'bg-emerald-900/60 text-emerald-200 border-emerald-700',
          icon: <Anchor className="w-3.5 h-3.5" />
        };
    }
  };

  // Find events occurring in the active colony
  const getColonyEvents = (colonyId: string) => {
    return HISTORICAL_EVENTS.filter(e => e.colonyId === colonyId && e.chapter <= progress.currentChapter);
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-4 sm:p-6 space-y-6">
      {/* Map Section Header */}
      <div className="bg-[#292524] rounded-sm border border-[#44403c] p-4 sm:p-5 shadow-sm">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2">
              <Compass className="w-5 h-5 text-amber-400" />
              <h2 className="text-xl font-bold font-serif text-[#fef3c7] font-['Cinzel']">
                The Thirteen American Colonies (1763–1776)
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#d6d3d1] mt-1 font-serif">
              Explore regional economies, geographic factors, and the shifting balance between Patriots, Loyalists, and Neutrals.
            </p>
          </div>

          {/* Region Filters and Search */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="relative">
              <Search className="w-3.5 h-3.5 absolute left-2.5 top-2.5 text-[#a8a29e]" />
              <input
                id="map-search-input"
                type="text"
                placeholder="Search colony or city..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="pl-8 pr-3 py-1.5 bg-[#1c1917] border border-[#44403c] rounded-sm text-xs text-[#f5f5f4] placeholder-[#78716c] focus:outline-hidden focus:border-amber-500 w-48 sm:w-56"
              />
            </div>

            <div className="flex items-center space-x-1 bg-[#1c1917] p-1 rounded-sm border border-[#44403c]">
              {[
                { id: 'ALL', label: 'All 13' },
                { id: 'new_england', label: 'New England' },
                { id: 'middle', label: 'Middle' },
                { id: 'southern', label: 'Southern' }
              ].map(reg => (
                <button
                  key={reg.id}
                  id={`map-filter-${reg.id}`}
                  onClick={() => setSelectedRegion(reg.id as any)}
                  className={`px-2.5 py-1 text-xs rounded-sm transition-colors ${
                    selectedRegion === reg.id
                      ? 'bg-amber-800 text-amber-100 font-semibold shadow-xs'
                      : 'text-[#a8a29e] hover:text-[#f5f5f4]'
                  }`}
                >
                  {reg.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid: Colony Cards & Selected Details Drawer */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Colonies Cards Grid (Takes 2 Columns) */}
        <div className="lg:col-span-2 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filteredColonies.map(colony => {
              const alignment = colonyAlignments[colony.id] || {
                patriot: colony.patriotSupport,
                loyalist: colony.loyalistSupport,
                neutral: colony.neutralSupport
              };
              const regionBadge = getRegionBadge(colony.region);
              const isSelected = selectedColony?.id === colony.id;
              const localEvents = getColonyEvents(colony.id);

              return (
                <div
                  key={colony.id}
                  id={`colony-card-${colony.id}`}
                  onClick={() => selectColony(colony)}
                  className={`bg-[#1c1917] rounded-sm border p-4 cursor-pointer transition-all duration-200 hover:border-amber-600/80 hover:shadow-md ${
                    isSelected ? 'border-amber-500 ring-2 ring-amber-500/30 bg-[#241e1b]' : 'border-[#383330]'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-serif text-base font-bold text-[#fef3c7]">
                        {colony.name}
                      </h3>
                      <p className="text-xs text-[#a8a29e] flex items-center space-x-1 mt-0.5">
                        <MapPin className="w-3 h-3 text-amber-400" />
                        <span>Capital: {colony.capital}</span>
                      </p>
                    </div>
                    {regionBadge && (
                      <span className={`flex items-center space-x-1 px-2 py-0.5 text-[10px] font-medium rounded-sm border ${regionBadge.color}`}>
                        {regionBadge.icon}
                        <span>{regionBadge.label}</span>
                      </span>
                    )}
                  </div>

                  {/* Economy & Agriculture */}
                  <div className="mt-3 text-xs text-[#d6d3d1] line-clamp-2 font-serif">
                    {colony.economicFocus}
                  </div>

                  {/* Sentiment Bar */}
                  <div className="mt-4 space-y-1.5">
                    <div className="flex justify-between text-[11px] font-mono text-[#a8a29e]">
                      <span className="flex items-center space-x-1 text-amber-300">
                        <Flame className="w-3 h-3" />
                        <span>Patriot: {alignment.patriot}%</span>
                      </span>
                      <span className="flex items-center space-x-1 text-stone-300">
                        <Scale className="w-3 h-3" />
                        <span>Neutral: {alignment.neutral}%</span>
                      </span>
                      <span className="flex items-center space-x-1 text-red-300">
                        <Shield className="w-3 h-3" />
                        <span>Loyalist: {alignment.loyalist}%</span>
                      </span>
                    </div>

                    {/* Visual 3-color segmented bar */}
                    <div className="w-full h-2 rounded-full overflow-hidden flex bg-[#292524] border border-[#44403c]">
                      <div
                        style={{ width: `${alignment.patriot}%` }}
                        className="bg-amber-600 transition-all duration-500"
                        title={`Patriot Support: ${alignment.patriot}%`}
                      />
                      <div
                        style={{ width: `${alignment.neutral}%` }}
                        className="bg-stone-500 transition-all duration-500"
                        title={`Neutral Support: ${alignment.neutral}%`}
                      />
                      <div
                        style={{ width: `${alignment.loyalist}%` }}
                        className="bg-red-700 transition-all duration-500"
                        title={`Loyalist Support: ${alignment.loyalist}%`}
                      />
                    </div>
                  </div>

                  {/* Events occurring here */}
                  {localEvents.length > 0 && (
                    <div className="mt-3 pt-2.5 border-t border-[#292524] flex items-center justify-between text-[11px]">
                      <span className="text-amber-400 font-medium flex items-center space-x-1">
                        <ShieldAlert className="w-3.5 h-3.5" />
                        <span>{localEvents.length} Active Event{localEvents.length > 1 ? 's' : ''}</span>
                      </span>
                      <span className="text-[#a8a29e] flex items-center space-x-0.5 hover:text-white">
                        <span>Inspect</span>
                        <ChevronRight className="w-3 h-3" />
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Colony Deep-Dive Detail Panel (1 Column) */}
        <div className="lg:col-span-1">
          {selectedColony ? (
            <div className="bg-[#1c1917] rounded-sm border border-amber-600/40 p-5 space-y-4 sticky top-24 shadow-lg">
              <div className="border-b border-[#383330] pb-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase font-mono tracking-wider text-amber-400">
                    Regional Dossier
                  </span>
                  <button
                    id="colony-close-details-btn"
                    onClick={() => selectColony(null)}
                    className="text-xs text-[#a8a29e] hover:text-white"
                  >
                    Clear
                  </button>
                </div>
                <h3 className="text-xl font-bold font-serif text-[#fef3c7] mt-1 font-['Cinzel']">
                  {selectedColony.name}
                </h3>
                <p className="text-xs text-[#d6d3d1] mt-0.5">
                  Region: <span className="font-semibold text-amber-200 uppercase">{selectedColony.region.replace('_', ' ')}</span>
                </p>
              </div>

              {/* Economic & Geographic Overview */}
              <div className="space-y-2 text-xs">
                <h4 className="font-semibold uppercase tracking-wider text-[#a8a29e] flex items-center space-x-1 font-mono">
                  <Anchor className="w-3.5 h-3.5 text-amber-400" />
                  <span>Geography & Economy</span>
                </h4>
                <p className="text-[#e7e5e4] font-serif leading-relaxed bg-[#241e1b] p-3 rounded-sm border border-[#383330]">
                  {selectedColony.economicFocus}
                </p>
              </div>

              {/* Key Concepts & Sites */}
              <div className="space-y-1.5 text-xs">
                <h4 className="font-semibold uppercase tracking-wider text-[#a8a29e] flex items-center space-x-1 font-mono">
                  <Building2 className="w-3.5 h-3.5 text-sky-400" />
                  <span>Key Concepts & Figures</span>
                </h4>
                <div className="bg-[#241e1b] p-3 rounded-sm border border-[#383330] space-y-1.5">
                  <div className="flex justify-between">
                    <span className="text-[#a8a29e]">Colonial Capital:</span>
                    <span className="text-[#f5f5f4] font-medium">{selectedColony.capital}</span>
                  </div>
                  <div className="pt-1 text-[#d6d3d1]">
                    <span className="text-[#a8a29e]">Key Figures:</span> {selectedColony.majorFigures.join(', ')}
                  </div>
                  <div className="pt-1 text-[#d6d3d1]">
                    <span className="text-[#a8a29e]">Curriculum Topics:</span> {selectedColony.keyConcepts.join(' • ')}
                  </div>
                </div>
              </div>

              {/* Political Atmosphere */}
              <div className="space-y-2 text-xs">
                <h4 className="font-semibold uppercase tracking-wider text-[#a8a29e] flex items-center space-x-1 font-mono">
                  <Users className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Current Sentiment (1763–1776)</span>
                </h4>
                {(() => {
                  const align = colonyAlignments[selectedColony.id] || {
                    patriot: selectedColony.patriotSupport,
                    loyalist: selectedColony.loyalistSupport,
                    neutral: selectedColony.neutralSupport
                  };
                  return (
                    <div className="bg-[#241e1b] p-3 rounded-sm border border-[#383330] space-y-2">
                      <div className="grid grid-cols-3 gap-2 text-center text-[11px] font-mono">
                        <div className="bg-amber-950/60 p-1.5 rounded-sm border border-amber-800 text-amber-200">
                          <div>Patriot</div>
                          <div className="text-sm font-bold">{align.patriot}%</div>
                        </div>
                        <div className="bg-stone-900/60 p-1.5 rounded-sm border border-stone-700 text-stone-200">
                          <div>Neutral</div>
                          <div className="text-sm font-bold">{align.neutral}%</div>
                        </div>
                        <div className="bg-red-950/60 p-1.5 rounded-sm border border-red-800 text-red-200">
                          <div>Loyalist</div>
                          <div className="text-sm font-bold">{align.loyalist}%</div>
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </div>

              {/* Associated Historic Events */}
              {(() => {
                const localEvents = getColonyEvents(selectedColony.id);
                return (
                  <div className="space-y-2 text-xs pt-1">
                    <h4 className="font-semibold uppercase tracking-wider text-[#a8a29e] font-mono">
                      Events in {selectedColony.name}
                    </h4>
                    {localEvents.length === 0 ? (
                      <p className="text-xs text-[#a8a29e] italic">
                        No active simulation events currently localized in this colony for Chapter {progress.currentChapter}.
                      </p>
                    ) : (
                      <div className="space-y-2">
                        {localEvents.map(event => (
                          <div
                            key={event.id}
                            className="bg-[#292524] p-2.5 rounded-sm border border-[#44403c] flex items-center justify-between"
                          >
                            <div>
                              <div className="font-medium text-amber-200 font-serif">
                                {event.title}
                              </div>
                              <div className="text-[11px] text-[#a8a29e]">
                                Year {event.year} &bull; Chapter {event.chapter}
                              </div>
                            </div>
                            <button
                              id={`open-colony-event-${event.id}`}
                              onClick={() => openEvent(event)}
                              className="px-2 py-1 bg-amber-700 hover:bg-amber-600 text-white rounded-sm text-[11px] font-medium"
                            >
                              Experience
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })()}
            </div>
          ) : (
            <div className="bg-[#1c1917] rounded-sm border border-[#383330] p-6 text-center text-[#a8a29e] space-y-3">
              <Compass className="w-10 h-10 mx-auto text-[#78716c]" />
              <h4 className="font-serif text-sm font-semibold text-[#d6d3d1]">
                Select Any Colony
              </h4>
              <p className="text-xs font-serif leading-relaxed">
                Click on any of the 13 colonies to inspect its geographic traits, colonial economy, historic ports, and live political alignment.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
