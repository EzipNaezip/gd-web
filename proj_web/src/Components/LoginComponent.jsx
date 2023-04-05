import React from 'react';

function LoginComponent() {
  return (
    <div className="container flex justify-center items-center h-screen">
      <div className="box flex justify-center items-center bg-orange-50 rounded-md shadow-md w-1/4 h-1/2">
        <div className="grid items-center grid-rows-1 gap-10">
          <div>
            <h1 className="text-2xl font-suiteBold text-gray-800">내일의 집</h1>
          </div>
          <div>
            <div className="text-4xl font-suiteLight mb-4 text-center">LOGIN</div>
            <div className="font-suiteLight mb-3">다음의 방법으로 로그인 할 수 있어요</div>
            <div className="bg-yellow-400 rounded-md p-2 mb-2 text-right">카카오계정으로 로그인</div>
            <div className="bg-red-400 rounded-md p-2 text-right">구글계정으로 로그인</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginComponent;
