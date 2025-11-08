import styled, { keyframes } from "styled-components";
const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(25px); }
  to { opacity: 1; transform: translateY(0); }
`;
const zoomIn = keyframes`
  from { transform: scale(1.08); }
  to { transform: scale(1); }
`;
export const Section = styled.section`
  position: relative;
  overflow: hidden;
  margin: 0;
  padding-top: 0px;
  background-color: #fff;
`;
export const Container = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
`;
export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 80px);
  min-height: 400px;

  @media (min-width: 768px) {
    height: calc(100vh - 80px);
  }
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.75));
    z-index: 1;
  }
`;
export const FadingImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  animation: ${zoomIn} 6s ease-in-out infinite alternate;
  transition: opacity 0.7s ease-in-out;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  &.fade-in {
    opacity: 1;
  }
  &.fade-out {
    opacity: 0;
  }
`;
export const TextOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -45%); 
  text-align: center;
  color: #fff;
  z-index: 2;
  padding: 1.8rem 2.2rem;
  border-radius: 1rem;
  background: rgba(15, 23, 42, 0.45);
  backdrop-filter: blur(6px);
  max-width: 90%;
  animation: ${fadeUp} 0.9s ease-in-out;
  h1 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 0.8rem;

    @media (min-width: 768px) {
      font-size: 2.8rem;
    }
    @media (min-width: 1024px) {
      font-size: 3rem;
    }
  }
  p {
    font-size: 1rem;
    margin-bottom: 1.5rem;
    color: #e2e8f0;
    line-height: 1.5;

    @media (min-width: 768px) {
      font-size: 1.125rem;
    }
  }
  button {
    background: linear-gradient(135deg, #1e3a8a, #2563eb);
    color: #fff;
    font-weight: 600;
    padding: 0.75rem 2rem;
    border-radius: 30px;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      background: linear-gradient(135deg, #2563eb, #1d4ed8);
      transform: translateY(-3px);
      box-shadow: 0px 6px 15px rgba(37, 99, 235, 0.4);
    }
  }
`;
export const DotsContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 12px;
  z-index: 5;
`;
export const Dot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${({ className }) =>
    className === "active" ? "#2563eb" : "rgba(255, 255, 255, 0.5)"};
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: #3b82f6;
    transform: scale(1.2);
  }
`;
