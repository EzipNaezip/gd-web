import React, { useState } from 'react';
import FilterButton from '../Discover/FilterButton';

export default function MypageButton() {
  const filterArray = [
    { key: 0, name: '갤러리' },
    { key: 1, name: '북마크' },
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
