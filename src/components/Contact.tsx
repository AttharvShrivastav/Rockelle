import { motion } from "motion/react";
import { Instagram, Phone, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="w-full bg-white px-4 py-12 md:px-10 md:py-20">
      <div 
        className="relative mx-auto max-w-7xl overflow-hidden rounded-[3rem] bg-cover bg-center p-8 md:p-20"
        style={{ backgroundImage: `url('/hero.png')` }}
      >
        {/* Dark Overlay for Readability */}
        <div className="absolute inset-0 bg-black/20" />

        <div className="relative z-10 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          
          {/* Left Side: Brand Info */}
          <div className="text-white">
            <h2 className="mb-12 text-5xl font-medium tracking-tight md:text-7xl">
              Get in touch <br /> with Rockelle
            </h2>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black">
                  <Phone className="h-5 w-5" />
                </div>
                <span className="text-lg font-light">+999999999</span>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black">
                  <Mail className="h-5 w-5" />
                </div>
                <span className="text-lg font-light">pilateswithrockelle@rockelle.com</span>
              </div>

              <div className="flex items-center gap-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black">
                  <Instagram className="h-5 w-5" />
                </div>
                <span className="text-lg font-light">@pilates_with_rockelle</span>
              </div>
            </div>
          </div>

          {/* Right Side: Form Card */}
          <div className="rounded-[2.5rem] bg-white p-10 shadow-2xl md:p-14">
            <div className="mb-10">
              <h3 className="mb-4 text-3xl font-medium text-gray-900">Step Into Balance and Grace</h3>
              <p className="text-sm leading-relaxed text-gray-500">
                Every moment you spend moving with awareness is a step toward balance and inner harmony.
              </p>
            </div>

            <form className="space-y-10">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-700">Name (required)</label>
                <input
                  type="text"
                  className="w-full border-b border-gray-300 py-2 outline-none transition-colors focus:border-black"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-700">Email (required)</label>
                <input
                  type="email"
                  className="w-full border-b border-gray-300 py-2 outline-none transition-colors focus:border-black"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-700">Message</label>
                <textarea
                  rows={1}
                  className="w-full border-b border-gray-300 py-2 outline-none transition-colors focus:border-black resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-full bg-[#333333] px-10 py-4 text-sm font-medium text-white transition-all hover:bg-black"
              >
                Submit
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}