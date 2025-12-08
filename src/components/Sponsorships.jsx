import React from 'react'
import s1 from '../assets/s1.svg';
import s2 from '../assets/s2.svg';
import s3 from '../assets/s3.svg';
import s4 from '../assets/s4.svg';
import s5 from '../assets/s5.svg';
import s6 from '../assets/s6.svg';

export default function Sponsorships() {
  return (
    <div style={{ backgroundColor: "#F2F5FF" }}>
      <h1
        className="text-5xl font-semibold text-center pt-20 pb-10 leading-tight mx-4"
        style={{ color: "#1C398E" }}
      >
        Current sponsorships for our <br /> workshops and speakers.
      </h1>

      {/* EXACT SAME GRID LIKE SCREENSHOT */}
      <div className="pb-20 grid grid-cols-1 md:grid-cols-3 gap-13 place-items-center w-200 text-center ms-90 mt-10">

        <img src={s1} alt="S1" className="w-auto h-16" />
        <img src={s2} alt="S2" className="w-auto h-16" />
        <img src={s3} alt="S3" className="w-auto h-16" />

        <img src={s4} alt="S4" className="w-auto h-16" />
        <img src={s5} alt="S5" className="w-auto h-16" />
        <img src={s6} alt="S6" className="w-auto h-16" />

      </div>
    </div>
  )
}
