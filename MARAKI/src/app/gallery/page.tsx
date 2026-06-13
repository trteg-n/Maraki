'use client';

import React, { useRef, useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AppImage from '@/components/ui/AppImage';
import Link from 'next/link';

const galleryItems = [
  {
    id: 'g1',
    src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1f997face-1772235633149.png',
    alt: 'Model with stunning copper balayage highlights, warm natural lighting, elegant salon backdrop',
    label: 'Copper Balayage',
    category: 'Colour',
    colSpan: 'md:col-span-2 md:row-span-2',
    height: 'h-72 md:h-full min-h-[420px]',
  },
  {
    id: 'g2',
    src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1d8541d94-1775930656878.png',
    alt: 'Sleek straight blowout on brunette hair, bright airy salon atmosphere',
    label: 'Silk Blowout',
    category: 'Styling',
    colSpan: 'md:col-span-1',
    height: 'h-52 md:h-full',
  },
  {
    id: 'g3',
    src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1cd2f2bd1-1764648662516.png',
    alt: 'Elegant bridal updo with soft curls, white flowers, warm romantic lighting',
    label: 'Bridal Updo',
    category: 'Bridal',
    colSpan: 'md:col-span-1',
    height: 'h-52 md:h-full',
  },
  {
    id: 'g4',
    src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1988bcc7a-1773114893747.png',
    alt: 'Textured bob haircut with warm honey highlights, natural light',
    label: 'Textured Bob',
    category: 'Cuts',
    colSpan: 'md:col-span-1',
    height: 'h-52 md:h-full',
  },
  {
    id: 'g5',
    src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1d5da776b-1769386200825.png',
    alt: 'Rich chocolate brown hair with subtle highlights, salon interior',
    label: 'Rich Brunette',
    category: 'Colour',
    colSpan: 'md:col-span-1',
    height: 'h-52 md:h-full',
  },
  {
    id: 'g6',
    src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1e6ac3734-1772203604549.png',
    alt: 'Scalp treatment ritual at luxury salon, warm towels, serene atmosphere',
    label: 'Scalp Ritual',
    category: 'Treatments',
    colSpan: 'md:col-span-1',
    height: 'h-52 md:h-full',
  },
  {
    id: 'g7',
    src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1edc55783-1772076048246.png',
    alt: 'Salon interior with warm blush and wood tones, stylists at work, inviting atmosphere',
    label: 'The Studio',
    category: 'Studio',
    colSpan: 'md:col-span-3',
    height: 'h-60 md:h-72',
  },
  {
    id: 'g8',
    src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1a90e1783-1772207747688.png',
    alt: 'Bride with an elegant updo hairstyle, soft natural lighting, warm tones',
    label: 'Wedding Day',
    category: 'Bridal',
    colSpan: 'md:col-span-1',
    height: 'h-52 md:h-full',
  },
  {
    id: 'g9',
    src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1f7563af0-1773081713079.png',
    alt: 'Relaxing hair treatment being applied at a luxury salon with warm ambient lighting',
    label: 'Deep Treatment',
    category: 'Treatments',
    colSpan: 'md:col-span-1',
    height: 'h-52 md:h-full',
  },
  {
    id: 'g10',
    src: 'https://img.rocket.new/generatedImages/rocket_gen_img_1bb9e9cf9-1772839136221.png',
    alt: 'Hairstylist giving a precise haircut in a bright, airy salon studio',
    label: 'Precision Cut',
    category: 'Cuts',
    colSpan: 'md:col-span-1',
    height: 'h-52 md:h-full',
  },
];

const categories = ['All', 'Colour', 'Cuts', 'Styling', 'Bridal', 'Treatments', 'Studio'];

export default function GalleryPage() {
  const [visible, setVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  const filtered = activeCategory === 'All'
    ? galleryItems
    : galleryItems?.filter((item) => item?.category === activeCategory);

  return (
    <div className="grain-overlay">
      <Header />
      <main>
        {/* Page Hero */}
        <section className="pt-32 pb-16 bg-bg overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-8 items-end">
              <div className="lg:col-span-7">
                <span className="text-xs font-bold uppercase tracking-[0.5em] text-shade block mb-4">
                  Portfolio
                </span>
                <h1 className="font-display text-section-xl text-ink">
                  Work that<br />
                  <span className="italic text-coffee">speaks</span>
                </h1>
              </div>
              <div className="lg:col-span-5 flex items-end">
                <p className="text-base text-ink/60 leading-relaxed">
                  A curated selection of transformations from our studio. Every look is uniquely crafted for the individual.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section ref={sectionRef} className="py-12 md:py-20 bg-vanilla overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Category Filter */}
            <div className={`flex flex-wrap gap-2 mb-10 animate-on-scroll ${visible ? 'animate-fade-up' : 'opacity-0'}`}>
              {categories?.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-xs font-bold uppercase tracking-[0.3em] px-4 py-2 rounded-full border transition-all duration-200 ${
                    activeCategory === cat
                      ? 'bg-coffee text-vanilla border-coffee' :'bg-transparent text-shade border-border hover:border-coffee hover:text-coffee'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
              {filtered?.map((item, i) => (
                <div
                  key={item?.id}
                  className={`${item?.colSpan} group relative overflow-hidden rounded-3xl spring-hover cursor-pointer animate-on-scroll ${visible ? 'animate-fade-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <div className={item?.height}>
                    <AppImage
                      src={item?.src}
                      alt={item?.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover img-zoom"
                    />
                    <div className="absolute inset-0 scrim-bottom opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-5 left-5 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-3 group-hover:translate-y-0">
                      <span className="text-xs font-bold uppercase tracking-[0.4em] text-vanilla/90 block">{item?.label}</span>
                      <span className="text-xs text-vanilla/60 mt-0.5 block">{item?.category}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className={`mt-16 text-center animate-on-scroll ${visible ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '400ms' }}>
              <p className="text-ink/50 text-sm mb-6">Love what you see? Let's create your look.</p>
              <Link href="/bookings" className="btn-primary text-sm py-4 px-10">
                Book Your Appointment
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
