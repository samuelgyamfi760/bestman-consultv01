import Slider from "react-slick";
import {
  ProjectsContainer,
  SectionTitle,
  SectionSubtitle,
  ProjectCard,
  ProjectTitle,
  ProjectDescription,
  ImageWrapper,
  ProjectImage,
  ImageOverlay,
  OverlayText,
} from "./ProjectsSection.styled";

// ✅ Import all project images so Vite bundles them correctly
import front3 from "../../assets/projects/threeBedroom/frontview.png";
import back3 from "../../assets/projects/threeBedroom/backview.png";
import side3 from "../../assets/projects/threeBedroom/sideview.png";
import living3 from "../../assets/projects/threeBedroom/livingroomview.png";

import front2 from "../../assets/projects/twoBedroom/frontview.png";
import side2 from "../../assets/projects/twoBedroom/sideview.png";
import back2 from "../../assets/projects/twoBedroom/backview.png";

import front5 from "../../assets/projects/fiveBedroom/frontview.png";
import side5 from "../../assets/projects/fiveBedroom/sideview.png";
import back5 from "../../assets/projects/fiveBedroom/backview.png";

// ✅ Data structure with imported images
const projectsData = [
  {
    title: "3-Bedroom Apartment",
    description:
      "Spacious 3-bedroom apartment designed for modern family living. Built with durable materials and energy-efficient systems.",
    images: [
      { src: front3, caption: "3-Bedroom – Front Elevation" },
      { src: side3, caption: "3-Bedroom – Side View" },
      { src: back3, caption: "3-Bedroom – Rear Elevation" },
      { src: living3, caption: "3-Bedroom – Living Room" },
    ],
  },
  {
    title: "2-Bedroom Apartment",
    description:
      "Compact yet elegant 2-bedroom home with a focus on functionality, comfort, and affordable luxury.",
    images: [
      { src: front2, caption: "2-Bedroom – Front Elevation" },
      { src: side2, caption: "2-Bedroom – Side View" },
      { src: back2, caption: "2-Bedroom – Rear Elevation" },
    ],
  },
  {
    title: "5-Bedroom Executive House",
    description:
      "Luxurious 5-bedroom executive residence featuring advanced architectural design and superior finishing.",
    images: [
      { src: front5, caption: "5-Bedroom – Front View" },
      { src: side5, caption: "5-Bedroom – Side View" },
      { src: back5, caption: "5-Bedroom – Rear View" },
    ],
  },
];

const ProjectsSection = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
    fade: true,
    pauseOnHover: true,
  };

  return (
    <ProjectsContainer id="projects">
      <SectionTitle>Our Projects</SectionTitle>
      <SectionSubtitle>
        Delivering quality, safety, and innovation across every build — from
        residential developments to large-scale infrastructure. Our projects
        reflect our commitment to excellence, sustainability, and client
        satisfaction at every stage of construction.
      </SectionSubtitle>
      {projectsData.map((project, index) => (
        <ProjectCard key={index}>
          <Slider {...sliderSettings}>
            {project.images.map((img, i) => (
              <ImageWrapper key={i}>
                <ProjectImage
                  src={img.src}
                  alt={img.caption}
                  loading="lazy" // ✅ Optimized image loading
                />
                <ImageOverlay>
                  <OverlayText>{img.caption}</OverlayText>
                </ImageOverlay>
              </ImageWrapper>
            ))}
          </Slider>
          <ProjectTitle>{project.title}</ProjectTitle>
          <ProjectDescription>{project.description}</ProjectDescription>
        </ProjectCard>
      ))}
    </ProjectsContainer>
  );
};
export default ProjectsSection;
