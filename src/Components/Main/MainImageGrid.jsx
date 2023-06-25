import React from 'react';
import GalleryCard from '../Gallery/GalleryCard';

export default function MainImageGrid({ thumbnails }) {
  return (
    <div className="container max-w-xl md:max-w-full">
      {thumbnails ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-2">
          {thumbnails.map((image) => (
            <div className="grid gap-2">
              <GalleryCard data={image} isMain={true} />
            </div>
          ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
