import React from "react";
import { useNavigate, useParams } from "react-router";
import jwt_decode from "jwt-decode";

const LoginTokenPage = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  // 정상적으로 토큰이 들어오면 세션 스토리지에 저장
  if (token) {
    const userInfo = jwt_decode(token); // 토큰 decode
    sessionStorage.setItem("token", token);
    sessionStorage.setItem("user", JSON.stringify(userInfo));

    navigate("/");
  } else {
    console.log(`Invalid`);
  }

  return (
    <div>
      <p>로그인 중입니다...</p>
    </div>
  );
};

export default LoginTokenPage;
