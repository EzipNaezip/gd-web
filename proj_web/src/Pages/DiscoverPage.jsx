import React from 'react';
import DiscoverButtons from '../Components/Discover/DiscoverButtons';
import MainGalleryComponent from '../Components/Gallery/MainGallery';

function DiscoverPage() {
  return (
    <>
      <DiscoverButtons />
      <div className="mt-6">
        <MainGalleryComponent />
        <MainGalleryComponent />
      </div>
    </>
  );
}

export default DiscoverPage;
