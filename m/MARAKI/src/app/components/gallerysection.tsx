'use client';

import React, { useRef, useEffect, useState } from 'react';
import AppImage from '../../components/ui/AppImage';

/**
 * BENTO GRID AUDIT
 * Array has 7 cards: [BigFeature, TopRight, MidLeft, MidCenter, MidRight, BottomLeft, BottomRight]
 *
 * Desktop (grid-cols-3):
 * Row 1: [col-1-2: BigFeature cs-2 rs-2] [col-3: TopRight cs-1 rs-1]
 * Row 2: [col-1-2: (BigFeature continues) cs-2] [col-3: MidLeft cs-1 rs-1]
 * Row 3: [col-1: MidCenter cs-1] [col-2: MidRight cs-1] [col-3: BottomLeft cs-1]
 * Row 4: [col-1-3: BottomRight cs-3]
 *
 * Placed 7/7 cards ✓
 */

const galleryItems = [
{
  id: 'big',
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_1f997face-1772235633149.png",
  alt: 'Model with stunning copper balayage highlights, warm natural lighting, elegant salon backdrop',
  label: 'Copper Balayage',
  colSpan: 'md:col-span-2 md:row-span-2',
  height: 'h-64 md:h-full min-h-[400px]'
},
{
  id: 'tr',
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_1d8541d94-1775930656878.png",
  alt: 'Sleek straight blowout on brunette hair, bright airy salon atmosphere',
  label: 'Silk Blowout',
  colSpan: 'md:col-span-1',
  height: 'h-48 md:h-full'
},
{
  id: 'ml',
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_1cd2f2bd1-1764648662516.png",
  alt: 'Elegant bridal updo with soft curls, white flowers, warm romantic lighting',
  label: 'Bridal Updo',
  colSpan: 'md:col-span-1',
  height: 'h-48 md:h-full'
},
{
  id: 'mc',
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_1988bcc7a-1773114893747.png",
  alt: 'Textured bob haircut with warm honey highlights, natural light',
  label: 'Textured Bob',
  colSpan: 'md:col-span-1',
  height: 'h-48 md:h-full'
},
{
  id: 'mr',
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_1d5da776b-1769386200825.png",
  alt: 'Rich chocolate brown hair with subtle highlights, salon interior',
  label: 'Rich Brunette',
  colSpan: 'md:col-span-1',
  height: 'h-48 md:h-full'
},
{
  id: 'bl',
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_1e6ac3734-1772203604549.png",
  alt: 'Scalp treatment ritual at luxury salon, warm towels, serene atmosphere',
  label: 'Scalp Ritual',
  colSpan: 'md:col-span-1',
  height: 'h-48 md:h-full'
},
{
  id: 'br',
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_1edc55783-1772076048246.png",
  alt: 'Salon interior with warm blush and wood tones, stylists at work, inviting atmosphere',
  label: 'The Studio',
  colSpan: 'md:col-span-3',
  height: 'h-56 md:h-64'
}];


export default function GallerySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {if (entry.isIntersecting) setVisible(true);},
      { threshold: 0.1 }
    );
    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section data-component-id="src/app/components/gallerysection.tsx:92:4" data-component-path="src/app/components/gallerysection.tsx" data-component-line="92" data-component-end-line="263" data-component-file="gallerysection.tsx" data-component-name="section" data-component-content="%7B%22elementName%22%3A%22section%22%2C%22id%22%3A%22gallery%22%2C%22className%22%3A%22py-24%20md%3Apy-32%20bg-bg%20overflow-hidden%22%7D"
      id="gallery"
      ref={sectionRef}
      className="py-24 md:py-32 bg-bg overflow-hidden">
      
      <div data-component-id="src/app/components/gallerysection.tsx:97:6" data-component-path="src/app/components/gallerysection.tsx" data-component-line="97" data-component-end-line="262" data-component-file="gallerysection.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22max-w-7xl%20mx-auto%20px-4%20sm%3Apx-6%20lg%3Apx-8%22%7D" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div data-component-id="src/app/components/gallerysection.tsx:100:8" data-component-path="src/app/components/gallerysection.tsx" data-component-line="100" data-component-end-line="113" data-component-file="gallerysection.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%7D" className={`mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 animate-on-scroll ${visible ? 'animate-fade-up' : 'opacity-0'}`}>
          <div data-component-id="src/app/components/gallerysection.tsx:101:10" data-component-path="src/app/components/gallerysection.tsx" data-component-line="101" data-component-end-line="109" data-component-file="gallerysection.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%7D">
            <span data-component-id="src/app/components/gallerysection.tsx:102:12" data-component-path="src/app/components/gallerysection.tsx" data-component-line="102" data-component-end-line="104" data-component-file="gallerysection.tsx" data-component-name="span" data-component-content="%7B%22elementName%22%3A%22span%22%2C%22className%22%3A%22text-xs%20font-bold%20uppercase%20tracking-%5B0.5em%5D%20text-shade%20block%20mb-4%22%2C%22textContent%22%3A%22Portfolio%22%7D" className="text-xs font-bold uppercase tracking-[0.5em] text-shade block mb-4">
              Portfolio
            </span>
            <h2 data-component-id="src/app/components/gallerysection.tsx:105:12" data-component-path="src/app/components/gallerysection.tsx" data-component-line="105" data-component-end-line="108" data-component-file="gallerysection.tsx" data-component-name="h2" data-component-content="%7B%22elementName%22%3A%22h2%22%2C%22className%22%3A%22font-display%20text-section-xl%20text-ink%22%2C%22textContent%22%3A%22Work%20that%22%7D" className="font-display text-section-xl text-ink">
              Work that<br data-component-id="src/app/components/gallerysection.tsx:106:23" data-component-path="src/app/components/gallerysection.tsx" data-component-line="106" data-component-end-line="106" data-component-file="gallerysection.tsx" data-component-name="br" data-component-content="%7B%22elementName%22%3A%22br%22%7D" />
              <span data-component-id="src/app/components/gallerysection.tsx:107:14" data-component-path="src/app/components/gallerysection.tsx" data-component-line="107" data-component-end-line="107" data-component-file="gallerysection.tsx" data-component-name="span" data-component-content="%7B%22elementName%22%3A%22span%22%2C%22className%22%3A%22italic%20text-coffee%22%2C%22textContent%22%3A%22speaks%22%7D" className="italic text-coffee">speaks</span>
            </h2>
          </div>
          <p data-component-id="src/app/components/gallerysection.tsx:110:10" data-component-path="src/app/components/gallerysection.tsx" data-component-line="110" data-component-end-line="112" data-component-file="gallerysection.tsx" data-component-name="p" data-component-content="%7B%22elementName%22%3A%22p%22%2C%22className%22%3A%22text-sm%20text-ink%2F50%20max-w-xs%20leading-relaxed%20sm%3Atext-right%22%2C%22textContent%22%3A%22A%20selection%20of%20transformations%20from%20our%20studio.%20Every%20look%20is%20uniquely%20crafted.%22%7D" className="text-sm text-ink/50 max-w-xs leading-relaxed sm:text-right">
            A selection of transformations from our studio. Every look is uniquely crafted.
          </p>
        </div>

        {/* Bento grid */}
        <div data-component-id="src/app/components/gallerysection.tsx:116:8" data-component-path="src/app/components/gallerysection.tsx" data-component-line="116" data-component-end-line="261" data-component-file="gallerysection.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22grid%20grid-cols-1%20md%3Agrid-cols-3%20gap-3%20md%3Agap-4%22%7D" className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          {/* Card: BigFeature — col-span-2 row-span-2 */}
          <div data-component-id="src/app/components/gallerysection.tsx:118:10" data-component-path="src/app/components/gallerysection.tsx" data-component-line="118" data-component-end-line="135" data-component-file="gallerysection.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%7D"
            className={`md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-3xl spring-hover cursor-pointer animate-on-scroll ${visible ? 'animate-fade-up' : 'opacity-0'}`}
            style={{ animationDelay: '0ms' }}>
            
            <div data-component-id="src/app/components/gallerysection.tsx:122:12" data-component-path="src/app/components/gallerysection.tsx" data-component-line="122" data-component-end-line="134" data-component-file="gallerysection.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22h-64%20md%3Ah-full%20min-h-%5B400px%5D%22%7D" className="h-64 md:h-full min-h-[400px]">
              <AppImage data-component-id="src/app/components/gallerysection.tsx:123:14" data-component-path="src/app/components/gallerysection.tsx" data-component-line="123" data-component-end-line="128" data-component-file="gallerysection.tsx" data-component-name="AppImage" data-component-content="%7B%22elementName%22%3A%22AppImage%22%2C%22className%22%3A%22object-cover%20img-zoom%22%7D"
                src={galleryItems?.[0]?.src}
                alt={galleryItems?.[0]?.alt}
                fill
                sizes="(max-width: 768px) 100vw, 66vw"
                className="object-cover img-zoom" />
              
              <div data-component-id="src/app/components/gallerysection.tsx:130:14" data-component-path="src/app/components/gallerysection.tsx" data-component-line="130" data-component-end-line="130" data-component-file="gallerysection.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22absolute%20inset-0%20scrim-bottom%20opacity-0%20group-hover%3Aopacity-100%20transition-opacity%20duration-500%22%7D" className="absolute inset-0 scrim-bottom opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div data-component-id="src/app/components/gallerysection.tsx:131:14" data-component-path="src/app/components/gallerysection.tsx" data-component-line="131" data-component-end-line="133" data-component-file="gallerysection.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22absolute%20bottom-6%20left-6%20opacity-0%20group-hover%3Aopacity-100%20transition-all%20duration-500%20translate-y-4%20group-hover%3Atranslate-y-0%22%7D" className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                <span data-component-id="src/app/components/gallerysection.tsx:132:16" data-component-path="src/app/components/gallerysection.tsx" data-component-line="132" data-component-end-line="132" data-component-file="gallerysection.tsx" data-component-name="span" data-component-content="%7B%22elementName%22%3A%22span%22%2C%22className%22%3A%22text-xs%20font-bold%20uppercase%20tracking-%5B0.4em%5D%20text-vanilla%2F80%22%7D" className="text-xs font-bold uppercase tracking-[0.4em] text-vanilla/80">{galleryItems?.[0]?.label}</span>
              </div>
            </div>
          </div>

          {/* Card: TopRight */}
          <div data-component-id="src/app/components/gallerysection.tsx:138:10" data-component-path="src/app/components/gallerysection.tsx" data-component-line="138" data-component-end-line="155" data-component-file="gallerysection.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%7D"
            className={`group relative overflow-hidden rounded-3xl spring-hover cursor-pointer animate-on-scroll ${visible ? 'animate-fade-up' : 'opacity-0'}`}
            style={{ animationDelay: '80ms' }}>
            
            <div data-component-id="src/app/components/gallerysection.tsx:142:12" data-component-path="src/app/components/gallerysection.tsx" data-component-line="142" data-component-end-line="154" data-component-file="gallerysection.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22h-48%20md%3Ah-full%22%7D" className="h-48 md:h-full">
              <AppImage data-component-id="src/app/components/gallerysection.tsx:143:14" data-component-path="src/app/components/gallerysection.tsx" data-component-line="143" data-component-end-line="148" data-component-file="gallerysection.tsx" data-component-name="AppImage" data-component-content="%7B%22elementName%22%3A%22AppImage%22%2C%22className%22%3A%22object-cover%20img-zoom%22%7D"
                src={galleryItems?.[1]?.src}
                alt={galleryItems?.[1]?.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover img-zoom" />
              
              <div data-component-id="src/app/components/gallerysection.tsx:150:14" data-component-path="src/app/components/gallerysection.tsx" data-component-line="150" data-component-end-line="150" data-component-file="gallerysection.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22absolute%20inset-0%20scrim-bottom%20opacity-0%20group-hover%3Aopacity-100%20transition-opacity%20duration-500%22%7D" className="absolute inset-0 scrim-bottom opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div data-component-id="src/app/components/gallerysection.tsx:151:14" data-component-path="src/app/components/gallerysection.tsx" data-component-line="151" data-component-end-line="153" data-component-file="gallerysection.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22absolute%20bottom-4%20left-4%20opacity-0%20group-hover%3Aopacity-100%20transition-all%20duration-500%20translate-y-2%20group-hover%3Atranslate-y-0%22%7D" className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                <span data-component-id="src/app/components/gallerysection.tsx:152:16" data-component-path="src/app/components/gallerysection.tsx" data-component-line="152" data-component-end-line="152" data-component-file="gallerysection.tsx" data-component-name="span" data-component-content="%7B%22elementName%22%3A%22span%22%2C%22className%22%3A%22text-xs%20font-bold%20uppercase%20tracking-%5B0.4em%5D%20text-vanilla%2F80%22%7D" className="text-xs font-bold uppercase tracking-[0.4em] text-vanilla/80">{galleryItems?.[1]?.label}</span>
              </div>
            </div>
          </div>

          {/* Card: MidLeft */}
          <div data-component-id="src/app/components/gallerysection.tsx:158:10" data-component-path="src/app/components/gallerysection.tsx" data-component-line="158" data-component-end-line="175" data-component-file="gallerysection.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%7D"
            className={`group relative overflow-hidden rounded-3xl spring-hover cursor-pointer animate-on-scroll ${visible ? 'animate-fade-up' : 'opacity-0'}`}
            style={{ animationDelay: '160ms' }}>
            
            <div data-component-id="src/app/components/gallerysection.tsx:162:12" data-component-path="src/app/components/gallerysection.tsx" data-component-line="162" data-component-end-line="174" data-component-file="gallerysection.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22h-48%20md%3Ah-full%22%7D" className="h-48 md:h-full">
              <AppImage data-component-id="src/app/components/gallerysection.tsx:163:14" data-component-path="src/app/components/gallerysection.tsx" data-component-line="163" data-component-end-line="168" data-component-file="gallerysection.tsx" data-component-name="AppImage" data-component-content="%7B%22elementName%22%3A%22AppImage%22%2C%22className%22%3A%22object-cover%20img-zoom%22%7D"
                src={galleryItems?.[2]?.src}
                alt={galleryItems?.[2]?.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover img-zoom" />
              
              <div data-component-id="src/app/components/gallerysection.tsx:170:14" data-component-path="src/app/components/gallerysection.tsx" data-component-line="170" data-component-end-line="170" data-component-file="gallerysection.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22absolute%20inset-0%20scrim-bottom%20opacity-0%20group-hover%3Aopacity-100%20transition-opacity%20duration-500%22%7D" className="absolute inset-0 scrim-bottom opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div data-component-id="src/app/components/gallerysection.tsx:171:14" data-component-path="src/app/components/gallerysection.tsx" data-component-line="171" data-component-end-line="173" data-component-file="gallerysection.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22absolute%20bottom-4%20left-4%20opacity-0%20group-hover%3Aopacity-100%20transition-all%20duration-500%20translate-y-2%20group-hover%3Atranslate-y-0%22%7D" className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                <span data-component-id="src/app/components/gallerysection.tsx:172:16" data-component-path="src/app/components/gallerysection.tsx" data-component-line="172" data-component-end-line="172" data-component-file="gallerysection.tsx" data-component-name="span" data-component-content="%7B%22elementName%22%3A%22span%22%2C%22className%22%3A%22text-xs%20font-bold%20uppercase%20tracking-%5B0.4em%5D%20text-vanilla%2F80%22%7D" className="text-xs font-bold uppercase tracking-[0.4em] text-vanilla/80">{galleryItems?.[2]?.label}</span>
              </div>
            </div>
          </div>

          {/* Card: MidCenter */}
          <div data-component-id="src/app/components/gallerysection.tsx:178:10" data-component-path="src/app/components/gallerysection.tsx" data-component-line="178" data-component-end-line="195" data-component-file="gallerysection.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%7D"
            className={`group relative overflow-hidden rounded-3xl spring-hover cursor-pointer animate-on-scroll ${visible ? 'animate-fade-up' : 'opacity-0'}`}
            style={{ animationDelay: '240ms' }}>
            
            <div data-component-id="src/app/components/gallerysection.tsx:182:12" data-component-path="src/app/components/gallerysection.tsx" data-component-line="182" data-component-end-line="194" data-component-file="gallerysection.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22h-48%20md%3Ah-full%22%7D" className="h-48 md:h-full">
              <AppImage data-component-id="src/app/components/gallerysection.tsx:183:14" data-component-path="src/app/components/gallerysection.tsx" data-component-line="183" data-component-end-line="188" data-component-file="gallerysection.tsx" data-component-name="AppImage" data-component-content="%7B%22elementName%22%3A%22AppImage%22%2C%22className%22%3A%22object-cover%20img-zoom%22%7D"
                src={galleryItems?.[3]?.src}
                alt={galleryItems?.[3]?.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover img-zoom" />
              
              <div data-component-id="src/app/components/gallerysection.tsx:190:14" data-component-path="src/app/components/gallerysection.tsx" data-component-line="190" data-component-end-line="190" data-component-file="gallerysection.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22absolute%20inset-0%20scrim-bottom%20opacity-0%20group-hover%3Aopacity-100%20transition-opacity%20duration-500%22%7D" className="absolute inset-0 scrim-bottom opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div data-component-id="src/app/components/gallerysection.tsx:191:14" data-component-path="src/app/components/gallerysection.tsx" data-component-line="191" data-component-end-line="193" data-component-file="gallerysection.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22absolute%20bottom-4%20left-4%20opacity-0%20group-hover%3Aopacity-100%20transition-all%20duration-500%20translate-y-2%20group-hover%3Atranslate-y-0%22%7D" className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                <span data-component-id="src/app/components/gallerysection.tsx:192:16" data-component-path="src/app/components/gallerysection.tsx" data-component-line="192" data-component-end-line="192" data-component-file="gallerysection.tsx" data-component-name="span" data-component-content="%7B%22elementName%22%3A%22span%22%2C%22className%22%3A%22text-xs%20font-bold%20uppercase%20tracking-%5B0.4em%5D%20text-vanilla%2F80%22%7D" className="text-xs font-bold uppercase tracking-[0.4em] text-vanilla/80">{galleryItems?.[3]?.label}</span>
              </div>
            </div>
          </div>

          {/* Card: MidRight */}
          <div data-component-id="src/app/components/gallerysection.tsx:198:10" data-component-path="src/app/components/gallerysection.tsx" data-component-line="198" data-component-end-line="215" data-component-file="gallerysection.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%7D"
            className={`group relative overflow-hidden rounded-3xl spring-hover cursor-pointer animate-on-scroll ${visible ? 'animate-fade-up' : 'opacity-0'}`}
            style={{ animationDelay: '320ms' }}>
            
            <div data-component-id="src/app/components/gallerysection.tsx:202:12" data-component-path="src/app/components/gallerysection.tsx" data-component-line="202" data-component-end-line="214" data-component-file="gallerysection.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22h-48%20md%3Ah-full%22%7D" className="h-48 md:h-full">
              <AppImage data-component-id="src/app/components/gallerysection.tsx:203:14" data-component-path="src/app/components/gallerysection.tsx" data-component-line="203" data-component-end-line="208" data-component-file="gallerysection.tsx" data-component-name="AppImage" data-component-content="%7B%22elementName%22%3A%22AppImage%22%2C%22className%22%3A%22object-cover%20img-zoom%22%7D"
                src={galleryItems?.[4]?.src}
                alt={galleryItems?.[4]?.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover img-zoom" />
              
              <div data-component-id="src/app/components/gallerysection.tsx:210:14" data-component-path="src/app/components/gallerysection.tsx" data-component-line="210" data-component-end-line="210" data-component-file="gallerysection.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22absolute%20inset-0%20scrim-bottom%20opacity-0%20group-hover%3Aopacity-100%20transition-opacity%20duration-500%22%7D" className="absolute inset-0 scrim-bottom opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div data-component-id="src/app/components/gallerysection.tsx:211:14" data-component-path="src/app/components/gallerysection.tsx" data-component-line="211" data-component-end-line="213" data-component-file="gallerysection.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22absolute%20bottom-4%20left-4%20opacity-0%20group-hover%3Aopacity-100%20transition-all%20duration-500%20translate-y-2%20group-hover%3Atranslate-y-0%22%7D" className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                <span data-component-id="src/app/components/gallerysection.tsx:212:16" data-component-path="src/app/components/gallerysection.tsx" data-component-line="212" data-component-end-line="212" data-component-file="gallerysection.tsx" data-component-name="span" data-component-content="%7B%22elementName%22%3A%22span%22%2C%22className%22%3A%22text-xs%20font-bold%20uppercase%20tracking-%5B0.4em%5D%20text-vanilla%2F80%22%7D" className="text-xs font-bold uppercase tracking-[0.4em] text-vanilla/80">{galleryItems?.[4]?.label}</span>
              </div>
            </div>
          </div>

          {/* Card: BottomLeft */}
          <div data-component-id="src/app/components/gallerysection.tsx:218:10" data-component-path="src/app/components/gallerysection.tsx" data-component-line="218" data-component-end-line="235" data-component-file="gallerysection.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%7D"
            className={`group relative overflow-hidden rounded-3xl spring-hover cursor-pointer animate-on-scroll ${visible ? 'animate-fade-up' : 'opacity-0'}`}
            style={{ animationDelay: '400ms' }}>
            
            <div data-component-id="src/app/components/gallerysection.tsx:222:12" data-component-path="src/app/components/gallerysection.tsx" data-component-line="222" data-component-end-line="234" data-component-file="gallerysection.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22h-48%20md%3Ah-full%22%7D" className="h-48 md:h-full">
              <AppImage data-component-id="src/app/components/gallerysection.tsx:223:14" data-component-path="src/app/components/gallerysection.tsx" data-component-line="223" data-component-end-line="228" data-component-file="gallerysection.tsx" data-component-name="AppImage" data-component-content="%7B%22elementName%22%3A%22AppImage%22%2C%22className%22%3A%22object-cover%20img-zoom%22%7D"
                src={galleryItems?.[5]?.src}
                alt={galleryItems?.[5]?.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover img-zoom" />
              
              <div data-component-id="src/app/components/gallerysection.tsx:230:14" data-component-path="src/app/components/gallerysection.tsx" data-component-line="230" data-component-end-line="230" data-component-file="gallerysection.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22absolute%20inset-0%20scrim-bottom%20opacity-0%20group-hover%3Aopacity-100%20transition-opacity%20duration-500%22%7D" className="absolute inset-0 scrim-bottom opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div data-component-id="src/app/components/gallerysection.tsx:231:14" data-component-path="src/app/components/gallerysection.tsx" data-component-line="231" data-component-end-line="233" data-component-file="gallerysection.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22absolute%20bottom-4%20left-4%20opacity-0%20group-hover%3Aopacity-100%20transition-all%20duration-500%20translate-y-2%20group-hover%3Atranslate-y-0%22%7D" className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                <span data-component-id="src/app/components/gallerysection.tsx:232:16" data-component-path="src/app/components/gallerysection.tsx" data-component-line="232" data-component-end-line="232" data-component-file="gallerysection.tsx" data-component-name="span" data-component-content="%7B%22elementName%22%3A%22span%22%2C%22className%22%3A%22text-xs%20font-bold%20uppercase%20tracking-%5B0.4em%5D%20text-vanilla%2F80%22%7D" className="text-xs font-bold uppercase tracking-[0.4em] text-vanilla/80">{galleryItems?.[5]?.label}</span>
              </div>
            </div>
          </div>

          {/* Card: BottomRight — col-span-3 */}
          <div data-component-id="src/app/components/gallerysection.tsx:238:10" data-component-path="src/app/components/gallerysection.tsx" data-component-line="238" data-component-end-line="260" data-component-file="gallerysection.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%7D"
            className={`md:col-span-3 group relative overflow-hidden rounded-3xl spring-hover cursor-pointer animate-on-scroll ${visible ? 'animate-fade-up' : 'opacity-0'}`}
            style={{ animationDelay: '480ms' }}>
            
            <div data-component-id="src/app/components/gallerysection.tsx:242:12" data-component-path="src/app/components/gallerysection.tsx" data-component-line="242" data-component-end-line="259" data-component-file="gallerysection.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22h-56%20md%3Ah-64%22%7D" className="h-56 md:h-64">
              <AppImage data-component-id="src/app/components/gallerysection.tsx:243:14" data-component-path="src/app/components/gallerysection.tsx" data-component-line="243" data-component-end-line="248" data-component-file="gallerysection.tsx" data-component-name="AppImage" data-component-content="%7B%22elementName%22%3A%22AppImage%22%2C%22className%22%3A%22object-cover%20img-zoom%22%7D"
                src={galleryItems?.[6]?.src}
                alt={galleryItems?.[6]?.alt}
                fill
                sizes="100vw"
                className="object-cover img-zoom" />
              
              <div data-component-id="src/app/components/gallerysection.tsx:250:14" data-component-path="src/app/components/gallerysection.tsx" data-component-line="250" data-component-end-line="250" data-component-file="gallerysection.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22absolute%20inset-0%20scrim-bottom%20opacity-0%20group-hover%3Aopacity-100%20transition-opacity%20duration-500%22%7D" className="absolute inset-0 scrim-bottom opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div data-component-id="src/app/components/gallerysection.tsx:251:14" data-component-path="src/app/components/gallerysection.tsx" data-component-line="251" data-component-end-line="253" data-component-file="gallerysection.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22absolute%20bottom-6%20left-6%20opacity-0%20group-hover%3Aopacity-100%20transition-all%20duration-500%20translate-y-4%20group-hover%3Atranslate-y-0%22%7D" className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                <span data-component-id="src/app/components/gallerysection.tsx:252:16" data-component-path="src/app/components/gallerysection.tsx" data-component-line="252" data-component-end-line="252" data-component-file="gallerysection.tsx" data-component-name="span" data-component-content="%7B%22elementName%22%3A%22span%22%2C%22className%22%3A%22text-xs%20font-bold%20uppercase%20tracking-%5B0.4em%5D%20text-vanilla%2F80%22%7D" className="text-xs font-bold uppercase tracking-[0.4em] text-vanilla/80">{galleryItems?.[6]?.label}</span>
              </div>

              {/* Studio label overlay */}
              <div data-component-id="src/app/components/gallerysection.tsx:256:14" data-component-path="src/app/components/gallerysection.tsx" data-component-line="256" data-component-end-line="258" data-component-file="gallerysection.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22absolute%20top-6%20right-6%20bg-vanilla%2F90%20backdrop-blur-sm%20rounded-full%20px-5%20py-2%22%7D" className="absolute top-6 right-6 bg-vanilla/90 backdrop-blur-sm rounded-full px-5 py-2">
                <span data-component-id="src/app/components/gallerysection.tsx:257:16" data-component-path="src/app/components/gallerysection.tsx" data-component-line="257" data-component-end-line="257" data-component-file="gallerysection.tsx" data-component-name="span" data-component-content="%7B%22elementName%22%3A%22span%22%2C%22className%22%3A%22text-xs%20font-bold%20uppercase%20tracking-%5B0.4em%5D%20text-ink%22%2C%22textContent%22%3A%22The%20Studio%20%C2%B7%20NYC%22%7D" className="text-xs font-bold uppercase tracking-[0.4em] text-ink">The Studio · NYC</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}