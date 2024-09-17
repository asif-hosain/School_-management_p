import CountCharts from "@/components/CountCharts"
import UserCard from "@/components/UserCard"

const AdminPage = () => {
  return (
    <div className='flex gap-4 p-4 flex-col  md:flex-row'>
      {/* {left} */}
      <div className="w-fill lg:w-2/3 flex flex-col gap-8">
      {/* {UserCard} */}
      <div className="flex gap-4 justify-between flex-wrap">
        <UserCard type="student"/>
        <UserCard type="teacher"/>
        <UserCard type="parent"/>
        <UserCard type="staff"/>
      </div>
      {/* {middle Chart } */}
      <div className="flex gap-4 flex-col lg:flex-row">
        {/* {count chart} */}
        <div className="w-full lg:w-1/3 h-[450px]"><CountCharts/></div>
        {/* {attendance chart } */}
        <div className="w-full lg:w-2/3 h-[450px]"></div>
      </div>
      {/* {bottomchart} */}
      <div></div>
      </div>
      {/* {right} */}
      <div className="w-fill lg:w-1/3 ">r</div>
    </div>
  )
}

export default AdminPage