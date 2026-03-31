import { useEffect, useRef, useState, useLayoutEffect } from "react";
import gsap from "gsap";
import { Flower } from "lucide-react";

const NAV_ITEMS = ["Classes", "About", "Trainer", "Schedule", "Contact"];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const itemsContainerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const togglerSpansRef = useRef<(HTMLSpanElement | null)[]>([]);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  // Use layout effect for measurements
  useLayoutEffect(() => {
    if (!itemsContainerRef.current) return;

    // Initially hide items container
    gsap.set(itemsContainerRef.current, { width: 0, opacity: 0, overflow: "hidden" });
    gsap.set(itemsRef.current, { opacity: 0, scale: 0.8, x: -10 });

    // Create the timeline
    const tl = gsap.timeline({ paused: true, reversed: true });

    tl.to(itemsContainerRef.current, {
      width: "auto",
      opacity: 1,
      duration: 0.5,
      ease: "power3.inOut",
    })
      .to(
        togglerSpansRef.current[0],
        {
          rotate: 45,
          y: 4,
          duration: 0.3,
          ease: "power2.inOut",
        },
        "<"
      )
      .to(
        togglerSpansRef.current[1],
        {
          rotate: -45,
          y: -4,
          duration: 0.3,
          ease: "power2.inOut",
        },
        "<"
      )
      .to(
        itemsRef.current,
        {
          opacity: 1,
          scale: 1,
          x: 0,
          duration: 0.4,
          stagger: 0.1,
          ease: "back.out(1.7)",
        },
        "-=0.2"
      );

    timelineRef.current = tl;

    return () => {
      tl.kill();
    };
  }, []);

  useEffect(() => {
    if (!timelineRef.current) return;
    if (isOpen) {
      timelineRef.current.play();
    } else {
      timelineRef.current.reverse();
    }
  }, [isOpen]);

  return (
    <div
      ref={drawerRef}
      className="menu-drawer fixed top-6 left-6 z-[100] flex max-w-[calc(100vw-3rem)] items-center justify-center rounded-full bg-[#FFF0F0]/90 p-1.5 shadow-lg ring-1 ring-[#FFB7B7]/20 backdrop-blur-md transition-colors hover:bg-[#FFF0F0]"
    >
      {/* Navigation Items */}
      <div
        ref={itemsContainerRef}
        className="menu-items flex items-center overflow-hidden"
      >
        <div className="flex items-center gap-1 overflow-x-auto px-2 no-scrollbar">
          {NAV_ITEMS.map((item, index) => (
            <a
              key={item}
              ref={(el) => (itemsRef.current[index] = el)}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="menu-item whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium text-[#4A2C2C] transition-colors hover:bg-[#FFB7B7]/20"
            >
              {item}
            </a>
          ))}
        </div>
      </div>

      {/* Toggler */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="menu-toggler flex h-10 w-10 flex-shrink-0 flex-col items-center justify-center gap-1.5 rounded-full bg-[#FFB7B7] transition-transform active:scale-95"
        aria-label="Toggle Menu"
      >
        <span
          ref={(el) => (togglerSpansRef.current[0] = el)}
          className="h-0.5 w-5 rounded-full bg-[#4A2C2C]"
        />
        <span
          ref={(el) => (togglerSpansRef.current[1] = el)}
          className="h-0.5 w-5 rounded-full bg-[#4A2C2C]"
        />
      </button>
    </div>
  );
}

