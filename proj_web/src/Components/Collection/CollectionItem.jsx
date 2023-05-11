import React from 'react';

export default function CollectionItem({ itemId }) {
  return (
    <>
      <div className="flex-col justify-center max-w-sm">
        <img
          className="transition ease-in rounded-lg shadow-lg hover:opacity-80"
          src="https://picsum.photos/300/300"
          alt="sample"
        />
        <div className="font-suiteLight mt-2 p-1">
          <h1 className="font-suiteBold">Sample Title</h1>
          <p>Sample Description</p>
        </div>
      </div>
    </>
  );
}
