import React from "react"

import Layout from "../layout/layout"
import SEO from "../layout/seo"
import Intro from "../intro/intro";

const IndexPage = () => (
  <Layout>
    <SEO title="Home"/>
    <Intro/>
  </Layout>
);

export default IndexPage
