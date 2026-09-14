"use client";

import { useState } from "react";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Integrations", href: "#integrations" },
  { label: "About", href: "#about" },
  { label: "Resources", href: "#resources" },
  { label: "Plans", href: "#plans" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="pointer-events-none absolute left-0 right-0 top-0 z-50 flex justify-center px-6 pt-2">
      <nav className="pointer-events-auto flex w-full max-w-[1239px] items-center justify-between rounded-full bg-white py-2.5 pl-8 pr-3">
        <a
          href="#"
          className="font-sFPro text-[23px] font-semibold leading-none text-black"
        >
          OpennMind
        </a>

        <ul className="hidden items-center gap-9 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-sFPro text-[17px] leading-none text-black/80 transition-colors hover:text-black"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="#get-started"
            className="inline-flex h-10 items-center justify-center rounded-full bg-black px-7 font-sFPro text-[15px] font-medium leading-none text-white transition-opacity hover:opacity-85"
          >
            Get Started Now
          </a>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-full text-black lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            {open ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 6h16M4 12h16M4 18h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="mt-2 w-full rounded-3xl bg-white p-6 shadow-2xl lg:hidden">
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-sFPro text-base text-black/80 transition-colors hover:text-black"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#get-started"
                onClick={() => setOpen(false)}
                className="inline-flex rounded-full bg-black px-6 py-2.5 font-sFPro text-[15px] font-medium text-white"
              >
                Get Started Now
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}