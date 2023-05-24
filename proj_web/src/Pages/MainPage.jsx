import React, { useEffect, useState } from 'react';
import MainPrompt from '../Components/Main/MainPrompt';
import MainLoading from '../Components/Main/MainLoading';
import ScrollToDiscover from '../Components/Main/ScrollToDiscover';
import MainGallery from '../Components/Gallery/MainGallery';

function MainPage() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {loading ? <MainLoading load_percent={50} /> : <MainPrompt />}
      <ScrollToDiscover />
      <MainGallery isMain={true} />
    </>
  );
}

export default MainPage;
