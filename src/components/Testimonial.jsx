import Testcard from './Testcard'
import web from "/images/web.svg"
import gdesign from "/images/gdesign.svg"
import ux from "/images/ux.svg"

const Testimonial = () => {
  return (
    <section className="mt-20">
        <div className="mt-10 gap-4">
            <h1 className="text-center text-4xl font-semibold text-[#0691F2]">TESTIMONIALS</h1>
            <h2 className="text-2xl text-gray-900 text-center font-semibold">WHAT OUR HAPPY CLIENTS ARE SAYING</h2>
        </div>

        <div className='mt-20 grid grid-cols-3 gap-4 bg-white'> 
            <Testcard
              img = {web}

              body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dicta laborum nisi quidem beatae sit praesentium natus, sint asperiores ullam molestias! Recusandae laborum odit quos itaque molestias dicta, veritatis distinctio?"

              name = "Muhsin Ibrahim"

              work = "Author of Bad Code"
            />

                <Testcard

              img = {gdesign}

              body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dicta laborum nisi quidem beatae sit praesentium natus, sint asperiores ullam molestias! Recusandae laborum odit quos itaque molestias dicta, veritatis distinctio?"

              name = "Ilhan Burale"

              work = "Author of Entato"
            />

                <Testcard
              img = {ux}

              body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dicta laborum nisi quidem beatae sit praesentium natus, sint asperiores ullam molestias! Recusandae laborum odit quos itaque molestias dicta, veritatis distinctio?"

              name = "Joel Mutisya"

              work = "Director of Kwame Constructions"
            />
        </div>
    </section>
  )
}

export default Testimonial