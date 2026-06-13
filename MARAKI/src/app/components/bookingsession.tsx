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
    <section
      id="booking"
      ref={sectionRef}
      className="py-24 md:py-32 bg-bg overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className={`mb-16 grid lg:grid-cols-12 gap-8 animate-on-scroll ${visible ? 'animate-fade-up' : 'opacity-0'}`}>
          <div className="lg:col-span-6">
            <span className="text-xs font-bold uppercase tracking-[0-5em] text-shade block mb-4">
              Appointments
            </span>
            <h2 className="font-display text-section-xl text-ink">
              Reserve your<br />
              <span className="italic text-coffee">chair</span>
            </h2>
          </div>
          <div className="lg:col-span-6 flex items-end">
            <div className="space-y-3">
              <p className="text-base text-ink/60 leading-relaxed">
                We're appointment-only to ensure every client receives our full, undivided attention. Slots fill quickly — book at least 2 weeks in advance.
              </p>
              <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-shade">
                <div className="w-2 h-2 rounded-full bg-blush" />
                Open Mon – Sat, 9AM – 6PM
              </div>
            </div>
          </div>
        </div>

        <div className={`grid lg:grid-cols-12 gap-8 animate-on-scroll ${visible ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '100ms' }}>
          {/* Left: Info panel */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            {/* Address */}
            <div className="bg-vanilla rounded-3xl p-6 border border-border">
              <div className="w-10 h-10 rounded-full bg-blush flex items-center justify-center mb-4">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-shade stroke-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 className="font-display text-lg font-bold text-ink mb-1">Find Us</h4>
              <p className="text-sm text-ink/60">148 W 57th Street<br />New York, NY 10019</p>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-shade mt-3">Near Carnegie Hall</p>
            </div>

            {/* Hours */}
            <div className="bg-vanilla rounded-3xl p-6 border border-border">
              <div className="w-10 h-10 rounded-full bg-blush flex items-center justify-center mb-4">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-shade stroke-2">
                  <circle cx="12" cy="12" r="10" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
                </svg>
              </div>
              <h4 className="font-display text-lg font-bold text-ink mb-3">Hours</h4>
              <div className="space-y-2">
                {[
                  { day: 'Mon – Wed', hours: '9:00 AM – 6:00 PM' },
                  { day: 'Thu – Fri', hours: '9:00 AM – 8:00 PM' },
                  { day: 'Saturday', hours: '10:00 AM – 5:00 PM' },
                  { day: 'Sunday', hours: 'Closed' },
                ].map((row) => (
                  <div key={row.day} className="flex justify-between items-center">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-shade">{row.day}</span>
                    <span className="text-xs text-ink/60">{row.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="bg-coffee rounded-3xl p-6">
              <h4 className="font-display text-lg font-bold text-vanilla mb-2">Questions?</h4>
              <p className="text-sm text-vanilla/70 mb-4">Call us or send a message — we typically respond within 2 hours.</p>
              <a href="tel:+12125550198" className="flex items-center gap-2 text-sm font-bold text-vanilla hover:text-blush transition-colors">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (212) 555-0198
              </a>
            </div>
          </div>

          {/* Right: Booking form */}
          <div className="lg:col-span-8">
            <div className="bg-vanilla rounded-4xl p-6 sm:p-10 border border-border">

              {submitted ? (
                /* Success state */
                <div className="flex flex-col items-center justify-center py-16 text-center gap-6">
                  <div className="w-20 h-20 rounded-full bg-blush flex items-center justify-center animate-float-y">
                    <svg viewBox="0 0 24 24" className="w-10 h-10 fill-none stroke-coffee stroke-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display text-3xl font-bold text-ink mb-2">You're booked!</h3>
                    <p className="text-ink/60 max-w-sm leading-relaxed">
                      A confirmation has been sent to <strong>{form.email}</strong>. We look forward to seeing you, {form.firstName}.
                    </p>
                  </div>
                  <div className="bg-bg rounded-2xl p-5 border border-border w-full max-w-sm text-left space-y-3">
                    <div className="flex justify-between">
                      <span className="text-xs font-bold uppercase tracking-[0.3em] text-shade">Service</span>
                      <span className="text-sm font-medium text-ink">{form.service}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-xs font-bold uppercase tracking-[0.3em] text-shade">Stylist</span>
                      <span className="text-sm font-medium text-ink">{form.stylist}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-xs font-bold uppercase tracking-[0.3em] text-shade">Date & Time</span>
                      <span className="text-sm font-medium text-ink">{form.date} at {form.time}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => { setSubmitted(false); setStep(1); setForm({ service: '', stylist: '', date: '', time: '', firstName: '', lastName: '', email: '', phone: '', notes: '' }); }}
                    className="btn-outline text-xs"
                  >
                    Book Another
                  </button>
                </div>
              ) : (
                <>
                  {/* Step indicator */}
                  <div className="flex items-center gap-3 mb-10">
                    {stepLabels.map((label, i) => {
                      const s = (i + 1) as Step;
                      return (
                        <React.Fragment key={label}>
                          <div className="flex items-center gap-2">
                            <div
                              className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                                step === s
                                  ? 'bg-coffee text-vanilla'
                                  : step > s
                                  ? 'bg-blush text-ink' :'bg-border text-ink/30'
                              }`}
                            >
                              {step > s ? (
                                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                              ) : (
                                s
                              )}
                            </div>
                            <span className={`text-xs font-bold uppercase tracking-[0.3em] hidden sm:block ${step === s ? 'text-ink' : 'text-ink/30'}`}>
                              {label}
                            </span>
                          </div>
                          {i < 2 && (
                            <div className={`flex-1 h-px transition-all duration-500 ${step > s ? 'bg-coffee' : 'bg-border'}`} />
                          )}
                        </React.Fragment>
                      );
                    })}
                  </div>

                  <form onSubmit={handleSubmit}>
                    {/* Step 1: Service + Stylist */}
                    {step === 1 && (
                      <div className="space-y-8">
                        <div>
                          <h3 className="font-display text-2xl font-bold text-ink mb-6">Choose your service</h3>
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                            {services.map((s) => (
                              <button
                                type="button"
                                key={s}
                                onClick={() => updateForm('service', s)}
                                className={`p-4 rounded-2xl border-2 text-left transition-all duration-200 spring-hover ${
                                  form.service === s
                                    ? 'border-coffee bg-coffee/5 text-coffee' :'border-border bg-bg hover:border-coffee/40 text-ink'
                                }`}
                              >
                                <span className="text-sm font-bold">{s}</span>
                              </button>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h3 className="font-display text-2xl font-bold text-ink mb-6">Choose your stylist</h3>
                          <div className="grid sm:grid-cols-2 gap-3">
                            {stylists.map((st) => (
                              <button
                                type="button"
                                key={st.name}
                                onClick={() => updateForm('stylist', st.name)}
                                className={`p-4 rounded-2xl border-2 text-left transition-all duration-200 spring-hover ${
                                  form.stylist === st.name
                                    ? 'border-coffee bg-coffee/5' :'border-border bg-bg hover:border-coffee/40'
                                }`}
                              >
                                <p className="text-sm font-bold text-ink">{st.name}</p>
                                <p className="text-xs text-ink/50 mt-0.5">{st.specialty}</p>
                              </button>
                            ))}
                          </div>
                        </div>

                        <button
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
                      <div className="space-y-8">
                        <div>
                          <h3 className="font-display text-2xl font-bold text-ink mb-6">Pick a date</h3>
                          <input
                            type="date"
                            value={form.date}
                            onChange={(e) => updateForm('date', e.target.value)}
                            min={new Date().toISOString().split('T')[0]}
                            className="w-full sm:w-64 px-4 py-3 rounded-xl border-2 border-border bg-bg text-ink font-medium focus:outline-none focus:border-coffee transition-colors"
                          />
                        </div>

                        <div>
                          <h3 className="font-display text-2xl font-bold text-ink mb-6">Choose a time</h3>
                          <div className="flex flex-wrap gap-3">
                            {timeSlots.map((t) => (
                              <button
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

                        <div className="flex flex-col sm:flex-row gap-3">
                          <button
                            type="button"
                            onClick={() => setStep(1)}
                            className="btn-outline"
                          >
                            Back
                          </button>
                          <button
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
                      <div className="space-y-8">
                        <div>
                          <h3 className="font-display text-2xl font-bold text-ink mb-6">Your details</h3>

                          <div className="grid sm:grid-cols-2 gap-4 mb-4">
                            <div>
                              <label className="block text-xs font-bold uppercase tracking-[0.3em] text-shade mb-2">
                                First Name *
                              </label>
                              <input
                                type="text"
                                value={form.firstName}
                                onChange={(e) => updateForm('firstName', e.target.value)}
                                placeholder="Camille"
                                required
                                className="w-full px-4 py-3 rounded-xl border-2 border-border bg-bg text-ink placeholder-ink/30 font-medium focus:outline-none focus:border-coffee transition-colors"
                              />
                            </div>
                            <div>
                              <label className="block text-xs font-bold uppercase tracking-[0.3em] text-shade mb-2">
                                Last Name *
                              </label>
                              <input
                                type="text"
                                value={form.lastName}
                                onChange={(e) => updateForm('lastName', e.target.value)}
                                placeholder="Thornton"
                                required
                                className="w-full px-4 py-3 rounded-xl border-2 border-border bg-bg text-ink placeholder-ink/30 font-medium focus:outline-none focus:border-coffee transition-colors"
                              />
                            </div>
                          </div>

                          <div className="grid sm:grid-cols-2 gap-4 mb-4">
                            <div>
                              <label className="block text-xs font-bold uppercase tracking-[0.3em] text-shade mb-2">
                                Email *
                              </label>
                              <input
                                type="email"
                                value={form.email}
                                onChange={(e) => updateForm('email', e.target.value)}
                                placeholder="camille@example.com"
                                required
                                className="w-full px-4 py-3 rounded-xl border-2 border-border bg-bg text-ink placeholder-ink/30 font-medium focus:outline-none focus:border-coffee transition-colors"
                              />
                            </div>
                            <div>
                              <label className="block text-xs font-bold uppercase tracking-[0.3em] text-shade mb-2">
                                Phone
                              </label>
                              <input
                                type="tel"
                                value={form.phone}
                                onChange={(e) => updateForm('phone', e.target.value)}
                                placeholder="(212) 555-0198"
                                className="w-full px-4 py-3 rounded-xl border-2 border-border bg-bg text-ink placeholder-ink/30 font-medium focus:outline-none focus:border-coffee transition-colors"
                              />
                            </div>
                          </div>

                          <div>
                            <label className="block text-xs font-bold uppercase tracking-[0.3em] text-shade mb-2">
                              Notes (optional)
                            </label>
                            <textarea
                              value={form.notes}
                              onChange={(e) => updateForm('notes', e.target.value)}
                              placeholder="Tell us about your hair goals, concerns, or anything we should know..."
                              rows={3}
                              className="w-full px-4 py-3 rounded-xl border-2 border-border bg-bg text-ink placeholder-ink/30 font-medium focus:outline-none focus:border-coffee transition-colors resize-none"
                            />
                          </div>
                        </div>

                        {/* Booking summary */}
                        <div className="bg-bg rounded-2xl p-5 border border-border space-y-3">
                          <p className="text-xs font-bold uppercase tracking-[0.4em] text-shade mb-3">Booking Summary</p>
                          {[
                            { label: 'Service', value: form.service },
                            { label: 'Stylist', value: form.stylist },
                            { label: 'Date', value: form.date },
                            { label: 'Time', value: form.time },
                          ].map((row) => (
                            <div key={row.label} className="flex justify-between items-center">
                              <span className="text-xs font-bold uppercase tracking-[0.2em] text-shade">{row.label}</span>
                              <span className="text-sm font-medium text-ink">{row.value}</span>
                            </div>
                          ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3">
                          <button
                            type="button"
                            onClick={() => setStep(2)}
                            className="btn-outline"
                          >
                            Back
                          </button>
                          <button
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