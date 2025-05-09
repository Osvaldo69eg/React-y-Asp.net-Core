import FormularioCines from "./FormularioCines";

export default function EditarCine() {
    return (
        <>
            <h3>Editar Cines</h3>
            <FormularioCines modelo={{ nombre: 'sambiel' }}
                onSubmit={valores => console.log(valores)}
            />
        </>
    )
}