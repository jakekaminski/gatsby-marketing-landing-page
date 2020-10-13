import React from "react"
import styled from "styled-components"

import { Section, Container } from "../global"

const Features = () => (
  <Section id="features" accent="dark">
    <StyledContainer>
      <Subtitle>Features</Subtitle>
      <SectionTitle>What can we do for you?</SectionTitle>
      <FeaturesGrid>
        <FeatureItem>
          <FeatureTitle>Web Design</FeatureTitle>
          <FeatureText>
            Paint your ideas into meaningful, stunning content that captures your audience.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Web Development</FeatureTitle>
          <FeatureText>
            Transform designs and prototypes into digital experiences like no other.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Custom CMS</FeatureTitle>
          <FeatureText>
            Control what your customers see with our very own content management system.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Ongoing Support</FeatureTitle>
          <FeatureText>
            Have peace of mind knowing our expertise is only a phone call away.
          </FeatureText>
        </FeatureItem>
      </FeaturesGrid>
    </StyledContainer>
  </Section>
)

export default Features

const StyledContainer = styled(Container)``

const SectionTitle = styled.h3`
  color: ${props => props.theme.color.white.regular};
  display: flex;
  justify-content: center;
  margin: 0 auto 40px;
  text-align: center;
`

const Subtitle = styled.h5`
  font-size: 16px;
  color: ${props => props.theme.color.accent};
  letter-spacing: 0px;
  margin-bottom: 12px;
  text-align: center;
`

const FeaturesGrid = styled.div`
  max-width: 670px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0px auto;
  grid-column-gap: 40px;
  grid-row-gap: 35px;
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
    padding: 0 64px;
  }
`

const FeatureItem = styled.div`
  background-color: ${props => props.theme.color.primary};
  border-radius: 20px;
  drop-shadow(0px 5px 20px rgba(0, 0, 0, 0.1));
  padding: 0 30px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: left;
`

const FeatureTitle = styled.h5`
  color: ${props => props.theme.color.white.regular};
  letter-spacing: 0px;
  line-height: 30px;
  margin-bottom: 8px;
`

const FeatureText = styled.p`
color: ${props => props.theme.color.white.darker};
margin-top: 0;
`
