import React from 'react'
import s1 from '../assets/s1.svg'; 
import s2 from '../assets/s2.svg';
import s3 from '../assets/s3.svg';
import s4 from '../assets/s4.svg';
import s5 from '../assets/s5.svg';
import s6 from '../assets/s6.svg';

export default function Sponsorships() {
  return (
    <div style={{ backgroundColor: "#F5F7FF" }}>
            <h1
                className="text-5xl font-semibold text-center pt-20 pb-10 leading-tight"
                style={{ color: "#1C398E" }}
            >
                Current sponsorships for our <br /> workshops and speakers.
            </h1>

            <div className="pb-20 flex flex-col justify-content-around items-center">
                <img
                    src={s1}
                    alt="Sponsorships"
                    className="mx-auto pb-20"
                />
                <img
                    src={s2}
                    alt="Sponsorships"
                    className="mx-auto pb-20"
                />
                <img
                    src={s3}
                    alt="Sponsorships"
                    className="mx-auto pb-20"
                />
                <img
                    src={s4}
                    alt="Sponsorships"
                    className="mx-auto pb-20"
                />
                <img
                    src={s5}
                    alt="Sponsorships"
                    className="mx-auto pb-20"
                />
                <img
                    src={s6}
                    alt="Sponsorships"
                    className="mx-auto pb-20"
                />
            </div>

        </div>
  )
}
