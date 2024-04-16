import React from "react";

import { Navbar, Container, Nav } from "react-bootstrap";

import { Link } from "react-router-dom";



const Header: React.FC = () => {
    return (
        <Navbar bg="dark" expand="lg">
            <Container>
                <Navbar.Brand href="" className="brand-logo" text-light >ESG.web</Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} className="nav-Item" style={{ color: "#ffffff" }} to="/">
                            Início
                        </Nav.Link>

                        <Nav.Link as={Link} className="nav-Item" style={{ color: "#ffffff" }} to="/tarefas">
                            Iniciativas
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;