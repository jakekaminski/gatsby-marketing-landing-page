import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default function Logo() {
    const data =
        useStaticQuery(graphql`
            query {
                file(relativePath: {eq: "primary.png"}) {
                    childImageSharp {
                        fixed (width: 50){
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
        `)
    return(
        <Img fixed={data.file.childImageSharp.fixed} />
    )
}