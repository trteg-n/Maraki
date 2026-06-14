'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '../../components/ui/AppImage';

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
    <section data-component-id="src/app/components/servicessection.tsx:38:4" data-component-path="src/app/components/servicessection.tsx" data-component-line="38" data-component-end-line="174" data-component-file="servicessection.tsx" data-component-name="section" data-component-content="%7B%22elementName%22%3A%22section%22%2C%22className%22%3A%22relative%20min-h-screen%20bg-bg%20overflow-hidden%20flex%20flex-col%22%7D"
      ref={heroRef}
      className="relative min-h-screen bg-bg overflow-hidden flex flex-col">
      
      {/* Background blobs */}
      <div data-component-id="src/app/components/servicessection.tsx:43:6" data-component-path="src/app/components/servicessection.tsx" data-component-line="43" data-component-end-line="43" data-component-file="servicessection.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22absolute%20top-0%20left-0%20w-96%20h-96%20blob-blush%20opacity-60%20pointer-events-none%22%7D" className="absolute top-0 left-0 w-96 h-96 blob-blush opacity-60 pointer-events-none" />
      <div data-component-id="src/app/components/servicessection.tsx:44:6" data-component-path="src/app/components/servicessection.tsx" data-component-line="44" data-component-end-line="44" data-component-file="servicessection.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22absolute%20bottom-0%20right-0%20w-%5B500px%5D%20h-%5B500px%5D%20blob-coffee%20opacity-40%20pointer-events-none%22%7D" className="absolute bottom-0 right-0 w-[500px] h-[500px] blob-coffee opacity-40 pointer-events-none" />

      {/* Main hero layout — pt accounts for banner (40px) + header (80px) */}
      <div data-component-id="src/app/components/servicessection.tsx:47:6" data-component-path="src/app/components/servicessection.tsx" data-component-line="47" data-component-end-line="167" data-component-file="servicessection.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22relative%20z-10%20flex-1%20max-w-%5B1800px%5D%20mx-auto%20w-full%20px-4%20sm%3Apx-6%20lg%3Apx-8%20pt-36%20pb-16%22%7D" className="relative z-10 flex-1 max-w-[1800px] mx-auto w-full px-4 sm:px-6 lg:px-8 pt-36 pb-16">

        {/* Eyebrow */}
        <div data-component-id="src/app/components/servicessection.tsx:50:8" data-component-path="src/app/components/servicessection.tsx" data-component-line="50" data-component-end-line="61" data-component-file="servicessection.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22hero-reveal%20mb-8%20inline-flex%20items-center%20gap-3%22%7D"
          className="hero-reveal mb-8 inline-flex items-center gap-3"
          style={{ animationDelay: '0.1s' }}>
          
          <span data-component-id="src/app/components/servicessection.tsx:54:10" data-component-path="src/app/components/servicessection.tsx" data-component-line="54" data-component-end-line="57" data-component-file="servicessection.tsx" data-component-name="span" data-component-content="%7B%22elementName%22%3A%22span%22%2C%22className%22%3A%22relative%20flex%20items-center%20gap-2%22%7D" className="relative flex items-center gap-2">
            <span data-component-id="src/app/components/servicessection.tsx:55:12" data-component-path="src/app/components/servicessection.tsx" data-component-line="55" data-component-end-line="55" data-component-file="servicessection.tsx" data-component-name="span" data-component-content="%7B%22elementName%22%3A%22span%22%2C%22className%22%3A%22block%20w-2%20h-2%20rounded-full%20bg-blush%20animate-pulse-ring%22%7D" className="block w-2 h-2 rounded-full bg-blush animate-pulse-ring" />
            <span data-component-id="src/app/components/servicessection.tsx:56:12" data-component-path="src/app/components/servicessection.tsx" data-component-line="56" data-component-end-line="56" data-component-file="servicessection.tsx" data-component-name="span" data-component-content="%7B%22elementName%22%3A%22span%22%2C%22className%22%3A%22block%20w-2%20h-2%20rounded-full%20bg-blush%20absolute%22%7D" className="block w-2 h-2 rounded-full bg-blush absolute" />
          </span>
          <span data-component-id="src/app/components/servicessection.tsx:58:10" data-component-path="src/app/components/servicessection.tsx" data-component-line="58" data-component-end-line="60" data-component-file="servicessection.tsx" data-component-name="span" data-component-content="%7B%22elementName%22%3A%22span%22%2C%22className%22%3A%22text-xs%20font-bold%20uppercase%20tracking-%5B0.5em%5D%20text-shade%22%2C%22textContent%22%3A%22Maraki%20Ladies%20Salon%22%7D" className="text-xs font-bold uppercase tracking-[0.5em] text-shade">
            Maraki Ladies Salon
          </span>
        </div>

        {/* Headline */}
        <div data-component-id="src/app/components/servicessection.tsx:64:8" data-component-path="src/app/components/servicessection.tsx" data-component-line="64" data-component-end-line="79" data-component-file="servicessection.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22mb-10%22%7D" className="mb-10">
          <div data-component-id="src/app/components/servicessection.tsx:65:10" data-component-path="src/app/components/servicessection.tsx" data-component-line="65" data-component-end-line="78" data-component-file="servicessection.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22flex%20flex-col%20lg%3Aflex-row%20lg%3Aitems-end%20lg%3Ajustify-between%20gap-6%22%7D" className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h1 data-component-id="src/app/components/servicessection.tsx:66:12" data-component-path="src/app/components/servicessection.tsx" data-component-line="66" data-component-end-line="72" data-component-file="servicessection.tsx" data-component-name="h1" data-component-content="%7B%22elementName%22%3A%22h1%22%2C%22className%22%3A%22font-display%20text-hero-xl%20text-ink%20leading-none%20hero-reveal%22%2C%22textContent%22%3A%22Pampered%20Hair%20Services%22%7D"
              className="font-display text-hero-xl text-ink leading-none hero-reveal"
              style={{ animationDelay: '0.2s' }}>
              Pampered Hair<br data-component-id="src/app/components/servicessection.tsx:69:27" data-component-path="src/app/components/servicessection.tsx" data-component-line="69" data-component-end-line="69" data-component-file="servicessection.tsx" data-component-name="br" data-component-content="%7B%22elementName%22%3A%22br%22%7D" />
              <span data-component-id="src/app/components/servicessection.tsx:70:14" data-component-path="src/app/components/servicessection.tsx" data-component-line="70" data-component-end-line="70" data-component-file="servicessection.tsx" data-component-name="span" data-component-content="%7B%22elementName%22%3A%22span%22%2C%22className%22%3A%22text-coffee%20italic%22%2C%22textContent%22%3A%22%26%20Beauty%22%7D" className="text-coffee italic">&amp; Beauty</span><br data-component-id="src/app/components/servicessection.tsx:70:70" data-component-path="src/app/components/servicessection.tsx" data-component-line="70" data-component-end-line="70" data-component-file="servicessection.tsx" data-component-name="br" data-component-content="%7B%22elementName%22%3A%22br%22%7D" />
              Services
            </h1>
            <p data-component-id="src/app/components/servicessection.tsx:73:12" data-component-path="src/app/components/servicessection.tsx" data-component-line="73" data-component-end-line="77" data-component-file="servicessection.tsx" data-component-name="p" data-component-content="%7B%22elementName%22%3A%22p%22%2C%22className%22%3A%22hero-reveal%20lg%3Amax-w-sm%20text-base%20sm%3Atext-lg%20text-ink%2F60%20font-normal%20leading-relaxed%20mb-2%20lg%3Apb-4%22%2C%22textContent%22%3A%22Your%20beauty%2C%20our%20passion.%20Experience%20the%20art%20of%20transformation%20at%20Maraki%20Ladies%20Salon%2C%20where%20we%20blend%20creativity%20and%20expertise%20to%20enhance%20your%20natural%20beauty.%22%7D"
              className="hero-reveal lg:max-w-sm text-base sm:text-lg text-ink/60 font-normal leading-relaxed mb-2 lg:pb-4"
              style={{ animationDelay: '0.5s' }}>
              Your beauty, our passion. Experience the art of transformation at Maraki Ladies Salon, where we blend creativity and expertise to enhance your natural beauty.
            </p>
          </div>
        </div>

        {/* CTA row */}
        <div data-component-id="src/app/components/servicessection.tsx:82:8" data-component-path="src/app/components/servicessection.tsx" data-component-line="82" data-component-end-line="96" data-component-file="servicessection.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22hero-reveal%20flex%20flex-col%20sm%3Aflex-row%20items-start%20sm%3Aitems-center%20gap-4%20mb-16%22%7D"
          className="hero-reveal flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-16"
          style={{ animationDelay: '0.65s' }}>
          
          <button data-component-id="src/app/components/servicessection.tsx:86:10" data-component-path="src/app/components/servicessection.tsx" data-component-line="86" data-component-end-line="88" data-component-file="servicessection.tsx" data-component-name="button" data-component-content="%7B%22elementName%22%3A%22button%22%2C%22className%22%3A%22btn-primary%22%2C%22textContent%22%3A%22Book%20Appointment%22%7D" onClick={handleBookClick} className="btn-primary">
            Book Appointment
          </button>
          <button data-component-id="src/app/components/servicessection.tsx:89:10" data-component-path="src/app/components/servicessection.tsx" data-component-line="89" data-component-end-line="95" data-component-file="servicessection.tsx" data-component-name="button" data-component-content="%7B%22elementName%22%3A%22button%22%2C%22className%22%3A%22flex%20items-center%20gap-3%20text-xs%20font-bold%20uppercase%20tracking-%5B0.3em%5D%20text-ink%2F60%20hover%3Atext-ink%20transition-colors%20group%22%2C%22textContent%22%3A%22Explore%20Services%22%7D"
            onClick={handleServicesClick}
            className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-ink/60 hover:text-ink transition-colors group">
            
            <span data-component-id="src/app/components/servicessection.tsx:93:12" data-component-path="src/app/components/servicessection.tsx" data-component-line="93" data-component-end-line="93" data-component-file="servicessection.tsx" data-component-name="span" data-component-content="%7B%22elementName%22%3A%22span%22%2C%22className%22%3A%22w-12%20h-px%20bg-ink%2F30%20group-hover%3Abg-ink%20group-hover%3Aw-16%20transition-all%20duration-300%22%7D" className="w-12 h-px bg-ink/30 group-hover:bg-ink group-hover:w-16 transition-all duration-300" />
            Explore Services
          </button>
        </div>

        {/* Grand Opening Card */}
        <div data-component-id="src/app/components/servicessection.tsx:99:8" data-component-path="src/app/components/servicessection.tsx" data-component-line="99" data-component-end-line="110" data-component-file="servicessection.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22hero-reveal%20mb-10%20bg-vanilla%20border%20border-blush%20rounded-3xl%20px-6%20py-5%20flex%20flex-col%20sm%3Aflex-row%20items-start%20sm%3Aitems-center%20gap-4%20shadow-md%22%7D"
          className="hero-reveal mb-10 bg-vanilla border border-blush rounded-3xl px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 shadow-md"
          style={{ animationDelay: '0.75s' }}>
          <div data-component-id="src/app/components/servicessection.tsx:102:10" data-component-path="src/app/components/servicessection.tsx" data-component-line="102" data-component-end-line="104" data-component-file="servicessection.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22flex-shrink-0%20w-14%20h-14%20rounded-2xl%20bg-blush%20flex%20items-center%20justify-center%20text-2xl%22%2C%22textContent%22%3A%22%F0%9F%8E%80%22%7D" className="flex-shrink-0 w-14 h-14 rounded-2xl bg-blush flex items-center justify-center text-2xl">
            🎀
          </div>
          <div data-component-id="src/app/components/servicessection.tsx:105:10" data-component-path="src/app/components/servicessection.tsx" data-component-line="105" data-component-end-line="109" data-component-file="servicessection.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%7D">
            <p data-component-id="src/app/components/servicessection.tsx:106:12" data-component-path="src/app/components/servicessection.tsx" data-component-line="106" data-component-end-line="106" data-component-file="servicessection.tsx" data-component-name="p" data-component-content="%7B%22elementName%22%3A%22p%22%2C%22className%22%3A%22text-xs%20font-bold%20uppercase%20tracking-%5B0.4em%5D%20text-shade%20mb-1%22%2C%22textContent%22%3A%22Grand%20Opening%22%7D" className="text-xs font-bold uppercase tracking-[0.4em] text-shade mb-1">Grand Opening</p>
            <p data-component-id="src/app/components/servicessection.tsx:107:12" data-component-path="src/app/components/servicessection.tsx" data-component-line="107" data-component-end-line="107" data-component-file="servicessection.tsx" data-component-name="p" data-component-content="%7B%22elementName%22%3A%22p%22%2C%22className%22%3A%22font-display%20text-xl%20font-semibold%20text-ink%22%2C%22textContent%22%3A%22Saturday%2C%2021st%20June%202026%22%7D" className="font-display text-xl font-semibold text-ink">Saturday, 21st June 2026</p>
            <p data-component-id="src/app/components/servicessection.tsx:108:12" data-component-path="src/app/components/servicessection.tsx" data-component-line="108" data-component-end-line="108" data-component-file="servicessection.tsx" data-component-name="p" data-component-content="%7B%22elementName%22%3A%22p%22%2C%22className%22%3A%22text-sm%20text-ink%2F60%20mt-0.5%22%2C%22textContent%22%3A%22Join%20us%20for%20our%20official%20opening%20day%20%E2%80%94%20special%20offers%2C%20complimentary%20treatments%20%26%20more%20await%20you!%22%7D" className="text-sm text-ink/60 mt-0.5">Join us for our official opening day — special offers, complimentary treatments &amp; more await you!</p>
          </div>
        </div>

        {/* Main image + stats grid */}
        <div data-component-id="src/app/components/servicessection.tsx:113:8" data-component-path="src/app/components/servicessection.tsx" data-component-line="113" data-component-end-line="166" data-component-file="servicessection.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22hero-reveal%20grid%20lg%3Agrid-cols-12%20gap-4%20lg%3Agap-6%22%7D"
          className="hero-reveal grid lg:grid-cols-12 gap-4 lg:gap-6"
          style={{ animationDelay: '0.8s' }}>
          
          {/* Big hero image */}
          <div data-component-id="src/app/components/servicessection.tsx:118:10" data-component-path="src/app/components/servicessection.tsx" data-component-line="118" data-component-end-line="144" data-component-file="servicessection.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22lg%3Acol-span-8%20relative%20overflow-hidden%20rounded-3xl%20group%20h-%5B50vw%5D%20min-h-%5B300px%5D%20max-h-%5B680px%5D%22%7D" className="lg:col-span-8 relative overflow-hidden rounded-3xl group h-[50vw] min-h-[300px] max-h-[680px]">
            <div data-component-id="src/app/components/servicessection.tsx:119:12" data-component-path="src/app/components/servicessection.tsx" data-component-line="119" data-component-end-line="128" data-component-file="servicessection.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22absolute%20inset-0%20scale-110%22%7D" ref={parallaxRef} className="absolute inset-0 scale-110">
              <AppImage data-component-id="src/app/components/servicessection.tsx:120:14" data-component-path="src/app/components/servicessection.tsx" data-component-line="120" data-component-end-line="126" data-component-file="servicessection.tsx" data-component-name="AppImage" data-component-content="%7B%22elementName%22%3A%22AppImage%22%2C%22src%22%3A%22https%3A%2F%2Fimages.unsplash.com%2Fphoto-1616604602676-9b36b3c46c18%22%2C%22alt%22%3A%22Salon%20stylist%20working%20on%20a%20client's%20hair%20in%20a%20warm%2C%20softly%20lit%20studio%20environment%22%2C%22className%22%3A%22object-cover%20img-zoom%22%7D"
                src="https://images.unsplash.com/photo-1616604602676-9b36b3c46c18"
                alt="Salon stylist working on a client's hair in a warm, softly lit studio environment"
                fill
                sizes="(max-width: 768px) 100vw, 66vw"
                priority
                className="object-cover img-zoom" />
              
            </div>
            {/* Scrim */}
            <div data-component-id="src/app/components/servicessection.tsx:130:12" data-component-path="src/app/components/servicessection.tsx" data-component-line="130" data-component-end-line="130" data-component-file="servicessection.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22absolute%20inset-0%20scrim-bottom%22%7D" className="absolute inset-0 scrim-bottom" />

            {/* Floating badge */}
            <div data-component-id="src/app/components/servicessection.tsx:133:12" data-component-path="src/app/components/servicessection.tsx" data-component-line="133" data-component-end-line="136" data-component-file="servicessection.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22absolute%20bottom-6%20left-6%20bg-vanilla%2F90%20backdrop-blur-md%20rounded-2xl%20px-5%20py-4%20shadow-lg%22%7D" className="absolute bottom-6 left-6 bg-vanilla/90 backdrop-blur-md rounded-2xl px-5 py-4 shadow-lg">
              <p data-component-id="src/app/components/servicessection.tsx:134:14" data-component-path="src/app/components/servicessection.tsx" data-component-line="134" data-component-end-line="134" data-component-file="servicessection.tsx" data-component-name="p" data-component-content="%7B%22elementName%22%3A%22p%22%2C%22className%22%3A%22text-xs%20font-bold%20uppercase%20tracking-%5B0.3em%5D%20text-shade%20mb-1%22%2C%22textContent%22%3A%22This%20Season%22%7D" className="text-xs font-bold uppercase tracking-[0.3em] text-shade mb-1">This Season</p>
              <p data-component-id="src/app/components/servicessection.tsx:135:14" data-component-path="src/app/components/servicessection.tsx" data-component-line="135" data-component-end-line="135" data-component-file="servicessection.tsx" data-component-name="p" data-component-content="%7B%22elementName%22%3A%22p%22%2C%22className%22%3A%22font-display%20text-lg%20font-semibold%20text-ink%22%2C%22textContent%22%3A%22Copper%20%26%20Wheat%20Tones%22%7D" className="font-display text-lg font-semibold text-ink">Copper & Wheat Tones</p>
            </div>

            {/* Play button */}
            <button data-component-id="src/app/components/servicessection.tsx:139:12" data-component-path="src/app/components/servicessection.tsx" data-component-line="139" data-component-end-line="143" data-component-file="servicessection.tsx" data-component-name="button" data-component-content="%7B%22elementName%22%3A%22button%22%2C%22className%22%3A%22absolute%20top-1%2F2%20left-1%2F2%20-translate-x-1%2F2%20-translate-y-1%2F2%20w-20%20h-20%20bg-vanilla%2F90%20backdrop-blur-sm%20rounded-full%20flex%20items-center%20justify-center%20opacity-0%20group-hover%3Aopacity-100%20transition-all%20duration-500%20hover%3Ascale-110%20spring-hover%20shadow-xl%22%7D" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-vanilla/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 hover:scale-110 spring-hover shadow-xl">
              <svg data-component-id="src/app/components/servicessection.tsx:140:14" data-component-path="src/app/components/servicessection.tsx" data-component-line="140" data-component-end-line="142" data-component-file="servicessection.tsx" data-component-name="svg" data-component-content="%7B%22elementName%22%3A%22svg%22%2C%22className%22%3A%22w-8%20h-8%20fill-ink%20ml-1%22%7D" viewBox="0 0 24 24" className="w-8 h-8 fill-ink ml-1">
                <path data-component-id="src/app/components/servicessection.tsx:141:16" data-component-path="src/app/components/servicessection.tsx" data-component-line="141" data-component-end-line="141" data-component-file="servicessection.tsx" data-component-name="path" data-component-content="%7B%22elementName%22%3A%22path%22%7D" d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>

          {/* Right stats panel */}
          <div data-component-id="src/app/components/servicessection.tsx:147:10" data-component-path="src/app/components/servicessection.tsx" data-component-line="147" data-component-end-line="165" data-component-file="servicessection.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22lg%3Acol-span-4%20flex%20flex-col%20gap-4%22%7D" className="lg:col-span-4 flex flex-col gap-4">
            {/* Stat 1 */}
            <div data-component-id="src/app/components/servicessection.tsx:149:12" data-component-path="src/app/components/servicessection.tsx" data-component-line="149" data-component-end-line="152" data-component-file="servicessection.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22bg-vanilla%20rounded-3xl%20p-6%20sm%3Ap-8%20flex-1%20border%20border-border%20spring-hover%22%7D" className="bg-vanilla rounded-3xl p-6 sm:p-8 flex-1 border border-border spring-hover">
              <p data-component-id="src/app/components/servicessection.tsx:150:14" data-component-path="src/app/components/servicessection.tsx" data-component-line="150" data-component-end-line="150" data-component-file="servicessection.tsx" data-component-name="p" data-component-content="%7B%22elementName%22%3A%22p%22%2C%22className%22%3A%22font-display%20text-5xl%20sm%3Atext-6xl%20font-black%20text-ink%20leading-none%20mb-2%22%2C%22textContent%22%3A%222%2C400%2B%22%7D" className="font-display text-5xl sm:text-6xl font-black text-ink leading-none mb-2">2,400+</p>
              <p data-component-id="src/app/components/servicessection.tsx:151:14" data-component-path="src/app/components/servicessection.tsx" data-component-line="151" data-component-end-line="151" data-component-file="servicessection.tsx" data-component-name="p" data-component-content="%7B%22elementName%22%3A%22p%22%2C%22className%22%3A%22text-xs%20font-bold%20uppercase%20tracking-%5B0.35em%5D%20text-shade%22%2C%22textContent%22%3A%22Happy%20Clients%22%7D" className="text-xs font-bold uppercase tracking-[0.35em] text-shade">Happy Clients</p>
            </div>

            {/* Stat 2 */}
            <div data-component-id="src/app/components/servicessection.tsx:155:12" data-component-path="src/app/components/servicessection.tsx" data-component-line="155" data-component-end-line="158" data-component-file="servicessection.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22bg-blush%20rounded-3xl%20p-6%20sm%3Ap-8%20flex-1%20spring-hover%22%7D" className="bg-blush rounded-3xl p-6 sm:p-8 flex-1 spring-hover">
              <p data-component-id="src/app/components/servicessection.tsx:156:14" data-component-path="src/app/components/servicessection.tsx" data-component-line="156" data-component-end-line="156" data-component-file="servicessection.tsx" data-component-name="p" data-component-content="%7B%22elementName%22%3A%22p%22%2C%22className%22%3A%22font-display%20text-5xl%20sm%3Atext-6xl%20font-black%20text-ink%20leading-none%20mb-2%22%2C%22textContent%22%3A%2212%22%7D" className="font-display text-5xl sm:text-6xl font-black text-ink leading-none mb-2">12</p>
              <p data-component-id="src/app/components/servicessection.tsx:157:14" data-component-path="src/app/components/servicessection.tsx" data-component-line="157" data-component-end-line="157" data-component-file="servicessection.tsx" data-component-name="p" data-component-content="%7B%22elementName%22%3A%22p%22%2C%22className%22%3A%22text-xs%20font-bold%20uppercase%20tracking-%5B0.35em%5D%20text-ink%2F60%22%2C%22textContent%22%3A%22Years%20of%20Excellence%22%7D" className="text-xs font-bold uppercase tracking-[0.35em] text-ink/60">Years of Excellence</p>
            </div>

            {/* Stat 3 */}
            <div data-component-id="src/app/components/servicessection.tsx:161:12" data-component-path="src/app/components/servicessection.tsx" data-component-line="161" data-component-end-line="164" data-component-file="servicessection.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22bg-coffee%20rounded-3xl%20p-6%20sm%3Ap-8%20flex-1%20spring-hover%22%7D" className="bg-coffee rounded-3xl p-6 sm:p-8 flex-1 spring-hover">
              <p data-component-id="src/app/components/servicessection.tsx:162:14" data-component-path="src/app/components/servicessection.tsx" data-component-line="162" data-component-end-line="162" data-component-file="servicessection.tsx" data-component-name="p" data-component-content="%7B%22elementName%22%3A%22p%22%2C%22className%22%3A%22font-display%20text-5xl%20sm%3Atext-6xl%20font-black%20text-vanilla%20leading-none%20mb-2%22%2C%22textContent%22%3A%2298%25%22%7D" className="font-display text-5xl sm:text-6xl font-black text-vanilla leading-none mb-2">98%</p>
              <p data-component-id="src/app/components/servicessection.tsx:163:14" data-component-path="src/app/components/servicessection.tsx" data-component-line="163" data-component-end-line="163" data-component-file="servicessection.tsx" data-component-name="p" data-component-content="%7B%22elementName%22%3A%22p%22%2C%22className%22%3A%22text-xs%20font-bold%20uppercase%20tracking-%5B0.35em%5D%20text-vanilla%2F70%22%2C%22textContent%22%3A%22Client%20Retention%22%7D" className="text-xs font-bold uppercase tracking-[0.35em] text-vanilla/70">Client Retention</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div data-component-id="src/app/components/servicessection.tsx:170:6" data-component-path="src/app/components/servicessection.tsx" data-component-line="170" data-component-end-line="173" data-component-file="servicessection.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22absolute%20bottom-8%20left-1%2F2%20-translate-x-1%2F2%20flex%20flex-col%20items-center%20gap-2%20animate-float-y%22%7D" className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float-y">
        <span data-component-id="src/app/components/servicessection.tsx:171:8" data-component-path="src/app/components/servicessection.tsx" data-component-line="171" data-component-end-line="171" data-component-file="servicessection.tsx" data-component-name="span" data-component-content="%7B%22elementName%22%3A%22span%22%2C%22className%22%3A%22text-%5B10px%5D%20font-bold%20uppercase%20tracking-%5B0.5em%5D%20text-ink%2F30%22%2C%22textContent%22%3A%22Scroll%22%7D" className="text-[10px] font-bold uppercase tracking-[0.5em] text-ink/30">Scroll</span>
        <div data-component-id="src/app/components/servicessection.tsx:172:8" data-component-path="src/app/components/servicessection.tsx" data-component-line="172" data-component-end-line="172" data-component-file="servicessection.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22w-px%20h-12%20bg-gradient-to-b%20from-ink%2F30%20to-transparent%22%7D" className="w-px h-12 bg-gradient-to-b from-ink/30 to-transparent" />
      </div>
    </section>);

}