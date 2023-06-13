import React from 'react';
import DiscoverFilterButton from './DiscoverFilterButton';
import { DiscoverFilterList } from './DiscoverFilterList';

export default function DiscoverButtons({ cursor, setCursor, topHandler, filterHandler }) {
  return (
    <div className="flex justify-center w-full">
      <div className="grid grid-cols-4 md:grid-cols-6 items-center justify-items-center lg:flex gap-4">
        {[...DiscoverFilterList].map((filter) => (
          <DiscoverFilterButton
            data={filter}
            cursor={cursor}
            topHandler={(e) => {
              e.preventDefault();
              setCursor(e.target.innerText);
              topHandler();
            }}
            filterHandler={(e) => {
              e.preventDefault();
              setCursor(e.target.innerText);
              filterHandler(e.target.innerText);
            }}
          />
        ))}
      </div>
    </div>
  );
}
