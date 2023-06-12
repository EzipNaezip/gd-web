import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import MainImageModal from '../Main/MainImageModal';
import { useRecoilValue } from 'recoil';
import { LoginState } from '../../Atoms/LoginState';

GalleryCard.propTypes = {
  url: PropTypes.string.isRequired,
};

export default function GalleryCard({ data, isMain, bookmarking, isMypage }) {
  const [modalShow, setModalShow] = useState(false);
  const [buttonShow, setButtonShow] = useState(false);
  const [bookMark, setBookMark] = useState(data.bookmark);
  const baseURL = 'http://api.ezipnaezip.life:8080';
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
          <Link to={`/post/${data.postNum}`}>
            <img
              className="transition ease-in h-auto max-w-full rounded-md hover:opacity-60"
              src={`${baseURL}${data.thumbnailImgUrl}`}
              alt="img"
            />
          </Link>
          {buttonShow && isLogin ? (
            //{buttonShow && isLogin ? (작업용 로그인 고정
            <button className="absolute bottom-0 right-0 mb-2 mr-2 text-white px-2 py-2 rounded">
              <div className="flex">
                {!data.isMe && !isMypage ? (
                  <>
                    {!bookMark ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:fill-ezip-green duration-300 w-6 h-6"
                        onClick={() => {
                          setBookMark(!bookMark);
                          bookmarking.set(data.postNum);
                        }}
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
                        onClick={() => {
                          setBookMark(!bookMark);
                          bookmarking.remove(data.postNum);
                        }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                        />
                      </svg>
                    )}
                  </>
                ) : (
                  <></>
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
            src={`${baseURL}${data.imgUrl}`}
            alt="img"
            onClick={() => setModalShow(true)}
          />
          <MainImageModal img={data} imgShow={modalShow} onClose={() => setModalShow(false)} />
        </>
      )}
    </div>
  );
}
