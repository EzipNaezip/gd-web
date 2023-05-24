import React from 'react';
import { Modal } from 'flowbite-react';

export default function ImageModal({ img, imgShow, onClose }) {
  return (
    <Modal className="animate-fade-in-down" popup={true} show={imgShow} onClick={onClose}>
      <img className="rounded-lg w-full" src={img} alt="imgModal" />
    </Modal>
  );
}
