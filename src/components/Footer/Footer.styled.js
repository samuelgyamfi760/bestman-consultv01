import styled from "styled-components";
export const FooterContainer = styled.footer`
  background: #0f172a;
  color: #e2e8f0;
  padding: 50px 8% 25px;
  position: relative;
  overflow: hidden;
  @media (max-width: 768px) {
    padding: 40px 6% 30px;
  }
`;
export const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr 0.8fr;
  gap: 35px;
  align-items: start;
  @media (max-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;
export const FooterColumn = styled.div`
  p {
    font-size: 0.95rem;
    color: #ccc;
    line-height: 1.6;
  }
`;
export const FooterTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 15px;
  color: ${({ theme }) => theme.colors.accent || "#f4b400"};
  font-weight: 600;
`;
export const FooterLink = styled.a`
  display: block;
  color: #ccc;
  text-decoration: none;
  margin: 6px 0;
  font-size: 0.95rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.accent || "#f4b400"};
  }
`;
export const SocialIcons = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 18px;
  margin-top: 15px;
  padding-left: 10px;

  @media (max-width: 768px) {
    justify-content: center;
    padding-left: 0;
  }
`;
export const SocialIconLink = styled.a`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.08);
  color: #ede8f5;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.35s ease;
  &:hover {
    background: #1c7b80;
    color: #fff;
    transform: translateY(-4px);
    box-shadow: 0 4px 10px rgba(28, 123, 128, 0.4);
  }
`;
export const FooterBottom = styled.div`
  margin-top: 30px;
  padding-top: 15px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  text-align: center;
  font-size: 0.9rem;
  color: #bbb;
`;
export const ScrollToTopButton = styled.button`
  position: absolute;
  right: 40px;
  bottom: 35px;
  background: ${({ theme }) => theme.colors.accent || "#f4b400"};
  color: #000;
  border: none;
  border-radius: 50%;
  width: 42px;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: translateY(-5px);
    background: ${({ theme }) => theme.colors.hover || "#ffce33"};
  }
  @media (max-width: 768px) {
    right: 20px;
    bottom: 25px;
  }
`;
