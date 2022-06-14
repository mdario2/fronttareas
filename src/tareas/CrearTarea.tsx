import axios from "axios";
import { useHistory } from "react-router-dom";
import { urlTareas } from "../utils/endpoints";
import FormularioTareas from "./FormularioTareas";
import { tareaCreacionDTO } from "./tareas.model";


export default function CrearTarea(){
    const history = useHistory();

    async function crear(tarea: tareaCreacionDTO){
        try{
            await axios.post('https://localhost:44322/api/tarea',tarea);
            history.push('/tareas');
        }catch(error){
            console.log(error);
        }
    }

    return (
        <>
        <h3>Crear Nueva Tarea</h3>
        <FormularioTareas modelo={{nombre: '', estado: ''}}
            onSubmit= {async valores => {
                 await crear(valores);                 
            }}
        />

        
        
        </>

    )
}