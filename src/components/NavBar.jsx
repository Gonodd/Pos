import Link from "next/link";
import logo_encabezado from "../public/iconos/logo_encabezado.jpg"
export default function NavBar(){
    return(
        <div className="bg-white flex flex-row fixed w-full min-h-16">
            <div className="basis-1/2">
                <Link href="/"> 
                    <img src={logo_encabezado.src} alt="" />
                </Link>
            </div>    
            <div className="basis-1/2 space-x-9 flex items-center">
                <Link href="/institucional">Institucional</Link>
                <Link href="/noticias">Noticias</Link>
                <Link href="/inicial">Jardin</Link>
                <Link href="/primario">Primario</Link>
                <Link href="/medio">Secundario</Link>
            </div>
        </div>
        
    )
}