import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../app/components/herosection';
import ServicesSection from '../app/components/servicessection';
import GallerySection from '../app/components/gallerysection';
import AboutSection from '../app/components/aboutpage';
import TestimonialsSection from '../app/components/testimonial';
import BookingSection from '../app/components/bookingsession';
import { Organization, WebPage } from 'schema-dts';
const organizationSchema: Organization = {
  '@type': 'Organization',
  name: 'Maraki Ladies Salon',
  url: 'http://localhost:3000',
  logo: 'http://localhost:3000/assets/img/logo.png',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '0566101851',
    contactType: 'customer service',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Al Bateel St',
    addressLocality: 'Central District',
    addressRegion: 'Alain',
    postalCode: '00000',
    addressCountry: 'UAE',
  },
};

const webPageSchema: WebPage = {
  '@type': 'WebPage',
  name: 'SalonSite — Luxury Hair Salon in New York',
  description:
    'SalonSite offers premium haircuts, color, and styling in New York. Book your appointment today.',
  url: 'http://localhost:3000',
};

export default function HomePage() {
  return (
    <>
      <script data-component-id="src/app/page.tsx:42:6" data-component-path="src/app/page.tsx" data-component-line="42" data-component-end-line="50" data-component-file="page.tsx" data-component-name="script" data-component-content="%7B%22elementName%22%3A%22script%22%2C%22type%22%3A%22application%2Fld%2Bjson%22%7D"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [organizationSchema, webPageSchema],
          }),
        }}
      />
      <div data-component-id="src/app/page.tsx:51:6" data-component-path="src/app/page.tsx" data-component-line="51" data-component-end-line="68" data-component-file="page.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22grain-overlay%22%7D" className="grain-overlay">
        {/* Grand Opening Banner — sits above the fixed header */}
        <div data-component-id="src/app/page.tsx:53:8" data-component-path="src/app/page.tsx" data-component-line="53" data-component-end-line="57" data-component-file="page.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22fixed%20top-0%20left-0%20right-0%20z-%5B60%5D%20bg-gradient-to-r%20from-coffee%20via-blush%20to-coffee%20text-vanilla%20text-center%20py-2.5%20px-4%22%7D" className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-coffee via-blush to-coffee text-vanilla text-center py-2.5 px-4">
          <p data-component-id="src/app/page.tsx:54:10" data-component-path="src/app/page.tsx" data-component-line="54" data-component-end-line="56" data-component-file="page.tsx" data-component-name="p" data-component-content="%7B%22elementName%22%3A%22p%22%2C%22className%22%3A%22text-xs%20sm%3Atext-sm%20font-bold%20uppercase%20tracking-%5B0.25em%5D%20sm%3Atracking-%5B0.3em%5D%22%2C%22textContent%22%3A%22%F0%9F%8E%89%20Grand%20Opening%20%E2%80%94%20%E2%80%94%20Come%20Celebrate%20With%20Us!%20%F0%9F%8E%89%22%7D" className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] sm:tracking-[0.3em]">
            🎉 Grand Opening — <span data-component-id="src/app/page.tsx:55:31" data-component-path="src/app/page.tsx" data-component-line="55" data-component-end-line="55" data-component-file="page.tsx" data-component-name="span" data-component-content="%7B%22elementName%22%3A%22span%22%2C%22className%22%3A%22font-black%22%2C%22textContent%22%3A%2221st%20June%202026%22%7D" className="font-black">21st June 2026</span> — Come Celebrate With Us! 🎉
          </p>
        </div>
        <Header data-component-id="src/app/page.tsx:58:8" data-component-path="src/app/page.tsx" data-component-line="58" data-component-end-line="58" data-component-file="page.tsx" data-component-name="Header" data-component-content="%7B%22elementName%22%3A%22Header%22%7D" />
        <main data-component-id="src/app/page.tsx:59:8" data-component-path="src/app/page.tsx" data-component-line="59" data-component-end-line="66" data-component-file="page.tsx" data-component-name="main" data-component-content="%7B%22elementName%22%3A%22main%22%7D">
          <HeroSection data-component-id="src/app/page.tsx:60:10" data-component-path="src/app/page.tsx" data-component-line="60" data-component-end-line="60" data-component-file="page.tsx" data-component-name="HeroSection" data-component-content="%7B%22elementName%22%3A%22HeroSection%22%7D" />
          <ServicesSection data-component-id="src/app/page.tsx:61:10" data-component-path="src/app/page.tsx" data-component-line="61" data-component-end-line="61" data-component-file="page.tsx" data-component-name="ServicesSection" data-component-content="%7B%22elementName%22%3A%22ServicesSection%22%7D" />
          <GallerySection data-component-id="src/app/page.tsx:62:10" data-component-path="src/app/page.tsx" data-component-line="62" data-component-end-line="62" data-component-file="page.tsx" data-component-name="GallerySection" data-component-content="%7B%22elementName%22%3A%22GallerySection%22%7D" />
          <AboutSection data-component-id="src/app/page.tsx:63:10" data-component-path="src/app/page.tsx" data-component-line="63" data-component-end-line="63" data-component-file="page.tsx" data-component-name="AboutSection" data-component-content="%7B%22elementName%22%3A%22AboutSection%22%7D" />
          <TestimonialsSection data-component-id="src/app/page.tsx:64:10" data-component-path="src/app/page.tsx" data-component-line="64" data-component-end-line="64" data-component-file="page.tsx" data-component-name="TestimonialsSection" data-component-content="%7B%22elementName%22%3A%22TestimonialsSection%22%7D" />
          <BookingSection data-component-id="src/app/page.tsx:65:10" data-component-path="src/app/page.tsx" data-component-line="65" data-component-end-line="65" data-component-file="page.tsx" data-component-name="BookingSection" data-component-content="%7B%22elementName%22%3A%22BookingSection%22%7D" />
        </main>
        <Footer data-component-id="src/app/page.tsx:67:8" data-component-path="src/app/page.tsx" data-component-line="67" data-component-end-line="67" data-component-file="page.tsx" data-component-name="Footer" data-component-content="%7B%22elementName%22%3A%22Footer%22%7D" />
      </div>
    </>
  );
}