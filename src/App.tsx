/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import gsap from "gsap";
import Navigation from "./components/Navigation";
import TrustBar from "./components/TrustBar";
import Services from "./components/Services";
import MeetTrainer from "./components/MeetTrainer";
import Schedule from "./components/Schedule";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const pRef = useRef<HTMLParagraphElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!h1Ref.current || !pRef.current) return;

    const h1Text = h1Ref.current.innerText;
    h1Ref.current.innerHTML = h1Text
      .split(" ")
      .map((word) => `<span class="inline-block overflow-hidden"><span class="inline-block translate-y-full">${word}</span></span>`)
      .join(" ");

    const words = h1Ref.current.querySelectorAll("span span");
    const tl = gsap.timeline({ delay: 0.5 });

    tl.to(words, {
      y: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power4.out",
    })
      .fromTo(pRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" }, "-=0.5")
      .fromTo(btnRef.current, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.7)" }, "-=0.8");
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#FFF9F9]">
      <Navigation />

      {/* Centered Logo Image */}
      <div className="absolute top-0 left-0 right-0 z-50 flex justify-center py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {/* Using brightness-0 invert to make a dark logo white, or remove filter if logo is already light */}
          <img src="/logo.png" alt="Rockelle Pilates" className="h-12 w-auto object-contain brightness-0 invert" />
        </motion.div>
      </div>

      {/* Hero Section - Full Bleed */}
      <section id="home" className="relative h-screen w-full overflow-hidden">
        {/* Background Image with Enhanced Dark Overlay */}
        <div className="absolute inset-0">
          <img
            src="/hero.png"
            alt="Rockelle Pilates Studio"
            className="h-full w-full object-cover"
          />
          {/* Solid 40% overlay for maximum readability */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Desktop Book Session (Top Right) */}
        <div className="absolute top-0 right-0 z-50 hidden items-center px-6 py-8 md:flex md:px-12">
          <motion.a
            href="#contact"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-6 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-white hover:text-black active:scale-95"
          >
            Book session
          </motion.a>
        </div>

        {/* Hero Content - Light Text */}
        <main className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
          <div className="max-w-4xl">
            <h1
              ref={h1Ref}
              className="font-serif text-5xl font-medium tracking-tight text-[#FFF9F9] md:text-7xl lg:text-8xl"
            >
              Move with grace <br className="hidden md:block" /> at Rockelle's
            </h1>
            <p
              ref={pRef}
              className="mt-8 font-sans text-lg font-light text-[#FFF9F9]/90 md:text-2xl lg:mx-auto lg:max-w-2xl"
            >
              Experience a personalized approach to Pilates designed to strengthen your core, improve posture, and find your inner flow.
            </p>

            {/* CTA Button */}
            <div ref={btnRef} className="mt-10">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact" 
                className="inline-block rounded-full bg-[#FEF1F0] px-10 py-4 text-sm font-bold uppercase tracking-widest text-black shadow-lg transition-all"
              >
                Start Journey
              </motion.a>
            </div>
          </div>
        </main>

        {/* Subtle Bottom Accent */}
        <div className="absolute bottom-12 left-0 right-0 z-10 flex justify-center">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="h-1 w-12 rounded-full bg-white/40"
          />
        </div>
      </section>

      <TrustBar />
      <Services />
      <MeetTrainer />
      <Schedule />
      <Testimonials />
      <Contact />
      
      {/* Ensure Footer also uses logo.png inside its component */}
      <Footer />
    </div>
  );
}