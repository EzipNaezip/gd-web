import React, { useState } from 'react';
import { Modal } from 'flowbite-react';
import GoogleOAuth from './GoogleOAuth';
import KakaoOAuth from './KakaoOAuth';

export default function MainLogin({ show, setShow, onClose }) {
  const [token, setToken] = useState(null);

  const handleToken = (t) => {
    // 토큰을 받아 처리하는 로직을 작성합니다.
    setToken(t);
    console.log(token);
  };

  // const modalHandler = () => {
  //   setShow(false); // 부모 컴포넌트에 이벤트 전달
  // };

  window.addEventListener('message', handleMessage);

  function handleMessage(event) {
    if (event.origin === 'http://118.67.132.250') {
      if (event.data.type === 'authenticationSuccess') {
        const token = event.data.token;
        console.log('Authentication success. Token:', token);
        // 토큰을 처리하거나 필요한 작업을 수행합니다.
      }
    }
  }

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
                <KakaoOAuth />
                <GoogleOAuth handleToken={handleToken} />
              </div>
            </div>
          </Modal.Body>
        </div>
      </div>
    </Modal>
  );
}
