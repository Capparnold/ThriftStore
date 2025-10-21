// src/components/ImageCarousel.jsx
import { useState, useEffect } from "react";

const images = [
  "/img.webp",
  "/img2.webp",
  "/img3.webp",
];

export default function ImageCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-64 md:h-96 overflow-hidden rounded-lg shadow-md">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt=""
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <span
            key={i}
            className={`w-3 h-3 rounded-full ${
              current === i ? "bg-white" : "bg-gray-400"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
}