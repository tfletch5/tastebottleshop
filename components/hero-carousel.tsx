"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "Fine Wine Collection",
    subtitle: "Discover exceptional wines from around the world",
    image: "/images/IMG_0551.jpg",
  },
  {
    id: 2,
    title: "Premium Spirits",
    subtitle: "Rare bourbons and craft spirits",
    image: "/images/IMG_0552.jpg",
  },
  {
    id: 3,
    title: "Craft Beer Selection",
    subtitle: "Local and imported craft beers",
    image: "/images/IMG_0553.jpg",
  },
];

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
            quality={90}
          />
          <div className="absolute inset-0 bg-black/40" />

          <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
            <div className="max-w-5xl bg-black/65 backdrop-blur-sm p-16 rounded-2xl">
              <p className="text-2xl md:text-3xl font-light text-white/90 mb-2 tracking-wide animate-fade-in uppercase">
                Taste the Difference
              </p>
              <h1 className="text-6xl md:text-8xl font-bold text-[#990000] mb-4 tracking-tight animate-fade-in">
                Taste Bottle Shop
              </h1>
              <div className="h-1 w-32 bg-white/80 mx-auto mb-8"></div>
              <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6 animate-fade-in">
                {slide.title}
              </h2>
              <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in-delay">
                {slide.subtitle}
              </p>
              <div className="animate-fade-in-delay">
                <a
                  href="#visit"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#990000] rounded-full font-semibold text-lg hover:bg-red-50 transition-all transform hover:scale-105 shadow-xl"
                >
                  Visit Us Today
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? "bg-white w-8"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
    </div>
  );
}
