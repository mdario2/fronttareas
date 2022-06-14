import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom"
import MostrarErrorCampo from "../utils/MostrarErrorCampo";
import FormularioTareas from "./FormularioTareas";
import { estadoDTO, tareaCreacionDTO } from "./tareas.model";

export default function EditarTarea(){

    const {id}: any = useParams();
    const [tarea,setTarea] = useState<estadoDTO>();
    const [errores, setErrores] = useState<string[]>([]);
    const history = useHistory();
    useEffect(() =>{
        axios.get(`https://localhost:44322/api/tarea/${id}`)
        .then((respuesta: AxiosResponse<estadoDTO>) => {
            setTarea(respuesta.data);
        })
    })

    async function editar(tareaEditar:tareaCreacionDTO) {
       try {
            await axios.put(`https://localhost:44322/api/tarea/${id}`,tareaEditar)
            history.push('/tareas');

       } catch (error) {
            //setErrores(error.response.data)
       } 
    }

    return (
        <>
        <h3>Editar Tarea</h3> 
        
        {tarea ? <FormularioTareas modelo={{nombre: '', estado: ''}}
            onSubmit= {async valores => {
                 await editar(valores)                 
                 
            }}
        /> : <>Cargando</>}
        
        </>
    )
}