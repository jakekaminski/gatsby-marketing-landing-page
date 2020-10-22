import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"
import Navigation from "../components/common/navigation/navigation"

import Header from "../components/sections/header"
import Credentials from "../components/sections/credentials"
import Value from "../components/sections/value"
import Features from "../components/sections/features"
import Quote from "../components/sections/quote"
import CTA from "../components/sections/cta"
import Footer from "../components/sections/footer"

const Wrapper = styled.div`
  overflow-x: hidden;
`

const IndexPage = ({data}) => (
  <Layout>
    <Wrapper>
      <SEO title="Home" />
      <Navigation />
      <Header />
      <Credentials logos={data.logos.edges} />
      <Value />
      <Features />
      <Quote mockup={data.mockup.childImageSharp.fluid} />
      <CTA />
      <Footer />
    </Wrapper>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    logos: allFile(filter: {extension: {regex: "/(jpg)|(jpeg)|(png)/"}, dir: {regex: "/src\/images\/credentials/"}}) {
      edges {
        node {
          id
          childImageSharp {
            fluid(maxWidth: 250) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    mockup: file(relativePath: {eq: "mockup.png"}) {
      childImageSharp {
        fluid(maxWidth: 400, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
