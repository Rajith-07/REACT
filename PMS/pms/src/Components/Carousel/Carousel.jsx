import React, { useState, useEffect } from "react";
import "./Carousel.css";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: "Quality Healthcare",
      description:
        "We provide top-tier medical services with compassion and care.",
      bgColor: "#f0f8ff",
    },
    {
      title: "Advanced Facilities",
      description:
        "State-of-the-art equipment for accurate diagnosis and treatment.",
      bgColor: "#fff0f5",
    },
    {
      title: "Expert Doctors",
      description:
        "Our team consists of highly qualified specialists in various fields.",
      bgColor: "#f0fff0",
    },
  ];

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="carousel">
      <div
        className="slides-container"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="slide"
            style={{ backgroundColor: slide.bgColor }}
          >
            <h2>{slide.title}</h2>
            <p>{slide.description}</p>
            <button className="learn-more">Learn More</button>
          </div>
        ))}
      </div>
      <div className="indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
