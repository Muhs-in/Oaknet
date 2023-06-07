const Works = () => {
  return (
    <section className="mt-20">
        <div>
            <h2 className="text-center text-4xl font-semibold text-[#0691F2]">MY PORTFOLIO</h2>
            <h1 className="font-bold text-2xl text-center mt-3">MY LATEST WORKS</h1>
        </div>

        <div className="mt-5">
            <ul className="flex justify-between text-[#323546] cursor-pointer">
                <li>Motion Graphic</li>
                <li>Web Design</li>
                <li>Web Development</li>
                <li>Mobile App</li>
                <li>Graphic Design</li>
            </ul>
        </div>

        <div className="grid grid-cols-3 gap-2 mt-5">

          <div className="grid row-span-2">
            <img src="/images/code1.jpg" alt=""/>
          </div>

          <div className="bg-red-400 h-full">
            <img src="/images/code2.jpg" alt=""/>
          </div>

          <div className="bg-blue-200">
            <img src="/images/code3.jpg" alt="" />
          </div>
          
          <div className="bg-blue-200">
            <img src="/images/code5.jpg" alt="" />
          </div>

          <div className="bg-green-200">
            <img src="/images/code6.jpg" alt=""/>
          </div>

        </div>
        
    </section>
  )
}

export default Works