import Link from "next/link";

export default function NoEncontrado (){
    return (
        <div className="mt-10">
            <h1>Pagina no encontrada.</h1>
            <p>Esta pagina no se ha podido encontrar, o se encuentra en construccion, por favor regrese a la pagina principal</p>
            <Link href="/">Volver</Link>
        </div>
    )
}