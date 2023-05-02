import React, { useEffect, useState } from "react";
import MainPromptComponent from "../Components/MainPromptComponent";
import MainLoadingComponent from "../Components/MainLoadingComponent";
import ScrollToDiscover from "../Components/ScrollToDiscover";
import GalleryComponent from "../Components/GalleryComponent";

function MainPage() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {loading ? <MainLoadingComponent load_percent={50} /> : <MainPromptComponent />}
      <ScrollToDiscover />
      <GalleryComponent />
    </>
  );
}

export default MainPage;
