import React, { useRef } from 'react';
import { Button, Card, Modal } from 'flowbite-react';

export default function MainImageModal({ img, imgShow, onClose }) {
  const inputRef = useRef(null);
  const baseURL = 'http://api.ezipnaezip.life:8080';

  const handleCopy = () => {
    if (inputRef.current) {
      const range = document.createRange();
      range.selectNode(inputRef.current);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
      document.execCommand('copy');
      window.getSelection().removeAllRanges();
    }
  };

  return (
    <Modal className="h-screen animate-fade-in-down" size="md" popup={true} show={imgShow} onClick={onClose}>
      <Card imgSrc={`${baseURL}${img.imgUrl}`} imgAlt="example">
        <p className="font-suiteMedium text-center text-gray-700 dark:text-gray-400">{img.prompt}</p>
        <Button className="transition ease-in bg-ezip-green hover:bg-ezip-green_hover" onClick={handleCopy}>
          Copy
        </Button>
        <input
          ref={inputRef}
          type="text"
          value={img.prompt}
          readOnly
          style={{ position: 'absolute', left: '-9999px' }}
        />
      </Card>
    </Modal>
  );
}
