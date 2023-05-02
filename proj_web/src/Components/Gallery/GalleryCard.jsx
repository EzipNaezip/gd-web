import React from "react";
import PropTypes from "prop-types";

const GalleryCard = ({ url }) => {
  return (
    <div>
      <img className="h-auto max-w-full rounded-md hover:blur-sm" src={url} alt="img" />
    </div>
  );
};

GalleryCard.propTypes = {
  url: PropTypes.string.isRequired,
};

export default GalleryCard;
