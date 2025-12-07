import React from "react";
import img1 from "../assets/01.webp";
import img2 from "../assets/02.webp";
import img3 from "../assets/03.webp";
import img4 from "../assets/04.webp";
import img5 from "../assets/05.webp";
import img6 from "../assets/06.webp";

export default function Speakers() {
    const speakers = [
        { img: img1, name: "Steven McHail", job: "Designer at Globex Corporation" },
        { img: img2, name: "Jaquelin Isch", job: "UX Design at InGen" },
        { img: img3, name: "Dianne Guilianelli", job: "General Manager at Initech" },
        { img: img4, name: "Perter Alfonsi", job: "Engineer at Tyrell Corp" },
        { img: img5, name: "Michael Suleh", job: "Product Manager at Oscorp" },
        { img: img6, name: "Monica Requejo", job: "Marketing at Weyland Corp" },
    ];
    return (
        <div style={{ backgroundColor: "#F1F4FF" }}>
            <h1 className="text-5xl font-semibold text-center pt-20 pb-10 -ms-255" style={{ color: "#155DFC" }}>Speakers</h1>
            <p className='text-xl ms-38 -mt-4 text-blue-950'>Learn from the experts on the cutting-edge of deception at <br /> the most sinister companies.</p>

            <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-4 gap-10">

                {/* LEFT SIDE TIMELINE */}
                <div className="col-span-1 relative">
                    <div className="absolute left-2 top-0 h-full w-[2px] bg-blue-200"></div>

                    <div className="space-y-14 pl-8">

                        <div>
                            <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                            <p className="mt-2 text-sm text-blue-700 font-semibold">Opening Day</p>
                            <p className="text-xl font-bold text-blue-900">April 4</p>
                        </div>

                        <div>
                            <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                            <p className="mt-2 text-sm text-blue-700 font-semibold">Speakers & Workshops</p>
                            <p className="text-xl font-bold text-blue-900">April 5</p>
                        </div>

                        <div>
                            <div className="w-3 h-3 rounded-full bg-blue-300"></div>
                            <p className="mt-2 text-sm text-blue-700 font-semibold">Interviews</p>
                            <p className="text-xl font-bold text-blue-900">April 6</p>
                        </div>

                    </div>
                </div>

                {/* RIGHT SIDE SPEAKER GRID */}
                <div className="col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

                    {speakers.map((s, i) => (
                        <div key={i} className="text-center">

                            {/* IMAGE BOX */}
                            <div className="rounded-3xl overflow-hidden shadow-md border border-blue-200 p-2">
                                <img
                                    src={s.img}
                                    className="w-full h-64 object-cover rounded-2xl"
                                />
                            </div>

                            {/* NAME + JOB */}
                            <h3 className="mt-4 text-xl font-bold text-gray-800">{s.name}</h3>
                            <p className="text-sm text-gray-500">{s.job}</p>

                        </div>
                    ))}

                </div>

            </section>
        </div>
    );
}
