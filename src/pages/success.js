import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Success = () => (
  <Layout>
    <SEO title="Thank you" />
	<div className="container mx-auto text-center">

    	<div className="text-center my-16 text-5xl font-medium text-gray-800">
			Thank you for contacting us!
		</div>
    	<Link className="my-12 inline-block bg-purple-600 text-white px-6 rounded-lg py-3" to="/">Go back to the Home</Link>
	</div>
  </Layout>
)

export default Success
