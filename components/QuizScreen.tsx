import React from 'react';
import { QUESTIONS, OPTIONS } from '../constants';

interface QuizScreenProps {
  currentQuestionIndex: number;
  onAnswer: (score: number) => void;
}

const QuizScreen: React.FC<QuizScreenProps> = ({ currentQuestionIndex, onAnswer }) => {
  const question = QUESTIONS[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / QUESTIONS.length) * 100;

  return (
    <div className="flex flex-col flex-1 animate-fadeIn">
      {/* Progress Bar */}
      <div className="w-full bg-gray-100 rounded-full h-2 mb-6">
        <div 
          className="bg-brand-500 h-2 rounded-full transition-all duration-500 ease-out" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <div className="flex justify-between text-xs text-gray-400 font-medium mb-8 uppercase tracking-wide">
        <span>Question {currentQuestionIndex + 1}</span>
        <span>{QUESTIONS.length} Total</span>
      </div>

      <h2 className="text-xl font-bold text-gray-800 mb-2 min-h-[60px]">
        {question.text}
      </h2>
      
      <span className="inline-block px-3 py-1 bg-purple-50 text-purple-600 text-xs font-medium rounded-full mb-8 self-start">
        {question.category}
      </span>

      <div className="space-y-3 mt-auto">
        {OPTIONS.map((option) => (
          <button
            key={option.score}
            onClick={() => onAnswer(option.score)}
            className="w-full text-left p-4 rounded-xl border border-gray-200 hover:border-brand-300 hover:bg-brand-50 transition-all duration-200 group"
          >
            <div className="flex items-center justify-between">
              <span className="text-gray-700 font-medium group-hover:text-brand-700">
                {option.label}
              </span>
              <span className="w-4 h-4 rounded-full border-2 border-gray-300 group-hover:border-brand-500"></span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuizScreen;
