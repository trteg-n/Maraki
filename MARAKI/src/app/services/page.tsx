'use client';

import React, { useRef, useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AppImage from '@/components/ui/AppImage';
import Link from 'next/link';

const services = [
  {
    id: '01',
    name: 'Precision Cuts',
    description:
      'Architectural haircuts sculpted to your face shape and lifestyle. From classic bobs to textured layers, each cut is a considered composition. We take time to understand your hair history, texture, and daily routine before a single snip.',
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1bb9e9cf9-1772839136221.png',
    imageAlt: 'Hairstylist giving a precise haircut in a bright, airy salon studio',
    price: 'From $85',
    duration: '60 min',
    includes: ['Consultation', 'Shampoo & condition', 'Blow-dry & style'],
  },
  {
    id: '02',
    name: 'Colour & Balayage',
    description:
      'Sun-kissed balayage, rich single-process colour, and creative vivids. We use only clean, professional-grade pigments for lasting vibrancy. Every colour service begins with a thorough strand test and colour consultation.',
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1a9357e6e-1772667316590.png',
    imageAlt: 'Hair colorist applying balayage technique to long blonde hair',
    price: 'From $160',
    duration: '2–3 hrs',
    includes: ['Colour consultation', 'Toning', 'Gloss treatment', 'Blow-dry'],
  },
  {
    id: '03',
    name: 'Blowouts & Styling',
    description:
      'Red-carpet-worthy blowouts, braids, and updos for every occasion. Leave looking like you just stepped off a photo shoot. Perfect for events, date nights, or simply treating yourself.',
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_196a131f1-1767745148262.png',
    imageAlt: 'Elegant updo hairstyle on a woman in a warmly lit salon',
    price: 'From $65',
    duration: '45 min',
    includes: ['Shampoo', 'Blow-dry', 'Finish styling'],
  },
  {
    id: '04',
    name: 'Treatments & Rituals',
    description:
      'Keratin smoothing, deep conditioning, and scalp rituals that restore shine, strength, and health to every hair type. Our treatment menu is curated for real results, not just temporary fixes.',
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1f7563af0-1773081713079.png',
    imageAlt: 'Relaxing hair treatment being applied at a luxury salon with warm ambient lighting',
    price: 'From $120',
    duration: '90 min',
    includes: ['Scalp analysis', 'Treatment application', 'Massage', 'Blow-dry'],
  },
  {
    id: '05',
    name: 'Bridal Services',
    description:
      'Bespoke bridal hair packages including trials, day-of styling, and on-location services for your entire party. We work closely with you in the months leading up to your wedding to ensure perfection.',
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1a90e1783-1772207747688.png',
    imageAlt: 'Bride with an elegant updo hairstyle, soft natural lighting, warm tones',
    price: 'From $350',
    duration: 'Full day',
    includes: ['Trial session', 'Day-of styling', 'Touch-up kit', 'Party styling'],
  },
];

export default function ServicesPage() {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = Number((entry.target as HTMLElement).dataset.idx);
          if (entry.isIntersecting) {
            setVisibleItems((prev) => new Set([...prev, idx]));
          }
        });
      },
      { threshold: 0.1 }
    );
    itemRefs.current.forEach((el) => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

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
                  What We Offer
                </span>
                <h1 className="font-display text-section-xl text-ink">
                  Services crafted<br />
                  <span className="italic text-coffee">for every strand</span>
                </h1>
              </div>
              <div className="lg:col-span-5 flex items-end">
                <p className="text-base text-ink/60 leading-relaxed">
                  Every service at SalonSite is a considered ritual — not a transaction. We take time to understand your hair's history before we pick up a single tool.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Detail */}
        <section className="py-16 md:py-24 bg-vanilla">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-6">
              {services.map((service, i) => (
                <div
                  key={service.id}
                  ref={(el) => { itemRefs.current[i] = el; }}
                  data-idx={i}
                  className={`group rounded-3xl border border-border bg-bg overflow-hidden transition-all duration-500 hover:shadow-lg animate-on-scroll ${
                    visibleItems.has(i) ? 'animate-fade-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <div className="flex flex-col md:flex-row">
                    {/* Image */}
                    <div className="relative w-full md:w-72 h-56 md:h-auto shrink-0 overflow-hidden">
                      <AppImage
                        src={service.image}
                        alt={service.imageAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, 288px"
                        className="object-cover img-zoom"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-6 sm:p-8 flex flex-col justify-between gap-6">
                      <div>
                        <div className="flex items-start justify-between gap-4 mb-3">
                          <div>
                            <span className="text-xs font-black text-ink/20 block mb-1">{service.id}</span>
                            <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink group-hover:text-coffee transition-colors duration-300">
                              {service.name}
                            </h2>
                          </div>
                          <div className="text-right shrink-0">
                            <p className="font-display text-xl font-bold text-ink">{service.price}</p>
                            <p className="text-xs text-ink/40 font-medium uppercase tracking-widest">{service.duration}</p>
                          </div>
                        </div>
                        <p className="text-sm text-ink/60 leading-relaxed">{service.description}</p>
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        {/* Includes */}
                        <div className="flex flex-wrap gap-2">
                          {service.includes.map((item) => (
                            <span
                              key={item}
                              className="text-xs font-bold uppercase tracking-[0.2em] text-shade bg-blush/40 rounded-full px-3 py-1"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                        <Link
                          href="/bookings"
                          className="btn-primary text-xs py-3 px-6 shrink-0 text-center"
                        >
                          Book This Service
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div
              ref={(el) => { itemRefs.current[services.length] = el; }}
              data-idx={services.length}
              className={`mt-16 bg-coffee rounded-3xl p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6 animate-on-scroll ${
                visibleItems.has(services.length) ? 'animate-fade-up' : 'opacity-0'
              }`}
            >
              <div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-vanilla mb-2">
                  Not sure what you need?
                </h3>
                <p className="text-vanilla/70 text-sm leading-relaxed">
                  Book a complimentary consultation and we'll guide you to the perfect service.
                </p>
              </div>
              <Link href="/bookings" className="btn-primary bg-vanilla text-ink hover:bg-blush shrink-0 text-sm py-4 px-8">
                Book a Consultation
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
