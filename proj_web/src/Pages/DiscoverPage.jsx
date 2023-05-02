import React from "react";
import MainGalleryComponent from "../Components/GalleryComponent";
import FilterButton from "../Components/Discover/FilterButton";

function DiscoverPage() {
  return (
    <>
      <div className="flex gap-4">
        <FilterButton name="TOP 30" />
        <FilterButton name="인기급상승" />
        <FilterButton name="모던" />
        <FilterButton name="클래식" />
        <FilterButton name="내추럴" />
      </div>

      <div className="mt-6">
        <MainGalleryComponent />
        <MainGalleryComponent />
      </div>
    </>
  );
}

export default DiscoverPage;
