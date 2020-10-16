import React from "react"
import styled from "styled-components"
import { ArrowDown } from "react-feather"
import '@lottiefiles/lottie-player';
import { create } from '@lottiefiles/lottie-interactivity';

import { Container } from "../global"

const CTA = () => {

  const handleSubmit = event => {
    event.preventDefault()
  }

  return (
    <CTAWrapper id="cta">
      <Container>
        <Flex>
          <CTATextGroup>
            <h1>
              Let's dream <Underline>BIG</Underline>.
            </h1>
            <p>
            Tell us a little about your idea and we’ll get this show on the road!
            </p>
          </CTATextGroup>
          <CTAForm onSubmit={handleSubmit}>
            <CTAInputGroup>
              <CTAInput type="text" id="name" name="name"/>
              <CTAInputLabel for="name">Name</CTAInputLabel>
            </CTAInputGroup>
            <CTAInputGroup>
              <CTAInput type="email" id="email" name="email"/>
              <CTAInputLabel for="email">Email</CTAInputLabel>
            </CTAInputGroup>
            <CTAInputGroup>
              <CTAInput type="phone" id="phone" name="phone"/>
              <CTAInputLabel for="phone">Phone number</CTAInputLabel>
            </CTAInputGroup>
            <CTAInputGroup>
              <CTATextarea id="message" name="message" rows="5"/>
              <CTAInputLabel for="message">Message</CTAInputLabel>
            </CTAInputGroup>
            <CTAButton>Submit</CTAButton>
          </CTAForm>
        </Flex>
      </Container>
    </CTAWrapper>
  )
}

export default CTA

const CTAForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  min-width: 400px;
  background-color: ${props => props.theme.color.primary};
  border-radius: 10px;
  padding: 24px 24px;
`

const CTAInputGroup = styled.div`
  display: flex;
  flex-flow: column-reverse;
  width: 100%;
  margin-bottom: 1em;
`

const CTAInputLabel = styled.label`
  ${props => props.theme.font_size.xsmall}
  color: ${props => props.theme.color.white.regular};
  margin-bottom: 4px;
`

const CTAInput = styled.input`
  -webkit-appearance: none;
  min-height: 48px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.24);
  background-color: ${props => props.theme.color.white.dark};
  padding: 0px 16px;
  &:focus {
    background-color: ${props => props.theme.color.white.regular};
    -webkit-appearance: none;
    outline: none;
    border: 2px solid ${props => props.theme.color.accent};
  }
`

const CTATextarea = styled.textarea`
  resize: vertical;
  -webkit-appearance: none;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  min-height: 48px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.24);
  background-color: ${props => props.theme.color.white.dark};
  padding: 10px 16px;
  &:focus {
    background-color: ${props => props.theme.color.white.regular};
    -webkit-appearance: none;
    outline: none;
    border: 2px solid ${props => props.theme.color.accent};
  }
`

const CTAButton = styled.button`
  color: ${props => props.theme.color.primary};
  height: 56px;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-transform: uppercase;
  background: ${props => props.theme.color.white.dark};
  border-radius: 40px;
  padding: 0px 40px;
  transition: 0.2s ease-out;
  &:hover {
    color: ${props => props.theme.color.white.regular};
    box-shadow: rgba(110, 120, 152, 0.22) 0px 2px 10px 0px;
    background: ${props => props.theme.color.accent};
  }
`

const CTAWrapper = styled.div`
  background-color: ${props => props.theme.color.background.light};
  padding: 160px 0 80px 0;
  position: relative;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5vw));
  @media (max-width: ${props => props.theme.screen.md}) {
  }
`

const CTATextGroup = styled.div`
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
  grid-template-columns: 1fr 1.5fr;
  grid-column-gap: 24px;
  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 64px;
  }
`