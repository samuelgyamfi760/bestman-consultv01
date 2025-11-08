import { ArrowUp, Facebook } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import {
  FooterContainer,
  FooterContent,
  FooterColumn,
  FooterTitle,
  FooterLink,
  SocialIcons,
  SocialIconLink,
  FooterBottom,
  ScrollToTopButton
} from "./Footer.styled";
const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <FooterContainer>
      <FooterContent>
        <FooterColumn style={{ flex: "1.4" }}>
          <FooterTitle>About Us</FooterTitle>
          <p>
            BESTMAN CONSULT AND CONSTRUCTION WORKS is a trusted partner in civil
            engineering and mining construction, currently working on Newmont
            Ahafo North Resettlement projects. We specialize in delivering
            high-quality infrastructure with a focus on safety, innovation, and
            client satisfaction.
          </p>
        </FooterColumn>
        <FooterColumn>
          <FooterTitle>Quick Links</FooterTitle>
          <FooterLink href="#home">Home</FooterLink>
          <FooterLink href="#services">Services</FooterLink>
          <FooterLink href="#projects">Projects</FooterLink>
          <FooterLink href="#contact">Contact</FooterLink>
        </FooterColumn>
        <FooterColumn>
          <FooterTitle>Contact Info</FooterTitle>
          <p>Tanoso-Sunyani Road, Ghana</p>
          <p>Phone: +233 243 396 014</p>
          <p>Email: bestmanconsult@gmail.com</p>
        </FooterColumn>
        <FooterColumn>
          <FooterTitle>Follow Us</FooterTitle>
          <SocialIcons>
            <SocialIconLink
              href="https://www.facebook.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook size={20} />
            </SocialIconLink>
            <SocialIconLink
              href="https://www.tiktok.com/@yourhandle"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTiktok size={20} />
            </SocialIconLink>
          </SocialIcons>
        </FooterColumn>
      </FooterContent>
      <FooterBottom>
        © {new Date().getFullYear()} BESTMAN CONSULT AND CONSTRUCTION WORKS. All Rights Reserved.
      </FooterBottom>
      <ScrollToTopButton onClick={handleScrollToTop}>
        <ArrowUp size={22} />
      </ScrollToTopButton>
    </FooterContainer>
  );
};
export default Footer;
               