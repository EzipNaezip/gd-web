import React from 'react';

export default function PostComment({ comment }) {
  return (
    <div className="p-3">
      <div className="w-full p-2 text-gray-500 bg-white rounded-lg shadow dark:bg-gray-800 dark:text-gray-400">
        <div className="flex items-center">
          <img className="w-8 h-8 rounded-full shadow-lg" src={comment.src} alt="profileImage" />
          <div className="ml-3 text-sm font-normal">
            <span className="mb-1 text-sm font-semibold text-gray-900 dark:text-white">{comment.id}</span>
            <div className="text-sm font-normal">{comment.value}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
