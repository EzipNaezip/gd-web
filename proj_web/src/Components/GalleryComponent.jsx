import React from "react";
import GalleryCard from "./Gallery/GalleryCard";

export default function GalleryComponent() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-2">
      <div className="grid gap-2">
        <GalleryCard url="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" />
        <GalleryCard url="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" />
        <GalleryCard url="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" />
      </div>
      <div className="grid gap-2">
        <GalleryCard url="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" />
        <GalleryCard url="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" />
        <GalleryCard url="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" />
      </div>
      <div className="grid gap-2">
        <GalleryCard url="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" />
        <GalleryCard url="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" />
        <GalleryCard url="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" />
      </div>
      <div className="grid gap-2">
        <GalleryCard url="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" />
        <GalleryCard url="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" />
        <GalleryCard url="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" />
      </div>
    </div>
  );
}
