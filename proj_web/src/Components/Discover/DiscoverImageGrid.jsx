import React from 'react';
import GalleryCard from '../Gallery/GalleryCard';

export default function DiscoverImageGrid({ thumbnails, bookmarking, bookmarkRender }) {
  return (
    <div className="container max-w-xl md:max-w-full">
      {thumbnails ? (
        <>
          {thumbnails.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-2">
              <>
                {thumbnails.map((image) => (
                  <div className="grid gap-2">
                    <GalleryCard
                      data={image}
                      isMain={false}
                      bookmarking={bookmarking}
                      bookmarkRender={bookmarkRender}
                    />
                  </div>
                ))}
              </>
            </div>
          ) : (
            <div className="mt-6 container w-full border rounded-lg p-4">
              <p className="p-10 text-xl font-suiteBold text-center">생성된 디자인이 없습니다.</p>
            </div>
          )}
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
