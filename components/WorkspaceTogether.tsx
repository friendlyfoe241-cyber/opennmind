import Image from "next/image";

const APPS = [
  {
    label: "Database",
    tiles: ["Fill", "Fill", "Fill"],
    chip: "Display & update",
  },
  {
    label: "Payment",
    tiles: ["Fill", "Fill", "Fill"],
    chip: "Collect payments",
  },
  {
    label: "CRM",
    tiles: ["Fill", "Fill", "Fill"],
    chip: "Extend your CRM",
  },
  {
    label: "Messaging",
    tiles: ["Fill", "Fill", "Fill"],
    chip: "Send notifications",
  },
  {
    label: "File Storage",
    tiles: ["Fill", "Fill", "Fill"],
    chip: "Upload files",
  },
  {
    label: "Scheduling",
    tiles: ["Fill", "Fill", "Fill"],
    chip: "Book meetings",
  },
];

function AppTile({
  size,
  label,
  chip,
}: {
  size: "sm" | "lg";
  label: string;
  chip: string;
}) {
  return (
    <div className="flex w-[180px] flex-col items-center gap-3">
      <span className="font-inter text-xs leading-4 text-white opacity-70">
        {label}
      </span>
      <div className="flex items-center gap-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-[0_16px_16px_-8px_rgba(0,0,0,0.04),0_8px_8px_-4px_rgba(0,0,0,0.02),0_3.75px_3.75px_-2px_rgba(0,0,0,0.04),0_1.875px_1.875px_-1px_rgba(0,0,0,0.08),0_1px_1px_-1px_rgba(0,0,0,0.08),0_0_1px_rgba(0,0,0,0.08)] opacity-80" />
        <div className="flex h-14 w-14 items-center justify-center rounded-[10px] bg-white shadow-[0_16px_16px_-8px_rgba(0,0,0,0.04),0_8px_8px_-4px_rgba(0,0,0,0.02),0_3.75px_3.75px_-2px_rgba(0,0,0,0.04),0_1.875px_1.875px_-1px_rgba(0,0,0,0.08),0_1px_1px_-1px_rgba(0,0,0,0.08),0_0_1px_rgba(0,0,0,0.08)]">
          <AppGlyph kind={size} />
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-[0_16px_16px_-8px_rgba(0,0,0,0.04),0_8px_8px_-4px_rgba(0,0,0,0.02),0_3.75px_3.75px_-2px_rgba(0,0,0,0.04),0_1.875px_1.875px_-1px_rgba(0,0,0,0.08),0_1px_1px_-1px_rgba(0,0,0,0.08),0_0_1px_rgba(0,0,0,0.08)] opacity-80" />
      </div>
      <span className="inline-flex h-[30px] items-center gap-1.5 rounded-[10px] border border-black/10 bg-white px-2 shadow-[0_4px_4px_-12px_rgba(0,0,0,0.02),0_12px_12px_-6px_rgba(0,0,0,0.02),0_6px_6px_-3px_rgba(0,0,0,0.02),0_3px_3px_-1.5px_rgba(0,0,0,0.02),0_1px_1px_-0.5px_rgba(0,0,0,0.04),0_0_1px_rgba(0,0,0,0.06)] font-inter text-sm font-medium leading-5 text-[#333]">
        {chip}
      </span>
    </div>
  );
}

function AppGlyph({ kind }: { kind: "sm" | "lg" }) {
  const size = kind === "lg" ? 24 : 22;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className="opacity-70"
    >
      <circle cx="12" cy="12" r="9" fill="#D9D9D9" />
    </svg>
  );
}

export default function WorkspaceTogether() {
  return (
    <section id="integrations" className="relative w-full bg-white">
      <div className="relative mx-auto h-[960px] max-w-[1440px]">
        <h2 className="absolute left-0 right-0 top-[125px] text-center font-shadowsIntoLightTwo text-[50px] leading-[1.02] tracking-[-0.02em] text-black">
          Bring your entire workspace together.
        </h2>

        {/* main card */}
        <div className="absolute left-1/2 top-[191px] h-[622px] w-[1192px] -translate-x-1/2 overflow-hidden rounded-2xl border border-[#BFBFBF] bg-white">
          {/* connection hub diagram */}
          <div className="relative h-[230px] w-full bg-white">
            <div className="absolute left-1/2 top-1/2 h-[88px] w-[88px] -translate-x-1/2 -translate-y-[46px] rounded-full bg-white shadow-[0_14.7px_14.7px_-7.3px_rgba(0,0,0,0.04),0_7.3px_7.3px_-3.7px_rgba(0,0,0,0.02),0_3.7px_3.7px_-1.8px_rgba(0,0,0,0.04),0_1.8px_1.8px_-0.9px_rgba(0,0,0,0.08)]" />
            <div className="absolute left-1/2 top-1/2 h-[112px] w-px -translate-x-1/2 -translate-y-[46px] bg-linear-to-b from-black/20 to-black/5" />
            <svg viewBox="0 0 400 130" className="absolute left-1/2 top-[36px] h-[130px] w-[400px] -translate-x-1/2">
              <path
                d="M200 62 C 110 62, 50 24, 0 24"
                stroke="url(#wsgradA)"
                strokeWidth="1.75"
                fill="none"
              />
              <path
                d="M200 62 C 290 62, 350 24, 400 24"
                stroke="url(#wsgradB)"
                strokeWidth="1.75"
                fill="none"
              />
              <defs>
                <linearGradient id="wsgradA" x1="0" y1="0" x2="200" y2="0">
                  <stop stopColor="#CECECE" stopOpacity="0.6" />
                  <stop offset="1" stopColor="#808080" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="wsgradB" x1="400" y1="0" x2="200" y2="0">
                  <stop stopColor="#CECECE" stopOpacity="0.6" />
                  <stop offset="1" stopColor="#808080" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* apps icon row (overlaps hub) */}
          <div className="relative mt-2 flex flex-wrap items-start justify-center gap-x-10 gap-y-6 bg-white px-6">
            {APPS.map((app) => (
              <AppTile key={app.label} {...app} size="lg" />
            ))}
          </div>
        </div>

        {/* bottom dashboard image */}
        <div className="absolute left-1/2 top-[551px] w-[1104px] -translate-x-1/2">
          <Image
            src="/Rectangle4.png"
            alt="Two-column workspace layout in OpennMind"
            width={1104}
            height={262}
            className="rounded-[20px] border border-[#BFBFBF]"
          />
        </div>

        <div className="absolute bottom-0 left-0 h-px w-full bg-[#D9D9D9]" />
      </div>
    </section>
  );
}