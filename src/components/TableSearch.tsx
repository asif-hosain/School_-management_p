const TableSearch = () => {
  return (
    <div className="w-full md:w-auto flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-grey-300 px-2">
        <img src="/search.png" alt="" width={14} height={14} />
        <input type="text" placeholder="Search..." className="w-[200] p-2 bg-transparent outline-none"/>
      </div>
  )
}

export default TableSearch