import React from 'react';
import CollectionItem from './CollectionItem';

export default function MainCollection() {
  const iterate = new Array(24);

  for (let i = 0; i < iterate.length; i++) iterate[i] = i;

  return (
    <>
      <h1 className="text-xl font-suiteBold mb-4">다양한 아이디어를 확인해보세요</h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
        {iterate.map((val) => (
          <CollectionItem itemId={val} />
        ))}
      </div>
    </>
  );
}
