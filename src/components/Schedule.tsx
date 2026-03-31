import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

interface ClassSession {
  id: string;
  day: string;
  time: string;
  duration: string;
  instructor: string;
  className: string;
  studio: string;
}

const MOCK_SESSIONS: ClassSession[] = [
  {
    id: "1",
    day: "MONDAY",
    time: "06:00 AM – 06:50 AM",
    duration: "50 Minutes",
    instructor: "Rockelle",
    className: "Mat Pilates",
    studio: "Studio B",
  },
  {
    id: "2",
    day: "MONDAY",
    time: "08:00 AM – 08:45 AM",
    duration: "45 Minutes",
    instructor: "Rockelle",
    className: "Evening Relaxation Pilates",
    studio: "Studio A",
  },
  {
    id: "3",
    day: "TUESDAY",
    time: "05:30 AM – 06:15 AM",
    duration: "45 Minutes",
    instructor: "Rockelle",
    className: "Prenatal Pilates",
    studio: "Studio A",
  },
  {
    id: "4",
    day: "TUESDAY",
    time: "07:30 AM – 08:30 AM",
    duration: "60 Minutes",
    instructor: "Rockelle",
    className: "Reformer Pilates",
    studio: "Studio C",
  },
  {
    id: "5",
    day: "WEDNESDAY",
    time: "07:00 AM – 07:50 AM",
    duration: "50 Minutes",
    instructor: "Rockelle",
    className: "Gentle Flow Pilates",
    studio: "Studio C",
  },
  {
    id: "6",
    day: "WEDNESDAY",
    time: "09:00 AM – 09:45 AM",
    duration: "45 Minutes",
    instructor: "Rockelle",
    className: "Power Pilates",
    studio: "Studio A",
  },
  {
    id: "7",
    day: "THURSDAY",
    time: "06:00 AM – 07:00 AM",
    duration: "60 Minutes",
    instructor: "Rockelle",
    className: "Advanced Reformer",
    studio: "Studio B",
  },
  {
    id: "8",
    day: "FRIDAY",
    time: "08:00 AM – 08:50 AM",
    duration: "50 Minutes",
    instructor: "Rockelle",
    className: "Core Strength",
    studio: "Studio A",
  },
];

const DAYS = ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"];

export default function Schedule() {
  const [activeDay, setActiveDay] = useState("MONDAY");

  const filteredSessions = useMemo(() => {
    return MOCK_SESSIONS.filter((s) => s.day === activeDay);
  }, [activeDay]);

  const groupedSessions = useMemo(() => {
    const groups: Record<string, ClassSession[]> = {};
    filteredSessions.forEach((session) => {
      if (!groups[session.day]) groups[session.day] = [];
      groups[session.day].push(session);
    });
    return groups;
  }, [filteredSessions]);

  const sortedDays = useMemo(() => {
    const dayOrder = DAYS.slice(1);
    return Object.keys(groupedSessions).sort((a, b) => dayOrder.indexOf(a) - dayOrder.indexOf(b));
  }, [groupedSessions]);

  return (
    <section id="schedule" className="w-full bg-[#FFF9F9] px-6 py-12 md:px-10 md:py-16">
      <div className="mx-auto max-w-[90rem] rounded-[2rem] bg-[#F3EFE7] p-8 md:p-12">
        {/* Header */}
        <div className="mb-8 flex flex-col items-center text-center">
          <span className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-[#4A2C2C]/60">
            — SCHEDULE —
          </span>
          <h2 className="font-serif text-3xl font-medium tracking-tight text-[#4A2C2C] md:text-5xl">
            Find Your Perfect Schedule
          </h2>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-wrap justify-center gap-2 md:gap-3">
          {DAYS.map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`rounded-full px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest transition-all ${
                activeDay === day
                  ? "bg-[#4A2C2C] text-white"
                  : "text-[#4A2C2C]/60 hover:text-[#4A2C2C]"
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Schedule List */}
        <div className="space-y-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDay}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {sortedDays.length > 0 ? (
                sortedDays.map((day) => (
                  <div key={day} className="mb-8 last:mb-0">
                    {/* Day Header */}
                    <div className="mb-4 flex w-full items-center justify-center rounded-lg bg-white/50 py-2">
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#4A2C2C]">
                        {day}
                      </span>
                    </div>

                    {/* Sessions */}
                    <div className="divide-y divide-[#4A2C2C]/10">
                      {groupedSessions[day].map((session, index) => (
                        <div
                          key={session.id}
                          className="group grid grid-cols-1 items-center gap-3 py-6 transition-colors hover:bg-white/20 md:grid-cols-[40px_1.5fr_1fr_1fr_1.5fr_1fr_40px] md:gap-6 md:px-4"
                        >
                          {/* Number */}
                          <span className="font-mono text-[10px] text-[#4A2C2C]/40">
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          {/* Time */}
                          <div className="font-display text-base font-medium text-[#4A2C2C] md:text-lg">
                            {session.time}
                          </div>

                          {/* Duration */}
                          <div className="text-xs text-[#4A2C2C]/60">{session.duration}</div>

                          {/* Instructor */}
                          <div className="text-xs text-[#4A2C2C]/60">{session.instructor}</div>

                          {/* Class Name */}
                          <div className="font-display text-base font-medium text-[#4A2C2C]">
                            {session.className}
                          </div>

                          {/* Studio */}
                          <div className="text-xs text-[#4A2C2C]/60">{session.studio}</div>

                          {/* Action */}
                          <a href="#contact" className="flex h-8 w-8 items-center justify-center rounded-full bg-[#4A2C2C] text-white transition-transform group-hover:scale-110">
                            <ArrowUpRight className="h-4 w-4" />
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                ))
              ) : (
                <div className="py-12 text-center text-[10px] text-[#4A2C2C]/40">
                  No classes scheduled for this day yet.
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer Navigation */}
        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-[#4A2C2C]/10 pt-8 md:flex-row">
          <div className="relative h-[1px] w-full max-w-xs bg-[#4A2C2C]/10">
            <motion.div
              className="absolute left-0 top-0 h-full bg-[#4A2C2C]"
              initial={{ width: "0%" }}
              animate={{ width: activeDay === "ALL" ? "100%" : "30%" }}
              transition={{ duration: 0.6, ease: "circOut" }}
            />
          </div>
          <div className="flex gap-3">
            <button className="flex h-10 w-10 items-center justify-center rounded-full border border-[#4A2C2C]/20 text-[#4A2C2C] transition-colors hover:bg-[#4A2C2C] hover:text-white">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#4A2C2C] text-white transition-colors hover:bg-black">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
