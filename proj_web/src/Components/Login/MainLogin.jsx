import React from 'react';
import { Modal } from 'flowbite-react';

export default function MainLogin({ show, onClose, onLogin }) {
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
                <div
                  onClick={onLogin}
                  className="grid grid-cols-4 transition ease-in-out delay-100 font-suiteLight bg-kakao hover:bg-kakao_hover text-sm rounded-md p-3 mb-3 text-right shadow-md"
                >
                  <img
                    className="inline ml-2 w-5 h-5"
                    src={process.env.PUBLIC_URL + '/Images/kakao_logo.svg'}
                    alt="kakao"
                  />
                  <p className="col-span-3 flex items-center justify-start">카카오계정으로 로그인</p>
                </div>
                <div
                  onClick={onLogin}
                  className="grid grid-cols-4 transition ease-in-out delay-100 font-suiteLight bg-white hover:bg-white_hover text-sm rounded-md p-3 text-right shadow-md mb-10"
                >
                  <img
                    className="inline ml-2 w-5 h-5"
                    src={process.env.PUBLIC_URL + '/Images/google_logo.svg'}
                    alt="kakao"
                  />
                  <p className="col-span-3 flex items-center justify-start">구글계정으로 로그인</p>
                </div>
              </div>
            </div>
          </Modal.Body>
        </div>
      </div>
    </Modal>
  );
}
