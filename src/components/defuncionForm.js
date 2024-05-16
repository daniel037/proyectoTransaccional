import React, { useState, useEffect } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import patologias from "../data/patologias.json";

const CertificadoDefuncion = () => {
  const [idPaciente, setidPaciente] = useState("");
  const [numCertificado, setnumCertificado] = useState("");
  const [fechaMuerte, setfechaMuerte] = useState("");
  const [horaMuerte, sethoraMuerte] = useState("");
  const [murioCancer, setmurioCancer] = useState("");
  const [desMuerte, setdesMuerte] = useState("");
  const [expedido, setexpedido] = useState("");
  const [codigoExp, setcodigoExp] = useState("");
  const [nomExide, setnomExide] = useState("");
  const [lugarDefuncion, setlugarDefuncion] = useState("");
  const [codLugar, setcodLugar] = useState("");


  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes enviar los datos del formulario a tu servidor o realizar alguna acción con ellos
    console.log({
        idPaciente,
        numCertificado, 
        fechaMuerte,
        horaMuerte,
        murioCancer,
        desMuerte,
        expedido,
        codigoExp,
        nomExide,
        lugarDefuncion, 
        codLugar,
    });
  };



  return (
    <Container className="d-flex justify-content-center align-items-center h-100">
    <div class="card" style={{ marginTop: "50px" }}>
        <div class="card-header">
          <h1>Certificado de Defunción</h1>
        </div>

        <div class="card-body">
  
            <form onSubmit={handleSubmit}>

                <Form.Group className="mb-3" hidden>
                    <Form.Label htmlFor="idPaciente" className="form-label">Id Paciente</Form.Label>
                    <Form.Control type="text" id="idPaciente" value={idPaciente} onChange={(e) => setidPaciente(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label htmlFor="numCertificado" className='campo_obligatorio'>Número del certificado de defunción</Form.Label>
                    <Form.Control type="text" id="numCertificado" value={numCertificado} required onChange={(e) => setnumCertificado(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label htmlFor="fechaMuerte" className='campo_obligatorio'>Fecha de la muerte</Form.Label>
                    <Form.Control type="date" id="fechaMuerte" value={fechaMuerte} required onChange={(e) => setfechaMuerte(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label htmlFor="horaMuerte" className="form-label">Hora de muerte</Form.Label>
                    <Form.Control type="text" id="horaMuerte" value={horaMuerte} onChange={(e) => sethoraMuerte(e.target.value)}/>
                    {/* Puedes proporcionar un campo de entrada o un componente de autocompletado para el código de la categoría */}
                </Form.Group>


                <Form.Group className="mb-3">
                    <Form.Label htmlFor="murioCancer" className='campo_obligatorio'>Murió de cáncer</Form.Label>
                    <Form.Control type="text" id="murioCancer" value={murioCancer} required onChange={(e) => setmurioCancer(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label htmlFor="desMuerte" className="form-label">Descripción de la muerte </Form.Label>
                    <Form.Control type="text" id="desMuerte" value={desMuerte} onChange={(e) => setdesMuerte(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label htmlFor="expedido" className='campo_obligatorio'>Expedido por</Form.Label>
                    <Form.Control type="text" id="expedido" value={expedido} required onChange={(e) => setexpedido(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label htmlFor="codigoExp" className="form-label">Código expedido por</Form.Label>
                    <Form.Control type="text" id="codigoExp" value={codigoExp} onChange={(e) => setcodigoExp(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label htmlFor="nomExide" className='campo_obligatorio'>Nombre del que expide</Form.Label>
                    <Form.Control type="text" id="nomExide" value={nomExide} required onChange={(e) => setnomExide(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label htmlFor="lugarDefuncion" className="form-label">Lugar de defunción </Form.Label>
                    <Form.Control type="text" id="lugarDefuncion" value={lugarDefuncion} onChange={(e) => setlugarDefuncion(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label htmlFor="codLugar">Código del lugar</Form.Label>
                    <Form.Control type="text" id="codLugar" value={codLugar} onChange={(e) => setcodLugar(e.target.value)}/>
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

export default CertificadoDefuncion;
