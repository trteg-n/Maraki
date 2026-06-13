'use client';

import React, { useRef, useEffect, useState } from 'react';
import AppImage from '@/components/ui/AppImage';

const team = [
{
  name: 'Isabella Reyes',
  role: 'Creative Director',
  specialty: 'Colour & Balayage',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_138017ea9-1772073825349.png",
  imageAlt: 'Isabella Reyes, Creative Director, smiling confidently in salon setting',
  years: '12 yrs'
},
{
  name: 'Marcus Webb',
  role: 'Master Stylist',
  specialty: 'Precision Cuts',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_18b57c49b-1763298987025.png",
  imageAlt: 'Marcus Webb, Master Stylist, professional portrait in warm salon light',
  years: '9 yrs'
},
{
  name: 'Priya Nair',
  role: 'Senior Stylist',
  specialty: 'Bridal & Events',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_16f3417f7-1772212287957.png",
  imageAlt: 'Priya Nair, Senior Stylist, warm smile in professional setting',
  years: '7 yrs'
}];


export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {if (entry.isIntersecting) setVisible(true);},
      { threshold: 0.1 }
    );
    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 md:py-32 bg-vanilla overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className={`mb-16 grid lg:grid-cols-12 gap-8 animate-on-scroll ${visible ? 'animate-fade-up' : 'opacity-0'}`}>
          <div className="lg:col-span-5">
            <span className="text-xs font-bold uppercase tracking-[0.5em] text-shade block mb-4">
              Our Story
            </span>
            <h2 className="font-display text-section-xl text-ink">
              More than<br />
              <span className="italic text-coffee">a haircut</span>
            </h2>
          </div>
          <div className="lg:col-span-7 flex items-end">
            <div className="space-y-4 text-ink/60 leading-relaxed">
              <p>
                SalonSite began in a single chair in the West Village in 2014. Since then, we've grown into a full creative studio — but the philosophy hasn't changed: every client deserves artisan-level attention.
              </p>
              <p>
                We don't do walk-ins because we don't believe in rushing. Each appointment is a dedicated hour (or more) of focused craft, conversation, and care.
              </p>
            </div>
          </div>
        </div>

        {/* Main layout: big image left + right two cards */}
        <div className="flex flex-col lg:flex-row gap-5 mb-16">
          {/* Left: big image */}
          <div
            className={`lg:flex-1 spring-hover animate-on-scroll ${visible ? 'animate-fade-up' : 'opacity-0'}`}
            style={{ animationDelay: '100ms' }}>
            
            <div className="relative overflow-hidden rounded-3xl h-72 sm:h-96 lg:h-full min-h-[400px] group">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_1d07ecd83-1775404759016.png"
                alt="Warm, inviting salon interior with blush tones, wooden accents, and soft natural light streaming through large windows"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover img-zoom" />
              
              {/* Scrim for bottom text */}
              <div className="absolute inset-0 scrim-bottom" />
              <div className="absolute bottom-6 left-6">
                <p className="text-xs font-bold uppercase tracking-[0.4em] text-vanilla/70 mb-1">Our Studio</p>
                <p className="font-display text-xl font-semibold text-vanilla">148 W 57th St, NYC</p>
              </div>
            </div>
          </div>

          {/* Right: two cards */}
          <div className="flex flex-col gap-5 lg:flex-1">
            {/* Philosophy card */}
            <div
              className={`spring-hover relative overflow-hidden rounded-3xl border border-border bg-bg animate-on-scroll ${visible ? 'animate-fade-up' : 'opacity-0'}`}
              style={{ animationDelay: '200ms' }}>
              
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <AppImage
                  src="https://img.rocket.new/generatedImages/rocket_gen_img_13161a5c8-1767032589514.png"
                  alt="Hairstylist carefully examining hair texture in warm studio light, detailed craftsmanship visible"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover img-zoom" />
                
                <div className="absolute inset-0 scrim-bottom" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-ink mb-2">Slow Beauty Philosophy</h3>
                <p className="text-sm text-ink/60 leading-relaxed">
                  We believe great hair takes time. No shortcuts, no rushing — just focused, intentional craft.
                </p>
                <button
                  onClick={() => {
                    const el = document.getElementById('booking');
                    if (el) el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="btn-outline mt-4 text-xs py-2.5 px-5">
                  
                  Book a Visit
                </button>
              </div>
            </div>

            {/* Stats card */}
            <div
              className={`spring-hover relative overflow-hidden rounded-3xl animate-on-scroll ${visible ? 'animate-fade-up' : 'opacity-0'}`}
              style={{ animationDelay: '300ms' }}>
              
              <div className="relative min-h-52 overflow-hidden">
                <AppImage
                  src="https://img.rocket.new/generatedImages/rocket_gen_img_191f10152-1764825393789.png"
                  alt="Salon tools and products arranged elegantly on marble surface, warm rich tones"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover img-zoom" />
                
                <div className="absolute inset-0 bg-coffee/80" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 className="font-display text-xl font-bold text-vanilla mb-2">Premium Products Only</h3>
                  <p className="text-sm text-vanilla/70 leading-relaxed">
                    We use Olaplex, Redken, and Davines — because your hair deserves the best.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team */}
        <div className={`animate-on-scroll ${visible ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '400ms' }}>
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-display text-display-md text-ink">Meet the team</h3>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blush animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-[0.4em] text-shade">3 Stylists</span>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {team?.map((member, i) =>
            <div
              key={member?.name}
              className="spring-hover group cursor-pointer"
              style={{ animationDelay: `${500 + i * 100}ms` }}>
              
                <div className="relative overflow-hidden rounded-2xl h-72 mb-4">
                  <AppImage
                  src={member?.image}
                  alt={member?.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover img-zoom grayscale group-hover:grayscale-0 transition-all duration-700" />
                
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 right-4 bg-vanilla/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-xs font-bold text-shade">{member?.years}</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-display text-xl font-bold text-ink group-hover:text-coffee transition-colors">{member?.name}</h4>
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-shade mt-0.5">{member?.role}</p>
                  <p className="text-sm text-ink/50 mt-1">{member?.specialty}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

}