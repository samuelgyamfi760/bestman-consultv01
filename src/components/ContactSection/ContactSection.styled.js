import styled, { keyframes } from "styled-components";
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;
const float = keyframes`
  0% { transform: translateY(0px); opacity: 0.6; }
  50% { transform: translateY(-20px); opacity: 0.8; }
  100% { transform: translateY(0px); opacity: 0.6; }
`;
const emailFlap = keyframes`
  0%, 100% { transform: rotateX(0deg); }
  50% { transform: rotateX(25deg); }
`;
const clockTick = keyframes`
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(10deg); }
`;
const pulseGlow = keyframes`
  0% { box-shadow: 0 0 0px rgba(37, 211, 102, 0.4); }
  50% { box-shadow: 0 0 15px rgba(37, 211, 102, 0.8); }
  100% { box-shadow: 0 0 0px rgba(37, 211, 102, 0.4); }
`;
export const ContactContainer = styled.section`
  position: relative;
  padding: 80px 20px;
  background: #f4f8fc;
  color: #0d1b2a;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  animation: ${fadeIn} 1.2s ease forwards;
`;
export const AnimatedBackground = styled.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 20% 20%, rgba(0, 119, 182, 0.05), transparent 70%),
              radial-gradient(circle at 80% 80%, rgba(0, 119, 182, 0.05), transparent 70%);
  animation: ${float} 6s ease-in-out infinite;
  z-index: 0;
`;
export const ContactContent = styled.div`
  z-index: 2;
  max-width: 700px;
  background: #ffffff;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 6px 25px rgba(0, 0, 0, 0.1);
  text-align: center;
  animation: ${fadeIn} 1.5s ease forwards;
`;
export const ContactTitle = styled.h2`
  font-size: 2.2rem;
  color: #0d1b2a;
  margin-bottom: 20px;
`;
export const ContactInfo = styled.div`
  margin-top: 30px;
  text-align: left;
`;
export const InfoItem = styled.div`
  font-size: 1.05rem;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
  strong {
    color: #0d1b2a;
  }
  a {
    color: #0077b6;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;
export const IconWrapper = styled.span`
  display: inline-flex;
  color: #0077b6;
  font-size: 1.2rem;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
  svg {
    animation: ${pulseGlow} 2.5s ease-in-out infinite;
  }
`;
export const EmailIconWrapper = styled.span`
  display: inline-flex;
  color: #0077b6;
  font-size: 1.3rem;
  margin-right: 5px;
  animation: ${emailFlap} 3s ease-in-out infinite;
  transform-origin: top center;
`;
export const ClockIconWrapper = styled.span`
  display: inline-flex;
  color: #0077b6;
  font-size: 1.3rem;
  margin-right: 5px;
  animation: ${clockTick} 2.2s ease-in-out infinite;
  transform-origin: center;
`;
export const EmailLink = styled.a`
  color: #0077b6;
  font-weight: 500;
  &:hover {
    color: #023e8a;
  }
`;
export const WhatsAppButton = styled.a`
  margin-top: 25px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 26px;
  background-color: #25d366;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 50px;
  text-decoration: none;
  transition: background 0.3s ease, transform 0.3s ease;
  animation: ${pulseGlow} 2.8s ease-in-out infinite;
  &:hover {
    background-color: #1ebe5d;
    transform: scale(1.05);
  }
  svg {
    font-size: 1.2rem;
  }
`;
