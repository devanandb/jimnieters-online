import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import ContactF from "../components/contactform"
import SEO from "../components/seo"

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <div className="container mx-auto px-5 mt-10">
		<div className="flex">
			{/* <div className="w-1/2">

			</div> */}
			<div className="w-1/2 mx-auto my-16">
				
				<ContactF />
			</div>
		</div>
	</div>
  </Layout>
)

export default Contact
