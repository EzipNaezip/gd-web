import React from 'react';
import DiscoverFilterButton from './DiscoverFilterButton';
import { DiscoverFilterList } from './DiscoverFilterList';

export default function DiscoverButtons({ cursor, setCursor, topHandler, filterHandler }) {
  const handleTopClick = (e) => {
    e.preventDefault();
    const newCursor = e.target.innerText;
    setCursor(newCursor, () => {
      topHandler();
    });
  };

  const handleFilterClick = (e) => {
    e.preventDefault();
    const newCursor = e.target.innerText;
    setCursor(newCursor, () => {
      filterHandler(newCursor);
    });
  };

  return (
    <div className="flex justify-center w-full">
      <div className="grid grid-cols-4 md:grid-cols-6 items-center justify-items-center lg:flex gap-4">
        {[...DiscoverFilterList].map((filter) => (
          <DiscoverFilterButton
            key={filter}
            data={filter}
            cursor={cursor}
            topHandler={handleTopClick}
            filterHandler={handleFilterClick}
          />
        ))}
      </div>
    </div>
  );
}
