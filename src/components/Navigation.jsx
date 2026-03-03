import React from 'react';
import { CheckCircle2, Circle } from 'lucide-react';

const Navigation = ({ lessons, currentIndex, onSelect, completedLessons }) => {
  return (
    <aside className="w-80 bg-white border-r border-slate-200 hidden md:flex flex-col">
      <div className="p-6 border-b border-slate-100">
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Curriculum</h3>
      </div>
      <nav className="flex-1 overflow-y-auto p-4 space-y-2">
        {lessons.map((lesson, idx) => {
          const isActive = idx === currentIndex;
          const isCompleted = completedLessons.includes(lesson.id);

          return (
            <button
              key={lesson.id}
              onClick={() => onSelect(idx)}
              className={`w-full flex items-start gap-3 p-3 rounded-lg transition-all text-left ${
                isActive
                ? 'bg-blue-50 text-blue-700 shadow-sm'
                : 'hover:bg-slate-50 text-slate-600'
              }`}
            >
              <div className="mt-0.5">
                {isCompleted ? (
                  <CheckCircle2 size={18} className="text-emerald-500" />
                ) : (
                  <Circle size={18} className={isActive ? 'text-blue-500' : 'text-slate-300'} />
                )}
              </div>
              <div>
                <div className={`text-sm font-bold ${isActive ? 'text-blue-800' : 'text-slate-700'}`}>
                  {lesson.title}
                </div>
                <div className="text-xs text-slate-500 mt-1 line-clamp-1">
                  {lesson.description}
                </div>
              </div>
            </button>
          );
        })}
      </nav>
      <div className="p-6 bg-slate-50 border-t border-slate-200">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-bold text-slate-500">PROGRESS</span>
          <span className="text-xs font-bold text-slate-900">
            {Math.round((completedLessons.length / lessons.length) * 100)}%
          </span>
        </div>
        <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
          <div
            className="bg-emerald-500 h-full transition-all duration-500"
            style={{ width: `${(completedLessons.length / lessons.length) * 100}%` }}
          ></div>
        </div>
      </div>
    </aside>
  );
};

export default Navigation;
