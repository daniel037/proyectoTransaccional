import React, { useState } from 'react';
import { Card, Button, Form, Container, Row, Col, Spinner, InputGroup } from 'react-bootstrap';
import { EyeFill, EyeSlashFill } from 'react-bootstrap-icons'; // Iconos para mostrar y ocultar la contraseña
import logo from '../imagenes/logo2.png';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // Estado para controlar la visibilidad de la contraseña
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email || !password) {
      toast.error('Ambos campos son obligatorios.');
      return;
    }

    setLoading(true);

    try {
      const userData = { email, password };
      const jwtToken = process.env.REACT_APP_JWT_TOKEN;

      const response = await axios.post(process.env.REACT_APP_API_LOGIN, userData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${jwtToken}`,
        },
      });
      localStorage.setItem('token', response.data.tokenSesion);
      localStorage.setItem('datosUsuario', JSON.stringify(response.data));
      navigate('/Principal');
    } catch (error) {
      toast.error('No se pudo iniciar sesión. Verifica tus credenciales.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container style={{ paddingBottom: '0px' }}>
      <Row className="align-items-center justify-content-center vh-100">
        <Col md={12}>
          <ToastContainer />
          <Card className="shadow" style={{ width: '100%', maxWidth: '400px', margin: 'auto', padding: '20px' }}>
            <Card.Body className="d-flex flex-column align-items-center">
              <img src={logo} alt="Logo" style={{ width: '120px', height: '90px', marginBottom: '20px' }} />
              <h2 className="mb-4">Iniciar sesión</h2>
              <Form onSubmit={handleSubmit} className="w-100">
                <Form.Group controlId="formBasicEmail" className="mb-3">
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Correo electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formBasicPassword" className="mb-3">
                  <InputGroup>
                    <Form.Control
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      placeholder="Contraseña"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <InputGroup.Text onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? <EyeSlashFill /> : <EyeFill />}
                    </InputGroup.Text>
                  </InputGroup>
                </Form.Group>
                <Button type="submit" variant="primary" className="w-100" disabled={loading} style={{ backgroundColor: '#0C5FCF' }}>
                  {loading ? <Spinner animation="border" size="sm" /> : 'Iniciar sesión'}
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
