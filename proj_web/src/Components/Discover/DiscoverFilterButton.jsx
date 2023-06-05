import React from 'react';
import PropTypes from 'prop-types';

DiscoverFilterButton.propTypes = {
  data: PropTypes.object.isRequired,
};

export default function DiscoverFilterButton({ data, cursor, topHandler, filterHandler }) {
  let handler = data.name === 'TOP 30' ? topHandler : filterHandler;

  return (
    <>
      {data.name === cursor ? (
        <div className="text-xs px-0.5">
          <button
            id={data.key}
            onClick={handler}
            className="transition ease-in bg-ezip-green hover:bg-ezip-green_hover lg:text-sm text-white p-1 px-4 rounded-lg font-suiteBold"
          >
            {data.name}
          </button>
        </div>
      ) : (
        <div className="text-xs px-0.5">
          <button
            id={data.key}
            onClick={handler}
            className="transition ease-in hover:bg-ezip-green lg:text-sm text-slate-600 hover:text-white p-1 px-4 rounded-lg font-suiteBold"
          >
            {data.name}
          </button>
        </div>
      )}
    </>
  );
}
