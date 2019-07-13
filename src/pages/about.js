import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Header from "../components/header"
import SEO from "../components/seo"

const About = () => (
	<Layout>
		<SEO title="About" />
		<Header siteTitle="Jim Nieters - Work" />
		<div className="dark:bg-gray-800">
			<div className="container mx-auto px-5 py-20 flex">
				

				<div className="w-3/4">
				<h1 className="text-4xl font-medium dark:text-gray-300">About me</h1>
					<div className="text-2xl dark:text-gray-200 mt-10 font-medium ">Professional Profile</div>
					<ul>
						<li className="list-block dark:text-gray-300 mt-5">Experienced, proven and collaborative design leader, known for the research, design and development of products that delight users and differentiate businesses</li>
						<li className="list-block dark:text-gray-300">Multidisciplinary team builder with 19 years experience forging and scaling productive, high-performing teams of 10 - 60 at startups and large corporations</li>
						<li className="list-block dark:text-gray-300">Strategic and systems thinker with experience developing and scaling complex design systems for enterprise and consumer products across physical and digital platforms</li>
						<li className="list-block dark:text-gray-300">Completed an invited MBA-level leadership dev program for the top 10% of leaders</li>
					</ul>

					<div className="text-2xl dark:text-gray-200 mt-20 font-medium">Key Achievements</div>
					<ul>
						<li className="list-block dark:text-gray-300 mt-5">Consistently delivered $10s of millions in revenue, with increases in engagement and CSAT</li>
						<li className="list-block dark:text-gray-300">Designed experiences that took products from last to first in their marketplaces globally</li>
						<li className="list-block dark:text-gray-300">Transformed product development processes to embrace design thinking cross-functionally</li>
						<li className="list-block dark:text-gray-300">Created design systems and governance model that scaled to 15,000 designers and engineers</li>
					</ul>

					<div className="text-2xl dark:text-gray-200 mt-20 font-medium">What I believe</div>
					<ul>
						<li className="list-block dark:text-gray-300 mt-5">Having started as a UX researcher, I drive teams to gather deep insights into unmet user needs and requirements, to inform designs that surprise and delight our users</li>
						<li className="list-block dark:text-gray-300">We must collaborate to bring great products to market. No one discipline can do it alone. I facilitate rapid design labs to ideate and align teams around optimal solutions</li>
						<li className="list-block dark:text-gray-300">I believe in LEAN experiments as a way to innovate</li>
						<li className="list-block dark:text-gray-300">The total experience matters to the user and customer, not just the application UI</li>
						<li className="list-block dark:text-gray-300">My goal is to inspire executives, users and customers, and my team</li>
						<li className="list-block dark:text-gray-300">As a leader, when I hire people smarter than me and I support them, it uplifts us all </li>
						<li className="list-block dark:text-gray-300">Design is about finding the optimal intersection between delight and monetization </li>
						<li className="list-block dark:text-gray-300">UX is a strategic function in companies that differentiate on the experience</li>
					</ul>
				</div>
				<div className="w-1/4">
					<Link to="/contact" className="button">
							
						Contact me  →
					</Link>
				</div>
			</div>
		</div>
	</Layout>
)

export default About
