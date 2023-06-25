import React from 'react';
import { useRecoilState } from 'recoil';
import { PostMainState } from './PostMainState';
import PostSubItem from './PostSubItem';

export default function PostGallery({ images }) {
  const [mainImage, setMainImage] = useRecoilState(PostMainState);

  return (
    <div className="grid gap-4">
      <img className="h-auto w-full max-w-full rounded-lg" src={mainImage} alt="" />
      <div className="grid grid-cols-4 gap-4">
        {images.map((obj) => {
          return <PostSubItem src={obj.src} mainImageHandler={(e) => setMainImage(e.target.src)} />;
        })}
      </div>
    </div>
  );
}
