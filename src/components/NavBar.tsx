const NavBar = () => {
  return (
    <div className='flex items-center justify-between p-4'>

      <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-grey-300 px-2">
        <img src="/search.png" alt="" width={14} height={14} />
        <input type="text" placeholder="Search..." className="w-[200] p-2 bg-transparent outline-none"/>
      </div>

      <div className="flex items-center gap-6 justify-end w-full">
        <div className="bg-white rounded-full h-6 w-6 items-center justify-center cursor-pointer">
          <img src="/message.png" alt="" height={20} width={20} />
        </div>
        <div className="bg-white rounded-full h-6 w-6 items-center justify-center cursor-pointer relative">
          <img src="/announcement.png" alt="" height={20} width={20}  />
          <div className="absolute -top-3 -right-3 w-5 h-5 flex rounded-full items-center justify-center bg-purple-500 text-white text-xs">1</div>
        </div>
        <div className="flex flex-col">
          <span className="text-xs leading-3 font-medium">John Doe</span>
          <span className="text-[10px] text-grey-500 text-right"> Admin </span>
        </div>
        <img src="/avatar.png" alt="" height={36} width={35} className="rounded-full"/>
      </div>
        
    </div>
  )
}

export default NavBar