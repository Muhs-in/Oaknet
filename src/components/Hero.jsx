const Hero = () => {
  return (
    <section className="flex justify-between mt-10">
        <div className="flex flex-col w-2/4 gap-4">
            <h1 className="text-8xl font-semibold">Hey! I Am Muhsin Ibrahim</h1>
            <p className="mt-5 text-lg font-semibold text-[#323546]">UI/UX Designer & Frontend Web Developer currently on an assignment at Oaknet Business Center</p>

            <div className="mt-5 flex gap-8">
                <button className="text-white font-bold bg-[#5F4ACA] ring-blue-400 ring-2 rounded-xl p-3 w-1/2 h-20 text-4xl">Hire Me</button>
                <button className="ring-2 ring-gray-400 border-2 font-bold rounded-xl w-1/3 text-2xl hover:bg-slate-300">Know More</button>
            </div>

            <div className="mt-5 flex gap-5">
              <img src="../src/images/design.png" alt="" className="w-8" />
              <p className="text-lg">Web Designer and Developer specialized in the React JS library</p>
            </div>

            <div className="mt-5">
              <ul className="flex justify-between items-center w-full">
                <li><img src="/images/apple.png" alt="" srcset="" className="w-20"/></li>
                <li><img src="/images/google.png" alt="" srcset="" className="w-12"/></li>
                <li><img src="/images/facebook.png" alt="" srcset="" className="w-10" /></li>
                <li><img src="/images/envato.png" alt="" srcset="" className="w-10"/></li>
                <li><img src="/images/amazon.png" alt="" srcset="" className="w-10"/></li>
              </ul>
            </div>
        </div>

            <img src="/images/programming.png" alt="" className="w-20 h-20 absolute -right-0 top-72"/>
            <img src="/images/programming.png" alt="" className="w-10 h-10 absolute right-72" />

            
        <div>
            <img src="/images/me.jpg" alt="" className="rounded-full h-96 w-96"/>
        </div>
    </section>
  )
}

export default Hero