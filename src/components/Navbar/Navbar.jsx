import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import {
  NavbarWrapper,
  LogoContainer,
  LogoImage,
  CompanyName,
  RightSection,
  SearchInput,
  SearchIconButton,
  SearchResultsDropdown,
  SearchResultItem,
  SearchWrapper,
} from "./Navbar.styled";
import logo from "../../assets/Bestman Consult Logo Design.png";
const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const sections = [
    { name: "Home", id: "headerhero" },
    { name: "About Us", id: "about" },
    { name: "Services", id: "services" },
    { name: "Projects", id: "projects" },
    { name: "Team", id: "team" },
    { name: "Contact", id: "contact" },
  ];
  const handleSearchChange = (e) => {
    const value = e.target.value.toLowerCase();
    setQuery(value);
    if (value.trim() === "") {
      setFilteredResults([]);
      return;
    }
    const results = sections.filter((item) =>
      item.name.toLowerCase().includes(value)
    );
    setFilteredResults(results);
  };
  const handleResultClick = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
    setQuery("");
    setFilteredResults([]);
    setIsSearchOpen(false);
  };
  const toggleSearch = () => setIsSearchOpen((prev) => !prev);
  return (
    <NavbarWrapper>
      <LogoContainer>
        <LogoImage src={logo} alt="Bestman Consult Logo" />
        <CompanyName>BESTMAN CONSULT AND CONSTRUCTION WORKS</CompanyName>
      </LogoContainer>
      <RightSection>
        <SearchWrapper>
          {(isSearchOpen || window.innerWidth > 768) && (
            <div style={{ position: "relative" }}>
              <SearchInput
                type="text"
                placeholder="Search..."
                value={query}
                onChange={handleSearchChange}
                autoFocus={isSearchOpen}
                onBlur={() => setTimeout(() => setIsSearchOpen(false), 200)}        />
              {filteredResults.length > 0 && (
                <SearchResultsDropdown>
                  {filteredResults.map((item, index) => (
                    <SearchResultItem
                      key={index}
                      onMouseDown={() => handleResultClick(item.id)}  >
                      {item.name}
                    </SearchResultItem>
                  ))}
                </SearchResultsDropdown>
              )}
            </div>
          )}
          <SearchIconButton
            className="mobile-search-toggle"
            onClick={toggleSearch}
            aria-label="Toggle Search"   >
            <FiSearch size={20} />
          </SearchIconButton>
        </SearchWrapper>
      </RightSection>
    </NavbarWrapper>
  );
};
export default Navbar;
