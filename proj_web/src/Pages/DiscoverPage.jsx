import React from "react";
import MainDiscover from "../Components/Discover/MainDiscover";
import { useMutation } from "react-query";
import { setBookmark, unsetBookMark } from "../Query/BookMarkQuery";

function DiscoverPage() {
  const bookmark = useMutation(setBookmark, {
    onSuccess: (data) => {},
  });
  const unBookmark = useMutation(unsetBookMark, {
    onSuccess: (data) => {},
  });
  return <MainDiscover bookmarking={{ set: bookmark.mutate, remove: unBookmark.mutate }} />;
}

export default DiscoverPage;
