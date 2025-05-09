import { MapContainer, Marker, TileLayer, useMapEvent } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { coordenadaDTO } from "./coordenadas.model";
import { useState } from "react";

// Configurar el ícono por defecto
const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconAnchor: [16, 37],
});
L.Marker.prototype.options.icon = DefaultIcon;

interface MapaProps {
  height?: string;
  coordenadas?: coordenadaDTO; // ahora es opcional
  manejarClickMapa(coordenadas: coordenadaDTO): void;
}

export default function Mapa({ height = "500px", coordenadas, manejarClickMapa }: MapaProps) {
  const [coordenada, setCoordenada] = useState<coordenadaDTO | undefined>(coordenadas);

  return (
    <MapContainer
      center={coordenadas ? [coordenadas.lat, coordenadas.lng] : [18.467455, -69.931242]}
      zoom={14}
      style={{ height }}
    >
      <TileLayer
        attribution="React Películas"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ClickMapa
        setPunto={(nuevaCoordenada) => {
          setCoordenada(nuevaCoordenada);
          manejarClickMapa(nuevaCoordenada);
        }}
      />
      {coordenada && <Marcador {...coordenada} />}
    </MapContainer>
  );
}

function ClickMapa(props: clickMapaProps) {
  useMapEvent("click", (e) => {
    props.setPunto({ lat: e.latlng.lat, lng: e.latlng.lng });
  });
  return null;
}

interface clickMapaProps {
  setPunto(coordenadas: coordenadaDTO): void;
}

function Marcador(props: coordenadaDTO) {
  return <Marker position={[props.lat, props.lng]} />;
}
