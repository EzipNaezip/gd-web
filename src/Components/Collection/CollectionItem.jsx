import React from 'react';
import { Link } from 'react-router-dom';

export default function CollectionItem({ itemId }) {
  return (
    <>
      <Link to="/collection/post">
        <div className="flex-col justify-center max-w-sm">
          <img
            className="transition ease-in rounded-lg shadow-lg hover:opacity-80"
            src="https://picsum.photos/300/300"
            alt="sample"
          />
          <div className="font-suiteLight mt-2 p-1">
            <h1 className="font-suiteBold">Sample Title</h1>
            <p className="text-sm">Sample Description</p>
          </div>
        </div>
      </Link>
    </>
  );
}
