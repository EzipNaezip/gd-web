import React, { useEffect } from "react";

export default function GoogleOAuth_regacy({ handleToken }) {
  const oauthUrl = "http://api.ezipnaezip.life:8080/login";

  useEffect(() => {
    const handleAuthenticationSuccess = (event) => {
      if (event.origin === "http://api.ezipnaezip.life:8080" && event.data === "authenticationSuccess") {
        const token = event.source.localStorage.getItem("token");
        // 팝업 처리가 완료되었으므로, 메시지 수신 이벤트 리스너를 제거합니다.
        window.removeEventListener("message", handleAuthenticationSuccess);
        // 토큰을 부모 컴포넌트로 전달하고 필요한 처리를 수행합니다.
        handleToken(token);
      }
    };

    // 부모 창으로부터의 메시지 수신 이벤트 리스너를 등록합니다.
    window.addEventListener("message", handleAuthenticationSuccess);

    return () => {
      // 컴포넌트가 언마운트되면 메시지 수신 이벤트 리스너를 제거합니다.
      window.removeEventListener("message", handleAuthenticationSuccess);
    };
  }, [handleToken]);

  const handleClick = () => {
    const oauthWindow = window.open(oauthUrl, "oauthWindow", "height=600, width=600");

    const intervalId = setInterval(() => {
      if (oauthWindow.closed) {
        clearInterval(intervalId);
      }
    }, 1000);
  };

  return (
    <div onClick={handleClick}>
      <div className="grid grid-cols-4 transition ease-in-out delay-100 font-suiteLight bg-white hover:bg-white_hover text-sm rounded-md p-3 text-right shadow-md mb-10">
        <img className="inline ml-2 w-5 h-5" src={process.env.PUBLIC_URL + "/Images/google_logo.svg"} alt="google" />
        <p className="col-span-3 flex items-center justify-start">구글계정으로 로그인</p>
      </div>
    </div>
  );
}
