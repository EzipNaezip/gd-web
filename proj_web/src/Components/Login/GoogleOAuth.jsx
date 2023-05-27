import React from 'react';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';

export default function GoogleOAuth() {
  const clientId = '164566727064-ldq29hf1m3klv9rb3eukt53d9qdfn7jp.apps.googleusercontent.com'; // 구글 API Console에서 생성한 클라이언트 ID로 대체해야 합니다

  const handleLoginSuccess = (response) => {
    console.log('Google login success:', response);
    // 로그인 성공 후 처리할 로직을 작성합니다
  };

  const handleLoginFailure = (error) => {
    console.log('Google login failure:', error);
    // 로그인 실패 후 처리할 로직을 작성합니다
  };

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <GoogleLogin onSuccess={handleLoginSuccess} onFailure={handleLoginFailure} buttonText="구글계정으로 로그인" />
    </GoogleOAuthProvider>
  );
}
