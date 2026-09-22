import Image from "next/image";
import Link from "next/link";
import footerImage from "../images/ChatgptImageAug16202612_24_21Amphotoroom1.png";

export default function Footer() {
  return (
    <footer
      id="get-started"
      className="relative w-full overflow-hidden bg-white"
    >
      <div className="relative mx-auto flex h-[1795px] max-w-[1440px] flex-col items-center px-6">
        {/* CTA heading at design y 7760 (section-relative 87) */}
        <h2 className="absolute left-1/2 top-[87px] w-[981px] -translate-x-1/2 text-center font-shadowsIntoLightTwo text-6xl leading-[1.1] text-black">
          Start building for free. Scale when you’re ready.
        </h2>

        <div className="absolute left-1/2 top-[300px] flex -translate-x-1/2 flex-wrap items-center justify-center gap-5">
          <Link
            href="#"
            className="inline-flex h-12 items-center justify-center rounded-xl bg-black px-8 font-sFPro text-lg font-medium leading-7 text-white"
          >
            Get Started
          </Link>
          <Link
            href="#"
            className="inline-flex h-12 items-center justify-center rounded-xl border border-black/25 px-8 font-sFPro text-lg font-medium leading-7 text-black"
          >
            Plan &amp; Pricing
          </Link>
        </div>

        <div className="absolute left-1/2 top-[400px] flex h-6 w-24 -translate-x-1/2 items-center justify-center gap-2">
          <div className="h-0.5 w-full bg-[#D9D9D9]" />
          <div className="h-4 w-4 shrink-0 rotate-45 border border-black/30" />
          <div className="h-0.5 w-full bg-[#D9D9D9]" />
        </div>

        {/* bottom area: giant wordmark over the ChatGPT image, per design
             (image at footer-rel 1139, wordmark text at footer-rel 911) */}
        <div className="relative h-full w-full overflow-hidden">
          <Image
            src={footerImage}
            alt=""
            width={1036}
            height={824}
            className="absolute left-1/2 h-[950px] w-[1336px] max-w-none -translate-x-1/2 object-cover"
            style={{ top: 1139 }}
          />
          <span className="absolute left-0 top-[911px] block w-full select-none text-center font-shadowsIntoLightTwo text-[305px] leading-[1.08] text-black">
            OpennMind
          </span>
        </div>
      </div>
    </footer>
  );
}