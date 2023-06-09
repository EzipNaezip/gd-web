import React from 'react';
import MainPrompt from '../Components/Main/MainPrompt';
// import ScrollToDiscover from '../Components/Main/ScrollToDiscover';
// import { useRecoilValue } from 'recoil';
// import { PromptCreateState } from '../Atoms/PromptCreateState';
// import { useQuery } from 'react-query';
// import { getExample } from '../Query/MainExampleQuery';

function MainPage() {
  // const isCreated = useRecoilValue(PromptCreateState);
  // const getImages = useQuery('getExample', getExample, {
  //   refetchOnWindowFocus: false,
  //   retry: 0,
  //   onSuccess: (data) => {
  //     console.log('example : ', data);
  //   },
  // });

  return <MainPrompt />;
}

export default MainPage;
