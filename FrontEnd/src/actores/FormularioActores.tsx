import { FormProvider, useForm } from "react-hook-form";
import { actorCreacionDTO } from "./actores.model";
import FormGroupText from "../utils/FormGroupText";
import Button from "../utils/Button";
import { Link } from "react-router-dom";
import { validarPrimeraLetraMayuscula } from "../Validaciones";
import FormGroupFecha from "../utils/FormGroupFecha";  // Asumiendo que tienes un componente similar a FormGroupText para manejar fechas
import FormGroupImage from "../utils/FormGroupImagen";
import FormGroupMarkdown from "../utils/FormGroupMarkdown";

export default function FormularioActores(props: formularioActoresProps) {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<actorCreacionDTO>({
        defaultValues: props.modelo
    });

    const onSubmit = (data: actorCreacionDTO) => {
        console.log(data);
        props.onSubmit(data);
    };

    const metodos = useForm();

    return (
        <FormProvider {...metodos}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormGroupText
                    label="Nombre"
                    htmlFor="nombre"
                    field={register('nombre', {
                        required: 'Este campo es requerido',
                        validate: validarPrimeraLetraMayuscula
                    })}
                    error={errors.nombre?.message}
                />

                <FormGroupFecha
                    label="Fecha de Nacimiento"
                    campo="fechaNacimiento"
                    field={register("fechaNacimiento", {
                        required: "La fecha es obligatoria"
                    })}
                    error={errors.fechaNacimiento?.message}
                />

                <FormGroupImage campo="foto" label="Foto" imagenURL={props.modelo.fotoURL} />
                <FormGroupMarkdown
                    campo="biografia"
                    label="Biografía"
                    // validations={{
                    //     required: "La biografía es obligatoria"
                    // }}
                />
                <Button type="submit" disabled={isSubmitting}>Salvar</Button>
                <Link className="btn btn-secondary" to="/generos">Cancelar</Link>
            </form>
        </FormProvider>
    );
}

interface formularioActoresProps {
    modelo: actorCreacionDTO;
    onSubmit(values: actorCreacionDTO): void;
}
