import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Fraunces, DM_Sans } from 'next/font/google';
import '../styles/tailwind.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '900'],
  variable: '--font-fraunces',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'Maraki Ladies Salon — One of the Best Hair Salons in Alain',
  description: 'Maraki offers premium haircuts, color, and styling in Al-Ain. Book your appointment today and experience artisan hair care.',
  icons: {
    icon: [{ url: '/favicon.ico', type: 'image/x-icon' }],
  },
  openGraph: {
    title: 'Maraki — Luxury Hair Salon',
    description: 'Premium haircuts, color, and styling in New York.',
    images: [{ url: '/assets/images/maraki-logo.svg', width: 512, height: 512 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html data-component-id="src/app/layout.tsx:43:4" data-component-path="src/app/layout.tsx" data-component-line="43" data-component-end-line="49" data-component-file="layout.tsx" data-component-name="html" data-component-content="%7B%22elementName%22%3A%22html%22%7D" lang="en" data-scroll-behavior="smooth" className={`${fraunces.variable} ${dmSans.variable}`}>
      <body data-component-id="src/app/layout.tsx:44:6" data-component-path="src/app/layout.tsx" data-component-line="44" data-component-end-line="48" data-component-file="layout.tsx" data-component-name="body" data-component-content="%7B%22elementName%22%3A%22body%22%7D" className={dmSans.className}>
        {children}</body>
    </html>
  );
}