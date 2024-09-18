"use client"

import Image from "next/image"
import { RadialBarChart,RadialBar,ResponsiveContainer,Tooltip } from "recharts"

const data = [
  
    {
      "name": "total",
      "count": 100,
      "fill": "white",
    },
    {
      "name": "Boys",
      "count": 55,
      "fill": "#FAE27C"
    },
    {
      "name": "Girls",
      "count": 45,
      "fill": "#C3EBFA"
    }
  ]


const CountCharts = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
        {/* {title} */}
        <div className=" flex justify-between items-center">
            <h1 className="text-large font-semibold">Students</h1>
            <Image src="/moreDark.png" alt={""} width={20} height={20}/>
        </div>
        {/* {chart } */}
        <div className="w-full h-[75%] relative">
          <ResponsiveContainer>
        <RadialBarChart 
  width={730} 
  height={250} 
  innerRadius="40%" 
  outerRadius="100%" 
  data={data} 
  startAngle={0} 
  endAngle={360}
>
  <RadialBar  background  dataKey='count' />
  <Tooltip />
</RadialBarChart>
</ResponsiveContainer>
<Image src="/malefemale.png" width={50} height={50} className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" alt={""}/>
        </div>
        {/* {bottom } */}
        <div className="flex justify-center gap-16 " >
          <div className="flex flex-col gap-1">
            <div className="rounded-full w-5 h-5 bg-lamaSky"/>
            <h1 className="font-bold">1,234</h1>
            <h2 className="text-xs text-gray-300">Boy (55%)</h2>
          </div>
          <div className="flex flex-col gap-1">
            <div className="rounded-full w-5 h-5 bg-lamaYellow"/>
            <h1 className="font-bold">1,234</h1>
            <h2 className="text-xs text-gray-300">Girls (45%)</h2>
          </div>
        </div>
    </div>
  )
}

export default CountCharts