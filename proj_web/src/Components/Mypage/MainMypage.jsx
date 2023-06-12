import React, { useState } from 'react';
import MypageGalleryButtons from './MypageGalleryButtons';
import FollowModal from './FollowModal';
import FollowButton from './FollowButton';
import ProfileSettingModal from './ProfileSettingModal';
import { Button } from 'flowbite-react';
import { useRecoilValue } from 'recoil';
import { LoginState } from '../../Atoms/LoginState';
import DiscoverImageGrid from '../Discover/DiscoverImageGrid';

export default function MainMypage({
  data,
  fetch,
  follower,
  following,
  followUser,
  unfollowUser,
  bookmarking,
  setApiCall,
}) {
  const [cursor, setCursor] = useState(0);
  const [profileShow, setProfileShow] = useState(false);
  const [followShow, setFollowShow] = useState(false);
  const [followState, setFollowState] = useState(null);
  const baseURL = 'http://api.ezipnaezip.life:8080';
  const isLogin = useRecoilValue(LoginState);

  const checkImgURL = () => {
    const regExpHttp = /http:/g;
    const regExpHttps = /https:/g;

    if (regExpHttp.test(data.user.profileImgUrl) || regExpHttps.test(data.user.profileImgUrl))
      return data.user.profileImgUrl;
    else return `${baseURL}${data.user.profileImgUrl}`;
  };

  const onFollowHandler = () => {
    setFollowShow(false);
  };
  const onProfileHandler = () => {
    setProfileShow(false);
  };

  return (
    <div className="flex flex-col gap-y-5">
      <section className="flex flex-col items-center bg-white dark:bg-gray-900 antialiased  border-b">
        <div className="min-w-fit max-w-screen-xl px-4 py-5 lg:px-6 sm:py-5 lg:py-5">
          <div className="max-w-2xl mx-auto grid justify-items-center text-center gap-2">
            <img className="border rounded-full w-48 h-48 mb-2" src={checkImgURL()} alt="profile" />
            <h2 className="text-3xl font-suiteBold text-black sm:text-4xl dark:text-white">{data.user.name}</h2>
            <p className="text-base font-suiteMedium text-gray-500 sm:text-xl dark:text-gray-400">
              {data.user.description}
            </p>
          </div>
          <div className="min-w-fit max-w-screen-xl flex justify-center mt-3 text-center gap-x-16 gap-y-5">
            <div className="w-20">
              <h3 className="text-2xl font-suiteBold leading-tight text-gray-900 dark:text-white">
                {data.myPosts.length}
              </h3>
              <p className="text-lg font-suiteMedium text-gray-500 dark:text-gray-400 m-0">Post</p>
            </div>
            <button
              onClick={() => {
                setFollowShow(true);
                setFollowState('following');
              }}
            >
              <div className="w-20">
                <h3 className="text-2xl font-suiteBold leading-tight text-gray-900 dark:text-white">
                  {data.user.followCount}
                </h3>
                <p className="text-lg font-suiteMedium text-gray-500 dark:text-gray-400">Following</p>
              </div>
            </button>
            <button
              onClick={() => {
                setFollowShow(true);
                setFollowState('follower');
              }}
            >
              <div className="w-20">
                <h3 className="text-2xl font-suiteBold leading-tight text-gray-900 dark:text-white">
                  {data.user.followerCount}
                </h3>
                <p className="text-lg font-suiteMedium text-gray-500 dark:text-gray-400">Follower</p>
              </div>
            </button>
            <FollowModal
              followState={followState}
              followerShow={followShow}
              followerList={follower}
              followingList={following}
              followUser={followUser}
              unfollowUser={unfollowUser}
              onClose={onFollowHandler}
            />
          </div>
          <div className="mt-3">
            {isLogin && data.user.isMe ? (
              <>
                <Button
                  size="xs"
                  color="light"
                  className="w-full h-7 ring-1 ring-gray-300 hover:ring-1"
                  onClick={() => setProfileShow(true)}
                >
                  <span className="text-base">프로필 수정</span>
                </Button>
                <ProfileSettingModal
                  user={data.user}
                  profileShow={profileShow}
                  fetch={fetch}
                  setApiCall={setApiCall}
                  onClose={onProfileHandler}
                />
              </>
            ) : (
              <FollowButton
                state={data.user.isFollow}
                user={data.user.userId}
                followUser={followUser}
                unfollowUser={unfollowUser}
              />
            )}
          </div>
        </div>
      </section>
      <MypageGalleryButtons setCursor={setCursor} cursor={cursor} />
      <div className="container">
        {cursor === 0 ? (
          <DiscoverImageGrid thumbnails={data.myPosts} bookmarking={bookmarking} isMypage={true} />
        ) : (
          <DiscoverImageGrid thumbnails={data.bookmarkedPosts} bookmarking={bookmarking} isMypage={true} />
        )}
      </div>
    </div>
  );
}
