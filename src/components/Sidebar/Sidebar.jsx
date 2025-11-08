import { useState, useEffect } from "react";
import {
  FaHome, FaInfoCircle, FaTools,
  FaProjectDiagram, FaBriefcase, FaEnvelope, FaBars
} from "react-icons/fa";
import {
  SidebarContainer,
  HamburgerIcon,
  Nav,
  NavLink,
  Tooltip
} from "./Sidebar.styled";
const links = [
  { href: "#headerhero", icon: <FaHome />, label: "Home" },
  { href: "#about", icon: <FaInfoCircle />, label: "About" },
  { href: "#services", icon: <FaTools />, label: "Services" },
  { href: "#projects", icon: <FaProjectDiagram />, label: "Projects" },
  { href: "#contact", icon: <FaEnvelope />, label: "Contact" },
];
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(window.location.hash || "#home");
  const toggleSidebar = () => setIsOpen(prev => !prev);
  const handleLinkClick = (href) => {
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setActiveLink(href);
    setIsOpen(false); 
  };
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, 
    };
    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveLink(`#${entry.target.id}`);
        }
      });
    };
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    links.forEach(link => {
      const section = document.querySelector(link.href);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);
  return (
    <>
      <HamburgerIcon
        onClick={toggleSidebar}
        tabIndex={0}
        role="button"
        aria-label={isOpen ? "Collapse sidebar" : "Expand sidebar"}
      >
        <FaBars size={24} />
      </HamburgerIcon>
      <SidebarContainer isOpen={isOpen}>
        <Nav>
          {links.map(({ href, icon, label }) => (
            <NavLink
              key={href}
              href={href}
              className={activeLink === href ? "active" : ""}
              tabIndex={0}
              aria-label={label}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(href);
              }} >
              {icon}
              {isOpen && label}
              {!isOpen && <Tooltip>{label}</Tooltip>}
            </NavLink>
          ))}
        </Nav>
      </SidebarContainer>
    </>
  );
};
export default Sidebar;
