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
           
            <FooterLink href="https://drive.google.com/file/d/1W6GXQBQymiJNA8TK4Rc8HlbCoCQAI11g/view?usp=sharing">About Us</FooterLink>
          </Column>
          <Column>
            
            <FooterLink href="#">Services</FooterLink>
            </Column>
          <Column>
            
            <FooterLink href="#">Contact us</FooterLink>
           
          </Column>
          <Column>
            
            <FooterLink href="https://www.linkedin.com/in/areeshasayed/">
              {/* <i>
                <span style={{ marginLeft: "10px" }}> */}
                    LinkedIn
                {/* </span>
              </i> */}
            </FooterLink>
           
          </Column>
        </Row>
        <div style={{margin:"auto"}}> <p> Made By Areesha Sayed </p> </div>
      </Container>
    </Box>
  );
};
export default Footer;
