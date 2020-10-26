import React, { useState } from "react"
import styled from "styled-components"
import { Container } from "../global"
import { useForm, Controller } from 'react-hook-form'
import InputMask from 'react-input-mask'
import { isEmail } from 'validator'

const CTA = () => {

  const { setError, reset, errors, register, formState, handleSubmit, control } = useForm({ mode: "onBlur" });
  const [setSubmitted] = useState(false);
  const AWS_GATEWAY_URL = 'https://k4x8gjobi5.execute-api.us-east-1.amazonaws.com/prod';
  const onSubmit = async data => {
    try {
      await fetch(AWS_GATEWAY_URL, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      reset();
      if (typeof window !== 'undefined') {window.location.href = "/success"};
      setSubmitted(true);
    } catch (error) {
        setError('submit', 'submitError', `Oops! ${error.message}`);
        console.log(error);
    }
  };

  const showForm = (
    <CTAForm onSubmit={handleSubmit(onSubmit)} method="post">
      { errors && errors.submit && errors.submit.message }
      <CTAInputGroup>
        <CTAErrorText>
          {errors.name?.message}
        </CTAErrorText>
        <Controller 
          as={CTAInput}
          control={control}
          defaultValue='' 
          type="text" 
          id="name"  
          name="name" 
          disabled={formState.isSubmitting} 
          rules={{
            required: 'Please provide your name',
          }} 
        />
        <CTAInputLabel htmlFor="name">Name</CTAInputLabel>
      </CTAInputGroup>
      <CTAInputGroup>
        <CTAErrorText>
          {errors.email?.type === "required" && "Please provide an email address"}
          {errors.email?.type === "validate" && "Hmm, that doesnt look like an email address..."}
        </CTAErrorText>
        <Controller 
          as={CTAInput}
          control={control} 
          defaultValue=''
          type="email" 
          name="email" 
          id="email"
          disabled={formState.isSubmitting} 
          rules={{
            required: true,
            validate: value => isEmail(value),
          }} 
        />
        <CTAInputLabel htmlFor="email">Email</CTAInputLabel>
      </CTAInputGroup>
      <CTAInputGroup>
          <CTAInput
            type="tel" 
            name="phone" 
            id="phone" 
            mask="(999) 999-9999" 
            maskChar=" " 
            disabled={formState.isSubmitting}
          />
        <CTAInputLabel htmlFor="phone">Phone number (optional)</CTAInputLabel>
      </CTAInputGroup>
      <CTAInputGroup>
        <CTAErrorText>
          {errors.message?.message}
        </CTAErrorText>
        <CTATextarea 
          name="message" 
          id="message" 
          rows="3" 
          disabled={formState.isSubmitting} 
          placeholder="Tell us a little about your web project"
          ref={register({
            required: 'Please tell us a little about your web project'
          })} 
        />
        <CTAInputLabel htmlFor="message">Message</CTAInputLabel>
      </CTAInputGroup>
      <CTAButton type="submit" disabled={formState.isSubmitting || !formState.isValid}>Submit</CTAButton>
    </CTAForm>
  )

  return (
    <CTAWrapper id="cta">
      <Container>
        <Flex>
          <CTATextGroup>
            <h1>
              Let's dream <Underline>BIG</Underline>.
            </h1>
            <h5>
            Tell us a little about your idea and we’ll get this show on the road!
            </h5>
          </CTATextGroup>
          { showForm }
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
  background-color: ${props => props.theme.color.primary};
  border-radius: 10px;
  padding: 1.5rem;
  @media (max-width: ${props => props.theme.screen.md}) {
    padding: 1rem;
  }

`

const CTAInputGroup = styled.div`
  display: flex;
  flex-flow: column-reverse;
  width: 100%;
  margin-bottom: 0.5rem;
`

const CTAErrorText = styled.span`
  ${props => props.theme.font_size.xxsmall}
  color: ${props => props.theme.color.white.darker};
  height: 1rem;
`

const CTAInputLabel = styled.label`
  ${props => props.theme.font_size.xsmall}
  color: ${props => props.theme.color.white.regular};
  margin-bottom: 4px;
`

const CTAInput = styled(InputMask)`
  -webkit-appearance: none;
  min-height: 3rem;
  border-radius: 4px;
  border: 2px solid transparent;
  background-color: ${props => props.theme.color.white.regular};
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
  border: 2px solid transparent;
  background-color: ${props => props.theme.color.white.regular};
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
  background: ${props => props.theme.color.background.white};
  box-shadow: rgba(110, 120, 152, 0.22) 0px 2px 10px 0px;
  border-radius: 40px;
  padding: 0px 40px;
  transition: 0.2s ease-out;
  &:hover {
    color: ${props => props.theme.color.white.regular};
    box-shadow: rgba(110, 120, 152, 0.22) 0px 2px 10px 0px;
    background: ${props => props.theme.color.accent};
  }
  &:disabled {
    color: ${props => props.theme.color.black.lightest};
    background: ${props => props.theme.color.white.darker};
    cursor: initial;
  }
`

const CTAWrapper = styled.div`
  background-color: ${props => props.theme.color.background.light};
  padding: 10rem 0 5rem 0;
  position: relative;
  @media (max-width: ${props => props.theme.screen.sm}) {
    padding: 6rem 0 3rem;
  }
`

const CTATextGroup = styled.div`
  margin: 0;

  > div {
    width: 120%;
    margin-bottom: -4.5%;

    @media (max-width: ${props => props.theme.screen.md}) {
      margin: 0 1rem;
    }
  }

  h1 {
    margin: 0 0 1.5rem;
    color: ${props => props.theme.color.black.regular};
  }

  h2 {
    margin-bottom: 3rem;
    ${props => props.theme.font_size.regular}
  }

  p {
    margin-bottom: 3rem;
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