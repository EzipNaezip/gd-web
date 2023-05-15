import React from 'react';

export default function Mypage() {
  return (
    <section className="bg-white dark:bg-gray-900 antialiased">
      <div className="min-w-fit w-72 px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
        <div className="max-w-2xl mx-auto grid justify-items-center text-center">
          <img src="data:," onerror="this.style.display='none';" className="rounded-full bg-gray-500 w-24 h-24 mb-5"></img>
          <h2 className="text-2xl font-bold text-black sm:text-4xl dark:text-white">김관식</h2>
          <p className="mt-2.5 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">연무동 개발자</p>
        </div>

        <div className="grid grid-cols-3 mt-5 text-center sm:mt-5 gap-x-16 gap-y-5 sm:grid-cols-3 lg:grid-cols-3">
          <div>
            <h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">2</h3>
            <p className="text-lg font-normal text-gray-500 dark:text-gray-400 m-0">Post</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">10</h3>
            <p className="text-lg font-normal text-gray-500 dark:text-gray-400">Following</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">123</h3>
            <p className="text-lg font-normal text-gray-500 dark:text-gray-400">Follower</p>
          </div>
        </div>
      </div>
    </section>
  );
}
