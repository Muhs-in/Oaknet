const Hero = () => {
  return (
    <section className="flex justify-between mt-10">
        <div className="flex-col w-2/4">
            <h1 className="text-8xl font-semibold">Hey! I Am Muhsin Ibrahim</h1>
            <p className="mt-5 text-lg font-semibold text-[#323546]">UI/UX Designer & Digital Creative Director working in design field for 4 years now specializing in UI Design</p>

            <div className="mt-5 flex gap-8">
                <button className="text-white bg-[#5F4ACA] rounded-xl p-3 w-1/6">Hire Me</button>
                <button className="border-2 rounded-xl w-1/6 hover:bg-slate-300">Know More</button>
            </div>

            <div className="mt-5 flex gap-5">
              <img src="../src/images/design.png" alt="" className="w-8" />
              <p className="text-lg">Product Designer and Developer specialized in UI/UX</p>
            </div>

            <div className="mt-5">
              <ul className="flex justify-between items-center w-full">
                <li><img src="../src/images/apple.png" alt="" srcset="" className="w-20"/></li>
                <li><img src="../src/images/google.png" alt="" srcset="" className="w-12"/></li>
                <li><img src="../src/images/facebook.png" alt="" srcset="" className="w-10" /></li>
                <li><img src="../src/images/envato.png" alt="" srcset="" className="w-10"/></li>
                <li><img src="../src/images/amazon.png" alt="" srcset="" className="w-10"/></li>
              </ul>
            </div>
        </div>


        <div>
            Right Column
        </div>
    </section>
  )
}

export default Hero