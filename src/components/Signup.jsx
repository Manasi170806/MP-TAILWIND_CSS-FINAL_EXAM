import React, { useState } from "react";
import bg from "../assets/background.jpg";

export default function SignupBox() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim()) {
      setError("Please enter your email");
    } else if (!emailPattern.test(email)) {
      setError("This doesn’t look like a valid email");
    } else {
      setError("");
      alert("Successfully signed up!");
    }
  };

  return (
    <div className="w-full h-140 flex justify-center px-4 py-20 bg-[#F2F5FF]">
      <div
        className="
          w-full max-w-6xl 
          rounded-[40px] 
          px-8 sm:px-12 md:px-16 py-20
          relative overflow-hidden
          bg-[#EEF3FF]
          shadow-[0_25px_70px_rgba(0,0,0,0.22)]
          flex items-center
        "
      >

        {/* BACKGROUND IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-90 hidden md:block"
          style={{
            backgroundImage: `url(${bg})`,
            marginLeft: "320px",
          }}
        ></div>

        {/* White soft overlay */}
        <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px]"></div>

        {/* CONTENT */}
        <div className="relative z-10 w-full grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT TEXT */}
          <div className="text-center md:text-left">
            <h2 className="text-4xl sm:text-5xl font-semibold text-[#0C2A78]">
              Stay up to date
            </h2>

            <p className="text-[#0C2A78] mt-4 text-lg leading-relaxed">
              Get updates on all of our events and be the first to get 
              notified when tickets go on sale.
            </p>
          </div>

          {/* RIGHT FORM */}
          <div className="space-y-3">
            <p className="text-[#0C2A78] font-medium text-lg text-center md:text-left">
              Sign up to our newsletter ↓
            </p>

            <div className="flex flex-col sm:flex-row items-center bg-white rounded-2xl shadow-lg p-3 gap-3 h-15">
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 w-full outline-none text-gray-700 text-lg"
              />

              <button
                onClick={handleSubmit}
                className="
                  bg-[#0A57FF] text-white 
                  px-6 py-1 rounded-xl 
                  text-lg font-semibold w-full h-12 sm:w-auto
                  shadow-[0_4px_20px_rgba(0,0,0,0.2)]
                "
              >
                Sign up today
              </button>
            </div>

            {error && (
              <div
                className="
                  inline-flex items-center gap-2
                  bg-red-50 border border-red-200
                  text-red-700 text-sm font-medium
                  px-3 py-2 rounded-lg
                  shadow-[0_2px_6px_rgba(255,0,0,0.08)]
                "
              >
                <span>⚠️</span>
                <span>{error}</span>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
