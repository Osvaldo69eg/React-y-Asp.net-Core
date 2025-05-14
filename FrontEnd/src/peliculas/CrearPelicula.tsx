import { cineDTO } from "../cines/model.cines";
import { generoDTO } from "../generos/generos.model";
import FormularioPeliculas from "./FormularioPeliculas";

export default function CrearPeliculas(){
    
const generos:generoDTO[]=[{id:1,nombre:'Acción'},{id:2,nombre:'Drama'},{id:3,nombre:'Comedia'}];
const cines:cineDTO[]=[{id:1,nombre:'agora'},{id:2,nombre:'sambil'}];

    return(
        <>
            <h3>CrearPeliculas</h3>
            <FormularioPeliculas
            generoNoSeleccionados={generos}
            generosSeleccionados={[]}
            cinesNoSeleccionados={cines}
            cinesSeleccionados={[]}
            modelo={{titulo:'',enCines:false,trailer:''}}
            onSubmit={valores=>console.log(valores)}/>
        </>
    )
}