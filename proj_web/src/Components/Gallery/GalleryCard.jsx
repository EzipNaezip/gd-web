import React from 'react';
import PropTypes from 'prop-types';

const GalleryCard = ({ url }) => {
  return (
    <div>
      <img className="transition ease-in h-auto max-w-full rounded-md hover:blur-xs" src={url} alt="img" />
    </div>
  );
};

GalleryCard.propTypes = {
  url: PropTypes.string.isRequired,
};

export default GalleryCard;
