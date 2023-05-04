import React from 'react';
import PostUserComment from './PostUserComment';
import PostComment from './PostComment';

export default function PostDescription({ writerId, description, comments }) {
  return (
    <div className="container flex-col h-auto w-1/3 rounded-lg shadow-md font-suiteMedium">
      <div className="text-xl mb-4 p-3">{writerId}</div>
      <div className="p-3">
        <p>{description}</p>
      </div>
      {comments.map((data) => {
        return <PostComment comment={data} />;
      })}
      <PostUserComment className="p-3" />
    </div>
  );
}
