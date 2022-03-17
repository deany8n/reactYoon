import {Navbar, Container, Nav, NavDropdown} from "react-bootstrap"

function NavbarComponent (){
    return <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#home">KIMCHUSKI</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Inicio</Nav.Link>
          <Nav.Link href="#link">Contacto</Nav.Link>
          <NavDropdown title="Productos" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">KIMCHI</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">SALSAS</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">OTROS FERMENTOS</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
}

export default NavbarComponent