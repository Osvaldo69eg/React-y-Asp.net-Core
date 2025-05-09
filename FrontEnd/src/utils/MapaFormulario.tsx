import { useFormContext } from "react-hook-form";
import { coordenadaDTO } from "./coordenadas.model";
import Mapa from "./Mapa";

export default function MapaFormulario(props: mapaFormularioProps) {
  const { setValue } = useFormContext();

  function actualizarCampos(coordenadas: coordenadaDTO) {
    setValue(props.campoLat, coordenadas.lat);
    setValue(props.campoLng, coordenadas.lng);
  }

  return (
  <Mapa
  coordenadas={props.coordenadas}
  manejarClickMapa={actualizarCampos}
/>
  );
}

interface mapaFormularioProps {
  coordenadas?: coordenadaDTO;
  campoLat: string;
  campoLng: string;
}

MapaFormulario.defaultProps = {
  coordenadas: { lat: 18.467455, lng: -69.931242 },
};
