import quienes_somos1 from "../../public/imagenes/institucional/quienes_somos1.jpg"
import quienes_somos2 from "../../public/imagenes/institucional/quienes_somos2.jpg"
import quienes_somos3 from "../../public/imagenes/institucional/quienes_somos3.jpg"
import banner_institucional from "../../public/imagenes/institucional/banner_institucional.jpg"
import Link from "next/link"
export default function Institucional (){
    return(
    <div>
    <div className="my-10"> 
        <img src={banner_institucional.src} alt="banner"/>
    </div>
    <div className="flex flex-row">
        <div className="basis-1/2">
            <div className="font-medium text-center">
                <h1 className="text-3xl font-sans bg-cyan-500">¿Quienes somos?</h1>
            </div>
            <div className="text-xl text-justify indent-8 px-8 py-6">
                <p> 
                    La Cooperativa de Trabajo Mixta de Enseñanza de Arguello Ltda. es una organización que desarrolla sus actividades teniendo como horizonte los valores y principios cooperativos. En este sentido ha orientado siempre su tarea educativa en base al esfuerzo colectivo, la ayuda mutua, la solidaridad y la participación democrática. Asimismo, desde hace más de 40 años, la Cooperativa se sostiene de manera autogestiva, en gran parte gracias al aporte económico y humano de sus socios y socias.
                </p>
                <p>
                    Todo lo que está construido hoy fue logro de un grupo de docentes cooperativistas que trabajaron con el esfuerzo, la alegría y el entusiasmo que da la juventud. Se inició este proyecto educativo en forma conjunta; no existían niveles o jerarquías cuando se trabajaba por el bien común que era construir espacios para educar. Las relaciones humanas entre quienes formaban y forman esta escuela siempre fueron respetuosas y equitativas, base del sistema cooperativo que constituye la matriz de nuestra institución. El día que esta matriz se pierda, seremos una escuela más.
                </p>
                <p>
                    Hoy, al igual que ayer, seguimos soñando y haciendo, creciendo y creyendo en una idea de bien común, en una organización solidaria con más de 75 asociados/as y 860 estudiantes en sus tres Niveles (Inicial, Primario y Medio).
                </p>
                <p className="mt-12 font-black italic text-xl">
                    “Hay gente que ya no se pertenece que se entrega que se trasciende. Son gorriones que nunca olvidan su bandada sino que sirven a ella porque saben que no hay gorrión posible en soledad”. 
                </p>
                <p className="mt-1 font-black italic text-right text-xl">
                    Nina Ferrari
                </p>
                <Link href="historia">Conoce mas de nuestra historia</Link>
            </div>    
        </div>
        <div className="basis-1/2 flex flex-col gap-5">
            <img src={quienes_somos1.src} alt="Jardin" className="border-4 border-gray-800   rounded-xl"/>
            <img src={quienes_somos2.src} alt="Primario" className="border-4 border-gray-800 rounded-xl"/>
            <img src={quienes_somos3.src} alt="Secundario" className="border-4 border-gray-800 rounded-xl"/>
        </div>
    </div>
    </div>    
    )
}