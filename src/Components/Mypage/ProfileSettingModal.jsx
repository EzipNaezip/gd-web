import React, { useRef, useState } from "react";
import { Modal, Button } from "flowbite-react";
import { useMutation } from "react-query";
import { editUserInfo, upload } from "../../Query/MypageQuery";
import { useParams } from "react-router-dom";

export default function ProfileSettingModal({ user, profileShow, setProfileShow, setWithdrawShow, fetch, setApiCall }) {
  const [imgFile, setImgFile] = useState(null);
  const [imgURL, setImgURL] = useState("");
  const [returnURL, setReturnURL] = useState("");
  const [uploadState, setUploadState] = useState(false);
  const nameRef = useRef("");
  const descriptionRef = useRef("");
  const fileInput = useRef(null);
  const params = useParams();
  const baseURL = "http://api.ezipnaezip.life:8080";

  const uploadFile = useMutation(upload, {
    onSuccess: (data) => {
      setReturnURL(data.data.data.url);
    },
  });

  const editProfile = useMutation(editUserInfo, {
    onSuccess: (data) => {
      fetch(params.userId);
      setApiCall();
      setUploadState(false);
    },
  });

  const checkImgURL = () => {
    const regExpHttp = /http:/g;
    const regExpHttps = /https:/g;

    if (regExpHttp.test(user.profileImgUrl) || regExpHttps.test(user.profileImgUrl)) return user.profileImgUrl;
    else return `${baseURL}${user.profileImgUrl}`;
  };

  const handleFileImage = (e) => {
    const reader = new FileReader();
    const file = e.target.files[0];

    setImgFile(file);
    setUploadState(true);
    if (file) {
      reader.onload = () => {
        setImgURL(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    const newName = nameRef.current.value;
    const newDescription = descriptionRef.current.value;

    editProfile.mutate({
      userId: user.userId,
      name: newName,
      profileImgUrl: returnURL,
      description: newDescription,
    });
    setProfileShow(false);
    setImgURL(user.profileImgUrl);
  };

  return (
    <>
      <Modal
        className="h-screen animate-fade-in-down"
        dismissible
        size="md"
        popup={true}
        show={profileShow}
        onClose={() => {
          setImgURL(null);
          nameRef.current.value = user.name;
          descriptionRef.current.value = user.description;
          setUploadState(false);
          setProfileShow(false);
        }}
      >
        <Modal.Header>
          <h1 className="pl-4 font-suiteBold">프로필 수정</h1>
        </Modal.Header>
        <Modal.Body>
          <div className="flex flex-col items-center w-full">
            <form className="flex-col justify-center items-center">
              {!uploadState ? (
                <img
                  className="border rounded-full w-48 h-48 mb-2"
                  src={checkImgURL()}
                  alt="profile"
                  onClick={() => {
                    fileInput.current.click();
                  }}
                />
              ) : (
                <img
                  className="border rounded-full w-48 h-48 mb-2"
                  src={imgURL}
                  alt="profile"
                  onClick={() => {
                    fileInput.current.click();
                  }}
                />
              )}
              <input type="file" ref={fileInput} onChange={handleFileImage} style={{ display: "none" }} />
              <button
                className="w-full items-center text-sm font-suiteLight"
                onClick={(e) => {
                  e.preventDefault();
                  uploadFile.mutate(imgFile);
                }}
              >
                이미지 업로드
              </button>
            </form>
            <form className="mt-6 w-full">
              <div className="flex flex-col items-center gap-2 w-full">
                <div className="flex justify-center items-center w-full">
                  <h3 className="font-suiteLight text-sm w-1/6 mr-3">이름</h3>
                  <input
                    type="text"
                    name="username"
                    placeholder="사용자 이름을 입력하세요."
                    className="h-10 block w-3/4 p-4 text-sm font-suiteLight text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    defaultValue={user.name}
                    ref={nameRef}
                  />
                </div>
                <div className="flex justify-center items-center w-full">
                  <h3 className="font-suiteLight text-sm w-1/6 mr-3">소개</h3>
                  <input
                    type="text"
                    name="userDescription"
                    placeholder="당신을 소개하세요."
                    className="h-10 block w-3/4 p-4 text-sm font-suiteLight text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    defaultValue={user.description}
                    ref={descriptionRef}
                  />
                </div>
                <Button
                  className="mt-6 bg-ezip-green hover:bg-ezip-green_hover w-full"
                  onClick={(e) => {
                    e.preventDefault();
                    handleSave();
                  }}
                >
                  저장하기
                </Button>
              </div>
              <hr className="mt-6" />
              <p
                className="mt-6 w-full flex items-center justify-center text-xs font-suiteMedium text-red-500"
                onClick={(e) => {
                  e.preventDefault();
                  setWithdrawShow(true);
                  setProfileShow(false);
                }}
              >
                회원탈퇴
              </p>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
