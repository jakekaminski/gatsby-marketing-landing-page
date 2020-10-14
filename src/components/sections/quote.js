import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

import { Container, Section } from "../global"

const Quote = (props) => (
  <StyledSection>
    <QuoteContainer>
      <Img fluid={props.mockup} />
      <blockquote>
        <QuoteTitle>“Creative Sites has completely transformed our public image and given us a real foothold in our market.”</QuoteTitle>
        <Subtitle>- Sean Arians, Advanced Agrilytics, Regional Business Manager</Subtitle>
      </blockquote>
    </QuoteContainer>
  </StyledSection>
)

export default Quote

const StyledSection = styled(Section)`
  background-color: ${props => props.theme.color.primary};
  clip-path: polygon(0 0, 100% 14%, 100% 100%, 0% 100%);
`

const QuoteContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 0 40px;
`

const QuoteTitle = styled.h4`
  color: ${props => props.theme.color.white.regular};
  margin: 0 auto 32px;
  text-align: left;
`

const Subtitle = styled.p`
  ${props => props.theme.font_size.xsmall}
  padding-top: 16px;
  font-size: 14px;
  color: ${props => props.theme.color.white.dark};
`
