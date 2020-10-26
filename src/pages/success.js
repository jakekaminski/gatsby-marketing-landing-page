import React from "react"
import LottieWeb from "../components/common/lottie-web"

import Layout from "../components/common/layout/layout"
import Footer from "../components/sections/footer"
import styled from "styled-components"

import SEO from "../components/common/layout/seo"
import { Container, Section } from "../components/global"
import SuccessAnimation from "../animations/success.json"

const TextGroup = styled.div`
    text-align: center;
`

const Header = styled.h1`
    margin-top: 1rem;
`

const Subtitle = styled.p`
`

const SuccessPage = () => (
  <Layout>
    <SEO title="Success" />
    <Container>
        <Section>
            <ImageWrapper>
            <LottieWeb
                source={SuccessAnimation}
                loop="false"
            />
            </ImageWrapper>
            <TextGroup>
                <Header>Success!</Header>
                <Subtitle>Your message has been received! We'll get back to you 2-5 business days!</Subtitle>
            </TextGroup>
        </Section>
    </Container>
    <Footer />
  </Layout>
)

const ImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    > .animation-container {
        width: 25%
    }
`

export default SuccessPage
