import { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./Styles/GlobalStyles";
import theme from "./Styles/theme"; 
import Navbar from "./components/Navbar/Navbar.jsx";
import Sidebar from "./components/Sidebar/Sidebar";
import HeaderHero from "./components/HeaderHero/HeaderHero";
import AboutPage from "./components/About/About";
import TeamProfiles from "./components/TeamProfiles/TeamProfiles.jsx";
import ServicesSection from "./components/Services/ServicesSection.jsx";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection.jsx";
import ContactSection from "./components/ContactSection/ContactSection.jsx";
import Footer from "./components/Footer/Footer.jsx";
const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navbar />
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div>
        <HeaderHero />
        <AboutPage />
        <TeamProfiles />
        <ServicesSection/>
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </div>
    </ThemeProvider>
  );
};
export default App;
