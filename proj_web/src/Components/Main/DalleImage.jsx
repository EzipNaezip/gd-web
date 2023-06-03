import ImageModal from '../Modals/ImageModal';
import { useState } from 'react';

export default function DalleImage({ id, url, serial }) {
  const [show, setShow] = useState(false);
  return (
    <div>
      <img
        className="transition ease-in rounded-lg hover:opacity-70"
        src={url}
        alt="dalleImage"
        onClick={() => {
          setShow(true);
        }}
      />
      <ImageModal
        img={url}
        imgShow={show}
        onClose={() => {
          setShow(false);
        }}
      />
    </div>
  );
}
