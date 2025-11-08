import {
  AboutContainer,
  SectionTitle,
  AboutBlock,
} from "./About.styled";
import { FaShieldAlt, FaStar, FaEye } from "react-icons/fa";
const About = () => {
  return (
    <AboutContainer>
      <SectionTitle>About Us</SectionTitle>
      <AboutBlock>
        <h3>
          <FaShieldAlt style={{ marginRight: "8px", color: "#FFD700" }} /> Our Mission
        </h3>
        <p>
          At Bestman Consult & Construction Works, our mission is to deliver
          exceptional construction and surveying services that meet the highest
          industry standards. We are committed to building strong, safe, and
          sustainable infrastructure with a keen focus on mining safety protocols
          and Newmont’s standards of excellence.
        </p>
      </AboutBlock>
      <AboutBlock>
        <h3>
          <FaStar style={{ marginRight: "8px", color: "#FFD700" }} /> Our Values
        </h3>
        <p>
          Integrity, Safety, Excellence, Innovation, and Community. We operate
          with unwavering integrity, prioritize safety in every task, pursue
          excellence, encourage innovation in construction practices, and
          contribute to the communities we serve.
        </p>
      </AboutBlock>
      <AboutBlock>
        <h3>
          <FaEye style={{ marginRight: "8px", color: "#FFD700" }} /> Our Vision
        </h3>
        <p>
          To become a leading name in Ghana’s civil and construction industry by
          leveraging technology, safety standards, and mining-aligned protocols
          to deliver transformative infrastructure that shapes the nation’s
          future.
        </p>
      </AboutBlock>
    </AboutContainer>
  );
};
export default About;
