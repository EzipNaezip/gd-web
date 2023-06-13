import React from 'react';
import PropTypes from 'prop-types';

DiscoverFilterButton.propTypes = {
  data: PropTypes.object.isRequired,
};

export default function DiscoverFilterButton({ data, cursor, setCursor, topHandler, filterHandler }) {
  let handler = data[1] === 'TOP 30' ? topHandler : filterHandler;

  return (
    <>
      {data[1] === cursor ? (
        <div className="xl:px-2">
          <button
            id={data[0]}
            onClick={() => {
              handler();
              setCursor(data[1]);
            }}
            className="transition ease-in bg-ezip-green hover:bg-ezip-green_hover text-sm text-white p-1 lg:p-2 rounded-lg font-suiteBold"
          >
            {data[1]}
          </button>
        </div>
      ) : (
        <div className="xl:px-2">
          <button
            id={data[0]}
            onClick={() => {
              handler();
              setCursor(data[1]);
            }}
            className="transition ease-in hover:bg-ezip-green text-sm text-slate-600 hover:text-white p-1 lg:p-2 rounded-lg font-suiteBold"
          >
            {data[1]}
          </button>
        </div>
      )}
    </>
  );
}
