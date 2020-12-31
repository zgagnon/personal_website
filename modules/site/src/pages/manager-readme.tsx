import React from "react"

import Layout from "../layout/layout"
import SEO from "../layout/seo"
import ManagerReadme from "../managerReadme/manager-readme"

const ManagerReadmePage: React.FC = ({}) => (
  <Layout>
    <SEO title="Home" />
    <ManagerReadme />
  </Layout>
)

export default ManagerReadmePage
