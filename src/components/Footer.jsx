const Footer = () => {
  return (
    <footer className="bg-[#353847] flex justify-between mt-10 p-5">
        <div className="flex flex-col gap-5 p-10">
            <div className=" text-white w-40">
                <h1 className="text-3xl font-bold mb-3">Muhsin</h1>
                <p className="font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem vel culpa ipsam quia laboriosam.</p>
            </div>

            <div className="flex gap-3">
                <img src="../src/images/facebook.svg" alt="" />
                <img src="../src/images/instagram.svg" alt="" />
                <img src="../src/images/linkedin.svg" alt="" />
            </div>
        </div>

        <div className="flex flex-col gap-3 justify-center">
            <h1 className="text-2xl font-semibold text-white">About</h1>
            <ul className="flex flex-col text-xl font-normal text-white gap-4">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Testimonials</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Apps</a></li>
            </ul>
        </div>

        <div className="flex flex-col gap-3 justify-center">
            <h1 className="text-2xl font-semibold text-white">Services</h1>
            <ul className="flex flex-col text-xl font-normal text-white gap-4">
                <li><a href="#">Graphic Design</a></li>
                <li><a href="#">UI/UX Design</a></li>
                <li><a href="#">Web Development</a></li>
                <li><a href="#">Mobile App</a></li>
            </ul>
        </div>

        <div className="flex flex-col gap-3 justify-center">
            <h1 className="text-2xl font-semibold text-white">Resources</h1>
            <ul className="flex flex-col text-xl font-normal text-white gap-4">
                <li><a href="#">Account</a></li>
                <li><a href="#">Support Center</a></li>
                <li><a href="#">Feedback</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
        </div>

        <div className="flex flex-col gap-3 justify-center p-2">
            <div className="flex flex-col gap-3 justify-center">
                <h1 className="text-2xl font-semibold text-white">Get in Touch</h1>
                <p className="font-normal text-white text-lg">Question or feedback?</p>
                <p className="font-normal text-white text-lg">We'd love to hear from you</p>
            </div>

            <div className="flex relative">
                <input type="text" name="" id="" placeholder="Email Address" className="p-3 rounded-full bg-[#353847] border-2"/>
                <img src="/images/sent.svg" alt="" className="absolute right-6 top-4"/>
            </div>
        </div>


       
        
    </footer>
  )
}

export default Footer