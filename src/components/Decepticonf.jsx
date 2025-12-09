import React from "react";
import background from "../assets/background.jpg";
import logo from "../assets/logo.png";

export default function Decepticonf() {
  return (
    <section className="relative bg-[#f1f4ff] overflow-hidden">

      {/* LEFT BACKGROUND */}
      <div className="absolute inset-y-0 left-0 w-[45%] hidden md:block">
        <img
          src={background}
          className="h-full w-full object-cover opacity-100 scale-x-[-1] -ms-40 mt-60"
        />
      </div>

      {/* GLASS OVERLAY */}
      <div className="absolute inset-y-0 left-0 w-[45%] bg-white/10 backdrop-blur-3xl hidden md:block" />

      {/* MAIN CONTENT */}
      <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-24 sm:pt-20 sm:pb-28">

        {/* TOP BAR */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">

          {/* Row 1: Logo + Date + Button */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full">

            {/* Logo */}
            <img className="h-12 sm:h-14 -mt-4 sm:-mt-10" src={logo} alt="Logo" />

            {/* Date (centered on mobile) */}
            <p className="text-xs sm:text-sm font-medium text-blue-600 text-center mt-3 sm:mt-0 sm:mx-4">
              04 – 06 of April , 2022 <span className="mx-2">•</span> Los Angeles , CA
            </p>

            {/* Button */}
            <button className="px-4 py-2 rounded-xl bg-blue-600 text-white text-sm sm:text-lg 
              font-semibold shadow-lg hover:bg-blue-700 h-10 w-40 sm:h-14 -mt-4 sm:-mt-9 sm:ml-4">
              Get tickets
            </button>

          </div>

        </div>

        {/* TITLE */}
        <h2 className="
          max-w-3xl mx-auto text-left
          text-4xl sm:text-6xl md:text-7xl
          font-bold text-blue-700 leading-tight
          mt-8 sm:mt-10
        ">
          A design conference<br />for the dark side.
        </h2>

        {/* PARAGRAPHS */}
        <div className="max-w-3xl mx-auto mt-6 sm:mt-8 text-left text-gray-700
          text-base sm:text-lg leading-7 sm:leading-8"
        >
          <p>
            The next generation of web users are tech–savvy and suspicious.
            They know how to use dev tools, they can detect a phishing scam
            from a mile away, and they certainly aren’t accepting any checks
            from Western Union.
          </p>

          <p className="mt-4 sm:mt-6">
            At DeceptiConf you’ll learn about the latest dark patterns being
            developed to trick even the smartest visitors, and you’ll learn
            how to deploy them without ever being detected.
          </p>
        </div>

        {/* STATS SECTION */}
        <div className="
          max-w-3xl mx-auto
          mt-12 sm:mt-16
          grid grid-cols-2 sm:grid-cols-4
          gap-6 sm:gap-10
          text-left
        ">
          <div>
            <p className="text-blue-600 text-xs sm:text-sm font-medium">Speakers</p>
            <p className="text-2xl sm:text-3xl font-semibold text-blue-900 mt-1">18</p>
          </div>

          <div>
            <p className="text-blue-600 text-xs sm:text-sm font-medium">People Attending</p>
            <p className="text-2xl sm:text-3xl font-semibold text-blue-900 mt-1">2,091</p>
          </div>

          <div>
            <p className="text-blue-600 text-xs sm:text-sm font-medium">Venue</p>
            <p className="text-2xl sm:text-3xl font-semibold text-blue-900 mt-1">Staples Center</p>
          </div>

          <div>
            <p className="text-blue-600 text-xs sm:text-sm font-medium">Location</p>
            <p className="text-2xl sm:text-3xl font-semibold text-blue-900 mt-1">Los Angeles</p>
          </div>
        </div>

      </div>
    </section>
  );
}
