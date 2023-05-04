import React from 'react';
import PostMainItem from './PostMainItem';
import PostImageGrid from './PostImageGrid';

export default function PostGallery({ images, mainImage, imageSelection }) {
  return (
    <div className="grid gap-4 w-2/3">
      <PostMainItem src={mainImage} />
      <PostImageGrid srcs={images} imageSelection={imageSelection} />
    </div>
  );
}
