/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AuthProvider } from './context/AuthContext';
import { GameProvider, useGame } from './context/GameContext';
import { Header } from './components/Header';
import { TimelineBar } from './components/TimelineBar';
import { SimulationDashboard } from './components/SimulationDashboard';
import { InteractiveMap } from './components/InteractiveMap';
import { PrimarySourceDesk } from './components/PrimarySourceDesk';
import { ColonialGazette } from './components/ColonialGazette';
import { TeacherDashboard } from './components/TeacherDashboard';
import { DecisionModal } from './components/DecisionModal';
import { ConsequenceModal } from './components/ConsequenceModal';
import { QuestionModal } from './components/QuestionModal';
import { StandardsGuideModal } from './components/StandardsGuideModal';
import { AchievementsModal } from './components/AchievementsModal';
import { ChapterCompleteModal } from './components/ChapterCompleteModal';
import { Award, CheckCircle2, CloudCheck, Sparkles } from 'lucide-react';

function AppContent() {
  const { 
    activeEvent, 
    closeEvent, 
    activeQuestion, 
    closeQuestion, 
    unlockedAchievement, 
    saving 
  } = useGame();

  const [activeTab, setActiveTab] = useState<'simulation' | 'map' | 'sources' | 'gazette' | 'teacher' | 'standards'>('simulation');
  const [standardsModalOpen, setStandardsModalOpen] = useState(false);
  const [achievementsModalOpen, setAchievementsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#141211] text-[#f5f5f4] flex flex-col font-sans selection:bg-amber-800 selection:text-amber-100">
      {/* Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenAchievements={() => setAchievementsModalOpen(true)}
        onOpenStandards={() => setStandardsModalOpen(true)}
      />

      {/* Timeline Bar across the 6 historical chapters */}
      <TimelineBar />

      {/* Main Interactive Screen */}
      <main className="flex-1 pb-16">
        {activeTab === 'simulation' && (
          <SimulationDashboard
            onOpenMap={() => setActiveTab('map')}
            onOpenSources={() => setActiveTab('sources')}
            onOpenGazette={() => setActiveTab('gazette')}
          />
        )}

        {activeTab === 'map' && (
          <InteractiveMap />
        )}

        {activeTab === 'sources' && (
          <PrimarySourceDesk />
        )}

        {activeTab === 'gazette' && (
          <ColonialGazette 
            onReturnToSimulation={() => setActiveTab('simulation')}
            onAdvanceChapter={() => setActiveTab('simulation')}
          />
        )}

        {activeTab === 'teacher' && (
          <TeacherDashboard />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-[#1c1917] border-t border-[#292524] py-4 px-6 text-center text-xs text-[#78716c] font-serif">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div>
            Road to Revolution: 1763–1776 &bull; 8th Grade Social Studies &bull; Bearworks SPARCC Integration
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setStandardsModalOpen(true)}
              className="hover:text-amber-400 transition-colors"
            >
              Ohio Learning Standards
            </button>
            <button
              onClick={() => setAchievementsModalOpen(true)}
              className="hover:text-amber-400 transition-colors"
            >
              Accolades
            </button>
            {saving && (
              <span className="text-amber-400 flex items-center space-x-1">
                <span>Saving to Bearworks...</span>
              </span>
            )}
          </div>
        </div>
      </footer>

      {/* Modals */}
      {activeEvent && (
        <DecisionModal event={activeEvent} onClose={closeEvent} />
      )}

      <ConsequenceModal />

      {activeQuestion && (
        <QuestionModal question={activeQuestion} onClose={closeQuestion} />
      )}

      {standardsModalOpen && (
        <StandardsGuideModal onClose={() => setStandardsModalOpen(false)} />
      )}

      {achievementsModalOpen && (
        <AchievementsModal onClose={() => setAchievementsModalOpen(false)} />
      )}

      <ChapterCompleteModal />

      {/* Achievement Unlocked Toast Notification */}
      {unlockedAchievement && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#78350f] text-[#fef3c7] border-2 border-amber-400 px-5 py-3.5 rounded-sm shadow-2xl flex items-center space-x-3 animate-in slide-in-from-bottom-5 duration-300">
          <div className="p-2 bg-amber-950 rounded-full border border-amber-400">
            <Award className="w-5 h-5 text-amber-300" />
          </div>
          <div>
            <div className="text-[10px] font-mono uppercase tracking-widest text-amber-300">
              Accolade Unlocked!
            </div>
            <div className="font-serif font-bold text-sm">
              {unlockedAchievement}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <GameProvider>
        <AppContent />
      </GameProvider>
    </AuthProvider>
  );
}
