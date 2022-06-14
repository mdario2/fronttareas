import CrearTarea from "./tareas/CrearTarea";
import EditarTarea from "./tareas/EditarTarea";
import FiltroTareas from "./tareas/FiltroTareas";
import IndiceTareas from "./tareas/IndiceTareas";
import RedireccionarAInicio from "./utils/RedireccionarInicio";

const rutas = [
    {path:'/tareas/editar/:id(\\d+)', componente: EditarTarea}, 
    {path:'/tareas/crear', componente: CrearTarea},    
    {path:'/tareas/filtrar', componente: FiltroTareas},     
    {path:'/tareas', componente: IndiceTareas, exact: true}, // editar cae aqui
    {path: '*', componente: RedireccionarAInicio}
    
];

export default rutas;