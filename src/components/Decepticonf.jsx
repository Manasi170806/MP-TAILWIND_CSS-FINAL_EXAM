import React from "react";
import background from "../assets/background.jpg";
import logo from "../assets/logo.png";

export default function Decepticonf() {
  return (
    <section className="relative bg-[#f1f4ff] overflow-hidden">

      {/* LEFT BLUR BACKGROUND EXACT SAME */}
      <div className="absolute inset-y-0 left-0 w-[45%]">
        <img
          src={background}
          className="h-full w-full object-cover opacity-100 scale-x-[-1] -ms-40 mt-60 "
        />
      </div>

      {/* OVERLAY SOFT WHITE BLUR (same keynote effect) */}
      <div className="absolute inset-y-0 left-0 w-[45%] bg-white/10 backdrop-blur-3xl" />

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-32">

        {/* TOP BAR */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            {/* Logo icon */}
            <img className="-mt-12 h-15" src={logo} alt="DeceptiConf Logo" />
          </div>

          <button className="px-6 py-2 rounded-xl bg-blue-600 text-white text-lg font-semibold shadow-lg hover:bg-blue-700 h-14 -mt-9">
            Get your tickets
          </button>
        </div>

        {/* DATE EXACT SAME */}
        <p className=" text-sm font-medium text-blue-600 text-center fontfamily: 'Courier New', Courier, monospace -mt-10">
          04&nbsp;-&nbsp;06&nbsp;&nbsp; of &nbsp;April ,&nbsp; 2022 <span className="mx-2">•</span> Los&nbsp; Angeles ,&nbsp; CA 
        </p>

        

        {/* TITLE EXACT COPY */}
        <h2 className="mt-8 text-center text-6xl font-bold text-blue-700 leading-tight">
          A design conference <br /> for the dark side.
        </h2>

        {/* PARAGRAPHS */}
        <div className="max-w-3xl mx-auto mt-8 text-center text-gray-700 text-lg leading-8">
          <p>
            The next generation of web users are tech-savvy and suspicious.
            They know how to use dev tools, they can detect a phishing scam from
            a mile away, and they certainly aren’t accepting any checks from
            Western Union.
          </p>

          <p className="mt-6">
            At DeceptiConf you’ll learn about the latest dark patterns being
            developed to trick even the smartest visitors, and you’ll learn how
            to deploy them without ever being detected.
          </p>
        </div>
        

      </div>
    </section>
  );
}
