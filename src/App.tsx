import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router'
import Menu from './utils/Menu';
import IndiceTareas from './tareas/IndiceTareas';
import { BrowserRouter } from 'react-router-dom';
import rutas from './route-config';

function App() {
  return (
<>
<BrowserRouter>

    <Menu />

    <div className="container">
      <Switch>
        {rutas.map(ruta =>
         <Route key={ruta.path} path={ruta.path}>
           <ruta.componente/> 
        </Route>)}
      </Switch>
    </div>
    </BrowserRouter>
</>
    
  );
}

export default App;
