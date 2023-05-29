import React from 'react';

const ScrollToDiscover = () => {
  return (
    <div className="flex flex-col items-center my-2 animate-bounce">
      <h1 className="text-center">스크롤 하여 탐색하기</h1>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      </svg>
    </div>
  );
};

export default ScrollToDiscover;
