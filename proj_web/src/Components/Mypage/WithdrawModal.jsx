import React from 'react';
import { Button, Modal } from 'flowbite-react';

export default function WithdrawModal({ show, setShow }) {
  const onClose = (e) => {
    e.preventDefault();
    setShow(false);
  };

  return (
    <Modal>
      <Modal
        show={show}
        size="md"
        popup
        onClose={(e) => {
          onClose(e);
        }}
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <svg
              className="mx-auto mb-4 h-14 w-14 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
              />
            </svg>
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">정말로 탈퇴하시겠습니까?</h3>
            <div className="flex justify-center gap-4">
              <Button
                color="failure"
                onClick={(e) => {
                  onClose(e);
                }}
              >
                탈퇴하기
              </Button>
              <Button
                color="gray"
                onClick={(e) => {
                  onClose(e);
                }}
              >
                취소하기
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </Modal>
  );
}
