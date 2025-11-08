import styled, { keyframes } from "styled-components";
const floatUp = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-2px); }
  100% { transform: translateY(0px); }
`;
export const NavbarWrapper = styled.nav`
  width: 100%;
  height: 80px;
  background: linear-gradient(145deg, #ffffff, #f3f4f6);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.8rem 2rem;
  position: fixed;
  top: 0;
  z-index: 1000;
  animation: ${floatUp} 4s ease-in-out infinite;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    height: auto;
  }
`;
export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  transition: transform 0.3s ease;
  &:hover {
    transform: rotateY(10deg) scale(1.03);
  }
  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
  }
`;
export const LogoImage = styled.img`
  width: 55px;
  height: 55px;
  object-fit: contain;
  filter: drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.2));
  transition: transform 0.4s ease;
  &:hover {
    transform: rotateZ(-5deg) scale(1.05);
  }
  @media (max-width: 480px) {
    width: 42px;
    height: 42px;
  }
`;
export const CompanyName = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: clamp(1rem, 2vw + 0.5rem, 1.7rem);
  font-weight: 700;
  color: #1e3a8a;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  margin: 0;
  text-shadow: 0 2px 4px rgba(30, 58, 138, 0.2);

  @media (max-width: 768px) {
    font-size: clamp(1rem, 4vw, 1.3rem);
  }
`;
export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: flex-end;
`;
export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  .mobile-search-toggle {
    display: none;
    @media (max-width: 768px) {
      display: flex;
      align-items: center;
      justify-content: center;
      color: #333;
      margin-left: auto;
    }
  }
`;
export const SearchInput = styled.input`
  padding: 8px 12px;
  border-radius: 20px;
  border: 1px solid #bbb;
  outline: none;
  width: 180px;
  transition: all 0.4s ease;
  background: white;
  box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.1);
  font-family: "Poppins", sans-serif;
  &:focus {
    border-color: #1e3a8a;
    box-shadow: 0 0 10px rgba(14, 165, 233, 0.4);
    transform: scale(1.05);
  }
  @media (max-width: 768px) {
    width: 150px;
  }
`;
export const SearchIconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease, color 0.3s ease;
  margin-left: 8px;

  &:hover {
    color: #1e3a8a;
    transform: scale(1.15) rotateZ(5deg);
  }
`;
export const SearchResultsDropdown = styled.div`
  position: absolute;
  top: 40px;
  left: 0;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  width: 100%;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
  max-height: 200px;
  overflow-y: auto;
  z-index: 2000;
`;
export const SearchResultItem = styled.div`
  padding: 10px 14px;
  cursor: pointer;
  transition: 0.2s ease;
  font-family: "Poppins", sans-serif;

  &:hover {
    background-color: #f0f4ff;
    color: #1e3a8a;
    transform: translateX(4px);
  }
`;
