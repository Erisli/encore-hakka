import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
  FooterP
} from "./FooterStyles";
import uber from "../../images/uberLogo.png"
import skip from "../../images/skipLogo.png"
import dd from "../../images/ddLogo.jpg"
import ins from "../../images/InsLogo.png"
const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <Heading>Opening Hours</Heading>
            <FooterP>Monday-Tuesday: 11AM - 10PM </FooterP>
            <FooterP>Wednesday: Closed</FooterP>
            <FooterP>Thursday-Sunday: 11AM - 10PM</FooterP>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="https://goo.gl/maps/GZAc2CcbYAiMBZG4A" target="_blank" rel="noopener noreferrer" >
              3685 Keele St unit 6, North York, ON M3J 3H6</FooterLink>
            <FooterLink href="tel:+(647)351-8282" style={{ color: "#2B64E9" }}>(647) 351-8282</FooterLink>
            <FooterLink href="tel:+(647)351-8283" style={{ color: "#2B64E9" }}>(647) 351-8283</FooterLink>
            <FooterLink href="https://www.instagram.com/encorehakka/?hl=en" target="_blank" rel="noopener noreferrer" >
              <img src={ins} style={{ width: 50, height: 50 }}>
              </img>
            </FooterLink>

          </Column>

          <Column>
            <Heading>Delivery</Heading>
            <FooterLink href="https://www.ubereats.com/ca/store/encore-hakka-restaurant/yoa9c4sYRaGGC1TLIVZcNA" target="_blank" rel="noopener noreferrer">
              <img src={uber} style={{ width: 50, height: 50 }}></img>
            </FooterLink>
            <FooterLink href="https://www.skipthedishes.com/encore-hakka-restaurant" target="_blank" rel="noopener noreferrer">
              <img src={skip} style={{ width: 50, height: 50 }}></img>
            </FooterLink>
            <FooterLink href="https://www.doordash.com/store/encore-hakka-restaurant-toronto-470726/" target="_blank" rel="noopener noreferrer">
              <img src={dd} style={{ width: 50, height: 50 }}></img>
            </FooterLink>

          </Column>
          <Column className="justify-content-end">
            <div >
              <FooterP style={{ fontSize: "14px" }}>
                Created and maintained by <a href="https://www.linkedin.com/in/eris-li-553ab6192/" target="_blank">Eris Li</a>
              </FooterP>
              <FooterP style={{ fontSize: "14px" }}>
                Contact for any issues
              </FooterP>
            </div>

          </Column>
        </Row>


      </Container>
    </Box>
  );
};
export default Footer;