import React from "react"
import styled from "styled-components"
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from "react-feather"

import { Container } from "../global"

const Footer = () => (
  <FooterWrapper id="footer">
    <FooterColumnContainer>
      <FooterColumn>
        <span>Drop by</span>
        <FooterButton href="https://g.page/creative-sites-media?share"><MapPin/><span>3703 Ireland Grove Rd <br/> #1 Bloomington, IL 61704</span></FooterButton>
      </FooterColumn>
      <FooterColumn>
        <span>Give us a call</span>
        <FooterButton href="tel:309-454-6052"><Phone/><span>(309) 454-6052</span></FooterButton>
      </FooterColumn>
      <FooterColumn>
        <span>Send us an email</span>
        <FooterButton href="mailto:sales@csm.cc"><Mail/><span>sales@csm.cc</span></FooterButton>
      </FooterColumn>
      <FooterColumn>
        <span>Follow us</span>
        <ul>
          <FooterButton href="https://www.facebook.com/CreativeSitesMedia"><Facebook/></FooterButton>
          <FooterButton href="https://www.instagram.com/creativesitesmedia"><Instagram/></FooterButton>
          <FooterButton href="https://www.linkedin.com/company/creative-sites-media"><Linkedin/></FooterButton>
        </ul>
      </FooterColumn>
    </FooterColumnContainer>
    <BrandContainer>
      <Copyright href="/">© Creative Sites Media, Inc. {new Date().getFullYear()}</Copyright>
    </BrandContainer>
  </FooterWrapper>
)

const FooterWrapper = styled.footer`
  background-color: ${props => props.theme.color.background.darker};
  padding: 4rem;
  @media (max-width: ${props => props.theme.screen.sm}) {
    padding: 2rem 1rem;
  }
`

const Copyright = styled.a`
  ${props => props.theme.font_size.xxsmall};
  color: ${props => props.theme.color.accent};
  text-transform: uppercase;
  text-align: center;
  margin: 0;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 9;
  text-decoration: none;
  outline: 0px;
  &:hover {
    color: ${props => props.theme.color.white.regular};
  }
`

const BrandContainer = styled(Container)`
  position: relative;
  padding-top: 48px;
  display: flex;
  justify-content: center;

  @media (max-width: ${props => props.theme.screen.sm}) {
  }

`
const FooterColumnContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 24px;
  justify-content: start;
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
    grid-gap: 16px;
  }
`
const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  span {
    font-size: 16px;
    font-family: ${props => props.theme.font.secondary};
    color: ${props => props.theme.color.accent};
  }
  ul {
    display: flex;
    flex-direction: row;
    padding: 0;
    justify-content: left;
    svg {
      height: 40px;
      width: auto;
      margin-right: 16px;
      color: ${props => props.theme.color.white.regular};
      &:hover {
        color: ${props => props.theme.color.accent};
      }
    }
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    align-items: center;
  }
`
const FooterButton = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: left;
  text-align: left;
  text-decoration: none;
  padding: 8px 0;
  line-height: 24px;
  color: ${props => props.theme.color.secondary};
  span {
    margin-left: 8px;
    color: ${props => props.theme.color.white.regular};
    &:hover {
      color: ${props => props.theme.color.accent};
    }
  }
`

export default Footer
