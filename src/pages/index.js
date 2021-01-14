import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="BHM Landing Page" />
    <h1>Black History Month</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet nisl purus in mollis nunc sed. Mollis aliquam ut porttitor leo a diam. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget egestas.</p>
    <p>Cursus turpis massa tincidunt dui ut. Vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra. Quisque id diam vel quam elementum pulvinar. Phasellus vestibulum lorem sed risus ultricies tristique. Praesent semper feugiat nibh sed. At imperdiet dui accumsan sit amet.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />

  </Layout>
)

export default IndexPage
