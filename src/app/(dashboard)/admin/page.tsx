import UserCard from "@/components/UserCard"

const AdminPage = () => {
  return (
    <div className='flex gap-4 p-4 flex-col md:flex-row'>
      {/* {left} */}
      <div className="w-fill lg:2/3">l
      {/* {UserCard} */}
      <div className="flex gap-4 justify-between">
        <UserCard type="student"/>
        <UserCard type="teacher"/>
        <UserCard type="parent"/>
        <UserCard type="staff"/>
      </div>
      </div>
      {/* {right} */}
      <div className="w-fill lg:1/3">r</div>
    </div>
  )
}

export default AdminPage