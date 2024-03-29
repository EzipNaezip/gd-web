import React, { useState } from "react";
import MainMypage from "../Components/Mypage/MainMypage";
import { useMutation, useQuery } from "react-query";
import { deleteUserInfo, getUserInfo } from "../Query/MypageQuery";
import { useNavigate, useParams } from "react-router-dom";
import { getFollower, getFollowing, setFollow, setUnfollow } from "../Query/FollowQuery";
import { setBookmark, unsetBookMark } from "../Query/BookMarkQuery";

export default function MypagePage({ setApiCall }) {
  const [info, setInfo] = useState(null);
  const params = useParams();
  const navigate = useNavigate();

  const getInfo = useQuery(["userInfo", { userId: params.userId }], () => getUserInfo(params.userId), {
    refetchOnWindowFocus: false,
    retry: 0,
    onSuccess: (data) => {
      setInfo(data.data.data);
    },
  });
  const withdraw = useMutation(deleteUserInfo, {
    onSuccess: (data) => {
      sessionStorage.removeItem("userId");
      sessionStorage.removeItem("token");
      navigate("/");
    },
  });
  const getFollowerInfo = useQuery(["followerInfo", { userId: params.userId }], () => getFollower(params.userId), {
    refetchOnWindowFocus: false,
    retry: 0,
    onSuccess: (data) => {},
  });
  const getFollowingInfo = useQuery(["followingInfo", { userId: params.userId }], () => getFollowing(params.userId), {
    refetchOnWindowFocus: false,
    retry: 0,
    onSuccess: (data) => {},
  });
  const followUser = useMutation(setFollow, {
    onSuccess: (data) => {
      getInfo.refetch();
    },
  });
  const unfollowUser = useMutation(setUnfollow, {
    onSuccess: (data) => {
      getInfo.refetch();
    },
  });
  const bookmark = useMutation(setBookmark, {
    onSuccess: (data) => {},
  });
  const unBookmark = useMutation(unsetBookMark, {
    onSuccess: (data) => {},
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
          bookmarking={{ set: bookmark.mutate, remove: unBookmark.mutate }}
          withdraw={() => {
            withdraw.mutate(sessionStorage.getItem("userId"));
          }}
          fetch={getInfo.refetch}
          setApiCall={setApiCall}
        />
      ) : (
        <></>
      )}
    </>
  );
}
