import React from 'react';
import PostSubItem from './PostSubItem';

export default function PostImageGrid({ srcs }) {
  return (
    <div className="grid grid-cols-4 gap-4">
      {srcs.map((src) => {
        return <PostSubItem src={src} />;
      })}
    </div>
  );
}
