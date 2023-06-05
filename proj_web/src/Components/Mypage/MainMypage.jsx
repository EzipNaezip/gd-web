import React, { useEffect, useState } from 'react';
import MypageGalleryButtons from './MypageGalleryButtons';
import MainGalleryComponent from '../Gallery/MainGallery';
import FollowModal from './FollowModal';
import FollowButton from './FollowButton';
import ProfileSettingModal from './ProfileSettingModal';
import { Avatar, Button } from 'flowbite-react';
import { useRecoilValue } from 'recoil';
import { LoginState } from '../../Atoms/LoginState';

export default function MainMypage() {
  const [profileShow, setProfileShow] = useState(false);
  const [followShow, setFollowShow] = useState(false);
  const [followState, setFollowState] = useState(null);
  const [followingDirection, setFollowingDirection] = useState(-1);
  //follow list show & following or follower
  const [whoami, setWhoami] = useState(false);
  // user본인의 마이페이지인지 확인
  const isLogin = useRecoilValue(LoginState);
  const onFollowHandler = () => {
    setFollowShow(false);
  };
  const onProfileHandler = () => {
    setProfileShow(false);
  };

  useEffect(() => {
    setWhoami(false);
  }, []);

  return (
    <div className="flex flex-col gap-y-5">
      <section className="flex flex-col items-center bg-white dark:bg-gray-900 antialiased  border-b">
        <div className="min-w-fit max-w-screen-xl px-4 py-5 lg:px-6 sm:py-5 lg:py-5">
          <div className="max-w-2xl mx-auto grid justify-items-center text-center gap-2">
            <Avatar
              className="rounded-full bg-gray-500 w-36 h-36 sm:w-48 sm:h-48 mb-2"
              alt="User Profile"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded={true}
            />
            <h2 className="text-3xl font-suiteBold text-black sm:text-4xl dark:text-white">김관식</h2>
            <p className="text-base font-suiteMedium text-gray-500 sm:text-xl dark:text-gray-400">연무동 개발자</p>
          </div>
          <div className="min-w-fit max-w-screen-xl flex justify-center mt-3 text-center gap-x-16 gap-y-5">
            <div className="w-20">
              <h3 className="text-2xl font-suiteBold leading-tight text-gray-900 dark:text-white">2</h3>
              <p className="text-lg font-suiteMedium text-gray-500 dark:text-gray-400 m-0">Post</p>
            </div>
            <button
              onClick={() => {
                setFollowShow(true);
                setFollowingDirection(0);
                setFollowState('following');
              }}
            >
              <div className="w-20">
                <h3 className="text-2xl font-suiteBold leading-tight text-gray-900 dark:text-white">10</h3>
                <p className="text-lg font-suiteMedium text-gray-500 dark:text-gray-400">Following</p>
              </div>
            </button>
            <button
              onClick={() => {
                setFollowShow(true);
                setFollowingDirection(1);
                setFollowState('follower');
              }}
            >
              <div className="w-20">
                <h3 className="text-2xl font-suiteBold leading-tight text-gray-900 dark:text-white">123</h3>
                <p className="text-lg font-suiteMedium text-gray-500 dark:text-gray-400">Follower</p>
              </div>
            </button>
            <FollowModal
              state={followState}
              followDirection={followingDirection}
              followerShow={followShow}
              onClose={onFollowHandler}
            />
          </div>
          <div className="mt-3">
            {isLogin && !whoami ? (
              <>
                <Button
                  size="xs"
                  color="light"
                  className="w-full h-7 ring-1 ring-gray-300 hover:ring-1"
                  onClick={() => setProfileShow(true)}
                >
                  <span className="text-base">프로필 수정</span>
                </Button>
                <ProfileSettingModal profileShow={profileShow} onClose={onProfileHandler} />
              </>
            ) : (
              <FollowButton></FollowButton>
            )}
          </div>
        </div>
      </section>
      <MypageGalleryButtons />
      <div>
        <MainGalleryComponent />
        <MainGalleryComponent />
      </div>
    </div>
  );
}