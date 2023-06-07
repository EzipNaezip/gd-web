import React from 'react';
import { Carousel } from 'flowbite-react';

export default function PostCarousel({ images, onImageHandler }) {
  const baseURL = 'http://api.ezipnaezip.life:8080';

  return (
    <>
      <Carousel className="h-80 lg:h-[30rem]" alwaysRender>
        {images.map((path) => {
          return <img onClick={onImageHandler} src={`${baseURL}${path}`} alt="..." />;
        })}
      </Carousel>
    </>
  );
}
