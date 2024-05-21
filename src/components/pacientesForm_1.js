import React, { useState, useEffect } from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import dataEps from '../data/eps.json';

const RegistroPaciente = () => {
    const [tipoDocumento, setTipoDocumento] = useState('');
    const [setError] = useState('');
    const [numeroIdentificacion, setNumeroIdentificacion] = useState('');
    const [tieneTumor, setTieneTumor] = useState('');
    const [primerNombre, setPrimerNombre] = useState('');
    const [primerApellido, setPrimerApellido] = useState('');
    const [edad, setEdad] = useState('');
    const [sexo, setSexo] = useState('');
    const [fechaNacimiento, setFechaNacimiento] = useState('');
    const [estadoCivil, setEstadoCivil] = useState('');
    const [nivelEducativo, setNivelEducativo] = useState('');
    const [tipoAfiliacion, setTipoAfiliacion] = useState('');
    const [validacion, setValidacion] = useState('');
    const [estadoVital, setEstadoVital] = useState('');
    const [telefono1, setTelefono1] = useState('');
    const [telefono2, setTelefono2] = useState('');
    const [telefono3, setTelefono3] = useState('');
    const [epsOptions, setEpsOptions] = useState([]);
    const [selectedEps, setSelectedEps] = useState('');

    useEffect(() => {
        // Mapea los datos para crear las opciones del select EPS
        const optionsEps = dataEps.map((eps) => (
            <option key={eps.codigo} value={eps.codigo}>
                {eps.nombre}
            </option>
        ));

        // Actualiza el estado con las opciones
        setEpsOptions(optionsEps);
    }, [])
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!tipoDocumento || !numeroIdentificacion || !primerNombre || !primerApellido) {
            setError('Todos los campos son obligatorios.');
            return;
        }
        // Aquí puedes enviar los datos del formulario
        // Puedes hacer una llamada a una API, enviar los datos a un servidor, etc.
        setError('');
        // Aquí puedes hacer lo que necesites con los datos del formulario
    };
    const handleTelefonoChange1 = (e) => {
        const value = e.target.value.replace(/\D/g, ''); // Eliminar todos los caracteres no numéricos
        if (value.length <= 10) { // Máximo de 10 números
            setTelefono1(value);

        }
    };
    const handleTelefonoChange2 = (e) => {
        const value = e.target.value.replace(/\D/g, ''); // Eliminar todos los caracteres no numéricos
        if (value.length <= 10) { // Máximo de 10 números
            setTelefono2(value);
        }
    };
    const handleTelefonoChange3 = (e) => {
        const value = e.target.value.replace(/\D/g, ''); // Eliminar todos los caracteres no numéricos
        if (value.length <= 10) { // Máximo de 10 números
            setTelefono3(value);
        }
    };
    return (
        <Container className="container-md d-flex justify-content-center align-items-center h-100" >

          <div class="card mx-auto" style={{marginTop: '50px' }}>
            <div class="card-header text-center">
              <h1>
              Información del Paciente
              </h1>
            
            </div>
            <div class="card-body">
              <h5 class="card-title">Datos de Paciente</h5>
              <hr></hr>
              <Form onSubmit={handleSubmit}>
                <Row className="mb-3 flex-wrap justify-content-start">
                    <Col md={6}>
                        <Form.Group controlId="tipoDocumento">
                            <Form.Label className='campo_obligatorio'>Tipo Documento</Form.Label>
                            <Form.Control as="select" value={tipoDocumento} onChange={(e) => setTipoDocumento(e.target.value)} required>
                                <option value="">Seleccionar</option>
                                <option value="CC">CÉDULA DIUDANIA</option>
                                <option value="TI">TARJETA  DE IDENTIDAD</option>
                                <option value="PA">PASAPORTE</option>
                                <option value="0">DESCONOCIDO</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="numeroIdentificacion">
                            <Form.Label>Número de Identificación </Form.Label>
                            <Form.Control type="text" value={numeroIdentificacion} onChange={(e) => setNumeroIdentificacion(e.target.value)} required />
                        </Form.Group>

                        <Form.Group controlId="primerNombre">
                            <Form.Label className='campo_obligatorio'>Nombres </Form.Label>
                            <Form.Control type="text" value={primerNombre} onChange={(e) => setPrimerNombre(e.target.value)} required />
                        </Form.Group>

                        <Form.Group controlId="primerApellido">
                            <Form.Label className='campo_obligatorio'>Apellidos </Form.Label>
                            <Form.Control type="text" value={primerApellido} onChange={(e) => setPrimerApellido(e.target.value)} required />
                        </Form.Group>

                        <Form.Group controlId="sexo">
                            <Form.Label className='campo_obligatorio'>Sexo </Form.Label>
                            <Form.Control as="select" value={sexo} onChange={(e) => setSexo(e.target.value)} required>
                                <option value="">Seleccionar</option>
                                <option value="1">Masculino</option>
                                <option value="2">Femenino</option>
                                <option value="0">Desconocido</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="fechaNacimiento">
                            <Form.Label className='campo_obligatorio'>Fecha de Nacimiento </Form.Label>
                            <Form.Control type="date" value={fechaNacimiento} onChange={(e) => setFechaNacimiento(e.target.value)} required />
                        </Form.Group>

                    </Col>
                    <Col md={6}>
                        <Form.Group controlId="edad">
                            <Form.Label className='campo_obligatorio'>Edad </Form.Label>
                            <Form.Control type="number" value={edad} onChange={(e) => setEdad(e.target.value)} required />
                        </Form.Group>
                        <Form.Group controlId="estadoCivil">
                            <Form.Label className='campo_obligatorio'>Estado Civil </Form.Label>
                            <Form.Control as="select" value={estadoCivil} onChange={(e) => setEstadoCivil(e.target.value)} required>
                                <option value="">Seleccionar</option>
                                <option value="1">Casado/a</option>
                                <option value="2">Viudo/a</option>
                                <option value="3">Union Libre</option>
                                <option value="4">Soltero/a</option>
                                <option value="5">Divorciado/a</option>
                                <option value="9">Desconocido</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="nivelEducativo">
                            <Form.Label>Nivel Educativo</Form.Label>
                            <Form.Control as="select" value={nivelEducativo} onChange={(e) => setNivelEducativo(e.target.value)}>
                                <option value="00">NINGUNO</option>
                                <option value="01">PREESCOLAR</option>
                                <option value="01">PREESCOLAR</option>
                                <option value="02">PRIMARIA</option>
                                <option value="03">SECUNDARIA</option>
                                <option value="04">NORMALISTA</option>
                                <option value="05">TECNICO</option>
                                <option value="06">TECNOLOGO</option>
                                <option value="07">TECNICO PROFESIONAL</option>
                                <option value="08">PROFESIONAL </option>
                                <option value="09">POSGRADO</option>
                                <option value="99">DESCONOCIDO</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="telefono1">
                            <Form.Label>Teléfono 1</Form.Label>
                            <Form.Control type="tel" value={telefono1} onChange={handleTelefonoChange1} maxLength={10} placeholder="Máximo 10 números" />
                        </Form.Group>
                        <Form.Group controlId="telefono2">
                            <Form.Label>Teléfono 2</Form.Label>
                            <Form.Control type="tel" value={telefono2} onChange={handleTelefonoChange2} maxLength={10} placeholder="Máximo 10 números" />
                        </Form.Group>
                        <Form.Group controlId="telefono3">
                            <Form.Label>Teléfono 3</Form.Label>
                            <Form.Control type="tel" value={telefono3} onChange={handleTelefonoChange3} maxLength={10} placeholder="Máximo 10 números" />
                        </Form.Group>
                    </Col>
                </Row>
                <hr></hr>
                <h5>Datos de salud</h5>
                <hr></hr>
                <Row className="mb-3 flex-wrap justify-content-start">
                    <Col md={6}>
                        <Form.Group controlId="tipoAfiliacion">
                            <Form.Label>Tipo de Afiliación</Form.Label>
                            <Form.Control as="select" value={tipoAfiliacion} onChange={(e) => setTipoAfiliacion(e.target.value)}>
                                <option value="">Seleccionar</option>
                                <option value="1">SUBSIDIADO</option>
                                <option value="2">CONTRIBUTIVO</option>
                                <option value="3">ESPECIAL</option>
                                <option value="4">SIN FILIACIÓN</option>
                                <option value="5">OTRO</option>
                                <option value="6">VINCULADO</option>
                                <option value="9">DESCONOCIDO</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="eps">
                            <Form.Label>EPS</Form.Label>
                            <Form.Control as="select" value={selectedEps} onChange={(e) => setSelectedEps(e.target.value)}>
                                <option value="">Seleccionar</option>
                                {epsOptions}
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="tieneTumor">
                            <Form.Label>Tiene Tumor</Form.Label>
                            <Form.Control as="select" value={tieneTumor} onChange={(e) => setTieneTumor(e.target.value)}>
                                <option value="">Seleccionar</option>
                                <option value="Si">Si</option>
                                <option value="No">No</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group controlId="validacion">
                            <Form.Label>Validación</Form.Label>
                            <Form.Control as="select" value={validacion} onChange={(e) => setValidacion(e.target.value)}>
                                <option value="">Seleccionar</option>
                                <option value="1">VÁLIDA</option>
                                <option value="2">INVÁLIDA</option>
                                <option value="3">NO ES POSIBLE VALIDAR</option>
                                <option value="4">PENDIENTE</option>
                                <option value="9">SIN VALIDAR</option>

                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="estadoVital">
                            <Form.Label>Estado Vital</Form.Label>
                            <Form.Control as="select" value={estadoVital} onChange={(e) => setEstadoVital(e.target.value)}>
                                <option value="">Seleccionar</option>
                                <option value="1">VIVO</option>
                                <option value="2">MUERTO</option>
                                <option value="3">PERDIDO EN EL SEGUIMIENTO</option>
                                <option value="9">DESCONOCIDO</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                <Button variant="primary" type="submit">
                    Agregar
                </Button>
            </Form>

            </div>
          </div>

     
           
            
    
        </Container >
    );
};

export default RegistroPaciente;
