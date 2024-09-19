import TableSearch from "@/components/TableSearch"
import Image from "next/image"

const TeacherListPage = () => {
  return (
    <div className="bg-white p-4 rounded-md flex-1 mt-0">
      {/* {top } */}
      <div>
        <h1>All Teachers</h1>
        <div>
          <TableSearch/>
          <div>
            <button>
              <Image src="/filter.png" alt=""/>
            </button>
          </div>
        </div>
      </div>
      {/* {List } */}
      <div></div>
      {/* {pagination} */}
      <div></div>
    </div>
  )
}

export default TeacherListPage