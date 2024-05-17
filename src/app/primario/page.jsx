import areas_nivel_primario from "../../public/imagenes/niveles/primario/areas_nivel_primario.jpg"
import artes_visuales1 from "../../public/imagenes/niveles/primario/artes_visuales1.jpg"
import artes_visuales2 from "../../public/imagenes/niveles/primario/artes_visuales2.jpg"
import banner_nivel_primario from "../../public/imagenes/niveles/primario/banner_nivel_primario.jpg"
import educacion_fisica_primario from "../../public/imagenes/niveles/primario/educacion_fisica_primario.jpg"
import equipo_primario from "../../public/imagenes/niveles/primario/equipo_primario.jpg"
import informatica1 from "../../public/imagenes/niveles/primario/informatica1.jpg"
import informatica2 from "../../public/imagenes/niveles/primario/informatica2.jpg"
import ingles_primario from "../../public/imagenes/niveles/primario/ingles_primario.jpg"
import musica_primario from "../../public/imagenes/niveles/primario/musica_primario.jpg"
import nivel_primario from "../../public/imagenes/niveles/primario/nivel_primario.jpg"
import teatro_primario1 from "../../public/imagenes/niveles/primario/teatro_primario1.jpg"
import teatro_primario2 from "../../public/imagenes/niveles/primario/teatro_primario2.jpg"

export default function Primario(){
    return(
        <div className="mt-10">
            <div>
                <img src={banner_nivel_primario.src} alt="" />
                <h1 className="text-center text-4xl bg-cyan-500 text-white italic p-2">Nivel Primario</h1>
            </div>
            <div className="flex items-center">
                <div className="basis-1/2 p-5 flex flex-col gap-2">
                    <p className="text-justify indent-8">La escuela es un lugar donde aprendemos con otros, y en esta convivencia, desarrollamos habilidades para compartir, discernir y crecer.</p>
                    <p className="text-justify indent-8">Nuestro principal objetivo es lograr que los estudiantes tengan la posibilidad de ampliar y enriquecer su conocimiento social y cultural, brindando la posibilidad de ser protagonistas de su propio aprendizaje, generando propuestas que afiancen y promuevan el pensamiento reflexivo, crítico y creativo, desde el trabajo cooperativo colaborativo.</p>
                    <p className="text-justify indent-8">Desde la gestión y el diseño del plan pedagógico de la escuela, buscamos garantizar la trayectoria escolar en los tres niveles educativos, sistematizando y seleccionando articuladamente, aprendizajes y contenidos fundamentales, vigentes en la Provincia de Córdoba, focalizados en el desarrollo de las capacidades fundamentales.</p>
                </div>
                <div className="basis-1/2 p-5">
                    <img src={nivel_primario.src} alt="" className="border-4 border-violet-600 rounded-3xl shadow-xl hover:scale-105"/>
                </div>
            </div>
            <div>
                <h1 className="text-3xl bg-cyan-500 text-white italic p-2">Propuesta Pedagógica</h1>
            </div>
            <div className="flex flex-row-reverse items-center">
                <div className="basis-1/2 p-5">
                    <p className="text-2xl">El Nivel Primario de nuestra institución, ofrece para una educación integral de los estudiantes, además de los espacios curriculares troncales (como Lengua, Matemática, Ciencias Sociales, Ciencias Naturales, Tecnología, Ciudadanía y participación/ Identidad y convivencia), Educación Física, Informática, Lengua extranjera (Ingles) y áreas de Educación Artística: Artes visuales, Música y Teatro.</p>
                </div>
                <div className="basis-1/2 p-5 flex justify-center">
                    <img src={areas_nivel_primario.src} alt="" className="size-3/4"/>
                </div>
            </div>
            <div className="flex">
                <div className="bg-indigo-700 basis-1/3 flex flex-col p-5 gap-2">
                    <h1 className="text-white text-xl italic">Teatro</h1>
                    <img src={teatro_primario1.src} alt="" className="border-4 border-green-400 rounded-3xl" />
                    <img src={teatro_primario2.src} alt="" className="border-4 border-green-400 rounded-3xl" />
                </div>
                <div className="bg-indigo-600 basis-1/3 flex flex-col p-5 gap-2">
                    <h1 className="text-white text-xl italic">Artes Visuales</h1>
                    <img src={artes_visuales1.src} alt="" className="border-4 border-green-400 rounded-3xl" />
                    <img src={artes_visuales2.src} alt="" className="border-4 border-green-400 rounded-3xl" />
                </div>
                <div className="bg-indigo-500 basis-1/3 flex flex-col p-5 gap-2">
                    <h1 className="text-white text-xl italic">Informática</h1>
                    <img src={informatica1.src} alt="" className="border-4 border-green-400 rounded-3xl" />
                    <img src={informatica2.src} alt="" className="border-4 border-green-400 rounded-3xl" />
                </div>
            </div>
            <div className="flex">
                <div className="bg-violet-700 basis-1/3 flex flex-col p-5 gap-2">
                    <h1 className="text-white text-xl italic">Música</h1>
                    <img src={musica_primario.src} alt="" className="border-4 border-green-400 rounded-3xl" />
                </div>
                <div className="bg-violet-600 basis-1/3 flex flex-col p-5 gap-2">
                    <h1 className="text-white text-xl italic">Educación Física</h1>
                    <img src={educacion_fisica_primario.src} alt="" className="border-4 border-green-400 rounded-3xl" />
                </div>
                <div className="bg-violet-500 basis-1/3 flex flex-col p-5 gap-2">
                    <h1 className="text-white text-xl italic">Lengua Extranjera: Inglés</h1>
                    <img src={ingles_primario.src} alt="" className="border-4 border-green-400 rounded-3xl" />
                </div>
            </div>
            <div className="flex items-center">
                <div className="basis-1/2 p-5">
                    <img src={equipo_primario.src} alt="" className="rounded-3xl shadow-xl" />
                </div>
                <div className="basis-1/2 p-5">
                    <p className="text-xl">Equipo de Orientación Escolar: acompaña los procesos escolares, brindando orientaciones a estudiantes, docentes y familias para favorecer los procesos de enseñanza, aprendizaje, convivencia y socialización dentro de la institución educativa. Esto incluye atender situaciones particulares de estudiantes y propias de los grupos, acompañar los procesos de inclusión y la articulación entre niveles, asesorar, tender puentes, favorecer las posibilidades de aprendizaje, establecer lazos con otras instituciones. (Resolución 239/14 CFE. Anexo II.)</p>
                </div>
            </div>
            <div>
                <h1 className="text-2xl bg-cyan-500 text-white italic p-2 text-center">Nuestros Proyectos</h1>
                <h1>Carrucel de proyectos traidos desde una base de datos.</h1>
            </div>
        </div>
    )
}