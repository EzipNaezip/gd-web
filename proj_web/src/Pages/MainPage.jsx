import React from "react";
import MainPrompt from "../Components/Main/MainPrompt";
import ScrollToDiscover from "../Components/Main/ScrollToDiscover";
import { useRecoilValue } from "recoil";
import { PromptCreateState } from "../Atoms/PromptCreateState";
import { useQuery } from "react-query";
import { getExample } from "../Query/MainExampleQuery";
import MainImageGrid from "../Components/Main/MainImageGrid";

function MainPage() {
  const isCreated = useRecoilValue(PromptCreateState);
  const getImages = useQuery("getExample", getExample, {
    refetchOnWindowFocus: false,
    retry: 0,
    onSuccess: (data) => {
      console.log("example : ", data);
    },
  });

  return (
    <>
      <MainPrompt />
      {!isCreated ? (
        <>
          <ScrollToDiscover />
          {getImages.data ? <MainImageGrid thumbnails={getImages.data.data.data.example} /> : <></>}
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default MainPage;
