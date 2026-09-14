const LOGOS = [
  "Vercel",
  "Linear",
  "Framer",
  "Notion",
  "Loom",
  "Figma",
  "Ramp",
];

export default function TrustedBy() {
  return (
    <section
      id="trusted-by"
      className="relative w-full overflow-hidden bg-white"
    >
      <div className="relative mx-auto h-[201px] max-w-[1440px]">
        {/* header */}
        <p className="absolute left-0 right-0 top-[42px] text-center font-sFPro text-3xl font-medium leading-9 tracking-[-0.025em] text-[#4A4A4A]">
          Trusted by teams at
        </p>

        {/* logo strip */}
        <div className="absolute left-0 right-0 top-[94px] overflow-hidden">
          <div className="flex items-center justify-between gap-10 px-10 opacity-80">
            {LOGOS.map((logo) => (
              <div
                key={logo}
                className="whitespace-nowrap font-sFPro text-2xl font-semibold tracking-tight text-black/70"
              >
                {logo}
              </div>
            ))}
          </div>

          {/* edge fades */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-40 bg-linear-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-40 bg-linear-to-l from-white to-transparent" />
        </div>

        <div className="absolute bottom-0 left-0 h-px w-full bg-[#D9D9D9]" />
      </div>
    </section>
  );
}