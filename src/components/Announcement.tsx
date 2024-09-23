
const Announcement = () => {
  return (
    <div className="bg-white p-4 rounded-md">
         <div className="flex items-center justify-between">
            <h1 className=" text-xl font-semibold my-4">Announcements</h1>
            <span className="text-xs text-gray-400 ">View All</span>
        </div>
        <div className=" flex flex-col gap-4">
             <div className=" bg-lamaSky rounded-md p-4">
                <div className="flex items-center justify-between">
                    <h2 className="font-medium">Lorem ipsum dolor sit.</h2>
                    <span className="text-xs text-gray-400 bg-white rounded-md p-1">2025-1-1</span>
                </div>
                <p className="text-sm text-gray-400 mt-1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo numquam consectetur provident nihil unde dignissimos ducimus repudiandae sequi dolorum expedita!</p>
             </div>

             <div className=" bg-lamaPurple rounded-md p-4">
                <div className="flex items-center justify-between">
                    <h2 className="font-medium">Lorem ipsum dolor sit.</h2>
                    <span className="text-xs text-gray-400 bg-white rounded-md p-1">2025-1-1</span>
                </div>
                <p className="text-sm text-gray-400 mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque hic quia quis delectus, dolor optio blanditiis rerum cupiditate facilis suscipit!</p>
             </div>

             <div className=" bg-lamaYellow rounded-md p-4">
                <div className="flex items-center justify-between">
                    <h2 className="font-medium">Lorem ipsum dolor sit.</h2>
                    <span className="text-xs text-gray-400 bg-white rounded-md p-1">2025-1-1</span>
                </div>
                <p className="text-sm text-gray-400 mt-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae beatae at numquam voluptates provident eaque nulla cum id ipsam asperiores?</p>
             </div>

             
        </div>
       
    </div>
  )
}

export default Announcement