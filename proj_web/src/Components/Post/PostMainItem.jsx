import React from 'react';

export default function PostMainItem({ src }) {
  return (
    <div>
      <img className="h-auto max-w-full rounded-lg" src={src} alt="" />
    </div>
  );
}
