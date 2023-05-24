import React from 'react';
import GalleryCard from './GalleryCard';

export default function MainGallery({ isMain }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-2">
      <div className="grid gap-2">
        <GalleryCard url="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" isMain={isMain} />
        <GalleryCard url="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" isMain={isMain} />
        <GalleryCard url="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" isMain={isMain} />
      </div>
      <div className="grid gap-2">
        <GalleryCard url="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" isMain={isMain} />
        <GalleryCard url="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" isMain={isMain} />
        <GalleryCard url="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" isMain={isMain} />
      </div>
      <div className="grid gap-2">
        <GalleryCard url="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" isMain={isMain} />
        <GalleryCard url="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" isMain={isMain} />
        <GalleryCard url="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" isMain={isMain} />
      </div>
      <div className="grid gap-2">
        <GalleryCard url="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" isMain={isMain} />
        <GalleryCard url="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" isMain={isMain} />
        <GalleryCard url="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" isMain={isMain} />
      </div>
    </div>
  );
}
