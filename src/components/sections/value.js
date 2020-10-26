import React from "react"
import styled from "styled-components"
import { ArrowDown } from "react-feather"
import LottieWeb from '../common/lottie-web'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import DesignAnimation from '../../animations/design.json'

import { Container } from "../global"

const Value = () => (
    <ValueWrapper id="top">
      <Container>
        <Flex>
          <ImageWrapper>
            <LottieWeb source={DesignAnimation}/>
          </ImageWrapper>
          <ValueTextGroup>
            <h1>
              Web, <Underline>any way</Underline> you want it.
            </h1>
            <h5>
              Whether its your blog, online store, marketing platform, or full-fledged web app, 
              we’ve been making it super simple for over 20 years.             
            </h5>
            <Anchor href="#cta"><ValueButton>Show me how<ArrowDown/></ValueButton></Anchor>
          </ValueTextGroup>
        </Flex>
      </Container>
    </ValueWrapper>
)

export default Value

const ValueWrapper = styled.div`
  background-color: ${props => props.theme.color.background.light};
  padding: 10rem 0 5rem 0;
  position: relative;
  @media (max-width: ${props => props.theme.screen.sm}) {
    padding: 6rem 0 3rem 0;
  }
`

const ValueTextGroup = styled.div`
  margin: 0;

  > div {
    width: 120%;
    margin-bottom: -4.5%;

    @media (max-width: ${props => props.theme.screen.md}) {
      margin: 0 16px;
    }
  }

  h1 {
    margin: 0 0 24px;
    color: ${props => props.theme.color.black.regular};
  }

  h2 {
    margin-bottom: 24px;
    ${props => props.theme.font_size.regular}
  }

  p {
    margin-bottom: 48px;
  }
`

const Underline = styled.u`
  text-decoration: solid underline ${props => props.theme.color.primary} 10px;
`

const Flex = styled.div`
  display: grid;
  justify-content: space-between;
  align-content: center;
  grid-template-columns: 1fr 1fr;
  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 64px;
  }
`

const Anchor = styled(AnchorLink)`
  text-decoration: none;
`

const ValueButton = styled.button`
  font-family: ${props => props.theme.font.secondary};
  font-weight: 500;
  font-size: 14px;
  color: white;
  letter-spacing: 1px;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 8px;
  text-transform: uppercase;
  cursor: pointer;
  white-space: nowrap;
  background: ${props => props.theme.color.secondary};
  border-radius: 40px;
  padding: 0px 40px;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  outline: 0px;
  transition: 0.2s ease-out;
  &:hover {
    background-color: ${props => props.theme.color.accent};
    box-shadow: rgba(110, 120, 152, 0.22) 0px 2px 10px 0px;
  }
  @media (max-width: ${props => props.theme.screen.md}) {
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    margin-left: 0;
  }
`
const ImageWrapper = styled.div`
  justify-self: end;
  align-self: center;
  @media (max-width: ${props => props.theme.screen.md}) {
    justify-self: center;
  }
`