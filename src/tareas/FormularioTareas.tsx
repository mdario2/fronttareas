import { Form, Formik, FormikHelpers } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import * as Yup from 'yup'
import Button from "../utils/Button";
import FormGroupText from "../utils/FormGroupText";
import { tareaCreacionDTO } from "./tareas.model";


export default function FormularioTareas(props: formularioTareasProps){
    return (
        <Formik initialValues={props.modelo}
        onSubmit = {props.onSubmit}

        validationSchema={Yup.object({
            nombre : Yup.string().required('Este campo es requerido')
            .max(40,'La longitud máxima es de 40 caracteres')
        })}
        >
            {(formikProps) => (
                 <Form>
                 <FormGroupText campo="nombre" label="Nombre" placeholder="nombre tareita"></FormGroupText>
                 <FormGroupText campo="estado" label="Estado" placeholder=""></FormGroupText>
                 <Button disabled={formikProps.isSubmitting} type="submit">Guardar</Button>
                 <Link className="btn btn-secondary" to="/tareas">Cancelar</Link>
             </Form>
            )}
           
            
        </Formik>    

    )
}

interface formularioTareasProps{
    modelo: tareaCreacionDTO;
    onSubmit(valores: tareaCreacionDTO, accion: FormikHelpers<tareaCreacionDTO>): void;
}