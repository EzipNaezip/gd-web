import React from 'react';
import { Carousel } from 'flowbite-react';

export default function PostCarousel({ images }) {
  return (
    <>
      <Carousel className="h-80 sm:h-[30rem]">
        {images.map((image) => {
          return <img src={image.src} alt="..." />;
        })}
      </Carousel>
    </>
  );
}
