import React, { useEffect } from "react";
import { useMutation, useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { searchListing } from "../Query/FilterQuery";
import { setBookmark, unsetBookMark } from "../Query/BookMarkQuery";
import DiscoverImageGrid from "../Components/Discover/DiscoverImageGrid";

export default function SearchPage() {
  const params = useParams();

  const search = useQuery(["search", { keyword: params.keyword }], () => searchListing(params.keyword), {
    refetchOnWindowFocus: false,
    retry: 0,
    onSuccess: (data) => {},
  });
  const bookmark = useMutation(setBookmark, {
    onSuccess: (data) => {},
  });
  const unBookmark = useMutation(unsetBookMark, {
    onSuccess: (data) => {},
  });

  useEffect(() => {
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      {search.data ? (
        <>
          <h1 className="text-3xl font-suiteBold mb-6">검색하신 "{params.keyword}"에 대한 결과입니다.</h1>
          <hr className="mb-6" />
          {search.data.data.data.postList.length ? (
            <DiscoverImageGrid thumbnails={search.data.data.data.postList} bookmarking={{ set: bookmark.mutate, remove: unBookmark.mutate }} bookmarkRender={true} />
          ) : (
            <>
              <p className="text-base font-suiteMedium">검색 결과가 없습니다.</p>
            </>
          )}
        </>
      ) : (
        <>
          <h1 className="text-3xl font-suiteBold animate-pulse delay-50">검색 결과를 불러오는 중 입니다.</h1>
        </>
      )}
    </div>
  );
}
