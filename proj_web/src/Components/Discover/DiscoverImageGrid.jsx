import React from 'react';
import GalleryCard from '../Gallery/GalleryCard';

export default function DiscoverImageGrid({ thumbnails }) {
  const baseURL = 'http://api.ezipnaezip.life:8080';

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-2">
      <div className="grid gap-2">
        {thumbnails ? (
          <>
            {thumbnails.map((image) => (
              <GalleryCard url={`${baseURL}${image.thumbnailImgUrl}`} />
            ))}
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
