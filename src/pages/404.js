import React from "react"
import LottieWeb from "../components/common/lottie-web"

import Layout from "../components/common/layout/layout"
import Footer from "../components/sections/footer"
import styled from "styled-components"

import SEO from "../components/common/layout/seo"
import { Container, Section } from "../components/global"
import NotFoundAnimation from "../animations/404.json"

const TextGroup = styled.div`
    text-align: center;
`

const Header = styled.h1`
    margin-top: 1rem;
`

const Subtitle = styled.p`
`

const NotFoundPage = () => (
  <Layout>
    <SEO title="Success" />
        <Section accent="secondary" >
          <Container>
            <ImageWrapper>
            <LottieWeb
                source={NotFoundAnimation}
            />
            </ImageWrapper>
            <TextGroup>
                <Header>Oops...</Header>
                <Subtitle>We can't seem to find that page. Try going back.</Subtitle>
            </TextGroup>
          </Container>
        </Section>
    <Footer />
  </Layout>
)

const ImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    > .animation-container {
        width: 50%
    }
`

export default NotFoundPage

