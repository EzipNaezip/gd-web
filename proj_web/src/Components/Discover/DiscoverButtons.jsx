import React, { useState } from 'react';
import DiscoverFilterButton from './DiscoverFilterButton';

export default function DiscoverButtons() {
  const filterArray = [
    { key: 0, name: 'TOP 30' },
    { key: 1, name: '모던' },
    { key: 2, name: '클래식' },
    { key: 3, name: '내추럴' },
  ];
  const [cursor, setCursor] = useState(0);

  return (
    <>
      <div className="flex gap-4">
        {filterArray.map((filter) => (
          <DiscoverFilterButton
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
