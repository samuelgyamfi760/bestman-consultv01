import styled from "styled-components";
import { motion } from "framer-motion";
export const ProjectsContainer = styled.section`
  padding: 80px 10%;
  background: #ede8f5;
  text-align: center;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 60px 5%;
  }
`;
export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #1e3a8a;
  font-weight: 700;
  margin-bottom: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;
export const SectionSubtitle = styled.p`
  font-size: 1.1rem;
  color: #3a3a3a;
  margin-bottom: 60px;
  line-height: 1.7;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  text-align: justify; /* ✅ Justified text alignment */
  text-justify: inter-word; /* ✅ Ensures even spacing between words */
`;
export const ProjectCard = styled(motion.div)`
  max-width: 900px;
  margin: 0 auto 55px auto;
  background: #ffffff;
  border-radius: 18px;
  box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
  }
`;
export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 420px;
  overflow: hidden;
  margin-bottom: 15px; /* Reduced spacing below image */

  @media (max-width: 768px) {
    height: 260px;
  }
`;
export const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;

  ${ProjectCard}:hover & {
    transform: scale(1.05);
  }
`;
export const ImageOverlay = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.2));
  color: white;
  text-align: center;
  padding: 15px 0;
`;
export const OverlayText = styled.p`
  margin: 0;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.3px;
`;
export const ProjectTitle = styled.h3`
  font-size: 1.6rem;
  color: #102a43;
  font-weight: 700;
  margin-top: 10px;
`;
export const ProjectDescription = styled.p`
  font-size: 1rem;
  color: #4a4a4a;
  padding: 0 25px 35px 25px;
  line-height: 1.6;
  text-align: justify;
`;
