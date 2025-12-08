import React, { useState } from "react";
import bg from "../assets/background.jpg";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const validateEmail = (value) => {
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;
    return pattern.test(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (email.trim() === "") {
      setError("⚠ Please enter your email.");
      return;
    }

    if (!validateEmail(email)) {
      setError("⚠ Enter a valid email address.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccess("✔ You have successfully signed up!");
      setEmail("");
    }, 1200);
  };

  return (
    <div className="w-full flex justify-center py-20 px-4 bg-[#F2F5FF] -mb-10">
      <div
        className="
          max-w-6xl w-full rounded-[40px] p-18 opacity-80
          bg-cover bg-center bg-no-repeat 
          shadow-[0_8px_40px_rgba(0,0,0,0.1)] border border-gray-200
        "
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center p-20">

            {/* LEFT SIDE */}
            <div className="backdrop-blur-[1px]">
              <h2 className="text-5xl font-semibold text-[#13296c] -ms-6">
                Stay up to date
              </h2>
              <p className="mt-4 text-lg text-[#212943] -ms-6">
                Get updates on all of our events and be the first to get notified
                when tickets go on sale.
              </p>
            </div>

            {/* RIGHT SIDE */}
            <div className="backdrop-blur-[1px]">
              <p className="text-left text-[#0a2a68] font-medium mb- text-xl ms-10 mb-4">
                Sign up to our newsletter ↓
              </p>

              <div className="flex bg-white p-2 rounded-2xl shadow-md border border-gray-200 items-center h-18 ms-10 w-100">
                <input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 outline-none rounded text-gray-700"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="
                    bg-[#0a57ff] text-white px-6 py-3 
                    rounded-2xl font-semibold
                    hover:bg-[#0049e6] transition disabled:opacity-50
                  "
                >
                  {loading ? "Please wait..." : "Sign up today"}
                </button>
              </div>

              {/* ERROR MESSAGE */}
              {error && (
                <p className="text-red-600 ms-10 mt-2 text-sm font-medium">
                  {error}
                </p>
              )}

              {/* SUCCESS MESSAGE */}
              {success && (
                <p className="text-green-600 ms-10 mt-2 text-sm font-medium">
                  {success}
                </p>
              )}
            </div>

          </div>
        </form>
      </div>
    </div>
  );
}
