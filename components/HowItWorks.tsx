import Image from "next/image";

const STEPS = [
  {
    number: "1",
    title: "Build business apps, fast",
    description: "Prompt to build the software you need.",
    active: true,
  },
  {
    number: "2",
    title: "Connect your data securely",
    description: "Build apps that work with your existing tools.",
    active: false,
  },
  {
    number: "3",
    title: "Deploy to your users",
    description: "Ship your app to internal or external users.",
    active: false,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative w-full bg-white">
      <div className="relative mx-auto h-[1141px] max-w-[1440px]">
        <h2 className="absolute left-0 right-0 top-[75px] text-center font-shadowsIntoLightTwo text-[50px] leading-[1.1] text-black">
          How it works?
        </h2>

        {/* steps */}
        <div className="absolute left-1/2 top-[196px] w-[1192px] -translate-x-1/2">
          <div className="grid grid-cols-3 gap-0">
            {STEPS.map((step, i) => (
              <div
                key={step.number}
                className="flex flex-col items-start gap-4 pr-6"
                style={{ paddingLeft: i === 0 ? 24 : 0 }}
              >
                <div
                  className={`h-0.5 w-full rounded-full ${
                    step.active ? "progress-line-active" : "bg-[#EBEBEB]"
                  }`}
                />
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-[26px] items-center justify-center rounded-full border border-black/10 bg-white px-2 font-inter text-sm font-medium leading-5 text-[#333]">
                    {step.number}
                  </span>
                  <h3 className="font-sFPro text-xl leading-6 text-[#333]">
                    {step.title}
                  </h3>
                </div>
                <p className="font-sFPro text-base leading-6 text-[#171717]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* WhatsApp screenshot */}
        <div className="absolute left-1/2 top-[268px] w-[1192px] -translate-x-1/2">
          <div className="overflow-hidden rounded-2xl border-2 border-[#EDEDED] bg-white">
            <Image
              src="/WhatsappImage20260602At121519Am1.png"
              alt="How OpennMind works"
              width={1182}
              height={697}
              className="w-full"
            />
          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-px w-full bg-[#D9D9D9]" />
      </div>
    </section>
  );
}