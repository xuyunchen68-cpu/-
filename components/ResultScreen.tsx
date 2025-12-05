import React from 'react';
import { TestResult } from '../types';

interface ResultScreenProps {
  result: TestResult;
  score: number;
  onRetry: () => void;
}

const ResultScreen: React.FC<ResultScreenProps> = ({ result, score, onRetry }) => {
  return (
    <div className="flex flex-col flex-1 animate-fadeIn overflow-y-auto">
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-50 mb-4 shadow-inner">
          <span className={`text-3xl font-bold ${result.colorClass}`}>
            {score}
          </span>
          <span className="text-gray-400 text-xs self-end mb-4 ml-1">/ 60</span>
        </div>
        
        <h2 className={`text-2xl font-bold mb-2 ${result.colorClass}`}>
          {result.title}
        </h2>
        
        <p className="text-gray-600 text-sm leading-relaxed px-4">
          {result.description}
        </p>
      </div>

      <div className="bg-gray-50 rounded-xl p-5 mb-6">
        <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wide mb-3">
          给你的建议
        </h3>
        <ul className="space-y-3">
          {result.advice.map((item, idx) => (
            <li key={idx} className="flex items-start text-sm text-gray-600">
              <span className="mr-2 mt-1 text-brand-500">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto">
        <button 
          onClick={onRetry}
          className="w-full bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 font-semibold py-3 px-6 rounded-xl transition shadow-sm"
        >
          重新测试
        </button>
      </div>
    </div>
  );
};

export default ResultScreen;
