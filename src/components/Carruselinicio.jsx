"use client"

import { useState } from "react"
import banner1 from "../public/imagenes/inicio/banner1.jpg"
import banner2 from "../public/imagenes/inicio/banner2.jpg"
import banner3 from "../public/imagenes/inicio/banner3.jpg"
import banner4 from "../public/imagenes/inicio/banner4.jpg"
import Link from "next/link"

export default function Carrucelinicio (){
    const imagenes = [banner1.src, banner4.src, banner2.src, banner3.src ]
    const vinculos = ["/institucional", "/inicial","/primario", "/medio"]
    const [indice,setIndice] = useState(0);


    const prevSlide = () => {
        const isFirstSlide = indice === 0;
        const newIndex = isFirstSlide ? imagenes.length - 1 : indice - 1;
        setIndice(newIndex);
    };
    const nextSlide = () => {
        const isLastSlide = indice === imagenes.length - 1;
        const newIndex = isLastSlide ? 0 : indice + 1;
        setIndice(newIndex);
    };

    return(
        <div className="relative w-full h-64 overflow-hidden">
            <div className="flex transition-transform duration-300" style={{ transform: `translateX(-${indice * 100}%)` }}>
                {imagenes.map((image, index) => (
                            <img key={index} 
                                src={image}
                                alt={`Slide ${index}`}
                                className="w-full h-full object-cover"
                                />
                            ))}
        </div>
        <button onClick={prevSlide} className="absolute top-1/2 left-0 transform -translate-y-1/2 px-4 py-2">
            ⬅️
        </button>
        <button onClick={nextSlide} className="absolute top-1/2 right-0 transform -translate-y-1/2 px-4 py-2">
            ➡️
        </button>
    </div>
    )
}