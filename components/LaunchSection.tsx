import Image from "next/image";
import frameBanner from "../images/Frame-banner.svg";
import playgroundImage from "../images/ImagePlaygroundForecastEnrollmentViewWithInfantsToddlersJuniorsAndPrejuniorsClassrooms.png";

export default function LaunchSection() {
  return (
    <section className="relative w-full bg-white">
      <div className="relative mx-auto h-[1100px] max-w-[1440px]">
        <h2 className="absolute left-0 right-0 top-[150px] text-center font-shadowsIntoLightTwo text-[50px] leading-[1.14] tracking-[-0.02em] text-black">
          You can launch in hours,
          <br />
          Growth still takes weeks.
        </h2>

        {/* Frame banner sits directly above the dashboard image */}
        <Image
          src={frameBanner}
          alt=""
          width={1178}
          height={125}
          className="absolute left-1/2 top-[290px] h-[125px] w-[1178px] -translate-x-1/2"
        />
        <Image
          src={playgroundImage}
          alt=""
          width={1178}
          height={525}
          className="absolute left-1/2 top-[445px] h-auto w-[1178px] -translate-x-1/2"
        />
      </div>
    </section>
  );
}