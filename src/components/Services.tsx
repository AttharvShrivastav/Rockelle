import React from "react";
import { motion } from "motion/react";
import { Accessibility, Dumbbell, Flower2 } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  isDark?: boolean;
  delay?: number;
}

function ServiceCard({ title, description, icon, isDark = false, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={`group relative flex flex-col space-y-6 overflow-hidden rounded-[2rem] p-8 transition-all duration-500 hover:-translate-y-2 md:p-10 ${
        isDark ? "bg-[#FFE4E4] text-[#4A2C2C]" : "bg-[#FFF0F0] text-[#4A2C2C]"
      }`}
    >
      {/* Flower Overlay */}
      <div className={`absolute -right-8 -bottom-8 h-40 w-40 opacity-20 transition-transform duration-700 group-hover:rotate-12 group-hover:scale-110 ${isDark ? "text-[#FFB7B7]" : "text-[#FFD1D1]"}`}>
        <svg viewBox="0 0 200 200" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 0C100 55.2285 55.2285 100 0 100C55.2285 100 100 144.772 100 200C100 144.772 144.772 100 200 100C144.772 100 100 55.2285 100 0Z" />
        </svg>
      </div>

      <div
        className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-full transition-transform duration-500 group-hover:scale-110 ${
          isDark ? "bg-white text-[#4A2C2C]" : "bg-[#FFB7B7] text-[#4A2C2C]"
        }`}
      >
        {icon}
      </div>
      <div className="relative z-10 space-y-4">
        <h3 className="font-display text-2xl font-medium">{title}</h3>
        <p className={`text-base leading-relaxed text-[#4A2C2C]/70`}>
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="classes" className="w-full bg-[#FFF9F9] px-6 py-16 md:px-10 md:py-20">
      <div className="mx-auto max-w-[90rem]">
        {/* Header Section */}
        <div className="mb-20 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-8 rounded-full bg-[#FFB7B7] px-6 py-2 text-sm font-semibold text-[#4A2C2C]"
          >
            Services
          </motion.div>
          <h2 className="font-serif text-4xl font-medium tracking-tight text-[#4A2C2C] md:text-6xl lg:text-7xl">
            Pilates for every body <br className="hidden md:block" /> and every mind
          </h2>
          <p className="mt-6 max-w-2xl font-sans text-lg font-light text-[#4A2C2C]/70 md:text-xl">
            Explore our diverse offerings designed to help you find balance, core strength, and mindful movement.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <ServiceCard
            title="Beginner Reformer"
            description="Perfect for those just starting their Pilates journey. Focus on core engagement, proper alignment, and fundamental movements. No experience required—just an open mind!"
            icon={<Accessibility className="h-6 w-6" />}
            delay={0.1}
          />
          <ServiceCard
            title="Power Pilates"
            description="Looking for a more intense workout? Our Power Pilates classes combine strength-building exercises and dynamic movements, helping you build muscle, improve stamina, and energize your body."
            icon={<Dumbbell className="h-6 w-6" />}
            delay={0.2}
          />
          <ServiceCard
            title="Restorative Flow"
            description="Unwind with our slow-paced restorative Pilates, designed to release tension and promote deep relaxation. These gentle movements help calm the nervous system, making it ideal for stress relief."
            icon={<Flower2 className="h-6 w-6" />}
            isDark
            delay={0.3}
          />
        </div>

        {/* CTA Button */}
        <div className="mt-20 flex justify-center">
          <motion.a
            href="#schedule"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative flex items-center gap-3 overflow-hidden rounded-full bg-[#FFB7B7] px-10 py-4 text-lg font-semibold text-[#4A2C2C] transition-all hover:bg-[#FFA4A4] hover:shadow-xl"
          >
            <span className="relative z-10">Explore All Classes</span>
            <div className="absolute inset-0 z-0 translate-y-full bg-white/20 transition-transform duration-300 group-hover:translate-y-0" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
