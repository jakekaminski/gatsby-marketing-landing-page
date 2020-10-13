import React from "react"
import styled from "styled-components"
import { ArrowDown } from "react-feather"
import '@lottiefiles/lottie-player';
import { create } from '@lottiefiles/lottie-interactivity';

import { Container } from "../global"

const Value = () => {
  return (
    <ValueWrapper id="top">
      <Container>
        <Flex>
          <ImageWrapper>
          <Lottie src="https://assets2.lottiefiles.com/packages/lf20_czeYL8.json"/>
          </ImageWrapper>
          <ValueTextGroup>
            <h1>
              Web, any way you want it.
            </h1>
            <h5>
              Whether its your blog, online store, marketing platform, or full-fledged web app, 
              we’ve been making it super simple for over 20 years.             
            </h5>
            <ValueButton>Show me how<ArrowDown/></ValueButton>
          </ValueTextGroup>
        </Flex>
      </Container>
    </ValueWrapper>
  )
}

export default Value

class Lottie extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef(); // 1. create a reference for the lottie player
  }
  componentDidMount() {
    // 3. listen for player load. see lottie player repo for other events
    this.myRef.current.addEventListener('load', function (e) {
      // 4. configure the interactivity library
      create({
        mode: 'scroll',
        player: '#valueLottie',
        actions: [
          {
            visibility: [0, 1],
            type: 'seek',
            frames: [0, 100],
          },
        ],
      });
    });
  }
  render() {
    return (
        <lottie-player
          ref={this.myRef} // 2. set the reference for the player
          id="valueLottie"
          mode="normal"
          src={this.props.src}
          style={{ width: '600px', height: '600px' }}
        ></lottie-player>
    );
  }
}

const ValueWrapper = styled.div`
  background-color: ${props => props.theme.color.background.light};
  padding: 160px 0 80px 0;
  position: relative;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5vw));
  @media (max-width: ${props => props.theme.screen.md}) {
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
  border-radius: 4px;
  padding: 0px 40px;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  outline: 0px;
  &:hover {
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