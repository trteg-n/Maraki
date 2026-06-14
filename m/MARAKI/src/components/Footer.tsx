import React from 'react';
import Link from 'next/link';
import AppLogo from '../components/ui/AppLogo';

export default function Footer() {
  return (
    <footer data-component-id="src/components/Footer.tsx:7:4" data-component-path="src/components/Footer.tsx" data-component-line="7" data-component-end-line="66" data-component-file="Footer.tsx" data-component-name="footer" data-component-content="%7B%22elementName%22%3A%22footer%22%2C%22className%22%3A%22bg-vanilla%20border-t%20border-border%22%7D" className="bg-vanilla border-t border-border">
      <div data-component-id="src/components/Footer.tsx:8:6" data-component-path="src/components/Footer.tsx" data-component-line="8" data-component-end-line="65" data-component-file="Footer.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22max-w-7xl%20mx-auto%20px-4%20sm%3Apx-6%20lg%3Apx-8%20py-16%22%7D" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div data-component-id="src/components/Footer.tsx:9:8" data-component-path="src/components/Footer.tsx" data-component-line="9" data-component-end-line="55" data-component-file="Footer.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22flex%20flex-col%20sm%3Aflex-row%20items-center%20justify-between%20gap-6%22%7D" className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo + Brand */}
          <Link data-component-id="src/components/Footer.tsx:11:10" data-component-path="src/components/Footer.tsx" data-component-line="11" data-component-end-line="16" data-component-file="Footer.tsx" data-component-name="Link" data-component-content="%7B%22elementName%22%3A%22Link%22%2C%22href%22%3A%22%2F%22%2C%22className%22%3A%22flex%20items-center%20gap-3%22%7D" href="/" className="flex items-center gap-3">
            <AppLogo data-component-id="src/components/Footer.tsx:12:12" data-component-path="src/components/Footer.tsx" data-component-line="12" data-component-end-line="12" data-component-file="Footer.tsx" data-component-name="AppLogo" data-component-content="%7B%22elementName%22%3A%22AppLogo%22%7D" size={32} />
            <span data-component-id="src/components/Footer.tsx:13:12" data-component-path="src/components/Footer.tsx" data-component-line="13" data-component-end-line="15" data-component-file="Footer.tsx" data-component-name="span" data-component-content="%7B%22elementName%22%3A%22span%22%2C%22className%22%3A%22font-display%20text-lg%20font-semibold%20tracking-tight%20text-ink%22%2C%22textContent%22%3A%22Maraki%20Ladies%20Salon%22%7D" className="font-display text-lg font-semibold tracking-tight text-ink">
              Maraki Ladies Salon
            </span>
          </Link>

          {/* Links */}
          <nav data-component-id="src/components/Footer.tsx:19:10" data-component-path="src/components/Footer.tsx" data-component-line="19" data-component-end-line="35" data-component-file="Footer.tsx" data-component-name="nav" data-component-content="%7B%22elementName%22%3A%22nav%22%2C%22className%22%3A%22flex%20flex-wrap%20items-center%20justify-center%20gap-6%20sm%3Agap-8%22%7D" className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
            {[
              { label: 'Services', href: '/services' },
              { label: 'Gallery', href: '/gallery' },
              { label: 'Book', href: '/bookings' },
              { label: 'Privacy', href: '#' },
              { label: 'Terms', href: '#' },
            ]?.map((link) => (
              <Link data-component-id="src/components/Footer.tsx:27:14" data-component-path="src/components/Footer.tsx" data-component-line="27" data-component-end-line="33" data-component-file="Footer.tsx" data-component-name="Link" data-component-content="%7B%22elementName%22%3A%22Link%22%2C%22className%22%3A%22text-sm%20font-medium%20text-shade%20hover%3Atext-ink%20transition-colors%20duration-200%22%7D"
                key={link?.label}
                href={link?.href}
                className="text-sm font-medium text-shade hover:text-ink transition-colors duration-200"
              >
                {link?.label}
              </Link>
            ))}
          </nav>

          {/* Social + Copyright */}
          <div data-component-id="src/components/Footer.tsx:38:10" data-component-path="src/components/Footer.tsx" data-component-line="38" data-component-end-line="54" data-component-file="Footer.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22flex%20items-center%20gap-4%22%7D" className="flex items-center gap-4">
            {[
              { label: 'Instagram', href: '#', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z' },
              { label: 'Facebook', href: '#', icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
            ]?.map((social) => (
              <a data-component-id="src/components/Footer.tsx:43:14" data-component-path="src/components/Footer.tsx" data-component-line="43" data-component-end-line="52" data-component-file="Footer.tsx" data-component-name="a" data-component-content="%7B%22elementName%22%3A%22a%22%2C%22className%22%3A%22w-9%20h-9%20rounded-full%20border%20border-border%20flex%20items-center%20justify-center%20text-shade%20hover%3Atext-ink%20hover%3Aborder-ink%20transition-all%20duration-200%22%7D"
                key={social?.label}
                href={social?.href}
                aria-label={social?.label}
                className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-shade hover:text-ink hover:border-ink transition-all duration-200"
              >
                <svg data-component-id="src/components/Footer.tsx:49:16" data-component-path="src/components/Footer.tsx" data-component-line="49" data-component-end-line="51" data-component-file="Footer.tsx" data-component-name="svg" data-component-content="%7B%22elementName%22%3A%22svg%22%2C%22className%22%3A%22w-4%20h-4%20fill-current%22%7D" viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path data-component-id="src/components/Footer.tsx:50:18" data-component-path="src/components/Footer.tsx" data-component-line="50" data-component-end-line="50" data-component-file="Footer.tsx" data-component-name="path" data-component-content="%7B%22elementName%22%3A%22path%22%7D" d={social?.icon} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div data-component-id="src/components/Footer.tsx:57:8" data-component-path="src/components/Footer.tsx" data-component-line="57" data-component-end-line="64" data-component-file="Footer.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22mt-10%20pt-6%20border-t%20border-border%20flex%20flex-col%20sm%3Aflex-row%20items-center%20justify-between%20gap-3%22%7D" className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p data-component-id="src/components/Footer.tsx:58:10" data-component-path="src/components/Footer.tsx" data-component-line="58" data-component-end-line="60" data-component-file="Footer.tsx" data-component-name="p" data-component-content="%7B%22elementName%22%3A%22p%22%2C%22className%22%3A%22text-xs%20text-shade%2F60%20font-medium%22%2C%22textContent%22%3A%22%C2%A9%202026%20SalonSite.%20All%20rights%20reserved.%22%7D" className="text-xs text-shade/60 font-medium">
            © 2026 SalonSite. All rights reserved.
          </p>
          <p data-component-id="src/components/Footer.tsx:61:10" data-component-path="src/components/Footer.tsx" data-component-line="61" data-component-end-line="63" data-component-file="Footer.tsx" data-component-name="p" data-component-content="%7B%22elementName%22%3A%22p%22%2C%22className%22%3A%22text-xs%20text-shade%2F40%20font-medium%20uppercase%20tracking-widest%22%2C%22textContent%22%3A%22New%20York%20City%22%7D" className="text-xs text-shade/40 font-medium uppercase tracking-widest">
            New York City
          </p>
        </div>
      </div>
    </footer>
  );
}