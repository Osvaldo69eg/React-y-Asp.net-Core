import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import FormularioGeneros from './FormularioGeneros';
import { urlGeneros } from '../utils/endpoints';
import MostrarErrores from '../utils/MostrarErrores';
import { useState } from 'react';

export default function CrearGenero() {
  const navigate = useNavigate();
  const [errores, setErrores]= useState<string[]>([])

  async function crear(genero: { nombre: string }) {
    try {
      await axios.post(urlGeneros, genero);
      navigate('/generos');
   } catch (error: any) {
  if (axios.isAxiosError(error) && error.response) {
    setErrores(error.response.data);
  } else {
    setErrores(['Error desconocido']);
  }
}
  }

  return (
    <>
      <h3>Crear Género</h3>
      <MostrarErrores errores={errores}/>
      <FormularioGeneros 
        modelo={{ nombre: '' }} 
        onSubmit={async (valores) => {
          await crear(valores);
        }}
      />
    </>
  );
}


