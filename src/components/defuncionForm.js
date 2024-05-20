import React, { useState, useEffect } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import dataSiNo from "../data/SI-NO.json";
import dataExpedido from "../data/expedido_Por.json";
import dataPatologias from "../data/patologias.json";
import dataCatCausas from "../data/categorias_Causas.json";

const CertificadoDefuncion = () => {
  const [idPaciente, setIdPaciente] = useState("");
  const [numCertificado, setNumCertificado] = useState("");
  const [fechaMuerte, setFechaMuerte] = useState("");
  const [murioCancer, setMurioCancer] = useState("");
  const [desMuerte, setDesMuerte] = useState("");
  const [expedido, setExpedido] = useState("");
  const [nomExide, setNomExide] = useState("");
  const [lugarDefuncion, setLugarDefuncion] = useState("");
  const [patologia1, setPatologia1] = useState("");
  const [categCausa1, setCategCausa1] = useState("");
  const [patologia2, setPatologia2] = useState("");
  const [categCausa2, setCategCausa2] = useState("");
  const [patologia3, setPatologia3] = useState("");
  const [categCausa3, setCategCausa3] = useState("");
  const [si_noOptions, setSi_noOptions] = useState([]);
  const [expedidoOptions, setExpedidoOptions] = useState([]);
  const [patologias1Options, setPatologias1Options] = useState([]);
  const [patologias2Options, setPatologias2Options] = useState([]);
  const [patologias3Options, setPatologias3Options] = useState([]);
  const [categCausa1Options, setCategCausa1Options] = useState([]);
  const [categCausa2Options, setCategCausa2Options] = useState([]);
  const [categCausa3Options, setCategCausa3Options] = useState([]);
  
  
  useEffect(() => {

    const optionsSiNo = dataSiNo.map((siNo) => (
        <option key={siNo.codigo} value={siNo.codigo}>
            {siNo.nombre}
        </option>
    ));
    setSi_noOptions(optionsSiNo);



    const optionsExpedido = dataExpedido.map((expedido) => (
        <option key={expedido.codigo} value={expedido.codigo}>
            {expedido.nombre}
        </option>
    ));
    setExpedidoOptions(optionsExpedido);


    const optionsPatologias1 = dataPatologias.map((patologia1) => (
        <option key={patologia1.codigo} value={patologia1.codigo}>
            {patologia1.nombre}
        </option>
    ));
    setPatologias1Options(optionsPatologias1);

    const optionsPatologias2 = dataPatologias.map((patologia2) => (
        <option key={patologia2.codigo} value={patologia2.codigo}>
            {patologia2.nombre}
        </option>
    ));
    setPatologias2Options(optionsPatologias1);

    const optionsPatologias3 = dataPatologias.map((patologia3) => (
        <option key={patologia3.codigo} value={patologia3.codigo}>
            {patologia3.nombre}
        </option>
    ));
    setPatologias3Options(optionsPatologias1);


    const optionsCategCausa1 = dataCatCausas.map((categoriaCausa1) => (
        <option key={categoriaCausa1.codigo} value={categoriaCausa1.codigo}>
            {categoriaCausa1.nombre}
        </option>
    ));
    setCategCausa1Options(optionsCategCausa1);

    const optionsCategCausa2 = dataCatCausas.map((categoriaCausa2) => (
        <option key={categoriaCausa2.codigo} value={categoriaCausa2.codigo}>
            {categoriaCausa2.nombre}
        </option>
    ));
    setCategCausa2Options(optionsCategCausa2);

    const optionsCategCausa3 = dataCatCausas.map((categoriaCausa3) => (
        <option key={categoriaCausa3.codigo} value={categoriaCausa3.codigo}>
            {categoriaCausa3.nombre}
        </option>
    ));
    setCategCausa3Options(optionsCategCausa3);

}, [])


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
                    <Form.Control type="text" id="idPaciente" value={idPaciente} onChange={(e) => setIdPaciente(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label htmlFor="numCertificado" className='campo_obligatorio'>Número del certificado de defunción</Form.Label>
                    <Form.Control type="text" id="numCertificado" value={numCertificado} required onChange={(e) => setNumCertificado(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label htmlFor="fechaMuerte" className='campo_obligatorio'>Fecha de la muerte</Form.Label>
                    <Form.Control type="date" id="fechaMuerte" value={fechaMuerte} required onChange={(e) => setFechaMuerte(e.target.value)}/>
                </Form.Group>


                <Form.Group className="mb-3">
                    <Form.Label htmlFor="murioCancer" className='campo_obligatorio'>Murió de cáncer</Form.Label>
                    <Form.Control as="select" value={murioCancer} onChange={(e) => setMurioCancer(e.target.value)}>
                        <option value="">Seleccionar</option>
                        {si_noOptions}
                    </Form.Control>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label htmlFor="desMuerte" className="form-label">Descripción de la muerte </Form.Label>
                    <Form.Control type="text" id="desMuerte" value={desMuerte} onChange={(e) => setDesMuerte(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label htmlFor="expedido" className='campo_obligatorio'>Certificado Expedido por</Form.Label>
                    <Form.Control as="select" value={expedido} onChange={(e) => setExpedido(e.target.value)}>
                        <option value="">Seleccionar</option>
                        {expedidoOptions}
                    </Form.Control>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label htmlFor="nomExide" className='campo_obligatorio'>Nombre del Expedidor</Form.Label>
                    <Form.Control type="text" id="nomExide" value={nomExide} required onChange={(e) => setNomExide(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label htmlFor="lugarDefuncion" className="form-label">Lugar de defunción </Form.Label>
                    <Form.Control type="text" id="lugarDefuncion" value={lugarDefuncion} onChange={(e) => setLugarDefuncion(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label htmlFor="patologia1" >Patología 1</Form.Label>
                    <Form.Control as="select" value={patologia1} onChange={(e) => setPatologia1(e.target.value)}>
                        <option value="">Seleccionar</option>
                        {patologias1Options}
                    </Form.Control>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label htmlFor="categCausa1" className="form-label">Categoría causa 1</Form.Label>
                    <Form.Control as="select" value={categCausa1} onChange={(e) => setCategCausa1(e.target.value)}>
                        <option value="">Seleccionar</option>
                        {categCausa1Options}
                    </Form.Control>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label htmlFor="patologia2" >Patología 2</Form.Label>
                    <Form.Control as="select" value={patologia2} onChange={(e) => setPatologia2(e.target.value)}>
                        <option value="">Seleccionar</option>
                        {patologias2Options}
                    </Form.Control>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label htmlFor="categCausa2" className="form-label">Categoría causa 2</Form.Label>
                    <Form.Control as="select" value={categCausa2} onChange={(e) => setCategCausa2(e.target.value)}>
                        <option value="">Seleccionar</option>
                        {categCausa2Options}
                    </Form.Control>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label htmlFor="patologia3" >Patología 3</Form.Label>
                    <Form.Control as="select" value={patologia3} onChange={(e) => setPatologia3(e.target.value)}>
                        <option value="">Seleccionar</option>
                        {patologias3Options}
                    </Form.Control>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label htmlFor="categCausa3" className="form-label">Categoría causa 3</Form.Label>
                    <Form.Control as="select" value={categCausa3} onChange={(e) => setCategCausa3(e.target.value)}>
                        <option value="">Seleccionar</option>
                        {categCausa3Options}
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

export default CertificadoDefuncion;
