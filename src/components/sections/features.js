import React from "react"
import styled from "styled-components"
import DesignSvg from "../../images/features/Tilda_Icons_21re_design.svg"
import DevSvg from "../../images/features/Tilda_Icons_19ad_web_design.svg"
import CMSSvg from "../../images/features/Tilda_Icons_19ad_design.svg"
import SupportSvg from "../../images/features/Tilda_Icons_2web_handsfree.svg"
import Diamond from "../../images/diamond.svg"

import { Section, Container } from "../global"

const StyledDiamond = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  text-align: center;
  &:before {
    content: '';
    display: inline-block;
    vertical-align: middle;
    height: 100%;
  }
  > img {
    vertical-align: middle;
  }
`

const Features = () => (
  <StyledSection id="features" accent="dark">
    <StyledContainer>
      <Subtitle>Our Services</Subtitle>
      <SectionTitle>What can we do for you?</SectionTitle>
      <FeaturesGrid>
      <StyledDiamond><img src={Diamond} alt=""/></StyledDiamond>
        <FeatureItem>
          <FeatureImg src={DesignSvg} alt="" />
          <FeatureContent>
            <FeatureTitle>Web Design</FeatureTitle>
            <FeatureText>
              Paint your ideas into meaningful, stunning content that captures your audience.
            </FeatureText>
          </FeatureContent>
        </FeatureItem>
        <FeatureItem>
          <FeatureImg src={DevSvg} alt="" />
          <FeatureContent>
            <FeatureTitle>Web Development</FeatureTitle>
            <FeatureText>
              Transform designs and prototypes into digital experiences like no other.
            </FeatureText>
          </FeatureContent>
        </FeatureItem>
        <FeatureItem>
          <FeatureImg src={CMSSvg} alt="" />
          <FeatureContent>
            <FeatureTitle>Custom CMS</FeatureTitle>
            <FeatureText>
              Control what your customers see with our very own content management system.
            </FeatureText>
          </FeatureContent>
        </FeatureItem>
        <FeatureItem>
          <FeatureImg src={SupportSvg} alt="" />
          <FeatureContent>
            <FeatureTitle>Ongoing Support</FeatureTitle>
            <FeatureText>
              Have peace of mind knowing our expertise is only a phone call away.
            </FeatureText>
          </FeatureContent>
        </FeatureItem> 
      </FeaturesGrid>
    </StyledContainer>
  </StyledSection>
)

export default Features

const StyledSection = styled(Section)`
  position: relative;
`

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
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0px auto;
  grid-column-gap: 40px;
  grid-row-gap: 35px;
  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
  }
`

const FeatureItem = styled.div`
  min-height: 144px;
  background-color: ${props => props.theme.color.primary};
  border-radius: 20px;
  box-shadow: drop-shadow(0px 5px 20px rgba(0, 0, 0, 0.1));
  padding: 15px 30px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  text-align: left;
  z-index: 10;
`

const FeatureContent = styled.div`
  display: flex;
  align-items: left;
  justify-content: center;
  flex-direction: column;
  text-align: left;
  margin-left: 10px;
`

const FeatureTitle = styled.h5`
  color: ${props => props.theme.color.white.regular};
  letter-spacing: 0px;
  line-height: 30px;
  margin: 8px 0;
`

const FeatureText = styled.p`
${props => props.theme.font_size.xsmall};
color: ${props => props.theme.color.white.darker};
margin-top: 0;
`

const FeatureImg = styled.img`
`
