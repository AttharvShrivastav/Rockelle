import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#FFF9F9] px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-[90rem]">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-4 lg:gap-8">
          
          {/* Brand Column */}
          <div className="space-y-8">
            <div className="flex items-center gap-2">
              {/* Replaced Icon/Text with logo.png */}
              <img 
                src="/logo.png" 
                alt="Rockelle Pilates Logo" 
                className="h-10 w-auto object-contain" 
              />
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-[#4A2C2C]/60">
              A boutique Pilates studio dedicated to mindful movement, core strength, and holistic well-being. Join our community and discover your inner grace.
            </p>
            <div className="flex gap-4">
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#4A2C2C] shadow-sm transition-all hover:bg-[#4A2C2C] hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#4A2C2C] shadow-sm transition-all hover:bg-[#4A2C2C] hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-8">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#4A2C2C]">Studio</h4>
            <ul className="space-y-4">
              {["Classes", "About", "Trainer", "Schedule", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-sm text-[#4A2C2C]/60 transition-colors hover:text-[#4A2C2C]"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#4A2C2C]">Connect</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-[#4A2C2C]/60">
                <Mail className="h-4 w-4 mt-0.5 text-[#4A2C2C]/40" />
                <span>hello@rockellepilates.com</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-[#4A2C2C]/60">
                <Phone className="h-4 w-4 mt-0.5 text-[#4A2C2C]/40" />
                <span>+1 (555) 010—0123</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-[#4A2C2C]/60">
                <MapPin className="h-4 w-4 mt-0.5 text-[#4A2C2C]/40" />
                <span>123 Wellness Way, Suite 100<br />Mindful City, ST 12345</span>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="space-y-8">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#4A2C2C]">Newsletter</h4>
            <p className="text-sm text-[#4A2C2C]/60">
              Subscribe to receive mindful movement tips and studio updates.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="w-full border-b border-[#4A2C2C]/20 bg-transparent py-2 text-sm outline-none transition-colors focus:border-[#4A2C2C]"
              />
              <button className="text-xs font-bold uppercase tracking-widest text-[#4A2C2C] hover:opacity-60 transition-opacity">
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-24 flex flex-col items-center justify-between gap-6 border-t border-[#4A2C2C]/10 pt-8 md:flex-row">
          <p className="text-[10px] uppercase tracking-widest text-[#4A2C2C]/40">
            © {currentYear} Rockelle Pilates. All rights reserved.
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest text-[#4A2C2C]/40">
            <a href="#" className="hover:text-[#4A2C2C] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#4A2C2C] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}