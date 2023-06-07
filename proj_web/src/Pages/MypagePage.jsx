import React, { useEffect, useState } from 'react';
import MainMypage from '../Components/Mypage/MainMypage';
import { useMutation } from 'react-query';
import { getUserInfo } from '../Query/MypageQuery';
import { useParams } from 'react-router-dom';

export default function MypagePage({ setApiCall }) {
  const [info, setInfo] = useState(null);
  const params = useParams();

  const getInfo = useMutation(getUserInfo, {
    onSuccess: (data) => {
      console.log('mypage : ', data);
      setInfo(data.data.data);
    },
  });

  useEffect(() => {
    console.log('parmas : ', params);
    getInfo.mutate(params.userId);
    // eslint-disable-next-line
  }, []);

  return <>{info ? <MainMypage data={info} fetch={getInfo.mutate} setApiCall={setApiCall} /> : <></>}</>;
}
