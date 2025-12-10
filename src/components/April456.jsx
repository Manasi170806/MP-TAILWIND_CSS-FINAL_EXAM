import React from "react";
import background from "../assets/background.jpg";

export default function ScheduleSection() {
  return (
    <section className="relative w-full bg-[#f1f4ff] pt-10 sm:pt-14 md:pt-16 pb-32 overflow-hidden">

      {/* RIGHT SIDE BACKGROUND IMAGE */}
      <div className="absolute inset-y-0 right-0 w-[45%] pointer-events-none">
        <img
          src={background}
          className="h-full w-full object-cover opacity-80 ms-70 scale-x-[1.1] mt-10 p-0 m-0"
        />
      </div>

      {/* LEFT WHITE BLUR PANEL */}
      <div className="absolute inset-y-0 left-0 w-[55%] bg-white/10 backdrop-blur-3xl"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* DAY 1 */}
          <div>
            <h2 className="text-[26px] font-semibold text-[#24408f]">April 4</h2>
            <p className="mt-2 text-gray-600 text-[15px] leading-relaxed">
              The first day of the conference is focused on dark
              patterns for ecommerce.
            </p>

            <div className="
              mt-6
              bg-white/60
              backdrop-blur-xl
              shadow-[0_4px_20px_rgba(0,0,0,0.05)]
              border border-white/30
              rounded-2xl
              p-10
              space-y-10
              text-center
            ">
              {/* 1 */}
              <div>
                <h3 className="text-[18px] font-semibold text-[#24408f]">Steven McHail</h3>
                <p className="text-gray-500 text-sm mt-1">Not so one-time payments</p>
                <p className="text-gray-400 text-[12px] mt-3 tracking-wide">9:00AM – 10:00AM PST</p>
              </div>

              <div className="border-t border-gray-200" />

              {/* 2 */}
              <div>
                <h3 className="text-[18px] font-semibold text-[#24408f]">Jaquelin Isch</h3>
                <p className="text-gray-500 text-sm mt-1">The finer print</p>
                <p className="text-gray-400 text-[12px] mt-3 tracking-wide">10:00AM – 11:00AM PST</p>
              </div>

              <div className="border-t border-gray-200" />

              {/* 3 */}
              <div>
                <h3 className="text-[18px] font-semibold text-[#24408f]">Dianne Guilianelli</h3>
                <p className="text-gray-500 text-sm mt-1">Post-purchase blackmail</p>
                <p className="text-gray-400 text-[12px] mt-3 tracking-wide">11:00AM – 12:00PM PST</p>
              </div>

              <div className="border-t border-gray-200" />

              {/* Lunch */}
              <div>
                <h3 className="text-[18px] font-semibold text-[#24408f]">Lunch</h3>
                <p className="text-gray-400 text-[12px] mt-3 tracking-wide">12:00PM – 1:00PM PST</p>
              </div>
            </div>
          </div>

          {/* DAY 2 */}
          <div>
            <h2 className="text-[26px] font-semibold text-[#24408f]">April 5</h2>
            <p className="mt-2 text-gray-600 text-[15px] leading-relaxed">
              Next we spend the day talking about deceiving
              people with technology.
            </p>

            <div className="
              mt-6
              bg-white/60
              backdrop-blur-xl
              shadow-[0_4px_20px_rgba(0,0,0,0.05)]
              border border-white/30
              rounded-2xl
              p-10
              space-y-10
              text-center
            ">
              {/* 1 */}
              <div>
                <h3 className="text-[18px] font-semibold text-[#24408f]">Damaris Kimura</h3>
                <p className="text-gray-500 text-sm mt-1">The invisible card reader</p>
                <p className="text-gray-400 text-[12px] mt-3 tracking-wide">9:00AM – 10:00AM PST</p>
              </div>

              <div className="border-t border-gray-200" />

              {/* 2 */}
              <div>
                <h3 className="text-[18px] font-semibold text-[#24408f]">Ibrahim Frasch</h3>
                <p className="text-gray-500 text-sm mt-1">Stealing fingerprints</p>
                <p className="text-gray-400 text-[12px] mt-3 tracking-wide">10:00AM – 11:00AM PST</p>
              </div>

              <div className="border-t border-gray-200" />

              {/* 3 */}
              <div>
                <h3 className="text-[18px] font-semibold text-[#24408f]">Cathlene Burrage</h3>
                <p className="text-gray-500 text-sm mt-1">Voting machines</p>
                <p className="text-gray-400 text-[12px] mt-3 tracking-wide">11:00AM – 12:00PM PST</p>
              </div>

              <div className="border-t border-gray-200" />

              {/* Lunch */}
              <div>
                <h3 className="text-[18px] font-semibold text-[#24408f]">Lunch</h3>
                <p className="text-gray-400 text-[12px] mt-3 tracking-wide">12:00PM – 1:00PM PST</p>
              </div>
            </div>
          </div>

          {/* DAY 3 */}
          <div>
            <h2 className="text-[26px] font-semibold text-[#24408f]">April 6</h2>
            <p className="mt-2 text-gray-600 text-[15px] leading-relaxed">
              We close out the event previewing new techniques
              that are still in development.
            </p>

            <div className="
              mt-6
              bg-white/60
              backdrop-blur-xl
              shadow-[0_4px_20px_rgba(0,0,0,0.05)]
              border border-white/30
              rounded-2xl
              p-10
              space-y-10
              text-center
            ">
              {/* 1 */}
              <div>
                <h3 className="text-[18px] font-semibold text-[#24408f]">Andrew Greene</h3>
                <p className="text-gray-500 text-sm mt-1">Neuralink dark patterns</p>
                <p className="text-gray-400 text-[12px] mt-3 tracking-wide">9:00AM – 10:00AM PST</p>
              </div>

              <div className="border-t border-gray-200" />

              {/* 2 */}
              <div>
                <h3 className="text-[18px] font-semibold text-[#24408f]">Heather Terry</h3>
                <p className="text-gray-500 text-sm mt-1">DALL-E for passports</p>
                <p className="text-gray-400 text-[12px] mt-3 tracking-wide">10:00AM – 11:00AM PST</p>
              </div>

              <div className="border-t border-gray-200" />

              {/* 3 */}
              <div>
                <h3 className="text-[18px] font-semibold text-[#24408f]">Piers Wilkins</h3>
                <p className="text-gray-500 text-sm mt-1">Quantum password cracking</p>
                <p className="text-gray-400 text-[12px] mt-3 tracking-wide">11:00AM – 12:00PM PST</p>
              </div>

              <div className="border-t border-gray-200" />

              {/* Lunch */}
              <div>
                <h3 className="text-[18px] font-semibold text-[#24408f]">Lunch</h3>
                <p className="text-gray-400 text-[12px] mt-3 tracking-wide">12:00PM – 1:00PM PST</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
