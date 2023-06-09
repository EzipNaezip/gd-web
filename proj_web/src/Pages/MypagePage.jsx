import React, { useState } from 'react';
import MainMypage from '../Components/Mypage/MainMypage';
import { useMutation, useQuery } from 'react-query';
import { getUserInfo } from '../Query/MypageQuery';
import { useParams } from 'react-router-dom';
import { getFollower, getFollowing, setFollow, setUnfollow } from '../Query/FollowQuery';

export default function MypagePage({ setApiCall }) {
  const [info, setInfo] = useState(null);
  const params = useParams();

  const getInfo = useQuery(['userInfo', { userId: params.userId }], () => getUserInfo(params.userId), {
    refetchOnWindowFocus: false,
    retry: 0,
    onSuccess: (data) => {
      console.log('mypage : ', data);
      setInfo(data.data.data);
    },
  });

  const getFollowerInfo = useQuery(['followerInfo', { userId: params.userId }], () => getFollower(params.userId), {
    refetchOnWindowFocus: false,
    retry: 0,
    onSuccess: (data) => {
      console.log('follower : ', data);
    },
  });

  const getFollowingInfo = useQuery(['followingInfo', { userId: params.userId }], () => getFollowing(params.userId), {
    refetchOnWindowFocus: false,
    retry: 0,
    onSuccess: (data) => {
      console.log('following : ', data);
    },
  });

  const followUser = useMutation(setFollow, {
    onSuccess: (data) => {
      console.log('follow success : ', data);
      getInfo.refetch();
    },
  });

  const unfollowUser = useMutation(setUnfollow, {
    onSuccess: (data) => {
      console.log('unfollow success : ', data);
      getInfo.refetch();
    },
  });

  return (
    <>
      {info && getFollowerInfo.data && getFollowingInfo.data ? (
        <MainMypage
          data={info}
          follower={getFollowerInfo.data.data.data.follower}
          following={getFollowingInfo.data.data.data.following}
          followUser={followUser.mutate}
          unfollowUser={unfollowUser.mutate}
          fetch={getInfo.refetch}
          setApiCall={setApiCall}
        />
      ) : (
        <></>
      )}
    </>
  );
}
