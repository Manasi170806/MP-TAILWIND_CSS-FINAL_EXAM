import React from 'react'
import logo from '../assets/logo.png';

export default function Footer() {
  return (
    <div className='bg-[#F1F4FF] h-35'>
      <img src={logo} alt="Logo" className="mx-auto py-10 ms-36 h-35" />
      <p className='-mt-21 ms-245 text-md text-gray-500'>Copyright © 2025 DeceptiConf, LLC. All rights reserved.</p>
    </div>
  )
}
