import Image from "next/image";
import frameBanner from "../images/Frame-banner.svg";
import playgroundImage from "../images/ImagePlaygroundForecastEnrollmentViewWithInfantsToddlersJuniorsAndPrejuniorsClassrooms.png";

export default function LaunchSection() {
  return (
    <section className="relative w-full bg-white">
      <div className="relative mx-auto h-[1260px] max-w-[1440px]">
        <h2 className="absolute left-0 right-0 top-[65px] text-center">
          <span className="font-sFPro text-[50px] font-normal leading-[1.07] tracking-[-0.03em] text-[#1D1E20]">
            You can launch in hours, <br/>
          </span>
          <span className="pl-[5px] ml-2 font-shadowsIntoLightTwo text-[66px] leading-[1.1] text-[#1D1E20]">
            Growth
          </span>
          <span className=" pl-[8px] font-sFPro text-[50px] font-normal leading-[1.07] tracking-[-0.03em] text-[#1D1E20]">
            still takes weeks.
          </span>
        </h2>

        {/* Frame banner sits directly above the dashboard image */}
        <Image
          src={frameBanner}
          alt=""
          width={1178}
          height={125}
          className="absolute left-1/2 top-[250px] h-[125px] w-[1178px] -translate-x-1/2"
        />
        <Image
          src={playgroundImage}
          alt=""
          width={1178}
          height={525}
          className="absolute left-1/2 top-[405px] h-auto w-[1178px] -translate-x-1/2"
        />
      </div>
    </section>
  );
}