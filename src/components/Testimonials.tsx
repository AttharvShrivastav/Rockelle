import { motion } from "motion/react";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Sarah",
    role: "Pilates Enthusiast",
    quote: "Joining Rockelle's classes has been life-changing. I feel more energized and connected to my body every day.",
  },
  {
    id: 2,
    name: "Emily",
    role: "Wellness Seeker",
    quote: "These sessions have brought so much peace into my life. I'm more balanced, calm, and physically stronger than ever.",
  },
  {
    id: 3,
    name: "Amanda",
    role: "Office Worker",
    quote: "I never imagined Pilates could help my back pain this much. My body and mind feel resilient and powerful.",
  },
  {
    id: 4,
    name: "Jessica",
    role: "Athlete",
    quote: "Rockelle's attention to detail is unmatched. She helped me refine my form and find strength I didn't know I had.",
  },
  {
    id: 5,
    name: "Michael",
    role: "Runner",
    quote: "The core strength I've built here has completely changed my running posture. No more lower back fatigue.",
  },
  {
    id: 6,
    name: "Sophia",
    role: "Yoga Teacher",
    quote: "Even as an instructor myself, I find Rockelle's cues to be incredibly insightful. A master of her craft.",
  },
];

export default function Testimonials() {
  // Duplicate testimonials for seamless marquee
  const marqueeItems = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section id="testimonials" className="w-full overflow-hidden bg-[#FFF9F9] py-12 md:py-16">
      <div className="mb-12 px-6 md:px-10">
        <h2 className="font-serif text-4xl font-medium tracking-tight text-[#4A2C2C] md:text-5xl">
          What our members are saying
        </h2>
        <p className="mt-4 max-w-2xl font-sans text-lg font-light text-[#4A2C2C]/70">
          Real stories of transformation, strength, and mindful connection from our dedicated Pilates community.
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative flex w-full overflow-hidden">
        <motion.div
          className="flex gap-6 px-3"
          animate={{
            x: [0, -1800], // Adjust based on total width of one set of cards
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {marqueeItems.map((testimonial, index) => (
            <div
              key={`${testimonial.id}-${index}`}
              className="flex w-[350px] flex-shrink-0 flex-col justify-between rounded-[2rem] bg-[#FFF0F0] p-8 shadow-sm ring-1 ring-[#FFB7B7]/10"
            >
              <p className="font-sans text-lg font-light leading-relaxed text-[#4A2C2C]/80">
                "{testimonial.quote}"
              </p>
              <div className="mt-8">
                <h4 className="font-display text-base font-medium text-[#4A2C2C]">
                  {testimonial.name}
                </h4>
                <p className="text-xs font-medium uppercase tracking-widest text-[#4A2C2C]/40">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
