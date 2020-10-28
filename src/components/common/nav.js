import React, { useState, useEffect } from "react"
import styled from "styled-components"
import AnchorLink from "react-anchor-link-smooth-scroll"
import Img from "gatsby-image"

import { Container } from "../global"

const Navigation = (props) => {
  // determined if page has scrolled and if the view is on mobile
  const [scrolled, setScrolled] = useState(false);

  // change state on scroll
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 32;
      if (isScrolled !== scrolled) {
        setScrolled(!scrolled);
      }
    };

    document.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      // clean up the event handler when the component unmounts
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
      <Nav data-active={scrolled}>
        <StyledContainer>
          <Brand>
            <AnchorLink href="#top">
              <Img fixed={props.logo} />
            </AnchorLink>
          </Brand>
          <ActionsContainer>
            <AnchorLink href={`#cta`}><button>Contact Us</button></AnchorLink>
          </ActionsContainer>
        </StyledContainer>
      </Nav>
    )
  }

export default Navigation;

export const Nav = styled.nav`
  padding: 24px 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  transition: 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
  &[data-active='true'] {
    padding: 16px 0;
    background: white;
  }
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