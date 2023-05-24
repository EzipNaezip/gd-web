import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import MainImageModal from '../Modals/MainImageModal';

GalleryCard.propTypes = {
  url: PropTypes.string.isRequired,
};

export default function GalleryCard({ url, isMain }) {
  const [imgShow, setImgShow] = useState(false);

  const onImageHandler = (e) => {
    setImgShow(false);
  };

  return (
    <div>
      {!isMain ? (
        <Link to="/post">
          <img className="transition ease-in h-auto max-w-full rounded-md hover:blur-xs" src={url} alt="img" />
        </Link>
      ) : (
        <>
          <img
            className="transition ease-in h-auto max-w-full rounded-md hover:blur-xs"
            src={url}
            alt="img"
            onClick={() => setImgShow(true)}
          />
          <MainImageModal img={url} imgShow={imgShow} onClose={onImageHandler} />
        </>
      )}
    </div>
  );
}
