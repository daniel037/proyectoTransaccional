import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'; // Importa BrowserRouter y Routes
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegistroPaciente from './components/pacientesForm';
import RegistroPatologia from './components/patologiasForm';
import RegistroCertificadoDefuncion from './components/defuncionForm';
import RegistroTratamiento from './components/tratamiento';
import FichaTecnicaForm from './components/fichaTecnicaForm';
import Encabezado from './components/encabezado';
import Pie from './components/pie_pagina';
import Login from './components/login';
import './css/Pie.css'

function App() {
  return (
    
    <Router> {/* Utiliza BrowserRouter */}
      <Encabezado />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/paciente" element={<RegistroPaciente />} /> {/* Renderiza el formulario en esta ruta */}
        <Route path="/patologia" element={<RegistroPatologia />} /> {/* Renderiza el formulario en esta ruta */}
        <Route path="/tratamiento" element={<RegistroTratamiento />} /> {/* Renderiza el formulario en esta ruta */}
        <Route path="/defuncion" element={<RegistroCertificadoDefuncion />} /> {/* Renderiza el formulario en esta ruta */}
        {/*<Route path="/ficha_tecnica" element={<FichaTecnicaForm />}/> */} {/* Renderiza el formulario en esta ruta */}
        {/* Otras rutas aquí */}
      </Routes>
      <div id="pie-container">
        <Pie />
      </div>
    </Router>

  );
}

export default App;