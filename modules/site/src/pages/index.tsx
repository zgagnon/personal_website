import React from "react"

import Layout from "../layout/layout"
import SEO from "../layout/seo"
import Intro, {IntroData} from "../intro/intro";
import {graphql} from 'gatsby'

const IndexPage: React.FC<IntroData> = ({data}) => (
	<Layout>
		<SEO title="Home"/>
		<Intro data={data}/>
	</Layout>
);

export const query = graphql`
  query MyQuery {
    file(relativePath: { eq: "headshot.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
export default IndexPage
