import React from 'react'
import logo from '../assets/logo.png';

export default function Footer() {
  return (
    <footer className="bg-[#F1F4FF] py-6 px-4">
      <div className="flex items-center justify-between max-w-6xl mx-auto flex-wrap">
        {/* Logo */}
        <img src={logo} alt="Logo" className="h-12 sm:h-16 md:h-20 mb-4 md:mb-0" />

        {/* Copyright */}
        <p className="text-gray-500 text-sm sm:text-md md:text-base">
          Copyright © 2025 DeceptiConf, LLC. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
