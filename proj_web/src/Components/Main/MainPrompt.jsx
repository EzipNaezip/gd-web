import React, { useState } from 'react';
import { useMutation } from 'react-query';
import CreateDalleImageAxios from '../../Query/CreateDalleImageAxios';
import DalleImage from './DalleImage';
import StopDalleImageAxios from '../../Query/StopDalleImageAxios';

export default function MainPrompt() {
  const [prompt, setPrompt] = useState('');
  const [images, setImages] = useState(null);
  const [created, setCreated] = useState(null);
  const dalle = useMutation(CreateDalleImageAxios, {
    onSuccess: (data) => {
      setImages(data);
      setCreated(true);
    },
  });
  const stop = useMutation(StopDalleImageAxios);

  return (
    <div className="min-h-70vh flex flex-col sm:container justify-center px-4 pb-32">
      {!dalle.isLoading ? (
        <h1 className="text-2xl font-suiteBold text-center mb-4">새로운 아이디어를 찾아보세요!</h1>
      ) : (
        <h1 className="text-2xl font-suiteBold text-center mb-4">디자이너가 열심히 그리는 중...</h1>
      )}

      <form>
        <div className="relative">
          {!dalle.isLoading ? (
            <div>
              <input
                className="h-10 block w-full p-4 font-suiteLight text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="원하시는 스타일을 입력해주세요."
                required
                onChange={(e) => {
                  setPrompt(e.currentTarget.value);
                }}
              />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  dalle.mutate(prompt);
                }}
                className="absolute right-0 bottom-0 focus:ring-4 focus:outline-none font-suiteMedium rounded-r-lg border px-6 h-full border-gray-300"
              >
                생성
              </button>
            </div>
          ) : (
            <div>
              <input
                className="h-10 block w-full p-4 font-suiteLight text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="원하시는 스타일을 입력해주세요."
                disabled={true}
              />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  stop.mutate();
                }}
                className="absolute right-0 bottom-0 focus:ring-4 focus:outline-none font-suiteMedium rounded-r-lg border px-6 h-full border-gray-300"
              >
                중단
              </button>
            </div>
          )}
        </div>
      </form>
      {created ? (
        <div className="mt-3 grid grid-cols-2 md:grid-cols-4 gap-3">
          {images.map((image) => (
            <DalleImage id={image.itemId} url={image.url} serial={image.chatLogSerialNumber} />
          ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
