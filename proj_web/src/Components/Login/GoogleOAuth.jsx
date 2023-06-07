import { useGoogleLogin } from "@react-oauth/google";
import React, { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { LoginState } from "../../Atoms/LoginState";

export default function GoogleOAuth({ loginShow }) {
  const [popup, setPopup] = useState();
  const setLogin = useSetRecoilState(LoginState);

  const googleSocialLogin = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      window.localStorage.setItem("token", tokenResponse.access_token);
      window.localStorage.setItem("userID", tokenResponse.authUser);
      console.log("login : ", tokenResponse);
      setLogin(true);
      loginShow(false);
    },
  });

  const handleOpenPopup = () => {
    const width = 500;
    const height = 800;
    const left = window.screenX + (window.outerWidth - width) / 2;
    const top = window.screenY + (window.outerHeight - height) / 2;
    const popup = window.open("http://api.ezipnaezip.life:8080/login", "구글 계정으로 로그인", `width=${width},height=${height},top=${top},left=${left}`);

    setPopup(popup);
  };

  useEffect(() => {
    const currentUrl = new URL(window.location.href);
    const searchParams = currentUrl;
    console.log(searchParams);
  }, []);

  useEffect(() => {
    if (!popup) {
      return;
    }

    const githubOAuthCodeListener = (e) => {
      // 동일한 Origin 의 이벤트만 처리하도록 제한
      if (e.origin !== window.location.origin) {
        return;
      }

      const token = e.data;

      if (token) {
        console.log(token);
      }

      popup.close();
      setPopup(null);
    };

    window.addEventListener("message", githubOAuthCodeListener, false);

    return () => {
      window.removeEventListener("message", githubOAuthCodeListener);
      popup?.close();
      setPopup(null);
    };
  }, [popup]);

  return (
    <button onClick={handleOpenPopup}>
      <div className="grid grid-cols-4 transition ease-in-out delay-100 font-suiteLight bg-white hover:bg-white_hover text-sm rounded-md p-3 text-right shadow-md mb-10">
        <img className="inline ml-2 w-5 h-5" src={process.env.PUBLIC_URL + "/Images/google_logo.svg"} alt="google" />
        <p className="col-span-3 flex items-center justify-start">구글계정으로 로그인</p>
      </div>
    </button>
  );
}
