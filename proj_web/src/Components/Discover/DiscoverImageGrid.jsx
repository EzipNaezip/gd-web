import React, { useEffect, useState } from 'react';
import GalleryCard from '../Gallery/GalleryCard';
import { useQuery } from 'react-query';
import { TopListing } from '../../Query/FilterQuery';

export default function DiscoverImageGrid() {
  const [thumbnails, setThumbnails] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const topData = useQuery('top30', TopListing, {
    onSuccess: (data) => {
      setThumbnails(data.data.data.postList);
      setLoaded(true);
    },
  });
  const baseURL = 'http://api.ezipnaezip.life:8080';

  useEffect(() => {
    setThumbnails(topData);
  }, [topData]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-2">
      <div className="grid gap-2">
        {/*{images.map((image) => (*/}
        {/*  <GalleryCard url={image} isMain={false} />*/}
        {/*))}*/}
        {loaded && thumbnails ? (
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
