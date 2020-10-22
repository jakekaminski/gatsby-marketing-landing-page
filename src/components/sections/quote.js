import React from "react"
import styled from "styled-components"
import Mockup from "../../images/mockup.svg"
import { useMediaQuery } from "react-responsive"

import { Container, Section } from "../global"

const Quote = () => {
  const isMobile = useMediaQuery({ maxWidth: 575 })

  return(
    <StyledSection>
      <QuoteContainer>
      <QuoteImg src={Mockup} alt="advanced agrilytics mobile website mockup" {... isMobile ? {dataSal: "slide-up", dataSalDuration: "0.3s", dataSalEasing: "ease-in"} : {} } />
        <Blockquote>
          <QuoteTitle>“Creative Sites has completely transformed our public image and given us a real foothold in our market.”</QuoteTitle>
          <Subtitle>- Sean Arians, Advanced Agrilytics, Regional Business Manager</Subtitle>
        </Blockquote>
      </QuoteContainer>
    </StyledSection>
  )
}

export default Quote

const StyledSection = styled(Section)`
  background-color: ${props => props.theme.color.primary};
`

const QuoteContainer = styled(Container)`
  display: grid;
  justify-content: space-between;
  align-content: center;
  grid-template-columns: 1fr 2fr;
  min-width: 0;
  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 64px;
  }
`
const QuoteImg = styled.img`
  width: 100%;
  -webkit-filter: drop-shadow(0px 61.9772px 22.725px rgba(0, 0, 0, 0.04)) drop-shadow(0px 61.9772px 82.6363px rgba(0, 0, 0, 0.05));
  filter: drop-shadow(0px 61.9772px 22.725px rgba(0, 0, 0, 0.04)) drop-shadow(0px 61.9772px 82.6363px rgba(0, 0, 0, 0.05));
  transition: 0.3s ease-in-out;
  &:hover {
    transform: translateY(-10px);
    -webkit-filter: drop-shadow(0px 61.9772px 22.725px rgba(0, 0, 0, 0.04)) drop-shadow(0px 61.9772px 82.6363px rgba(0, 0, 0, 0.25));
    filter: drop-shadow(0px 61.9772px 22.725px rgba(0, 0, 0, 0.04)) drop-shadow(0px 61.9772px 82.6363px rgba(0, 0, 0, 0.25));
  }
`

const Blockquote = styled.blockquote`
  width: 100%;
  margin: 0;
  padding-left: 24px;
  border-left: 8px solid ${props => props.theme.color.accent};
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const QuoteTitle = styled.h4`
  color: ${props => props.theme.color.white.regular};
  margin: 0 auto 32px;
  text-align: left;
`

const Subtitle = styled.cite`
  ${props => props.theme.font_size.xsmall}
  padding-top: 16px;
  font-size: 14px;
  color: ${props => props.theme.color.white.dark};
`
