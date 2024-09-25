"use client"

import Image from "next/image";
import { useState } from "react";

const FormModal = ({table,type,data,id}:{
    table:"teacher" | "student" | "parent" | "subject" |  "class" |  "lesson" |  "exam" |  "assignment" |  "result" |  "attendance" |  "announcement" ;  
    type:"create" | "update" | "delete" ;
    data?:any;
    id?:number;
}) => {

    const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
    const bgColor = 
    type === "create" ? 
    "bg-lamaYellow" 
    : type === "update" 
    ? "bg-lamaSky"
    : "bg-lamaPurple";

      const [open, setOpen] = useState(false);

  return (
    <>
    <button className={`${size} flex items-center justify-center rounded-full ${bgColor} `}
    onClick={()=>setOpen(true)}
    >
        <Image src={`/${type}.png`} alt="" width={16} height={16}  />
    </button>
    {open && 
    <div className="h-screen absolute  left-0 top-0 bg-black bg-opacity-60 z-50 flex items-center justify-center w-screen">
        <div className="bg-white p-4 rounded-md">Hello</div>
      </div>
      }
    </>
  )
}

export default FormModal