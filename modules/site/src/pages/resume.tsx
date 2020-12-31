import React from "react"

import Layout from "../layout/layout"
import SEO from "../layout/seo"
import Resume from "../resume/resume"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Resume />
  </Layout>
)

export default IndexPage
