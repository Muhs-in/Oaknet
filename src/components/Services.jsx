import Card from "./Card"
import design from "/images/design.svg"
import mobile from "/images/mobile.svg"
import gdesign from "/images/gdesign.svg"
import web from "/images/web.svg"
import mgraphics from "/images/mgraphics.svg"
import ux from "/images/ux.svg"

const Services = () => {
  return (
    <section className="mt-20">
       
        <div className="mt-10">
            <h1 className="text-center text-4xl font-semibold text-[#0691F2]">SERVICES</h1>
            <h2 className="text-2xl text-gray-900 text-center font-semibold">SERVICES I DO PROVIDE</h2>
        </div>

        <div className="grid grid-cols-3 grid-rows-2 gap-7 p-3 mt-8">
            <Card
            img = {design}
            title = "User Interface"
            content =" Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas soluta id, sequi iure nemo hic laboriosam laborum provident perferendis aspernatur voluptate amet minima. Sunt adipisci ea temporibus assumenda! Quaerat, dolor.
            Ipsam veritatis quam voluptatibus sit iste est ratione soluta itaque animi vel. Aliquid qui a id. Obcaecati accusamus velit harum, nulla ex quod at sapiente alias qui! Est, dolor ab?"
            />

<Card
            img = {ux}
            title = "User Experience Design"
            content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas soluta id, sequi iure nemo hic laboriosam laborum provident perferendis aspernatur voluptate amet minima. Sunt adipisci ea temporibus assumenda! Quaerat, dolor.
            Ipsam veritatis quam voluptatibus sit iste est ratione soluta itaque animi vel. Aliquid qui a id. Obcaecati accusamus."
            />

<Card
            img = {gdesign}
            title = "Graphic Design"
            content =" Lorem ipsum doloue animi vel. Aliquid qui a id. Obcaecati accusamus velit harum, nulla ex quod at sapiente alias qui! Est, dolor ab?"
            />

<Card
            img = {mobile}
            title = "Mobile App Design"
            content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas soluta id, sequi iure nemo hic laboriosam laborum provident perferendis aspernatur voluptate amet minima. Sunt adipisci ea temporibus assumenda! Quaerat, dolor.
            Ipsam veritatis quam voluptatibus sit iste est ratione soluta itaque animi vel. Aliquid qui a id. Obcaecati accusamus velit harum.?"
            />

<Card
            img = {mgraphics}
            title = "Motion Graphic Design"
            content =" Lorem ipsum us sit iste est ratione soluta itaque animi vel. Aliquid qui a id. Obcaecati accusamus velit harum, nulla ex quod at sapiente alias qui! Est, dolor ab?"
            />

<Card
            img = {web}
            title = "Web Development Design"
            content =" Lratione soluta itaque animi vel. Aliquid qui a id. Obcaecati accusamus velit harum, nulla ex quod at sapiente alias qui! Est, dolor ab?"
            />
        </div>
    </section>
  )
}

export default Services