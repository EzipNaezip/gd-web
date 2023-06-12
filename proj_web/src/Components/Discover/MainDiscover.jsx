import React, { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { tagListing, topListing } from '../../Query/FilterQuery';
import DiscoverButtons from './DiscoverButtons';
import DiscoverImageGrid from './DiscoverImageGrid';

export default function MainDiscover({ bookmarking, liking }) {
  const [thumbnails, setThumbnails] = useState(null);
  const [cursor, setCursor] = useState(null);
  const topData = useMutation(topListing, {
    onSuccess: (data) => {
      console.log('topData: ', data);
      setThumbnails(data.data.data.postList);
    },
  });
  const filteredData = useMutation(tagListing, {
    onSuccess: (data) => {
      console.log('filteredData: ', data);
      setThumbnails(data.data.data.postList);
    },
  });

  useEffect(() => {
    topData.mutate();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <DiscoverButtons
        cursor={cursor}
        setCursor={setCursor}
        topHandler={() => {
          topData.mutate();
        }}
        filterHandler={(cursor) => {
          filteredData.mutate(cursor);
        }}
      />
      <hr className="mt-6" />
      <div className="mt-10">
        {thumbnails ? (
          <>
            <DiscoverImageGrid thumbnails={thumbnails} bookmarking={bookmarking} isMypage={false} />
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
