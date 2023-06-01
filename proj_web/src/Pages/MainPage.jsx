import React from 'react';
import MainPrompt from '../Components/Main/MainPrompt';
import ScrollToDiscover from '../Components/Main/ScrollToDiscover';
import MainGallery from '../Components/Gallery/MainGallery';

function MainPage() {
  return (
    <>
      <MainPrompt />
      <ScrollToDiscover />
      <MainGallery isMain={true} />
    </>
  );
}

export default MainPage;
