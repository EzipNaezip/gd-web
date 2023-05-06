import React from 'react';
import PostUserComment from './PostUserComment';
import PostComment from './PostComment';

export default function PostDescription({ writer, description, comments }) {
  return (
    <div className="flex-col h-full rounded-lg shadow-md font-suiteMedium">
      <div className="flex items-center text-xl mb-4 p-4 border-b">
        <img className="w-8 h-8 rounded-full shadow-lg mr-3" src={writer.src} alt="" />
        <h1 className="font-suiteBold">{writer.id}</h1>
      </div>
      <div className="overflow-y-scroll border-b p-4 text-sm">
        <p>{description}</p>
      </div>
      <div>
        {comments.length ? (
          <h1 className="p-4 font-suiteBold">댓글 {comments.length}개</h1>
        ) : (
          <h1 className="p-4 font-suiteBold">작성된 댓글이 없습니다</h1>
        )}
      </div>
      <div className="flex-col max-h-60 overflow-scroll">
        {comments.map((data) => {
          return <PostComment comment={data} />;
        })}
      </div>
      <PostUserComment className="p-4" />
    </div>
  );
}
