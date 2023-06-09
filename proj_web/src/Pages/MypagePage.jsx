import React, { useEffect, useState } from 'react';
import MainMypage from '../Components/Mypage/MainMypage';
import { useQuery } from 'react-query';
import { getUserInfo } from '../Query/MypageQuery';
import { useParams } from 'react-router-dom';
import { getFollower, getFollowing } from '../Query/FollowQuery';

export default function MypagePage({ setApiCall }) {
  const [info, setInfo] = useState(null);
  const params = useParams();

  const getInfo = useQuery(['userInfo', params.userId], getUserInfo, {
    refetchOnWindowFocus: false,
    retry: 0,
    onSuccess: (data) => {
      console.log('mypage : ', data);
      setInfo(data.data.data);
    },
  });

  const getFollowerInfo = useQuery('followerInfo', getFollower, {
    refetchOnWindowFocus: false,
    retry: 0,
    onSuccess: (data) => {
      console.log('follower : ', data);
    },
  });

  const getFollowingInfo = useQuery('followingInfo', getFollowing, {
    refetchOnWindowFocus: false,
    retry: 0,
    onSuccess: (data) => {
      console.log('following : ', data);
    },
  });

  useEffect(() => {
    console.log('params : ', params);
    // getInfo.refetch();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {info ? (
        <MainMypage
          data={info}
          follow={getFollowerInfo.data}
          following={getFollowingInfo.data}
          fetch={getInfo.refetch}
          setApiCall={setApiCall}
        />
      ) : (
        <></>
      )}
    </>
  );
}
