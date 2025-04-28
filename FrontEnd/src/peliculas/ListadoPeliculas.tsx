import PeliculaIndividual from "./PeliculaIndividual";
import { pelicula } from "./peliculas.model";
import ccs from "./ListadoPeliculas.module.css"
import Cargando from "../utils/Cargando";
import ListadoGenerico from "../utils/ListadoGenerico";

export default function ListadoPeliculas(props:listadoPeliculasProps)
{
   

    return(
        <ListadoGenerico listado={props.peliculas}>
            <div className={ccs.div}>
                {props.peliculas?.map(pelicula => 
                    <PeliculaIndividual pelicula={pelicula}
                                        key={pelicula.id}   
                />)}
            </div>
        </ListadoGenerico>
         
    )
 
}
interface listadoPeliculasProps{
    peliculas?:pelicula[]
}