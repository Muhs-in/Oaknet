import React from 'react'

const Navbar = () => {
  return (
    <header>
    <nav className='flex justify-between mt-6'>
      <div className="text-3xl font-bold text-[#0691f2]">Muhsin.</div>
      <div className="nav-links">
        <ul className='flex gap-8 justify-center items-center mt-2'>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Testimonial</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Services</a></li>
        </ul>
      </div>
      <div className="ring-2 ring-blue-400 text-white bg-[#5F4ACA] p-2 items-center rounded-xl cursor-pointer">Contact Me</div>
    </nav>
 </header>
  )
}

export default Navbar