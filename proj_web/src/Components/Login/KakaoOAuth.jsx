import React from 'react';

export default function KakaoOAuth({ setShow }) {
  return (
    <div
      onClick={() => setShow(false)}
      className="grid grid-cols-4 transition ease-in-out delay-100 font-suiteLight bg-kakao hover:bg-kakao_hover text-sm rounded-md p-3 mb-3 text-right shadow-md"
    >
      <img className="inline ml-2 w-5 h-5" src={process.env.PUBLIC_URL + '/Images/kakao_logo.svg'} alt="kakao" />
      <p className="col-span-3 flex items-center justify-start">카카오계정으로 로그인</p>
    </div>
  );
}
