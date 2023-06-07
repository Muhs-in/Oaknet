import Blogcard from "./Blogcard"
import mobile from "/images/mobile.svg"
import web from "/images/web.svg"
import gdesign from "/images/gdesign.svg"

const Blog = () => {
  return (
    <section className="mt-20">
        <div>
            <div className="flex flex-col">
                <h1 className="text-center text-4xl font-semibold text-[#0691F2]">BLOG AND NEWS</h1>
                <h2 className="text-2xl text-gray-900 text-center font-semibold">LATEST FROM BLOG</h2>

                <div className="flex justify-end">
                <button><img src="/images/left-arrow.png" alt="" className="w-12"/></button>
                <button><img src="/images/right-arrow.png" alt="" className="w-12 "/></button>
            </div>
            </div>

           
        </div>

        <div className="grid grid-cols-3 gap-4 mt-10">
            <Blogcard
                img = {gdesign}
                area = "Development"
                date = "15th Oct, 2023"
                title= "Medium Based Blog UI/UX Together Insightful"
                body = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa consequatur eum non, esse nobis omnis incidunt blanditiis quis rem. Assumenda consectetur facere delectus! Ratione fugiat quae quidem. Eius, alias impedit."
            
            />

            <Blogcard
                img = {web}
                area = "Web Dev"
                date = "18th May, 2023"
                title= "Medium Based Blog For Web Development"
                body = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa consequatur eum non, esse nobis omnis incidunt blanditiis quis rem. Assumenda consectetur facere delectus! Ratione fugiat quae quidem. Eius, alias impedit."
            
            />

            <Blogcard
                img = {mobile}
                area = "Mobile Dev"
                date = "20th July, 2023"
                title= "Medium Based Blog For Mobile App Design"
                body = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa consequatur eum non, esse nobis omnis incidunt blanditiis quis rem. Assumenda consectetur facere delectus! Ratione fugiat quae quidem. Eius, alias impedit."
            
            />
        </div>
    </section>
  )
}

export default Blog