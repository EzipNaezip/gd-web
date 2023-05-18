import React from 'react';
import { Modal } from 'flowbite-react';
import { ModalBody } from 'flowbite-react/lib/esm/components/Modal/ModalBody';
import { ModalHeader } from 'flowbite-react/lib/esm/components/Modal/ModalHeader';

export default function ImageModal({ img, imgShow, onClose }) {
  return (
    <Modal popup={true} show={imgShow} onClose={onClose}>
      <ModalHeader />
      <ModalBody>
        <img src={img} alt="imgModal" />
      </ModalBody>
    </Modal>
  );
}
