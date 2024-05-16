import banner_nivel_inicial from "../../public/imagenes/niveles/inicial/banner_nivel_inicial.jpg"
import nivel_inicial from "../../public/imagenes/niveles/inicial/nivel_inicial.jpg"
import objetivos_inicial from "../../public/imagenes/niveles/inicial/objetivos_inicial.jpg"
import ingles_inicial from "../../public/imagenes/niveles/inicial/ingles_inicial.jpg"
import educacion_fisica_inicial from "../../public/imagenes/niveles/inicial/educacion_fisica_inicial.jpg"
import musica_inicial from "../../public/imagenes/niveles/inicial/musica_inicial.jpg"

export default function Inicial(){
    return(
        <div className="mt-10">
            <div className="">
                <img src={banner_nivel_inicial.src} alt="" />
                <h1 className="w-full bg-cyan-500 text-4xl text-center italic text-white p-2">Nivel Inicial</h1>
            </div>
            <div className="flex">
                <div className="basis-1/2 p-5 flex flex-col gap-2">
                    <p className="indent-8 text-justify">Es en este Nivel donde comienza el proceso sociocultural de nuestros niños y nuestras niñas, en el que se destaca tanto su significación subjetiva y social, como su potencial para desarrollar un proceso a largo plazo tendiente a crear una base común de conocimiento. Las salas se distribuyen en el turno mañana (una sala de 4 y una sala de 5) y en el turno tarde (una sala de 4 y una sala de 5).</p>
                    <h1 className="bg-cyan-500 text-xl mt-7 text-white p-2 italic">Propuesta Pedagógica</h1>
                    <p className="indent-8 text-justify mt-2">Desde nuestro Nivel comprendemos el compromiso de promover un sistema inclusivo -uno de los grandes desafíos de la educación en nuestros tiempos- y una educación que sea de calidad. Nuestras líneas de acción apuntan a fortalecer las propuestas que garanticen el ingreso, la permanencia y la promoción de estudiantes formados/as en la filosofía cooperativista.</p>
                    <p className="indent-8 text-justify">Se promueven el respeto por la diversidad, las prácticas sociales de participación en la comunidad, la interacción social, la cooperación y la colaboración entre pares, la exploración e indagación de la realidad, la búsqueda de información, la expresión en los diversos lenguajes artísticos, el abordaje y resolución de situaciones problemáticas y el pensamiento crítico y creativo. En este marco, el Nivel tiene los siguientes objetivos:</p>
                </div>
                <div className="basis-1/2 flex justify-center p-5">
                    <img src={nivel_inicial.src} alt="" className="border-4 border-stone-950 rounded-3xl shadow-xl hover:scale-105 transition-transform"/>
                </div>
            </div>
            <div className="flex">
                <div className="basis-1/2 flex flex-col p-5 gap-4">
                    <p className="font-bold">🌈 Promover en las niñas y los niños la solidaridad, la autoestima, la confianza, el cuidado, la amistad, el respeto por sí mismos/as y por otros/as.</p>
                    <p className="font-bold">🌈 Desarrollar su capacidad creativa y el placer por el conocimiento en las experiencias de aprendizaje.</p>
                    <p className="font-bold">🌈 Promover el juego como contenido de alto valor cultural para el desarrollo cognitivo, afectivo, ético, estético, motor y social.</p>
                    <p className="font-bold">🌈 Desarrollar la capacidad de expresión y comunicación a través de los distintos lenguajes verbales y no verbales: el movimiento, la música, la expresión plástica y la literatura.</p>
                    <p className="font-bold">🌈 Estimular la formación corporal y motriz a través de la Educación Física.</p>
                    <p className="font-bold">🌈 Atender a las desigualdades educativas de origen social y familiar para favorecer una integración plena de las niñas y los niños en el sistema educativo provincial.</p>
                    <p className="font-bold">🌈 Promover en las niñas y los niños el desarrollo progresivo de su identidad y sentido de pertenencia a la familia inserta en la comunidad local, regional, provincial y nacional.</p>
                </div>
                <div className="basis-1/2 flex items-center">
                    <img src={objetivos_inicial.src} alt="" />
                </div>
            </div>
            <div>
                <h1 className="bg-cyan-500 text-2xl text-white text-center p-2">Áreas de aprendizaje</h1>
            </div>
            <div className="flex">
                <div className="basis-1/3 p-2">
                    <h1 className="text-2xl italic">Ingles</h1>
                    <img src={ingles_inicial.src} alt="" className="border-4 border-purple-900 rounded-3xl shadow-xl" />
                    <p className="mt-4 ml-4 mr-4 text-justify ">Iniciar su aprendizaje en esta etapa contribuye a la adquisición y desarrollo de las capacidades básicas transferibles de unas áreas a otras, en beneficio de la formación integral y con el fin de favorecer la creación de procesos de aprendizajes significativos y promover el desarrollo de la actividad mental de los niños y las niñas desarrollando su capacidad de aprender.</p>
                </div>
                <div className="basis-1/3 p-2">
                    <h1 className="text-2xl italic">Educación física</h1>
                    <img src={educacion_fisica_inicial.src} alt="" className="border-4 border-purple-900 rounded-3xl shadow-xl" />
                    <p className="mt-4 ml-4 mr-4 text-justify ">Mediante ella se promueven propuestas de enseñanza orientadas a la ampliación y apropiación de los aprendizajes corporales y motrices. Es imprescindible que los niños y las niñas construyan un vínculo con su propia corporeidad, con la de otros/as, poniendo en juego su motricidad y resolviendo problemas sencillos de manera creativa.</p>
                </div>
                <div className="basis-1/3 p-2">
                    <h1 className="text-2xl italic">Música</h1>
                    <img src={musica_inicial.src} alt="" className="border-4 border-purple-900 rounded-3xl shadow-xl" />
                    <p className="mt-4 ml-4 mr-4 text-justify ">Se ofrecen a los niños y las niñas propuestas de calidad, variedad y riqueza en lo musical, creando un ambiente culturalmente enriquecido. Es nuestro propósito abrir las puertas al desarrollo de la expresión, el arte y la cultura.</p>
                </div>
            </div>
            <div className="bg-cyan-500 text-2xl text-white text-center p-2">
                <h1>Nuestros Proyectos</h1>
            </div>
            <div><h1>Carrucel de cards de los proyectos traidos desde una DB</h1></div>
        </div>
    )
}