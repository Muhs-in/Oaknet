const About = () => {
  return (
    <section className="mt-10 flex justify-between">
        <div className="w-2/4">Left Column</div>
        <div className="2/4 mt-5">
            <div className="flex flex-col gap-3">
                <h2 className="text-2xl text-[#0691f2]">About Me</h2>
                <h1 className="text-3xl font-bold text-[#323546] mt-2">LEARN ABOUT ME & CHECK OUT MY PROJECTS</h1>
                <p className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic neque, blanditiis cupiditate quod.</p>
            </div>

            <div className="flex gap-5">
                <button className="text-white bg-[#5F4ACA] rounded-xl p-2 w-1/6 mt-3">Know More</button>
                <button className="border-2 rounded-xl w-1/6 hover:bg-slate-300 mt-3">My Resume</button>
            </div>
        </div>
    </section>
  )
}

export default About