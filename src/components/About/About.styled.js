import styled, { keyframes } from "styled-components";
const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(25px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
export const AboutContainer = styled.section`
  width: 100%;
  padding: 60px 20px;
  background-color: #1c7b80;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const SectionTitle = styled.h2`
  font-size: 2.3rem;
  color: #ffffff;
  margin-bottom: 1rem;
  text-align: center;
  position: relative;
  &::after {
    content: "";
    display: block;
    width: 80px;
    height: 3px;
    background: #d4af37;
    margin: 8px auto 0;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;
export const AboutBlock = styled.div`
  max-width: 900px;
  width: 100%;
  background: rgba(255, 255, 255, 0.08);
  color: #f8f9fa;
  padding: 25px 30px;
  margin: 15px 0;
  border-radius: 12px;
  text-align: justify;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  animation: ${fadeUp} 1s ease both;
  h3 {
    font-size: 1.4rem;
    color: #ffffff;
    margin-bottom: 0.6rem;
    display: flex;
    align-items: center;
  }
  p {
    color: #e5e5e5;
    font-size: 1.05rem;
    line-height: 1.8;
  }
  &:nth-child(2) {
    animation-delay: 0.1s;
  }
  &:nth-child(3) {
    animation-delay: 0.2s;
  }
  &:nth-child(4) {
    animation-delay: 0.3s;
  }
  @media (max-width: 768px) {
    padding: 20px;
    h3 {
      font-size: 1.2rem;
    }
    p {
      font-size: 0.95rem;
    }
  }
`;
