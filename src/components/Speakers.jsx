import React, { useState } from "react";   // ← ✅ NEW
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

    // ✅ NEW → Timeline active point
    const [active, setActive] = useState(1);

    // Your 18 speakers SAME
    const speakers = [
        { img: img1, name: "Steven McHail", job: "Designer at Globex Corporation", link: "/speaker/steven" },
        { img: img2, name: "Jaquelin Isch", job: "UX Design at InGen", link: "/speaker/jaquelin" },
        { img: img3, name: "Dianne Guilianelli", job: "General Manager at Initech", link: "/speaker/dianne" },
        { img: img4, name: "Perter Alfonsi", job: "Engineer at Tyrell Corp", link: "/speaker/peter" },
        { img: img5, name: "Michael Suleh", job: "Product Manager at Oscorp", link: "/speaker/michael" },
        { img: img6, name: "Monica Requejo", job: "Marketing at Weyland Corp", link: "/speaker/monica" },
        { img: img7, name: "Johnathan Lee", job: "CTO at Umbrella Corp", link: "/speaker/johnathan" },
        { img: img8, name: "Sara Blakely", job: "CEO at Soylent Corp", link: "/speaker/sara" },
        { img: img9, name: "David Kim", job: "Data Scientist at Cyberdyne Systems", link: "/speaker/david" },
        { img: img10, name: "Linda Park", job: "HR Manager at Stark Industries", link: "/speaker/linda" },
        { img: img11, name: "James Wilson", job: "DevOps at Aperture Science", link: "/speaker/james" },
        { img: img12, name: "Emily Chen", job: "Business Analyst at Black Mesa", link: "/speaker/emily" },
        { img: img13, name: "Robert Garcia", job: "Security Expert at RDA Corp", link: "/speaker/robert" },
        { img: img14, name: "Jessica Liu", job: "Software Engineer at Blue Sun Corp", link: "/speaker/jessica" },
        { img: img15, name: "Daniel Martinez", job: "Project Manager at OmniCorp", link: "/speaker/daniel" },
        { img: img16, name: "Sophia Rodriguez", job: "AI Specialist at Zorin Industries", link: "/speaker/sophia" },
        { img: img17, name: "Christopher Nguyen", job: "Cloud Architect at Virtucon", link: "/speaker/christopher" },
        { img: img18, name: "Olivia Brown", job: "Full Stack Developer at Nakatomi Trading", link: "/speaker/olivia" },    
    ];

    // ✅ NEW → 6–6–6 group logic
    const displaySpeakers =
        active === 1 ? speakers.slice(0, 6)
        : active === 2 ? speakers.slice(6, 12)
        : speakers.slice(12, 18);

    return (
        <div style={{ backgroundColor: "#F1F4FF" }}>
            <h1
                className="text-5xl font-semibold text-center pt-20 pb-10 -ms-250"
                style={{ color: "#155DFC" }}
            >
                Speakers
            </h1>

            <p className="text-xl text-center text-blue-950 -mt-4 -ms-235" style={{color:"#1C39AB"}}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Learn from the experts on the cutting-edge of deception at <br />
                the most sinister companies.
            </p>

            <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-4 gap-10">

                {/* LEFT TIMELINE */}
                <div className="col-span-1 relative">
                    <div className="absolute left-2 top-0 h-full w-0.5 bg-blue-200"></div>

                    <div className="space-y-14 pl-8">

                        {/* POINT 1 */}
                        <div onClick={() => setActive(1)} className="cursor-pointer">
                            <div className={`w-3 h-3 rounded-full ${active === 1 ? "bg-blue-600" : "bg-blue-400"}`}></div>
                            <p className="mt-2 text-sm text-blue-700 font-semibold">Opening Day</p>
                            <p className="text-xl font-bold text-blue-900">April 4</p>
                        </div>

                        {/* POINT 2 */}
                        <div onClick={() => setActive(2)} className="cursor-pointer">
                            <div className={`w-3 h-3 rounded-full ${active === 2 ? "bg-blue-600" : "bg-blue-400"}`}></div>
                            <p className="mt-2 text-sm text-blue-700 font-semibold">Speakers & Workshops</p>
                            <p className="text-xl font-bold text-blue-900">April 5</p>
                        </div>

                        {/* POINT 3 */}
                        <div onClick={() => setActive(3)} className="cursor-pointer">
                            <div className={`w-3 h-3 rounded-full ${active === 3 ? "bg-blue-600" : "bg-blue-400"}`}></div>
                            <p className="mt-2 text-sm text-blue-700 font-semibold">Interviews</p>
                            <p className="text-xl font-bold text-blue-900">April 6</p>
                        </div>

                    </div>
                </div>

                {/* RIGHT SIDE → 6 SPEAKERS ONLY */}
                <div className="col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

                    {displaySpeakers.map((s, i) => (
                        <Link key={i} to={s.link} className="group block">

                            <div className="text-center">

                                <div
                                    className="
                                        rounded-3xl overflow-hidden border
                                        border-blue-200 shadow-md p-2
                                        transition-all duration-300 
                                        group-hover:border-blue-500 
                                        group-hover:shadow-xl
                                        group-hover:scale-105
                                    "
                                >
                                    <img
                                        src={s.img}
                                        className="
                                            w-full h-64 object-cover rounded-2xl 
                                            transition-transform duration-300
                                            group-hover:scale-110
                                        "
                                        alt={s.name}
                                    />
                                </div>

                                <h3 className="mt-4 text-xl font-bold text-gray-800">{s.name}</h3>
                                <p className="text-sm text-gray-500">{s.job}</p>

                            </div>

                        </Link>
                    ))}

                </div>

            </section>
        </div>
    );
}
