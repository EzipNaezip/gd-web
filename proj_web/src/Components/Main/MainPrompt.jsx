import React, { useState } from 'react';

export default function MainPrompt() {
  const [generating, setGenerating] = useState(null);

  return (
    <div className="min-h-70vh flex flex-col sm:container justify-center px-4 pb-32">
      {!generating ? (
        <h1 className="text-2xl font-bold text-center mb-4">새로운 아이디어를 찾아보세요!</h1>
      ) : (
        <>
          {generating === 'pending' ? (
            <h1 className="text-2xl font-bold text-center mb-4">디자이너가 열심히 그리는 중...</h1>
          ) : (
            <h1 className="text-2xl font-bold text-center mb-4">당신의 아이디어가 완성되었습니다!</h1>
          )}
        </>
      )}

      <form>
        <div className="relative">
          {!generating ? (
            <div>
              <input
                className="h-10 block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="원하시는 스타일을 입력해주세요."
                required
              />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setGenerating('pending');
                }}
                className="absolute right-0 bottom-0 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-r-lg border px-6 h-full border-gray-300"
              >
                생성
              </button>
            </div>
          ) : (
            <div>
              <input
                className="animate-pulse delay-100 h-10 block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="원하시는 스타일을 입력해주세요."
                disabled={true}
              />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setGenerating(null);
                }}
                className="absolute right-0 bottom-0 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-r-lg border px-6 h-full border-gray-300"
              >
                중단
              </button>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
