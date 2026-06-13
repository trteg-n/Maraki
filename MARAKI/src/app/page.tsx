import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/app/components/HeroSection';
import ServicesSection from '@/app/components/ServicesSection';
import GallerySection from '@/app/components/GallerySection';
import AboutSection from '@/app/components/AboutSection';
import TestimonialsSection from '@/app/components/TestimonialsSection';
import BookingSection from '@/app/components/BookingSection';
import { Organization, WebPage } from 'schema-dts';

const organizationSchema: Organization = {
  '@type': 'Organization',
  name: 'SalonSite',
  url: 'http://localhost:3000',
  logo: 'http://localhost:3000/assets/images/app_logo.png',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-212-555-0198',
    contactType: 'customer service',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: '148 W 57th St',
    addressLocality: 'New York',
    addressRegion: 'NY',
    postalCode: '10019',
    addressCountry: 'US',
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [organizationSchema, webPageSchema],
          }),
        }}
      />
      <div className="grain-overlay">
        {/* Grand Opening Banner — sits above the fixed header */}
        <div className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-coffee via-blush to-coffee text-vanilla text-center py-2.5 px-4">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] sm:tracking-[0.3em]">
            🎉 Grand Opening — <span className="font-black">21st June 2026</span> — Come Celebrate With Us! 🎉
          </p>
        </div>
        <Header />
        <main>
          <HeroSection />
          <ServicesSection />
          <GallerySection />
          <AboutSection />
          <TestimonialsSection />
          <BookingSection />
        </main>
        <Footer />
      </div>
    </>
  );
}