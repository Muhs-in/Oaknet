const Card = (props) => {
  return (
    <div className="flex flex-col flex-nowrap border-2 rounded-xl gap-5 p-5 bg-white relative">
        {/* <div className="bg-blue-100 p-3 rounded-lg w-1/4 block h-5">
            <div>{props.icon}</div>
        </div>

        <div className="gap-4">
            <h1 className="text-xl text-gray-900 font-bold mb-2">{props.title}</h1>
            <p className="text-gray-500 text-sm">{props.content}</p>
        </div>

        <div className="flex gap-4 cursor-pointer">
            <button className="flex flex-col flex-end items-center">Explore More</button>
            <img src="../src/images/icon-right.png" alt="" />
        </div> */}
      <div className="flex flex-col gap-4 mb-3">
        <div className="flex flex-col gap-3">
          <img src={props.img} alt="" className="border-2 rounded-xl w-12" />
          <h1 className="text-xl text-gray-900 font-bold mb-2">{props.title}</h1>
          <p className="text-gray-500 text-sm">{props.content}</p>
        </div>

        <div className="flex gap-4 absolute bottom-0">
          <button>Explore More</button>
          <img src="/images/icon-right.png" alt="" />
        </div>
      </div>
        
    </div>
  )
}

export default Card