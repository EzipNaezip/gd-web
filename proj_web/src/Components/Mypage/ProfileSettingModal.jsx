import React from 'react';
import { Avatar, Modal, Button } from 'flowbite-react';

export default function ProfileSettingModal({ profileShow, onClose }) {
  return (
    <Modal className="animate-fade-in-down" dismissible size="md" popup={true} show={profileShow} onClose={onClose}>
      <Modal.Header>
        <h1 className="pl-4">프로필 수정</h1>
      </Modal.Header>
      <Modal.Body>
        <div className="flex flex-col items-center w-full">
          <Avatar
            className="rounded-full bg-gray-500 w-24 h-24 mb-2"
            alt="User Profile"
            img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
            rounded={true}
          />
          <form className="w-full">
            <div className="flex flex-col items-center gap-2 w-full">
              <input
                type="text"
                name="username"
                placeholder="사용자 이름을 입력하세요."
                defaultValue="김관식"
                className="w-4/5 bg-ezip-bg rounded-lg"
              />
              <input
                type="text"
                name="userDescription"
                placeholder="당신을 소개하세요."
                defaultValue="연무동 개발자"
                className="w-4/5 bg-ezip-bg rounded-lg"
              />
              <Button className="bg-ezip-green hover:bg-ezip-green_hover" onClick={onClose}>
                저장하기
              </Button>
            </div>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
}
