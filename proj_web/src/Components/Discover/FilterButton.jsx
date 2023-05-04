import React from 'react';
import PropTypes from 'prop-types';

const FilterButton = ({ name }) => {
  return (
    <button className="bg-gd-blue hover:bg-gd-blue_hover text-white py-1 px-6 rounded-full font-suiteBold">
      {name}
    </button>
  );
};

FilterButton.propTypes = {
  name: PropTypes.string.isRequired,
};

export default FilterButton;
