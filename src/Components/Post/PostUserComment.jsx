import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { writeComment } from '../../Query/CommentQuery';

export default function PostUserComment({ postNum, fetch, commentLen }) {
  const [comment, setComment] = useState('');
  const write = useMutation(writeComment, {
    onSuccess: () => {
      setComment('');
      fetch();
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        write.mutate({ content: comment, postNum });
      }}
    >
      <div
        className={`flex border ${commentLen ? '' : 'rounded-b-lg'} items-center px-3 py-2 bg-gray-50 dark:bg-gray-700`}
      >
        <textarea
          id="chat"
          rows="1"
          className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="댓글 달기..."
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
          }}
        ></textarea>
        <button
          type="submit"
          className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-ezip-bg dark:text-blue-500 dark:hover:bg-gray-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-ezip-green"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
            />
          </svg>
          <span className="sr-only">Send message</span>
        </button>
      </div>
    </form>
  );
}
