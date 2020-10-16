import React from "react"
import styled from "styled-components"
import { ArrowDown } from "react-feather"
import typingGif from "../../images/typing.gif"
import Lottie from "../common/lottie"
import AnchorLink from "react-anchor-link-smooth-scroll"

import { Container } from "../global"

const Header = () => {
  return (
    <HeaderWrapper id="top">
      <Container>
        <Flex>
          <HeaderTextGroup>
            <h1>
              Your <span><Gif src={typingGif} alt="Letters typing business" /></span>
              <br />
              Online
            </h1>
            <h5>
            Whatever you do, whatever you love, Creative Sites makes it happen.
            </h5>
            <Anchor href="#cta"><HeaderButton>Talk to Us<ArrowDown/></HeaderButton></Anchor>
          </HeaderTextGroup>
          <ImageWrapper>
          <Lottie src="https://assets4.lottiefiles.com/packages/lf20_vEfHlN.json"/>
            <br />
          </ImageWrapper>
        </Flex>
      </Container>
    </HeaderWrapper>
  )
}

export default Header

const HeaderWrapper = styled.header`
  background-color: ${props => props.theme.color.background.light};
  padding: 160px 0 80px 0;
  position: relative;
  @media (max-width: ${props => props.theme.screen.md}) {
  }
`

const HeaderTextGroup = styled.div`
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
  span {
    height: 80px; 
  }
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
const Gif = styled.img`
  vertical-align: middle;
  display: inline-block;
  z-index: -1000;
  width: 358px;
`

const Anchor = styled(AnchorLink)`
  text-decoration: none;
`

const HeaderButton = styled.button`
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
  text-decoration: none;
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
  &:hover {
    transition: 0.2s ease-out;
    background: ${props => props.theme.color.accent};
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