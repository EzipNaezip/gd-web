import { useGoogleLogin } from '@react-oauth/google';
import React from 'react';
import { useSetRecoilState } from 'recoil';
import { LoginState } from '../../Atoms/LoginState';

export default function GoogleOAuth({ loginShow }) {
  const setLogin = useSetRecoilState(LoginState);

  const googleSocialLogin = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      window.localStorage.setItem('token', tokenResponse.access_token);
      setLogin(true);
      loginShow(false);
    },
  });

  return (
    <button onClick={googleSocialLogin}>
      <div className="grid grid-cols-4 transition ease-in-out delay-100 font-suiteLight bg-white hover:bg-white_hover text-sm rounded-md p-3 text-right shadow-md mb-10">
        <img className="inline ml-2 w-5 h-5" src={process.env.PUBLIC_URL + '/Images/google_logo.svg'} alt="google" />
        <p className="col-span-3 flex items-center justify-start">구글계정으로 로그인</p>
      </div>
    </button>
  );
}
