// src/app/components/Carousel.js
"use client"; // Marca este componente como um Client Component

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';

export default function Carousel({ slides }) {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {slides.map((slide, index) => (
          <div className="embla__slide" key={index}>
            <img
              src={slide}
              alt={`Slide ${index + 1}`}
              className="w-full h-64 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}