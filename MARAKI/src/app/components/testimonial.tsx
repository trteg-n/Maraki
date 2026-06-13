'use client';

import React, { useRef, useEffect, useState } from 'react';
import AppImage from '@/components/ui/AppImage';

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
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" className="w-4 h-4 fill-coffee">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
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
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-24 md:py-32 bg-blush/30 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className={`mb-16 grid lg:grid-cols-12 gap-8 animate-on-scroll ${visible ? 'animate-fade-up' : 'opacity-0'}`}>
          <div className="lg:col-span-5">
            <span className="text-xs font-bold uppercase tracking-[0.5em] text-shade block mb-4">
              Client Stories
            </span>
            <h2 className="font-display text-section-xl text-ink">
              What they<br />
              <span className="italic text-coffee">say</span>
            </h2>
          </div>
          <div className="lg:col-span-7 flex items-end">
            <p className="text-base text-ink/60 leading-relaxed max-w-md">
              Real words from real clients. We don't edit them — these are the messages that keep us going every morning.
            </p>
          </div>
        </div>

        {/* Featured testimonial */}
        <div className={`animate-on-scroll ${visible ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '100ms' }}>
          <div className="bg-vanilla rounded-4xl p-8 sm:p-12 mb-6 border border-border">
            <div className="flex flex-col lg:flex-row gap-10 items-start">
              {/* Avatar */}
              <div className="shrink-0">
                <div className="w-24 h-24 rounded-3xl overflow-hidden border-4 border-blush spring-hover">
                  <AppImage
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].imageAlt}
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 space-y-6">
                {/* Quote icon */}
                <svg viewBox="0 0 24 24" className="w-12 h-12 fill-blush">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>

                <p className="font-display text-xl sm:text-2xl font-medium text-ink leading-relaxed italic">
                  "{testimonials[activeIndex].quote}"
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <p className="font-display text-lg font-bold text-ink">{testimonials[activeIndex].name}</p>
                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-shade mt-0.5">{testimonials[activeIndex].role}</p>
                  </div>
                  <div className="flex flex-col items-start sm:items-end gap-2">
                    <StarRating count={testimonials[activeIndex].rating} />
                    <span className="text-xs font-bold uppercase tracking-[0.3em] text-coffee bg-blush/50 rounded-full px-3 py-1">
                      {testimonials[activeIndex].service}
                    </span>
                  </div>
                </div>

                {/* Result badge */}
                <div className="inline-flex items-center gap-2 bg-bg rounded-full px-4 py-2 border border-border">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-coffee">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-xs font-bold text-shade">{testimonials[activeIndex].result}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Selector dots + mini cards */}
          <div className="flex flex-col sm:flex-row gap-3">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                onClick={() => setActiveIndex(i)}
                className={`flex-1 p-4 rounded-2xl border transition-all duration-300 text-left spring-hover ${
                  activeIndex === i
                    ? 'bg-coffee border-coffee text-vanilla' :'bg-vanilla border-border text-ink hover:border-coffee'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl overflow-hidden shrink-0">
                    <AppImage
                      src={t.image}
                      alt={t.imageAlt}
                      width={40}
                      height={40}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className={`text-sm font-bold truncate ${activeIndex === i ? 'text-vanilla' : 'text-ink'}`}>{t.name}</p>
                    <p className={`text-xs truncate ${activeIndex === i ? 'text-vanilla/70' : 'text-ink/50'}`}>{t.service}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Stats row */}
        <div
          className={`mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 animate-on-scroll ${visible ? 'animate-fade-up' : 'opacity-0'}`}
          style={{ animationDelay: '200ms' }}
        >
          {[
            { value: '4.9', label: 'Google Rating', sub: '280+ reviews' },
            { value: '98%', label: 'Return Rate', sub: 'Within 6 months' },
            { value: '2,400+', label: 'Clients Served', sub: 'Since 2014' },
            { value: '0', label: 'Walk-ins', sub: 'By appointment only' },
          ].map((stat) => (
            <div key={stat.label} className="bg-vanilla rounded-2xl p-5 border border-border text-center spring-hover">
              <p className="font-display text-3xl sm:text-4xl font-black text-ink mb-1">{stat.value}</p>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-shade">{stat.label}</p>
              <p className="text-xs text-ink/40 mt-1">{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}