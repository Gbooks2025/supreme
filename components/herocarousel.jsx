"use client";
import { ChevronLeft, ChevronRight, Calendar, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const slides = [
    {
      id: 1,
      title: "Your Health, Our Priority",
      subtitle: "World-class healthcare services with expert doctors",
      description: "Experience compassionate care with state-of-the-art facilities and experienced medical professionals.",
      bgGradient: "from-emerald-600 to-cyan-600",
      image: "https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg?semt=ais_hybrid&w=740&q=80", // Add your image path here
      cta: "Book Appointment"
    },
    {
      id: 2,
      title: "Expert Medical Care",
      subtitle: "50+ Specialized Doctors at Your Service",
      description: "Get treatment from board-certified specialists across multiple disciplines.",
      bgGradient: "from-blue-600 to-emerald-600",
      image: "https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg?semt=ais_hybrid&w=740&q=80", // Add your image path here
      cta: "Consult Doctor"
    },
    {
      id: 3,
      title: "24/7 Emergency Care",
      subtitle: "Always Ready to Help You",
      description: "Round-the-clock emergency services with rapid response team.",
      bgGradient: "from-cyan-600 to-blue-600",
      image: "https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg?semt=ais_hybrid&w=740&q=80", // Add your image path here
      cta: "Emergency Call"
    },
    {
      id: 4,
      title: "Modern Diagnostics",
      subtitle: "Latest Medical Technology",
      description: "Advanced imaging and diagnostic tools for accurate results.",
      bgGradient: "from-emerald-500 to-teal-600",
      image: "https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg?semt=ais_hybrid&w=740&q=80", // Add your image path here
      cta: "Book Lab Test"
    }
  ];

  // Auto-play carousel
  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [autoPlay, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setAutoPlay(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setAutoPlay(false);
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Carousel Container */}
      <div className="relative w-full h-full">
        {/* Slides */}
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute w-full h-full transition-all duration-1000 ease-in-out ${
              index === currentSlide
                ? 'opacity-100 translate-x-0'
                : index < currentSlide
                ? 'opacity-0 -translate-x-full'
                : 'opacity-0 translate-x-full'
            }`}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === currentSlide}
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
            </div>

            {/* Content Grid */}
            <div className="relative h-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Left Content */}
                  <div className={`transition-all duration-1000 ${
                    index === currentSlide
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 -translate-x-10'
                  }`}>
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6">
                      <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
                      <span className="text-sm font-semibold text-white">
                        Welcome to Supreme Healthcare
                      </span>
                    </div>

                    {/* Title */}
                    <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                      {slide.title}
                    </h1>

                    {/* Subtitle */}
                    <h2 className="text-2xl lg:text-3xl font-semibold text-white/90 mb-4">
                      {slide.subtitle}
                    </h2>

                    {/* Description */}
                    <p className="text-lg text-white/80 mb-8 leading-relaxed max-w-md">
                      {slide.description}
                    </p>

                    {/* CTA Button */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link
                        href="/"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-emerald-600 font-semibold rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
                      >
                        <Calendar className="w-5 h-5" />
                        {slide.cta}
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 group"
                      >
                        Contact Us
                      </Link>
                    </div>
                  </div>

                  {/* Right - Image Space (Optional for additional visual) */}
                  <div className="hidden lg:block relative h-full">
                    {/* This space can be used for additional design elements or left empty */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        onMouseEnter={() => setAutoPlay(false)}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-40 w-12 h-12 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-all duration-300 group lg:left-12"
      >
        <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
      </button>

      <button
        onClick={nextSlide}
        onMouseEnter={() => setAutoPlay(false)}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-40 w-12 h-12 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-all duration-300 group lg:right-12"
      >
        <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 flex items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? 'w-10 h-3 bg-white'
                : 'w-3 h-3 bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute top-8 right-8 z-40 text-white font-semibold text-lg bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
        {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
      </div>

      {/* Auto-play Resume Timer */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-40">
        {!autoPlay && (
          <button
            onClick={() => setAutoPlay(true)}
            className="text-white/60 text-sm hover:text-white transition-colors px-3 py-1 rounded-full border border-white/20"
          >
            Resume Auto-play
          </button>
        )}
      </div>
    </section>
  );
}
