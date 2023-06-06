import React, { useState } from 'react';
import MypageFilterButton from './MypageFilterButton';

export default function MypageGalleryButton() {
  const filterArray = [
    { key: 0, name: '갤러리' },
    { key: 1, name: '북마크' },
  ];
  const [cursor, setCursor] = useState(0);

  return (
    <>
      <div className="grid grid-cols-2 justify-items-center md:flex gap-4">
        {filterArray.map((filter) => (
          <MypageFilterButton
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
