import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import HeroImage from "../components/hero-image"
import SEO from "../components/seo"

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<div className="hero-container bg-cover">
			<div className="max-w-6xl flex items-center flex-wrap mx-auto lg:my-0 py-12 ">
				<div id="profile" className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-3xl bg-white opacity-100 mx-6 lg:mx-0 py">

					<div className="p-4 md:p-12 text-center lg:text-left">
						<div className="profile block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-top-center"></div>
						
						{/* <h1 className="text-4xl pt-8 lg:pt-0 font-serif">Jim Nieters</h1> */}
						<div className="mx-auto lg:mx-0 w-4/5 pt-3 opacity-25"></div>
						<p className="pt-1 text-3xl font-medium flex items-center justify-center lg:justify-start">User Experience Design Leader</p>
						<p className="pt-2 text-gray-600 text-xl flex items-center justify-center lg:justify-start">San Francisco, Bay Area</p>
						<p className="pt-8 text-2xl">I am a ux leader who loves to inspire and be inspired by design. Great design disrupts markets and delights users.</p>
						<div className="pt-12 pb-8">
							<a href="mailto:jnieters@mac.com" className="bg-purple-600 cursor-pointer rounded hover:bg-purple-700 text-white font-normal tracking-wide py-3 px-6 text-xl shadow-xl">
							Get In Touch
							</a> 
						</div>

						<div className="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-between">
							
							<a className="border border-gray-200 rounded-full p-3 shadow-md hover:shadow-xl" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jimnieters/en">
								<svg role="img" className="h-8 hover:h-10" fill="#0077B5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn icon</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
							</a>
							<a className="border border-gray-200 rounded-full p-3 shadow-md hover:shadow-xl" href="mailto:jnieters@mac.com" data-tippy-content="@twitter_handle">
								<svg role="img" className="h-8 hover:h-10" viewBox="0 0 24 24" fill="#D14836" xmlns="http://www.w3.org/2000/svg"><title>Gmail icon</title><path d="M24 4.5v15c0 .85-.65 1.5-1.5 1.5H21V7.387l-9 6.463-9-6.463V21H1.5C.649 21 0 20.35 0 19.5v-15c0-.425.162-.8.431-1.068C.7 3.16 1.076 3 1.5 3H2l10 7.25L22 3h.5c.425 0 .8.162 1.069.432.27.268.431.643.431 1.068z"/></svg>
							</a>
							<a className="border border-gray-200 rounded-full p-3 shadow-md hover:shadow-xl"  target="_blank" rel="noopener noreferrer" href="https://twitter.com/jimnieters" >
								<svg role="img" className="h-8 hover:h-10" viewBox="0 0 24 24" fill="#1DA1F2" xmlns="http://www.w3.org/2000/svg"><title>Twitter icon</title><path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"/></svg>
							</a>
							<a className="border border-gray-200 rounded-full p-3 shadow-md hover:shadow-xl" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/JimNieters" >
								<svg role="img" className="h-8 hover:h-10" fill="#4172B8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook icon</title><path d="M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0C5.37216 0 0 5.37216 0 11.9991C0 17.9882 4.38789 22.9522 10.1242 23.8524V15.4676H7.07758V11.9991H10.1242V9.35553C10.1242 6.34826 11.9156 4.68714 14.6564 4.68714C15.9692 4.68714 17.3424 4.92149 17.3424 4.92149V7.87439H15.8294C14.3388 7.87439 13.8739 8.79933 13.8739 9.74824V11.9991H17.2018L16.6698 15.4676H13.8739V23.8524C19.6103 22.9522 23.9981 17.9882 23.9981 11.9991Z"/></svg>
							</a>
							<a className="border border-gray-200 rounded-full p-3 shadow-md hover:shadow-xl" target="_blank" rel="noopener noreferrer" href="https://about.me/jnieters" data-tippy-content="@facebook_handle">
								<svg role="img" className="h-8 hover:h-10" viewBox="0 0 24 24" fill="#00A98F" xmlns="http://www.w3.org/2000/svg"><title>About.me icon</title><path d="M19.536 9.15c-1.373 0-2.133 1.014-2.294 2.116h4.608c-.125-1.05-.867-2.115-2.314-2.115m-2.26 3.617c.235 1.156 1.193 1.97 2.532 1.97.725 0 1.77-.27 2.384-.914l1.175 1.35c-1.064 1.11-2.653 1.426-3.74 1.426-2.64 0-4.697-1.906-4.697-4.606 0-2.535 1.894-4.62 4.57-4.62 2.585 0 4.5 1.98 4.5 4.604v.766h-6.723v.023zm-6.487 3.83v-5.69c0-.976-.435-1.536-1.338-1.536-.814 0-1.355.585-1.717 1.007v6.24h-2.35v-5.7c0-.976-.415-1.532-1.318-1.532-.813 0-1.375.586-1.717 1.006v6.24H0V7.508h2.35v1.15c.4-.464 1.302-1.26 2.71-1.26 1.247 0 2.096.525 2.477 1.59.524-.762 1.5-1.59 2.91-1.59 1.7 0 2.69 1.01 2.69 2.962v6.24h-2.353l.005-.006z"/></svg>
							</a>
						</div>
						
					</div>

				</div>
				
				<div className="w-full lg:w-2/5 relative">
					{/* <img src="/images/jim-folio-3.jpg" alt="Jim Nieters"  /> */}
					<HeroImage className="rounded-none w-full lg:rounded-lg shadow-2xl hidden lg:block" />
					<div className="absolute bottom-0 pb-5 inset-x-0 text-center">
						<a href="/about" className="uppercase text-white text-xl font-medium border border-white inline-block py-2 px-5 rounded-sm ">About me</a>
					</div>
				</div>
				
				{/* <div className="absolute top-0 right-0 h-12 w-18 p-4">
					<button className="js-change-theme focus:outline-none">🌙</button>
				</div> */}

			</div>
		</div>
		{/* <p>Welcome to your new Gatsby site.</p>
		<p>Now go build something great.</p> */}
		{/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
			<Image />
		</div> */}
		<Link to="content/experience-led-differentiating-on-design">Experience-Led: Differentiating on Design</Link>
	</Layout>
)

export default IndexPage
