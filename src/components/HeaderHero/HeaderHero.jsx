import React, { useState, useEffect } from "react";
import {
  Section,
  Container,
  ImageWrapper,
  FadingImage,
  TextOverlay,
  DotsContainer,
  Dot,
} from "./HeaderHero.styled";
import craneImage1 from "../../assets/crane1.png";
import craneImage2 from "../../assets/crane2.png";
import craneImage3 from "../../assets/crane3.png";
import projectimage1 from "../../assets/project-image1.png";
import hammerImage from "../../assets/hammer.png";
import projectImage2 from "../../assets/projectImg2.png";
import projectImage3 from "../../assets/projectImg3.png";
const slides = [
  {
    image: craneImage1,
    title: "Building for the Future",
    subtitle: "Expertise in Construction, Engineering, and Surveying",
    buttonText: "VIEW SERVICES",
    buttonAction: () =>
      document
        .getElementById("services")
        ?.scrollIntoView({ behavior: "smooth" }),
  },
  {
    image: craneImage2,
    title: "Innovative Mining Solutions",
    subtitle: "Providing safe, efficient, and modern mining practices",
    buttonText: "EXPLORE PROJECTS",
    buttonAction: () =>
      document
        .getElementById("projects")
        ?.scrollIntoView({ behavior: "smooth" }),
  },
  {
    image: craneImage3,
    title: "Engineering Excellence",
    subtitle: "Delivering precision and quality in every project",
    buttonText: "LEARN MORE",
    buttonAction: () => alert("Learn more about our engineering projects!"),
  },
  {
    image: projectimage1,
    title: "Sustainable Infrastructure",
    subtitle: "Creating eco-friendly and resilient structures",
    buttonText: "DISCOVER MORE",
    buttonAction: () =>
      document
        .getElementById("projects")
        ?.scrollIntoView({ behavior: "smooth" }),
  },
  {
    image: hammerImage,
    title: "Skilled Workforce",
    subtitle: "Professional and trained teams to get the job done",
    buttonText: "MEET OUR TEAM",
    buttonAction: () =>
      document.getElementById("team")?.scrollIntoView({ behavior: "smooth" }),
  },
  {
    image: projectImage2,
    title: "Sustainable Projects",
    subtitle: "Building infrastructure with minimal environmental impact",
    buttonText: "SUSTAINABILITY",
    buttonAction: () =>
      document
        .getElementById("services")
        ?.scrollIntoView({ behavior: "smooth" }),
  },
  {
    image: projectImage3,
    title: "Innovative Designs",
    subtitle: "Modern and efficient solutions for every client",
    buttonText: "DISCOVER MORE",
    buttonAction: () =>
      document
        .getElementById("projects")
        ?.scrollIntoView({ behavior: "smooth" }),
  },
];
const HeaderHero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
        setFade(true);
      }, 500);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  const currentSlide = slides[currentIndex];
  return (
    <Section id="headerhero">
      <Container>
        <ImageWrapper>
          <FadingImage
            src={currentSlide.image}
            alt={`Slide ${currentIndex + 1}`}
            className={fade ? "fade-in" : "fade-out"}
          />
          <TextOverlay>
            <h1>{currentSlide.title}</h1>
            <p>{currentSlide.subtitle}</p>
            <button onClick={currentSlide.buttonAction}>
              {currentSlide.buttonText}
            </button>
          </TextOverlay>
        </ImageWrapper>
        <DotsContainer>
          {slides.map((_, index) => (
            <Dot
              key={index}
              className={index === currentIndex ? "active" : ""}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </DotsContainer>
      </Container>
    </Section>
  );
};
export default HeaderHero;
