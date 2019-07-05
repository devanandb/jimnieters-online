import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import ContactF from "../components/contactform"
import SEO from "../components/seo"
import Header from "../components/header"

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
	<Header siteTitle="Jim Nieters - Work" />
	<div className="dark:bg-gray-800">
		<div className="container mx-auto px-5 py-20">
			<div className="flex">
				{/* <div className="w-1/2">

				</div> */}
				<div className="w-1/2 mx-auto my-16 dark:bg-gray-900">
					
					<ContactF />
				</div>
			</div>
		</div>
	</div>
  </Layout>
)

export default Contact
