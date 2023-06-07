import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import jwt_decode from "jwt-decode";

const LoginTokenPage = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // 정상적으로 토큰이 들어오면 세션 스토리지에 저장
    if (token) {
      const userInfo = jwt_decode(token);
      const userInfoJson = JSON.stringify(userInfo);
      const parsedUserInfo = JSON.parse(userInfoJson);

      sessionStorage.setItem("token", token);
      sessionStorage.setItem("userId", parsedUserInfo.userId);

      navigate("/");
    } else {
      console.log(`Invalid`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return (
    <div>
      <p>로그인 중입니다...</p>
    </div>
  );
};

export default LoginTokenPage;
