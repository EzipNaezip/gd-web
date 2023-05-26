import React from 'react';
import { Card, Modal } from 'flowbite-react';

export default function MainImageModal({ img, imgShow, onClose }) {
  return (
    <Modal className="animate-fade-in-down" size="md" popup={true} show={imgShow} onClick={onClose}>
      <Card imgAlt="Meaningful alt text for an image that is not purely decorative" imgSrc={img}>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">TITLE</h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">This is test description.</p>
      </Card>
    </Modal>
  );
}