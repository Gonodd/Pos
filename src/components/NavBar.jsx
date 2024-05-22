"use client"
import Link from "next/link";
import logo_encabezado from "../public/iconos/logo_encabezado.jpg"
import { usePathname } from "next/navigation";

export default function NavBar(){
    const pathname = usePathname()
    return(
        <div className="bg-white flex flex-row fixed w-full min-h-16 border-b-4 border-blue-500">
            <div className="basis-1/3">
                <Link href="/"> 
                    <img src={logo_encabezado.src} alt="" />
                </Link>
            </div>    
            <div className="basis-1/2 space-x-9 flex">
                <div className={`flex items-center ${pathname === "/institucional" ? "bg-red-500 text-white" : ""} hover:bg-red-500 hover:text-white `}>
                    <Link className="p-2 text-xl" href="/institucional">Institucional</Link>
                </div>
                <div className={`flex items-center ${pathname === "/noticias" ? "bg-orange-500 text-white" : ""} hover:bg-orange-500 hover:text-white `}>
                    <Link className="p-2 text-xl" href="/noticias">Noticias</Link>
                </div>
                <div className={`flex items-center ${pathname === "/inicial" ? "bg-yellow-500 text-white" : ""} hover:bg-yellow-500 hover:text-white `}>
                    <Link className="p-2 text-xl" href="/inicial">Jardin</Link>
                </div>
                <div className={`flex items-center ${pathname === "/primario" ? "bg-green-500 text-white" : ""} hover:bg-green-500 hover:text-white `}>
                    <Link className="p-2 text-xl" href="/primario">Primario</Link>
                </div>
                <div className={`flex items-center ${pathname === "/medio" ? "bg-cyan-500 text-white" : ""} hover:bg-cyan-500 hover:text-white `}>
                    <Link className="p-2 text-xl" href="/medio">Secundario</Link>
                </div>
            </div>
        </div>
        
    )
}