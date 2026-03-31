import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface StatItemProps {
  number: number;
  suffix: string;
  label: string;
  decimals?: number;
}

function StatItem({ number, suffix, label, decimals = 0 }: StatItemProps) {
  const numberRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!numberRef.current) return;

    gsap.fromTo(
      numberRef.current,
      { innerText: 0 },
      {
        innerText: number,
        duration: 2,
        snap: { innerText: decimals > 0 ? 0.1 : 1 },
        scrollTrigger: {
          trigger: numberRef.current,
          start: "top 90%",
        },
        onUpdate: function () {
          if (numberRef.current) {
            const val = parseFloat(this.targets()[0].innerText);
            numberRef.current.innerText = val.toFixed(decimals);
          }
        },
      }
    );
  }, [number, decimals]);

  return (
    <div className="flex flex-col items-start">
      <div className="font-display text-4xl font-medium tracking-tight text-[#4A2C2C] md:text-5xl">
        <span ref={numberRef}>0</span>
        {suffix}
      </div>
      <div className="mt-2 text-xs font-medium uppercase tracking-widest text-[#4A2C2C]/50">
        {label}
      </div>
    </div>
  );
}

export default function TrustBar() {
  return (
    <section id="about" className="w-full bg-[#FFF9F9] px-6 py-16 md:px-10 md:py-20">
      <div className="mx-auto max-w-[90rem] rounded-[2rem] bg-[#FFF0F0] p-8 shadow-sm md:p-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <StatItem number={8} suffix="+" label="Years Experience" />
            <StatItem number={500} suffix="+" label="Happy Clients" />
            <StatItem number={15} suffix="+" label="Certifications" />
          </div>

          {/* About Section */}
          <div className="flex flex-col justify-center space-y-6 lg:pl-12">
            <h2 className="font-serif text-3xl font-medium text-[#4A2C2C]">Our Mission</h2>
            <p className="text-lg leading-relaxed text-[#4A2C2C]/70">
              We believe in the transformative power of Pilates to not only strengthen the core but to foster a deeper connection between mind and body. Our studio is a sanctuary where you can find balance, build resilience, and move with newfound grace.
            </p>
            <a
              href="#trainer"
              className="group relative inline-flex w-fit items-center text-sm font-semibold text-[#4A2C2C]"
            >
              <span className="relative z-10">The Rockelle Method</span>
              <span className="absolute bottom-0 left-0 h-[1px] w-full bg-[#FFB7B7] transition-all group-hover:h-[2px]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
