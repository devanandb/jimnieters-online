import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Header from "../components/header"
import SEO from "../components/seo"

const About = () => (
	<Layout>
		<SEO title="About" />
		<Header siteTitle="work" />
		<div className="dark:bg-gray-800">
			<div className="container mx-auto px-5 py-20">
				<h1 className="text-4xl font-medium dark:text-gray-300">About me</h1>
				<div className="hero-about rounded-lg w-1/2 lg:w-1/4 h-64">
					
				</div>
				<div className="content summary flex flex-col lg:flex-row flex flex-wrap">

					<div className="w-full md:w-1/2 flex mb-5">
						<div className={`flex align-top`}>
							<div className="text-center font-normal font-content text-6xl">
								&nbsp;
							</div>
						</div>
						<div className="mt-10 -ml-6">
							<div className={`text-2xl color-sp capitalize font-sans font-normal`}>&nbsp;Professional Profile</div>
							<div className="text-xl md:text-xl font-content font-normal pt-2 text-gray-800 dark:text-gray-400" >
								<ul>
									<li className="dark:text-gray-300 mt-5">Experienced, proven and collaborative design leader, known for the research, design and development of products that delight users and differentiate businesses</li>
									<li className="dark:text-gray-300">Multidisciplinary team builder with 19 years experience forging and scaling productive, high-performing teams of 10 - 60 at startups and large corporations</li>
									<li className="dark:text-gray-300">Strategic and systems thinker with experience developing and scaling complex design systems for enterprise and consumer products across physical and digital platforms</li>
									<li className="dark:text-gray-300">Completed an invited MBA-level leadership dev program for the top 10% of leaders</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="w-full md:w-1/2 flex mb-5">
						<div className={`flex align-top`}>
							<div className="text-center font-normal font-content text-6xl">
								&nbsp;
							</div>
						</div>
						<div className="mt-10">
							<div className={`text-2xl color-sp capitalize font-sans font-normal`}>&nbsp;Key Achievements</div>
							<div className="text-xl md:text-xl font-content font-normal pt-2 text-gray-800 dark:text-gray-400" >
								<ul>
									<li className="dark:text-gray-300 mt-5">Consistently delivered $10s of millions in revenue, with increases in engagement and CSAT</li>
									<li className="dark:text-gray-300">Designed experiences that took products from last to first in their marketplaces globally</li>
									<li className="dark:text-gray-300">Transformed product development processes to embrace design thinking cross-functionally</li>
									<li className="dark:text-gray-300">Created design systems and governance model that scaled to 15,000 designers and engineers</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="w-full">
					<div className={`content flex flex-col lg:flex-row`}>
						<div className="w-full mr-6 flex mb-5">
							<div className={`flex align-top`}>
								<div className="text-center font-normal font-content text-6xl">
									&nbsp;
								</div>
							</div>
							<div className="mt-4">
								<div className={`text-3xl text-center color-sp capitalize font-sans font-normal`}>&nbsp;What I believe</div>
								<div className="text-xl md:text-xl font-content font-normal pt-2 text-gray-800 dark:text-gray-400" >
									<ul>
										<li className=" border-l-4 border-green-400 pl-5 list-none list-outside my-6 dark:text-gray-300 mt-5">Having started as a UX researcher, I drive teams to gather deep insights into unmet user needs and requirements, to inform designs that surprise and delight our users</li>
										<li className=" border-l-4 border-green-400 pl-5 list-none list-outside my-6 dark:text-gray-300">We must collaborate to bring great products to market. No one discipline can do it alone. I facilitate rapid design labs to ideate and align teams around optimal solutions</li>
										<li className=" border-l-4 border-green-400 pl-5 list-none list-outside my-6 dark:text-gray-300">I believe in LEAN experiments as a way to innovate</li>
										<li className=" border-l-4 border-green-400 pl-5 list-none list-outside my-6 dark:text-gray-300">The total experience matters to the user and customer, not just the application UI</li>
										<li className=" border-l-4 border-green-400 pl-5 list-none list-outside my-6 dark:text-gray-300">My goal is to inspire executives, users and customers, and my team</li>
										<li className=" border-l-4 border-green-400 pl-5 list-none list-outside my-6 dark:text-gray-300">As a leader, when I hire people smarter than me and I support them, it uplifts us all </li>
										<li className=" border-l-4 border-green-400 pl-5 list-none list-outside my-6 dark:text-gray-300">Design is about finding the optimal intersection between delight and monetization </li>
										<li className=" border-l-4 border-green-400 pl-5 list-none list-outside my-6 dark:text-gray-300">UX is a strategic function in companies that differentiate on the experience</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				
			</div>
		</div>
	</Layout>
)

export default About
