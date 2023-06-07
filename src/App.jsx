import About from "./components/About"
import Blog from "./components/Blog"
import Clients from "./components/Clients"
import Cto from "./components/Cto"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Services from "./components/Services"
import Stats from "./components/Stats"
import Testimonial from "./components/Testimonial"
import Works from "./components/Works"


const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Clients/>
    <About/>
    <Works/>
    <Services/>
    <Stats/>
    <Blog/>
    <Testimonial/>
    <Cto/>
    <Footer/>
    </>
  )
}

export default App