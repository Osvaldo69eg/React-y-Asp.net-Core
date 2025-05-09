import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">React Películas</NavLink>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/generos">
                Géneros
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/peliculas/filtrar">
                Filtrar peliculas
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/actores">
                Actores
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/cines">
                Cines
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/peliculas/Crear">
                Crear peliculas
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}