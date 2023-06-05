import React from 'react';
import { Avatar, Modal, Button } from 'flowbite-react';

export default function ProfileSettingModal({ profileShow, onClose }) {
  return (
    <Modal
      className="h-screen animate-fade-in-down"
      dismissible
      size="md"
      popup={true}
      show={profileShow}
      onClose={onClose}
    >
      <Modal.Header>
        <h1 className="pl-4 font-suiteBold">프로필 수정</h1>
      </Modal.Header>
      <Modal.Body>
        <div className="flex flex-col items-center w-full">
          <Avatar
            className="rounded-full bg-gray-500 w-48 h-48 mb-2"
            alt="User Profile"
            img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
            rounded={true}
          />
          <form className="mt-6 w-full">
            <div className="flex flex-col items-center gap-2 w-full">
              <div className="flex justify-center items-center w-full">
                <h3 className="font-suiteLight text-sm w-1/6 mr-3">이름</h3>
                <input
                  type="text"
                  name="username"
                  placeholder="사용자 이름을 입력하세요."
                  className="h-10 block w-3/4 p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div className="flex justify-center items-center w-full">
                <h3 className="font-suiteLight text-sm w-1/6 mr-3">소개</h3>
                <input
                  type="text"
                  name="userDescription"
                  placeholder="당신을 소개하세요."
                  className="h-10 block w-3/4 p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div className="flex justify-center items-center w-full">
                <h3 className="font-suiteLight text-sm w-1/6 mr-3">API</h3>
                <div className="flex w-3/4">
                  <input
                    type="text"
                    name="userDescription"
                    placeholder="DALL.E API KEY"
                    className="h-10 block p-4 text-sm text-gray-900 border-l border-t border-b border-gray-300 rounded-l-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  <button
                    className="w-full text-sm font-suiteLight border-t border-r border-b border-gray-300 rounded-r-lg"
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                  >
                    등록
                  </button>
                </div>
              </div>
              <Button className="mt-6 bg-ezip-green hover:bg-ezip-green_hover w-full" onClick={onClose}>
                저장하기
              </Button>
            </div>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
}
