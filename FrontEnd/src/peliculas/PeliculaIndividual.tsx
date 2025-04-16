import { pelicula } from "./peliculas.model";   
import css from  "./PeliculaIndividual.module.css"  

export default function PeliculaIndividual(props:PeliculaIndividualProps){

    const contruirLink=()=>`/pelicula/${props.pelicula.id}`
  return(
    <div className={css.div}>
        <a href={contruirLink()}>
            <img src={props.pelicula.poster} alt="Poster" />
        </a>
        <p>
            <a href={contruirLink()}>{props.pelicula.titulo}</a>
        </p>
    </div>
  )  
}

interface PeliculaIndividualProps{
    pelicula:pelicula;
}