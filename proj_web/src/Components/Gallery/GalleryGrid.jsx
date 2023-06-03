import React from 'react';
import GalleryCard from './GalleryCard';

export default function GalleryGrid({ images }) {
  // const amount = images.length / 3;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-2">
      <div className="grid gap-2">
        {images.map((image) => (
          <GalleryCard url={image} isMain={false} />
        ))}
      </div>
    </div>
  );
}
