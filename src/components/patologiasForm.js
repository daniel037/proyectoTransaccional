import React, { useState, useEffect } from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import patologias from '../data/patologias.json';

const RegistroPatologia = () => {
    const [patologia, setPatologia] = useState('');
    const [codigoPatologia, setCodigoPatologia] = useState('');
    const [coincidencias, setCoincidencias] = useState([]);
    const [categoriaCausa, setCategoriaCausa] = useState('');
    const [codigoCategoria, setCodigoCategoria] = useState('');
    const [observaciones, setObservaciones] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Aquí puedes enviar los datos del formulario a tu servidor o realizar alguna acción con ellos
      console.log({
        patologia,
        codigoPatologia,
        categoriaCausa,
        codigoCategoria,
        observaciones
      });
    };

    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        setCodigoPatologia(inputValue);
    
        // Filtrar las patologías que coinciden con el valor de entrada
        const coincidencias = patologias.filter(patologia =>
          patologia.nombre.toLowerCase().includes(inputValue.toLowerCase())
        );
        setCoincidencias(coincidencias);
      };
    
      const handleOptionClick = (nombrePatologia) => {
        setCodigoPatologia(nombrePatologia);
        setCoincidencias([]);
      };

      const handleCancel = () => {
        // Lógica para cancelar
      };
  
    return (
      <Container className="d-flex justify-content-center align-items-center h-100">
      <div className="card" style={{ marginTop: '50px' }}>
        <div className="card-header">
          <h1>Información Patologia</h1>
        </div>
        <div className="card-body">
          <h5 className="card-title">Datos Patologia</h5>
          <hr />
          <Row className="mb-3">
            <Col>
              <Form.Group controlId="patologia">
                <Form.Label>Patología</Form.Label>
                <Form.Control
                  type="text"
                  value={patologia}
                  onChange={(e) => setPatologia(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group controlId="codigoPatologia">
                <Form.Label>Código de la Patología</Form.Label>
                <Form.Control
                  type="text"
                  value={codigoPatologia}
                  onChange={handleInputChange}
                />
                <ul className="list-group">
                  {coincidencias.map((patologia, index) => (
                    <li
                      key={index}
                      className="list-group-item"
                      onClick={() => handleOptionClick(patologia.nombre)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          handleOptionClick(patologia.nombre);
                        }
                      }}
                      tabIndex={0}
                    >
                      {patologia.nombre}
                    </li>
                  ))}
                </ul>
              </Form.Group>
              <Form.Group controlId="categoriaCausa">
                <Form.Label>Categoría de la Causa</Form.Label>
                <Form.Select
                  value={categoriaCausa}
                  onChange={(e) => setCategoriaCausa(e.target.value)}
                  required
                >
                  <option value="">Seleccionar categoría</option>
                  <option value="1">A</option>
                  <option value="2">B</option>
                  <option value="3">C</option>
                  <option value="4">D</option>
                </Form.Select>
              </Form.Group>
              <Form.Group controlId="codigoCategoria">
                <Form.Label>Código de la Categoría</Form.Label>
                <Form.Control
                  type="text"
                  value={codigoCategoria}
                  onChange={(e) => setCodigoCategoria(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="observaciones">
                <Form.Label>Observaciones</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={observaciones}
                  onChange={(e) => setObservaciones(e.target.value)}
                />
              </Form.Group>
              <div className="text-center" style={{ marginTop: '20px' }}>
                <Button type="submit" className="btn btn-primary mx-2">Registrar</Button>
                <Button type="button" className="btn btn-danger" onClick={handleCancel}>Cancelar</Button>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </Container>
      );
    };
  
  export default RegistroPatologia;