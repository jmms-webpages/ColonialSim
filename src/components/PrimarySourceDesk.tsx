import React, { useState } from 'react';
import { PRIMARY_SOURCES } from '../data/sources';
import { PrimarySourceDoc } from '../types';
import { 
  BookOpen, 
  Scroll, 
  Sparkles, 
  HelpCircle, 
  FileText, 
  Compass, 
  Calendar, 
  User, 
  Search,
  CheckCircle2
} from 'lucide-react';

export const PrimarySourceDesk: React.FC = () => {
  const [selectedSource, setSelectedSource] = useState<PrimarySourceDoc>(PRIMARY_SOURCES[0]);
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'both' | 'original' | 'modern'>('both');

  const filteredSources = PRIMARY_SOURCES.filter(s =>
    s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full max-w-7xl mx-auto p-4 sm:p-6 space-y-6">
      {/* Header */}
      <div className="bg-[#292524] rounded-sm border border-[#44403c] p-4 sm:p-5 shadow-sm">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2">
              <BookOpen className="w-5 h-5 text-sky-400" />
              <h2 className="text-xl font-bold font-serif text-[#fef3c7] font-['Cinzel']">
                Primary Source Scholar Desk
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#d6d3d1] mt-1 font-serif">
              Analyze firsthand speeches, proclamations, pamphlets, and resolutions. Read original 18th-century phrasing alongside modern student translations.
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <div className="relative">
              <Search className="w-3.5 h-3.5 absolute left-2.5 top-2.5 text-[#a8a29e]" />
              <input
                id="source-search-input"
                type="text"
                placeholder="Search documents or authors..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="pl-8 pr-3 py-1.5 bg-[#1c1917] border border-[#44403c] rounded-sm text-xs text-[#f5f5f4] placeholder-[#78716c] focus:outline-hidden focus:border-sky-500 w-56"
              />
            </div>

            {/* View Mode Switcher */}
            <div className="flex items-center space-x-1 bg-[#1c1917] p-1 rounded-sm border border-[#44403c]">
              <button
                id="source-view-both"
                onClick={() => setViewMode('both')}
                className={`px-2.5 py-1 text-xs rounded-sm transition-colors ${
                  viewMode === 'both' ? 'bg-sky-800 text-sky-100 font-semibold' : 'text-[#a8a29e] hover:text-white'
                }`}
              >
                Side-by-Side
              </button>
              <button
                id="source-view-original"
                onClick={() => setViewMode('original')}
                className={`px-2.5 py-1 text-xs rounded-sm transition-colors ${
                  viewMode === 'original' ? 'bg-sky-800 text-sky-100 font-semibold' : 'text-[#a8a29e] hover:text-white'
                }`}
              >
                18th Cent.
              </button>
              <button
                id="source-view-modern"
                onClick={() => setViewMode('modern')}
                className={`px-2.5 py-1 text-xs rounded-sm transition-colors ${
                  viewMode === 'modern' ? 'bg-sky-800 text-sky-100 font-semibold' : 'text-[#a8a29e] hover:text-white'
                }`}
              >
                Modern
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Layout: Document List & Document Viewer */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Document Index (1 Column) */}
        <div className="space-y-3">
          <span className="text-xs font-mono uppercase tracking-wider text-[#a8a29e] block">
            Historical Documents ({filteredSources.length})
          </span>

          <div className="space-y-2">
            {filteredSources.map(doc => {
              const isSelected = selectedSource.id === doc.id;

              return (
                <div
                  key={doc.id}
                  id={`source-item-${doc.id}`}
                  onClick={() => setSelectedSource(doc)}
                  className={`p-3.5 rounded-sm border cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-[#241e1b] border-sky-500 shadow-md ring-1 ring-sky-500/30'
                      : 'bg-[#1c1917] border-[#383330] hover:border-sky-700/60'
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px] font-mono mb-1">
                    <span className="text-sky-300 uppercase tracking-wide">
                      {doc.category}
                    </span>
                    <span className="text-[#a8a29e]">{doc.date}</span>
                  </div>

                  <h4 className="font-serif font-bold text-sm text-[#f5f5f4] line-clamp-1">
                    {doc.title}
                  </h4>

                  <p className="text-xs text-[#a8a29e] font-serif mt-0.5">
                    By {doc.author}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Document Reader (2 Columns) */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-[#1c1917] rounded-sm border border-[#383330] p-6 sm:p-7 shadow-lg space-y-6">
            {/* Header info */}
            <div className="border-b border-[#292524] pb-4">
              <div className="flex items-center space-x-2 text-xs font-mono text-sky-400 uppercase tracking-widest">
                <span>{selectedSource.category}</span>
                <span>&bull;</span>
                <span>{selectedSource.date}</span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#fef3c7] mt-1 font-['Cinzel']">
                {selectedSource.title}
              </h3>
              <p className="text-sm font-serif text-[#d6d3d1] mt-1">
                Authored by <span className="text-white font-medium">{selectedSource.author}</span>
              </p>
            </div>

            {/* Document Texts */}
            <div className={`grid gap-6 ${viewMode === 'both' ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'}`}>
              {(viewMode === 'both' || viewMode === 'original') && (
                <div className="bg-[#241e1b] rounded-sm border border-amber-900/50 p-5 space-y-3">
                  <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-amber-400 border-b border-[#383330] pb-1.5">
                    <Scroll className="w-4 h-4" />
                    <span>Original 18th-Century Text</span>
                  </div>
                  <p className="font-serif text-sm text-[#f5f5f4] italic leading-relaxed whitespace-pre-line">
                    &ldquo;{selectedSource.originalText}&rdquo;
                  </p>
                </div>
              )}

              {(viewMode === 'both' || viewMode === 'modern') && (
                <div className="bg-[#1e293b]/40 rounded-sm border border-sky-900/60 p-5 space-y-3">
                  <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-sky-400 border-b border-[#383330] pb-1.5">
                    <Sparkles className="w-4 h-4" />
                    <span>Plain English Translation</span>
                  </div>
                  <p className="font-serif text-sm text-[#e2e8f0] leading-relaxed whitespace-pre-line">
                    {selectedSource.simplifiedText}
                  </p>
                </div>
              )}
            </div>

            {/* Historical Significance & Standards Insight */}
            <div className="bg-[#292524] p-4 rounded-sm border border-[#44403c] space-y-2">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 flex items-center space-x-1.5">
                <HelpCircle className="w-4 h-4" />
                <span>Historical Significance & Constitutional Impact</span>
              </h4>
              <p className="text-xs sm:text-sm font-serif text-[#d6d3d1] leading-relaxed">
                {selectedSource.historicalSignificance}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
