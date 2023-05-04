import React from 'react';
import PostMainItem from './PostMainItem';
import PostImageGrid from './PostImageGrid';
import PostDescription from './PostDescription';

export default function PostGallery({ images, mainImage }) {
  return (
    <div className="grid gap-4 w-2/3">
      <PostMainItem src={mainImage} />
      <PostImageGrid srcs={images} />
    </div>
  );
}
