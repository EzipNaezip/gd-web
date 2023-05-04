import React from 'react';

export default function PostSubItem({ src }) {
  return (
    <div>
      <img className="transition ease-in h-auto max-w-full rounded-lg hover:-translate-y-1" src={src} alt="" />
    </div>
  );
}
