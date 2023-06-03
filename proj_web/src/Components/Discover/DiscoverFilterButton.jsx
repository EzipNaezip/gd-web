import React from 'react';
import PropTypes from 'prop-types';

DiscoverFilterButton.propTypes = {
  data: PropTypes.object.isRequired,
};

export default function DiscoverFilterButton({ data, cursor, filterHandler }) {
  return (
    <>
      {data.key === cursor ? (
        <div className="text-sm px-0.5">
          <button
            id={data.key}
            onClick={filterHandler}
            className="transition ease-in bg-ezip-green hover:bg-ezip-green_hover sm:text-base text-white p-1 sm:px-4 rounded-lg font-suiteBold"
          >
            {data.name}
          </button>
        </div>
      ) : (
        <div className="text-sm px-0.5">
          <button
            id={data.key}
            onClick={filterHandler}
            className="transition ease-in hover:bg-ezip-green sm:text-base text-slate-600 hover:text-white p-1 sm:px-4 rounded-lg font-suiteBold"
          >
            {data.name}
          </button>
        </div>
      )}
    </>
  );
}
