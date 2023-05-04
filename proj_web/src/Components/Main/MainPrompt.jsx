import React from 'react';

export default function MainPrompt() {
  return (
    <div className="min-h-70vh flex flex-col sm:container justify-center px-4 pb-32">
      <h1 className="text-2xl font-bold text-center mb-4">새로운 아이디어를 찾아보세요!</h1>
      <form>
        <div className="relative">
          <input
            className="h-10 block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="원하시는 스타일을 입력해주세요."
            required
          />
          <button
            type="submit"
            className="absolute right-0 bottom-0 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-r-lg border px-6 h-full border-gray-300"
          >
            생성
          </button>
        </div>
      </form>
    </div>
  );
}
