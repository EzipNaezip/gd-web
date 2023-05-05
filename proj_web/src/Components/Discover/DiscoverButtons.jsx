import React, { useState } from 'react';
import FilterButton from './FilterButton';

export default function DiscoverButtons() {
  const filterArray = [
    { key: 0, name: 'TOP 30' },
    { key: 1, name: '인기급상승' },
    { key: 2, name: '모던' },
    { key: 3, name: '클래식' },
    { key: 4, name: '내추럴' },
  ];
  const [cursor, setCursor] = useState(0);

  return (
    <>
      <div className="flex gap-4">
        {filterArray.map((filter) => (
          <FilterButton
            data={filter}
            cursor={cursor}
            filterHandler={(e) => {
              setCursor(Number(e.target.id));
            }}
          />
        ))}
      </div>
    </>
  );
}
