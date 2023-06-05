import React from 'react';
import DiscoverButtons from '../Components/Discover/DiscoverButtons';
// import MainGalleryComponent from '../Components/Gallery/MainGallery';
import DiscoverImageGrid from '../Components/Discover/DiscoverImageGrid';

function DiscoverPage() {
  return (
    <>
      <DiscoverButtons />
      <div className="mt-6">
        <DiscoverImageGrid />
        {/*<MainGalleryComponent isMain={false} />*/}
        {/*<MainGalleryComponent isMain={false} />*/}
      </div>
    </>
  );
}

export default DiscoverPage;
