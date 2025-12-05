import React from 'react';

interface WelcomeScreenProps {
  onStart: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center flex-1 text-center animate-fadeIn">
      <div className="mb-6 relative">
        <div className="absolute inset-0 bg-brand-200 rounded-full blur-xl opacity-50"></div>
        <img 
          src="https://picsum.photos/200/200?random=1" 
          alt="Couple illustration" 
          className="relative w-40 h-40 object-cover rounded-full border-4 border-white shadow-lg"
        />
      </div>

      <h1 className="text-2xl font-bold text-gray-800 mb-3">
        这段感情适合我吗？
      </h1>
      
      <p className="text-gray-500 mb-8 leading-relaxed">
        爱情需要感性体验，也需要理性审视。通过15个心理学维度的问题，帮助你看清当下关系的真实状态。
      </p>

      <div className="space-y-4 w-full">
        <div className="flex items-center gap-3 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
          <span className="bg-brand-100 text-brand-600 px-2 py-0.5 rounded text-xs font-bold">15题</span>
          <span>大约需要 2 分钟</span>
        </div>
        
        <button 
          onClick={onStart}
          className="w-full bg-brand-600 hover:bg-brand-700 text-white font-semibold py-4 px-6 rounded-xl shadow-lg shadow-brand-200 transform transition active:scale-95 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
        >
          开始测试
        </button>
      </div>
    </div>
  );
};

export default WelcomeScreen;
