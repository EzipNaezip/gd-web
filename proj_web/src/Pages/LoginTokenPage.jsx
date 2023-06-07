import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import jwt_decode from "jwt-decode";
import Swal from "sweetalert2";

const LoginTokenPage = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  const Toast = Swal.mixin({
    toast: true,
    position: "bottom-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  useEffect(() => {
    // 정상적으로 토큰이 들어오면 세션 스토리지에 저장
    if (token) {
      const userInfo = jwt_decode(token);
      const userInfoJson = JSON.stringify(userInfo);
      const parsedUserInfo = JSON.parse(userInfoJson);

      if (parsedUserInfo.userId) {
        Toast.fire({
          icon: "error",
          title: "로그인 실패! 다시시도 해주세요.",
        });

        navigate("/");
        return;
      }

      sessionStorage.setItem("token", token);
      sessionStorage.setItem("userId", parsedUserInfo.userId);

      Toast.fire({
        icon: "success",
        title: "로그인 성공! 환영합니다.",
      });
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
