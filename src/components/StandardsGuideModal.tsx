import React from 'react';
import { OHIO_STANDARDS, ELA_STANDARDS } from '../data/standards';
import { HelpCircle, X, CheckCircle2, BookOpen, Layers } from 'lucide-react';

interface StandardsGuideModalProps {
  onClose: () => void;
}

export const StandardsGuideModal: React.FC<StandardsGuideModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xs overflow-y-auto">
      <div 
        id="standards-guide-container"
        className="relative w-full max-w-4xl bg-[#1c1917] text-[#f5f5f4] rounded-sm shadow-2xl border-2 border-amber-600/70 overflow-hidden my-6"
      >
        {/* Header */}
        <div className="bg-[#292524] px-6 py-4 border-b border-[#44403c] flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-sm bg-amber-900/60 border border-amber-600 flex items-center justify-center text-amber-300">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold font-serif text-[#fef3c7] font-['Cinzel']">
                Ohio Learning Standards Alignment
              </h2>
              <p className="text-xs text-[#a8a29e] font-serif">
                8th Grade Social Studies &bull; History Strand &bull; English Language Arts Crosswalk
              </p>
            </div>
          </div>

          <button
            id="standards-modal-close"
            onClick={onClose}
            className="p-1 rounded text-[#a8a29e] hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Social Studies Standards */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-amber-400 font-mono text-xs uppercase tracking-wider border-b border-[#383330] pb-1">
              <BookOpen className="w-4 h-4" />
              <span>Ohio 8th Grade Social Studies Standards</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {OHIO_STANDARDS.map(std => (
                <div
                  key={std.id}
                  className="bg-[#241e1b] p-4 rounded-sm border border-[#383330] space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-0.5 rounded bg-amber-950/80 text-amber-300 border border-amber-800 font-mono text-xs font-bold">
                      {std.code}
                    </span>
                    <span className="text-[11px] text-[#a8a29e] font-mono">
                      Chapters {std.testedInChapters.join(', ')}
                    </span>
                  </div>
                  <h4 className="font-serif font-bold text-sm text-[#f5f5f4]">
                    {std.title}
                  </h4>
                  <p className="text-xs text-[#d6d3d1] font-serif leading-relaxed">
                    {std.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ELA Crosswalk */}
          <div className="space-y-4 pt-2">
            <div className="flex items-center space-x-2 text-sky-400 font-mono text-xs uppercase tracking-wider border-b border-[#383330] pb-1">
              <BookOpen className="w-4 h-4" />
              <span>Reading Informational Text (ELA) Standards</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {ELA_STANDARDS.map(std => (
                <div
                  key={std.id}
                  className="bg-[#241e1b] p-4 rounded-sm border border-[#383330] space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-0.5 rounded bg-sky-950/80 text-sky-300 border border-sky-800 font-mono text-xs font-bold">
                      {std.code}
                    </span>
                  </div>
                  <h4 className="font-serif font-bold text-sm text-[#f5f5f4]">
                    {std.title}
                  </h4>
                  <p className="text-xs text-[#d6d3d1] font-serif leading-relaxed">
                    {std.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#292524] px-6 py-3.5 border-t border-[#44403c] flex justify-end">
          <button
            id="standards-modal-done"
            onClick={onClose}
            className="px-5 py-2 bg-amber-700 hover:bg-amber-600 text-white rounded-sm text-xs font-serif font-bold uppercase tracking-wider"
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  );
};
