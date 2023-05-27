import React from 'react';
import { Modal } from 'flowbite-react';
import GoogleOAuth from './GoogleOAuth';

export default function MainLogin({ show, setShow, onClose }) {
  // const modalHandler = () => {
  //   setShow(false); // 부모 컴포넌트에 이벤트 전달
  // };

  return (
    <Modal className="h-screen animate-fade-in-down" size="sm" show={show} onClose={onClose}>
      <div className="g-white rounded-md shadow-xl">
        <div className="grid items-center grid-rows-1 gap-10">
          <Modal.Header>
            <h1 className="text-xl font-suiteBold text-gray-800">내일의 집</h1>
          </Modal.Header>
          <Modal.Body>
            <div className="flex-col justify-center items-center">
              <div className="text-4xl mb-4 text-center">LOGIN</div>
              <div className="mb-4 font-suiteLight text-center">다음의 방법으로 로그인 할 수 있어요</div>
              <div className="flex flex-col justify-center">
                <GoogleOAuth />
              </div>
            </div>
          </Modal.Body>
        </div>
      </div>
    </Modal>
  );
}
