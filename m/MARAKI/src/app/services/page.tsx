'use client';

import React, { useRef, useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AppImage from '../../components/ui/AppImage';
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
    <div data-component-id="src/app/services/page.tsx:88:4" data-component-path="src/app/services/page.tsx" data-component-line="88" data-component-end-line="206" data-component-file="page.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22grain-overlay%22%7D" className="grain-overlay">
      <Header data-component-id="src/app/services/page.tsx:89:6" data-component-path="src/app/services/page.tsx" data-component-line="89" data-component-end-line="89" data-component-file="page.tsx" data-component-name="Header" data-component-content="%7B%22elementName%22%3A%22Header%22%7D" />
      <main data-component-id="src/app/services/page.tsx:90:6" data-component-path="src/app/services/page.tsx" data-component-line="90" data-component-end-line="204" data-component-file="page.tsx" data-component-name="main" data-component-content="%7B%22elementName%22%3A%22main%22%7D">
        {/* Page Hero */}
        <section data-component-id="src/app/services/page.tsx:92:8" data-component-path="src/app/services/page.tsx" data-component-line="92" data-component-end-line="111" data-component-file="page.tsx" data-component-name="section" data-component-content="%7B%22elementName%22%3A%22section%22%2C%22className%22%3A%22pt-32%20pb-16%20bg-bg%20overflow-hidden%22%7D" className="pt-32 pb-16 bg-bg overflow-hidden">
          <div data-component-id="src/app/services/page.tsx:93:10" data-component-path="src/app/services/page.tsx" data-component-line="93" data-component-end-line="110" data-component-file="page.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22max-w-7xl%20mx-auto%20px-4%20sm%3Apx-6%20lg%3Apx-8%22%7D" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div data-component-id="src/app/services/page.tsx:94:12" data-component-path="src/app/services/page.tsx" data-component-line="94" data-component-end-line="109" data-component-file="page.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22grid%20lg%3Agrid-cols-12%20gap-8%20items-end%22%7D" className="grid lg:grid-cols-12 gap-8 items-end">
              <div data-component-id="src/app/services/page.tsx:95:14" data-component-path="src/app/services/page.tsx" data-component-line="95" data-component-end-line="103" data-component-file="page.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22lg%3Acol-span-7%22%7D" className="lg:col-span-7">
                <span data-component-id="src/app/services/page.tsx:96:16" data-component-path="src/app/services/page.tsx" data-component-line="96" data-component-end-line="98" data-component-file="page.tsx" data-component-name="span" data-component-content="%7B%22elementName%22%3A%22span%22%2C%22className%22%3A%22text-xs%20font-bold%20uppercase%20tracking-%5B0.5em%5D%20text-shade%20block%20mb-4%22%2C%22textContent%22%3A%22What%20We%20Offer%22%7D" className="text-xs font-bold uppercase tracking-[0.5em] text-shade block mb-4">
                  What We Offer
                </span>
                <h1 data-component-id="src/app/services/page.tsx:99:16" data-component-path="src/app/services/page.tsx" data-component-line="99" data-component-end-line="102" data-component-file="page.tsx" data-component-name="h1" data-component-content="%7B%22elementName%22%3A%22h1%22%2C%22className%22%3A%22font-display%20text-section-xl%20text-ink%22%2C%22textContent%22%3A%22Services%20crafted%22%7D" className="font-display text-section-xl text-ink">
                  Services crafted<br data-component-id="src/app/services/page.tsx:100:34" data-component-path="src/app/services/page.tsx" data-component-line="100" data-component-end-line="100" data-component-file="page.tsx" data-component-name="br" data-component-content="%7B%22elementName%22%3A%22br%22%7D" />
                  <span data-component-id="src/app/services/page.tsx:101:18" data-component-path="src/app/services/page.tsx" data-component-line="101" data-component-end-line="101" data-component-file="page.tsx" data-component-name="span" data-component-content="%7B%22elementName%22%3A%22span%22%2C%22className%22%3A%22italic%20text-coffee%22%2C%22textContent%22%3A%22for%20every%20strand%22%7D" className="italic text-coffee">for every strand</span>
                </h1>
              </div>
              <div data-component-id="src/app/services/page.tsx:104:14" data-component-path="src/app/services/page.tsx" data-component-line="104" data-component-end-line="108" data-component-file="page.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22lg%3Acol-span-5%20flex%20items-end%22%7D" className="lg:col-span-5 flex items-end">
                <p data-component-id="src/app/services/page.tsx:105:16" data-component-path="src/app/services/page.tsx" data-component-line="105" data-component-end-line="107" data-component-file="page.tsx" data-component-name="p" data-component-content="%7B%22elementName%22%3A%22p%22%2C%22className%22%3A%22text-base%20text-ink%2F60%20leading-relaxed%22%2C%22textContent%22%3A%22Every%20service%20at%20SalonSite%20is%20a%20considered%20ritual%20%E2%80%94%20not%20a%20transaction.%20We%20take%20time%20to%20understand%20your%20hair's%20history%20before%20we%20pick%20up%20a%20single%20tool.%22%7D" className="text-base text-ink/60 leading-relaxed">
                  Every service at SalonSite is a considered ritual — not a transaction. We take time to understand your hair's history before we pick up a single tool.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Detail */}
        <section data-component-id="src/app/services/page.tsx:114:8" data-component-path="src/app/services/page.tsx" data-component-line="114" data-component-end-line="203" data-component-file="page.tsx" data-component-name="section" data-component-content="%7B%22elementName%22%3A%22section%22%2C%22className%22%3A%22py-16%20md%3Apy-24%20bg-vanilla%22%7D" className="py-16 md:py-24 bg-vanilla">
          <div data-component-id="src/app/services/page.tsx:115:10" data-component-path="src/app/services/page.tsx" data-component-line="115" data-component-end-line="202" data-component-file="page.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22max-w-7xl%20mx-auto%20px-4%20sm%3Apx-6%20lg%3Apx-8%22%7D" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div data-component-id="src/app/services/page.tsx:116:12" data-component-path="src/app/services/page.tsx" data-component-line="116" data-component-end-line="180" data-component-file="page.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22space-y-6%22%7D" className="space-y-6">
              {services.map((service, i) => (
                <div data-component-id="src/app/services/page.tsx:118:16" data-component-path="src/app/services/page.tsx" data-component-line="118" data-component-end-line="178" data-component-file="page.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%7D"
                  key={service.id}
                  ref={(el) => { itemRefs.current[i] = el; }}
                  data-idx={i}
                  className={`group rounded-3xl border border-border bg-bg overflow-hidden transition-all duration-500 hover:shadow-lg animate-on-scroll ${
                    visibleItems.has(i) ? 'animate-fade-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <div data-component-id="src/app/services/page.tsx:127:18" data-component-path="src/app/services/page.tsx" data-component-line="127" data-component-end-line="177" data-component-file="page.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22flex%20flex-col%20md%3Aflex-row%22%7D" className="flex flex-col md:flex-row">
                    {/* Image */}
                    <div data-component-id="src/app/services/page.tsx:129:20" data-component-path="src/app/services/page.tsx" data-component-line="129" data-component-end-line="137" data-component-file="page.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22relative%20w-full%20md%3Aw-72%20h-56%20md%3Ah-auto%20shrink-0%20overflow-hidden%22%7D" className="relative w-full md:w-72 h-56 md:h-auto shrink-0 overflow-hidden">
                      <AppImage data-component-id="src/app/services/page.tsx:130:22" data-component-path="src/app/services/page.tsx" data-component-line="130" data-component-end-line="136" data-component-file="page.tsx" data-component-name="AppImage" data-component-content="%7B%22elementName%22%3A%22AppImage%22%2C%22className%22%3A%22object-cover%20img-zoom%22%7D"
                        src={service.image}
                        alt={service.imageAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, 288px"
                        className="object-cover img-zoom"
                      />
                    </div>

                    {/* Content */}
                    <div data-component-id="src/app/services/page.tsx:140:20" data-component-path="src/app/services/page.tsx" data-component-line="140" data-component-end-line="176" data-component-file="page.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22flex-1%20p-6%20sm%3Ap-8%20flex%20flex-col%20justify-between%20gap-6%22%7D" className="flex-1 p-6 sm:p-8 flex flex-col justify-between gap-6">
                      <div data-component-id="src/app/services/page.tsx:141:22" data-component-path="src/app/services/page.tsx" data-component-line="141" data-component-end-line="155" data-component-file="page.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%7D">
                        <div data-component-id="src/app/services/page.tsx:142:24" data-component-path="src/app/services/page.tsx" data-component-line="142" data-component-end-line="153" data-component-file="page.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22flex%20items-start%20justify-between%20gap-4%20mb-3%22%7D" className="flex items-start justify-between gap-4 mb-3">
                          <div data-component-id="src/app/services/page.tsx:143:26" data-component-path="src/app/services/page.tsx" data-component-line="143" data-component-end-line="148" data-component-file="page.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%7D">
                            <span data-component-id="src/app/services/page.tsx:144:28" data-component-path="src/app/services/page.tsx" data-component-line="144" data-component-end-line="144" data-component-file="page.tsx" data-component-name="span" data-component-content="%7B%22elementName%22%3A%22span%22%2C%22className%22%3A%22text-xs%20font-black%20text-ink%2F20%20block%20mb-1%22%7D" className="text-xs font-black text-ink/20 block mb-1">{service.id}</span>
                            <h2 data-component-id="src/app/services/page.tsx:145:28" data-component-path="src/app/services/page.tsx" data-component-line="145" data-component-end-line="147" data-component-file="page.tsx" data-component-name="h2" data-component-content="%7B%22elementName%22%3A%22h2%22%2C%22className%22%3A%22font-display%20text-2xl%20sm%3Atext-3xl%20font-bold%20text-ink%20group-hover%3Atext-coffee%20transition-colors%20duration-300%22%7D" className="font-display text-2xl sm:text-3xl font-bold text-ink group-hover:text-coffee transition-colors duration-300">
                              {service.name}
                            </h2>
                          </div>
                          <div data-component-id="src/app/services/page.tsx:149:26" data-component-path="src/app/services/page.tsx" data-component-line="149" data-component-end-line="152" data-component-file="page.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22text-right%20shrink-0%22%7D" className="text-right shrink-0">
                            <p data-component-id="src/app/services/page.tsx:150:28" data-component-path="src/app/services/page.tsx" data-component-line="150" data-component-end-line="150" data-component-file="page.tsx" data-component-name="p" data-component-content="%7B%22elementName%22%3A%22p%22%2C%22className%22%3A%22font-display%20text-xl%20font-bold%20text-ink%22%7D" className="font-display text-xl font-bold text-ink">{service.price}</p>
                            <p data-component-id="src/app/services/page.tsx:151:28" data-component-path="src/app/services/page.tsx" data-component-line="151" data-component-end-line="151" data-component-file="page.tsx" data-component-name="p" data-component-content="%7B%22elementName%22%3A%22p%22%2C%22className%22%3A%22text-xs%20text-ink%2F40%20font-medium%20uppercase%20tracking-widest%22%7D" className="text-xs text-ink/40 font-medium uppercase tracking-widest">{service.duration}</p>
                          </div>
                        </div>
                        <p data-component-id="src/app/services/page.tsx:154:24" data-component-path="src/app/services/page.tsx" data-component-line="154" data-component-end-line="154" data-component-file="page.tsx" data-component-name="p" data-component-content="%7B%22elementName%22%3A%22p%22%2C%22className%22%3A%22text-sm%20text-ink%2F60%20leading-relaxed%22%7D" className="text-sm text-ink/60 leading-relaxed">{service.description}</p>
                      </div>

                      <div data-component-id="src/app/services/page.tsx:157:22" data-component-path="src/app/services/page.tsx" data-component-line="157" data-component-end-line="175" data-component-file="page.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22flex%20flex-col%20sm%3Aflex-row%20sm%3Aitems-center%20sm%3Ajustify-between%20gap-4%22%7D" className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        {/* Includes */}
                        <div data-component-id="src/app/services/page.tsx:159:24" data-component-path="src/app/services/page.tsx" data-component-line="159" data-component-end-line="168" data-component-file="page.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22flex%20flex-wrap%20gap-2%22%7D" className="flex flex-wrap gap-2">
                          {service.includes.map((item) => (
                            <span data-component-id="src/app/services/page.tsx:161:28" data-component-path="src/app/services/page.tsx" data-component-line="161" data-component-end-line="166" data-component-file="page.tsx" data-component-name="span" data-component-content="%7B%22elementName%22%3A%22span%22%2C%22className%22%3A%22text-xs%20font-bold%20uppercase%20tracking-%5B0.2em%5D%20text-shade%20bg-blush%2F40%20rounded-full%20px-3%20py-1%22%7D"
                              key={item}
                              className="text-xs font-bold uppercase tracking-[0.2em] text-shade bg-blush/40 rounded-full px-3 py-1"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                        <Link data-component-id="src/app/services/page.tsx:169:24" data-component-path="src/app/services/page.tsx" data-component-line="169" data-component-end-line="174" data-component-file="page.tsx" data-component-name="Link" data-component-content="%7B%22elementName%22%3A%22Link%22%2C%22href%22%3A%22%2Fbookings%22%2C%22className%22%3A%22btn-primary%20text-xs%20py-3%20px-6%20shrink-0%20text-center%22%2C%22textContent%22%3A%22Book%20This%20Service%22%7D"
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
            <div data-component-id="src/app/services/page.tsx:183:12" data-component-path="src/app/services/page.tsx" data-component-line="183" data-component-end-line="201" data-component-file="page.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%7D"
              ref={(el) => { itemRefs.current[services.length] = el; }}
              data-idx={services.length}
              className={`mt-16 bg-coffee rounded-3xl p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6 animate-on-scroll ${
                visibleItems.has(services.length) ? 'animate-fade-up' : 'opacity-0'
              }`}
            >
              <div data-component-id="src/app/services/page.tsx:190:14" data-component-path="src/app/services/page.tsx" data-component-line="190" data-component-end-line="197" data-component-file="page.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%7D">
                <h3 data-component-id="src/app/services/page.tsx:191:16" data-component-path="src/app/services/page.tsx" data-component-line="191" data-component-end-line="193" data-component-file="page.tsx" data-component-name="h3" data-component-content="%7B%22elementName%22%3A%22h3%22%2C%22className%22%3A%22font-display%20text-2xl%20sm%3Atext-3xl%20font-bold%20text-vanilla%20mb-2%22%2C%22textContent%22%3A%22Not%20sure%20what%20you%20need%3F%22%7D" className="font-display text-2xl sm:text-3xl font-bold text-vanilla mb-2">
                  Not sure what you need?
                </h3>
                <p data-component-id="src/app/services/page.tsx:194:16" data-component-path="src/app/services/page.tsx" data-component-line="194" data-component-end-line="196" data-component-file="page.tsx" data-component-name="p" data-component-content="%7B%22elementName%22%3A%22p%22%2C%22className%22%3A%22text-vanilla%2F70%20text-sm%20leading-relaxed%22%2C%22textContent%22%3A%22Book%20a%20complimentary%20consultation%20and%20we'll%20guide%20you%20to%20the%20perfect%20service.%22%7D" className="text-vanilla/70 text-sm leading-relaxed">
                  Book a complimentary consultation and we'll guide you to the perfect service.
                </p>
              </div>
              <Link data-component-id="src/app/services/page.tsx:198:14" data-component-path="src/app/services/page.tsx" data-component-line="198" data-component-end-line="200" data-component-file="page.tsx" data-component-name="Link" data-component-content="%7B%22elementName%22%3A%22Link%22%2C%22href%22%3A%22%2Fbookings%22%2C%22className%22%3A%22btn-primary%20bg-vanilla%20text-ink%20hover%3Abg-blush%20shrink-0%20text-sm%20py-4%20px-8%22%2C%22textContent%22%3A%22Book%20a%20Consultation%22%7D" href="/bookings" className="btn-primary bg-vanilla text-ink hover:bg-blush shrink-0 text-sm py-4 px-8">
                Book a Consultation
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer data-component-id="src/app/services/page.tsx:205:6" data-component-path="src/app/services/page.tsx" data-component-line="205" data-component-end-line="205" data-component-file="page.tsx" data-component-name="Footer" data-component-content="%7B%22elementName%22%3A%22Footer%22%7D" />
    </div>
  );
}
