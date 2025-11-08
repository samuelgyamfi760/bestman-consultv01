import { useEffect, useState } from "react";
import { FiMail } from "react-icons/fi";
import { FaPhoneAlt, FaClock, FaWhatsapp } from "react-icons/fa";
import {
  ContactContainer,
  ContactContent,
  ContactTitle,
  ContactInfo,
  InfoItem,
  WhatsAppButton,
  EmailLink,
  EmailIconWrapper,
  ClockIconWrapper,
  AnimatedBackground,
  IconWrapper,
} from "./ContactSection.styled";
const ContactSection = () => {
  const phoneNumber = "233243396014";
  const email = "consultbestman@gmail.com";
  const hours = "Mon–Sat, 8:00 AM – 5:00 PM";
  const whatsappLink = `https://wa.me/${phoneNumber}`;
  const emailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
  const [currentTime, setCurrentTime] = useState("");
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <ContactContainer id="contact">
      <AnimatedBackground />
      <ContactContent>
        <ContactTitle>Get in Touch</ContactTitle>
        <p>
          We're here to assist you. You can reach out to us during our active
          hours or send us an email  our team will respond promptly.
        </p>
        <ContactInfo>
          <InfoItem>
            <IconWrapper>
              <FaPhoneAlt />
            </IconWrapper>
            <strong>Phone:</strong> +233 24 339 6014
          </InfoItem>
          <InfoItem>
            <EmailIconWrapper>
              <FiMail size={18} />
            </EmailIconWrapper>
            <strong>Email:</strong>{" "}
            <EmailLink href={emailLink} target="_blank" rel="noopener noreferrer">
              {email}
            </EmailLink>
          </InfoItem>
          <InfoItem>
            <ClockIconWrapper>
              <FaClock />
            </ClockIconWrapper>
            <strong>Working Hours:</strong> {hours}
            <br />
            <span style={{ fontSize: "0.9rem", color: "#2E7D32" }}>
              Current Time: {currentTime}
            </span>
          </InfoItem>
        </ContactInfo>
        <p style={{ marginTop: "20px", color: "#0D1B2A" }}>
          You can also reach us instantly on WhatsApp:
        </p>
        <WhatsAppButton
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer" >
          <FaWhatsapp /> Chat on WhatsApp
        </WhatsAppButton>
      </ContactContent>
    </ContactContainer>
  );
};
export default ContactSection;
