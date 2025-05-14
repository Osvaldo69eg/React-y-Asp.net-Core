import { cineDTO } from "../cines/model.cines";
import { generoDTO } from "../generos/generos.model";
import FormularioPeliculas from "./FormularioPeliculas";

export default function EditarPeliculas() {

const generosSeleccionados:generoDTO[]=[{id:1,nombre:'Acción'},
    {id:3,nombre:'Comedia'}];

    const generosNoSeleccionados:generoDTO[]=[
    {id:2,nombre:'Drama'}];

    const cinesSeleccionados:cineDTO[]=[{id:2,nombre:'sambil'}]
    const cinesNoSeleccionados:cineDTO[]=[{id:1,nombre:'agora'}]


    return (
        <>
            <h3>EditarPeliculas</h3>
            <FormularioPeliculas
            cinesNoSeleccionados={cinesNoSeleccionados}
            cinesSeleccionados={cinesSeleccionados}
            generoNoSeleccionados={generosNoSeleccionados}
            generosSeleccionados={generosSeleccionados}
            modelo={{ titulo: 'spiderman', enCines: true,
             trailer: 'URL',fechaLanzamiento:new Date('2019-01-01T00:00:00') }}
                onSubmit={valores => console.log(valores)} />
        </>
    )
}