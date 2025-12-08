import React from "react";
import background from "../assets/background.jpg";

export default function Decepticonf() {
  const days = [
    {
      date: "April 4",
      desc: "The first day of the conference is focused on dark patterns for ecommerce.",
      sessions: [
        { title: "Steven McHail", sub: "Not so one-time payments", time: "9:00AM - 10:00AM PST" },
        { title: "Jaquelin Isch", sub: "The finer print", time: "10:00AM - 11:00AM PST" },
        { title: "Dianne Guilianelli", sub: "Post-purchase blackmail", time: "11:00AM - 12:00PM PST" },
        { title: "Lunch", sub: "", time: "12:00PM - 1:00PM PST" },
        { title: "Ronni Cantadore", sub: "Buy or die", time: "1:00PM - 2:00PM PST" },
        { title: "Erhart Cockrin", sub: "In-person cancellation", time: "2:00PM - 3:00PM PST" },
        { title: "Parker Johnson", sub: "The pay/cancel switcheroo", time: "3:00PM - 4:00PM PST" },
      ],
    },
    {
      date: "April 5",
      desc: "Next we spend the day talking about deceiving people with technology.",
      sessions: [
        { title: "Damaris Kimura", sub: "The invisible card reader", time: "9:00AM – 10:00AM PST" },
        { title: "Ibrahim Frasch", sub: "Stealing fingerprints", time: "10:00AM – 11:00AM PST" },
        { title: "Cathlene Burrage", sub: "Voting machines", time: "11:00AM - 12:00PM PST" },
        { title: "Lunch", sub: "", time: "12:00PM - 1:00PM PST" },
        { title: "Rinaldo Beynon", sub: "Blackhat SEO that works", time: "1:00PM - 2:00PM PST" },
        { title: "Waylon Hyden", sub: "Turning your audience into a botnet", time: "2:00PM - 3:00PM PST" },
        { title: "Giordano Sagucio", sub: "Fly phishing", time: "3:00PM - 4:00PM PST" },
      ],
    },
    {
      date: "April 6",
      desc: "We close out the event previewing new techniques that are still in development.",
      sessions: [
        { title: "Andrew Greene", sub: "Neuralink dark patterns", time: "9:00AM – 10:00AM PST" },
        { title: "Heather Terry", sub: "DALL-E for passports", time: "10:00AM – 11:00AM PST" },
        { title: "Piers Wilkins", sub: "Quantum password cracking", time: "11:00AM – 12:00PM PST" },
        { title: "Lunch", sub: "", time: "12:00PM – 1:00PM PST" },
        { title: "Gordon Sanderson", sub: "SkyNet is coming", time: "1:00PM - 2:00PM PST" },
        { title: "Kimberly Parsons", sub: "Dark patterns for the metaverse", time: "2:00PM - 3:00PM PST" },
        { title: "Richard Astley", sub: "Knowing the game and playing it", time: "3:00PM - 4:00PM PST" },
      ],
    },
  ];

  return (
    <section className="relative bg-[#f1f4ff] overflow-hidden">
      {/* LEFT BLUR BACKGROUND EXACT SAME */}
      <div className="absolute inset-y-0 right-0 w-[45%]">
        <img
          src={background}
          className="h-full w-full object-cover opacity-50 scale-x-[1] ms-65 mt-10 "
        />
      </div>
      {/* OVERLAY SOFT WHITE BLUR (same keynote effect) */}
      <div className="absolute inset-y-0 left-0 w-[45%] bg-white/10 backdrop-blur-3xl" />
      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-32">

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

          {days.map((d, i) => (
            <div key={i}>
              {/* Date Title */}
              <h2 className="text-[28px] font-semibold text-[#1C398E]">{d.date}</h2>

              <p className="text-[#1C4BAF] mt-1 mb-6 w-[90%] leading-relaxed font-normal">
                {d.desc}
              </p>

              {/* Card */}
              <div className=" shadow-lg py-10 px-8 w-full mt-15" style={{ backgroundColor: "#F8FAFF" }}>

                {d.sessions.map((s, idx) => (
                  <div key={idx} className="text-center">

                    {/* Title */}
                    <h3 className="text-[#1C398E] font-semibold text-lg mb-1">{s.title}</h3>

                    {/* Subtitle */}
                    {s.sub && (
                      <p className="text-[#2B4696] text-sm mb-2">{s.sub}</p>
                    )}

                    {/* Time */}
                    <p className="text-[#808FA5] text-xs mt-1 mb-10">{s.time}</p>

                    {/* Divider */}
                    {idx !== d.sessions.length - 1 && (
                      <div className="my-6 w-1/2 mx-auto border-b border-[#d6dcf3]" />
                    )}
                  </div>
                ))}

              </div>
            </div>
          ))}
        </div>
      </div>



    </section>
  );
}
