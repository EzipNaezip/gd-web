import React from "react";
import { useNavigate, useParams } from "react-router";

const LoginTokenPage = () => {
  const { token } = useParams();
  var navigate = useNavigate();

  // 정상적으로 토큰이 들어오면 세션 스토리지에 저장
  if (token) {
    sessionStorage.setItem("token", token);
  }

  console.log(token);
  console.log(navigate);

  return (
    <div>
      <p>로그인 중입니다...</p>
    </div>
  );
};

export default LoginTokenPage;
