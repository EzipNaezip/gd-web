import React, { useState } from 'react';
import DiscoverFilterButton from './DiscoverFilterButton';

export default function DiscoverButtons() {
  const filterArray = [
    { key: 0, name: 'TOP 30' },
    { key: 1, name: '모던' },
    { key: 2, name: '바우하우스' },
    { key: 3, name: '미니멀' },
    { key: 4, name: '내추럴' },
    { key: 5, name: '북유럽' },
    { key: 6, name: '젠' },
    { key: 7, name: '러스틱' },
    { key: 8, name: '앤틱' },
    { key: 9, name: '로맨틱' },
    { key: 10, name: '아르누보' },
    { key: 11, name: '쉐비' },
    { key: 12, name: '정크' },
  ];
  const [cursor, setCursor] = useState(0);

  return (
    <>
      <div className="grid grid-cols-4 justify-items-center lg:flex gap-4">
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
