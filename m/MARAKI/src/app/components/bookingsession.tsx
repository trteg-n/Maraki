'use client';

import React, { useState, useRef, useEffect } from 'react';

const services = [
  'Precision Cut',
  'Colour & Balayage',
  'Blowout & Styling',
  'Treatment & Ritual',
  'Bridal Package',
  'Consultation',
];

const stylists = [
  { name: 'Isabella Reyes', specialty: 'Colour & Balayage' },
  { name: 'Marcus Webb', specialty: 'Precision Cuts' },
  { name: 'Priya Nair', specialty: 'Bridal & Events' },
  { name: 'No Preference', specialty: 'Any available stylist' },
];

const timeSlots = [
  '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM',
];

type Step = 1 | 2 | 3;

interface FormData {
  service: string;
  stylist: string;
  date: string;
  time: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  notes: string;
}

export default function BookingSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [step, setStep] = useState<Step>(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormData>({
    service: '',
    stylist: '',
    date: '',
    time: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    notes: '',
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const updateForm = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const canProceedStep1 = form.service !== '' && form.stylist !== '';
  const canProceedStep2 = form.date !== '' && form.time !== '';
  const canProceedStep3 = form.firstName !== '' && form.lastName !== '' && form.email !== '';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (canProceedStep3) {
      setSubmitted(true);
    }
  };

  const stepLabels = ['Service', 'Schedule', 'Details'];

  return (
    <section data-component-id="src/app/components/bookingsession.tsx:84:4" data-component-path="src/app/components/bookingsession.tsx" data-component-line="84" data-component-end-line="469" data-component-file="bookingsession.tsx" data-component-name="section" data-component-content="%7B%22elementName%22%3A%22section%22%2C%22id%22%3A%22booking%22%2C%22className%22%3A%22py-24%20md%3Apy-32%20bg-bg%20overflow-hidden%22%7D"
      id="booking"
      ref={sectionRef}
      className="py-24 md:py-32 bg-bg overflow-hidden"
    >
      <div data-component-id="src/app/components/bookingsession.tsx:89:6" data-component-path="src/app/components/bookingsession.tsx" data-component-line="89" data-component-end-line="468" data-component-file="bookingsession.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22max-w-7xl%20mx-auto%20px-4%20sm%3Apx-6%20lg%3Apx-8%22%7D" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div data-component-id="src/app/components/bookingsession.tsx:92:8" data-component-path="src/app/components/bookingsession.tsx" data-component-line="92" data-component-end-line="113" data-component-file="bookingsession.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%7D" className={`mb-16 grid lg:grid-cols-12 gap-8 animate-on-scroll ${visible ? 'animate-fade-up' : 'opacity-0'}`}>
          <div data-component-id="src/app/components/bookingsession.tsx:93:10" data-component-path="src/app/components/bookingsession.tsx" data-component-line="93" data-component-end-line="101" data-component-file="bookingsession.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22lg%3Acol-span-6%22%7D" className="lg:col-span-6">
            <span data-component-id="src/app/components/bookingsession.tsx:94:12" data-component-path="src/app/components/bookingsession.tsx" data-component-line="94" data-component-end-line="96" data-component-file="bookingsession.tsx" data-component-name="span" data-component-content="%7B%22elementName%22%3A%22span%22%2C%22className%22%3A%22text-xs%20font-bold%20uppercase%20tracking-%5B0-5em%5D%20text-shade%20block%20mb-4%22%2C%22textContent%22%3A%22Appointments%22%7D" className="text-xs font-bold uppercase tracking-[0-5em] text-shade block mb-4">
              Appointments
            </span>
            <h2 data-component-id="src/app/components/bookingsession.tsx:97:12" data-component-path="src/app/components/bookingsession.tsx" data-component-line="97" data-component-end-line="100" data-component-file="bookingsession.tsx" data-component-name="h2" data-component-content="%7B%22elementName%22%3A%22h2%22%2C%22className%22%3A%22font-display%20text-section-xl%20text-ink%22%2C%22textContent%22%3A%22Reserve%20your%22%7D" className="font-display text-section-xl text-ink">
              Reserve your<br data-component-id="src/app/components/bookingsession.tsx:98:26" data-component-path="src/app/components/bookingsession.tsx" data-component-line="98" data-component-end-line="98" data-component-file="bookingsession.tsx" data-component-name="br" data-component-content="%7B%22elementName%22%3A%22br%22%7D" />
              <span data-component-id="src/app/components/bookingsession.tsx:99:14" data-component-path="src/app/components/bookingsession.tsx" data-component-line="99" data-component-end-line="99" data-component-file="bookingsession.tsx" data-component-name="span" data-component-content="%7B%22elementName%22%3A%22span%22%2C%22className%22%3A%22italic%20text-coffee%22%2C%22textContent%22%3A%22chair%22%7D" className="italic text-coffee">chair</span>
            </h2>
          </div>
          <div data-component-id="src/app/components/bookingsession.tsx:102:10" data-component-path="src/app/components/bookingsession.tsx" data-component-line="102" data-component-end-line="112" data-component-file="bookingsession.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22lg%3Acol-span-6%20flex%20items-end%22%7D" className="lg:col-span-6 flex items-end">
            <div data-component-id="src/app/components/bookingsession.tsx:103:12" data-component-path="src/app/components/bookingsession.tsx" data-component-line="103" data-component-end-line="111" data-component-file="bookingsession.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22space-y-3%22%7D" className="space-y-3">
              <p data-component-id="src/app/components/bookingsession.tsx:104:14" data-component-path="src/app/components/bookingsession.tsx" data-component-line="104" data-component-end-line="106" data-component-file="bookingsession.tsx" data-component-name="p" data-component-content="%7B%22elementName%22%3A%22p%22%2C%22className%22%3A%22text-base%20text-ink%2F60%20leading-relaxed%22%2C%22textContent%22%3A%22We're%20appointment-only%20to%20ensure%20every%20client%20receives%20our%20full%2C%20undivided%20attention.%20Slots%20fill%20quickly%20%E2%80%94%20book%20at%20least%201%20day%20in%20advance.%22%7D" className="text-base text-ink/60 leading-relaxed">
                We're appointment-only to ensure every client receives our full, undivided attention. Slots fill quickly — book at least 1 day in advance.
              </p>
              <div data-component-id="src/app/components/bookingsession.tsx:107:14" data-component-path="src/app/components/bookingsession.tsx" data-component-line="107" data-component-end-line="110" data-component-file="bookingsession.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22flex%20items-center%20gap-3%20text-xs%20font-bold%20uppercase%20tracking-%5B0.3em%5D%20text-shade%22%2C%22textContent%22%3A%22Open%20Mon%20%E2%80%93%20Sat%2C%209AM%20%E2%80%93%206PM%22%7D" className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-shade">
                <div data-component-id="src/app/components/bookingsession.tsx:108:16" data-component-path="src/app/components/bookingsession.tsx" data-component-line="108" data-component-end-line="108" data-component-file="bookingsession.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22w-2%20h-2%20rounded-full%20bg-blush%22%7D" className="w-2 h-2 rounded-full bg-blush" />
                Open Mon – Sat, 9AM – 6PM
              </div>
            </div>
          </div>
        </div>

        <div data-component-id="src/app/components/bookingsession.tsx:115:8" data-component-path="src/app/components/bookingsession.tsx" data-component-line="115" data-component-end-line="467" data-component-file="bookingsession.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%7D" className={`grid lg:grid-cols-12 gap-8 animate-on-scroll ${visible ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '100ms' }}>
          {/* Left: Info panel */}
          <div data-component-id="src/app/components/bookingsession.tsx:117:10" data-component-path="src/app/components/bookingsession.tsx" data-component-line="117" data-component-end-line="166" data-component-file="bookingsession.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22lg%3Acol-span-4%20flex%20flex-col%20gap-5%22%7D" className="lg:col-span-4 flex flex-col gap-5">
            {/* Address */}
            <div data-component-id="src/app/components/bookingsession.tsx:119:12" data-component-path="src/app/components/bookingsession.tsx" data-component-line="119" data-component-end-line="129" data-component-file="bookingsession.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22bg-vanilla%20rounded-3xl%20p-6%20border%20border-border%22%7D" className="bg-vanilla rounded-3xl p-6 border border-border">
              <div data-component-id="src/app/components/bookingsession.tsx:120:14" data-component-path="src/app/components/bookingsession.tsx" data-component-line="120" data-component-end-line="125" data-component-file="bookingsession.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22w-10%20h-10%20rounded-full%20bg-blush%20flex%20items-center%20justify-center%20mb-4%22%7D" className="w-10 h-10 rounded-full bg-blush flex items-center justify-center mb-4">
                <svg data-component-id="src/app/components/bookingsession.tsx:121:16" data-component-path="src/app/components/bookingsession.tsx" data-component-line="121" data-component-end-line="124" data-component-file="bookingsession.tsx" data-component-name="svg" data-component-content="%7B%22elementName%22%3A%22svg%22%2C%22className%22%3A%22w-5%20h-5%20fill-none%20stroke-shade%20stroke-2%22%7D" viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-shade stroke-2">
                  <path data-component-id="src/app/components/bookingsession.tsx:122:18" data-component-path="src/app/components/bookingsession.tsx" data-component-line="122" data-component-end-line="122" data-component-file="bookingsession.tsx" data-component-name="path" data-component-content="%7B%22elementName%22%3A%22path%22%7D" strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path data-component-id="src/app/components/bookingsession.tsx:123:18" data-component-path="src/app/components/bookingsession.tsx" data-component-line="123" data-component-end-line="123" data-component-file="bookingsession.tsx" data-component-name="path" data-component-content="%7B%22elementName%22%3A%22path%22%7D" strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 data-component-id="src/app/components/bookingsession.tsx:126:14" data-component-path="src/app/components/bookingsession.tsx" data-component-line="126" data-component-end-line="126" data-component-file="bookingsession.tsx" data-component-name="h4" data-component-content="%7B%22elementName%22%3A%22h4%22%2C%22className%22%3A%22font-display%20text-lg%20font-bold%20text-ink%20mb-1%22%2C%22textContent%22%3A%22Find%20Us%22%7D" className="font-display text-lg font-bold text-ink mb-1">Find Us</h4>
              <p data-component-id="src/app/components/bookingsession.tsx:127:14" data-component-path="src/app/components/bookingsession.tsx" data-component-line="127" data-component-end-line="127" data-component-file="bookingsession.tsx" data-component-name="p" data-component-content="%7B%22elementName%22%3A%22p%22%2C%22className%22%3A%22text-sm%20text-ink%2F60%22%2C%22textContent%22%3A%22148%20W%2057th%20Street%20New%20York%2C%20NY%2010019%22%7D" className="text-sm text-ink/60">148 W 57th Street<br data-component-id="src/app/components/bookingsession.tsx:127:66" data-component-path="src/app/components/bookingsession.tsx" data-component-line="127" data-component-end-line="127" data-component-file="bookingsession.tsx" data-component-name="br" data-component-content="%7B%22elementName%22%3A%22br%22%7D" />New York, NY 10019</p>
              <p data-component-id="src/app/components/bookingsession.tsx:128:14" data-component-path="src/app/components/bookingsession.tsx" data-component-line="128" data-component-end-line="128" data-component-file="bookingsession.tsx" data-component-name="p" data-component-content="%7B%22elementName%22%3A%22p%22%2C%22className%22%3A%22text-xs%20font-bold%20uppercase%20tracking-%5B0.3em%5D%20text-shade%20mt-3%22%2C%22textContent%22%3A%22Near%20Carnegie%20Hall%22%7D" className="text-xs font-bold uppercase tracking-[0.3em] text-shade mt-3">Near Carnegie Hall</p>
            </div>

            {/* Hours */}
            <div data-component-id="src/app/components/bookingsession.tsx:132:12" data-component-path="src/app/components/bookingsession.tsx" data-component-line="132" data-component-end-line="153" data-component-file="bookingsession.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22bg-vanilla%20rounded-3xl%20p-6%20border%20border-border%22%7D" className="bg-vanilla rounded-3xl p-6 border border-border">
              <div data-component-id="src/app/components/bookingsession.tsx:133:14" data-component-path="src/app/components/bookingsession.tsx" data-component-line="133" data-component-end-line="138" data-component-file="bookingsession.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22w-10%20h-10%20rounded-full%20bg-blush%20flex%20items-center%20justify-center%20mb-4%22%7D" className="w-10 h-10 rounded-full bg-blush flex items-center justify-center mb-4">
                <svg data-component-id="src/app/components/bookingsession.tsx:134:16" data-component-path="src/app/components/bookingsession.tsx" data-component-line="134" data-component-end-line="137" data-component-file="bookingsession.tsx" data-component-name="svg" data-component-content="%7B%22elementName%22%3A%22svg%22%2C%22className%22%3A%22w-5%20h-5%20fill-none%20stroke-shade%20stroke-2%22%7D" viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-shade stroke-2">
                  <circle data-component-id="src/app/components/bookingsession.tsx:135:18" data-component-path="src/app/components/bookingsession.tsx" data-component-line="135" data-component-end-line="135" data-component-file="bookingsession.tsx" data-component-name="circle" data-component-content="%7B%22elementName%22%3A%22circle%22%7D" cx="12" cy="12" r="10" />
                  <path data-component-id="src/app/components/bookingsession.tsx:136:18" data-component-path="src/app/components/bookingsession.tsx" data-component-line="136" data-component-end-line="136" data-component-file="bookingsession.tsx" data-component-name="path" data-component-content="%7B%22elementName%22%3A%22path%22%7D" strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
                </svg>
              </div>
              <h4 data-component-id="src/app/components/bookingsession.tsx:139:14" data-component-path="src/app/components/bookingsession.tsx" data-component-line="139" data-component-end-line="139" data-component-file="bookingsession.tsx" data-component-name="h4" data-component-content="%7B%22elementName%22%3A%22h4%22%2C%22className%22%3A%22font-display%20text-lg%20font-bold%20text-ink%20mb-3%22%2C%22textContent%22%3A%22Hours%22%7D" className="font-display text-lg font-bold text-ink mb-3">Hours</h4>
              <div data-component-id="src/app/components/bookingsession.tsx:140:14" data-component-path="src/app/components/bookingsession.tsx" data-component-line="140" data-component-end-line="152" data-component-file="bookingsession.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22space-y-2%22%7D" className="space-y-2">
                {[
                  { day: 'Mon – Wed', hours: '9:00 AM – 6:00 PM' },
                  { day: 'Thu – Fri', hours: '9:00 AM – 8:00 PM' },
                  { day: 'Saturday', hours: '10:00 AM – 5:00 PM' },
                  { day: 'Sunday', hours: 'Closed' },
                ].map((row) => (
                  <div data-component-id="src/app/components/bookingsession.tsx:147:18" data-component-path="src/app/components/bookingsession.tsx" data-component-line="147" data-component-end-line="150" data-component-file="bookingsession.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22flex%20justify-between%20items-center%22%7D" key={row.day} className="flex justify-between items-center">
                    <span data-component-id="src/app/components/bookingsession.tsx:148:20" data-component-path="src/app/components/bookingsession.tsx" data-component-line="148" data-component-end-line="148" data-component-file="bookingsession.tsx" data-component-name="span" data-component-content="%7B%22elementName%22%3A%22span%22%2C%22className%22%3A%22text-xs%20font-bold%20uppercase%20tracking-%5B0.2em%5D%20text-shade%22%7D" className="text-xs font-bold uppercase tracking-[0.2em] text-shade">{row.day}</span>
                    <span data-component-id="src/app/components/bookingsession.tsx:149:20" data-component-path="src/app/components/bookingsession.tsx" data-component-line="149" data-component-end-line="149" data-component-file="bookingsession.tsx" data-component-name="span" data-component-content="%7B%22elementName%22%3A%22span%22%2C%22className%22%3A%22text-xs%20text-ink%2F60%22%7D" className="text-xs text-ink/60">{row.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div data-component-id="src/app/components/bookingsession.tsx:156:12" data-component-path="src/app/components/bookingsession.tsx" data-component-line="156" data-component-end-line="165" data-component-file="bookingsession.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22bg-coffee%20rounded-3xl%20p-6%22%7D" className="bg-coffee rounded-3xl p-6">
              <h4 data-component-id="src/app/components/bookingsession.tsx:157:14" data-component-path="src/app/components/bookingsession.tsx" data-component-line="157" data-component-end-line="157" data-component-file="bookingsession.tsx" data-component-name="h4" data-component-content="%7B%22elementName%22%3A%22h4%22%2C%22className%22%3A%22font-display%20text-lg%20font-bold%20text-vanilla%20mb-2%22%2C%22textContent%22%3A%22Questions%3F%22%7D" className="font-display text-lg font-bold text-vanilla mb-2">Questions?</h4>
              <p data-component-id="src/app/components/bookingsession.tsx:158:14" data-component-path="src/app/components/bookingsession.tsx" data-component-line="158" data-component-end-line="158" data-component-file="bookingsession.tsx" data-component-name="p" data-component-content="%7B%22elementName%22%3A%22p%22%2C%22className%22%3A%22text-sm%20text-vanilla%2F70%20mb-4%22%2C%22textContent%22%3A%22Call%20us%20or%20send%20a%20message%20%E2%80%94%20we%20typically%20respond%20within%202%20hours.%22%7D" className="text-sm text-vanilla/70 mb-4">Call us or send a message — we typically respond within 2 hours.</p>
              <a data-component-id="src/app/components/bookingsession.tsx:159:14" data-component-path="src/app/components/bookingsession.tsx" data-component-line="159" data-component-end-line="164" data-component-file="bookingsession.tsx" data-component-name="a" data-component-content="%7B%22elementName%22%3A%22a%22%2C%22href%22%3A%22tel%3A%2B12125550198%22%2C%22className%22%3A%22flex%20items-center%20gap-2%20text-sm%20font-bold%20text-vanilla%20hover%3Atext-blush%20transition-colors%22%2C%22textContent%22%3A%22(212)%20555-0198%22%7D" href="tel:+12125550198" className="flex items-center gap-2 text-sm font-bold text-vanilla hover:text-blush transition-colors">
                <svg data-component-id="src/app/components/bookingsession.tsx:160:16" data-component-path="src/app/components/bookingsession.tsx" data-component-line="160" data-component-end-line="162" data-component-file="bookingsession.tsx" data-component-name="svg" data-component-content="%7B%22elementName%22%3A%22svg%22%2C%22className%22%3A%22w-4%20h-4%20fill-none%20stroke-current%20stroke-2%22%7D" viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2">
                  <path data-component-id="src/app/components/bookingsession.tsx:161:18" data-component-path="src/app/components/bookingsession.tsx" data-component-line="161" data-component-end-line="161" data-component-file="bookingsession.tsx" data-component-name="path" data-component-content="%7B%22elementName%22%3A%22path%22%7D" strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (212) 555-0198
              </a>
            </div>
          </div>

          {/* Right: Booking form */}
          <div data-component-id="src/app/components/bookingsession.tsx:169:10" data-component-path="src/app/components/bookingsession.tsx" data-component-line="169" data-component-end-line="466" data-component-file="bookingsession.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22lg%3Acol-span-8%22%7D" className="lg:col-span-8">
            <div data-component-id="src/app/components/bookingsession.tsx:170:12" data-component-path="src/app/components/bookingsession.tsx" data-component-line="170" data-component-end-line="465" data-component-file="bookingsession.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22bg-vanilla%20rounded-4xl%20p-6%20sm%3Ap-10%20border%20border-border%22%7D" className="bg-vanilla rounded-4xl p-6 sm:p-10 border border-border">

              {submitted ? (
                /* Success state */
                <div data-component-id="src/app/components/bookingsession.tsx:174:16" data-component-path="src/app/components/bookingsession.tsx" data-component-line="174" data-component-end-line="206" data-component-file="bookingsession.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22flex%20flex-col%20items-center%20justify-center%20py-16%20text-center%20gap-6%22%7D" className="flex flex-col items-center justify-center py-16 text-center gap-6">
                  <div data-component-id="src/app/components/bookingsession.tsx:175:18" data-component-path="src/app/components/bookingsession.tsx" data-component-line="175" data-component-end-line="179" data-component-file="bookingsession.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22w-20%20h-20%20rounded-full%20bg-blush%20flex%20items-center%20justify-center%20animate-float-y%22%7D" className="w-20 h-20 rounded-full bg-blush flex items-center justify-center animate-float-y">
                    <svg data-component-id="src/app/components/bookingsession.tsx:176:20" data-component-path="src/app/components/bookingsession.tsx" data-component-line="176" data-component-end-line="178" data-component-file="bookingsession.tsx" data-component-name="svg" data-component-content="%7B%22elementName%22%3A%22svg%22%2C%22className%22%3A%22w-10%20h-10%20fill-none%20stroke-coffee%20stroke-2%22%7D" viewBox="0 0 24 24" className="w-10 h-10 fill-none stroke-coffee stroke-2">
                      <path data-component-id="src/app/components/bookingsession.tsx:177:22" data-component-path="src/app/components/bookingsession.tsx" data-component-line="177" data-component-end-line="177" data-component-file="bookingsession.tsx" data-component-name="path" data-component-content="%7B%22elementName%22%3A%22path%22%7D" strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div data-component-id="src/app/components/bookingsession.tsx:180:18" data-component-path="src/app/components/bookingsession.tsx" data-component-line="180" data-component-end-line="185" data-component-file="bookingsession.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%7D">
                    <h3 data-component-id="src/app/components/bookingsession.tsx:181:20" data-component-path="src/app/components/bookingsession.tsx" data-component-line="181" data-component-end-line="181" data-component-file="bookingsession.tsx" data-component-name="h3" data-component-content="%7B%22elementName%22%3A%22h3%22%2C%22className%22%3A%22font-display%20text-3xl%20font-bold%20text-ink%20mb-2%22%2C%22textContent%22%3A%22You're%20booked!%22%7D" className="font-display text-3xl font-bold text-ink mb-2">You're booked!</h3>
                    <p data-component-id="src/app/components/bookingsession.tsx:182:20" data-component-path="src/app/components/bookingsession.tsx" data-component-line="182" data-component-end-line="184" data-component-file="bookingsession.tsx" data-component-name="p" data-component-content="%7B%22elementName%22%3A%22p%22%2C%22className%22%3A%22text-ink%2F60%20max-w-sm%20leading-relaxed%22%2C%22textContent%22%3A%22A%20confirmation%20has%20been%20sent%20to%20.%20We%20look%20forward%20to%20seeing%20you%2C%20.%22%7D" className="text-ink/60 max-w-sm leading-relaxed">
                      A confirmation has been sent to <strong data-component-id="src/app/components/bookingsession.tsx:183:54" data-component-path="src/app/components/bookingsession.tsx" data-component-line="183" data-component-end-line="183" data-component-file="bookingsession.tsx" data-component-name="strong" data-component-content="%7B%22elementName%22%3A%22strong%22%7D">{form.email}</strong>. We look forward to seeing you, {form.firstName}.
                    </p>
                  </div>
                  <div data-component-id="src/app/components/bookingsession.tsx:186:18" data-component-path="src/app/components/bookingsession.tsx" data-component-line="186" data-component-end-line="199" data-component-file="bookingsession.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22bg-bg%20rounded-2xl%20p-5%20border%20border-border%20w-full%20max-w-sm%20text-left%20space-y-3%22%7D" className="bg-bg rounded-2xl p-5 border border-border w-full max-w-sm text-left space-y-3">
                    <div data-component-id="src/app/components/bookingsession.tsx:187:20" data-component-path="src/app/components/bookingsession.tsx" data-component-line="187" data-component-end-line="190" data-component-file="bookingsession.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22flex%20justify-between%22%7D" className="flex justify-between">
                      <span data-component-id="src/app/components/bookingsession.tsx:188:22" data-component-path="src/app/components/bookingsession.tsx" data-component-line="188" data-component-end-line="188" data-component-file="bookingsession.tsx" data-component-name="span" data-component-content="%7B%22elementName%22%3A%22span%22%2C%22className%22%3A%22text-xs%20font-bold%20uppercase%20tracking-%5B0.3em%5D%20text-shade%22%2C%22textContent%22%3A%22Service%22%7D" className="text-xs font-bold uppercase tracking-[0.3em] text-shade">Service</span>
                      <span data-component-id="src/app/components/bookingsession.tsx:189:22" data-component-path="src/app/components/bookingsession.tsx" data-component-line="189" data-component-end-line="189" data-component-file="bookingsession.tsx" data-component-name="span" data-component-content="%7B%22elementName%22%3A%22span%22%2C%22className%22%3A%22text-sm%20font-medium%20text-ink%22%7D" className="text-sm font-medium text-ink">{form.service}</span>
                    </div>
                    <div data-component-id="src/app/components/bookingsession.tsx:191:20" data-component-path="src/app/components/bookingsession.tsx" data-component-line="191" data-component-end-line="194" data-component-file="bookingsession.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22flex%20justify-between%22%7D" className="flex justify-between">
                      <span data-component-id="src/app/components/bookingsession.tsx:192:22" data-component-path="src/app/components/bookingsession.tsx" data-component-line="192" data-component-end-line="192" data-component-file="bookingsession.tsx" data-component-name="span" data-component-content="%7B%22elementName%22%3A%22span%22%2C%22className%22%3A%22text-xs%20font-bold%20uppercase%20tracking-%5B0.3em%5D%20text-shade%22%2C%22textContent%22%3A%22Stylist%22%7D" className="text-xs font-bold uppercase tracking-[0.3em] text-shade">Stylist</span>
                      <span data-component-id="src/app/components/bookingsession.tsx:193:22" data-component-path="src/app/components/bookingsession.tsx" data-component-line="193" data-component-end-line="193" data-component-file="bookingsession.tsx" data-component-name="span" data-component-content="%7B%22elementName%22%3A%22span%22%2C%22className%22%3A%22text-sm%20font-medium%20text-ink%22%7D" className="text-sm font-medium text-ink">{form.stylist}</span>
                    </div>
                    <div data-component-id="src/app/components/bookingsession.tsx:195:20" data-component-path="src/app/components/bookingsession.tsx" data-component-line="195" data-component-end-line="198" data-component-file="bookingsession.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22flex%20justify-between%22%7D" className="flex justify-between">
                      <span data-component-id="src/app/components/bookingsession.tsx:196:22" data-component-path="src/app/components/bookingsession.tsx" data-component-line="196" data-component-end-line="196" data-component-file="bookingsession.tsx" data-component-name="span" data-component-content="%7B%22elementName%22%3A%22span%22%2C%22className%22%3A%22text-xs%20font-bold%20uppercase%20tracking-%5B0.3em%5D%20text-shade%22%2C%22textContent%22%3A%22Date%20%26%20Time%22%7D" className="text-xs font-bold uppercase tracking-[0.3em] text-shade">Date & Time</span>
                      <span data-component-id="src/app/components/bookingsession.tsx:197:22" data-component-path="src/app/components/bookingsession.tsx" data-component-line="197" data-component-end-line="197" data-component-file="bookingsession.tsx" data-component-name="span" data-component-content="%7B%22elementName%22%3A%22span%22%2C%22className%22%3A%22text-sm%20font-medium%20text-ink%22%2C%22textContent%22%3A%22at%22%7D" className="text-sm font-medium text-ink">{form.date} at {form.time}</span>
                    </div>
                  </div>
                  <button data-component-id="src/app/components/bookingsession.tsx:200:18" data-component-path="src/app/components/bookingsession.tsx" data-component-line="200" data-component-end-line="205" data-component-file="bookingsession.tsx" data-component-name="button" data-component-content="%7B%22elementName%22%3A%22button%22%2C%22className%22%3A%22btn-outline%20text-xs%22%2C%22textContent%22%3A%22Book%20Another%22%7D"
                    onClick={() => { setSubmitted(false); setStep(1); setForm({ service: '', stylist: '', date: '', time: '', firstName: '', lastName: '', email: '', phone: '', notes: '' }); }}
                    className="btn-outline text-xs"
                  >
                    Book Another
                  </button>
                </div>
              ) : (
                <>
                  {/* Step indicator */}
                  <div data-component-id="src/app/components/bookingsession.tsx:210:18" data-component-path="src/app/components/bookingsession.tsx" data-component-line="210" data-component-end-line="242" data-component-file="bookingsession.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22flex%20items-center%20gap-3%20mb-10%22%7D" className="flex items-center gap-3 mb-10">
                    {stepLabels.map((label, i) => {
                      const s = (i + 1) as Step;
                      return (
                        <React.Fragment key={label}>
                          <div data-component-id="src/app/components/bookingsession.tsx:215:26" data-component-path="src/app/components/bookingsession.tsx" data-component-line="215" data-component-end-line="235" data-component-file="bookingsession.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22flex%20items-center%20gap-2%22%7D" className="flex items-center gap-2">
                            <div data-component-id="src/app/components/bookingsession.tsx:216:28" data-component-path="src/app/components/bookingsession.tsx" data-component-line="216" data-component-end-line="231" data-component-file="bookingsession.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%7D"
                              className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                                step === s
                                  ? 'bg-coffee text-vanilla'
                                  : step > s
                                  ? 'bg-blush text-ink' :'bg-border text-ink/30'
                              }`}
                            >
                              {step > s ? (
                                <svg data-component-id="src/app/components/bookingsession.tsx:225:32" data-component-path="src/app/components/bookingsession.tsx" data-component-line="225" data-component-end-line="227" data-component-file="bookingsession.tsx" data-component-name="svg" data-component-content="%7B%22elementName%22%3A%22svg%22%2C%22className%22%3A%22w-4%20h-4%20fill-none%20stroke-current%20stroke-2%22%7D" viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2">
                                  <path data-component-id="src/app/components/bookingsession.tsx:226:34" data-component-path="src/app/components/bookingsession.tsx" data-component-line="226" data-component-end-line="226" data-component-file="bookingsession.tsx" data-component-name="path" data-component-content="%7B%22elementName%22%3A%22path%22%7D" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                              ) : (
                                s
                              )}
                            </div>
                            <span data-component-id="src/app/components/bookingsession.tsx:232:28" data-component-path="src/app/components/bookingsession.tsx" data-component-line="232" data-component-end-line="234" data-component-file="bookingsession.tsx" data-component-name="span" data-component-content="%7B%22elementName%22%3A%22span%22%7D" className={`text-xs font-bold uppercase tracking-[0.3em] hidden sm:block ${step === s ? 'text-ink' : 'text-ink/30'}`}>
                              {label}
                            </span>
                          </div>
                          {i < 2 && (
                            <div data-component-id="src/app/components/bookingsession.tsx:237:28" data-component-path="src/app/components/bookingsession.tsx" data-component-line="237" data-component-end-line="237" data-component-file="bookingsession.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%7D" className={`flex-1 h-px transition-all duration-500 ${step > s ? 'bg-coffee' : 'bg-border'}`} />
                          )}
                        </React.Fragment>
                      );
                    })}
                  </div>

                  <form data-component-id="src/app/components/bookingsession.tsx:244:18" data-component-path="src/app/components/bookingsession.tsx" data-component-line="244" data-component-end-line="462" data-component-file="bookingsession.tsx" data-component-name="form" data-component-content="%7B%22elementName%22%3A%22form%22%7D" onSubmit={handleSubmit}>
                    {/* Step 1: Service + Stylist */}
                    {step === 1 && (
                      <div data-component-id="src/app/components/bookingsession.tsx:247:22" data-component-path="src/app/components/bookingsession.tsx" data-component-line="247" data-component-end-line="295" data-component-file="bookingsession.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22space-y-8%22%7D" className="space-y-8">
                        <div data-component-id="src/app/components/bookingsession.tsx:248:24" data-component-path="src/app/components/bookingsession.tsx" data-component-line="248" data-component-end-line="265" data-component-file="bookingsession.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%7D">
                          <h3 data-component-id="src/app/components/bookingsession.tsx:249:26" data-component-path="src/app/components/bookingsession.tsx" data-component-line="249" data-component-end-line="249" data-component-file="bookingsession.tsx" data-component-name="h3" data-component-content="%7B%22elementName%22%3A%22h3%22%2C%22className%22%3A%22font-display%20text-2xl%20font-bold%20text-ink%20mb-6%22%2C%22textContent%22%3A%22Choose%20your%20service%22%7D" className="font-display text-2xl font-bold text-ink mb-6">Choose your service</h3>
                          <div data-component-id="src/app/components/bookingsession.tsx:250:26" data-component-path="src/app/components/bookingsession.tsx" data-component-line="250" data-component-end-line="264" data-component-file="bookingsession.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22grid%20grid-cols-2%20sm%3Agrid-cols-3%20gap-3%22%7D" className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                            {services.map((s) => (
                              <button data-component-id="src/app/components/bookingsession.tsx:252:30" data-component-path="src/app/components/bookingsession.tsx" data-component-line="252" data-component-end-line="262" data-component-file="bookingsession.tsx" data-component-name="button" data-component-content="%7B%22elementName%22%3A%22button%22%2C%22type%22%3A%22button%22%7D"
                                type="button"
                                key={s}
                                onClick={() => updateForm('service', s)}
                                className={`p-4 rounded-2xl border-2 text-left transition-all duration-200 spring-hover ${
                                  form.service === s
                                    ? 'border-coffee bg-coffee/5 text-coffee' :'border-border bg-bg hover:border-coffee/40 text-ink'
                                }`}
                              >
                                <span data-component-id="src/app/components/bookingsession.tsx:261:32" data-component-path="src/app/components/bookingsession.tsx" data-component-line="261" data-component-end-line="261" data-component-file="bookingsession.tsx" data-component-name="span" data-component-content="%7B%22elementName%22%3A%22span%22%2C%22className%22%3A%22text-sm%20font-bold%22%7D" className="text-sm font-bold">{s}</span>
                              </button>
                            ))}
                          </div>
                        </div>

                        <div data-component-id="src/app/components/bookingsession.tsx:267:24" data-component-path="src/app/components/bookingsession.tsx" data-component-line="267" data-component-end-line="285" data-component-file="bookingsession.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%7D">
                          <h3 data-component-id="src/app/components/bookingsession.tsx:268:26" data-component-path="src/app/components/bookingsession.tsx" data-component-line="268" data-component-end-line="268" data-component-file="bookingsession.tsx" data-component-name="h3" data-component-content="%7B%22elementName%22%3A%22h3%22%2C%22className%22%3A%22font-display%20text-2xl%20font-bold%20text-ink%20mb-6%22%2C%22textContent%22%3A%22Choose%20your%20stylist%22%7D" className="font-display text-2xl font-bold text-ink mb-6">Choose your stylist</h3>
                          <div data-component-id="src/app/components/bookingsession.tsx:269:26" data-component-path="src/app/components/bookingsession.tsx" data-component-line="269" data-component-end-line="284" data-component-file="bookingsession.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22grid%20sm%3Agrid-cols-2%20gap-3%22%7D" className="grid sm:grid-cols-2 gap-3">
                            {stylists.map((st) => (
                              <button data-component-id="src/app/components/bookingsession.tsx:271:30" data-component-path="src/app/components/bookingsession.tsx" data-component-line="271" data-component-end-line="282" data-component-file="bookingsession.tsx" data-component-name="button" data-component-content="%7B%22elementName%22%3A%22button%22%2C%22type%22%3A%22button%22%7D"
                                type="button"
                                key={st.name}
                                onClick={() => updateForm('stylist', st.name)}
                                className={`p-4 rounded-2xl border-2 text-left transition-all duration-200 spring-hover ${
                                  form.stylist === st.name
                                    ? 'border-coffee bg-coffee/5' :'border-border bg-bg hover:border-coffee/40'
                                }`}
                              >
                                <p data-component-id="src/app/components/bookingsession.tsx:280:32" data-component-path="src/app/components/bookingsession.tsx" data-component-line="280" data-component-end-line="280" data-component-file="bookingsession.tsx" data-component-name="p" data-component-content="%7B%22elementName%22%3A%22p%22%2C%22className%22%3A%22text-sm%20font-bold%20text-ink%22%7D" className="text-sm font-bold text-ink">{st.name}</p>
                                <p data-component-id="src/app/components/bookingsession.tsx:281:32" data-component-path="src/app/components/bookingsession.tsx" data-component-line="281" data-component-end-line="281" data-component-file="bookingsession.tsx" data-component-name="p" data-component-content="%7B%22elementName%22%3A%22p%22%2C%22className%22%3A%22text-xs%20text-ink%2F50%20mt-0.5%22%7D" className="text-xs text-ink/50 mt-0.5">{st.specialty}</p>
                              </button>
                            ))}
                          </div>
                        </div>

                        <button data-component-id="src/app/components/bookingsession.tsx:287:24" data-component-path="src/app/components/bookingsession.tsx" data-component-line="287" data-component-end-line="294" data-component-file="bookingsession.tsx" data-component-name="button" data-component-content="%7B%22elementName%22%3A%22button%22%2C%22type%22%3A%22button%22%2C%22textContent%22%3A%22Continue%20to%20Schedule%22%7D"
                          type="button"
                          onClick={() => setStep(2)}
                          disabled={!canProceedStep1}
                          className={`btn-primary w-full sm:w-auto ${!canProceedStep1 ? 'opacity-40 cursor-not-allowed' : ''}`}
                        >
                          Continue to Schedule
                        </button>
                      </div>
                    )}

                    {/* Step 2: Date + Time */}
                    {step === 2 && (
                      <div data-component-id="src/app/components/bookingsession.tsx:300:22" data-component-path="src/app/components/bookingsession.tsx" data-component-line="300" data-component-end-line="348" data-component-file="bookingsession.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22space-y-8%22%7D" className="space-y-8">
                        <div data-component-id="src/app/components/bookingsession.tsx:301:24" data-component-path="src/app/components/bookingsession.tsx" data-component-line="301" data-component-end-line="310" data-component-file="bookingsession.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%7D">
                          <h3 data-component-id="src/app/components/bookingsession.tsx:302:26" data-component-path="src/app/components/bookingsession.tsx" data-component-line="302" data-component-end-line="302" data-component-file="bookingsession.tsx" data-component-name="h3" data-component-content="%7B%22elementName%22%3A%22h3%22%2C%22className%22%3A%22font-display%20text-2xl%20font-bold%20text-ink%20mb-6%22%2C%22textContent%22%3A%22Pick%20a%20date%22%7D" className="font-display text-2xl font-bold text-ink mb-6">Pick a date</h3>
                          <input data-component-id="src/app/components/bookingsession.tsx:303:26" data-component-path="src/app/components/bookingsession.tsx" data-component-line="303" data-component-end-line="309" data-component-file="bookingsession.tsx" data-component-name="input" data-component-content="%7B%22elementName%22%3A%22input%22%2C%22type%22%3A%22date%22%2C%22className%22%3A%22w-full%20sm%3Aw-64%20px-4%20py-3%20rounded-xl%20border-2%20border-border%20bg-bg%20text-ink%20font-medium%20focus%3Aoutline-none%20focus%3Aborder-coffee%20transition-colors%22%7D"
                            type="date"
                            value={form.date}
                            onChange={(e) => updateForm('date', e.target.value)}
                            min={new Date().toISOString().split('T')[0]}
                            className="w-full sm:w-64 px-4 py-3 rounded-xl border-2 border-border bg-bg text-ink font-medium focus:outline-none focus:border-coffee transition-colors"
                          />
                        </div>

                        <div data-component-id="src/app/components/bookingsession.tsx:312:24" data-component-path="src/app/components/bookingsession.tsx" data-component-line="312" data-component-end-line="329" data-component-file="bookingsession.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%7D">
                          <h3 data-component-id="src/app/components/bookingsession.tsx:313:26" data-component-path="src/app/components/bookingsession.tsx" data-component-line="313" data-component-end-line="313" data-component-file="bookingsession.tsx" data-component-name="h3" data-component-content="%7B%22elementName%22%3A%22h3%22%2C%22className%22%3A%22font-display%20text-2xl%20font-bold%20text-ink%20mb-6%22%2C%22textContent%22%3A%22Choose%20a%20time%22%7D" className="font-display text-2xl font-bold text-ink mb-6">Choose a time</h3>
                          <div data-component-id="src/app/components/bookingsession.tsx:314:26" data-component-path="src/app/components/bookingsession.tsx" data-component-line="314" data-component-end-line="328" data-component-file="bookingsession.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22flex%20flex-wrap%20gap-3%22%7D" className="flex flex-wrap gap-3">
                            {timeSlots.map((t) => (
                              <button data-component-id="src/app/components/bookingsession.tsx:316:30" data-component-path="src/app/components/bookingsession.tsx" data-component-line="316" data-component-end-line="326" data-component-file="bookingsession.tsx" data-component-name="button" data-component-content="%7B%22elementName%22%3A%22button%22%2C%22type%22%3A%22button%22%7D"
                                type="button"
                                key={t}
                                onClick={() => updateForm('time', t)}
                                className={`px-4 py-2.5 rounded-xl border-2 text-sm font-bold transition-all duration-200 spring-hover ${
                                  form.time === t
                                    ? 'border-coffee bg-coffee text-vanilla' :'border-border bg-bg hover:border-coffee/40 text-ink'
                                }`}
                              >
                                {t}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div data-component-id="src/app/components/bookingsession.tsx:331:24" data-component-path="src/app/components/bookingsession.tsx" data-component-line="331" data-component-end-line="347" data-component-file="bookingsession.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22flex%20flex-col%20sm%3Aflex-row%20gap-3%22%7D" className="flex flex-col sm:flex-row gap-3">
                          <button data-component-id="src/app/components/bookingsession.tsx:332:26" data-component-path="src/app/components/bookingsession.tsx" data-component-line="332" data-component-end-line="338" data-component-file="bookingsession.tsx" data-component-name="button" data-component-content="%7B%22elementName%22%3A%22button%22%2C%22type%22%3A%22button%22%2C%22className%22%3A%22btn-outline%22%2C%22textContent%22%3A%22Back%22%7D"
                            type="button"
                            onClick={() => setStep(1)}
                            className="btn-outline"
                          >
                            Back
                          </button>
                          <button data-component-id="src/app/components/bookingsession.tsx:339:26" data-component-path="src/app/components/bookingsession.tsx" data-component-line="339" data-component-end-line="346" data-component-file="bookingsession.tsx" data-component-name="button" data-component-content="%7B%22elementName%22%3A%22button%22%2C%22type%22%3A%22button%22%2C%22textContent%22%3A%22Continue%20to%20Details%22%7D"
                            type="button"
                            onClick={() => setStep(3)}
                            disabled={!canProceedStep2}
                            className={`btn-primary ${!canProceedStep2 ? 'opacity-40 cursor-not-allowed' : ''}`}
                          >
                            Continue to Details
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Step 3: Personal Details */}
                    {step === 3 && (
                      <div data-component-id="src/app/components/bookingsession.tsx:353:22" data-component-path="src/app/components/bookingsession.tsx" data-component-line="353" data-component-end-line="460" data-component-file="bookingsession.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22space-y-8%22%7D" className="space-y-8">
                        <div data-component-id="src/app/components/bookingsession.tsx:354:24" data-component-path="src/app/components/bookingsession.tsx" data-component-line="354" data-component-end-line="426" data-component-file="bookingsession.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%7D">
                          <h3 data-component-id="src/app/components/bookingsession.tsx:355:26" data-component-path="src/app/components/bookingsession.tsx" data-component-line="355" data-component-end-line="355" data-component-file="bookingsession.tsx" data-component-name="h3" data-component-content="%7B%22elementName%22%3A%22h3%22%2C%22className%22%3A%22font-display%20text-2xl%20font-bold%20text-ink%20mb-6%22%2C%22textContent%22%3A%22Your%20details%22%7D" className="font-display text-2xl font-bold text-ink mb-6">Your details</h3>

                          <div data-component-id="src/app/components/bookingsession.tsx:357:26" data-component-path="src/app/components/bookingsession.tsx" data-component-line="357" data-component-end-line="384" data-component-file="bookingsession.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22grid%20sm%3Agrid-cols-2%20gap-4%20mb-4%22%7D" className="grid sm:grid-cols-2 gap-4 mb-4">
                            <div data-component-id="src/app/components/bookingsession.tsx:358:28" data-component-path="src/app/components/bookingsession.tsx" data-component-line="358" data-component-end-line="370" data-component-file="bookingsession.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%7D">
                              <label data-component-id="src/app/components/bookingsession.tsx:359:30" data-component-path="src/app/components/bookingsession.tsx" data-component-line="359" data-component-end-line="361" data-component-file="bookingsession.tsx" data-component-name="label" data-component-content="%7B%22elementName%22%3A%22label%22%2C%22className%22%3A%22block%20text-xs%20font-bold%20uppercase%20tracking-%5B0.3em%5D%20text-shade%20mb-2%22%2C%22textContent%22%3A%22First%20Name%20*%22%7D" className="block text-xs font-bold uppercase tracking-[0.3em] text-shade mb-2">
                                First Name *
                              </label>
                              <input data-component-id="src/app/components/bookingsession.tsx:362:30" data-component-path="src/app/components/bookingsession.tsx" data-component-line="362" data-component-end-line="369" data-component-file="bookingsession.tsx" data-component-name="input" data-component-content="%7B%22elementName%22%3A%22input%22%2C%22type%22%3A%22text%22%2C%22className%22%3A%22w-full%20px-4%20py-3%20rounded-xl%20border-2%20border-border%20bg-bg%20text-ink%20placeholder-ink%2F30%20font-medium%20focus%3Aoutline-none%20focus%3Aborder-coffee%20transition-colors%22%7D"
                                type="text"
                                value={form.firstName}
                                onChange={(e) => updateForm('firstName', e.target.value)}
                                placeholder="Camille"
                                required
                                className="w-full px-4 py-3 rounded-xl border-2 border-border bg-bg text-ink placeholder-ink/30 font-medium focus:outline-none focus:border-coffee transition-colors"
                              />
                            </div>
                            <div data-component-id="src/app/components/bookingsession.tsx:371:28" data-component-path="src/app/components/bookingsession.tsx" data-component-line="371" data-component-end-line="383" data-component-file="bookingsession.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%7D">
                              <label data-component-id="src/app/components/bookingsession.tsx:372:30" data-component-path="src/app/components/bookingsession.tsx" data-component-line="372" data-component-end-line="374" data-component-file="bookingsession.tsx" data-component-name="label" data-component-content="%7B%22elementName%22%3A%22label%22%2C%22className%22%3A%22block%20text-xs%20font-bold%20uppercase%20tracking-%5B0.3em%5D%20text-shade%20mb-2%22%2C%22textContent%22%3A%22Last%20Name%20*%22%7D" className="block text-xs font-bold uppercase tracking-[0.3em] text-shade mb-2">
                                Last Name *
                              </label>
                              <input data-component-id="src/app/components/bookingsession.tsx:375:30" data-component-path="src/app/components/bookingsession.tsx" data-component-line="375" data-component-end-line="382" data-component-file="bookingsession.tsx" data-component-name="input" data-component-content="%7B%22elementName%22%3A%22input%22%2C%22type%22%3A%22text%22%2C%22className%22%3A%22w-full%20px-4%20py-3%20rounded-xl%20border-2%20border-border%20bg-bg%20text-ink%20placeholder-ink%2F30%20font-medium%20focus%3Aoutline-none%20focus%3Aborder-coffee%20transition-colors%22%7D"
                                type="text"
                                value={form.lastName}
                                onChange={(e) => updateForm('lastName', e.target.value)}
                                placeholder="Thornton"
                                required
                                className="w-full px-4 py-3 rounded-xl border-2 border-border bg-bg text-ink placeholder-ink/30 font-medium focus:outline-none focus:border-coffee transition-colors"
                              />
                            </div>
                          </div>

                          <div data-component-id="src/app/components/bookingsession.tsx:386:26" data-component-path="src/app/components/bookingsession.tsx" data-component-line="386" data-component-end-line="412" data-component-file="bookingsession.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22grid%20sm%3Agrid-cols-2%20gap-4%20mb-4%22%7D" className="grid sm:grid-cols-2 gap-4 mb-4">
                            <div data-component-id="src/app/components/bookingsession.tsx:387:28" data-component-path="src/app/components/bookingsession.tsx" data-component-line="387" data-component-end-line="399" data-component-file="bookingsession.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%7D">
                              <label data-component-id="src/app/components/bookingsession.tsx:388:30" data-component-path="src/app/components/bookingsession.tsx" data-component-line="388" data-component-end-line="390" data-component-file="bookingsession.tsx" data-component-name="label" data-component-content="%7B%22elementName%22%3A%22label%22%2C%22className%22%3A%22block%20text-xs%20font-bold%20uppercase%20tracking-%5B0.3em%5D%20text-shade%20mb-2%22%2C%22textContent%22%3A%22Email%20*%22%7D" className="block text-xs font-bold uppercase tracking-[0.3em] text-shade mb-2">
                                Email *
                              </label>
                              <input data-component-id="src/app/components/bookingsession.tsx:391:30" data-component-path="src/app/components/bookingsession.tsx" data-component-line="391" data-component-end-line="398" data-component-file="bookingsession.tsx" data-component-name="input" data-component-content="%7B%22elementName%22%3A%22input%22%2C%22type%22%3A%22email%22%2C%22className%22%3A%22w-full%20px-4%20py-3%20rounded-xl%20border-2%20border-border%20bg-bg%20text-ink%20placeholder-ink%2F30%20font-medium%20focus%3Aoutline-none%20focus%3Aborder-coffee%20transition-colors%22%7D"
                                type="email"
                                value={form.email}
                                onChange={(e) => updateForm('email', e.target.value)}
                                placeholder="camille@example.com"
                                required
                                className="w-full px-4 py-3 rounded-xl border-2 border-border bg-bg text-ink placeholder-ink/30 font-medium focus:outline-none focus:border-coffee transition-colors"
                              />
                            </div>
                            <div data-component-id="src/app/components/bookingsession.tsx:400:28" data-component-path="src/app/components/bookingsession.tsx" data-component-line="400" data-component-end-line="411" data-component-file="bookingsession.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%7D">
                              <label data-component-id="src/app/components/bookingsession.tsx:401:30" data-component-path="src/app/components/bookingsession.tsx" data-component-line="401" data-component-end-line="403" data-component-file="bookingsession.tsx" data-component-name="label" data-component-content="%7B%22elementName%22%3A%22label%22%2C%22className%22%3A%22block%20text-xs%20font-bold%20uppercase%20tracking-%5B0.3em%5D%20text-shade%20mb-2%22%2C%22textContent%22%3A%22Phone%22%7D" className="block text-xs font-bold uppercase tracking-[0.3em] text-shade mb-2">
                                Phone
                              </label>
                              <input data-component-id="src/app/components/bookingsession.tsx:404:30" data-component-path="src/app/components/bookingsession.tsx" data-component-line="404" data-component-end-line="410" data-component-file="bookingsession.tsx" data-component-name="input" data-component-content="%7B%22elementName%22%3A%22input%22%2C%22type%22%3A%22tel%22%2C%22className%22%3A%22w-full%20px-4%20py-3%20rounded-xl%20border-2%20border-border%20bg-bg%20text-ink%20placeholder-ink%2F30%20font-medium%20focus%3Aoutline-none%20focus%3Aborder-coffee%20transition-colors%22%7D"
                                type="tel"
                                value={form.phone}
                                onChange={(e) => updateForm('phone', e.target.value)}
                                placeholder="(212) 555-0198"
                                className="w-full px-4 py-3 rounded-xl border-2 border-border bg-bg text-ink placeholder-ink/30 font-medium focus:outline-none focus:border-coffee transition-colors"
                              />
                            </div>
                          </div>

                          <div data-component-id="src/app/components/bookingsession.tsx:414:26" data-component-path="src/app/components/bookingsession.tsx" data-component-line="414" data-component-end-line="425" data-component-file="bookingsession.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%7D">
                            <label data-component-id="src/app/components/bookingsession.tsx:415:28" data-component-path="src/app/components/bookingsession.tsx" data-component-line="415" data-component-end-line="417" data-component-file="bookingsession.tsx" data-component-name="label" data-component-content="%7B%22elementName%22%3A%22label%22%2C%22className%22%3A%22block%20text-xs%20font-bold%20uppercase%20tracking-%5B0.3em%5D%20text-shade%20mb-2%22%2C%22textContent%22%3A%22Notes%20(optional)%22%7D" className="block text-xs font-bold uppercase tracking-[0.3em] text-shade mb-2">
                              Notes (optional)
                            </label>
                            <textarea data-component-id="src/app/components/bookingsession.tsx:418:28" data-component-path="src/app/components/bookingsession.tsx" data-component-line="418" data-component-end-line="424" data-component-file="bookingsession.tsx" data-component-name="textarea" data-component-content="%7B%22elementName%22%3A%22textarea%22%2C%22className%22%3A%22w-full%20px-4%20py-3%20rounded-xl%20border-2%20border-border%20bg-bg%20text-ink%20placeholder-ink%2F30%20font-medium%20focus%3Aoutline-none%20focus%3Aborder-coffee%20transition-colors%20resize-none%22%7D"
                              value={form.notes}
                              onChange={(e) => updateForm('notes', e.target.value)}
                              placeholder="Tell us about your hair goals, concerns, or anything we should know..."
                              rows={3}
                              className="w-full px-4 py-3 rounded-xl border-2 border-border bg-bg text-ink placeholder-ink/30 font-medium focus:outline-none focus:border-coffee transition-colors resize-none"
                            />
                          </div>
                        </div>

                        {/* Booking summary */}
                        <div data-component-id="src/app/components/bookingsession.tsx:429:24" data-component-path="src/app/components/bookingsession.tsx" data-component-line="429" data-component-end-line="442" data-component-file="bookingsession.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22bg-bg%20rounded-2xl%20p-5%20border%20border-border%20space-y-3%22%7D" className="bg-bg rounded-2xl p-5 border border-border space-y-3">
                          <p data-component-id="src/app/components/bookingsession.tsx:430:26" data-component-path="src/app/components/bookingsession.tsx" data-component-line="430" data-component-end-line="430" data-component-file="bookingsession.tsx" data-component-name="p" data-component-content="%7B%22elementName%22%3A%22p%22%2C%22className%22%3A%22text-xs%20font-bold%20uppercase%20tracking-%5B0.4em%5D%20text-shade%20mb-3%22%2C%22textContent%22%3A%22Booking%20Summary%22%7D" className="text-xs font-bold uppercase tracking-[0.4em] text-shade mb-3">Booking Summary</p>
                          {[
                            { label: 'Service', value: form.service },
                            { label: 'Stylist', value: form.stylist },
                            { label: 'Date', value: form.date },
                            { label: 'Time', value: form.time },
                          ].map((row) => (
                            <div data-component-id="src/app/components/bookingsession.tsx:437:28" data-component-path="src/app/components/bookingsession.tsx" data-component-line="437" data-component-end-line="440" data-component-file="bookingsession.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22flex%20justify-between%20items-center%22%7D" key={row.label} className="flex justify-between items-center">
                              <span data-component-id="src/app/components/bookingsession.tsx:438:30" data-component-path="src/app/components/bookingsession.tsx" data-component-line="438" data-component-end-line="438" data-component-file="bookingsession.tsx" data-component-name="span" data-component-content="%7B%22elementName%22%3A%22span%22%2C%22className%22%3A%22text-xs%20font-bold%20uppercase%20tracking-%5B0.2em%5D%20text-shade%22%7D" className="text-xs font-bold uppercase tracking-[0.2em] text-shade">{row.label}</span>
                              <span data-component-id="src/app/components/bookingsession.tsx:439:30" data-component-path="src/app/components/bookingsession.tsx" data-component-line="439" data-component-end-line="439" data-component-file="bookingsession.tsx" data-component-name="span" data-component-content="%7B%22elementName%22%3A%22span%22%2C%22className%22%3A%22text-sm%20font-medium%20text-ink%22%7D" className="text-sm font-medium text-ink">{row.value}</span>
                            </div>
                          ))}
                        </div>

                        <div data-component-id="src/app/components/bookingsession.tsx:444:24" data-component-path="src/app/components/bookingsession.tsx" data-component-line="444" data-component-end-line="459" data-component-file="bookingsession.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22flex%20flex-col%20sm%3Aflex-row%20gap-3%22%7D" className="flex flex-col sm:flex-row gap-3">
                          <button data-component-id="src/app/components/bookingsession.tsx:445:26" data-component-path="src/app/components/bookingsession.tsx" data-component-line="445" data-component-end-line="451" data-component-file="bookingsession.tsx" data-component-name="button" data-component-content="%7B%22elementName%22%3A%22button%22%2C%22type%22%3A%22button%22%2C%22className%22%3A%22btn-outline%22%2C%22textContent%22%3A%22Back%22%7D"
                            type="button"
                            onClick={() => setStep(2)}
                            className="btn-outline"
                          >
                            Back
                          </button>
                          <button data-component-id="src/app/components/bookingsession.tsx:452:26" data-component-path="src/app/components/bookingsession.tsx" data-component-line="452" data-component-end-line="458" data-component-file="bookingsession.tsx" data-component-name="button" data-component-content="%7B%22elementName%22%3A%22button%22%2C%22type%22%3A%22submit%22%2C%22textContent%22%3A%22Confirm%20Booking%22%7D"
                            type="submit"
                            disabled={!canProceedStep3}
                            className={`btn-primary flex-1 sm:flex-none ${!canProceedStep3 ? 'opacity-40 cursor-not-allowed' : ''}`}
                          >
                            Confirm Booking
                          </button>
                        </div>
                      </div>
                    )}
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}