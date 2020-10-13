import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"
import Navigation from "../components/common/navigation/navigation"

import Header from "../components/sections/header"
import Credentials from "../components/sections/credentials"
import Value from "../components/sections/value"
import Features from "../components/sections/features"
import Footer from "../components/sections/footer"
import GetStarted from "../components/sections/getstarted"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <Navigation />
    <Header />
    <Credentials logos={data.allFile.edges} />
    <Value />
    <Features />
    <GetStarted />
    <Footer />
  </Layout>
)

export default IndexPage

export const query = graphql`
  query logos {
    allFile(filter: {extension: {regex: "/(jpg)|(jpeg)|(png)/"}, dir: {regex: "/src\/images\/credentials/"}}) {
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
  }
`
