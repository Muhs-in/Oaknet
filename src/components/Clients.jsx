const Clients = () => {
  return (
    <section className="mt-20 bg-white">
        <h1 className="text-center text-4xl font-semibold text-[#0691F2]">MY CLIENTS</h1>

        <div className="mt-5">
            <ul className="flex justify-between">
                <li><img src="../src/images/bbc.png" alt="" className="w-20" /></li>
                <li><img src="../src/images/ebay.png" alt="" className="w-20"/></li>
                <li><img src="../src/images/cw.png" alt="" className="w-20"/></li>
                <li><img src="../src/images/hulu.png" alt="" className="w-20"/></li>
                <li><img src="../src/images/netflix.png" alt="" className="w-20"/></li>
            </ul>
        </div>
    </section>
  )
}

export default Clients