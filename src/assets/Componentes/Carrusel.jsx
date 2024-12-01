import React, { useState, useEffect } from 'react';
import '../Estilos/Carrusel.css';
import imagen1 from '../Util/Imagen1.png';
import imagen2 from '../Util/Imagen2.jpeg';
import imagen3 from '../Util/Imagen3.jpeg';
import imagen4 from '../Util/Imagen4.jpeg';


const Carrusel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    imagen1,
    imagen2,
    imagen3,
    imagen4
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // Cambiar cada 10 segundos
    return () => clearInterval(interval);
  }, [images.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="carousel">
      <button className="carousel-button prev" onClick={prevSlide}>❮</button>
      <div className="carousel-images" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Imagen ${index + 1}`}
            className="carousel-image"
          />
        ))}
      </div>
      <button className="carousel-button next" onClick={nextSlide}>❯</button>
    </div>
  );
};

export default Carrusel;