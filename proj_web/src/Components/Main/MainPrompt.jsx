import React, { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { createDalleImage, deleteDalleImage, stopDalleImage, storeDalleImage } from '../../Query/DalleImageQuery';
// import testDalleAxios from '../../Query/testDalleAxios';
import DalleImage from './DalleImage';
import { useSetRecoilState } from 'recoil';
import { PromptCreateState } from '../../Atoms/PromptCreateState';
import { Button } from 'flowbite-react';
import MainLogin from '../Login/MainLogin';

export default function MainPrompt() {
  const [show, setShow] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [images, setImages] = useState(null);
  const [errored, setErrored] = useState(null);
  const [save, setSave] = useState(false);
  const setCreated = useSetRecoilState(PromptCreateState);

  const createDalle = useMutation(createDalleImage, {
    onSuccess: (data) => {
      console.log('create : ', data);
      setImages(data);
      setCreated(true);
    },
    onError: (error) => {
      setErrored(error);
    },
  });
  const stopDalle = useMutation(stopDalleImage, {
    onSuccess: (data) => {
      setCreated(false);
    },
    onError: (error) => {
      setCreated(error);
    },
  });
  const storeDalle = useMutation(storeDalleImage, {
    onSuccess: (data) => {
      setSave(true);
    },
  });
  const deleteDalle = useMutation(deleteDalleImage, {
    onSuccess: (data) => {
      setSave(false);
    },
  });

  useEffect(() => {
    setCreated(false);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="min-h-70vh flex flex-col sm:container justify-center px-4 pb-32">
      <MainLogin
        show={show}
        onClose={() => {
          setShow(false);
        }}
      />
      {!errored ? (
        <>
          {images ? (
            <>
              <h1 className="text-2xl font-suiteBold text-center mb-4">인테리어가 완성되었습니다!</h1>
            </>
          ) : (
            <>
              {!createDalle.isLoading ? (
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
              {!createDalle.isLoading ? (
                <div>
                  <input
                    className="h-10 block w-full p-6 font-suiteLight text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    placeholder="원하시는 스타일을 입력해주세요."
                    required
                    onChange={(e) => {
                      setPrompt(e.currentTarget.value);
                    }}
                  />
                  {sessionStorage.getItem('userId') ? (
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        createDalle.mutate(prompt);
                      }}
                      className="absolute right-0 bottom-0 focus:ring-4 focus:outline-none font-suiteMedium rounded-r-lg border px-6 h-full border-gray-300"
                    >
                      생성
                    </button>
                  ) : (
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setShow(true);
                      }}
                      className="absolute right-0 bottom-0 focus:ring-4 focus:outline-none font-suiteMedium rounded-r-lg border px-6 h-full border-gray-300"
                    >
                      생성
                    </button>
                  )}
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
                      stopDalle.mutate();
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
          {images ? (
            <>
              {images.response.length > 1 ? (
                <div className="grid w-full">
                  <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-3">
                    {images.response.map((image) => (
                      <DalleImage id={image.itemId} url={image.url} serial={image.chatLogSerialNumber} />
                    ))}
                  </div>
                  <div className="w-full">
                    <div className="flex justify-end">
                      {!save ? (
                        <Button
                          className="transition ease-in mt-6 w-24 bg-ezip-green hover:bg-ezip-green_hover"
                          onClick={() => {
                            if (images[0].response.chatLogSerialNumber)
                              storeDalle.mutate(images[0].response.chatLogSerialNumber);
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-12 h-12"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                            />
                          </svg>
                        </Button>
                      ) : (
                        <Button
                          className="transition ease-in mt-6 w-24 border-2 border-ezip-green bg-white hover:bg-white_hover"
                          onClick={() => {
                            if (images[0].response.chatLogSerialNumber)
                              deleteDalle.mutate(images[0].response.chatLogSerialNumber);
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="text-ezip-green w-12 h-12"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                            />
                          </svg>
                        </Button>
                      )}
                    </div>
                  </div>
                  <div className="mt-14 rounded-lg border font-suiteLight p-4">
                    <p>{images.description}</p>
                  </div>
                </div>
              ) : (
                <div className="grid">
                  <div className="mt-14 grid grid-cols-1 justify-items-center gap-3">
                    <div className="flex justify-center w-5/6">
                      <DalleImage
                        id={images.response[0].itemId}
                        url={images.response[0].url}
                        serial={images.response[0].chatLogSerialNumber}
                      />
                    </div>
                  </div>
                  <div className="mt-14 rounded-lg border font-suiteLight p-4">
                    <p>{images.description}</p>
                  </div>
                </div>
              )}
            </>
          ) : (
            <></>
          )}
        </>
      </form>
    </div>
  );
}
