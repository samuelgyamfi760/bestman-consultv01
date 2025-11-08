import styled from "styled-components";
export const ServicesContainer = styled.section`
  position: relative;
  overflow: hidden;
  padding: 100px 20px;
  background: #afdde5; /* Updated background color */
  color: #0d1b2a;
  text-align: center;
  min-height: 100vh;

  & > * {
    position: relative;
    z-index: 2; /* Keeps content above the background animation */
  }
`;
export const ServicesTitle = styled.h2`
  font-size: 2.5rem;
  color: #0d1b2a;
  margin-bottom: 40px;
  font-weight: 700;
  position: relative;
  &::after {
    content: "";
    display: block;
    width: 80px;
    height: 3px;
    background: #d4af37;
    margin: 10px auto 0;
    border-radius: 5px;
  }
`;
export const IntroParagraph = styled.p`
  max-width: 900px;
  margin: 0 auto 60px;
  font-size: 1.05rem;
  line-height: 1.9; /* Increased for better readability */
  text-align: justify; /* Nicely justified text */
  color: #1b263b;
  background: rgba(255, 255, 255, 0.85);
  padding: 30px 25px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  text-justify: inter-word; /* Ensures even spacing across lines */
`;
export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  justify-content: center;
  align-items: stretch;
`;
export const ServiceItem = styled.div`
  background: rgba(255, 255, 255, 0.85);
  border-radius: 16px;
  padding: 30px 20px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }
  svg {
    color: #d4af37;
    margin-bottom: 15px;
  }
`;
export const ServiceName = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 10px;
  color: #0d1b2a;
`;
export const ServiceDescription = styled.p`
  font-size: 0.95rem;
  color: #2f3e46;
  line-height: 1.6;
  text-align: justify;
`;
