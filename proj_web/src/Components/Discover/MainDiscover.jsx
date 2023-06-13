import React, { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { tagListing, topListing } from '../../Query/FilterQuery';
import DiscoverButtons from './DiscoverButtons';
import DiscoverImageGrid from './DiscoverImageGrid';
import useIntersectionObserver from '../../Utilities/useIntersectionObserver';

export default function MainDiscover({ bookmarking }) {
  const [thumbnails, setThumbnails] = useState(null);
  const [endPoint, setEndPoint] = useState(20);
  const [cursor, setCursor] = useState(null);

  const topData = useMutation(topListing, {
    onSuccess: (data) => {
      console.log('topData: ', data);
      setThumbnails(data.data.data.postList);
    },
  });
  const filteredData = useMutation(tagListing, {
    onSuccess: (data) => {
      setEndPoint(endPoint + 20);
      setThumbnails(data.data.data.postList);
      console.log(`${cursor} : `, data);
    },
    onError: (error) => {
      console.log('더 불러올 데이터가 없습니다.');
    },
  });
  const getDataScrolled = () => {
    filteredData.mutate(cursor, endPoint);
  };
  const setObservationTarget = useIntersectionObserver(getDataScrolled);

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
          filteredData.mutate(cursor, 20);
        }}
      />
      <hr className="mt-6" />
      <div className="container mt-10 mb-10">
        {thumbnails ? (
          <>
            <DiscoverImageGrid thumbnails={thumbnails} bookmarking={bookmarking} bookmarkRender={true} />
          </>
        ) : (
          <></>
        )}
        {cursor !== 'TOP 30' && !filteredData.isLoading ? <div ref={setObservationTarget}></div> : <></>}
      </div>
    </>
  );
}
