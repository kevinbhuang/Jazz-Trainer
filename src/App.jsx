import { useState } from 'react';
import { lessons } from './data/lessons';
import Navigation from './components/Navigation';
import LessonView from './components/LessonView';
import { GraduationCap } from 'lucide-react';

function App() {
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const [completedLessons, setCompletedLessons] = useState([]);

  const currentLesson = lessons[currentLessonIndex];

  const handleNext = () => {
    if (!completedLessons.includes(currentLesson.id)) {
      setCompletedLessons(prev => [...prev, currentLesson.id]);
    }
    if (currentLessonIndex < lessons.length - 1) {
      setCurrentLessonIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentLessonIndex > 0) {
      setCurrentLessonIndex(prev => prev - 1);
    }
  };

  const handleSelectLesson = (index) => {
    setCurrentLessonIndex(index);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Header */}
      <header className="bg-slate-900 text-white p-4 shadow-lg flex items-center justify-between">
        <div className="flex items-center gap-3">
          <GraduationCap size={32} className="text-blue-400" />
          <h1 className="text-xl font-bold tracking-tight">Jazz Guitar Mastery</h1>
        </div>
        <div className="text-sm font-medium text-slate-400">
          Lesson {currentLessonIndex + 1} of {lessons.length}
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Navigation Sidebar */}
        <Navigation
          lessons={lessons}
          currentIndex={currentLessonIndex}
          onSelect={handleSelectLesson}
          completedLessons={completedLessons}
        />

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-6 md:p-10">
          <LessonView
            lesson={currentLesson}
            onNext={handleNext}
            onPrev={handlePrev}
            isLast={currentLessonIndex === lessons.length - 1}
            isFirst={currentLessonIndex === 0}
          />
        </main>
      </div>
    </div>
  );
}

export default App;
