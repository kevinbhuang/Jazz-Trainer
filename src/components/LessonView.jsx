import { useState } from 'react';
import ChordDiagram from './ChordDiagram';
import { Lightbulb, ArrowLeft, ArrowRight, BookOpen, Brain } from 'lucide-react';

const LessonView = ({ lesson, onNext, onPrev, isFirst, isLast }) => {
  const [showFingerings, setShowFingerings] = useState(true);
  const [interactiveDots, setInteractiveDots] = useState([]);

  const handleFretClick = (string, fret) => {
    setInteractiveDots(prev => {
      const exists = prev.find(d => d.string === string && d.fret === fret);
      if (exists) {
        return prev.filter(d => !(d.string === string && d.fret === fret));
      }
      return [...prev, { string, fret }];
    });
  };

  const resetInteractive = () => setInteractiveDots([]);

  return (
    <div className="max-w-4xl mx-auto pb-20">
      <div className="mb-8">
        <h2 className="text-3xl font-extrabold text-slate-900 mb-4">{lesson.title}</h2>
        <p className="text-xl text-slate-600 leading-relaxed">
          {lesson.description}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Theory Section */}
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg shadow-sm h-fit">
          <div className="flex items-center gap-2 mb-4 text-blue-800">
            <Lightbulb className="w-6 h-6" />
            <h4 className="text-lg font-bold uppercase tracking-wider">Theory Corner</h4>
          </div>
          <ul className="space-y-4">
            {lesson.theory.map((tip, idx) => (
              <li key={idx} className="flex gap-3 text-slate-700">
                <span className="text-blue-500 font-bold">•</span>
                <span className="text-sm md:text-base leading-relaxed">{tip}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Practice Mode Toggle */}
        <div className="bg-slate-800 p-6 rounded-lg text-white shadow-md">
          <div className="flex items-center gap-2 mb-4 text-emerald-400">
            <Brain className="w-6 h-6" />
            <h4 className="text-lg font-bold uppercase tracking-wider">Practice Tools</h4>
          </div>
          <div className="space-y-6">
            <label className="flex items-center cursor-pointer group">
              <div className="relative">
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={!showFingerings}
                  onChange={() => setShowFingerings(!showFingerings)}
                />
                <div className={`block w-14 h-8 rounded-full transition-colors ${!showFingerings ? 'bg-emerald-500' : 'bg-slate-600'}`}></div>
                <div className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform ${!showFingerings ? 'translate-x-6' : ''}`}></div>
              </div>
              <div className="ml-3 font-medium text-slate-300 group-hover:text-white transition-colors">
                Hide Fingerings (Test Memory)
              </div>
            </label>
            <div className="p-4 bg-slate-700/50 rounded-md border border-slate-600">
              <p className="text-xs text-slate-400 mb-2 uppercase font-bold tracking-widest">Build-a-Chord Lab</p>
              <p className="text-sm text-slate-300 mb-4">Click anywhere on the diagrams to map your own voicings.</p>
              <button
                onClick={resetInteractive}
                className="text-xs bg-slate-600 hover:bg-slate-500 py-1 px-3 rounded transition-colors"
              >
                Clear Custom Marks
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <div className="flex items-center gap-2 mb-6">
          <BookOpen className="w-5 h-5 text-slate-400" />
          <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest">Chord Diagrams</h4>
        </div>
        <div className="flex flex-wrap gap-8 justify-center lg:justify-start">
          {lesson.chords.map((chord, idx) => (
            <ChordDiagram
              key={idx}
              chord={chord}
              showFingerings={showFingerings}
              onFretClick={handleFretClick}
              customDots={interactiveDots}
            />
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center pt-8 border-t border-slate-200">
        <button
          onClick={onPrev}
          disabled={isFirst}
          className={`flex items-center gap-2 py-3 px-6 rounded-lg font-bold transition-all ${
            isFirst
            ? 'text-slate-300 cursor-not-allowed'
            : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
          }`}
        >
          <ArrowLeft className="w-5 h-5" />
          Previous Lesson
        </button>
        <button
          onClick={onNext}
          className="flex items-center gap-2 py-3 px-8 rounded-lg font-bold bg-blue-600 text-white hover:bg-blue-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0"
        >
          {isLast ? "Mastered!" : "Next Lesson"}
          {!isLast && <ArrowRight className="w-5 h-5" />}
        </button>
      </div>
    </div>
  );
};

export default LessonView;
