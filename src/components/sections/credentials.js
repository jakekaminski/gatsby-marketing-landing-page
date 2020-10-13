import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

import { Section, Container } from "../global"

const Credentials = (props) => (
  <Section id="credentials" accent="main">
    <StyledContainer>
      <CredentialsGrid>
      {props.logos.map(({ node }) => {
        return(<Img key={node.id} fluid={node.childImageSharp.fluid} />)
      })}    
      </CredentialsGrid>
    </StyledContainer>
  </Section>
)

export default Credentials

const StyledContainer = styled(Container)``

const CredentialsGrid = styled.div`
  max-width: 1024px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin: 0px auto;
  grid-column-gap: 40px;
  grid-row-gap: 35px;
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
    padding: 0 64px;
  }
`

const CredentialsLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
