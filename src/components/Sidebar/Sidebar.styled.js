import styled, { keyframes } from "styled-components";
const fadeIn = keyframes`
  from { opacity: 0; transform: translateX(30px); }
  to { opacity: 1; transform: translateX(0); }
`;
export const HamburgerIcon = styled.div`
  position: fixed;
  top: 90px;
  right: 25px;
  cursor: pointer;
  z-index: 1200;
  color: #0f172a;
  background: #74edd3;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.25);
  transition: all 0.3s ease;
  &:hover {
    background: #362ec9;
    transform: scale(1.05);
  }
`;
export const SidebarContainer = styled.aside`
  position: fixed;
  top: 80px;
  right: 0;
  width: 220px;
  height: calc(100vh - 80px);
  background-color: #0f172a;
  color: #f1f5f9;
  padding: 2rem 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 1100;
  box-shadow: -4px 0 12px rgba(0, 0, 0, 0.25);

  transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(100%)")};
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  transition: all 0.4s ease;
`;
export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 100%;
`;
export const NavLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #e2e8f0;
  text-decoration: none;
  font-size: 1rem;
  padding: 0.6rem 0.75rem;
  width: 100%;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  position: relative;
  animation: ${fadeIn} 0.4s ease forwards;
  svg {
    font-size: 1.2rem;
  }

  &.active {
    background: rgba(244, 180, 0, 0.15);
    color: #74edd3;
    box-shadow: inset 2px 0 0 #74edd3;
  }
  &:hover,
  &:focus {
    background: rgba(255, 255, 255, 0.1);
    color: #74edd3;
    transform: translateX(3px);
  }

  &:focus {
    outline: 2px solid #74edd3;
    outline-offset: 2px;
  }
`;
export const Tooltip = styled.span`
  position: absolute;
  left: 110%;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.85);
  color: #f9fafb;
  padding: 5px 10px;
  border-radius: 6px;
  font-size: 0.85rem;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
  margin-left: 6px;
  ${NavLink}:hover &,
  ${NavLink}:focus & {
    opacity: 1;
  }
`;
