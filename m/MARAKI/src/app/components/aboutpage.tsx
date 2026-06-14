'use client';

import React, { useRef, useEffect, useState } from 'react';
import AppImage from '../../components/ui/AppImage';

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
    <section data-component-id="src/app/components/aboutpage.tsx:47:4" data-component-path="src/app/components/aboutpage.tsx" data-component-line="47" data-component-end-line="200" data-component-file="aboutpage.tsx" data-component-name="section" data-component-content="%7B%22elementName%22%3A%22section%22%2C%22id%22%3A%22about%22%2C%22className%22%3A%22py-24%20md%3Apy-32%20bg-vanilla%20overflow-hidden%22%7D"
      id="about"
      ref={sectionRef}
      className="py-24 md:py-32 bg-vanilla overflow-hidden">
      
      <div data-component-id="src/app/components/aboutpage.tsx:52:6" data-component-path="src/app/components/aboutpage.tsx" data-component-line="52" data-component-end-line="199" data-component-file="aboutpage.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22max-w-7xl%20mx-auto%20px-4%20sm%3Apx-6%20lg%3Apx-8%22%7D" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div data-component-id="src/app/components/aboutpage.tsx:55:8" data-component-path="src/app/components/aboutpage.tsx" data-component-line="55" data-component-end-line="75" data-component-file="aboutpage.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%7D" className={`mb-16 grid lg:grid-cols-12 gap-8 animate-on-scroll ${visible ? 'animate-fade-up' : 'opacity-0'}`}>
          <div data-component-id="src/app/components/aboutpage.tsx:56:10" data-component-path="src/app/components/aboutpage.tsx" data-component-line="56" data-component-end-line="64" data-component-file="aboutpage.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22lg%3Acol-span-5%22%7D" className="lg:col-span-5">
            <span data-component-id="src/app/components/aboutpage.tsx:57:12" data-component-path="src/app/components/aboutpage.tsx" data-component-line="57" data-component-end-line="59" data-component-file="aboutpage.tsx" data-component-name="span" data-component-content="%7B%22elementName%22%3A%22span%22%2C%22className%22%3A%22text-xs%20font-bold%20uppercase%20tracking-%5B0.5em%5D%20text-shade%20block%20mb-4%22%2C%22textContent%22%3A%22Our%20Story%22%7D" className="text-xs font-bold uppercase tracking-[0.5em] text-shade block mb-4">
              Our Story
            </span>
            <h2 data-component-id="src/app/components/aboutpage.tsx:60:12" data-component-path="src/app/components/aboutpage.tsx" data-component-line="60" data-component-end-line="63" data-component-file="aboutpage.tsx" data-component-name="h2" data-component-content="%7B%22elementName%22%3A%22h2%22%2C%22className%22%3A%22font-display%20text-section-xl%20text-ink%22%2C%22textContent%22%3A%22More%20than%22%7D" className="font-display text-section-xl text-ink">
              More than<br data-component-id="src/app/components/aboutpage.tsx:61:23" data-component-path="src/app/components/aboutpage.tsx" data-component-line="61" data-component-end-line="61" data-component-file="aboutpage.tsx" data-component-name="br" data-component-content="%7B%22elementName%22%3A%22br%22%7D" />
              <span data-component-id="src/app/components/aboutpage.tsx:62:14" data-component-path="src/app/components/aboutpage.tsx" data-component-line="62" data-component-end-line="62" data-component-file="aboutpage.tsx" data-component-name="span" data-component-content="%7B%22elementName%22%3A%22span%22%2C%22className%22%3A%22italic%20text-coffee%22%2C%22textContent%22%3A%22a%20haircut%22%7D" className="italic text-coffee">a haircut</span>
            </h2>
          </div>
          <div data-component-id="src/app/components/aboutpage.tsx:65:10" data-component-path="src/app/components/aboutpage.tsx" data-component-line="65" data-component-end-line="74" data-component-file="aboutpage.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22lg%3Acol-span-7%20flex%20items-end%22%7D" className="lg:col-span-7 flex items-end">
            <div data-component-id="src/app/components/aboutpage.tsx:66:12" data-component-path="src/app/components/aboutpage.tsx" data-component-line="66" data-component-end-line="73" data-component-file="aboutpage.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22space-y-4%20text-ink%2F60%20leading-relaxed%22%7D" className="space-y-4 text-ink/60 leading-relaxed">
              <p data-component-id="src/app/components/aboutpage.tsx:67:14" data-component-path="src/app/components/aboutpage.tsx" data-component-line="67" data-component-end-line="69" data-component-file="aboutpage.tsx" data-component-name="p" data-component-content="%7B%22elementName%22%3A%22p%22%2C%22textContent%22%3A%22SalonSite%20began%20in%20a%20single%20chair%20in%20the%20West%20Village%20in%202014.%20Since%20then%2C%20we've%20grown%20into%20a%20full%20creative%20studio%20%E2%80%94%20but%20the%20philosophy%20hasn't%20changed%3A%20every%20client%20deserves%20artisan-level%20attention.%22%7D">
                SalonSite began in a single chair in the West Village in 2014. Since then, we've grown into a full creative studio — but the philosophy hasn't changed: every client deserves artisan-level attention.
              </p>
              <p data-component-id="src/app/components/aboutpage.tsx:70:14" data-component-path="src/app/components/aboutpage.tsx" data-component-line="70" data-component-end-line="72" data-component-file="aboutpage.tsx" data-component-name="p" data-component-content="%7B%22elementName%22%3A%22p%22%2C%22textContent%22%3A%22We%20don't%20do%20walk-ins%20because%20we%20don't%20believe%20in%20rushing.%20Each%20appointment%20is%20a%20dedicated%20hour%20(or%20more)%20of%20focused%20craft%2C%20conversation%2C%20and%20care.%22%7D">
                We don't do walk-ins because we don't believe in rushing. Each appointment is a dedicated hour (or more) of focused craft, conversation, and care.
              </p>
            </div>
          </div>
        </div>

        {/* Main layout: big image left + right two cards */}
        <div data-component-id="src/app/components/aboutpage.tsx:78:8" data-component-path="src/app/components/aboutpage.tsx" data-component-line="78" data-component-end-line="158" data-component-file="aboutpage.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22flex%20flex-col%20lg%3Aflex-row%20gap-5%20mb-16%22%7D" className="flex flex-col lg:flex-row gap-5 mb-16">
          {/* Left: big image */}
          <div data-component-id="src/app/components/aboutpage.tsx:80:10" data-component-path="src/app/components/aboutpage.tsx" data-component-line="80" data-component-end-line="99" data-component-file="aboutpage.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%7D"
            className={`lg:flex-1 spring-hover animate-on-scroll ${visible ? 'animate-fade-up' : 'opacity-0'}`}
            style={{ animationDelay: '100ms' }}>
            
            <div data-component-id="src/app/components/aboutpage.tsx:84:12" data-component-path="src/app/components/aboutpage.tsx" data-component-line="84" data-component-end-line="98" data-component-file="aboutpage.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22relative%20overflow-hidden%20rounded-3xl%20h-72%20sm%3Ah-96%20lg%3Ah-full%20min-h-%5B400px%5D%20group%22%7D" className="relative overflow-hidden rounded-3xl h-72 sm:h-96 lg:h-full min-h-[400px] group">
              <AppImage data-component-id="src/app/components/aboutpage.tsx:85:14" data-component-path="src/app/components/aboutpage.tsx" data-component-line="85" data-component-end-line="90" data-component-file="aboutpage.tsx" data-component-name="AppImage" data-component-content="%7B%22elementName%22%3A%22AppImage%22%2C%22src%22%3A%22https%3A%2F%2Fimg.rocket.new%2FgeneratedImages%2Frocket_gen_img_1d07ecd83-1775404759016.png%22%2C%22alt%22%3A%22Warm%2C%20inviting%20salon%20interior%20with%20blush%20tones%2C%20wooden%20accents%2C%20and%20soft%20natural%20light%20streaming%20through%20large%20windows%22%2C%22className%22%3A%22object-cover%20img-zoom%22%7D"
                src="https://img.rocket.new/generatedImages/rocket_gen_img_1d07ecd83-1775404759016.png"
                alt="Warm, inviting salon interior with blush tones, wooden accents, and soft natural light streaming through large windows"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover img-zoom" />
              
              {/* Scrim for bottom text */}
              <div data-component-id="src/app/components/aboutpage.tsx:93:14" data-component-path="src/app/components/aboutpage.tsx" data-component-line="93" data-component-end-line="93" data-component-file="aboutpage.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22absolute%20inset-0%20scrim-bottom%22%7D" className="absolute inset-0 scrim-bottom" />
              <div data-component-id="src/app/components/aboutpage.tsx:94:14" data-component-path="src/app/components/aboutpage.tsx" data-component-line="94" data-component-end-line="97" data-component-file="aboutpage.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22absolute%20bottom-6%20left-6%22%7D" className="absolute bottom-6 left-6">
                <p data-component-id="src/app/components/aboutpage.tsx:95:16" data-component-path="src/app/components/aboutpage.tsx" data-component-line="95" data-component-end-line="95" data-component-file="aboutpage.tsx" data-component-name="p" data-component-content="%7B%22elementName%22%3A%22p%22%2C%22className%22%3A%22text-xs%20font-bold%20uppercase%20tracking-%5B0.4em%5D%20text-vanilla%2F70%20mb-1%22%2C%22textContent%22%3A%22Our%20Studio%22%7D" className="text-xs font-bold uppercase tracking-[0.4em] text-vanilla/70 mb-1">Our Studio</p>
                <p data-component-id="src/app/components/aboutpage.tsx:96:16" data-component-path="src/app/components/aboutpage.tsx" data-component-line="96" data-component-end-line="96" data-component-file="aboutpage.tsx" data-component-name="p" data-component-content="%7B%22elementName%22%3A%22p%22%2C%22className%22%3A%22font-display%20text-xl%20font-semibold%20text-vanilla%22%2C%22textContent%22%3A%22148%20W%2057th%20St%2C%20NYC%22%7D" className="font-display text-xl font-semibold text-vanilla">148 W 57th St, NYC</p>
              </div>
            </div>
          </div>

          {/* Right: two cards */}
          <div data-component-id="src/app/components/aboutpage.tsx:102:10" data-component-path="src/app/components/aboutpage.tsx" data-component-line="102" data-component-end-line="157" data-component-file="aboutpage.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22flex%20flex-col%20gap-5%20lg%3Aflex-1%22%7D" className="flex flex-col gap-5 lg:flex-1">
            {/* Philosophy card */}
            <div data-component-id="src/app/components/aboutpage.tsx:104:12" data-component-path="src/app/components/aboutpage.tsx" data-component-line="104" data-component-end-line="133" data-component-file="aboutpage.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%7D"
              className={`spring-hover relative overflow-hidden rounded-3xl border border-border bg-bg animate-on-scroll ${visible ? 'animate-fade-up' : 'opacity-0'}`}
              style={{ animationDelay: '200ms' }}>
              
              <div data-component-id="src/app/components/aboutpage.tsx:108:14" data-component-path="src/app/components/aboutpage.tsx" data-component-line="108" data-component-end-line="117" data-component-file="aboutpage.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22relative%20h-48%20sm%3Ah-56%20overflow-hidden%22%7D" className="relative h-48 sm:h-56 overflow-hidden">
                <AppImage data-component-id="src/app/components/aboutpage.tsx:109:16" data-component-path="src/app/components/aboutpage.tsx" data-component-line="109" data-component-end-line="114" data-component-file="aboutpage.tsx" data-component-name="AppImage" data-component-content="%7B%22elementName%22%3A%22AppImage%22%2C%22src%22%3A%22https%3A%2F%2Fimg.rocket.new%2FgeneratedImages%2Frocket_gen_img_13161a5c8-1767032589514.png%22%2C%22alt%22%3A%22Hairstylist%20carefully%20examining%20hair%20texture%20in%20warm%20studio%20light%2C%20detailed%20craftsmanship%20visible%22%2C%22className%22%3A%22object-cover%20img-zoom%22%7D"
                  src="https://img.rocket.new/generatedImages/rocket_gen_img_13161a5c8-1767032589514.png"
                  alt="Hairstylist carefully examining hair texture in warm studio light, detailed craftsmanship visible"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover img-zoom" />
                
                <div data-component-id="src/app/components/aboutpage.tsx:116:16" data-component-path="src/app/components/aboutpage.tsx" data-component-line="116" data-component-end-line="116" data-component-file="aboutpage.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22absolute%20inset-0%20scrim-bottom%22%7D" className="absolute inset-0 scrim-bottom" />
              </div>
              <div data-component-id="src/app/components/aboutpage.tsx:118:14" data-component-path="src/app/components/aboutpage.tsx" data-component-line="118" data-component-end-line="132" data-component-file="aboutpage.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22p-6%22%7D" className="p-6">
                <h3 data-component-id="src/app/components/aboutpage.tsx:119:16" data-component-path="src/app/components/aboutpage.tsx" data-component-line="119" data-component-end-line="119" data-component-file="aboutpage.tsx" data-component-name="h3" data-component-content="%7B%22elementName%22%3A%22h3%22%2C%22className%22%3A%22font-display%20text-xl%20font-bold%20text-ink%20mb-2%22%2C%22textContent%22%3A%22Slow%20Beauty%20Philosophy%22%7D" className="font-display text-xl font-bold text-ink mb-2">Slow Beauty Philosophy</h3>
                <p data-component-id="src/app/components/aboutpage.tsx:120:16" data-component-path="src/app/components/aboutpage.tsx" data-component-line="120" data-component-end-line="122" data-component-file="aboutpage.tsx" data-component-name="p" data-component-content="%7B%22elementName%22%3A%22p%22%2C%22className%22%3A%22text-sm%20text-ink%2F60%20leading-relaxed%22%2C%22textContent%22%3A%22We%20believe%20great%20hair%20takes%20time.%20No%20shortcuts%2C%20no%20rushing%20%E2%80%94%20just%20focused%2C%20intentional%20craft.%22%7D" className="text-sm text-ink/60 leading-relaxed">
                  We believe great hair takes time. No shortcuts, no rushing — just focused, intentional craft.
                </p>
                <button data-component-id="src/app/components/aboutpage.tsx:123:16" data-component-path="src/app/components/aboutpage.tsx" data-component-line="123" data-component-end-line="131" data-component-file="aboutpage.tsx" data-component-name="button" data-component-content="%7B%22elementName%22%3A%22button%22%2C%22className%22%3A%22btn-outline%20mt-4%20text-xs%20py-2.5%20px-5%22%2C%22textContent%22%3A%22Book%20a%20Visit%22%7D"
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
            <div data-component-id="src/app/components/aboutpage.tsx:136:12" data-component-path="src/app/components/aboutpage.tsx" data-component-line="136" data-component-end-line="156" data-component-file="aboutpage.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%7D"
              className={`spring-hover relative overflow-hidden rounded-3xl animate-on-scroll ${visible ? 'animate-fade-up' : 'opacity-0'}`}
              style={{ animationDelay: '300ms' }}>
              
              <div data-component-id="src/app/components/aboutpage.tsx:140:14" data-component-path="src/app/components/aboutpage.tsx" data-component-line="140" data-component-end-line="155" data-component-file="aboutpage.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22relative%20min-h-52%20overflow-hidden%22%7D" className="relative min-h-52 overflow-hidden">
                <AppImage data-component-id="src/app/components/aboutpage.tsx:141:16" data-component-path="src/app/components/aboutpage.tsx" data-component-line="141" data-component-end-line="146" data-component-file="aboutpage.tsx" data-component-name="AppImage" data-component-content="%7B%22elementName%22%3A%22AppImage%22%2C%22src%22%3A%22https%3A%2F%2Fimg.rocket.new%2FgeneratedImages%2Frocket_gen_img_191f10152-1764825393789.png%22%2C%22alt%22%3A%22Salon%20tools%20and%20products%20arranged%20elegantly%20on%20marble%20surface%2C%20warm%20rich%20tones%22%2C%22className%22%3A%22object-cover%20img-zoom%22%7D"
                  src="https://img.rocket.new/generatedImages/rocket_gen_img_191f10152-1764825393789.png"
                  alt="Salon tools and products arranged elegantly on marble surface, warm rich tones"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover img-zoom" />
                
                <div data-component-id="src/app/components/aboutpage.tsx:148:16" data-component-path="src/app/components/aboutpage.tsx" data-component-line="148" data-component-end-line="148" data-component-file="aboutpage.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22absolute%20inset-0%20bg-coffee%2F80%22%7D" className="absolute inset-0 bg-coffee/80" />
                <div data-component-id="src/app/components/aboutpage.tsx:149:16" data-component-path="src/app/components/aboutpage.tsx" data-component-line="149" data-component-end-line="154" data-component-file="aboutpage.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22absolute%20inset-0%20p-6%20flex%20flex-col%20justify-end%22%7D" className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 data-component-id="src/app/components/aboutpage.tsx:150:18" data-component-path="src/app/components/aboutpage.tsx" data-component-line="150" data-component-end-line="150" data-component-file="aboutpage.tsx" data-component-name="h3" data-component-content="%7B%22elementName%22%3A%22h3%22%2C%22className%22%3A%22font-display%20text-xl%20font-bold%20text-vanilla%20mb-2%22%2C%22textContent%22%3A%22Premium%20Products%20Only%22%7D" className="font-display text-xl font-bold text-vanilla mb-2">Premium Products Only</h3>
                  <p data-component-id="src/app/components/aboutpage.tsx:151:18" data-component-path="src/app/components/aboutpage.tsx" data-component-line="151" data-component-end-line="153" data-component-file="aboutpage.tsx" data-component-name="p" data-component-content="%7B%22elementName%22%3A%22p%22%2C%22className%22%3A%22text-sm%20text-vanilla%2F70%20leading-relaxed%22%2C%22textContent%22%3A%22We%20use%20Olaplex%2C%20Redken%2C%20and%20Davines%20%E2%80%94%20because%20your%20hair%20deserves%20the%20best.%22%7D" className="text-sm text-vanilla/70 leading-relaxed">
                    We use Olaplex, Redken, and Davines — because your hair deserves the best.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team */}
        <div data-component-id="src/app/components/aboutpage.tsx:161:8" data-component-path="src/app/components/aboutpage.tsx" data-component-line="161" data-component-end-line="198" data-component-file="aboutpage.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%7D" className={`animate-on-scroll ${visible ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '400ms' }}>
          <div data-component-id="src/app/components/aboutpage.tsx:162:10" data-component-path="src/app/components/aboutpage.tsx" data-component-line="162" data-component-end-line="168" data-component-file="aboutpage.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22flex%20items-center%20justify-between%20mb-8%22%7D" className="flex items-center justify-between mb-8">
            <h3 data-component-id="src/app/components/aboutpage.tsx:163:12" data-component-path="src/app/components/aboutpage.tsx" data-component-line="163" data-component-end-line="163" data-component-file="aboutpage.tsx" data-component-name="h3" data-component-content="%7B%22elementName%22%3A%22h3%22%2C%22className%22%3A%22font-display%20text-display-md%20text-ink%22%2C%22textContent%22%3A%22Meet%20the%20team%22%7D" className="font-display text-display-md text-ink">Meet the team</h3>
            <div data-component-id="src/app/components/aboutpage.tsx:164:12" data-component-path="src/app/components/aboutpage.tsx" data-component-line="164" data-component-end-line="167" data-component-file="aboutpage.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22flex%20items-center%20gap-2%22%7D" className="flex items-center gap-2">
              <div data-component-id="src/app/components/aboutpage.tsx:165:14" data-component-path="src/app/components/aboutpage.tsx" data-component-line="165" data-component-end-line="165" data-component-file="aboutpage.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22w-2%20h-2%20rounded-full%20bg-blush%20animate-pulse%22%7D" className="w-2 h-2 rounded-full bg-blush animate-pulse" />
              <span data-component-id="src/app/components/aboutpage.tsx:166:14" data-component-path="src/app/components/aboutpage.tsx" data-component-line="166" data-component-end-line="166" data-component-file="aboutpage.tsx" data-component-name="span" data-component-content="%7B%22elementName%22%3A%22span%22%2C%22className%22%3A%22text-xs%20font-bold%20uppercase%20tracking-%5B0.4em%5D%20text-shade%22%2C%22textContent%22%3A%223%20Stylists%22%7D" className="text-xs font-bold uppercase tracking-[0.4em] text-shade">3 Stylists</span>
            </div>
          </div>

          <div data-component-id="src/app/components/aboutpage.tsx:170:10" data-component-path="src/app/components/aboutpage.tsx" data-component-line="170" data-component-end-line="197" data-component-file="aboutpage.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22grid%20sm%3Agrid-cols-2%20lg%3Agrid-cols-3%20gap-4%22%7D" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {team?.map((member, i) =>
            <div data-component-id="src/app/components/aboutpage.tsx:172:12" data-component-path="src/app/components/aboutpage.tsx" data-component-line="172" data-component-end-line="195" data-component-file="aboutpage.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22spring-hover%20group%20cursor-pointer%22%7D"
              key={member?.name}
              className="spring-hover group cursor-pointer"
              style={{ animationDelay: `${500 + i * 100}ms` }}>
              
                <div data-component-id="src/app/components/aboutpage.tsx:177:16" data-component-path="src/app/components/aboutpage.tsx" data-component-line="177" data-component-end-line="189" data-component-file="aboutpage.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22relative%20overflow-hidden%20rounded-2xl%20h-72%20mb-4%22%7D" className="relative overflow-hidden rounded-2xl h-72 mb-4">
                  <AppImage data-component-id="src/app/components/aboutpage.tsx:178:18" data-component-path="src/app/components/aboutpage.tsx" data-component-line="178" data-component-end-line="183" data-component-file="aboutpage.tsx" data-component-name="AppImage" data-component-content="%7B%22elementName%22%3A%22AppImage%22%2C%22className%22%3A%22object-cover%20img-zoom%20grayscale%20group-hover%3Agrayscale-0%20transition-all%20duration-700%22%7D"
                  src={member?.image}
                  alt={member?.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover img-zoom grayscale group-hover:grayscale-0 transition-all duration-700" />
                
                  <div data-component-id="src/app/components/aboutpage.tsx:185:18" data-component-path="src/app/components/aboutpage.tsx" data-component-line="185" data-component-end-line="185" data-component-file="aboutpage.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22absolute%20inset-0%20bg-gradient-to-t%20from-ink%2F60%20via-transparent%20to-transparent%22%7D" className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
                  <div data-component-id="src/app/components/aboutpage.tsx:186:18" data-component-path="src/app/components/aboutpage.tsx" data-component-line="186" data-component-end-line="188" data-component-file="aboutpage.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%2C%22className%22%3A%22absolute%20bottom-4%20right-4%20bg-vanilla%2F90%20backdrop-blur-sm%20rounded-full%20px-3%20py-1%22%7D" className="absolute bottom-4 right-4 bg-vanilla/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span data-component-id="src/app/components/aboutpage.tsx:187:20" data-component-path="src/app/components/aboutpage.tsx" data-component-line="187" data-component-end-line="187" data-component-file="aboutpage.tsx" data-component-name="span" data-component-content="%7B%22elementName%22%3A%22span%22%2C%22className%22%3A%22text-xs%20font-bold%20text-shade%22%7D" className="text-xs font-bold text-shade">{member?.years}</span>
                  </div>
                </div>
                <div data-component-id="src/app/components/aboutpage.tsx:190:16" data-component-path="src/app/components/aboutpage.tsx" data-component-line="190" data-component-end-line="194" data-component-file="aboutpage.tsx" data-component-name="div" data-component-content="%7B%22elementName%22%3A%22div%22%7D">
                  <h4 data-component-id="src/app/components/aboutpage.tsx:191:18" data-component-path="src/app/components/aboutpage.tsx" data-component-line="191" data-component-end-line="191" data-component-file="aboutpage.tsx" data-component-name="h4" data-component-content="%7B%22elementName%22%3A%22h4%22%2C%22className%22%3A%22font-display%20text-xl%20font-bold%20text-ink%20group-hover%3Atext-coffee%20transition-colors%22%7D" className="font-display text-xl font-bold text-ink group-hover:text-coffee transition-colors">{member?.name}</h4>
                  <p data-component-id="src/app/components/aboutpage.tsx:192:18" data-component-path="src/app/components/aboutpage.tsx" data-component-line="192" data-component-end-line="192" data-component-file="aboutpage.tsx" data-component-name="p" data-component-content="%7B%22elementName%22%3A%22p%22%2C%22className%22%3A%22text-xs%20font-bold%20uppercase%20tracking-%5B0.3em%5D%20text-shade%20mt-0.5%22%7D" className="text-xs font-bold uppercase tracking-[0.3em] text-shade mt-0.5">{member?.role}</p>
                  <p data-component-id="src/app/components/aboutpage.tsx:193:18" data-component-path="src/app/components/aboutpage.tsx" data-component-line="193" data-component-end-line="193" data-component-file="aboutpage.tsx" data-component-name="p" data-component-content="%7B%22elementName%22%3A%22p%22%2C%22className%22%3A%22text-sm%20text-ink%2F50%20mt-1%22%7D" className="text-sm text-ink/50 mt-1">{member?.specialty}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

}