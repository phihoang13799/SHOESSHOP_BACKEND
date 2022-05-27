import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BusinessIcon from '@mui/icons-material/Business';
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
      <h1 style={{ color: "#000", 
                   textAlign: "center", 
                   marginTop: "-50px",
                   fontSize:"25px" }}>
        <i>We specialize in providing products with the best quality and price to customers</i>
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading><i>About Us</i></Heading>
            <FooterLink ><i>Sneakers Shop</i></FooterLink>
            <FooterLink ><i>Sports shoe dealer</i></FooterLink>
          </Column>
          <Column>
            <Heading><i>Services</i></Heading>
            <FooterLink ><i>Buying</i></FooterLink>
            <FooterLink ><i>Selling</i></FooterLink>
            <FooterLink ><i>Shipping</i></FooterLink>
          </Column>
          <Column>
            <Heading><i>Contact Us</i></Heading>
            <div>
                <PhoneIcon  style={{fontSize:"20px"}}/>
                <i style={{fontSize:"13px", marginLeft: "10px",marginBottom: "10px" }}>MobilePhone: </i>
            </div>
            <FooterLink href="tel:"><i>+84337089396</i></FooterLink>
            <div>
                <MailOutlineIcon style={{fontSize:"20px"}} />
                <i style={{ marginLeft: "10px",marginBottom: "10px" }}>Email: </i>
            </div>
            <FooterLink href="mailto:mail@mail.com"><i>abc@gmail.com</i></FooterLink>
            <div>
                <BusinessIcon style={{fontSize:"20px"}} />
                <i style={{ marginLeft: "10px",marginBottom: "10px" }}>Address: </i>
            </div>
            <FooterLink href="#"><i>71 Ngũ Hành Sơn, quận Ngũ Hành Sơn, thành phố Đà Nẵng</i></FooterLink>
          </Column>
          <Column>
            <Heading><i>Social Media</i></Heading>
            <FooterLink href="https://www.facebook.com/hoang.haha.169/">
            <FacebookIcon style={{ marginBottom: "0px",fontSize:"20px" }} />
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
                <InstagramIcon  style={{fontSize:"20px"}}/>
              <i className="fab fa-instagram">
                <i style={{ marginLeft: "10px" }}>
                  Instagram
                </i>
              </i>
            </FooterLink>
            <FooterLink href="#">
                <TwitterIcon  style={{fontSize:"20px"}}/>
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
                <YouTubeIcon  style={{fontSize:"20px"}}/>
                <i style={{ marginLeft: "10px" }}>
                  Youtube
                </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;
