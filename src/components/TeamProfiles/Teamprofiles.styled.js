import styled from "styled-components";
import Slider from "react-slick";
export const TeamSection = styled.section`
  padding: 70px 8%;
  background: #4b9aa6;
  text-align: center;
  position: relative;
  overflow: hidden;
  @media (max-width: 768px) {
    padding: 50px 5%;
  }
`;
export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 45px;
  color: #ffffff;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  &::after {
    content: "";
    width: 100px;
    height: 4px;
    background: #d4af37;
    display: block;
    margin: 15px auto 0;
    border-radius: 2px;
  }
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 35px;
  }
`;
export const StyledSlider = styled(Slider)`
  .slick-slide {
    display: flex !important;
    justify-content: center;
    align-items: center;
    padding: 15px; /* ensures good spacing */
  }
  .slick-track {
    display: flex !important;
    align-items: stretch;
  }
  .slick-list {
    overflow: hidden;
    padding: 10px 0;
  }
  .slick-dots li button:before {
    color: #fff;
    opacity: 0.6;
  }
  .slick-dots li.slick-active button:before {
    color: #d4af37;
    opacity: 1;
  }
  .slick-prev:before,
  .slick-next:before {
    color: #ffffff;
    font-size: 22px;
  }
  @media (max-width: 480px) {
    .slick-prev,
    .slick-next {
      display: none !important;
    }
  }
`;
export const ProfileCard = styled.div`
  background: #ffffff;
  padding: 20px 15px;
  border-radius: 16px;
  text-align: center;
  transition: all 0.35s ease-in-out;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.15);
  max-width: 260px;
  width: 100%;
  margin: auto;
  border: 2px solid transparent;
  &:hover {
    transform: translateY(-6px);
    border-color: #d4af37;
    box-shadow: 0 10px 25px rgba(212, 175, 55, 0.25);
  }
  @media (max-width: 768px) {
    max-width: 230px;
  }

  @media (max-width: 480px) {
    max-width: 85%;
  }
`;
export const ImageWrapper = styled.div`
  width: 120px;
  height: 120px;
  margin: 0 auto 10px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid #d4af37;
  background: radial-gradient(circle, #ffffff 30%, #f0f0f0 100%);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  ${ProfileCard}:hover & {
    border-color: #ffffff;
    box-shadow: 0 0 10px #d4af37, 0 0 20px rgba(212, 175, 55, 0.5);
  }
`;
export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;

  ${ProfileCard}:hover & {
    transform: scale(1.05);
  }
`;
export const MemberName = styled.h3`
  font-size: 1.15rem;
  margin: 8px 0 4px;
  color: #0d1b2a;
  font-weight: 600;
  text-transform: uppercase;
`;
export const MemberRole = styled.p`
  font-size: 0.95rem;
  color: #333;
  margin: 0;
  line-height: 1.4;
  text-transform: capitalize;
`;
