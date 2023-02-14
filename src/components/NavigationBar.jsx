import { Container, Navbar, Stack, Nav } from "react-bootstrap";
import "../styles/navigationbar.css";

const NavigationBar = () => {
  return (
    <>
      <Navbar fixed="top" className="Navbar" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="/images/logo.png"
              width="81"
              height="71"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>

          <Nav className="justify-content-end" activeKey="/home">
            <Nav.Item>
              <Nav.Link eventKey="link-1">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">Dinosaurs</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">Article</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">About Us</Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
