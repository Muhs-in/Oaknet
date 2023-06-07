import Stars from "./Stars"

const Testcard = (props) => {
  return (
    <div className="border-2 mt-5">
        <div className="flex justify-between relative p-3">
            <div>
                <img src={props.img} alt=""  className="rounded-full w-20 h-14 -top-8 absolute ml-10"/>
            </div>

            <div>
                <Stars/>
            </div>
        </div>

        <div className="flex flex-col p-3 gap-4">
            <div className="text-gray-700 font-semibold">
                <p>{props.body}</p>
            </div>

            <div className="flex gap-3">
                <p className="font-semibold">{props.name},</p>
                <p>{props.work}</p>
            </div>
        </div>
    </div>
  )
}

export default Testcard