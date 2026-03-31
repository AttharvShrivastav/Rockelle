import React, { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { Flower, Quote } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function MeetTrainer() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !imageRef.current || !contentRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        end: "bottom bottom",
        toggleActions: "play none none none",
      },
    });

    tl.fromTo(
      imageRef.current,
      { opacity: 0, x: -50, scale: 0.95 },
      { opacity: 1, x: 0, scale: 1, duration: 1.2, ease: "power3.out" }
    )
      .fromTo(
        contentRef.current.querySelectorAll(".animate-text"),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power3.out" },
        "-=0.8"
      )
      .fromTo(
        quoteRef.current,
        { opacity: 0, scale: 0.9, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 1, ease: "back.out(1.7)" },
        "-=0.4"
      );
  }, []);

  return (
    <section
      ref={sectionRef}
      id="trainer"
      className="relative w-full overflow-hidden bg-[#FFF0F0] px-6 py-12 md:px-10 md:py-16"
    >
      {/* Decorative Background Flower */}
      <div className="absolute -top-24 -left-24 h-64 w-64 opacity-5 text-[#FFB7B7]">
        <Flower className="h-full w-full rotate-12" />
      </div>

      <div className="mx-auto max-w-[90rem]">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
          {/* Image Side - Reduced height to be comparable with text */}
          <div ref={imageRef} className="relative min-h-[400px] w-full overflow-hidden rounded-[2rem] shadow-lg md:min-h-[500px] lg:h-[550px]">
            <img
              src="/trainer.jpg"
              alt="Rockelle - Lead Instructor"
              className="h-full w-full object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Overlay Accent */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#4A2C2C]/20 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <div className="flex items-center gap-3 rounded-full bg-white/20 px-4 py-2 backdrop-blur-md">
                <Flower className="h-4 w-4 text-[#FFB7B7]" />
                <span className="text-xs font-medium text-white">Founder & Lead Instructor</span>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div ref={contentRef} className="flex flex-col justify-center space-y-4 lg:pl-6">
            <div className="space-y-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 text-[#FFB7B7]"
              >
                <div className="h-[1px] w-8 bg-[#FFB7B7]" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Meet Your Trainer</span>
              </motion.div>
              <h2 className="animate-text font-serif text-4xl font-medium tracking-tight text-[#4A2C2C] md:text-5xl">
                Rockelle
              </h2>
            </div>

            <div className="space-y-4">
              <p className="animate-text font-sans text-base font-light leading-relaxed text-[#4A2C2C]/80">
                "I believe that movement is the most profound way we can connect with ourselves. My journey with Pilates started as a way to heal, but it quickly became my passion to help others find their own strength and grace."
              </p>
              <p className="animate-text font-sans text-sm font-light leading-relaxed text-[#4A2C2C]/70">
                With a background in contemporary dance and over 800 hours of specialized Pilates training, Rockelle brings a unique, fluid perspective to the reformer. Her classes are a blend of athletic challenge and mindful restoration.
              </p>
            </div>

            {/* Philosophy Quote Card */}
            <div
              ref={quoteRef}
              className="relative rounded-[1.25rem] bg-white p-5 shadow-sm ring-1 ring-[#FFB7B7]/10 md:p-6"
            >
              <Quote className="absolute top-4 right-6 h-8 w-8 text-[#FFB7B7]/10" />
              <div className="relative z-10 space-y-2">
                <h4 className="font-display text-base font-medium text-[#4A2C2C]">My Philosophy</h4>
                <p className="text-xs italic text-[#4A2C2C]/70">
                  "It's not about being the most flexible person in the room; it's about finding the space within yourself to grow, breathe, and move with intention."
                </p>
              </div>
            </div>

            <div className="animate-text pt-2">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center gap-4 rounded-full bg-[#4A2C2C] px-6 py-3 text-sm text-white transition-all hover:bg-black"
              >
                <span className="font-semibold">Book a Private with Rockelle</span>
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#FFB7B7] text-[#4A2C2C]">
                  <div className="h-1 w-1 rounded-full bg-[#4A2C2C]" />
                </div>
              </motion.a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Flower */}
      <div className="absolute -bottom-24 -right-24 h-96 w-96 opacity-5 text-[#FFB7B7]">
        <Flower className="h-full w-full -rotate-12" />
      </div>
    </section>
  );
}