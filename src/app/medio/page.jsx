import banner_nivel_medio from "../../public/imagenes/niveles/medio/banner_nivel_medio.jpg"
import nivel_medio from "../../public/imagenes/niveles/medio/nivel_medio.jpg"

export default function Medio(){
    return(
        <div>
            <div className="mt-10">
                <img src={banner_nivel_medio.src} alt="" />
                <h1 className="bg-cyan-500 text-center text-4xl text-white italic p-2">Nivel Medio</h1>
            </div>
            <div className="flex items-center">
                <div className="basis-1/2 p-5 flex flex-col gap-3">
                    <p className="text-justify">Nuestro principal objetivo es contribuir a la formación integral de nuestros/as estudiantes como sujetos conscientes de sus derechos y obligaciones, promoviendo el desarrollo de todas sus capacidades a través de una educación configurada en torno a los valores cooperativos y éticos que les permitan desenvolverse en la sociedad, practicando el pluralismo libre de toda discriminación, comprometidos con la exigencia de la participación comunitaria, motivados por la solidaridad hacia sus semejantes y preparados para el ejercicio de la vida democrática, en la aceptación y práctica de los derechos humanos y la diversidad cultural.</p>
                    <p className="text-justify">Además, nos proponemos promover el acceso al conocimiento como saber integrado, a través de las distintas áreas y disciplinas que lo constituyen, fortaleciendo capacidades y hábitos de estudio, de aprendizaje e investigación, así como de juicio crítico.</p>
                </div>
                <div className="basis-1/2 p-5 flex flex-col items-center">
                    <img src={nivel_medio.src} alt="" className="border-4 border-violet-600 rounded-3xl shadow-xl hover:scale-105"/>
                </div>
            </div>
            <div>
                <h1 className="text-3xl bg-cyan-500 text-white italic p-2">Propuesta Pedagógica</h1>
            </div>
            <div className="basis-1/2 flex flex-col p-5 gap-4">
                    <p className="font-bold text-xl">La formación integral en el Nivel -organizada en torno a los valores cooperativos- atiende al desarrollo del perfil de un/a egresado/a caracterizado/a por:</p>
                    <p className="font-bold">🌈 la adquisición y aplicación de las capacidades y habilidades que lo habilitan para su inserción en el mundo actual;</p>
                    <p className="font-bold">🌈 la gestión del conocimiento como una herramienta para comprender, transformar y actuar crítica y reflexivamente en su entorno;</p>
                    <p className="font-bold">🌈 el empleo de competencias lingüísticas comunicacionales -orales y escritas- del idioma nacional, y de comprensión y expresión de una lengua extranjera;</p>
                    <p className="font-bold">🌈 las capacidades necesarias para la comprensión y utilización inteligente y crítica de los nuevos lenguajes y herramientas producidos en el campo de las tecnologías de la información y la comunicación;</p>
                    <p className="font-bold">🌈 la creación artística, la libre expresión, el placer estético y la comprensión de las distintas manifestaciones de la cultura y las artes;</p>
                    <p className="font-bold">🌈 la formación corporal y motriz a través de la educación física acorde con los requerimientos del proceso de su desarrollo integral;</p>
                    <p className="font-bold">🌈 las habilidades necesarias para las elecciones vocacionales, los estudios superiores y/o la incorporación al mundo del trabajo.</p>
            </div>
            <div>
            <h1 className="text-3xl bg-cyan-500 text-white italic p-2">Nuestros Proyectos</h1>
            <h1>Carrucel de proyectos traidos desde una base datos</h1>
            </div>
        </div>
    )
}