import { useEffect, useRef } from "react";
import * as THREE from "three";
import BIRDS from "vanta/dist/vanta.birds.min";
import {
  ServicesContainer,
  ServicesTitle,
  IntroParagraph,
  ServicesGrid,
  ServiceItem,
  ServiceName,
  ServiceDescription,
} from "./ServicesSection.styled";
import { HardHat, Building2, MapPin } from "lucide-react";
const ServicesSection = () => {
  const vantaRef = useRef(null);
 useEffect(() => {
    const vantaEffect = BIRDS({
      el: vantaRef.current,
      THREE,
      backgroundColor: 0xf8f9fa,
      color1: 0xd4af37, // gold
      color2: 0x0d1b2a, // dark blue/black
      quantity: 2.0,
      birdSize: 1.3,
      speedLimit: 3.0,
      separation: 40.0,
      alignment: 30.0,
      cohesion: 20.0,
    });
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);
  return (
    <ServicesContainer id="services" ref={vantaRef}>
      <ServicesTitle>Our Services</ServicesTitle>
      <IntroParagraph>
        At <strong>Bestman Consult Ltd.</strong>, we go beyond construction —
        we shape environments with precision and purpose. Our expertise spans
        engineering, surveying, mining, and infrastructure development,
        offering clients end-to-end solutions from concept to completion. With
        advanced surveying techniques guiding every stage of design and
        execution, we ensure accuracy, efficiency, and sustainability across all
        our projects. From transformative works like the{" "}
        <strong>Newmont Ahafo North Resettlement initiative</strong> to
        community-driven developments, we’re proud to build with integrity,
        innovation, and lasting impact.
      </IntroParagraph>
      <ServicesGrid>
        <ServiceItem>
          <Building2 size={40} />
          <ServiceName>Civil Engineering & Construction</ServiceName>
          <ServiceDescription>
            We specialize in civil works including residential housing, road
            networks, and infrastructure projects under the Newmont Ahafo North
            Resettlement initiative.
          </ServiceDescription>
        </ServiceItem>
        <ServiceItem>
          <MapPin size={40} />
          <ServiceName>Mining & Surveying Support</ServiceName>
          <ServiceDescription>
            Providing expert surveying, excavation, and mining-related site
            preparation services with precision and safety at the core of our
            operations.
          </ServiceDescription>
        </ServiceItem>
        <ServiceItem>
          <HardHat size={40} />
          <ServiceName>Safety & Quality Assurance</ServiceName>
          <ServiceDescription>
            Our operations adhere to Newmont’s global PPE compliance standards,
            ensuring safe and sustainable construction environments for all
            workers.
          </ServiceDescription>
        </ServiceItem>
      </ServicesGrid>
    </ServicesContainer>
  );
};
export default ServicesSection;
