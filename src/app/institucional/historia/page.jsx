import banner_historia from "../../../public/imagenes/institucional/historia/banner_historia.jpg"
import historia1 from "../../../public/imagenes/institucional/historia/historia1.jpg"
import historia2 from "../../../public/imagenes/institucional/historia/historia2.jpg"
import historia3 from "../../../public/imagenes/institucional/historia/historia3.jpg"
import Link from "next/link"
import YouTubeVideo from "@/components/VideoHistoria"


export default function Historia (){
    return(
        <div className="mt-10">
            <div>
                <img src={banner_historia.src} alt="" />
            </div>
            <div className="bg-sky-600 text-center text-4xl italic font-sans text-gray-100">
                <h1>Nuestra Historia</h1>
            </div>
            <div className="flex flex-row">
                <div className="basis-1/2 p-5 flex flex-col gap-3 text-justify indent-8">
                    <p className="text-xl indent-0">Un poco de nuestra biografía institucional…</p>
                    <p>La historia comenzó en el año 1973, cuando ante el inminente cierre del Instituto Borel Maisony (emprendimiento educativo privado en la zona de Argüello centro), un grupo de docentes decidió agruparse para dar continuidad al proyecto con criterios autogestivos. Tras reuniones, trámites y averiguaciones, en noviembre del mismo año, concretaron la iniciación, en una Asamblea Constitutiva, de la flamante “Cooperativa de Trabajo Mixta de Enseñanza de Arguello Ltda.”. El acto de inauguración tuvo lugar el día 24 de marzo de 1974. Se trató de una hermosa fiesta a la que asistieron varias autoridades y personas representativas de la comunidad de Argüello.</p>
                    <p>Desde entes estatales se sugirió el cambio del nombre “Borel Maisony” (ya que este pedagogo estaba aún con vida) por el de “Brigadier Mayor Juan Ignacio San Martín”, quien había sido gobernador de la provincia de Córdoba durante la primera presidencia de Perón y ya había fallecido en 1966. Con este nuevo nombre, continuó funcionando con su estructura de Nivel Inicial y Nivel Primario hasta cuarto grado.</p>
                    <p>Desde sus comienzos, el equipo docente organizó y desarrollo sus tareas bajo propuestas pedagógicas de avanzada que acordaran con el estilo de organización de la Cooperativa. Se trabajó con retribuciones acotadas a las personas asociadas, pues las posibilidades contables no cubrían los montos para los egresos necesarios en esta etapa fundacional.</p>
                    <p>Recién a comienzos del ciclo lectivo de 1976, llegó el alivio económico y la merecida retribución con el otorgamiento del tan anhelado aporte estatal. A finales de 1977, se debió desocupar el inmueble alquilado inicialmente. Después de varias gestiones de quienes pertenecían a la Cooperativa –junto con la ayuda de familias y vecinos/as-, se logró conseguir un edificio comunitario municipal en las cercanías de Barrio Mercantil.</p>
                    <p>Durante el año 1978, se canalizó la tramitación de la apertura del Nivel Secundario, debido a que quienes egresaban del séptimo grado debían acudir a instituciones alejadas porque no había establecimientos en la zona en horario diurno. De esta manera, este Nivel inició sus actividades en el año 1979 en locales alquilados en Barrio Mercantil, ofreciendo los títulos de Ayudantía Técnica en Construcción y Ayudantía de Laboratorio Químico. Durante largo tiempo, el Nivel también funcionó sin aportes estatales.</p>
                    <p>En el año 1980, la Cooperativa había logrado construir, en sus propios terrenos, algunas dependencias donde fue instalado el Secundario y donde se constituyó la sede de la institución. Por su parte, el Nivel Inicial funcionaba en un local alquilado en Barrio Mercantil en las inmediaciones de la plaza y centro comercial del barrio.</p>
                    <p>Posteriormente, seis años más tarde, a raíz de un plan municipal de recuperación de edificios, el Nivel Primario debió abandonar el edificio en el que se encontraba. Con el propósito urgente de solucionar la situación, tuvo lugar un plan solidario para la construcción de aulas. En esta oportunidad también se puso en juego la cooperación de asociados y asociadas, quienes trabajaron, con participación de algunos de sus familiares, junto a albañiles, pintores, etc. Una vez más se debió renunciar a los salarios. Aquí nuevamente fue inestimable la acción y colaboración de las familias.</p>
                    <p>Poco a poco se fueron comprando todos los terrenos de la manzana. Entonces se debió hacer el tapiado perimetral para dar más seguridad y mejorar el aspecto del patio de la escuela. Después, vinieron la sala de computación, el gabinete psicopedagógico, más aulas, la biblioteca y, por fin, el playón polideportivo.</p>
                    <p>También para el Nivel Inicial hubo edificio propio: la Cooperativa adquirió en 1990 el local que estaba alquilando. Allí se encuentra hasta la fecha, siendo un servicio muy demandado por la comunidad.</p>
                    <p>Los primeros tiempos fueron especiales: pisos sin mosaicos, techos que solían lloverse, pasillos y espacios de recreación abiertos con ejemplares de vegetación autóctona. El transporte público sólo tenía algunos horarios especiales muy distanciados para entrar al barrio. Sin embargo, el espíritu de cooperación y la ayuda mutua entre los asociados y las asociadas permitieron dar vida y sustentar este proyecto colectivo a lo largo de los años. Es significativo que el predio de esta Cooperativa esté contenido por un “tapial” que fue construido con bloques fabricados por alumnos y alumnas de la especialidad en Construcción del Nivel Secundario. Podemos afirmar que el quehacer institucional se desarrolla bajo un potente “faro” imaginado que estimula e ilumina el día a día. Los principios cooperativos están en práctica universalmente, pero en cada emprendimiento toman características particulares como es en nuestra querida “ESCUELA COOPERATIVA BRIGADIER SAN MARTIN”.</p>
                    <Link className="mt-3" href="/institucional">Volver</Link>
                </div>
                <div className="flex flex-col basis-1/2 gap-10 mt-5 p-4">
                    <img src={historia1.src} alt="" className="border-4 border-gray-800 rounded-xl shadow-xl hover:scale-105 transition-transform"/>
                    <img src={historia2.src} alt="" className="border-4 border-gray-800 rounded-xl shadow-xl hover:scale-105 transition-transform"/>
                    <img src={historia3.src} alt="" className="border-4 border-gray-800 rounded-xl shadow-xl hover:scale-105 transition-transform"/>
                    <div className="flex flex-col items-center">
                        <h1 className="text-2xl text-center mb-3 mt-8 italic">Entrevista a las fundadoras</h1>
                        <YouTubeVideo/>
                    </div>
                </div>
            </div>
        </div>
    )
}