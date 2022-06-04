import "./Header.css"
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { useWindowSize } from "../../Hooks/useWindowSize";
import logo from "../../images/logo.png"
function Header() {
  const size = useWindowSize();

  const w = size.width;
  const h = size.height;
  return (
    <Navbar collapseOnSelect expand="md" sticky="top" variant="dark" >
      <Container style={{width:w}}>

        <Navbar.Brand href="/home" style={{ color: "#ffffcc"}}>
          <img alt="Encore Hakka" src={logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" >
            <Nav.Link href="/features" style={{ color: "#ffffcc" }}>Features</Nav.Link>
            <Nav.Link href="/gallery" style={{ color: "#ffffcc" }}>Gallery</Nav.Link>
            <NavDropdown title="Menu" id="collapsible-nav-dropdown"  style={{color: "#ffffcc"}}>
              <NavDropdown.Item href="/lunch" >Lunch Special</NavDropdown.Item>
              <NavDropdown.Item href="/combos"  >Combos</NavDropdown.Item>
              <NavDropdown.Item href="/trays"  >Party Trays</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/menu">Full Menu</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/coupons" style={{ color: "#ffffcc" }}>Coupons</Nav.Link>
            <Nav.Link href="/contact" style={{ color: "#ffffcc" }}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
