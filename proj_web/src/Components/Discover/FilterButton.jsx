import React from 'react';
import PropTypes from 'prop-types';

FilterButton.propTypes = {
  data: PropTypes.object.isRequired,
};

export default function FilterButton({ data, cursor, filterHandler }) {
  return (
    <>
      {data.key === cursor ? (
        <div className="text-sm px-2">
          <button
            id={data.key}
            onClick={filterHandler}
            className="transition ease-in bg-gd-blue hover:bg-gd-blue_hover sm:text-base text-white p-1 sm:px-4 rounded-lg font-suiteBold"
          >
            {data.name}
          </button>
        </div>
      ) : (
        <div className="text-sm px-2">
          <button
            id={data.key}
            onClick={filterHandler}
            className="transition ease-in hover:bg-gd-blue_hover sm:text-base text-slate-600 hover:text-white p-1 sm:px-4 rounded-lg font-suiteBold"
          >
            {data.name}
          </button>
        </div>
      )}
    </>
  );
}
