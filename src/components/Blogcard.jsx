const Blogcard = (props) => {
  return (
    <div className="border-2 p-2 rounded-lg hover:bg-purple-50 bg-white">
        <div>
            <img src={props.img} alt="" className="rounded-lg p-3 object-cover w-full border"/>
        </div>

        <div className="flex justify-between">
            <div className="flex gap-3 m-3">
                <div><img src="/images/bookmark.png" alt="" /></div>
                <div className="text-md">{props.area}</div>
            </div>

            <div className="flex gap-3 m-3">
                <div><img src="/images/date.png" alt="" className="w-8"/></div>
                <div className="text-mdtext-gray-600">{props.date}</div>
            </div>
        </div>

        <div className="flex flex-col gap-3">
            <div className="text-gray-900 font-semibold text-2xl">{props.title}</div>
            <div className="text-md text-gray-600">{props.body}</div>
        </div>

        <div className="flex gap-4 mt-4 group">
            <button className="text-gray-900 font-semibold group-hover:text-purple-700">Read More</button>
            <img src="/images/double-arrows.png" alt="" className="w-7 text-gray-900"/>
        </div>
    </div>
  )
}

export default Blogcard