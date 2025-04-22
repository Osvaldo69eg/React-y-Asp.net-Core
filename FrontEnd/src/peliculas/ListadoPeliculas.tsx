import PeliculaIndividual from "./PeliculaIndividual";
import { pelicula } from "./peliculas.model";
import ccs from "./ListadoPeliculas.module.css"

export default function ListadoPeliculas(props:listadoPeliculasProps)
{
    return(
        <div className={ccs.div}>
            {props.peliculas.map(pelicula => 
                <PeliculaIndividual pelicula={pelicula}
                                    key={pelicula.id}   
        />)}
       </div>
    )
}
interface listadoPeliculasProps{
    peliculas:pelicula[]
}