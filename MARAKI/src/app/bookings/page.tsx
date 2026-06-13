import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookingSection from '@/app/components/BookingSection';

export default function BookingsPage() {
  return (
    <div className="grain-overlay">
      <Header />
      <main>
        {/* Page Hero */}
        <section className="pt-32 pb-0 bg-bg overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
            <div className="grid lg:grid-cols-12 gap-8 items-end">
              <div className="lg:col-span-7">
                <span className="text-xs font-bold uppercase tracking-[0.5em] text-shade block mb-4">
                  Appointments
                </span>
                <h1 className="font-display text-section-xl text-ink">
                  Reserve your<br />
                  <span className="italic text-coffee">chair</span>
                </h1>
              </div>
              <div className="lg:col-span-5 flex items-end">
                <p className="text-base text-ink/60 leading-relaxed">
                  We're appointment-only to ensure every client receives our full, undivided attention. Slots fill quickly — book at least 2 weeks in advance.
                </p>
              </div>
            </div>
          </div>
        </section>
        <BookingSection />
      </main>
      <Footer />
    </div>
  );
}
