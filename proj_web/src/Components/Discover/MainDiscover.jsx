import React, { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { tagListing, topListing } from '../../Query/FilterQuery';
import DiscoverButtons from './DiscoverButtons';
import DiscoverImageGrid from './DiscoverImageGrid';

export default function MainDiscover() {
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
  });

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
      <div className="mt-6">
        {thumbnails ? (
          <>
            <DiscoverImageGrid thumbnails={thumbnails} />
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
