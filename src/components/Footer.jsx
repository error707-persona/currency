import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
  
const Footer = () => {
  return (
    <Box>
      <h1 style={{ color: "#ff0066", 
                   textAlign: "center", 
                   marginTop: "-50px" }}>
        A platform for crypto beginners.
      </h1>
      <Container>
        <Row>
          <Column>
           
            <FooterLink href="#">About Us</FooterLink>
          </Column>
          <Column>
            
            <FooterLink href="#">Services</FooterLink>
            </Column>
          <Column>
            
            <FooterLink href="#">Contact us</FooterLink>
           
          </Column>
          <Column>
            
            <FooterLink href="#">
              {/* <i>
                <span style={{ marginLeft: "10px" }}> */}
                    LinkedIn
                {/* </span>
              </i> */}
            </FooterLink>
           
          </Column>
        </Row>
        <div style={{margin:"auto"}}> <p> © Areesha Sayed </p> </div>
           
        
      </Container>
    </Box>
  );
};
export default Footer;
