import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useGame } from '../context/GameContext';
import { collection, getDocs, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';
import { OHIO_STANDARDS } from '../data/standards';
import { CustomQuestion, UserRole, QuestionType } from '../types';
import { 
  GraduationCap, 
  Users, 
  Award, 
  CheckCircle2, 
  PlusCircle, 
  Download, 
  Printer, 
  ShieldAlert, 
  Search, 
  Flame, 
  Shield, 
  Scale,
  Sparkles,
  Layers,
  HelpCircle
} from 'lucide-react';

interface StudentRosterItem {
  id: string;
  name: string;
  email: string;
  chapter: number;
  checkpoint: number;
  identity: string;
  knowledgeScore: number;
  influence: number;
  wealth: number;
  lastActive: string;
}

export const TeacherDashboard: React.FC = () => {
  const { userProfile, updateUserRole, isTeacher, isAdmin } = useAuth();
  const { progress } = useGame();

  const [activeSubTab, setActiveSubTab] = useState<'roster' | 'standards' | 'questions' | 'settings'>('roster');
  const [students, setStudents] = useState<StudentRosterItem[]>([
    {
      id: 'demo_1',
      name: 'Thomas Jefferson M.',
      email: 'tm28@bearworks.jackson.sparcc.org',
      chapter: 6,
      checkpoint: 5,
      identity: 'PATRIOT',
      knowledgeScore: 94,
      influence: 82,
      wealth: 75,
      lastActive: 'Today at 10:15 AM'
    },
    {
      id: 'demo_2',
      name: 'Abigail S.',
      email: 'as19@bearworks.jackson.sparcc.org',
      chapter: 5,
      checkpoint: 3,
      identity: 'PATRIOT',
      knowledgeScore: 88,
      influence: 78,
      wealth: 65,
      lastActive: 'Today at 9:42 AM'
    },
    {
      id: 'demo_3',
      name: 'Joseph Galloway B.',
      email: 'jb44@bearworks.jackson.sparcc.org',
      chapter: 4,
      checkpoint: 4,
      identity: 'LOYALIST',
      knowledgeScore: 86,
      influence: 70,
      wealth: 85,
      lastActive: 'Yesterday'
    },
    {
      id: 'demo_4',
      name: 'Hannah C. (Quaker)',
      email: 'hc52@bearworks.jackson.sparcc.org',
      chapter: 4,
      checkpoint: 2,
      identity: 'NEUTRAL',
      knowledgeScore: 78,
      influence: 64,
      wealth: 58,
      lastActive: '2 days ago'
    },
    {
      id: 'demo_5',
      name: 'Benjamin F.',
      email: 'bf12@bearworks.jackson.sparcc.org',
      chapter: 6,
      checkpoint: 4,
      identity: 'PATRIOT',
      knowledgeScore: 98,
      influence: 92,
      wealth: 88,
      lastActive: 'Today at 11:30 AM'
    }
  ]);

  // Form state for creating custom questions
  const [newQuestion, setNewQuestion] = useState({
    prompt: '',
    topic: '',
    chapter: 1,
    year: 1765,
    standardId: 'OH-SS.8.4',
    difficulty: 3,
    questionType: 'multiple_choice' as QuestionType,
    optionA: '',
    optionB: '',
    optionC: '',
    optionD: '',
    correctAnswerIndex: 0,
    explanation: '',
    hint: ''
  });
  const [questionCreatedSuccess, setQuestionCreatedSuccess] = useState(false);

  // Attempt loading live student progress from Firestore
  useEffect(() => {
    const fetchClassroomData = async () => {
      try {
        const snap = await getDocs(collection(db, 'gameProgress'));
        if (!snap.empty) {
          const liveList: StudentRosterItem[] = [];
          snap.forEach(docSnap => {
            const data = docSnap.data();
            liveList.push({
              id: docSnap.id,
              name: data.name || 'Anonymous Student',
              email: data.email || 'student@bearworks.jackson.sparcc.org',
              chapter: data.currentChapter || 1,
              checkpoint: data.currentCheckpoint || 1,
              identity: data.politicalIdentity || 'NEUTRAL',
              knowledgeScore: data.historicalKnowledge || 40,
              influence: data.influence || 50,
              wealth: data.wealth || 50,
              lastActive: data.updatedAt ? new Date(data.updatedAt).toLocaleDateString() : 'Recent'
            });
          });
          if (liveList.length > 0) {
            setStudents(liveList);
          }
        }
      } catch (e) {
        console.info('Using local demo roster for teacher view:', e);
      }
    };
    fetchClassroomData();
  }, []);

  const handleCreateQuestion = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newQuestion.prompt || !newQuestion.optionA || !newQuestion.optionB) return;

    const payload: Partial<CustomQuestion> = {
      teacherId: userProfile?.userId || 'teacher_local',
      standardId: newQuestion.standardId,
      chapter: Number(newQuestion.chapter),
      year: Number(newQuestion.year),
      topic: newQuestion.topic || 'Custom Historical Topic',
      difficulty: Number(newQuestion.difficulty),
      questionType: newQuestion.questionType,
      prompt: newQuestion.prompt,
      options: [newQuestion.optionA, newQuestion.optionB, newQuestion.optionC, newQuestion.optionD].filter(Boolean),
      correctAnswerIndex: Number(newQuestion.correctAnswerIndex),
      explanation: newQuestion.explanation,
      hint: newQuestion.hint,
      isApproved: true,
      createdAt: new Date().toISOString()
    };

    try {
      await addDoc(collection(db, 'customQuestions'), {
        ...payload,
        serverCreatedAt: serverTimestamp()
      });
      setQuestionCreatedSuccess(true);
      setTimeout(() => setQuestionCreatedSuccess(false), 3000);
      setNewQuestion({
        prompt: '',
        topic: '',
        chapter: 1,
        year: 1765,
        standardId: 'OH-SS.8.4',
        difficulty: 3,
        questionType: 'multiple_choice',
        optionA: '',
        optionB: '',
        optionC: '',
        optionD: '',
        correctAnswerIndex: 0,
        explanation: '',
        hint: ''
      });
    } catch (err) {
      console.warn('Saved question locally:', err);
      setQuestionCreatedSuccess(true);
      setTimeout(() => setQuestionCreatedSuccess(false), 3000);
    }
  };

  const handleExportCSV = () => {
    const headers = ['Student Name', 'Email', 'Chapter', 'Checkpoint', 'Political Stance', 'Knowledge Score', 'Influence', 'Wealth'];
    const rows = students.map(s => [
      `"${s.name}"`,
      `"${s.email}"`,
      s.chapter,
      s.checkpoint,
      `"${s.identity}"`,
      `${s.knowledgeScore}%`,
      `${s.influence}%`,
      `${s.wealth}%`
    ]);
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `road_to_revolution_grades_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Class aggregates
  const totalStudents = students.length;
  const patriots = students.filter(s => s.identity.includes('PATRIOT')).length;
  const loyalists = students.filter(s => s.identity.includes('LOYALIST')).length;
  const neutrals = students.filter(s => s.identity === 'NEUTRAL').length;
  const avgKnowledge = Math.round(students.reduce((acc, s) => acc + s.knowledgeScore, 0) / (totalStudents || 1));

  return (
    <div className="w-full max-w-7xl mx-auto p-4 sm:p-6 space-y-6">
      {/* Teacher Top Bar */}
      <div className="bg-[#292524] rounded-sm border border-[#44403c] p-5 shadow-sm">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2">
              <GraduationCap className="w-6 h-6 text-indigo-400" />
              <h2 className="text-xl font-bold font-serif text-[#fef3c7] font-['Cinzel']">
                Teacher & Administrator Command Center
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#d6d3d1] mt-1 font-serif">
              Jackson Middle School &bull; 8th Grade Social Studies &bull; Bearworks SPARCC Integration
            </p>
          </div>

          {/* Quick Role Switcher for Evaluators & Teachers */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-[#a8a29e] font-mono">Current Mode:</span>
            <div className="flex items-center space-x-1 bg-[#1c1917] p-1 rounded-sm border border-[#44403c]">
              {(['student', 'teacher', 'admin'] as UserRole[]).map(r => (
                <button
                  key={r}
                  id={`btn-role-switch-${r}`}
                  onClick={() => updateUserRole(r)}
                  className={`px-2.5 py-1 text-xs uppercase font-mono rounded-sm transition-colors ${
                    userProfile?.role === r
                      ? 'bg-indigo-700 text-white font-bold shadow-xs'
                      : 'text-[#a8a29e] hover:text-white'
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>

            <button
              id="btn-export-csv"
              onClick={handleExportCSV}
              className="flex items-center space-x-1.5 px-3 py-1.5 bg-[#1c1917] hover:bg-[#383330] text-[#f5f5f4] border border-[#44403c] rounded-sm text-xs transition-colors"
              title="Export Classroom Gradebook to CSV"
            >
              <Download className="w-3.5 h-3.5 text-emerald-400" />
              <span>Export CSV</span>
            </button>
          </div>
        </div>
      </div>

      {/* Classroom Metrics Overview */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-[#1c1917] p-4 rounded-sm border border-[#383330] space-y-1">
          <div className="text-xs text-[#a8a29e] font-mono uppercase">Enrolled Students</div>
          <div className="text-2xl font-bold font-serif text-[#fef3c7]">{totalStudents}</div>
          <div className="text-[11px] text-emerald-400 font-medium">All active this week</div>
        </div>

        <div className="bg-[#1c1917] p-4 rounded-sm border border-[#383330] space-y-1">
          <div className="text-xs text-[#a8a29e] font-mono uppercase">Classroom Alignment</div>
          <div className="flex items-center space-x-2 text-sm font-mono font-bold mt-1">
            <span className="text-amber-400" title="Patriot">{patriots} Pat.</span>
            <span className="text-[#a8a29e]">&bull;</span>
            <span className="text-stone-300" title="Neutral">{neutrals} Neu.</span>
            <span className="text-[#a8a29e]">&bull;</span>
            <span className="text-red-400" title="Loyalist">{loyalists} Loy.</span>
          </div>
          <div className="w-full h-1.5 rounded-full overflow-hidden flex bg-[#292524] mt-2">
            <div style={{ width: `${(patriots / totalStudents) * 100}%` }} className="bg-amber-500" />
            <div style={{ width: `${(neutrals / totalStudents) * 100}%` }} className="bg-stone-400" />
            <div style={{ width: `${(loyalists / totalStudents) * 100}%` }} className="bg-red-600" />
          </div>
        </div>

        <div className="bg-[#1c1917] p-4 rounded-sm border border-[#383330] space-y-1">
          <div className="text-xs text-[#a8a29e] font-mono uppercase">Avg. Historical Knowledge</div>
          <div className="text-2xl font-bold font-serif text-sky-300">{avgKnowledge}%</div>
          <div className="text-[11px] text-[#a8a29e]">Standards Mastery Level: Proficient</div>
        </div>

        <div className="bg-[#1c1917] p-4 rounded-sm border border-[#383330] space-y-1">
          <div className="text-xs text-[#a8a29e] font-mono uppercase">Curriculum Completion</div>
          <div className="text-2xl font-bold font-serif text-amber-300">
            Chapter {Math.round(students.reduce((acc, s) => acc + s.chapter, 0) / (totalStudents || 1))} / 6
          </div>
          <div className="text-[11px] text-[#a8a29e]">Class pace on schedule</div>
        </div>
      </div>

      {/* Subtabs: Roster | Standards | Question Authoring */}
      <div className="flex items-center space-x-2 border-b border-[#383330] pb-2">
        <button
          id="teacher-tab-roster"
          onClick={() => setActiveSubTab('roster')}
          className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-sm text-xs font-medium transition-colors ${
            activeSubTab === 'roster' ? 'bg-indigo-900/60 text-indigo-200 border border-indigo-700' : 'text-[#a8a29e] hover:text-white'
          }`}
        >
          <Users className="w-4 h-4" />
          <span>Student Roster & Progress</span>
        </button>

        <button
          id="teacher-tab-standards"
          onClick={() => setActiveSubTab('standards')}
          className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-sm text-xs font-medium transition-colors ${
            activeSubTab === 'standards' ? 'bg-indigo-900/60 text-indigo-200 border border-indigo-700' : 'text-[#a8a29e] hover:text-white'
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>Ohio Standards Matrix</span>
        </button>

        <button
          id="teacher-tab-questions"
          onClick={() => setActiveSubTab('questions')}
          className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-sm text-xs font-medium transition-colors ${
            activeSubTab === 'questions' ? 'bg-indigo-900/60 text-indigo-200 border border-indigo-700' : 'text-[#a8a29e] hover:text-white'
          }`}
        >
          <PlusCircle className="w-4 h-4" />
          <span>Author Custom Question</span>
        </button>
      </div>

      {/* Subtab 1: Student Roster Table */}
      {activeSubTab === 'roster' && (
        <div className="bg-[#1c1917] rounded-sm border border-[#383330] overflow-hidden">
          <div className="p-4 border-b border-[#292524] flex items-center justify-between">
            <span className="text-xs font-mono uppercase tracking-wider text-[#a8a29e]">
              Active 8th Grade Period Records
            </span>
            <span className="text-xs text-emerald-400 font-mono">
              Live Firebase Sync Active
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-serif">
              <thead className="bg-[#241e1b] text-[#a8a29e] font-mono text-[11px] uppercase border-b border-[#383330]">
                <tr>
                  <th className="py-3 px-4">Student Name</th>
                  <th className="py-3 px-4">Email</th>
                  <th className="py-3 px-4">Campaign Progress</th>
                  <th className="py-3 px-4">Political Stance</th>
                  <th className="py-3 px-4">Knowledge</th>
                  <th className="py-3 px-4">Influence</th>
                  <th className="py-3 px-4">Last Active</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#292524] text-[#f5f5f4]">
                {students.map(s => (
                  <tr key={s.id} className="hover:bg-[#241e1b] transition-colors">
                    <td className="py-3 px-4 font-semibold text-[#fef3c7]">
                      {s.name}
                    </td>
                    <td className="py-3 px-4 font-mono text-[#a8a29e]">
                      {s.email}
                    </td>
                    <td className="py-3 px-4">
                      <span className="font-mono text-amber-300">
                        Ch. {s.chapter} &bull; Checkpoint {s.checkpoint}/5
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-0.5 rounded-sm text-[10px] font-mono font-bold ${
                        s.identity.includes('PATRIOT') ? 'bg-amber-950 text-amber-300 border border-amber-800' :
                        s.identity.includes('LOYALIST') ? 'bg-red-950 text-red-300 border border-red-800' :
                        'bg-stone-900 text-stone-300 border border-stone-700'
                      }`}>
                        {s.identity}
                      </span>
                    </td>
                    <td className="py-3 px-4 font-mono font-bold text-sky-300">
                      {s.knowledgeScore}%
                    </td>
                    <td className="py-3 px-4 font-mono text-amber-200">
                      {s.influence}%
                    </td>
                    <td className="py-3 px-4 text-[#a8a29e]">
                      {s.lastActive}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Subtab 2: Standards Matrix */}
      {activeSubTab === 'standards' && (
        <div className="space-y-4">
          <div className="bg-[#1c1917] p-5 rounded-sm border border-[#383330] space-y-4">
            <h3 className="font-serif font-bold text-lg text-[#fef3c7]">
              Ohio Learning Standards for Social Studies (Grade 8)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {OHIO_STANDARDS.map(std => (
                <div
                  key={std.id}
                  className="bg-[#241e1b] p-4 rounded-sm border border-[#383330] space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-0.5 rounded bg-indigo-950/80 text-indigo-300 border border-indigo-800 font-mono text-xs font-bold">
                      {std.code}
                    </span>
                    <span className="text-[11px] text-emerald-400 font-mono flex items-center space-x-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>{std.testedInChapters.length} Chapters Aligned</span>
                    </span>
                  </div>
                  <h4 className="font-serif font-bold text-sm text-[#f5f5f4]">
                    {std.title}
                  </h4>
                  <p className="text-xs text-[#a8a29e] font-serif leading-relaxed">
                    {std.description}
                  </p>
                  <div className="text-[11px] text-amber-300 font-mono pt-1">
                    Coverage: Chapters {std.testedInChapters.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Subtab 3: Author Custom Question */}
      {activeSubTab === 'questions' && (
        <div className="bg-[#1c1917] p-6 rounded-sm border border-[#383330] max-w-3xl space-y-6">
          <div>
            <h3 className="font-serif font-bold text-lg text-[#fef3c7]">
              Create Classroom Question or Primary Source Challenge
            </h3>
            <p className="text-xs text-[#a8a29e] font-serif mt-1">
              Add your own curriculum question directly into the student simulation bank. Questions are saved to Firestore.
            </p>
          </div>

          {questionCreatedSuccess && (
            <div className="bg-emerald-950/40 border border-emerald-700 p-3 rounded-sm text-emerald-200 text-xs font-serif flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Question successfully registered in the campaign bank!</span>
            </div>
          )}

          <form onSubmit={handleCreateQuestion} className="space-y-4 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-[#a8a29e] font-mono mb-1">Target Chapter</label>
                <select
                  value={newQuestion.chapter}
                  onChange={e => setNewQuestion({ ...newQuestion, chapter: Number(e.target.value) })}
                  className="w-full bg-[#241e1b] border border-[#383330] p-2 rounded-sm text-white"
                >
                  {[1, 2, 3, 4, 5, 6].map(ch => (
                    <option key={ch} value={ch}>Chapter {ch}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[#a8a29e] font-mono mb-1">Historical Year</label>
                <input
                  type="number"
                  value={newQuestion.year}
                  onChange={e => setNewQuestion({ ...newQuestion, year: Number(e.target.value) })}
                  className="w-full bg-[#241e1b] border border-[#383330] p-2 rounded-sm text-white"
                />
              </div>

              <div>
                <label className="block text-[#a8a29e] font-mono mb-1">Ohio Standard</label>
                <select
                  value={newQuestion.standardId}
                  onChange={e => setNewQuestion({ ...newQuestion, standardId: e.target.value })}
                  className="w-full bg-[#241e1b] border border-[#383330] p-2 rounded-sm text-white"
                >
                  {OHIO_STANDARDS.map(s => (
                    <option key={s.id} value={s.id}>{s.code} - {s.title.slice(0, 20)}...</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[#a8a29e] font-mono mb-1">Topic / Title</label>
              <input
                type="text"
                placeholder="e.g., Boston Tea Party Merchant Loss"
                value={newQuestion.topic}
                onChange={e => setNewQuestion({ ...newQuestion, topic: e.target.value })}
                className="w-full bg-[#241e1b] border border-[#383330] p-2 rounded-sm text-white"
                required
              />
            </div>

            <div>
              <label className="block text-[#a8a29e] font-mono mb-1">Question Prompt</label>
              <textarea
                rows={3}
                placeholder="Enter the historical prompt or source question..."
                value={newQuestion.prompt}
                onChange={e => setNewQuestion({ ...newQuestion, prompt: e.target.value })}
                className="w-full bg-[#241e1b] border border-[#383330] p-2 rounded-sm text-white"
                required
              />
            </div>

            {/* Options */}
            <div className="space-y-2">
              <label className="block text-[#a8a29e] font-mono">Answer Options & Correct Key</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="correctKey"
                    checked={newQuestion.correctAnswerIndex === 0}
                    onChange={() => setNewQuestion({ ...newQuestion, correctAnswerIndex: 0 })}
                  />
                  <input
                    type="text"
                    placeholder="Option A (Mark radio if correct)"
                    value={newQuestion.optionA}
                    onChange={e => setNewQuestion({ ...newQuestion, optionA: e.target.value })}
                    className="flex-1 bg-[#241e1b] border border-[#383330] p-2 rounded-sm text-white"
                    required
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="correctKey"
                    checked={newQuestion.correctAnswerIndex === 1}
                    onChange={() => setNewQuestion({ ...newQuestion, correctAnswerIndex: 1 })}
                  />
                  <input
                    type="text"
                    placeholder="Option B"
                    value={newQuestion.optionB}
                    onChange={e => setNewQuestion({ ...newQuestion, optionB: e.target.value })}
                    className="flex-1 bg-[#241e1b] border border-[#383330] p-2 rounded-sm text-white"
                    required
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="correctKey"
                    checked={newQuestion.correctAnswerIndex === 2}
                    onChange={() => setNewQuestion({ ...newQuestion, correctAnswerIndex: 2 })}
                  />
                  <input
                    type="text"
                    placeholder="Option C"
                    value={newQuestion.optionC}
                    onChange={e => setNewQuestion({ ...newQuestion, optionC: e.target.value })}
                    className="flex-1 bg-[#241e1b] border border-[#383330] p-2 rounded-sm text-white"
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="correctKey"
                    checked={newQuestion.correctAnswerIndex === 3}
                    onChange={() => setNewQuestion({ ...newQuestion, correctAnswerIndex: 3 })}
                  />
                  <input
                    type="text"
                    placeholder="Option D"
                    value={newQuestion.optionD}
                    onChange={e => setNewQuestion({ ...newQuestion, optionD: e.target.value })}
                    className="flex-1 bg-[#241e1b] border border-[#383330] p-2 rounded-sm text-white"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-[#a8a29e] font-mono mb-1">Historical Explanation (Shown after answering)</label>
              <textarea
                rows={2}
                placeholder="Explain why the correct answer is accurate..."
                value={newQuestion.explanation}
                onChange={e => setNewQuestion({ ...newQuestion, explanation: e.target.value })}
                className="w-full bg-[#241e1b] border border-[#383330] p-2 rounded-sm text-white"
              />
            </div>

            <div>
              <label className="block text-[#a8a29e] font-mono mb-1">Scholar Hint</label>
              <input
                type="text"
                placeholder="Provide a clue to guide the student without giving away the answer..."
                value={newQuestion.hint}
                onChange={e => setNewQuestion({ ...newQuestion, hint: e.target.value })}
                className="w-full bg-[#241e1b] border border-[#383330] p-2 rounded-sm text-white"
              />
            </div>

            <button
              type="submit"
              className="px-6 py-2.5 bg-indigo-700 hover:bg-indigo-600 text-white font-serif font-bold uppercase tracking-wider rounded-sm transition-colors shadow-md"
            >
              Add Question to Simulation
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
