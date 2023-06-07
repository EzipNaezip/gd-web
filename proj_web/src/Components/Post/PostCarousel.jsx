import React from 'react';
import { Carousel } from 'flowbite';

export default function PostCarousel({ images, onImageHandler }) {
  const baseURL = 'http://api.ezipnaezip.life:8080';

  return (
    <>
      <Carousel>
        {images.map((path) => {
          return <img onClick={onImageHandler} src={`${baseURL}${path}`} alt="..." />;
        })}
      </Carousel>
    </>
  );
}
