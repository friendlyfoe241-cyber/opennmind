import Image from "next/image";
import wioraImage from "../images/Rectangle6.png";

const FEATURES = [
  "Daily Tasks",
  "Daily Guidance",
  "Customer Insights",
  "Smart Research",
  "Market Analysis",
];

function FeatureChip({ label, chipIndex }: { label: string; chipIndex: number }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-lg bg-white/10 px-1.5 py-1">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="opacity-70">
        <path
          d="M10 6.33 7 10l-1.33-1.33M14 8A6 6 0 1 1 2 8a6 6 0 0 1 12 0Z"
          stroke="rgba(255,255,255,0.6)"
          strokeWidth="1.33"
          strokeLinecap="square"
        />
      </svg>
      <span className="font-sFPro text-xs leading-4 text-white/60">{label}</span>
    </span>
  );
}

export default function Wiora() {
  return (
    <section id="about" className="relative -mt-10 w-full overflow-hidden bg-[#121216]">
      <div className="mx-auto flex h-[907px] w-full max-w-[1200px] items-center px-6">
        <div className="relative z-10 flex max-w-[440px] flex-col items-start">
          <h2 className="font-sFPro text-[80px] font-semibold leading-[70px] text-white">
            Meet Wiora,
            <br />
            your AI building
            <br />
            companion
          </h2>

          <div className="mt-6 flex items-center gap-3">
            {/* brand marks (decorative wordmarks) */}
            <span className="font-sFPro text-lg font-semibold text-white/90">
              OpenAI
            </span>
            <span className="font-sFPro text-lg font-semibold text-white/90">
              Claude
            </span>
            <span className="font-sFPro text-lg font-semibold text-white/90">
              Gemini
            </span>
            <span className="font-sFPro text-lg font-semibold text-white/90">
              Alpha
            </span>
          </div>

          <p className="mt-6 max-w-[420px] font-sFPro text-lg leading-7 text-white opacity-80">
            Wiora helps you turn ideas into action. Research your market, plan
            your next move, and keep your work moving every day.
          </p>

          <div className="mt-5 flex w-[387px] max-w-full flex-wrap gap-2">
            {FEATURES.map((f, i) => (
              <FeatureChip key={f} label={f} chipIndex={i} />
            ))}
          </div>

          <button className="mt-8 inline-flex h-11 w-[125px] cursor-pointer items-center justify-center gap-2 rounded-[14px] border border-[rgba(25,25,26,0.13)] bg-white px-5 font-sFPro text-base leading-6 tracking-[-0.01em] text-[#19191A] transition-opacity hover:opacity-90">
            Try it out
          </button>
        </div>

        <div className="relative order-last ml-auto hidden lg:block">
          <Image
            src={wioraImage}
            alt="Wiora assistant chat"
            width={628}
            height={651}
            className="rounded-3xl"
          />
          {/* floating chat bubble */}
          <div className="absolute left-[60px] top-[292px] flex h-15 w-[507px] items-center gap-3 rounded-[50px] bg-white px-6 py-4 shadow-[0_2px_4px_0_rgba(0,0,0,0.25)]">
            <span className="h-6 w-[24px] shrink-0 rounded-full bg-[#25D366]" />
            <span className="font-sFProRounded text-sm leading-5 text-[#6A7074]">
              Read the document and assign the tasks to members accordingly
            </span>
            <span className="ml-auto h-[30px] w-[30px] shrink-0 rounded-[50px] bg-black" />
          </div>
        </div>
      </div>
    </section>
  );
}