import React from 'react';
import MypageButtons from './MypageButtons';
import MainGalleryComponent from '../Gallery/MainGallery';

export default function Mypage() {
  return (
    <div className="flex flex-col gap-y-5">
      <section className="flex flex-col items-center bg-white dark:bg-gray-900 antialiased  border-b">
        <div className="min-w-fit max-w-screen-xl px-4 py-5 lg:px-6 sm:py-5 lg:py-5">
          <div className="max-w-2xl mx-auto grid justify-items-center text-center">
            <img
              src="data:,"
              onerror="this.style.display='none';"
              className="rounded-full bg-gray-500 w-24 h-24 mb-5"
              alt="user profile"
            ></img>
            <h2 className="text-2xl font-bold text-black sm:text-4xl dark:text-white">김관식</h2>
            <p className="mt-2.5 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">연무동 개발자</p>
          </div>

          <div className="min-w-fit max-w-screen-xl flex justify-center mt-5 text-center gap-x-16 gap-y-5">
            <div className="w-20">
              <h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">2</h3>
              <p className="text-lg font-normal text-gray-500 dark:text-gray-400 m-0">Post</p>
            </div>

            <div className="w-20">
              <h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">10</h3>
              <p className="text-lg font-normal text-gray-500 dark:text-gray-400">Following</p>
            </div>

            <div className="w-20">
              <h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">123</h3>
              <p className="text-lg font-normal text-gray-500 dark:text-gray-400">Follower</p>
            </div>
          </div>
        </div>
      </section>
      <MypageButtons />
      <div>
        <MainGalleryComponent />
        <MainGalleryComponent />
      </div>
    </div>
  );
}
