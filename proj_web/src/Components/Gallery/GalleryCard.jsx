import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

GalleryCard.propTypes = {
  url: PropTypes.string.isRequired,
};

export default function GalleryCard({ url }) {
  return (
    <div>
      <Link to="/post">
        <img className="transition ease-in h-auto max-w-full rounded-md hover:blur-xs" src={url} alt="img" />
      </Link>
    </div>
  );
}
