import React, { useState } from 'react';
import './info.scss';

const slides = [
  {
    id: 1,
    image: '/picture/sky1.png',
    title: 'The rise of quantum computing: A paradigm shift in technology',
    text: 'Quantum computing, once relegated to the realm of science fiction, is now becoming a tangible reality, promising to revolutionize the way we process information.',
    author: {
      name: 'Paul J. Yarnell',
      avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
      date: '24 Feb. 2024',
    },
  },
  {
    id: 2,
    image: '/picture/sky2.jpg',
    title: 'Exploring the Depths of the Mariana Trench',
    text: 'Recent expeditions have unveiled new species and geological formations, challenging our understanding of life in extreme environments.',
    author: {
      name: 'Jane Doe',
      avatar: 'https://randomuser.me/api/portraits/women/75.jpg',
      date: '15 Mar. 2024',
    },
  },
  {
    id: 3,
    image: '/picture/sky3.jpg',
    title: 'The Future of Artificial Intelligence and Machine Learning',
    text: 'AI is not just about robots; it\'s about creating systems that can learn, adapt, and make decisions, impacting everything from healthcare to finance.',
    author: {
      name: 'John Smith',
      avatar: 'https://randomuser.me/api/portraits/men/76.jpg',
      date: '02 Apr. 2024',
    },
  },
  {
    id: 4,
    image: '/picture/網購網站.jpeg',
    title: 'Aesthetic Online Shopping Experience',
    text: 'Modern e-commerce platforms focus on visual appeal and user experience to attract and retain customers, using high-quality imagery and intuitive navigation.',
    author: {
      name: 'Alice Johnson',
      avatar: 'https://randomuser.me/api/portraits/women/76.jpg',
      date: '18 May. 2024',
    },
  },
  {
    id: 5,
    image: '/picture/圖片輪換.jpeg',
    title: 'Dynamic Image Carousels in Web Design',
    text: 'Carousels are a popular feature for showcasing multiple images or products in a compact space, providing an interactive element for users.',
    author: {
      name: 'Mark Williams',
      avatar: 'https://randomuser.me/api/portraits/men/77.jpg',
      date: '29 June. 2024',
    },
  },
];

const Info = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const currentSlide = slides[currentIndex];

  return (
    <div className="info-background">
      <div className="card">
        <div className="card__number">{currentSlide.id}</div>
        <div className="card__image-container">
          <img src={currentSlide.image} alt={currentSlide.title} />
        </div>
        <div className="card__content">
          <h2 className="card__title">{currentSlide.title}</h2>
          <p className="card__text">{currentSlide.text}</p>
          <div className="card__footer">
            <div className="card__author">
              <img className="card__author-avatar" src={currentSlide.author.avatar} alt={currentSlide.author.name} />
              <div className="card__author-info">
                <span className="card__author-name">{currentSlide.author.name}</span>
                <span className="card__author-date">{currentSlide.author.date}</span>
              </div>
            </div>
            <div className="card__share">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line></svg>
            </div>
          </div>
        </div>
        <div className="card__nav card__nav--prev" onClick={handlePrev}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </div>
        <div className="card__nav card__nav--next" onClick={handleNext}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </div>
        <div className="card__pagination">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`dot ${currentIndex === index ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>
      <div className="share-menu">
        <div className="share-menu__socials">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-1.308c0-1.764 1.259-2.692 3.333-2.692h1.667v2z"></path></svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2.25 15.625h-2.5v-6.25h2.5v6.25zm-1.25-7.062c-.733 0-1.328-.596-1.328-1.328s.595-1.328 1.328-1.328c.732 0 1.328.596 1.328 1.328s-.596 1.328-1.328 1.328zm6.5 7.062h-2.5v-3.088c0-.737-.013-1.684-1.025-1.684-1.026 0-1.185.801-1.185 1.63v3.142h-2.5v-6.25h2.4v1.097h.034c.333-.63 1.144-1.297 2.368-1.297 2.533 0 2.999 1.668 2.999 3.837v4.413z"></path></svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.355 9.381c.001.127.001.253.001.381 0 3.882-2.956 8.359-8.359 8.359-1.661 0-3.208-.487-4.509-1.322 1.488.178 2.978-.268 4.175-1.141-1.382-.025-2.55-1.037-2.964-2.422.483.091.979.074 1.459-.056-1.442-.292-2.527-1.685-2.527-3.248v-.042c.425.236.91.378 1.425.394-.847-.568-1.402-1.536-1.402-2.659 0-.586.158-1.143.438-1.636 1.554 1.902 3.876 3.156 6.479 3.282-.054-.232-.083-.474-.083-.722 0-1.749 1.42-3.17 3.17-3.17.912 0 1.733.385 2.311 1.002.721-.141 1.401-.406 2.013-.769-.238.739-.739 1.355-1.393 1.746.64-.077 1.255-.246 1.828-.501-.426.634-.959 1.192-1.594 1.654z"></path></svg>
        </div>
        <div className="share-menu__share">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line></svg>
        </div>
      </div>
    </div>
  );
};

export default Info;
