import React, { useState, useEffect } from 'react';
import { backgroundmg, one, two, three } from '../images';

const images = [backgroundmg, one, two];

const Header = ({ titles, type }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const textInterval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(textInterval);
  }, [titles.length]);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(imageInterval);
  }, []);

  return (
    <div className="w-full h-[100vh]">
      <div className="relative w-full h-full">
        <img
          src={images[currentImageIndex]}
          alt="Hero Image"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute w-full h-full bg-gradient-to-t from-black to-transparent top-0 z-8 flex flex-col items-center justify-center pt-40 2xl:pt-20 px-4">
        <h1 className="text-white text-4xl md:text-5xl font-bold text-center">
          {titles[currentTextIndex]}
        </h1>
      </div>
    </div>
  );
};

export default Header;
