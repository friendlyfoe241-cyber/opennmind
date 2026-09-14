"use client";

import { useState } from "react";
import Image from "next/image";

const TABS = [
  { label: "Discover", highlight: true },
  { label: "Research", highlight: false },
  { label: "Validate", highlight: false },
  { label: "Analyze", highlight: false },
  { label: "Audience", highlight: false },
  { label: "Pricing", highlight: false },
  { label: "Strategy", highlight: false },
  { label: "Roadmap", highlight: false },
];

export default function Discover() {
  const [active, setActive] = useState("Discover");

  return (
    <section id="discover" className="relative w-full bg-white">
      <div className="relative mx-auto h-[852px] max-w-[1440px]">
        <h2 className="absolute left-0 right-0 top-0 text-center font-shadowsIntoLightTwo text-[50px] leading-[1.14] tracking-[-0.02em] text-black">
          From one idea to a validated business.
        </h2>

        {/* tab pill row */}
        <div className="absolute left-1/2 top-[137px] flex -translate-x-1/2 items-center justify-center">
          <button
            aria-label="previous tab"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[rgba(68,25,6,0.04)] bg-white/30"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="rotate-180">
              <path
                d="M8.33 18.33L0 10L8.33 1.67l1.48 1.48-6.86 6.85 6.86 6.85-1.48 1.48Z"
                fill="#DADADA"
              />
            </svg>
          </button>

          <div className="mx-2 flex h-11 items-center gap-1 rounded-[70px] bg-[#F6F6F6] p-1">
            {TABS.map((tab) => (
              <button
                key={tab.label}
                onClick={() => setActive(tab.label)}
                className={`flex h-9 items-center justify-center gap-1 rounded-[70px] px-3 font-inter text-[15px] font-medium leading-[22px] ${
                  active === tab.label
                    ? "bg-white text-gradient-blue shadow-[0_0_1px_rgba(0,0,0,0.04)]"
                    : "text-[#807E7A]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <button
            aria-label="next tab"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[rgba(68,25,6,0.04)] bg-white/30"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M8.33 18.33L0 10L8.33 1.67l1.48 1.48-6.86 6.85 6.86 6.85-1.48 1.48Z" fill="#DADADA" />
            </svg>
          </button>
        </div>

        {/* content panel */}
        <div className="absolute left-1/2 top-[206px] w-[1204px] -translate-x-1/2 overflow-hidden rounded-[20px] bg-[rgba(68,25,6,0.04)] p-2">
          <div className="overflow-hidden rounded-xl">
            <Image
              src="/ImagePlaygroundForecastEnrollmentViewWithInfantsToddlersJuniorsAndPrejuniorsClassrooms.png"
              alt="Enrollment forecast view"
              width={1178}
              height={525}
              className="h-auto w-full"
            />
          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-px w-full bg-[#D9D9D9]" />
      </div>
    </section>
  );
}