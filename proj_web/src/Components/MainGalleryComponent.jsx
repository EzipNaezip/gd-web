import React from 'react';
import MainGalleryImageComponent from './MainGalleryImageComponent';

export default function MainGalleryComponent() {
  return (
    <div className="sm:container sm:mx-auto mt-6 md-6 px-4">
      <div className="flex flex-col items-center mb-2">
        <h1 className="text-slate-400 text-center mb-2">스크롤 하여 탐색하기</h1>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6 text-slate-400"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </div>
      <MainGalleryImageComponent />
    </div>
  );
}
