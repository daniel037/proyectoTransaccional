import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const FichaTecnicaForm = () => {
  // Estados para los campos del formulario
  const [idPacienteVisible, setIdPacienteVisible] = useState(false);
  const [numeroRegistro, setNumeroRegistro] = useState('');
  const [estadoRegistro, setEstadoRegistro] = useState('Pendiente');
  const [codigoEstadoRegistro, setCodigoEstadoRegistro] = useState('');
  const [tipoCaso, setTipoCaso] = useState('');
  const [codigoTipoCaso, setCodigoTipoCaso] = useState('');
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
  // Continúa con el resto de estados para los demás campos

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar los datos del formulario
  };



  return (
    <Container className="d-flex justify-content-center align-items-center h-100">
      <div className="card" style={{ marginTop: '50px' }}>
        <div className="card-header">
          <h1>Ficha Técnica</h1>
        </div>
        <div class="card-body">
          <h5 class="card-title">Información de la ficha técnica</h5>
          <hr></hr>
          <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Col>
                <Form.Group controlId="idPaciente" style={{ display: 'none' }}>
                  <Form.Label >idPaciente</Form.Label>
                  <Form.Control type="text" value={1} />
                </Form.Group>
                <Form.Group controlId="numeroRegistro">
                  <Form.Label>Número de registro </Form.Label>
                  <Form.Control type="text" value={numeroRegistro} onChange={(e) => setNumeroIdentificacion(e.target.value)} required />
                </Form.Group>

                <Form.Group controlId="tipocasp">
                  <Form.Label className='campo_obligatorio'>Tipo de Caso </Form.Label>
                  <Form.Control as="select" value={sexo} onChange={(e) => setSexo(e.target.value)} required>
                    <option value="">Seleccionar</option>
                    <option value="1">Pendiente</option>
                    <option value="2">Confirmado</option>
                    <option value="0">Borrado</option>
                  </Form.Control>
                </Form.Group>


                <Form.Group controlId="fechaNacimiento">
                  <Form.Label className='campo_obligatorio'>Fecha de diagnostico </Form.Label>
                  <Form.Control type="date" value={fechaNacimiento} onChange={(e) => setFechaNacimiento(e.target.value)} required />
                </Form.Group>

                <Form.Group controlId="codigoCaso">
                  <Form.Label className=''>Direccion Residencia </Form.Label>
                  <Form.Control type="text" value={fechaNacimiento} onChange={(e) => setFechaNacimiento(e.target.value)} required />
                </Form.Group>

                <Form.Group controlId="comunaResidencia">
                  <Form.Label>Comuna de Residencia</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>

                <Form.Group controlId="zonaResidencia">
                  <Form.Label>Zona de Residencia</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>

                <Form.Group controlId="municipioResidencia">
                  <Form.Label>Municipio de Residencia</Form.Label>
                  <Form.Control as="select"  >
                    <option value="">Seleccionar</option>
                    <option value="1">Pasto</option>
                    <option value="2">Ipiales</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId="departamentoResidencia">
                  <Form.Label>Departamento de Residencia</Form.Label>
                  <Form.Control as="select"  >
                    <option value="">Seleccionar</option>
                    <option value="1">Nariño</option>
                    <option value="2">Putumayo</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId="ocupacion">
                  <Form.Label>Ocupación</Form.Label>
                  <Form.Control as="select"  >
                    <option value="">Seleccionar</option>
                    <option value="">Albañil</option>
                    <option value="1">Obrero</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId="vistoEspecialista">
                  <Form.Label>Visto Especialista</Form.Label>
                  <Form.Control as="select"  >
                    {/* Opciones de visto especialista */}
                  </Form.Control>
                </Form.Group>

              </Col>
              <Col >
                <Form.Group controlId="estadoreg">
                  <Form.Label className='campo_obligatorio'>Estado registro </Form.Label>
                  <Form.Control as="select" value={sexo} onChange={(e) => setSexo(e.target.value)} required>
                    <option value="">Seleccionar</option>
                    <option value="">No hecho</option>
                    <option value="1">Hecho: OK</option>
                    <option value="2">Hecho: Raro</option>
                    <option value="0">Hecho: Invalido</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId="codigoCaso">
                  <Form.Label className=''>Codigo Caso </Form.Label>
                  <Form.Control type="text" value={fechaNacimiento} onChange={(e) => setFechaNacimiento(e.target.value)} required />
                </Form.Group>

                <Form.Group controlId="fechaNacimiento">
                  <Form.Label className='campo_obligatorio'>Fecha de incidencia </Form.Label>
                  <Form.Control type="date" value={fechaNacimiento} onChange={(e) => setFechaNacimiento(e.target.value)} required />
                </Form.Group>

                <Form.Group controlId="codigoCaso">
                  <Form.Label className=''>Barrio residencia </Form.Label>
                  <Form.Control type="text" value={fechaNacimiento} onChange={(e) => setFechaNacimiento(e.target.value)} required />
                </Form.Group>

                {/* Código comuna */}
                <Form.Group controlId="codigoComuna">
                  <Form.Label>Código de Comuna</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                {/* Zona residencia */}

                {/* Código zona */}
                <Form.Group controlId="codigoZona">
                  <Form.Label>Código de Zona</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                {/* Municipio residencia */}
                
                {/* Código municipio */}
                <Form.Group controlId="codigoMunicipio">
                  <Form.Label>Código de Municipio</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                {/* Departamento residencia */}
                
                {/* Código departamento */}
                <Form.Group controlId="codigoDepartamento">
                  <Form.Label>Código de Departamento</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                {/* Ocupación */}
                
                {/* Código ocupación */}
                <Form.Group controlId="codigoOcupacion">
                  <Form.Label>Código de Ocupación</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                {/* Visto especialista */}
                <Form.Group controlId="codigovistoEspecialista">
                  <Form.Label>Codigo Visto Especialista</Form.Label>
                  <Form.Control type="text"  >
                    {/* Opciones de visto especialista */}
                  </Form.Control>
                </Form.Group>


              </Col>
            </Row>
            <hr></hr>
            <h5>Datos de salud</h5>
            <hr></hr>
            <Row className="mb-3">
              <Col>
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
              <Col >
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
    </Container>
  );
};

export default FichaTecnicaForm;
