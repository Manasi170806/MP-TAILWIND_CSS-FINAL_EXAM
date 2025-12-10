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
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center 
                   pt-16 md:pt-20 pb-6 md:pb-10 leading-tight mx-4"
        style={{ color: "#1C398E" }}
      >
        Current sponsorships for our <br /> workshops and speakers.
      </h1>

      <div
        className="
          pb-20
          max-w-5xl 
          mx-auto 
          grid 
          grid-cols-2      
          sm:grid-cols-3  
          md:grid-cols-3    
          gap-12 md:gap-16 
          place-items-center 
          text-center 
          mt-10
        "
      >
        <img src={s1} alt="S1" className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto" />
        <img src={s2} alt="S2" className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto" />
        <img src={s3} alt="S3" className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto" />
        <img src={s4} alt="S4" className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto" />
        <img src={s5} alt="S5" className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto" />
        <img src={s6} alt="S6" className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto" />
      </div>
    </div>
  )
}
