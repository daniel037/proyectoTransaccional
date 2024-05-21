import React, { useState, useEffect } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import dataTratamiento from "../data/tratamiento.json";


const RegistroTratamiento = () => {

  const [fechaTratamiento1, setFechaTratamiento1] = useState("");
  const [tratamiento1, setTratamiento1] = useState("");
  const [fechaTratamiento2, setFechaTratamiento2] = useState("");
  const [tratamiento2, setTratamiento2] = useState("");
  const [fechaTratamiento3, setFechaTratamiento3] = useState("");
  const [tratamiento3, setTratamiento3] = useState("");
  const [tratamientoOptions, setTratamiento1Options] = useState([]);

  
  useEffect(() => {
    const optionstratamiento = dataTratamiento.map((tratamiento) => (
        <option key={tratamiento.codigo} value={tratamiento.codigo}>
            {tratamiento.nombre}
        </option>
    ));
    setTratamiento1Options(optionstratamiento);

}, [])


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
        fechaTratamiento1,
        tratamiento1, 
        fechaTratamiento2,
        tratamiento2,
        fechaTratamiento3,
        tratamiento3,
        
    });
  };



  return (
    <Container className="d-flex justify-content-center align-items-center h-100">
    <div class="card" style={{ marginTop: "50px" }}>
        <div class="card-header">
          <h1>Tratamiento</h1>
        </div>

        <div class="card-body">
  
            <form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" >
                    <Form.Label htmlFor="fechaTratamiento1" className="form-label">Fecha Tratamiento 1</Form.Label>
                    <Form.Control type="date" id="fechaTratamiento1" value={fechaTratamiento1} onChange={(e) => setFechaTratamiento1(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="tratamiento1" >Tratamiento 1</Form.Label>
                    <Form.Control id="tratamiento1" as="select" value={tratamiento1} onChange={(e) => setTratamiento1(e.target.value)}>
                        <option value="">Seleccionar</option>
                        {tratamientoOptions}
                    </Form.Control>
                </Form.Group>

       
                <Form.Group className="mb-3" >
                    <Form.Label htmlFor="fechaTratamiento2" className="form-label">Fecha Tratamiento 2</Form.Label>
                    <Form.Control type="date" id="fechaTratamiento2" value={fechaTratamiento2} onChange={(e) => setFechaTratamiento2(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="tratamiento2" >Tratamiento 2</Form.Label>
                    <Form.Control id="tratamiento2" as="select" value={tratamiento2} onChange={(e) => setTratamiento2(e.target.value)}>
                        <option value="">Seleccionar</option>
                        {tratamientoOptions}
                    </Form.Control>
                </Form.Group>


                <Form.Group className="mb-3" >
                    <Form.Label htmlFor="fechaTratamiento3" className="form-label">Fecha Tratamiento 3</Form.Label>
                    <Form.Control type="date" id="fechaTratamiento3" value={fechaTratamiento3} onChange={(e) => setFechaTratamiento3(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="tratamiento3" >Tratamiento 3</Form.Label>
                    <Form.Control id="tratamiento3" as="select" value={tratamiento3} onChange={(e) => setTratamiento3(e.target.value)}>
                        <option value="">Seleccionar</option>
                        {tratamientoOptions}
                    </Form.Control>
                </Form.Group>

                <div className="text-center">
                    <button type="submit" className="btn btn-primary mx-2">
                        Guardar
                    </button>
                    <button type="button" className="btn btn-danger mx-2" onClick="">
                        Cancelar
                    </button>
                </div>
            </form>
        </div>
    </div>
    </Container>
  );
};

export default RegistroTratamiento;
