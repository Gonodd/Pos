import Link from "next/link";
import maps_icon from "../public/iconos/maps_icon.png"


export default function GoogleMapsLink () {
    const googleMapsUrl = "URL_DE_LA_UBICACION_EN_GOOGLE_MAPS";    
    return (
            <div>
                <Link href="https://www.google.com/maps/place/Instituto+Secundario+Brigadier+Mayor+%22Juan+I.+San+Mart%C3%ADn%22/@-31.3213358,-64.2639297,15.38z/data=!4m6!3m5!1s0x94329c6d2f21cd93:0x6f0be181c0756f0a!8m2!3d-31.3209027!4d-64.2568143!16s%2Fg%2F11bw21pg21?entry=ttu" target="_blank" rel="noopener noreferrer">
                    <div className="flex items-center">
                        <h1>Localización</h1>
                        <img src={maps_icon.src} alt="" />
                    </div>
                
                </Link>
            </div>
            );
};
