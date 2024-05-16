import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUsers } from '@fortawesome/free-solid-svg-icons'; 
import { Link } from "react-router-dom";
import '../css/Encabezado.css'; 

function Encabezado() {
    return (
        <Navbar variant="dark" className="navbar-personalizada" style={{boxShadow: '0px 0px 10px gray' }} expand="lg">
            <Navbar.Brand as={Link} to="/" style={{ marginRight: '30px', marginLeft: '30px' }}>
                {' Yachay'}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto" >
                    <Nav.Link as={Link} to="/" className="nav-link-destacado" style={{ marginRight: '40px' }}>
                        <FontAwesomeIcon icon={faHome} /> Inicio
                    </Nav.Link>
                    <Nav.Link as={Link} to="/" className="nav-link-destacado" style={{ marginRight: '40px' }}>
                        <FontAwesomeIcon icon={faUsers} /> Noticias
                    </Nav.Link>
                    <Nav.Link as={Link} to="/login" className="nav-link-destacado" style={{ marginRight: '40px' }}>
                         Iniciar Sesión
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
export default Encabezado;