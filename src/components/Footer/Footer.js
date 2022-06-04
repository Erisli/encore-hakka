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
const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <Heading>Opening Hours</Heading>
            <FooterP>Monday-Tuesday: 11AM - 10PM </FooterP>
            <FooterP>Wednesday: Closed</FooterP>
            <FooterP>Thursday-Friday: 11AM - 10PM</FooterP>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="https://goo.gl/maps/GZAc2CcbYAiMBZG4A" target="_blank" rel="noopener noreferrer">
                3685 Keele St unit 6, North York, ON M3J 3H6</FooterLink>
            <FooterLink href="tel:+(647)351-8282">(647) 351-8282</FooterLink>
            <FooterLink href="tel:+(647)351-8283">(647) 351-8283</FooterLink>
            <FooterLink href="https://www.instagram.com/encorehakka/?hl=en" target="_blank" rel="noopener noreferrer">Instagram</FooterLink>

          </Column>

          <Column>
            <Heading>Delivery</Heading>
            <FooterLink href="https://www.ubereats.com/ca/store/encore-hakka-restaurant/yoa9c4sYRaGGC1TLIVZcNA" target="_blank" rel="noopener noreferrer">
                <img src={uber} style = {{width:50, height:50}}></img>
                </FooterLink>
            <FooterLink href="https://www.skipthedishes.com/encore-hakka-restaurant" target="_blank" rel="noopener noreferrer">
              <img src={skip} style = {{width:50, height:50}}></img>
              </FooterLink>
            <FooterLink href="https://www.doordash.com/store/encore-hakka-restaurant-toronto-470726/" target="_blank" rel="noopener noreferrer">
              <img src={dd} style = {{width:50, height:50}}></img>
              </FooterLink>
          
          </Column>
        </Row>

        <Column>

        
        </Column>
      </Container>
    </Box>
  );
};
export default Footer;