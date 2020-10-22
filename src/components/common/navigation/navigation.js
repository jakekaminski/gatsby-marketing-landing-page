import React, { Component } from "react"
import styled from "styled-components"
import AnchorLink from "react-anchor-link-smooth-scroll"
import Scrollspy from "react-scrollspy"
import Logo from "./logo"

import { Container } from "../../global"
export default class Navigation extends Component {

  state = {
    hasScrolled: false,
  }

  componentDidMount() {
    if (typeof window !== 'undefined') {window.addEventListener("scroll", this.handleScroll)};
  }

  handleScroll = event => {
    if (typeof window !== 'undefined') {
      const scrollTop = window.pageYOffset
      if (scrollTop > 32) {
        this.setState({ hasScrolled: true })
      } else {
        this.setState({ hasScrolled: false })
      }
    }
  }


  render() {
    return (
      <Nav {...this.props} scrolled={this.state.hasScrolled}>
        <StyledContainer>
          <Brand>
            <Scrollspy offset={-64} item={["top"]} currentClassName="active">
              <AnchorLink href="#top">
                <Logo/>
              </AnchorLink>
            </Scrollspy>
          </Brand>
          <ActionsContainer>
            <AnchorLink href={`#cta`} onClick={this.closeMobileMenu}><button>Contact Us</button></AnchorLink>
          </ActionsContainer>
        </StyledContainer>
      </Nav>
    )
  }
}

export const Nav = styled.nav`
  padding: ${props => (props.scrolled ? `16px 0` : `24px 0`)};
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  background: ${props => (props.scrolled ? `white` : null)};
  transition: 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
`

export const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Brand = styled.div`
  font-family: ${props => props.theme.font.extrabold};
  ${props => props.theme.font_size.regular};
  color: ${props => props.theme.color.black.regular};
  text-decoration: none;
  letter-spacing: 1px;
  margin: 0;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    a {
      color: ${props => props.theme.color.black.regular};
      text-decoration: none;
    }
  }
`
export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;

  button {
    font-family: ${props => props.theme.font.normal};
    ${props => props.theme.font_size.xsmall};
    color: white;
    background: ${props => props.theme.color.secondary};
    border-radius: 40px;
    padding: 12px 50px;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 14px;
    transition: 0.2s ease-out;
    &:hover {
      background: ${props => props.theme.color.accent};
      box-shadow: rgba(110, 120, 152, 0.22) 0px 2px 10px 0px;
    }
  }
`