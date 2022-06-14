import { NavLink } from "react-router-dom";

export default function Menu(){
    const claseActiva = "active";
    return (
        <nav className="navbar navbar-expand-lg navbar-ligth bg-ligth">
            <div className="container-fluid">
                <NavLink className="navbar-brand" activeClassName={claseActiva} to="/">Fi group</NavLink>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                           <NavLink className="nav-link" activeClassName={claseActiva} to="/tareas">
                               Tareas
                           </NavLink> 
                        </li>
                        <li className="nav-item">
                           <NavLink className="nav-link" activeClassName={claseActiva} to="/tareas/filtrar">
                               Filtrar Tareas
                           </NavLink> 
                        </li>
                        <li className="nav-item">
                           <NavLink className="nav-link" activeClassName={claseActiva} to="/tareas/crear">
                               Crear Tareas
                           </NavLink> 
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}