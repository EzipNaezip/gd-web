import React from 'react';

export default function GoogleOAuth({ setShow }) {
  const oauthUrl = `http://api.ezipnaezip.life:8080/login`;
  const handleClick = () => {
    const oauthWindow = window.open(oauthUrl, 'oauthWindow', 'height=600, width=600');

    const messageListener = (event) => {
      if (event.data === 'authenticationSuccess') {
        console.log('success');
      }
    };

    window.addEventListener('message', messageListener);

    const intervalId = setInterval(() => {
      if (oauthWindow.closed) {
        window.removeEventListener('message', messageListener);
        clearInterval(intervalId);
      }
    }, 1000);
  };

  return (
    <div onClick={handleClick}>
      <div
        onClick={() => setShow(false)}
        className="grid grid-cols-4 transition ease-in-out delay-100 font-suiteLight bg-white hover:bg-white_hover text-sm rounded-md p-3 text-right shadow-md mb-10"
      >
        <img className="inline ml-2 w-5 h-5" src={process.env.PUBLIC_URL + '/Images/google_logo.svg'} alt="kakao" />
        <p className="col-span-3 flex items-center justify-start">구글계정으로 로그인</p>
      </div>
    </div>
  );
}
