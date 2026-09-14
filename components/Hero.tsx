import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative">
      <div className="relative h-[890px] w-full overflow-hidden">
        <Image
          src="/image.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center px-6 pt-[186px] text-center">
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
      </div>
    </section>
  );
}