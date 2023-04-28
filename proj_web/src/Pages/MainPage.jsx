import React, { useEffect, useState } from "react";
import MainPromptComponent from "../Components/MainPromptComponent";
import MainGalleryComponent from "../Components/MainGalleryComponent";
import MainLoadingComponent from "../Components/MainLoadingComponent";

function MainPage() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
  }, []);

  return (
    <>
      {loading ? <MainLoadingComponent load_percent={50} /> : <MainPromptComponent />}
      <MainGalleryComponent />
    </>
  );
}

export default MainPage;
