import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { searchListing } from '../Query/FilterQuery';
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

  useEffect(() => {
    console.log('params : ', params.keyword);
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <h1>SEARCH PAGE</h1>
      <p>{search.data}</p>
      {/*<DiscoverImageGrid thumbnails={} bookmarking={} bookmarkRender={}/>*/}
    </div>
  );
}
