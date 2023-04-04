import React from 'react';

function LoginComponent() {
  return (
    <div className="container flex justify-center items-center h-screen">
      <div className="box flex justify-center items-center bg-gray-300 rounded-md shadow-md w-1/4 h-1/2">
        <div className="grid items-center grid-rows-1 gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">내일의 집</h1>
          </div>
          <div>
            <div className="text-4xl mb-4 text-center">로그인</div>
            <div className="mb-3">다음의 방법으로 로그인 할 수 있어요</div>
            <div className="bg-gray-100 rounded-md p-2 mb-2">카카오계정으로 로그인</div>
            <div className="bg-gray-100 rounded-md p-2">구글계정으로 로그인</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginComponent;
