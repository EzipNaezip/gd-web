import React, { useState } from 'react';
import PostUserComment from './PostUserComment';
import PostComment from './PostComment';
import PostCarousel from './PostCarousel';

export default function MainPost({ images, writer, description, comments }) {
  const [like, setLike] = useState(false);
  const [bookMark, setBookMark] = useState(false);

  return (
    <div className="flex-col rounded-lg h-full font-suiteMedium">
      <PostCarousel images={images} />
      <div>
        <div className="flex items-center border-l border-r text-xl p-4 border-b">
          <img className="w-8 h-8 rounded-full shadow-lg mr-3" src={writer.src} alt="" />
          <h1 className="font-suiteBold">{writer.id}</h1>
        </div>
        <div className="overflow-y-scroll border-l border-r border-b text-sm">
          <p className="p-4">{description}</p>
          <div className="text-gray-600 font-suiteMedium text-sm p-3"># 태그 1</div>
          <div className="font-suiteBold text-sm p-3">좋아요 60개</div>
          <div className="grid grid-cols-2 p-3">
            <div>
              <button
                onClick={() => {
                  setLike(!like);
                }}
                className="mr-2"
              >
                {!like ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                  </svg>
                )}
              </button>
              <button
                onClick={() => {
                  setBookMark(!bookMark);
                }}
              >
                {!bookMark ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                    />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path
                      fillRule="evenodd"
                      d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            </div>
            <div className="font-suiteMedium text-right mr-3">2023-05-17</div>
          </div>
        </div>
        <div className="border-r border-l">
          {comments.length ? (
            <h1 className="p-4 font-suiteBold">댓글 {comments.length}개</h1>
          ) : (
            <h1 className="p-4 font-suiteBold">작성된 댓글이 없습니다</h1>
          )}
        </div>
        <div className="flex-col border-r border-l max-h-60 overflow-y-scroll">
          {comments.map((data) => {
            return <PostComment comment={data} />;
          })}
        </div>
        <PostUserComment className="p-4" />
      </div>
    </div>
  );
}
