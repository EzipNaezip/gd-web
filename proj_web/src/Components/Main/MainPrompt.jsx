import React, { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { createDalleImage, stopDalleImage } from '../../Query/DalleImageQuery';
import testDalleAxios from '../../Query/testDalleAxios';
import DalleImage from './DalleImage';
import { useRecoilState } from 'recoil';
import { PromptCreateState } from '../../Atoms/PromptCreateState';

export default function MainPrompt() {
  const [prompt, setPrompt] = useState('');
  const [images, setImages] = useState(null);
  const [description, setDescription] = useState(null);
  const [created, setCreated] = useRecoilState(PromptCreateState);
  const [errored, setErrored] = useState(null);
  const dalle = useMutation(testDalleAxios, {
    onSuccess: (data) => {
      setImages(data.response);
      setDescription(data.description);
      setCreated(true);
    },
    onError: (error) => {
      setErrored(error);
    },
  });
  const stop = useMutation(stopDalleImage);

  useEffect(() => {
    setCreated(false);
  }, [setCreated]);

  return (
    <div className="min-h-70vh flex flex-col sm:container justify-center px-4 pb-32">
      {!errored ? (
        <>
          {created ? (
            <>
              <h1 className="text-2xl font-suiteBold text-center mb-4">인테리어가 완성되었습니다!</h1>
            </>
          ) : (
            <>
              {!dalle.isLoading ? (
                <h1 className="text-2xl font-suiteBold text-center mb-4">새로운 아이디어를 찾아보세요!</h1>
              ) : (
                <h1 className="text-2xl animate-pulse delay-50 font-suiteBold text-center mb-4">
                  디자이너가 열심히 그리는 중...
                </h1>
              )}
            </>
          )}
        </>
      ) : (
        <>
          <h1 className="text-2xl font-suiteBold text-red-500 text-center mb-4">
            오류가 발생했습니다. 다시 시도해주세요!
          </h1>
        </>
      )}

      <form>
        <div className="relative">
          {!errored ? (
            <>
              {!dalle.isLoading ? (
                <div>
                  <input
                    className="h-10 block w-full p-6 font-suiteLight text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
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
                    className="h-10 block w-full p-6 animate-pulse delay-50 font-suiteLight text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
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
            </>
          ) : (
            <></>
          )}
        </div>
        <>
          {created && images ? (
            <div className="grid">
              <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-3">
                <>
                  {images.map((image) => (
                    <DalleImage id={image.itemId} url={image.url} serial={image.chatLogSerialNumber} />
                  ))}
                </>
              </div>
              <div className="mt-14 rounded-lg border font-suiteLight p-4">
                <p>{description}</p>
              </div>
            </div>
          ) : (
            <></>
          )}
        </>
      </form>
    </div>
  );
}
