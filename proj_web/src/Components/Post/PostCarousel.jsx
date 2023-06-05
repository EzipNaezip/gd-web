import React from 'react';
import { Carousel } from 'flowbite-react';

export default function PostCarousel({ images, onImageHandler }) {
  return (
    <>
      <Carousel className="h-64 sm:h-[30rem]">
        {images.map((image) => {
          return <img onClick={onImageHandler} src={image.src} alt="..." />;
        })}
      </Carousel>
    </>
  );
}
