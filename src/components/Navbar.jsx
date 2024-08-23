import React from 'react'

function Navbar() {
  return (
    <nav className='flex justify-around bg-slate-700 text-white py-2 '>
      <div className="logo">
        <span className='font-bold text-xl mx-8'>iTask</span>
      </div>
      <ul className="flex gap-8 mx-9">
        <li className='cur sor-pointer hover:font-bold transition-all duration-100'>Home</li>
        <li onClick={() => {const footerSection = document.getElementById('footer-section');
          footerSection?.scrollIntoView({ behavior: 'smooth' });}
        } className='cursor-pointer hover:font-bold transition-all duration-100 on'>Your Task</li>
      </ul>
    </nav>
  )
}

export default Navbar
