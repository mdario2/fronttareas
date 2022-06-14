import { Form, Formik } from "formik";
import { number } from "yup/lib/locale";
import Button from "../utils/Button";
import { estadoDTO } from "./tareas.model";

export default function FiltroTareas(){

    const valorInicial: filtroTareasForm ={
        nombre: '',
        id: 0,
        estado: ''
        
    } 
    const estados: estadoDTO[]= [{id: 1, nombre: 'Completada'}, {id: 2, nombre: 'No Completada'}]
    return (
        <>
           <h3>Filtrar Tareas</h3>     
           <Formik initialValues={valorInicial}
                    onSubmit={valores => console.log(valores)}
            >
               {(formikProps) => (
                <Form>
                    
                    <div className="form-inline">                        
                        <div className="form-group mb-2">
                            <label htmlFor="titulo" className="sr-only">Nombre</label>
                            <input type="text" className="form-control" id="nombre"
                            placeholder="nombre de la tarea"
                            {...formikProps.getFieldProps('nombre')}></input>
                        </div>

                        <div className="form-group mx-sm-3 mb-2">
                            <select className="form-control"
                            {...formikProps.getFieldProps('estadoId')}
                            >
                                <option value="0">--Seleccione un Estado--</option>
                                {estados.map(estado => <option key={estado.id} 
                                                value={estado.id}>{estado.nombre}</option>)}
                            </select>
                        </div>

                        <Button 
                        className = "btn btn-primary mb-2 mx-sm-3"
                        onClick={() => formikProps.submitForm()}>
                            Filtrar
                        </Button>

                        <Button 
                        className = "btn btn-danger mb-2"
                        onClick={() => formikProps.setValues(valorInicial)}>
                            Limpiar
                        </Button>


                    </div>
                </Form>
               )}     
            </Formik> 
        </>
        
    )
}

interface filtroTareasForm{
    id: number; 
    nombre: string;
    estado: string;
}