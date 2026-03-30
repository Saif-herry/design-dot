"use client";

import Image from "next/image";
import { useState } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import { STATS, SITE_CONFIG } from "@/constants";
import type { StatItem } from "@/types";

export default function AboutSection() {
  const officeOptions = [
    { value: "india", label: "INDIA" },
    { value: "japan", label: "JAPAN" },
    { value: "usa", label: "USA" },
    { value: "germany", label: "GERMANY" },
    { value: "uae", label: "UAE" },
  ] as const;

  const [selectedOffice, setSelectedOffice] = useState<
    (typeof officeOptions)[number]
  >(officeOptions[0]);

  return (
    <section
      id="about"
      className="py-16 sm:py-20 lg:py-16 bg-white"
      aria-labelledby="about-heading"
    >
      <div className="container-main  ">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* ── Left label ── */}
          <div className="fade-in lg:col-span-2">
            <div className="relative min-h-[170px] rounded-3xl bg-gray-100 px-8 py-12 sm:px-10 lg:px-10 lg:py-16">
              <div className="absolute bottom-4 left-4 right-8 rounded-3xl sm:bottom-6 sm:left-6 sm:right-10">
                <SectionLabel
                  accent={false}
                  className="text-br text-lg sm:text-xl lg:text-[1rem]"
                >
                  <span className="font-poppins font-bold text-[18px] leading-[1.6rem] sm:text-[19px] lg:text-[1.05rem]">
                    <span className="block">ABOUT</span>
                    <span className="mt-0 block">FIRM</span>
                  </span>
                </SectionLabel>
              </div>
            </div>
          </div>

          {/* ── Centre copy + stats ── */}
          <div
            className="font-poppins  lg:col-span-5 fade-in  "
            style={{ transitionDelay: "100ms" }}
          >
            <p className="font-thin text-gray-600 text-lg sm:text-xl mb-4">
              {SITE_CONFIG.name}
            </p>

            <p className="text-gray-600 text-[5px] sm:text-xs leading-relaxed mb-8">
              {SITE_CONFIG.aboutDescription}
            </p>

            {/* Stats grid */}
            <div className="border-t border-gray-100 pt-8">
              <div className="grid grid-cols-2 gap-x-10 gap-y-8">
                {STATS.slice(0, 2).map((stat) => (
                  <StatCard key={stat.value} stat={stat} />
                ))}
              </div>

              <div className="border-[1.2px] border-t border-blue-900 my-8" />

              <div className="grid grid-cols-2 gap-x-10 gap-y-8">
                {STATS.slice(2).map((stat) => (
                  <StatCard key={stat.value} stat={stat} />
                ))}
              </div>
            </div>
          </div>

          {/* ── Right: Industry image ── */}
          <div
            className="lg:col-span-5 fade-in"
            style={{ transitionDelay: "200ms" }}
          >
            {/* Location control (design-only; map removed) */}
            <div className="flex items-center justify-end mb-4">
              <div className="inline-flex items-center rounded-full bg-brand-orange shadow-sm overflow-hidden">
                <span className="px-5 py-[1px] text-[0.6rem] font-black tracking-[0.14em] uppercase text-black">
                  We Are Located
                </span>
                <div className="px-5 py-[1px]">
                  <select
                    className="text-[0.62rem] mb-2 font-black tracking-[0.10em] uppercase text-black bg-transparent border-none outline-none cursor-pointer pr-6"
                    value={selectedOffice.value}
                    onChange={(e) => {
                      const found = officeOptions.find(
                        (opt) => opt.value === e.target.value,
                      );
                      if (found) setSelectedOffice(found);
                    }}
                    aria-label="Select office location"
                    style={{
                      appearance: "none",
                      WebkitAppearance: "none",
                      backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='%23000000'/%3E%3C/svg%3E\")",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 0.1rem center",
                      backgroundSize: "10px 6px",
                    }}
                  >
                    {officeOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="w-full rounded-3xl overflow-hidden shadow-lg relative bg-gray-50 min-h-[320px] sm:min-h-[420px] lg:min-h-[420px]">
              <Image
                src="/dreamViewImg.jpg"
                alt={`Industry image — ${selectedOffice.label}`}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ stat }: { stat: StatItem }) {
  return (
    <div className="stat-item" style={{ animationDelay: stat.delay }}>
      <p className="font-display text-gray-700 text-[4px] sm:text-4xl leading-none">
        {stat.value}
      </p>
      <p className="text-gray-500 text-[4px] sm:text-xs mt-1 font-medium leading-snug whitespace-pre-line">
        {stat.label}
      </p>
    </div>
  );
}
