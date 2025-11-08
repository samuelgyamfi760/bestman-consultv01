import {
  TeamSection,
  SectionTitle,
  StyledSlider,
  ProfileCard,
  ImageWrapper,
  ProfileImage,
  MemberName,
  MemberRole,
} from "./Teamprofiles.styled";
import Director from "../../assets/employees/director.png";
import Samuel from "../../assets/employees/samuel.png";
import John from "../../assets/employees/john.png";
import Safety from "../../assets/employees/Safety.png";
import Abrafi from "../../assets/employees/Abrafi.png";
import Esther from "../../assets/employees/Esther.png";
import Gideon from "../../assets/employees/Gideon.png";
import Stephen from "../../assets/employees/stephen.png";
import Frank from "../../assets/employees/Frank.png";
import James from "../../assets/employees/James.png";
import Appiah from "../../assets/employees/Appiah.png";
import BoatengKofi from "../../assets/employees/Boateng Kofi.png";
const teamMembers = [
  { name: "ENGR.SURV.FOSU BREMPONG", role: "Director", image: Director },
  { name: "SAMUEL GYAMFI", role: "IT & Data Analyst", image: Samuel },
  { name: "BENJAMIN ACQUAH", role: "Site Supervisor", image: John },
  { name: "SILAS YEBOAH", role: "Safety Lead", image: Safety },
  { name: "AMMA ABRAFI ADOMAKO", role: "First Aider", image: Abrafi },
  { name: "ESTHER SAA", role: "Administrator", image: Esther },
  { name: "GIDEON AMEXO", role: "Carpenter Foreman", image: Gideon },
  { name: "STEPHEN TWENEBOAH-KODUA", role: "Carpenter", image: Stephen },
  { name: "FRANK KAKARI", role: "Mason", image: Frank },
  { name: "OWUSU JAMES", role: "Mason Foreman", image: James },
  { name: "KWADWO APPIAH", role: "General Hand", image: Appiah },
  { name: "BOATENG KOFI", role: "Plumber", image: BoatengKofi },
];
const TeamProfiles = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1600, // Large desktops
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1200, // Medium screens
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 900, // Tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600, // Mobile screens
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <TeamSection id="team">
      <SectionTitle>Meet Our Team</SectionTitle>
      <StyledSlider {...settings}>
        {teamMembers.map((member, index) => (
          <ProfileCard key={index}>
            <ImageWrapper>
              <ProfileImage src={member.image} alt={member.name} />
            </ImageWrapper>
            <MemberName>{member.name}</MemberName>
            <MemberRole>{member.role}</MemberRole>
          </ProfileCard>
        ))}
      </StyledSlider>
    </TeamSection>
  );
};
export default TeamProfiles;
