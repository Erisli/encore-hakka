import "./Header.css"
import React, { useState } from 'react';
import { Container, Navbar, Nav, NavDropdown, Offcanvas } from 'react-bootstrap';
import ScrollToTop from "../../Hooks/ScrollToTop";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png"
function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const onClick = () => {
    toggleMenu();
    ScrollToTop();
  }
  const handleClose = () => setMenuOpen(false)
  return (

    <Navbar collapseOnSelect expand="md" sticky="top">
      
      <Container >
      
        <Navbar.Brand as={Link} to="/home" onClick={ScrollToTop}>
          <img alt="Encore Hakka" src={logo} />
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md" onClick={toggleMenu} />
        
        <Navbar.Offcanvas
          id="offcanvasNavbar-expand-md"
          aria-labelledby="offcanvasNavbarLabel-expand-md"
          placement="end"
          restoreFocus={false}
          show={menuOpen}
          onHide={handleClose}
        >
          
          <Offcanvas.Header closeButton >
            <Offcanvas.Title id="offcanvasNavbar-expand-md" style={{ color: "#60355a" }}>
              Encore Hakka
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body >
            <Nav className="ms-auto" id="offcanvasNavbar-expand-md">
              <Nav.Link as={Link} to="gallery" style={{ color: "#60355a" }} onClick={onClick}>Gallery</Nav.Link>

              <NavDropdown title="Special" id="offcanvasNavbarDropdown-expand-md" >
                <NavDropdown.Item as={Link} to="/lunch" onClick={onClick} >Lunch Special</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/combos" onClick={onClick} >Combos</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/trays" onClick={onClick} >Party Trays</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link as={Link} to="/menu" style={{ color: "#60355a" }} onClick={onClick}>Full Menu</Nav.Link>
              
              <Nav.Link as={Link} to="/coupons" style={{ color: "#60355a" }}
                onClick={toggleMenu} >Coupons</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas> 
      </Container >
    </Navbar >
  );

}

export default Header;
