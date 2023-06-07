import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { deleteComment, editComment } from '../../Query/CommentQuery';
import { useSetRecoilState } from 'recoil';
import { MypageState } from '../../Atoms/MypageState';
import { Link } from 'react-router-dom';

export default function PostComment({ comment, fetch }) {
  const [editState, setEditState] = useState(false);
  const [editText, setEditText] = useState('');
  const setMypageState = useSetRecoilState(MypageState);
  const baseURL = 'http://api.ezipnaezip.life:8080';

  const edit = useMutation(editComment, {
    onSuccess: (data) => {
      setEditState((prevEditState) => !prevEditState);
      fetch();
    },
  });
  const del = useMutation(deleteComment, {
    onSuccess: (data) => {
      fetch();
    },
  });

  const checkImgURL = () => {
    const regExp = /http:/g;

    if (regExp.test(comment.user.profileImgUrl)) return comment.user.profileImgUrl;
    else return `${baseURL}${comment.user.profileImgUrl}`;
  };

  return (
    <div className="p-3">
      <div className="w-full flex p-2 text-gray-500 bg-white rounded-lg shadow dark:bg-gray-800 dark:text-gray-400">
        {!editState ? (
          <div className="flex w-full items-center">
            <img className="w-8 h-8 rounded-full shadow-lg" src={checkImgURL()} alt="profileImage" />
            <div className="ml-3 text-sm font-normal">
              <Link
                className="w-full"
                to={`/mypage/${comment.user.userId}`}
                onClick={() => {
                  setMypageState(comment.user.userId);
                }}
              >
                <span className="mb-1 text-sm font-semibold text-gray-900 dark:text-white">{comment.user.name}</span>
              </Link>
              <div className="text-sm font-normal">{comment.content}</div>
            </div>
          </div>
        ) : (
          <div className="flex w-full h-10 items-center">
            <input
              size="lg"
              placeholder="댓글을 입력해주세요"
              className="flex h-full w-full items-center text-sm"
              onChange={(e) => {
                e.preventDefault();
                setEditText(e.target.value);
              }}
            />
          </div>
        )}

        {comment.isMe ? (
          <>
            {!editState ? (
              <div className="flex w-1/3 items-center justify-end text-sm">
                <button
                  className="mr-2"
                  onClick={(e) => {
                    e.preventDefault();
                    setEditState(true);
                  }}
                >
                  수정
                </button>
                <p className="mr-2"> / </p>
                <button
                  className="mr-2 text-red-500"
                  onClick={(e) => {
                    e.preventDefault();
                    del.mutate({ serialNum: comment.serialNum });
                  }}
                >
                  삭제
                </button>
              </div>
            ) : (
              <div className="flex w-1/3 items-center justify-end text-sm">
                <button
                  className="mr-2"
                  onClick={(e) => {
                    e.preventDefault();
                    setEditState(true);
                    edit.mutate({ serialNum: comment.serialNum, sentence: editText });
                  }}
                >
                  확인
                </button>
                <p className="mr-2"> / </p>
                <button
                  className="mr-2"
                  onClick={(e) => {
                    e.preventDefault();
                    setEditState(false);
                  }}
                >
                  취소
                </button>
              </div>
            )}
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
