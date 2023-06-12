import React from 'react';
import { Button, Card, Modal } from 'flowbite-react';

export default function MainImageModal({ img, imgShow, onClose }) {
  const baseURL = 'http://api.ezipnaezip.life:8080';

  const handleCopy = () => {
    const textToCopy = img.prompt;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(textToCopy)
        .then(() => {
          console.log('Text copied to clipboard: ', textToCopy);
          // 복사 성공 시 필요한 추가 작업을 수행하세요.
        })
        .catch((error) => {
          console.error('Error copying text to clipboard: ', error);
          // 복사 실패 시 필요한 추가 작업을 수행하세요.
        });
    } else {
      console.error('Clipboard API not supported.');
      // 클립보드 API가 지원되지 않을 때 대체 동작을 수행하세요.
    }
  };

  return (
    <Modal className="h-screen animate-fade-in-down" size="md" popup={true} show={imgShow} onClick={onClose}>
      <Card imgSrc={`${baseURL}${img.imgUrl}`} imgAlt="example">
        <p className="font-suiteMedium text-center text-gray-700 dark:text-gray-400">{img.prompt}</p>
        <Button className="transition ease-in bg-ezip-green hover:bg-ezip-green_hover" onClick={handleCopy}>
          Copy
        </Button>
      </Card>
    </Modal>
  );
}
