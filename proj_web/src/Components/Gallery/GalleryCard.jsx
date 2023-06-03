import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import MainImageModal from '../Modals/MainImageModal';
import { useRecoilValue } from 'recoil';
import { LoginState } from '../../Atoms/LoginState';

GalleryCard.propTypes = {
  url: PropTypes.string.isRequired,
};

export default function GalleryCard({ url, isMain }) {
  const [modalShow, setModalShow] = useState(false);
  const [buttonShow, setButtonShow] = useState(false);
  const [like, setLike] = useState(false);
  const [bookMark, setBookMark] = useState(false);
  const isLogin = useRecoilValue(LoginState);

  const handleMouseEnter = () => {
    setButtonShow(true);
  };

  const handleMouseLeave = () => {
    setButtonShow(false);
  };

  return (
    <div className="relative">
      {!isMain ? (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <Link to="/post">
            <img className="transition ease-in h-auto max-w-full rounded-md hover:opacity-70" src={url} alt="img" />
          </Link>
          {buttonShow && isLogin ? (
            //{buttonShow && isLogin ? (작업용 로그인 고정
            <button className="absolute bottom-0 right-0 mb-2 mr-2 text-black px-2 py-2 rounded">
              <div className="flex">
                {!like ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:fill-red-500 duration-300 w-6 h-6 mr-1"
                    onClick={() => setLike(!like)}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="fill-red-500 duration-300 w-6 h-6 mr-1"
                    onClick={() => setLike(!like)}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                )}
                {!bookMark ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:fill-ezip-green duration-300 w-6 h-6"
                    onClick={() => setBookMark(!bookMark)}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="fill-ezip-green duration-300 w-6 h-6"
                    onClick={() => setBookMark(!bookMark)}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                    />
                  </svg>
                )}
              </div>
            </button>
          ) : (
            <></>
          )}
        </div>
      ) : (
        <>
          <img
            className="transition ease-in h-auto max-w-full rounded-md hover:opacity-70"
            src={url}
            alt="img"
            onClick={() => setModalShow(true)}
          />
          <MainImageModal img={url} imgShow={modalShow} onClose={() => setModalShow(false)} />
        </>
      )}
    </div>
  );
}
