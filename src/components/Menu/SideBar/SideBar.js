import "./SideBar.css"
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';

function SideBar() {

    return (
      <Navbar collapseOnSelect expand="md" sticky="top" >
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto" >
              <Nav.Link href="#Appetizer" style={{ color: "#f0f8ff" }}>Appetizer</Nav.Link>
              <Nav.Link href="#Soup" style={{ color: "#f0f8ff" }}>Soup</Nav.Link>
              <Nav.Link href="#Chicken" style={{ color: "#f0f8ff" }}>Chicken</Nav.Link>
              <Nav.Link href="#Beef" style={{ color: "#f0f8ff" }}>Beef</Nav.Link>
              <Nav.Link href="#Shrimp" style={{ color: "#f0f8ff" }}>Shrimp</Nav.Link>
              <Nav.Link href="#Fish" style={{ color: "#f0f8ff" }}>Fish</Nav.Link>
              <Nav.Link href="#Seafood" style={{ color: "#f0f8ff" }}>Seafood</Nav.Link>
              <Nav.Link href="#Rice" style={{ color: "#f0f8ff" }}>Rice</Nav.Link>
              <Nav.Link href="#Noodles" style={{ color: "#f0f8ff" }}>Noodles</Nav.Link>
              <Nav.Link href="#Vegetarian" style={{ color: "#f0f8ff" }}>Vegetarian</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
  export default SideBar;
  