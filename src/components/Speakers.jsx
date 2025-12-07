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
        <div style={{ backgroundColor: "#F1F4FF" }}>
            <h1
                className="text-5xl font-semibold text-center pt-20 pb-10 -ms-250"
                style={{ color: "#155DFC" }}
            >
                Speakers
            </h1>

            <p className="text-xl text-center text-blue-950 -mt-4 -ms-235" style={{ color: "#1C39AB" }}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Learn from the experts on the cutting-edge of deception at <br />
                the most sinister companies.
            </p>

            <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-4 gap-10">

                {/* LEFT TIMELINE */}
                <div className="col-span-1 relative">

                    <div className="absolute"></div>

                    <div className="space-y-16 pl-8">

                        {/* POINT 1 */}
                        <div onClick={() => setActive(1)} className="cursor-pointer relative">

                            <div
                                className={`
                                    w-3 h-3 rounded-full absolute -left-[30px] top-1
                                    ${active === 1 ? "bg-blue-600" : "bg-blue-400"}
                                `}
                            ></div>

                            <p className="text-xs text-blue-700 tracking-wide mb-1 mt-1">Opening Day</p>
                            <p className={`text-3xl font-bold ${active === 1 ? "text-blue-900" : "text-blue-900"}`}>
                                April 4
                            </p>
                        </div>

                        {/* POINT 2 */}
                        <div onClick={() => setActive(2)} className="cursor-pointer relative">

                            <div
                                className={`
                                    w-3 h-3 rounded-full absolute -left-[30px] top-1
                                    ${active === 2 ? "bg-blue-600" : "bg-blue-400"}
                                `}
                            ></div>

                            <p className="text-xs text-blue-700 tracking-wide mb-1 mt-1">Speakers & Workshops</p>
                            <p className={`text-3xl font-bold ${active === 2 ? "text-blue-900" : "text-blue-900"}`}>
                                April 5
                            </p>
                        </div>

                        {/* POINT 3 */}
                        <div onClick={() => setActive(3)} className="cursor-pointer relative">

                            <div
                                className={`
                                    w-3 h-3 rounded-full absolute -left-[30px] top-1
                                    ${active === 3 ? "bg-blue-600" : "bg-blue-400"}
                                `}
                            ></div>

                            <p className="text-xs text-blue-700 tracking-wide mb-1 mt-1">Interviews</p>
                            <p className={`text-3xl font-bold ${active === 3 ? "text-blue-900" : "text-blue-900"}`}>
                                April 6
                            </p>
                        </div>

                    </div>

                </div>

                {/* RIGHT SPEAKERS GRID */}
                <div className="col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

                    {displaySpeakers.map((s, i) => (
                        <Link key={i} to={s.link} className="group block">
                            <div className="text-center">

                                {/* UPDATED PREMIUM IMAGE CARD */}
                                <div
                                    className="
                                        rounded-3xl overflow-hidden 
                                        border border-blue-300 
                                        shadow-lg p-2

                                        transition-all duration-500 
                                        group-hover:border-blue-600 
                                        group-hover:shadow-2xl 
                                        group-hover:scale-[1.05]

                                        backdrop-blur-sm bg-white/30
                                    "
                                >
                                    <img
                                        src={s.img}
                                        className="
                                            w-full h-64 object-cover rounded-2xl
                                            transition-transform duration-700 ease-in-out
                                            group-hover:scale-105 
                                            group-hover:rotate-[1deg] 
                                            group-hover:brightness-105
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
