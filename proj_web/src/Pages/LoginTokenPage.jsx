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
    const handleLoginFailure = () => {
      Toast.fire({
        icon: "error",
        title: "로그인 실패! 다시시도 해주세요.",
      });
      navigate("/");
    };

    try {
      const userInfo = jwt_decode(token);
      if (userInfo.userId === undefined) {
        handleLoginFailure();
      } else {
        sessionStorage.setItem("token", token);
        sessionStorage.setItem("userId", userInfo.userId);
        Toast.fire({
          icon: "success",
          title: "로그인 성공! 환영합니다.",
        });
        navigate("/");
      }
    } catch (error) {
      handleLoginFailure();
    }
  }, [token, navigate, Toast]);

  return (
    <div>
      <p>로그인 중입니다...</p>
    </div>
  );
};

export default LoginTokenPage;
