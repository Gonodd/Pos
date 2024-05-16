import GoogleMapsLink from "./GoogleMapsLink"
import facebook_icon from "../public/iconos/facebook_icon.png"
import instagram_icon from "../public/iconos/instagram_icon.png"
import phone_icon from "../public/iconos/phone_icon.png"
import youtube_icon from "../public/iconos/youtube_icon.png"
import email_icon from "../public/iconos/email_icon.png"
import linkedin_icon from "../public/iconos/linkedin_icon.png"
import Link from "next/link"



export default function Footer (){
    return(
        <div className="bg-slate-800 flex flex-row h-43 text-gray-50">
            <div className="flex basis-3/4 gap-3">
                <div className="flex flex-col p-5 basis-1/2 gap-1">
                    <div className="flex gap-2 items-center">
                        <img src={phone_icon.src} alt="" />
                        <h1>Jardín:<a href="tel:+543543652075" className="text-cyan-300"> (03543) 15652075</a></h1>
                    </div>
                    <div className="flex gap-2 items-center">
                        <img src={phone_icon.src} alt="" />
                        <h1>Primario:<a href="tel:+543543423818" className="text-cyan-300"> (03543) 423818</a></h1>
                    </div>
                    <div className="flex gap-2 items-center">
                        <img src={phone_icon.src} alt="" />
                        <h1>Secundario:<a href="tel:+543543422991" className="text-cyan-300"> (03543) 422991</a></h1>
                    </div>
                    <div className="flex gap-2 items-center">
                        <img src={email_icon.src} alt="" />
                        <h1>Email:<a href="mailto:cooperativaarguello@hotmail.com" className="text-cyan-300"> cooperativaarguello@hotmail.com</a></h1>
                    </div>
                </div>
                <div className="p-5 basis-1/3 flex flex-col gap-3">
                    <div>
                        <GoogleMapsLink/>
                    </div>
                    <h1>Direccion: Onofre Marimón esq. Gabriel Ortega Bº Argüello, Córdoba</h1>
                </div>
            </div>
            <div className="basis-1/4 flex flex-col items-center mt-10">
                <div className="flex gap-2">
                    <Link href="https://www.instagram.com/escuelabrigadier/" target="_blank">
                        <img src={instagram_icon.src} alt="" />
                    </Link>
                    <Link href="https://www.youtube.com/@escuelabrigadiersanmartina6083" target="_blank">
                        <img src={youtube_icon.src} alt="" />
                    </Link>
                    <Link href="https://www.facebook.com/Anuario.Brigadier/?locale=es_LA" target="_blank">
                    <img src={facebook_icon.src} alt="" />
                    </Link>
                </div>
                <div>
                    <Link href="https://www.linkedin.com/in/gonzalo-oddeni/" target="_blank">
                        <div className="flex items-center mt-8 ml-20">
                            <h1 className="text-xs">By GMO</h1>
                            <img src={linkedin_icon.src} alt="" />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}