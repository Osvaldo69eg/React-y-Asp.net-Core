import { useForm, FormProvider } from "react-hook-form";
import { peliculaCreacionDTO } from "./peliculas.model";
import FormGroupText from "../utils/FormGroupText";
import FormGroupCheckbox from "../utils/FormGroupCheckbox";
import FormGroupFecha from "../utils/FormGroupFecha";
import FormGroupImagen from "../utils/FormGroupImagen";
import Button from "../utils/Button";
import { Link } from "react-router-dom";
import SelectorMultiple, { selectorMultipleModel } from "../utils/SelectorMultiple";
import { generoDTO } from "../generos/generos.model";
import { useState } from "react";
import { cineDTO } from "../cines/model.cines";
import TypeAheadActores from "../actores/TypeAheadActores";
import { actorPeliculaDTO } from "../actores/actores.model";

export default function FormularioPeliculas(props: formularioPeliculasProps) {

    const [generosSeleccionados, setGenerosSeleccionados] = useState(mapear(props.generosSeleccionados));
    const [generosNoSeleccionados, setGenerosNoSeleccionados] = useState(mapear(props.generoNoSeleccionados));

    const [cinesSeleccionados, setcinesSeleccionados] = useState(mapear(props.cinesSeleccionados));
    const [cinesNoSeleccionados, setcinesNoSeleccionados] = useState(mapear(props.cinesNoSeleccionados));

    // Inicializa el estado con un arreglo vacío, no con undefined
    const [actoresSeleccionados, setActoresSeleccionados] = useState<actorPeliculaDTO[]>([]);

    function mapear(arreglo: { id: number, nombre: string }[]): selectorMultipleModel[] {
        return arreglo.map(valor => {
            return { llave: valor.id, valor: valor.nombre }
        })
    }

    const methods = useForm<peliculaCreacionDTO>({
        defaultValues: props.modelo
    });

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = methods;

    const onSubmit = (data: peliculaCreacionDTO) => {
        data.generosIds = generosSeleccionados.map(genero => genero.llave);
        data.cinesIds = cinesSeleccionados.map(genero => genero.llave);
        data.actores = actoresSeleccionados;
        props.onSubmit(data);
    };

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormGroupText
                    label="Título"
                    htmlFor="titulo"
                    field={register("titulo", {
                        required: "Este campo es requerido",
                        // validate: validarPrimeraLetraMayuscula
                    })}
                    error={errors.titulo?.message}
                />

                <FormGroupCheckbox
                    label="En cines"
                    campo="enCines"
                    register={register}
                />

                <FormGroupText
                    label="Trailer"
                    htmlFor="trailer"
                    field={register("trailer")}
                    error={errors.trailer?.message}
                />

                <FormGroupFecha
                    label="Fecha Lanzamiento"
                    campo="fechaLanzamiento"
                    field={register("fechaLanzamiento")}
                    error={errors.fechaLanzamiento?.message}
                />

                <FormGroupImagen
                    label="Poster"
                    campo="poster"
                    imagenURL={props.modelo.posterURL}
                />

                <div className="form-group">
                    <label>Generos</label>
                    <SelectorMultiple seleccionados={generosSeleccionados}
                        noSeleccionados={generosNoSeleccionados}
                        onChange={(seleccionados, noSeleccionados) => {
                            setGenerosSeleccionados(seleccionados)
                            setGenerosNoSeleccionados(noSeleccionados);
                        }} />
                </div>

                <div className="form-group">
                    <label>Cines</label>
                    <SelectorMultiple seleccionados={cinesSeleccionados}
                        noSeleccionados={cinesNoSeleccionados}
                        onChange={(seleccionados, noSeleccionados) => {
                            setcinesSeleccionados(seleccionados)
                            setcinesNoSeleccionados(noSeleccionados);
                        }} />
                </div>

                <div className="form-group">
                   <TypeAheadActores
    actores={actoresSeleccionados}
    onAdd={actor => setActoresSeleccionados([...actoresSeleccionados, actor])}
    onRemove={actor => setActoresSeleccionados(
        actoresSeleccionados.filter(x => x.id !== actor.id)
    )}
    onChange={actorActualizado => {
        const actoresActualizados = actoresSeleccionados.map(actor =>
            actor.id === actorActualizado.id ? actorActualizado : actor
        );
        setActoresSeleccionados(actoresActualizados);
    }}
/>
                </div>

                <Button type="submit" disabled={isSubmitting}>
                    Salvar
                </Button>
                <Link className="btn btn-secondary" to="/">
                    Cancelar
                </Link>
            </form>
        </FormProvider>
    );
}

interface formularioPeliculasProps {
    modelo: peliculaCreacionDTO;
    onSubmit(valores: peliculaCreacionDTO): void;
    generosSeleccionados: generoDTO[];
    generoNoSeleccionados: generoDTO[];
    cinesSeleccionados: cineDTO[];
    cinesNoSeleccionados: cineDTO[];
}
