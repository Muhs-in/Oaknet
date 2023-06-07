const About = () => {
  return (
    <section className="mt-20 flex justify-between gap-11 bg-white">
        <div className="w-2/4">
        <img src="/images/me.jpg" alt="" className="rounded-xl mr-0 h-96 w-96"/>
        </div>
        
        <div className="w-2/4 mt-5 ml-5">
            <div className="flex flex-col gap-4">
                <h2 className="text-2xl text-[#0691f2]">About Me</h2>
                <h1 className="text-3xl font-bold text-[#323546] mt-2">LEARN ABOUT ME & CHECK OUT MY PROJECTS</h1>
                <p className="text-xl text-gray-900">I am a tech enthusiast and a dependable candidate successful at managing multiple priorities at hand with a positive attitude. I have a sturdy willingness to take on added responsibilities to meet my team's goals and objectives.
                Eager to learn more about the tech industry in order to bolster my skills to become a full-stack engineer.</p>
            </div>

            <div className="flex gap-5 mt-5">
                {/* <button className="text-white text-2xl font-semibold bg-[#5F4ACA] ring-blue-400 ring-2 rounded-xl p-2 w-1/2">Know More</button> */}
                <button className="ring-2 ring-gray-400 font-semibold border-2 rounded-xl w-1/2 h-20 hover:bg-slate-300 text-xl">My Resume</button>
            </div>
        </div>
    </section>
  )
}

export default About