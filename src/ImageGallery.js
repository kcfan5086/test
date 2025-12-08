import React, { useState, useRef, useEffect } from 'react';
import './ImageGallery.css';
import { Link } from 'react-router-dom';

const images = [
  '/picture/sky1.png',
  '/picture/sky2.jpg',
  '/picture/sky3.jpg',
  '/picture/sky1.png',
  '/picture/sky2.jpg',
  '/picture/sky3.jpg',
  '/picture/sky1.png',
  '/picture/sky2.jpg',
  '/picture/sky3.jpg',
  '/picture/sky1.png',
  '/picture/sky2.jpg',
  '/picture/sky3.jpg',
  '/picture/sky1.png',
  '/picture/sky2.jpg',
  '/picture/sky3.jpg',
  '/picture/sky1.png',
  '/picture/sky2.jpg',
  '/picture/sky3.jpg',
];

const ImageGallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const stripRef = useRef(null);
  const thumbRefs = useRef([]);

  const selectImage = (index) => {
    setSelectedIndex(index);
  };

  const nextImage = () => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setSelectedIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // 每次 selectedIndex 改變就將該縮圖置中
  useEffect(() => {
    const container = stripRef.current;
    const thumb = thumbRefs.current[selectedIndex];
    if (!container || !thumb) return;

    // 計算要 scroll 的 left，讓 thumb 的中點與 container 中點對齊
    const scrollLeft = thumb.offsetLeft - container.clientWidth / 2 + thumb.clientWidth / 2 - 350;
    container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
  }, [selectedIndex]);

  return (
    <div className="gallery-container">
      <Link to="/" className="link">回到首頁</Link>
      <div className="main-image-view">
        <button className="nav-arrow prev-arrow" onClick={prevImage} aria-label="Previous">&#10094;</button>
        <img src={images[selectedIndex]} alt={`Selected ${selectedIndex + 1}`} className="main-image" />
        <button className="nav-arrow next-arrow" onClick={nextImage} aria-label="Next">&#10095;</button>
      </div>

      <div className="thumbnail-strip" ref={stripRef}>
        {images.map((image, index) => (
          <img
            key={index}
            ref={(el) => (thumbRefs.current[index] = el)}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            className={`thumbnail-image ${selectedIndex === index ? 'active' : ''}`}
            onClick={() => selectImage(index)}
            draggable={false}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;