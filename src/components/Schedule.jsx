import React from "react";

export default function ScheduleIntro() {
  return (
    <div className="w-full min-h-[40vh] flex items-center relative overflow-hidden bg-white">

      {/* Background soft blue fade */}
      <div className="absolute inset-0 bg-linear-to-b from-[#F1F4FF] via-white/80 to-[#F1F4FF]"></div>

      <div className="relative z-10 max-w-5xl px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-14">

        <h1
          className="
            text-[26px] sm:text-[32px] md:text-[36px] lg:text-[40px]
            leading-[1.25] font-semibold text-[#0057ff] max-w-3xl
            ms-4 sm:ms-8 md:ms-20 lg:ms-28
          "
        >
          Our three day schedule is jam-packed<br />
          with brilliant, creative, evil geniuses.
        </h1>

        <p
          className="
            text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px]
            text-gray-600 mt-4 max-w-2xl leading-relaxed
            ms-4 sm:ms-8 md:ms-20 lg:ms-28
          "
        >
          The worst people in our industry giving the best talks you’ve ever seen.
          Nothing will be recorded and every attendee has to sign an NDA to watch
          the talks.
        </p>

      </div>
    </div>
  );
}
