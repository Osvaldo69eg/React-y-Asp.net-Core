import { RouteObject } from 'react-router-dom';
import LandingPage from './LandingPage';
import IndiceGeneros from './generos/indiceGeneros';
import CrearGenero from './generos/CrearGeneros';
import EditarGenero from './generos/EditarGenero';
import CrearActor from './actores/CrearActores';
import EditarActor from './actores/EditarActores';
import IndiceActores from './actores/indiceActores';
import CrearCine from './cines/CrearCines';
import EditarCine from './cines/EditarCines';
import IndiceCines from './cines/indiceCines';
import CrearPeliculas from './peliculas/CrearPelicula';
import EditarPeliculas from './peliculas/EditarPeliculas';
import FiltrarPeliculas from './peliculas/FiltroPeliculas';
import RedireccionarALanding from './utils/RedireccionarALanding';

const rutas: RouteObject[] = [
    {path: '/', element: <LandingPage />},
    {path: '/generos/crear', element: <CrearGenero />},
    {path: '/generos/editar/:id', element: <EditarGenero />},
    {path: '/generos', element: <IndiceGeneros />},
    {path: '/actores/crear', element: <CrearActor/>},
    {path: '/actores/editar/:id', element: <EditarActor />},
    {path: '/actores', element: <IndiceActores />},
    {path: '/cines/crear', element: <CrearCine/>},
    {path: '/cines/editar/:id', element: <EditarCine />},
    {path: '/cines', element: <IndiceCines />},
    {path: '/peliculas/crear', element: <CrearPeliculas/>},
    {path: '/peliculas/editar/:id', element: <EditarPeliculas />},
    {path: '/peliculas/Filtrar',element: <FiltrarPeliculas />},
    {path:'*', element:<RedireccionarALanding/>}
  ];
  
export default rutas;