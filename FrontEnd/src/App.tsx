import React from 'react';
import './App.css';
import { pelicula } from './peliculas/peliculas.model';
import PeliculaIndividual from './peliculas/PeliculaIndividual';
import ListadoPeliculas from './peliculas/ListadoPeliculas';

function App() {
  const peliculasEncartelera:pelicula[]=[
    {
      id:1,titulo:"Spiderman lejos de casa",
      poster:"imagenes/FarFromHome.jpg"
    },
    {
      id:2,titulo:"moana",
      poster:"imagenes/moana.jpg"
    }
  ]
  const peliculasProximosEstrenos:pelicula[]=[
    {
      id:3,titulo:"Soul",
      poster:"imagenes/soul.jpg"
    }
  ]

  return (
   <>
   <h3>Peliculas en cartelera</h3>
   <ListadoPeliculas peliculas={peliculasEncartelera}/>
   <h3>Proximos estrenos</h3>
   <ListadoPeliculas peliculas={peliculasProximosEstrenos}/>
   </>
   
  );
}

export default App;
