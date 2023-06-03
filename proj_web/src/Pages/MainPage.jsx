import React from 'react';
import MainPrompt from '../Components/Main/MainPrompt';
import ScrollToDiscover from '../Components/Main/ScrollToDiscover';
import MainGallery from '../Components/Gallery/MainGallery';
import { useRecoilValue } from 'recoil';
import { PromptCreateState } from '../Atoms/PromptCreateState';

function MainPage() {
  const isCreated = useRecoilValue(PromptCreateState);

  return (
    <>
      <MainPrompt />
      {!isCreated ? (
        <>
          <ScrollToDiscover />
          <MainGallery isMain={true} />
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default MainPage;
