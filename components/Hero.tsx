import Image from "next/image";
import heroImage from "../images/image in hero.png";

export default function Hero() {
  return (
    <section id="home" className="relative">
      <div className="relative flex min-h-[1030px] w-full flex-col overflow-hidden">
        <Image
          src="/image.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="relative flex flex-col items-center px-6 pt-[186px] text-center">
          <p className="font-sFPro text-[15px] leading-none text-white">
            Backed by
          </p>
          <h1 className="mt-7 max-w-[820px] font-sFPro text-[62px] font-medium leading-[1.07] tracking-[-0.03em] text-white">
            From idea to impact,
            <br />
            all in one workspace.
          </h1>
          <p className="mt-9 max-w-[560px] font-sFPro text-lg leading-[1.4] text-white/80">
            Stop juggling dozens of tools. Start building with one. Research,
            collaborate, and grow with AI by your side.
          </p>
          <div className="mt-11 flex items-center gap-4">
            <a
              href="#get-started"
              className="inline-flex h-[52px] items-center justify-center rounded-full bg-white px-9 font-sFPro text-lg font-medium leading-none text-black transition-opacity hover:opacity-85"
            >
              Get Started
            </a>
            <a
              href="#book-demo"
              className="inline-flex h-[52px] items-center justify-center rounded-full px-9 font-sFPro text-lg font-medium leading-none text-white transition-colors hover:bg-white/10"
            >
              Book a Demo
            </a>
          </div>
        </div>

        {/* Hero dashboard image framed in a 30px glass squircle,
            bottom-aligned with the hero background image's ending. */}
        <div className="relative z-10 mb-0 mt-auto flex justify-center px-6 pt-[81px]">
          <div
            className="relative w-full max-w-[1240px] overflow-hidden rounded-[60px] border border-white/20 bg-white/[0.16] shadow-[0_60px_120px_-40px_rgba(0,10,40,0.7)] backdrop-blur-[18px] backdrop-brightness-[1.5]"
            style={{ aspectRatio: "1240 / 405" }}
          >
            {/* content image inset by the 30px glass frame */}
            <div className="absolute inset-[30px] overflow-hidden rounded-[30px]">
              <Image
                src={heroImage}
                alt="OpennMind workspace"
                fill
                priority
                sizes="(min-width: 1280px) 1180px, calc(100vw - 108px)"
                className="object-cover"
              />
            </div>

            {/* glass highlights: outer hairline + soft inner top edge */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-[60px] ring-1 ring-inset ring-white/30"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute left-[30px] right-[30px] top-[30px] h-px bg-white/60"
            />
          </div>
        </div>
      </div>
    </section>
  );
}