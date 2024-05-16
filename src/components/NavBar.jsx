import Link from "next/link";
import logo_encabezado from "../public/iconos/logo_encabezado.jpg"
export default function NavBar(){
    return(
        <div className="bg-white flex flex-row fixed w-full min-h-16 border-b-4 border-blue-500">
            <div className="basis-1/3">
                <Link href="/"> 
                    <img src={logo_encabezado.src} alt="" />
                </Link>
            </div>    
            <div className="basis-1/2 space-x-9 flex">
                <div className="flex items-center hover:bg-red-500 hover:text-white">
                    <Link className="p-2 text-xl" href="/institucional">Institucional</Link>
                </div>
                <div className="flex items-center hover:bg-orange-500 hover:text-white">
                <Link className="p-2 text-xl" href="/noticias">Noticias</Link>
                </div>
                <div className="flex items-center hover:bg-yellow-500 hover:text-white">
                <Link className="p-2 text-xl" href="/inicial">Jardin</Link>
                </div>
                <div className="flex items-center hover:bg-green-500 hover:text-white">
                <Link className="p-2 text-xl" href="/primario">Primario</Link>
                </div>
                <div className="flex items-center hover:bg-cyan-500 hover:text-white">
                <Link className="p-2 text-xl" href="/medio">Secundario</Link>
                </div>
            </div>
        </div>
        
    )
}