'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef?.current) {
        const container = parallaxRef?.current?.parentElement;
        if (!container) return;
        const rect = container?.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        // Only apply parallax while the container is visible
        if (rect?.bottom < 0 || rect?.top > viewportHeight) return;
        const offset = (rect?.top / viewportHeight) * -40;
        parallaxRef.current.style.transform = `translateY(${offset}px) scale(1.1)`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBookClick = () => {
    const el = document.getElementById('booking');
    if (el) el?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleServicesClick = () => {
    const el = document.getElementById('services');
    if (el) el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen bg-bg overflow-hidden flex flex-col">
      
      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 blob-blush opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] blob-coffee opacity-40 pointer-events-none" />

      {/* Main hero layout — pt accounts for banner (40px) + header (80px) */}
      <div className="relative z-10 flex-1 max-w-[1800px] mx-auto w-full px-4 sm:px-6 lg:px-8 pt-36 pb-16">

        {/* Eyebrow */}
        <div
          className="hero-reveal mb-8 inline-flex items-center gap-3"
          style={{ animationDelay: '0.1s' }}>
          
          <span className="relative flex items-center gap-2">
            <span className="block w-2 h-2 rounded-full bg-blush animate-pulse-ring" />
            <span className="block w-2 h-2 rounded-full bg-blush absolute" />
          </span>
          <span className="text-xs font-bold uppercase tracking-[0.5em] text-shade">
            Maraki Ladies Salon
          </span>
        </div>

        {/* Headline */}
        <div className="mb-10">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h1
              className="font-display text-hero-xl text-ink leading-none hero-reveal"
              style={{ animationDelay: '0.2s' }}>
              Pampered Hair<br />
              <span className="text-coffee italic">&amp; Beauty</span><br />
              Services
            </h1>
            <p
              className="hero-reveal lg:max-w-sm text-base sm:text-lg text-ink/60 font-normal leading-relaxed mb-2 lg:pb-4"
              style={{ animationDelay: '0.5s' }}>
              Your beauty, our passion. Experience the art of transformation at Maraki Ladies Salon, where we blend creativity and expertise to enhance your natural beauty.
            </p>
          </div>
        </div>

        {/* CTA row */}
        <div
          className="hero-reveal flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-16"
          style={{ animationDelay: '0.65s' }}>
          
          <button onClick={handleBookClick} className="btn-primary">
            Book Appointment
          </button>
          <button
            onClick={handleServicesClick}
            className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-ink/60 hover:text-ink transition-colors group">
            
            <span className="w-12 h-px bg-ink/30 group-hover:bg-ink group-hover:w-16 transition-all duration-300" />
            Explore Services
          </button>
        </div>

        {/* Grand Opening Card */}
        <div
          className="hero-reveal mb-10 bg-vanilla border border-blush rounded-3xl px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 shadow-md"
          style={{ animationDelay: '0.75s' }}>
          <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-blush flex items-center justify-center text-2xl">
            🎀
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.4em] text-shade mb-1">Grand Opening</p>
            <p className="font-display text-xl font-semibold text-ink">Saturday, 21st June 2026</p>
            <p className="text-sm text-ink/60 mt-0.5">Join us for our official opening day — special offers, complimentary treatments &amp; more await you!</p>
          </div>
        </div>

        {/* Main image + stats grid */}
        <div
          className="hero-reveal grid lg:grid-cols-12 gap-4 lg:gap-6"
          style={{ animationDelay: '0.8s' }}>
          
          {/* Big hero image */}
          <div className="lg:col-span-8 relative overflow-hidden rounded-3xl group h-[50vw] min-h-[300px] max-h-[680px]">
            <div ref={parallaxRef} className="absolute inset-0 scale-110">
              <AppImage
                src="https://images.unsplash.com/photo-1616604602676-9b36b3c46c18"
                alt="Salon stylist working on a client's hair in a warm, softly lit studio environment"
                fill
                sizes="(max-width: 768px) 100vw, 66vw"
                priority
                className="object-cover img-zoom" />
              
            </div>
            {/* Scrim */}
            <div className="absolute inset-0 scrim-bottom" />

            {/* Floating badge */}
            <div className="absolute bottom-6 left-6 bg-vanilla/90 backdrop-blur-md rounded-2xl px-5 py-4 shadow-lg">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-shade mb-1">This Season</p>
              <p className="font-display text-lg font-semibold text-ink">Copper & Wheat Tones</p>
            </div>

            {/* Play button */}
            <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-vanilla/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 hover:scale-110 spring-hover shadow-xl">
              <svg viewBox="0 0 24 24" className="w-8 h-8 fill-ink ml-1">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>

          {/* Right stats panel */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {/* Stat 1 */}
            <div className="bg-vanilla rounded-3xl p-6 sm:p-8 flex-1 border border-border spring-hover">
              <p className="font-display text-5xl sm:text-6xl font-black text-ink leading-none mb-2">2,400+</p>
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-shade">Happy Clients</p>
            </div>

            {/* Stat 2 */}
            <div className="bg-blush rounded-3xl p-6 sm:p-8 flex-1 spring-hover">
              <p className="font-display text-5xl sm:text-6xl font-black text-ink leading-none mb-2">12</p>
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-ink/60">Years of Excellence</p>
            </div>

            {/* Stat 3 */}
            <div className="bg-coffee rounded-3xl p-6 sm:p-8 flex-1 spring-hover">
              <p className="font-display text-5xl sm:text-6xl font-black text-vanilla leading-none mb-2">98%</p>
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-vanilla/70">Client Retention</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float-y">
        <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-ink/30">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-ink/30 to-transparent" />
      </div>
    </section>);

}