
import { useForm } from 'react-hook-form';
import { validarPrimeraLetraMayuscula } from '../Validaciones';
import FormGroupText from '../utils/FormGroupText';
import Button from '../utils/Button';
import { Link } from 'react-router-dom';
import { generoCreacionDTO } from './generos.model';

export default function FormularioGeneros({ modelo, onSubmit }: FormularioGeneroProps) {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm<generoCreacionDTO>({
        defaultValues: modelo
    });

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormGroupText
                label="Nombre"
                htmlFor="nombre"
                field={register('nombre', {
                    required: 'Este campo es requerido',
                    maxLength: {
                        value: 50,
                        message: 'El nombre no puede tener más de 50 caracteres'
                        
                    },
                    validate:validarPrimeraLetraMayuscula
                })}
                error={errors.nombre?.message}
            />

            <Button type="submit" disabled={isSubmitting}>Salvar</Button>
            <Link className="btn btn-secondary" to="/generos">Cancelar</Link>
        </form>
    );
}

interface FormularioGeneroProps {
    modelo: generoCreacionDTO;
    onSubmit(values: generoCreacionDTO): void;
}


