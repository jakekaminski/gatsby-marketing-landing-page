import React from "react"

import Layout from "../components/common/layout/layout"
import Footer from "../components/sections/footer"
import styled from "styled-components"

import SEO from "../components/common/layout/seo"
import Lottie from 'lottie-react-web'
import { Container, Section } from "../components/global"
import animationData from "../animations/success.json"

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
            <Lottie
                width="25%"
                options={{
                    animationData: animationData,
                    loop: false
                }}
            />
            <TextGroup>
                <Header>Success!</Header>
                <Subtitle>Your message has been received! We'll get back to you 2-5 business days!</Subtitle>
            </TextGroup>
        </Section>
    </Container>
    <Footer />
  </Layout>
)

export default SuccessPage
