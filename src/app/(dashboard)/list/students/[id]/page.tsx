import Announcement from "@/components/Announcement"
import BigCalendar from "@/components/BigCalendar"
import Performance from "@/components/Performance"
import Image from "next/image"
import Link from "next/link"

const SingleStudentPage = () => {
  return (
    <div className="flex-1 p-4 flex flex-col gap-4 xl:flex-row">
        {/* {Left } */}
        <div className="w-full xl:w-2/3">
          {/* {TOp card} */}
          <div className="flex flex-col lg:flex-row gap-4">
            {/* {user info card} */}
            <div className="bg-lamaSky py-6 px-4 rounded-md flex-1 flex gap-4">
              <div>
              <Image 
              className="w-36 h-36 rounded-full object-cover" 
              src="https://images.pexels.com/photos/5414817/pexels-photo-5414817.jpeg?auto=compress&cs=tinysrgb&w=1200" 
              alt="" 
              width={144} height={144}
              />
              </div>
              <div className="w-2/3 flex flex-col justify-between gap-4">
              <h1 className="text-xl font-semibold">Cameron Moran</h1>
              <p className="text-sm text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, quas.</p>
              <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
              <div className="w-full md:w-1/3 lg:w-full 2xl:1/3 flex items-center gap-2">
                <Image src="/blood.png" alt="" height={14} width={14}/>
                <span>A+</span>
              </div>
              <div className="w-full md:w-1/3 lg:w-full 2xl:1/3 flex items-center gap-2">
                <Image src="/date.png" alt="" height={14} width={14}/>
                <span>January 2025</span>
              </div>
              <div className="w-full md:w-1/3 lg:w-full 2xl:1/3 flex items-center gap-2">
                <Image src="/mail.png" alt="" height={14} width={14}/>
                <span>user@gmail.com</span>
              </div>
              <div className="w-full md:w-1/3 lg:w-full 2xl:1/3 flex items-center gap-2">
                <Image src="/phone.png" alt="" height={14} width={14}/>
                <span>+1 234 567 89</span>
              </div>
              </div>
              </div>
            </div>
            {/* { small cards } */}
           <div className="flex-1 flex justify-between gap-4 flex-wrap">
            {/* { card } */}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image src="/singleAttendance.png" alt=""
              width={24}
              height={24}
              className="h-5 w-6"/>
              <div>
                <h1 className="text-xl font-semibold">90%</h1>
                <span className="text-sm text-gray-400">Attendance</span>
              </div>
            </div>

            {/* { card } */}
           <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image src="/singleAttendance.png" alt=""
              width={24}
              height={24}
              className="h-5 w-6"/>
              <div>
                <h1 className="text-xl font-semibold">6th</h1>
                <span className="text-sm text-gray-400">Grade</span>
              </div>
            </div>

            {/* { card } */}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image src="/singleLesson.png" alt=""
              width={24}
              height={24}
              className="h-5 w-6"/>
              <div>
                <h1 className="text-xl font-semibold">18</h1>
                <span className="text-sm text-gray-400">Lessons</span>
              </div>
            </div>

            {/* { card } */}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image src="/singleClass.png" alt=""
              width={24}
              height={24}
              className="h-5 w-6"/>
              <div>
                <h1 className="text-xl font-semibold">6A</h1>
                <span className="text-sm text-gray-400">Class</span>
              </div>
            </div>

           </div>
          </div>
          {/* { bottom } */}
           <div className="mt-4 bg-white rounded-md p-4 h-[800px]"> 
            <h1>Student&apos;s Schedule</h1>
            <BigCalendar/>
           </div>
        </div> 
        {/* {Right } */}
        <div className="w-full xl:w-1/3 flex flex-col gap-4">
        <div className="bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Shortcuts</h1>
          <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
            <Link className="p-3  rounded-md bg-lamaSky" href="/">Student&apos;s lessons</Link>
            <Link className="p-3  rounded-md bg-lamaPurple" href="/">Student&apos;s Teachears</Link>
            <Link className="p-3  rounded-md bg-lamaYellow" href="/">Student&apos;s Exams</Link>
            <Link className="p-3  rounded-md bg-pink-50" href="/">Student&apos;s Assignments</Link>
            <Link className="p-3  rounded-md bg-lamaSky" href="/">Student&apos;s Results</Link>
            
          </div>
        </div>
        <Performance/>
        <Announcement/>
        </div>
    </div>
  )
}

export default SingleStudentPage