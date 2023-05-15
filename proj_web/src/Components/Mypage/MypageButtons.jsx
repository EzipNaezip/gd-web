import React, { useState } from 'react';
import FilterButton from '../Discover/FilterButton';

export default function MypageButton() {
  const filterArray = [
    { key: 0, name: 'ALL' },
    { key: 1, name: '좋아요' },
    { key: 2, name: '북마크' },
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
