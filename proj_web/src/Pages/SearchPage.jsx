import React, { useEffect } from 'react';
import { useMutation, useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { searchListing } from '../Query/FilterQuery';
import { setBookmark, unsetBookMark } from '../Query/BookMarkQuery';
// import DiscoverImageGrid from '../Components/Discover/DiscoverImageGrid';

export default function SearchPage() {
  const params = useParams();

  const search = useQuery(
    ['search', { keyword: params.keyword }],
    () => {
      searchListing(params.keyword);
    },
    {
      refetchOnWindowFocus: false,
      retry: 0,
      onSuccess: (data) => {
        console.log('search : ', data);
      },
    },
  );
  const bookmark = useMutation(setBookmark, {
    onSuccess: (data) => {
      console.log('bookmark : ', data);
    },
  });
  const unBookmark = useMutation(unsetBookMark, {
    onSuccess: (data) => {
      console.log('unBookmark : ', data);
    },
  });

  useEffect(() => {
    console.log('params : ', params.keyword);
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      {search.data ? (
        <>
          <h1>SEARCH PAGE</h1>
          <DiscoverImageGrid
            thumbnails={search.data.data.postList}
            bookmarking={{ set: bookmark.mutate, remove: unBookmark.mutate }}
            bookmarkRender={true}
          />
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
