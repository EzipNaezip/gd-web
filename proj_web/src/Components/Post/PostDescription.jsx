import React from 'react';
import PostUserComment from './PostUserComment';
import PostComment from './PostComment';

export default function PostDescription({ writer, description, comments }) {
  return (
    <div className="flex-col w-1/3 h-full rounded-lg shadow-md font-suiteMedium">
      <div className="flex items-center text-xl mb-4 p-4 border-b">
        <img className="w-8 h-8 rounded-full shadow-lg mr-3" src={writer.src} alt="" />
        <h1 className="font-suiteBold">{writer.id}</h1>
      </div>
      <div className="p-4">
        <p>{description}</p>
      </div>
      <div>
        {comments.map((data) => {
          return <PostComment comment={data} />;
        })}
      </div>
      <PostUserComment className="p-4" />
    </div>
  );
}
