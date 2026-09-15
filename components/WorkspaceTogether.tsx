import Image from "next/image";
import group136Image from "../images/Group 136.svg";
import containerImage from "../images/Container.svg";

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
          <div className="relative h-[210px] w-full bg-white">

            <Image
              src={group136Image}
              alt=""
              width={1096}
              height={158}
              priority
              className="absolute left-10 top-23"
            />
          </div>

          {/* integration banner (overlaps hub) */}
          <div className="relative mt-2 h-[145px] overflow-hidden bg-white">
            <div className="container-banner-track absolute left-0 top-0 flex w-max">
              <Image
                src={containerImage}
                alt=""
                width={1472}
                height={145}
                priority
                className="max-w-none"
              />
              <Image
                src={containerImage}
                alt=""
                width={1472}
                height={145}
                aria-hidden
                className="max-w-none"
              />
            </div>
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