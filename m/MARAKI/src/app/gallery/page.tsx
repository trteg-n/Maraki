'use client';

import React, { useRef, useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AppImage from '../../components/ui/AppImage';
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
    <div data-component-id="src/app/gallery/page.tsx:123:4" data-component-path="src/app/gallery/page.tsx" data-component-line="123" data-component-end-line="205" data-component-file="page.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22grain-overlay%22%7D" className="grain-overlay">
      <Header data-component-id="src/app/gallery/page.tsx:124:6" data-component-path="src/app/gallery/page.tsx" data-component-line="124" data-component-end-line="124" data-component-file="page.tsx" data-component-name="Header" data-component-content="%7B%22elementName%22%3A%22Header%22%7D" />
      <main data-component-id="src/app/gallery/page.tsx:125:6" data-component-path="src/app/gallery/page.tsx" data-component-line="125" data-component-end-line="203" data-component-file="page.tsx" data-component-name="main" data-component-content="%7B%22elementName%22%3A%22main%22%7D">
        {/* Page Hero */}
        <section data-component-id="src/app/gallery/page.tsx:127:8" data-component-path="src/app/gallery/page.tsx" data-component-line="127" data-component-end-line="146" data-component-file="page.tsx" data-component-name="section" data-component-content="%7B%22elementName%22%3A%22section%22%2C%22className%22%3A%22pt-32%20pb-16%20bg-bg%20overflow-hidden%22%7D" className="pt-32 pb-16 bg-bg overflow-hidden">
          <div data-component-id="src/app/gallery/page.tsx:128:10" data-component-path="src/app/gallery/page.tsx" data-component-line="128" data-component-end-line="145" data-component-file="page.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22max-w-7xl%20mx-auto%20px-4%20sm%3Apx-6%20lg%3Apx-8%22%7D" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div data-component-id="src/app/gallery/page.tsx:129:12" data-component-path="src/app/gallery/page.tsx" data-component-line="129" data-component-end-line="144" data-component-file="page.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22grid%20lg%3Agrid-cols-12%20gap-8%20items-end%22%7D" className="grid lg:grid-cols-12 gap-8 items-end">
              <div data-component-id="src/app/gallery/page.tsx:130:14" data-component-path="src/app/gallery/page.tsx" data-component-line="130" data-component-end-line="138" data-component-file="page.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22lg%3Acol-span-7%22%7D" className="lg:col-span-7">
                <span data-component-id="src/app/gallery/page.tsx:131:16" data-component-path="src/app/gallery/page.tsx" data-component-line="131" data-component-end-line="133" data-component-file="page.tsx" data-component-name="span" data-component-content="%7B%22elementName%22%3A%22span%22%2C%22className%22%3A%22text-xs%20font-bold%20uppercase%20tracking-%5B0.5em%5D%20text-shade%20block%20mb-4%22%2C%22textContent%22%3A%22Portfolio%22%7D" className="text-xs font-bold uppercase tracking-[0.5em] text-shade block mb-4">
                  Portfolio
                </span>
                <h1 data-component-id="src/app/gallery/page.tsx:134:16" data-component-path="src/app/gallery/page.tsx" data-component-line="134" data-component-end-line="137" data-component-file="page.tsx" data-component-name="h1" data-component-content="%7B%22elementName%22%3A%22h1%22%2C%22className%22%3A%22font-display%20text-section-xl%20text-ink%22%2C%22textContent%22%3A%22Work%20that%22%7D" className="font-display text-section-xl text-ink">
                  Work that<br data-component-id="src/app/gallery/page.tsx:135:27" data-component-path="src/app/gallery/page.tsx" data-component-line="135" data-component-end-line="135" data-component-file="page.tsx" data-component-name="br" data-component-content="%7B%22elementName%22%3A%22br%22%7D" />
                  <span data-component-id="src/app/gallery/page.tsx:136:18" data-component-path="src/app/gallery/page.tsx" data-component-line="136" data-component-end-line="136" data-component-file="page.tsx" data-component-name="span" data-component-content="%7B%22elementName%22%3A%22span%22%2C%22className%22%3A%22italic%20text-coffee%22%2C%22textContent%22%3A%22speaks%22%7D" className="italic text-coffee">speaks</span>
                </h1>
              </div>
              <div data-component-id="src/app/gallery/page.tsx:139:14" data-component-path="src/app/gallery/page.tsx" data-component-line="139" data-component-end-line="143" data-component-file="page.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22lg%3Acol-span-5%20flex%20items-end%22%7D" className="lg:col-span-5 flex items-end">
                <p data-component-id="src/app/gallery/page.tsx:140:16" data-component-path="src/app/gallery/page.tsx" data-component-line="140" data-component-end-line="142" data-component-file="page.tsx" data-component-name="p" data-component-content="%7B%22elementName%22%3A%22p%22%2C%22className%22%3A%22text-base%20text-ink%2F60%20leading-relaxed%22%2C%22textContent%22%3A%22A%20curated%20selection%20of%20transformations%20from%20our%20studio.%20Every%20look%20is%20uniquely%20crafted%20for%20the%20individual.%22%7D" className="text-base text-ink/60 leading-relaxed">
                  A curated selection of transformations from our studio. Every look is uniquely crafted for the individual.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section data-component-id="src/app/gallery/page.tsx:149:8" data-component-path="src/app/gallery/page.tsx" data-component-line="149" data-component-end-line="202" data-component-file="page.tsx" data-component-name="section" data-component-content="%7B%22elementName%22%3A%22section%22%2C%22className%22%3A%22py-12%20md%3Apy-20%20bg-vanilla%20overflow-hidden%22%7D" ref={sectionRef} className="py-12 md:py-20 bg-vanilla overflow-hidden">
          <div data-component-id="src/app/gallery/page.tsx:150:10" data-component-path="src/app/gallery/page.tsx" data-component-line="150" data-component-end-line="201" data-component-file="page.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22max-w-7xl%20mx-auto%20px-4%20sm%3Apx-6%20lg%3Apx-8%22%7D" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Category Filter */}
            <div data-component-id="src/app/gallery/page.tsx:153:12" data-component-path="src/app/gallery/page.tsx" data-component-line="153" data-component-end-line="166" data-component-file="page.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%7D" className={`flex flex-wrap gap-2 mb-10 animate-on-scroll ${visible ? 'animate-fade-up' : 'opacity-0'}`}>
              {categories?.map((cat) => (
                <button data-component-id="src/app/gallery/page.tsx:155:16" data-component-path="src/app/gallery/page.tsx" data-component-line="155" data-component-end-line="164" data-component-file="page.tsx" data-component-name="button" data-component-content="%7B%22elementName%22%3A%22button%22%7D"
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
            <div data-component-id="src/app/gallery/page.tsx:169:12" data-component-path="src/app/gallery/page.tsx" data-component-line="169" data-component-end-line="192" data-component-file="page.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22grid%20grid-cols-1%20md%3Agrid-cols-3%20gap-3%20md%3Agap-4%22%7D" className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
              {filtered?.map((item, i) => (
                <div data-component-id="src/app/gallery/page.tsx:171:16" data-component-path="src/app/gallery/page.tsx" data-component-line="171" data-component-end-line="190" data-component-file="page.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%7D"
                  key={item?.id}
                  className={`${item?.colSpan} group relative overflow-hidden rounded-3xl spring-hover cursor-pointer animate-on-scroll ${visible ? 'animate-fade-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <div data-component-id="src/app/gallery/page.tsx:176:18" data-component-path="src/app/gallery/page.tsx" data-component-line="176" data-component-end-line="189" data-component-file="page.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%7D" className={item?.height}>
                    <AppImage data-component-id="src/app/gallery/page.tsx:177:20" data-component-path="src/app/gallery/page.tsx" data-component-line="177" data-component-end-line="183" data-component-file="page.tsx" data-component-name="AppImage" data-component-content="%7B%22elementName%22%3A%22AppImage%22%2C%22className%22%3A%22object-cover%20img-zoom%22%7D"
                      src={item?.src}
                      alt={item?.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover img-zoom"
                    />
                    <div data-component-id="src/app/gallery/page.tsx:184:20" data-component-path="src/app/gallery/page.tsx" data-component-line="184" data-component-end-line="184" data-component-file="page.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22absolute%20inset-0%20scrim-bottom%20opacity-0%20group-hover%3Aopacity-100%20transition-opacity%20duration-500%22%7D" className="absolute inset-0 scrim-bottom opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div data-component-id="src/app/gallery/page.tsx:185:20" data-component-path="src/app/gallery/page.tsx" data-component-line="185" data-component-end-line="188" data-component-file="page.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22absolute%20bottom-5%20left-5%20opacity-0%20group-hover%3Aopacity-100%20transition-all%20duration-500%20translate-y-3%20group-hover%3Atranslate-y-0%22%7D" className="absolute bottom-5 left-5 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-3 group-hover:translate-y-0">
                      <span data-component-id="src/app/gallery/page.tsx:186:22" data-component-path="src/app/gallery/page.tsx" data-component-line="186" data-component-end-line="186" data-component-file="page.tsx" data-component-name="span" data-component-content="%7B%22elementName%22%3A%22span%22%2C%22className%22%3A%22text-xs%20font-bold%20uppercase%20tracking-%5B0.4em%5D%20text-vanilla%2F90%20block%22%7D" className="text-xs font-bold uppercase tracking-[0.4em] text-vanilla/90 block">{item?.label}</span>
                      <span data-component-id="src/app/gallery/page.tsx:187:22" data-component-path="src/app/gallery/page.tsx" data-component-line="187" data-component-end-line="187" data-component-file="page.tsx" data-component-name="span" data-component-content="%7B%22elementName%22%3A%22span%22%2C%22className%22%3A%22text-xs%20text-vanilla%2F60%20mt-0.5%20block%22%7D" className="text-xs text-vanilla/60 mt-0.5 block">{item?.category}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div data-component-id="src/app/gallery/page.tsx:195:12" data-component-path="src/app/gallery/page.tsx" data-component-line="195" data-component-end-line="200" data-component-file="page.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%7D" className={`mt-16 text-center animate-on-scroll ${visible ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '400ms' }}>
              <p data-component-id="src/app/gallery/page.tsx:196:14" data-component-path="src/app/gallery/page.tsx" data-component-line="196" data-component-end-line="196" data-component-file="page.tsx" data-component-name="p" data-component-content="%7B%22elementName%22%3A%22p%22%2C%22className%22%3A%22text-ink%2F50%20text-sm%20mb-6%22%2C%22textContent%22%3A%22Love%20what%20you%20see%3F%20Let's%20create%20your%20look.%22%7D" className="text-ink/50 text-sm mb-6">Love what you see? Let's create your look.</p>
              <Link data-component-id="src/app/gallery/page.tsx:197:14" data-component-path="src/app/gallery/page.tsx" data-component-line="197" data-component-end-line="199" data-component-file="page.tsx" data-component-name="Link" data-component-content="%7B%22elementName%22%3A%22Link%22%2C%22href%22%3A%22%2Fbookings%22%2C%22className%22%3A%22btn-primary%20text-sm%20py-4%20px-10%22%2C%22textContent%22%3A%22Book%20Your%20Appointment%22%7D" href="/bookings" className="btn-primary text-sm py-4 px-10">
                Book Your Appointment
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer data-component-id="src/app/gallery/page.tsx:204:6" data-component-path="src/app/gallery/page.tsx" data-component-line="204" data-component-end-line="204" data-component-file="page.tsx" data-component-name="Footer" data-component-content="%7B%22elementName%22%3A%22Footer%22%7D" />
    </div>
  );
}
