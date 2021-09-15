import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import { Marginer } from "../../components/marginer";
import { OurSerivce } from "../../components/ourService";
import { SectionTitle } from "../../components/sectionTitle";

import Service1Img from "../../assets/illustrations/web_development_.png";
import Service2Img from "../../assets/illustrations/mobile_phone.png";
import Service3Img from "../../assets/illustrations/bug_fixed.png";

const ServicesContainer = styled(Element)`
  width: 100%;
  min-height: 1100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
`;

export function ServicesSection(props) {
  return (
    <ServicesContainer name="servicesSection">
      <SectionTitle>Build Scalable Solutions</SectionTitle>
      <Marginer direction="vertical" margin="3em" />
      <OurSerivce
        title="Data Science"
        description="we leverage the power of data to tell your car's worth, and connect you to a buyer"
        imgUrl={Service1Img}
      />
      <OurSerivce
        title="Machine Learning"
        description="our ML models are reliable and scalable.
        We build and deliver fully integrated and responsive app
        that fit your needs"
        imgUrl={Service2Img}
        isReversed
      />
      <OurSerivce
        title="Quality is our priority"
        description="We have teams of professional developers, designers
        and managers that ensures delivering the best 
        user experience"
        imgUrl={Service3Img}
      />
    </ServicesContainer>
  );
}
