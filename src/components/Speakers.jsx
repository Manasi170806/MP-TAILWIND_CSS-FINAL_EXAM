import React, { useState } from "react";
import { Link } from "react-router-dom";

import img1 from "../assets/01.webp";
import img2 from "../assets/02.webp";
import img3 from "../assets/03.webp";
import img4 from "../assets/04.webp";
import img5 from "../assets/05.webp";
import img6 from "../assets/06.webp";
import img7 from "../assets/07.webp";
import img8 from "../assets/08.webp";
import img9 from "../assets/09.webp";
import img10 from "../assets/10.webp";
import img11 from "../assets/11.webp";
import img12 from "../assets/12.webp";
import img13 from "../assets/13.webp";
import img14 from "../assets/14.webp";
import img15 from "../assets/15.webp";
import img16 from "../assets/16.webp";
import img17 from "../assets/17.webp";
import img18 from "../assets/18.webp";

export default function Speakers() {
  const [active, setActive] = useState(1);

  const speakers = [
    { img: img1, name: "Steven McHail", job: "Designer at Globex Corporation", link: "/speaker/steven" },
    { img: img2, name: "Jaquelin Isch", job: "UX Design at InGen", link: "/speaker/jaquelin" },
    { img: img3, name: "Dianne Guilianelli", job: "General Manager at Initech", link: "/speaker/dianne" },
    { img: img4, name: "Ronni Cantadore", job: "Design Engineer at Weyland-Yutani", link: "/speaker/ronni" },
    { img: img5, name: "Erhart Cockrin", job: "Product Lead at Cyberdyne Systems", link: "/speaker/erhart" },
    { img: img6, name: "Parker Johnson", job: "UI Designer at MomCorp", link: "/speaker/parker" },
    { img: img7, name: "Damaris Kimura", job: "Senior Engineer at OCP", link: "/speaker/damaris" },
    { img: img8, name: "Ibrahim Frasch", job: "Programmer at Umbrella Corp", link: "/speaker/ibrahim" },
    { img: img9, name: "Cathlene Burrage", job: "Frontend Developer at Buy n Large", link: "/speaker/cathlene" },
    { img: img10, name: "Rinaldo Beynon", job: "Data Scientist at Rekall", link: "/speaker/rinaldo" },
    { img: img11, name: "Waylon Hyden", job: "DevOps at RDA Corporation", link: "/speaker/waylon" },
    { img: img12, name: "Giordano Sagucio", job: "Game Developer at Soylent Corp", link: "/speaker/giordano" },
    { img: img13, name: "Andrew Greene", job: "Frontend Developer at Ultratech", link: "/speaker/andrew" },
    { img: img14, name: "Heather Terry", job: "Backend Developer at Xanatos Enterprises", link: "/speaker/heather" },
    { img: img15, name: "Piers Wilkins", job: "Full stack Developer at BiffCo", link: "/speaker/piers" },
    { img: img16, name: "Gordon Sanderson", job: "Mobile Developer at Cobra Industries", link: "/speaker/gordon" },
    { img: img17, name: "Kimberly Parsons", job: "Game Developer at Tyrell Corporation", link: "/speaker/kimberly" },
    { img: img18, name: "Richard Astley", job: "CEO at Roll Out", link: "/speaker/richard" },
  ];

  const displaySpeakers =
    active === 1 ? speakers.slice(0, 6)
      : active === 2 ? speakers.slice(6, 12)
        : speakers.slice(12, 18);

  return (
    <div className="bg-[#F1F4FF]">
      {/* HEADING */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold pt-16 sm:pt-20 pb-4 sm:pb-6 text-left sm:text-center md:text-left text-[#155DFC]">
          Speakers
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-left sm:text-center md:text-left text-[#1C39AB] -mt-2 sm:-mt-1 md:mt-0">
          Learn from the experts on the cutting-edge of deception at <br /> <br className="hidden md:hidden" />
          the most sinister companies.
        </p>
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8">
        {/* TIMELINE */}
        <div className="col-span-1 flex justify-start md:justify-start">
          <div className="space-y-8 sm:space-y-12 md:space-y-16 pl-0 sm:pl-4 md:pl-8 w-full">
            {[1, 2, 3].map((point) => {
              const info = [
                { title: "Opening Day", date: "April 4" },
                { title: "Speakers & Workshops", date: "April 5" },
                { title: "Interviews", date: "April 6" }
              ][point - 1];
              return (
                <div key={point} onClick={() => setActive(point)} className="cursor-pointer relative">
                  <div className={`w-3 h-3 rounded-full absolute -left-6 top-1 ${active === point ? "bg-blue-600" : "bg-blue-400"}`}></div>
                  <p className="text-xs sm:text-sm text-blue-700 tracking-wide mb-1 mt-1">{info.title}</p>
                  <p className="text-2xl sm:text-2xl md:text-3xl font-bold text-blue-900">{info.date}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* SPEAKERS GRID */}
        <div className="col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displaySpeakers.map((s, i) => (
            <Link key={i} className="group block">
              <div className="text-center">
                <div className="rounded-3xl overflow-hidden border border-blue-300 shadow-lg p-2 transition-all duration-500 group-hover:border-blue-600 group-hover:shadow-2xl group-hover:scale-[1.05] backdrop-blur-sm bg-white/30">
                  <img src={s.img} alt={s.name} className="w-full h-64 object-cover rounded-2xl transition-transform duration-700 ease-in-out group-hover:scale-105 group-hover:rotate-1 group-hover:brightness-105" />
                </div>
                <h3 className="mt-4 text-lg sm:text-xl md:text-xl font-bold text-gray-800">{s.name}</h3>
                <p className="text-sm sm:text-base md:text-base text-gray-500">{s.job}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
