import React, { useState, useMemo } from 'react';
import { AppState, Option } from './types';
import { QUESTIONS, RESULTS } from './constants';
import WelcomeScreen from './components/WelcomeScreen';
import QuizScreen from './components/QuizScreen';
import ResultScreen from './components/ResultScreen';

// Simple Icons as components
const HeartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-500">
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
  </svg>
);

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>(AppState.WELCOME);
  const [answers, setAnswers] = useState<number[]>([]);

  const startQuiz = () => {
    setAppState(AppState.QUIZ);
    setAnswers([]);
  };

  const handleAnswer = (score: number) => {
    const newAnswers = [...answers, score];
    setAnswers(newAnswers);

    if (newAnswers.length === QUESTIONS.length) {
      setAppState(AppState.RESULT);
    }
  };

  const resetQuiz = () => {
    setAppState(AppState.WELCOME);
    setAnswers([]);
  };

  const finalResult = useMemo(() => {
    if (answers.length === 0) return null;
    const totalScore = answers.reduce((a, b) => a + b, 0);
    return RESULTS.find(r => totalScore >= r.minScore && totalScore <= r.maxScore) || RESULTS[1];
  }, [answers]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-50 to-purple-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden min-h-[600px] flex flex-col relative">
        
        {/* Header Decoration */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-300 to-purple-300"></div>

        {/* Content Area */}
        <div className="flex-1 flex flex-col p-6 md:p-8">
          
          {/* Top Branding */}
          <div className="flex items-center justify-center gap-2 mb-6 opacity-80">
            <HeartIcon />
            <span className="text-sm font-medium text-gray-500 tracking-wider">LOVE LAB</span>
          </div>

          {appState === AppState.WELCOME && (
            <WelcomeScreen onStart={startQuiz} />
          )}

          {appState === AppState.QUIZ && (
            <QuizScreen 
              currentQuestionIndex={answers.length} 
              onAnswer={handleAnswer} 
            />
          )}

          {appState === AppState.RESULT && finalResult && (
            <ResultScreen 
              result={finalResult} 
              score={answers.reduce((a, b) => a + b, 0)} 
              onRetry={resetQuiz} 
            />
          )}

        </div>
      </div>
    </div>
  );
};

export default App;
