"use client"

import Image from 'next/image';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Mon',
    present: 60,
    absent: 40,
  },
  {
    name: 'Tue',
    present: 70,
    absent: 30,
  },
  {
    name: 'Thu',
    present: 80,
    absent: 20,
  },
  {
    name: 'Fri',
    present: 75,
    absent: 25,
  },
  {
    name: 'Sat',
    present: 88,
    absent: 12,
  },
  {
    name: 'Sun',
    present: 65,
    absent: 35,
  },
  
];

const AtendanceChart = () => {
  return (
    <div className='bg-white rounded-lg p-4 h-full'>
    <div className='flex justify-between'>
      <h1 className='text-lg font-semibold'>Attendance</h1>
      <Image src="/moreDark.png" height={20} width={20} alt={''}/>
    </div>
    <ResponsiveContainer width="100%" height="90%">
        <BarChart
          width={500}
          height={300}
          data={data}
          barSize={20}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke='#ddd'/>
          <XAxis dataKey="name" tick={{fill:"#d1d5db"}} tickLine={false} axisLine={false} />
          <YAxis axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false} />
          <Tooltip contentStyle={{ borderRadius:"10px", borderColor:"grey"}} />
          <Legend align='left' verticalAlign='top' wrapperStyle={{ paddingTop: "20px", paddingBottom:"40px"}}/>
          <Bar dataKey="present" fill="#FAE27C" activeBar={<Rectangle/>}
          legendType='circle' radius={[10,10,0,0]} />
          <Bar dataKey="absent" fill="#C3EBFA" activeBar={<Rectangle/>} legendType='circle' radius={[10,10,0,0]}/>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default AtendanceChart