import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../utils/Button";
import { urlTareas } from "../utils/endpoints";
import ListadoGenerico from "../utils/ListadoGenerico";
import { estadoDTO, tareaCreacionDTO } from "./tareas.model";

export default function IndiceTareas(){

    const[tareas,setTareas] = useState<estadoDTO[]>(); 

    useEffect(()=>{
        axios.get('https://localhost:44322/api/tarea')
        .then((respuesta: AxiosResponse<estadoDTO[]>) => {
            console.log(respuesta.data);
            setTareas(respuesta.data);
        })
    }, [])

    async function borrar(id:number) {
        try{
            await axios.delete(`https://localhost:44322/api/tarea/${id}`)
        }
        catch(error){
            //console.log(error.response.data)
        }
    }
     
    return (
        <>
            <h3>Indice de Tareas</h3>
            <Link className="btn btn-primary" to="tareas/crear"> Crear Tarea</Link>
            <ListadoGenerico listado={tareas}>
                <table className="table table-striped">
                    <thead>
                        <tr>
                           <th></th> 
                           <th>Nombre</th>
                           <th>Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tareas?.map(tarea => <tr key={tarea.id}>
                             <td>
                                <Link className="btn btn-success" to={`/tareas/editar/${tarea.id}`}>Editar</Link>
                                <Button
                                onClick={() => borrar(tarea.id)}
                                 className="btn btn-danger">Borrar</Button>
                            </td> 
                            <td>
                                {tarea.nombre}
                            </td>  
                        </tr>)}
                    </tbody>

                </table>
            </ListadoGenerico>
        </>
        
    )
}