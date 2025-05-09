import FormularioCines from "./FormularioCines";

export default function CrearCine() {
    return (
        <>
            <h3>Crear Cines</h3>
            <FormularioCines modelo={{ nombre: '', latitud: 0, longitud: 0  }}
                onSubmit={valores => console.log(valores)}
            />
        </>
    )
}