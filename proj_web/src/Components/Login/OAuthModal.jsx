import React from 'react';
import { Modal } from 'flowbite-react';
import { ModalHeader } from 'flowbite-react/lib/esm/components/Modal/ModalHeader';

export default function OAuthModal({ OAuthShow, onClose }) {
  return (
    <Modal show={OAuthShow} onClose={onClose}>
      <ModalHeader className="font-suiteBold text-xl">LOGIN</ModalHeader>
      <iframe
        className="w-full h-screen"
        title="OAuth"
        src="http://api.ezipnaezip.life:8080/login"
        id="oauth_login"
      ></iframe>
    </Modal>
  );
}
