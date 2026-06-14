'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AppLogo from '../components/ui/AppLogo';

const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'About', href: '/#about' },
  { label: 'Testimonials', href: '/#testimonials' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 60);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    return () => document.body.classList.remove('menu-open');
  }, [menuOpen]);

  const isActive = (href: string) => {
    if (href.startsWith('/#')) return false;
    return pathname === href;
  };

  return (
    <>
      <header data-component-id="src/components/Header.tsx:45:6" data-component-path="src/components/Header.tsx" data-component-line="45" data-component-end-line="115" data-component-file="Header.tsx" data-component-name="header" data-component-content="%7B%22elementName%22%3A%22header%22%7D"
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-vanilla shadow-sm border-b border-border'
            : 'bg-vanilla border-b border-border'
        }`}
        style={{ top: '40px' }}
      >
        <div data-component-id="src/components/Header.tsx:53:8" data-component-path="src/components/Header.tsx" data-component-line="53" data-component-end-line="114" data-component-file="Header.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22max-w-7xl%20mx-auto%20px-4%20sm%3Apx-6%20lg%3Apx-8%20h-20%20flex%20items-center%20justify-between%22%7D" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link data-component-id="src/components/Header.tsx:55:10" data-component-path="src/components/Header.tsx" data-component-line="55" data-component-end-line="63" data-component-file="Header.tsx" data-component-name="Link" data-component-content="%7B%22elementName%22%3A%22Link%22%2C%22href%22%3A%22%2F%22%2C%22className%22%3A%22flex%20items-center%20gap-3%20group%20z-10%22%7D" href="/" className="flex items-center gap-3 group z-10">
            <AppLogo data-component-id="src/components/Header.tsx:56:12" data-component-path="src/components/Header.tsx" data-component-line="56" data-component-end-line="59" data-component-file="Header.tsx" data-component-name="AppLogo" data-component-content="%7B%22elementName%22%3A%22AppLogo%22%2C%22className%22%3A%22transition-transform%20duration-300%20group-hover%3Ascale-105%22%7D"
              size={40}
              className="transition-transform duration-300 group-hover:scale-105"
            />
            <span data-component-id="src/components/Header.tsx:60:12" data-component-path="src/components/Header.tsx" data-component-line="60" data-component-end-line="62" data-component-file="Header.tsx" data-component-name="span" data-component-content="%7B%22elementName%22%3A%22span%22%2C%22className%22%3A%22font-display%20text-xl%20font-semibold%20tracking-tight%20text-ink%20hidden%20sm%3Ablock%22%2C%22textContent%22%3A%22Maraki%20Ladies%20Salon%22%7D" className="font-display text-xl font-semibold tracking-tight text-ink hidden sm:block">
              Maraki Ladies Salon
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav data-component-id="src/components/Header.tsx:66:10" data-component-path="src/components/Header.tsx" data-component-line="66" data-component-end-line="80" data-component-file="Header.tsx" data-component-name="nav" data-component-content="%7B%22elementName%22%3A%22nav%22%2C%22className%22%3A%22hidden%20md%3Aflex%20items-center%20gap-10%22%7D" className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link data-component-id="src/components/Header.tsx:68:14" data-component-path="src/components/Header.tsx" data-component-line="68" data-component-end-line="78" data-component-file="Header.tsx" data-component-name="Link" data-component-content="%7B%22elementName%22%3A%22Link%22%7D"
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`text-xs font-bold uppercase tracking-[0.3em] transition-all duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-coffee after:transition-all after:duration-300 ${
                  isActive(link.href)
                    ? 'text-coffee after:w-full' :'text-ink/60 hover:text-coffee after:w-0 hover:after:w-full'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div data-component-id="src/components/Header.tsx:83:10" data-component-path="src/components/Header.tsx" data-component-line="83" data-component-end-line="90" data-component-file="Header.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22hidden%20md%3Aflex%20items-center%20gap-4%22%7D" className="hidden md:flex items-center gap-4">
            <Link data-component-id="src/components/Header.tsx:84:12" data-component-path="src/components/Header.tsx" data-component-line="84" data-component-end-line="89" data-component-file="Header.tsx" data-component-name="Link" data-component-content="%7B%22elementName%22%3A%22Link%22%2C%22href%22%3A%22%2Fbookings%22%2C%22className%22%3A%22btn-primary%20text-xs%20py-3%20px-6%22%2C%22textContent%22%3A%22Book%20Now%22%7D"
              href="/bookings"
              className="btn-primary text-xs py-3 px-6"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button data-component-id="src/components/Header.tsx:93:10" data-component-path="src/components/Header.tsx" data-component-line="93" data-component-end-line="113" data-component-file="Header.tsx" data-component-name="button" data-component-content="%7B%22elementName%22%3A%22button%22%2C%22className%22%3A%22md%3Ahidden%20flex%20flex-col%20gap-1.5%20p-2%20z-10%22%7D"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 z-10"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <span data-component-id="src/components/Header.tsx:98:12" data-component-path="src/components/Header.tsx" data-component-line="98" data-component-end-line="102" data-component-file="Header.tsx" data-component-name="span" data-component-content="%7B%22elementName%22%3A%22span%22%7D"
              className={`block h-0.5 w-6 bg-ink transition-all duration-300 ${
                menuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span data-component-id="src/components/Header.tsx:103:12" data-component-path="src/components/Header.tsx" data-component-line="103" data-component-end-line="107" data-component-file="Header.tsx" data-component-name="span" data-component-content="%7B%22elementName%22%3A%22span%22%7D"
              className={`block h-0.5 w-6 bg-ink transition-all duration-300 ${
                menuOpen ? 'opacity-0 scale-x-0' : ''
              }`}
            />
            <span data-component-id="src/components/Header.tsx:108:12" data-component-path="src/components/Header.tsx" data-component-line="108" data-component-end-line="112" data-component-file="Header.tsx" data-component-name="span" data-component-content="%7B%22elementName%22%3A%22span%22%7D"
              className={`block h-0.5 w-6 bg-ink transition-all duration-300 ${
                menuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div data-component-id="src/components/Header.tsx:118:6" data-component-path="src/components/Header.tsx" data-component-line="118" data-component-end-line="144" data-component-file="Header.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%7D"
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div data-component-id="src/components/Header.tsx:123:8" data-component-path="src/components/Header.tsx" data-component-line="123" data-component-end-line="123" data-component-file="Header.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22absolute%20inset-0%20bg-vanilla%2F97%20backdrop-blur-xl%22%7D" className="absolute inset-0 bg-vanilla/97 backdrop-blur-xl" />
        <div data-component-id="src/components/Header.tsx:124:8" data-component-path="src/components/Header.tsx" data-component-line="124" data-component-end-line="143" data-component-file="Header.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22relative%20h-full%20flex%20flex-col%20items-center%20justify-center%20gap-10%20px-8%22%7D" className="relative h-full flex flex-col items-center justify-center gap-10 px-8">
          {navLinks.map((link, i) => (
            <Link data-component-id="src/components/Header.tsx:126:12" data-component-path="src/components/Header.tsx" data-component-line="126" data-component-end-line="134" data-component-file="Header.tsx" data-component-name="Link" data-component-content="%7B%22elementName%22%3A%22Link%22%2C%22className%22%3A%22font-display%20text-5xl%20font-bold%20text-ink%20hover%3Atext-coffee%20transition-colors%20duration-200%22%7D"
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-display text-5xl font-bold text-ink hover:text-coffee transition-colors duration-200"
              style={{ transitionDelay: menuOpen ? `${i * 80}ms` : '0ms' }}
            >
              {link.label}
            </Link>
          ))}
          <Link data-component-id="src/components/Header.tsx:136:10" data-component-path="src/components/Header.tsx" data-component-line="136" data-component-end-line="142" data-component-file="Header.tsx" data-component-name="Link" data-component-content="%7B%22elementName%22%3A%22Link%22%2C%22href%22%3A%22%2Fbookings%22%2C%22className%22%3A%22btn-primary%20mt-4%20text-sm%20py-4%20px-10%22%2C%22textContent%22%3A%22Book%20Appointment%22%7D"
            href="/bookings"
            onClick={() => setMenuOpen(false)}
            className="btn-primary mt-4 text-sm py-4 px-10"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </>
  );
}