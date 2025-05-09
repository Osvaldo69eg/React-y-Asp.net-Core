import { FormProvider, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Button from "../utils/Button";
import FormGroupText from "../utils/FormGroupText";
import MapaFormulario from "../utils/MapaFormulario";
import { validarPrimeraLetraMayuscula } from "../Validaciones";
import { cineCreacionDTO } from "./model.cines";

export default function FormularioCines(props: formularioCinesProps) {
   const methods = useForm<cineCreacionDTO>({
  defaultValues: props.modelo,
});

return (
  <FormProvider {...methods}>
    <form onSubmit={methods.handleSubmit(props.onSubmit)}>
      <FormGroupText
        label="Nombre"
        htmlFor="nombre"
        field={methods.register("nombre", {
          required: "Este campo es requerido",
          validate: validarPrimeraLetraMayuscula,
        })}
        error={methods.formState.errors.nombre?.message}
      />

      <div style={{ marginBottom: "1rem" }}>
        <MapaFormulario
  campoLat="latitud"
  campoLng="longitud"
  coordenadas={
    props.modelo.latitud && props.modelo.longitud
      ? { lat: props.modelo.latitud, lng: props.modelo.longitud }
      : undefined
  }
/>
      </div>

      <Button disabled={methods.formState.isSubmitting} type="submit">
        Salvar
      </Button>

      <Link className="btn btn-secondary" to="/cines">
        Cancelar
      </Link>
    </form>
  </FormProvider>
);

}

interface formularioCinesProps {
    modelo: cineCreacionDTO;
    onSubmit(valores: cineCreacionDTO): void;
}