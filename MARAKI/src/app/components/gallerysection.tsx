'use client';

import React, { useRef, useEffect, useState } from 'react';
import AppImage from '@/components/ui/AppImage';

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
    <section
      id="gallery"
      ref={sectionRef}
      className="py-24 md:py-32 bg-bg overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className={`mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 animate-on-scroll ${visible ? 'animate-fade-up' : 'opacity-0'}`}>
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.5em] text-shade block mb-4">
              Portfolio
            </span>
            <h2 className="font-display text-section-xl text-ink">
              Work that<br />
              <span className="italic text-coffee">speaks</span>
            </h2>
          </div>
          <p className="text-sm text-ink/50 max-w-xs leading-relaxed sm:text-right">
            A selection of transformations from our studio. Every look is uniquely crafted.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          {/* Card: BigFeature — col-span-2 row-span-2 */}
          <div
            className={`md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-3xl spring-hover cursor-pointer animate-on-scroll ${visible ? 'animate-fade-up' : 'opacity-0'}`}
            style={{ animationDelay: '0ms' }}>
            
            <div className="h-64 md:h-full min-h-[400px]">
              <AppImage
                src={galleryItems?.[0]?.src}
                alt={galleryItems?.[0]?.alt}
                fill
                sizes="(max-width: 768px) 100vw, 66vw"
                className="object-cover img-zoom" />
              
              <div className="absolute inset-0 scrim-bottom opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                <span className="text-xs font-bold uppercase tracking-[0.4em] text-vanilla/80">{galleryItems?.[0]?.label}</span>
              </div>
            </div>
          </div>

          {/* Card: TopRight */}
          <div
            className={`group relative overflow-hidden rounded-3xl spring-hover cursor-pointer animate-on-scroll ${visible ? 'animate-fade-up' : 'opacity-0'}`}
            style={{ animationDelay: '80ms' }}>
            
            <div className="h-48 md:h-full">
              <AppImage
                src={galleryItems?.[1]?.src}
                alt={galleryItems?.[1]?.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover img-zoom" />
              
              <div className="absolute inset-0 scrim-bottom opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                <span className="text-xs font-bold uppercase tracking-[0.4em] text-vanilla/80">{galleryItems?.[1]?.label}</span>
              </div>
            </div>
          </div>

          {/* Card: MidLeft */}
          <div
            className={`group relative overflow-hidden rounded-3xl spring-hover cursor-pointer animate-on-scroll ${visible ? 'animate-fade-up' : 'opacity-0'}`}
            style={{ animationDelay: '160ms' }}>
            
            <div className="h-48 md:h-full">
              <AppImage
                src={galleryItems?.[2]?.src}
                alt={galleryItems?.[2]?.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover img-zoom" />
              
              <div className="absolute inset-0 scrim-bottom opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                <span className="text-xs font-bold uppercase tracking-[0.4em] text-vanilla/80">{galleryItems?.[2]?.label}</span>
              </div>
            </div>
          </div>

          {/* Card: MidCenter */}
          <div
            className={`group relative overflow-hidden rounded-3xl spring-hover cursor-pointer animate-on-scroll ${visible ? 'animate-fade-up' : 'opacity-0'}`}
            style={{ animationDelay: '240ms' }}>
            
            <div className="h-48 md:h-full">
              <AppImage
                src={galleryItems?.[3]?.src}
                alt={galleryItems?.[3]?.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover img-zoom" />
              
              <div className="absolute inset-0 scrim-bottom opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                <span className="text-xs font-bold uppercase tracking-[0.4em] text-vanilla/80">{galleryItems?.[3]?.label}</span>
              </div>
            </div>
          </div>

          {/* Card: MidRight */}
          <div
            className={`group relative overflow-hidden rounded-3xl spring-hover cursor-pointer animate-on-scroll ${visible ? 'animate-fade-up' : 'opacity-0'}`}
            style={{ animationDelay: '320ms' }}>
            
            <div className="h-48 md:h-full">
              <AppImage
                src={galleryItems?.[4]?.src}
                alt={galleryItems?.[4]?.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover img-zoom" />
              
              <div className="absolute inset-0 scrim-bottom opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                <span className="text-xs font-bold uppercase tracking-[0.4em] text-vanilla/80">{galleryItems?.[4]?.label}</span>
              </div>
            </div>
          </div>

          {/* Card: BottomLeft */}
          <div
            className={`group relative overflow-hidden rounded-3xl spring-hover cursor-pointer animate-on-scroll ${visible ? 'animate-fade-up' : 'opacity-0'}`}
            style={{ animationDelay: '400ms' }}>
            
            <div className="h-48 md:h-full">
              <AppImage
                src={galleryItems?.[5]?.src}
                alt={galleryItems?.[5]?.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover img-zoom" />
              
              <div className="absolute inset-0 scrim-bottom opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                <span className="text-xs font-bold uppercase tracking-[0.4em] text-vanilla/80">{galleryItems?.[5]?.label}</span>
              </div>
            </div>
          </div>

          {/* Card: BottomRight — col-span-3 */}
          <div
            className={`md:col-span-3 group relative overflow-hidden rounded-3xl spring-hover cursor-pointer animate-on-scroll ${visible ? 'animate-fade-up' : 'opacity-0'}`}
            style={{ animationDelay: '480ms' }}>
            
            <div className="h-56 md:h-64">
              <AppImage
                src={galleryItems?.[6]?.src}
                alt={galleryItems?.[6]?.alt}
                fill
                sizes="100vw"
                className="object-cover img-zoom" />
              
              <div className="absolute inset-0 scrim-bottom opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                <span className="text-xs font-bold uppercase tracking-[0.4em] text-vanilla/80">{galleryItems?.[6]?.label}</span>
              </div>

              {/* Studio label overlay */}
              <div className="absolute top-6 right-6 bg-vanilla/90 backdrop-blur-sm rounded-full px-5 py-2">
                <span className="text-xs font-bold uppercase tracking-[0.4em] text-ink">The Studio · NYC</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}