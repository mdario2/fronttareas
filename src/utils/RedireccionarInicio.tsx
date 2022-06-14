import { Redirect } from "react-router-dom";

export default function RedireccionarAInicio(){
    return <Redirect to={{pathname:'/'}}/>
}