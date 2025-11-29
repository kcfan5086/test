import React, { useState } from 'react';
import './ImageGallery.css';

const images = [
  '/picture/sky1.png',
  '/picture/sky2.jpg',
  '/picture/sky3.jpg'
];

const ImageGallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const selectImage = (index) => {
    setSelectedIndex(index);
  };

  const nextImage = () => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setSelectedIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="gallery-container">
      <div className="main-image-view">
        <button className="nav-arrow prev-arrow" onClick={prevImage}>&#10094;</button>
        <img src={images[selectedIndex]} alt="Selected" className="main-image" />
        <button className="nav-arrow next-arrow" onClick={nextImage}>&#10095;</button>
      </div>
      <div className="thumbnail-strip">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            className={`thumbnail-image ${selectedIndex === index ? 'active' : ''}`}
            onClick={() => selectImage(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
