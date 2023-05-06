import React from 'react';
import { Carousel } from 'flowbite-react';

export default function PostCarousel({ images }) {
  return (
    <>
      <div className="mb-4 h-80 sm:h-96">
        <Carousel>
          {images.map((image) => {
            return <img src={image.src} alt="..." />;
          })}
        </Carousel>
      </div>
    </>
  );
}
