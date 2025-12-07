import React from "react";
import bg from "../assets/background.jpg";

export default function Signup() {
  return (
    <div className="w-full flex justify-center py-20 px-4 bg-[#F2F5FF]">
      <div
        className="
          max-w-6xl w-full rounded-[40px] p-18
          bg-cover bg-center bg-no-repeat 
          shadow-[0_8px_40px_rgba(0,0,0,0.1)] border border-gray-200
        "
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center p-20">

          {/* LEFT SIDE */}
          <div className="backdrop-blur-[1px]">
            <h2 className="text-4xl font-semibold text-[#0a2a68]">
              Stay up to date
            </h2>
            <p className="mt-4 text-lg text-gray-700">
              Get updates on all of our events and be the first to get notified
              when tickets go on sale.
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="backdrop-blur-[1px]">
            <p className="text-right text-[#0a2a68] font-medium mb-3">
              Sign up to our newsletter ↓
            </p>

            <div className="flex bg-white p-2 rounded-full shadow-md border border-gray-200 items-center">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 px-4 py-3 outline-none rounded-full text-gray-700"
              />
              <button
                className="
                bg-[#0a57ff] text-white px-6 py-3 
                rounded-full font-semibold
                hover:bg-[#0049e6] transition
              "
              >
                Sign up today
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
