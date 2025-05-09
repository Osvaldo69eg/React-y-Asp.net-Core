import { useForm } from "react-hook-form";
import { generoDTO } from "../generos/generos.model";
import Button from "../utils/Button";

export default function FiltrarPeliculas() {

    const valorInicial: filtroPeliculasForm = {
        titulo: "",
        generoId: 0,
        proximosEstrenos: false,
        enCines: false,
    };

    const generos: generoDTO[] = [{ id: 1, nombre: "Acción" }, { id: 2, nombre: "Comedia" }]

    const { register, handleSubmit, reset } = useForm<filtroPeliculasForm>({
        defaultValues: valorInicial,
    });

    const onSubmit = (datos: filtroPeliculasForm) => {
        console.log(datos);
    };

    return (
        <>
            <h3>Filtrar Películas</h3>

            <form onSubmit={handleSubmit(onSubmit)} className="form-inline">
                <div className="form-inline">
                    <div className="form-group mb-2">
                        <label htmlFor="titulo" className="sr-only">
                            Título
                        </label>
                        <input
                            type="text"
                            id="titulo"
                            placeholder="título de la película"
                            className="form-control"
                            {...register("titulo")}
                        />
                    </div>
                    <div className="form-group mx-sm-3 mb-2">
                        <select className="form-control"
                            {...register('generoId')}>
                            <option value="0">--Selecciona un genero--</option>
                            {generos.map(genero => <option key={genero.id} value={genero.id}>{genero.nombre}</option>)}
                        </select>
                    </div>
                    <div className="form-group mx-sm-3 mb-2">
                        <input className="form-check-input" id="proximosEstrenos"
                            type="checkbox" {...register("proximosEstrenos")} />
                        <label className="form-check-label" htmlFor="proximosEstrenos"> Próximos Estrenos</label>
                    </div>
                    <div className="form-group mx-sm-3 mb-2">
                        <input className="form-check-input" id="enCines"
                            type="checkbox" {...register("enCines")} />
                        <label className="form-check-label" htmlFor="enCines">En cines</label>
                    </div>
                    <Button className="btn btn-primary mb-2 mx-sm-3" type="submit">Filtrar</Button>
                    <Button className="btn btn-danger mb-2" type="button" onClick={() => reset(valorInicial)}>Limpiar</Button>
                </div>
            </form >
        </>
    );
}

interface filtroPeliculasForm {
    titulo: string;
    generoId: number;
    proximosEstrenos: boolean;
    enCines: boolean;
}