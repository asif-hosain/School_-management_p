import Menu from "@/components/Menu";
import NavBar from "@/components/NavBar";
import Link from "next/link";

export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className=" h-screen flex">
      <div className="w-[14%] md:w-[8%] lg:w-[16%]  xl:w-[14%]">
        <Link href="/" className="flex items-center justify-center gap-2  lg:justify-start p-4">
        <img src="/logo.png" alt="logo" width={32} height={32} className=""/>
        <span className="hidden font-bold lg:block">ScloolLama</span>
        </Link>
        <Menu/>
      </div>
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll" >
        <NavBar/>
        {children}
      </div>
      </div>
    );
  }