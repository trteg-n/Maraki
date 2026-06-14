'use client';

import React, { useRef, useEffect, useState } from 'react';
import AppImage from '../../components/ui/AppImage';

const testimonials = [
  {
    name: 'Camille Thornton',
    role: 'Fashion Editor, New York',
    quote: "Isabella completely transformed my relationship with my hair. I came in with years of box-dye damage and left with the most beautiful copper balayage I've ever had. The consultation alone was worth the trip.",
    image: 'https://i.pravatar.cc/200?u=camille-thornton',
    imageAlt: 'Camille Thornton, Fashion Editor, smiling portrait',
    service: 'Colour & Balayage',
    rating: 5,
    result: 'Box-dye to copper balayage',
  },
  {
    name: 'Danielle Park',
    role: 'Bride, Brooklyn',
    quote: "I've been to dozens of salons in NYC and SalonSite is in a different league. Priya did my bridal hair and every single person at my wedding asked who styled it. I cried when I saw myself in the mirror.",
    image: 'https://i.pravatar.cc/200?u=danielle-park-bride',
    imageAlt: 'Danielle Park, bride, glowing portrait',
    service: 'Bridal Services',
    rating: 5,
    result: 'Wedding day styling',
  },
  {
    name: 'Amara Johnson',
    role: 'Creative Director, Manhattan',
    quote: "Marcus has been cutting my hair for four years. He\'s the only person who understands exactly how my hair moves. I\'ve followed him from two previous salons — that\'s how good he is.",
    image: 'https://i.pravatar.cc/200?u=amara-johnson-nyc',
    imageAlt: 'Amara Johnson, Creative Director, confident professional portrait',
    service: 'Precision Cuts',
    rating: 5,
    result: '4-year client relationship',
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div data-component-id="src/app/components/testimonial.tsx:41:4" data-component-path="src/app/components/testimonial.tsx" data-component-line="41" data-component-end-line="47" data-component-file="testimonial.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22flex%20gap-1%22%7D" className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg data-component-id="src/app/components/testimonial.tsx:43:8" data-component-path="src/app/components/testimonial.tsx" data-component-line="43" data-component-end-line="45" data-component-file="testimonial.tsx" data-component-name="svg" data-component-content="%7B%22elementName%22%3A%22svg%22%2C%22className%22%3A%22w-4%20h-4%20fill-coffee%22%7D" key={i} viewBox="0 0 24 24" className="w-4 h-4 fill-coffee">
          <path data-component-id="src/app/components/testimonial.tsx:44:10" data-component-path="src/app/components/testimonial.tsx" data-component-line="44" data-component-end-line="44" data-component-file="testimonial.tsx" data-component-name="path" data-component-content="%7B%22elementName%22%3A%22path%22%7D" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section data-component-id="src/app/components/testimonial.tsx:66:4" data-component-path="src/app/components/testimonial.tsx" data-component-line="66" data-component-end-line="193" data-component-file="testimonial.tsx" data-component-name="section" data-component-content="%7B%22elementName%22%3A%22section%22%2C%22id%22%3A%22testimonials%22%2C%22className%22%3A%22py-24%20md%3Apy-32%20bg-blush%2F30%20overflow-hidden%22%7D"
      id="testimonials"
      ref={sectionRef}
      className="py-24 md:py-32 bg-blush/30 overflow-hidden"
    >
      <div data-component-id="src/app/components/testimonial.tsx:71:6" data-component-path="src/app/components/testimonial.tsx" data-component-line="71" data-component-end-line="192" data-component-file="testimonial.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22max-w-7xl%20mx-auto%20px-4%20sm%3Apx-6%20lg%3Apx-8%22%7D" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div data-component-id="src/app/components/testimonial.tsx:74:8" data-component-path="src/app/components/testimonial.tsx" data-component-line="74" data-component-end-line="89" data-component-file="testimonial.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%7D" className={`mb-16 grid lg:grid-cols-12 gap-8 animate-on-scroll ${visible ? 'animate-fade-up' : 'opacity-0'}`}>
          <div data-component-id="src/app/components/testimonial.tsx:75:10" data-component-path="src/app/components/testimonial.tsx" data-component-line="75" data-component-end-line="83" data-component-file="testimonial.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22lg%3Acol-span-5%22%7D" className="lg:col-span-5">
            <span data-component-id="src/app/components/testimonial.tsx:76:12" data-component-path="src/app/components/testimonial.tsx" data-component-line="76" data-component-end-line="78" data-component-file="testimonial.tsx" data-component-name="span" data-component-content="%7B%22elementName%22%3A%22span%22%2C%22className%22%3A%22text-xs%20font-bold%20uppercase%20tracking-%5B0.5em%5D%20text-shade%20block%20mb-4%22%2C%22textContent%22%3A%22Client%20Stories%22%7D" className="text-xs font-bold uppercase tracking-[0.5em] text-shade block mb-4">
              Client Stories
            </span>
            <h2 data-component-id="src/app/components/testimonial.tsx:79:12" data-component-path="src/app/components/testimonial.tsx" data-component-line="79" data-component-end-line="82" data-component-file="testimonial.tsx" data-component-name="h2" data-component-content="%7B%22elementName%22%3A%22h2%22%2C%22className%22%3A%22font-display%20text-section-xl%20text-ink%22%2C%22textContent%22%3A%22What%20they%22%7D" className="font-display text-section-xl text-ink">
              What they<br data-component-id="src/app/components/testimonial.tsx:80:23" data-component-path="src/app/components/testimonial.tsx" data-component-line="80" data-component-end-line="80" data-component-file="testimonial.tsx" data-component-name="br" data-component-content="%7B%22elementName%22%3A%22br%22%7D" />
              <span data-component-id="src/app/components/testimonial.tsx:81:14" data-component-path="src/app/components/testimonial.tsx" data-component-line="81" data-component-end-line="81" data-component-file="testimonial.tsx" data-component-name="span" data-component-content="%7B%22elementName%22%3A%22span%22%2C%22className%22%3A%22italic%20text-coffee%22%2C%22textContent%22%3A%22say%22%7D" className="italic text-coffee">say</span>
            </h2>
          </div>
          <div data-component-id="src/app/components/testimonial.tsx:84:10" data-component-path="src/app/components/testimonial.tsx" data-component-line="84" data-component-end-line="88" data-component-file="testimonial.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22lg%3Acol-span-7%20flex%20items-end%22%7D" className="lg:col-span-7 flex items-end">
            <p data-component-id="src/app/components/testimonial.tsx:85:12" data-component-path="src/app/components/testimonial.tsx" data-component-line="85" data-component-end-line="87" data-component-file="testimonial.tsx" data-component-name="p" data-component-content="%7B%22elementName%22%3A%22p%22%2C%22className%22%3A%22text-base%20text-ink%2F60%20leading-relaxed%20max-w-md%22%2C%22textContent%22%3A%22Real%20words%20from%20real%20clients.%20We%20don't%20edit%20them%20%E2%80%94%20these%20are%20the%20messages%20that%20keep%20us%20going%20every%20morning.%22%7D" className="text-base text-ink/60 leading-relaxed max-w-md">
              Real words from real clients. We don't edit them — these are the messages that keep us going every morning.
            </p>
          </div>
        </div>

        {/* Featured testimonial */}
        <div data-component-id="src/app/components/testimonial.tsx:92:8" data-component-path="src/app/components/testimonial.tsx" data-component-line="92" data-component-end-line="172" data-component-file="testimonial.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%7D" className={`animate-on-scroll ${visible ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '100ms' }}>
          <div data-component-id="src/app/components/testimonial.tsx:93:10" data-component-path="src/app/components/testimonial.tsx" data-component-line="93" data-component-end-line="141" data-component-file="testimonial.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22bg-vanilla%20rounded-4xl%20p-8%20sm%3Ap-12%20mb-6%20border%20border-border%22%7D" className="bg-vanilla rounded-4xl p-8 sm:p-12 mb-6 border border-border">
            <div data-component-id="src/app/components/testimonial.tsx:94:12" data-component-path="src/app/components/testimonial.tsx" data-component-line="94" data-component-end-line="140" data-component-file="testimonial.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22flex%20flex-col%20lg%3Aflex-row%20gap-10%20items-start%22%7D" className="flex flex-col lg:flex-row gap-10 items-start">
              {/* Avatar */}
              <div data-component-id="src/app/components/testimonial.tsx:96:14" data-component-path="src/app/components/testimonial.tsx" data-component-line="96" data-component-end-line="106" data-component-file="testimonial.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22shrink-0%22%7D" className="shrink-0">
                <div data-component-id="src/app/components/testimonial.tsx:97:16" data-component-path="src/app/components/testimonial.tsx" data-component-line="97" data-component-end-line="105" data-component-file="testimonial.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22w-24%20h-24%20rounded-3xl%20overflow-hidden%20border-4%20border-blush%20spring-hover%22%7D" className="w-24 h-24 rounded-3xl overflow-hidden border-4 border-blush spring-hover">
                  <AppImage data-component-id="src/app/components/testimonial.tsx:98:18" data-component-path="src/app/components/testimonial.tsx" data-component-line="98" data-component-end-line="104" data-component-file="testimonial.tsx" data-component-name="AppImage" data-component-content="%7B%22elementName%22%3A%22AppImage%22%2C%22className%22%3A%22object-cover%20w-full%20h-full%22%7D"
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].imageAlt}
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              {/* Content */}
              <div data-component-id="src/app/components/testimonial.tsx:109:14" data-component-path="src/app/components/testimonial.tsx" data-component-line="109" data-component-end-line="139" data-component-file="testimonial.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22flex-1%20space-y-6%22%7D" className="flex-1 space-y-6">
                {/* Quote icon */}
                <svg data-component-id="src/app/components/testimonial.tsx:111:16" data-component-path="src/app/components/testimonial.tsx" data-component-line="111" data-component-end-line="113" data-component-file="testimonial.tsx" data-component-name="svg" data-component-content="%7B%22elementName%22%3A%22svg%22%2C%22className%22%3A%22w-12%20h-12%20fill-blush%22%7D" viewBox="0 0 24 24" className="w-12 h-12 fill-blush">
                  <path data-component-id="src/app/components/testimonial.tsx:112:18" data-component-path="src/app/components/testimonial.tsx" data-component-line="112" data-component-end-line="112" data-component-file="testimonial.tsx" data-component-name="path" data-component-content="%7B%22elementName%22%3A%22path%22%7D" d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>

                <p data-component-id="src/app/components/testimonial.tsx:115:16" data-component-path="src/app/components/testimonial.tsx" data-component-line="115" data-component-end-line="117" data-component-file="testimonial.tsx" data-component-name="p" data-component-content="%7B%22elementName%22%3A%22p%22%2C%22className%22%3A%22font-display%20text-xl%20sm%3Atext-2xl%20font-medium%20text-ink%20leading-relaxed%20italic%22%2C%22textContent%22%3A%22%5C%22%20%5C%22%22%7D" className="font-display text-xl sm:text-2xl font-medium text-ink leading-relaxed italic">
                  "{testimonials[activeIndex].quote}"
                </p>

                <div data-component-id="src/app/components/testimonial.tsx:119:16" data-component-path="src/app/components/testimonial.tsx" data-component-line="119" data-component-end-line="130" data-component-file="testimonial.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22flex%20flex-col%20sm%3Aflex-row%20sm%3Aitems-center%20sm%3Ajustify-between%20gap-4%22%7D" className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div data-component-id="src/app/components/testimonial.tsx:120:18" data-component-path="src/app/components/testimonial.tsx" data-component-line="120" data-component-end-line="123" data-component-file="testimonial.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%7D">
                    <p data-component-id="src/app/components/testimonial.tsx:121:20" data-component-path="src/app/components/testimonial.tsx" data-component-line="121" data-component-end-line="121" data-component-file="testimonial.tsx" data-component-name="p" data-component-content="%7B%22elementName%22%3A%22p%22%2C%22className%22%3A%22font-display%20text-lg%20font-bold%20text-ink%22%7D" className="font-display text-lg font-bold text-ink">{testimonials[activeIndex].name}</p>
                    <p data-component-id="src/app/components/testimonial.tsx:122:20" data-component-path="src/app/components/testimonial.tsx" data-component-line="122" data-component-end-line="122" data-component-file="testimonial.tsx" data-component-name="p" data-component-content="%7B%22elementName%22%3A%22p%22%2C%22className%22%3A%22text-xs%20font-bold%20uppercase%20tracking-%5B0.3em%5D%20text-shade%20mt-0.5%22%7D" className="text-xs font-bold uppercase tracking-[0.3em] text-shade mt-0.5">{testimonials[activeIndex].role}</p>
                  </div>
                  <div data-component-id="src/app/components/testimonial.tsx:124:18" data-component-path="src/app/components/testimonial.tsx" data-component-line="124" data-component-end-line="129" data-component-file="testimonial.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22flex%20flex-col%20items-start%20sm%3Aitems-end%20gap-2%22%7D" className="flex flex-col items-start sm:items-end gap-2">
                    <StarRating data-component-id="src/app/components/testimonial.tsx:125:20" data-component-path="src/app/components/testimonial.tsx" data-component-line="125" data-component-end-line="125" data-component-file="testimonial.tsx" data-component-name="StarRating" data-component-content="%7B%22elementName%22%3A%22StarRating%22%7D" count={testimonials[activeIndex].rating} />
                    <span data-component-id="src/app/components/testimonial.tsx:126:20" data-component-path="src/app/components/testimonial.tsx" data-component-line="126" data-component-end-line="128" data-component-file="testimonial.tsx" data-component-name="span" data-component-content="%7B%22elementName%22%3A%22span%22%2C%22className%22%3A%22text-xs%20font-bold%20uppercase%20tracking-%5B0.3em%5D%20text-coffee%20bg-blush%2F50%20rounded-full%20px-3%20py-1%22%7D" className="text-xs font-bold uppercase tracking-[0.3em] text-coffee bg-blush/50 rounded-full px-3 py-1">
                      {testimonials[activeIndex].service}
                    </span>
                  </div>
                </div>

                {/* Result badge */}
                <div data-component-id="src/app/components/testimonial.tsx:133:16" data-component-path="src/app/components/testimonial.tsx" data-component-line="133" data-component-end-line="138" data-component-file="testimonial.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22inline-flex%20items-center%20gap-2%20bg-bg%20rounded-full%20px-4%20py-2%20border%20border-border%22%7D" className="inline-flex items-center gap-2 bg-bg rounded-full px-4 py-2 border border-border">
                  <svg data-component-id="src/app/components/testimonial.tsx:134:18" data-component-path="src/app/components/testimonial.tsx" data-component-line="134" data-component-end-line="136" data-component-file="testimonial.tsx" data-component-name="svg" data-component-content="%7B%22elementName%22%3A%22svg%22%2C%22className%22%3A%22w-4%20h-4%20fill-coffee%22%7D" viewBox="0 0 24 24" className="w-4 h-4 fill-coffee">
                    <path data-component-id="src/app/components/testimonial.tsx:135:20" data-component-path="src/app/components/testimonial.tsx" data-component-line="135" data-component-end-line="135" data-component-file="testimonial.tsx" data-component-name="path" data-component-content="%7B%22elementName%22%3A%22path%22%7D" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span data-component-id="src/app/components/testimonial.tsx:137:18" data-component-path="src/app/components/testimonial.tsx" data-component-line="137" data-component-end-line="137" data-component-file="testimonial.tsx" data-component-name="span" data-component-content="%7B%22elementName%22%3A%22span%22%2C%22className%22%3A%22text-xs%20font-bold%20text-shade%22%7D" className="text-xs font-bold text-shade">{testimonials[activeIndex].result}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Selector dots + mini cards */}
          <div data-component-id="src/app/components/testimonial.tsx:144:10" data-component-path="src/app/components/testimonial.tsx" data-component-line="144" data-component-end-line="171" data-component-file="testimonial.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22flex%20flex-col%20sm%3Aflex-row%20gap-3%22%7D" className="flex flex-col sm:flex-row gap-3">
            {testimonials.map((t, i) => (
              <button data-component-id="src/app/components/testimonial.tsx:146:14" data-component-path="src/app/components/testimonial.tsx" data-component-line="146" data-component-end-line="169" data-component-file="testimonial.tsx" data-component-name="button" data-component-content="%7B%22elementName%22%3A%22button%22%7D"
                key={t.name}
                onClick={() => setActiveIndex(i)}
                className={`flex-1 p-4 rounded-2xl border transition-all duration-300 text-left spring-hover ${
                  activeIndex === i
                    ? 'bg-coffee border-coffee text-vanilla' :'bg-vanilla border-border text-ink hover:border-coffee'
                }`}
              >
                <div data-component-id="src/app/components/testimonial.tsx:154:16" data-component-path="src/app/components/testimonial.tsx" data-component-line="154" data-component-end-line="168" data-component-file="testimonial.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22flex%20items-center%20gap-3%22%7D" className="flex items-center gap-3">
                  <div data-component-id="src/app/components/testimonial.tsx:155:18" data-component-path="src/app/components/testimonial.tsx" data-component-line="155" data-component-end-line="163" data-component-file="testimonial.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22w-10%20h-10%20rounded-xl%20overflow-hidden%20shrink-0%22%7D" className="w-10 h-10 rounded-xl overflow-hidden shrink-0">
                    <AppImage data-component-id="src/app/components/testimonial.tsx:156:20" data-component-path="src/app/components/testimonial.tsx" data-component-line="156" data-component-end-line="162" data-component-file="testimonial.tsx" data-component-name="AppImage" data-component-content="%7B%22elementName%22%3A%22AppImage%22%2C%22className%22%3A%22object-cover%20w-full%20h-full%22%7D"
                      src={t.image}
                      alt={t.imageAlt}
                      width={40}
                      height={40}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div data-component-id="src/app/components/testimonial.tsx:164:18" data-component-path="src/app/components/testimonial.tsx" data-component-line="164" data-component-end-line="167" data-component-file="testimonial.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22min-w-0%22%7D" className="min-w-0">
                    <p data-component-id="src/app/components/testimonial.tsx:165:20" data-component-path="src/app/components/testimonial.tsx" data-component-line="165" data-component-end-line="165" data-component-file="testimonial.tsx" data-component-name="p" data-component-content="%7B%22elementName%22%3A%22p%22%7D" className={`text-sm font-bold truncate ${activeIndex === i ? 'text-vanilla' : 'text-ink'}`}>{t.name}</p>
                    <p data-component-id="src/app/components/testimonial.tsx:166:20" data-component-path="src/app/components/testimonial.tsx" data-component-line="166" data-component-end-line="166" data-component-file="testimonial.tsx" data-component-name="p" data-component-content="%7B%22elementName%22%3A%22p%22%7D" className={`text-xs truncate ${activeIndex === i ? 'text-vanilla/70' : 'text-ink/50'}`}>{t.service}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Stats row */}
        <div data-component-id="src/app/components/testimonial.tsx:175:8" data-component-path="src/app/components/testimonial.tsx" data-component-line="175" data-component-end-line="191" data-component-file="testimonial.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%7D"
          className={`mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 animate-on-scroll ${visible ? 'animate-fade-up' : 'opacity-0'}`}
          style={{ animationDelay: '200ms' }}
        >
          {[
            { value: '4.9', label: 'Google Rating', sub: '280+ reviews' },
            { value: '98%', label: 'Return Rate', sub: 'Within 6 months' },
            { value: '2,400+', label: 'Clients Served', sub: 'Since 2014' },
            { value: '0', label: 'Walk-ins', sub: 'By appointment only' },
          ].map((stat) => (
            <div data-component-id="src/app/components/testimonial.tsx:185:12" data-component-path="src/app/components/testimonial.tsx" data-component-line="185" data-component-end-line="189" data-component-file="testimonial.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22bg-vanilla%20rounded-2xl%20p-5%20border%20border-border%20text-center%20spring-hover%22%7D" key={stat.label} className="bg-vanilla rounded-2xl p-5 border border-border text-center spring-hover">
              <p data-component-id="src/app/components/testimonial.tsx:186:14" data-component-path="src/app/components/testimonial.tsx" data-component-line="186" data-component-end-line="186" data-component-file="testimonial.tsx" data-component-name="p" data-component-content="%7B%22elementName%22%3A%22p%22%2C%22className%22%3A%22font-display%20text-3xl%20sm%3Atext-4xl%20font-black%20text-ink%20mb-1%22%7D" className="font-display text-3xl sm:text-4xl font-black text-ink mb-1">{stat.value}</p>
              <p data-component-id="src/app/components/testimonial.tsx:187:14" data-component-path="src/app/components/testimonial.tsx" data-component-line="187" data-component-end-line="187" data-component-file="testimonial.tsx" data-component-name="p" data-component-content="%7B%22elementName%22%3A%22p%22%2C%22className%22%3A%22text-xs%20font-bold%20uppercase%20tracking-%5B0.3em%5D%20text-shade%22%7D" className="text-xs font-bold uppercase tracking-[0.3em] text-shade">{stat.label}</p>
              <p data-component-id="src/app/components/testimonial.tsx:188:14" data-component-path="src/app/components/testimonial.tsx" data-component-line="188" data-component-end-line="188" data-component-file="testimonial.tsx" data-component-name="p" data-component-content="%7B%22elementName%22%3A%22p%22%2C%22className%22%3A%22text-xs%20text-ink%2F40%20mt-1%22%7D" className="text-xs text-ink/40 mt-1">{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}