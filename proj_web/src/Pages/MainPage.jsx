import React, { useEffect, useState } from "react";
import NavbarComponent from "../Components/NavbarComponent";
import MainPromptComponent from "../Components/MainPromptComponent";
import MainGalleryComponent from "../Components/MainGalleryComponent";
import MainLoadingComponent from "../Components/MainLoadingComponent";

function MainPage() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div>
      <NavbarComponent />
      {loading ? <MainPromptComponent /> : <MainLoadingComponent load_percent={40} />}
      <MainGalleryComponent />
    </div>
  );
}

export default MainPage;
