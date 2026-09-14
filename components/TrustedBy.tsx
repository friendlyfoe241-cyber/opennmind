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

        {/* logo banner marquee */}
        <div className="absolute left-0 right-0 top-[102px] h-[45px] overflow-hidden">
          <div className="flex h-full w-max animate-[marquee-right_30s_linear_infinite]">
            {[0, 1].map((i) => (
              <div key={i} className="ml-5 flex h-full shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element -- plain <img> keeps the marquee as an unoptimized CSS translation */}
                <img
                  src="/banner.png"
                  alt="Logos of teams using OpennMind"
                  className="h-full w-auto"
                  draggable={false}
                />
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