function MeetingCard() {
  return (
    <div className="w-[580px] shrink-0 rounded-[20px] border border-[#C5C5C5] bg-[#F3F3F3] pt-7">
      <div className="relative mx-6 rounded-[20px] border border-[#DDD] bg-white px-6 pb-6">
        <div className="flex items-center gap-4 pt-6">
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
            <path
              d="M15.9 21.6c-.6-.6-.9-1.35-.9-2.22 0-.88.3-1.62.9-2.22s1.35-.91 2.22-.91c.88 0 1.62.3 2.22.9.6.61.9 1.35.9 2.22 0 .88-.3 1.62-.9 2.22s-1.35.9-2.22.9c-.88 0-1.62-.3-2.22-.9ZM6.25 27.5c-.69 0-1.28-.24-1.77-.73-.49-.5-.73-1.1-.73-1.77V7.5c0-.69.24-1.28.73-1.77.5-.49 1.09-.73 1.77-.73h1.25v-2.5h2.5v2.5h10v-2.5h2.5v2.5h1.25c.69 0 1.28.24 1.77.73.49.5.73 1.09.73 1.77V25c0 .69-.24 1.28-.73 1.77-.5.49-1.09.73-1.77.73H6.25ZM6.25 25h17.5V12.5H6.25V25ZM6.25 10h17.5V7.5H6.25V10Z"
              fill="black"
            />
          </svg>
          <h4 className="font-sFPro text-2xl leading-[33px] tracking-[-0.0083em] text-black">
            Meeting Scheduled
          </h4>
          <svg viewBox="0 0 30 30" className="ml-auto h-[30px] w-[30px]" fill="none">
            <path d="m12 22.5-7.13-7.13 1.78-1.78L12 18.94l11.47-11.47 1.78 1.78L12 22.5Z" fill="#309000" />
          </svg>
        </div>

        <div className="mt-4 h-px w-full bg-[#D9D9D9]" />
        <div className="mt-6 flex items-center gap-4">
          <span className="flex h-[26px] w-[26px] items-center justify-center rounded-[50px] bg-[#D9D9D9]">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M5.35 6.31c-.46-.46-.69-1.01-.69-1.65 0-.64.23-1.19.69-1.65.46-.46 1.01-.69 1.65-.69s1.19.23 1.65.69c.45.46.69 1.01.69 1.65 0 .64-.24 1.19-.69 1.65s-1.01.68-1.65.68c-.64 0-1.19-.23-1.65-.68ZM2.33 11.67v-1.63c0-.33.09-.64.26-.91.17-.28.4-.49.68-.64.6-.3 1.21-.53 1.84-.68.62-.15 1.25-.22 1.89-.22s1.27.07 1.9.22c.62.15 1.23.38 1.83.68.28.15.51.36.68.64.17.27.26.58.26.91v1.63H2.33ZM3.5 10.5h7v-.47c0-.1-.03-.2-.08-.29a.54.54 0 0 0-.21-.2c-.53-.26-1.06-.46-1.59-.59a8.1 8.1 0 0 0-3.62 0c-.53.13-1.06.33-1.59.59a.54.54 0 0 0-.28.49v.47Z"
                fill="#4D4D4D"
              />
            </svg>
          </span>
          <p className="font-sFPro text-lg leading-[33px] tracking-[-0.0111em] text-[#4D4D4D]">
            Client catch-up meeting
          </p>
          {/* brand row */}
          <span className="ml-auto flex items-center gap-0.5 opacity-90">
            <svg width="5" height="7" viewBox="0 0 5 7" fill="none"><path d="M0 3.22 1.66 5.12 3.89 6.55l.38-3.31L3.89 0 1.61 1.25 0 3.22Z" fill="#00832D" /></svg>
            <svg width="5" height="5" viewBox="0 0 5 5" fill="none"><path d="M0 .58v2.82c0 .65.52 1.17 1.17 1.17h2.81l.59-2.13L3.98.58 2.05 0 0 .58Z" fill="#0066DA" /></svg>
            <svg width="5" height="5" viewBox="0 0 5 5" fill="none"><path d="M3.98 0 0 3.99l2.05.58 1.93-.58.57-1.83L3.98 0Z" fill="#E94235" /></svg>
            <svg width="4" height="7" viewBox="0 0 4 7" fill="none"><path d="M3.98 0H0v6.03h3.98V0Z" fill="#2684FC" /></svg>
          </span>
        </div>
        <p className="mt-1 w-full font-sFPro text-lg leading-[21px] tracking-[-0.0111em] text-[#666]">
          Info : Project status update, timeline update, discussions over new
          features.
        </p>
        <div className="mt-4 h-px w-full bg-[#D9D9D9]" />
        <div className="mt-2 flex items-center gap-4">
          <span className="inline-flex h-10 items-center justify-center rounded-[14px] bg-black px-5 font-sFPro text-[17px] leading-[1.14em] tracking-[-0.02em] text-white">
            Join the meeting
          </span>
          <span className="font-sFPro text-[17px] leading-[1.14em] tracking-[-0.02em] text-black">
            Reschedule
          </span>
          <span className="ml-auto flex h-10 w-10 items-center justify-center rounded-[50px] border border-[#8F1C17] bg-white">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="m6.4 19-1.4-1.4 5.6-5.6L5 6.4 6.4 5l5.6 5.6L17.6 5 19 6.4 13.4 12l5.6 5.6-1.4 1.4-5.6-5.6L6.4 19Z" fill="#962A26" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Growth() {
  return (
    <section id="growth" className="relative w-full overflow-hidden bg-white">
      <div className="relative mx-auto h-[876px] max-w-[1440px]">
        <h2 className="absolute left-1/2 top-[74px] w-[761px] -translate-x-1/2 text-center font-sFPro text-[50px] font-medium leading-[1.07] tracking-[-0.03em] text-[#1D1E20]">
          Built to help you grow, not just generate.
        </h2>

        <p className="absolute left-1/2 top-[159px] w-[639px] -translate-x-1/2 text-center font-sFPro text-2xl leading-[33px] tracking-[-0.0083em] text-[#31373D]">
          Most AI tools stop after giving suggestions. OpennMind keeps working,
          helping you move from ideas to real results.
        </p>

        <div className="absolute -left-[180px] top-[354px]">
          <MeetingCard />
        </div>
        <div className="absolute left-[430px] top-[354px]">
          <MeetingCard />
        </div>
        <div className="absolute left-[1039px] top-[354px]">
          <MeetingCard />
        </div>

        <div className="absolute left-1/2 top-[689px] flex w-[924px] -translate-x-1/2 items-center justify-center gap-4">
          <svg width="31" height="32" viewBox="0 0 31 32" fill="none">
            <path
              d="M29.56 14.53 16.27 27.82a5.84 5.84 0 0 1-8.28 0 5.84 5.84 0 0 1 0-8.28L16.38 3.15A4.63 4.63 0 0 1 24.57 11.3L12.16 23.72a2.14 2.14 0 0 1-3.05 0 2.14 2.14 0 0 1 0-3.05L20.34 7.37"
              stroke="#8D8D8D"
              strokeWidth="2.89"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="font-sFPro text-[32px] leading-[1.14em] tracking-[-0.02em] text-black">
            Schedule a call with my client for tomorrow
          </p>
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-black">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 8l4 4-4 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
          </span>
        </div>
      </div>
      <div className="h-px w-full bg-[#D9D9D9]" />
    </section>
  );
}