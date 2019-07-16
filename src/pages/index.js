import React from "react"
import queryString from 'query-string'
// import { Link } from "gatsby"

import { graphql } from "gatsby"
import Layout from "../components/layout"
import Header from "../components/header"

import HeroImage from "../components/hero-image"
import SEO from "../components/seo"
import ArticleCard from "../components/articlecard"


class IndexPage extends React.Component {
	constructor(props) {
		super(props);
		let qparams = queryString.parse(this.props.location.search);
		this.state = {
			filter: qparams.category || 'all'
		};
		// console.log(qparams);
		
		let category = qparams.category || 'all';
		console.log(qparams.category);
		this.state.articles = this.props.data.allArticlesJson.nodes;
		if (qparams.category && qparams.category!=='all') {
			let filtered = this.props.data.allArticlesJson.nodes.filter(function(article) {
				return article.category === category;
			});
			this.state.articles = filtered;
		} else {
			let filtered = this.props.data.allArticlesJson.nodes;
			this.state.articles = filtered;
		}
		// console.log(this.state.articles);
		
		this.handleChange = this.handleChange.bind(this);
	}
	componentWillMount() {

	}
	handleChange(event) {
		let filter = event.target.value;
		this.setState({filter: filter});
		// let filtered =[];
		if (filter!=='all') {
			let filtered = this.props.data.allArticlesJson.nodes.filter(function(article) {
				console.log(article.category, article.category ===  filter);
				return article.category ===  filter;
			});
			this.setState({articles: filtered});
		} else {
			let filtered = this.props.data.allArticlesJson.nodes;
			this.setState({articles: filtered});
		}
		
		
	}
	render() {
		const articles = this.state.articles;
		return (
			<Layout className="dark:bg-gray-900">
				<SEO title="Home" />
				{/* <HeaderMinimal siteTitle="Jim Nieters - Work" /> */}

				<div className="hero-container bg-cover">
					<div className="container flex-wrap mx-auto lg:my-0 px-8 py-4 lg:pt-32 sm:pt-20 relative">
						<h1 className="text-white dark:text-black font-extrabold font-serif mt-2 tracking-wider text-4xl sm:text-4xl lg:text-6xl">Jim Nieters</h1>
						<p className="mt-1 text-2xl lg:text-4xl font-bold font-title text-gray-200 dark:text-black flex tracking-tight lg:justify-start">User Experience Design Leader</p>
						<p className="mt-1 text-gray-200 dark:text-gray-700 text-2xl flex lg:justify-start font-medium lg:pb-10">San Francisco, Bay Area</p>
						<p className="mt-4 text-xl md:text-2xl text-gray-100 dark:text-gray-800 w-full md:w-1/2 pb-40 font-light sm:pb-40 md:pb-20 lg:pb-16">I am a ux leader who loves to inspire and be inspired by design. Great design disrupts markets and delights users.</p>
						
						<div className="absolute inset-x-0 bottom-0 md:static w-2/3 md:w-2/5 flex flex-wrap items-center justify-between lg:mb-48 mb-5 ml-6 md:ml-0">
							<a className="border border-gray-600 bg-white dark:bg-black rounded-full p-2 lg:p-4 border-2 hover:shadow-xl" target="_blank" rel="noopener noreferrer" aria-label="Linkedin" href="https://www.linkedin.com/in/jimnieters/en">
								<svg role="img" className="h-8 hover:h-10" fill="#0077B5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn icon</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
							</a>
							<a className="border border-gray-600 bg-white  dark:bg-black rounded-full p-2 lg:p-4 border-2 hover:shadow-xl" href="mailto:jnieters@mac.com" data-tippy-content="@twitter_handle"  aria-label="Mail">
								<svg role="img" className="h-8 hover:h-10" viewBox="0 0 24 24" fill="#D14836" xmlns="http://www.w3.org/2000/svg"><title>mail icon</title><path d="M24 4.5v15c0 .85-.65 1.5-1.5 1.5H21V7.387l-9 6.463-9-6.463V21H1.5C.649 21 0 20.35 0 19.5v-15c0-.425.162-.8.431-1.068C.7 3.16 1.076 3 1.5 3H2l10 7.25L22 3h.5c.425 0 .8.162 1.069.432.27.268.431.643.431 1.068z"/></svg>
							</a>
							<a className="border border-gray-600 bg-white  dark:bg-black rounded-full p-2 lg:p-4 border-2 hover:shadow-xl"  target="_blank" rel="noopener noreferrer"  aria-label="Twitter" href="https://twitter.com/jimnieters" >
								<svg role="img" className="h-8 hover:h-10" viewBox="0 0 24 24" fill="#1DA1F2" xmlns="http://www.w3.org/2000/svg"><title>Twitter icon</title><path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"/></svg>
							</a>
							<a className="border border-gray-600 bg-white  dark:bg-black rounded-full p-2 lg:p-4 border-2 hover:shadow-xl" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/JimNieters"  aria-label="Facebook" >
								<svg role="img" className="h-8 hover:h-10" fill="#4172B8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook icon</title><path d="M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0C5.37216 0 0 5.37216 0 11.9991C0 17.9882 4.38789 22.9522 10.1242 23.8524V15.4676H7.07758V11.9991H10.1242V9.35553C10.1242 6.34826 11.9156 4.68714 14.6564 4.68714C15.9692 4.68714 17.3424 4.92149 17.3424 4.92149V7.87439H15.8294C14.3388 7.87439 13.8739 8.79933 13.8739 9.74824V11.9991H17.2018L16.6698 15.4676H13.8739V23.8524C19.6103 22.9522 23.9981 17.9882 23.9981 11.9991Z"/></svg>
							</a>
							<a className="border border-gray-600 bg-white  dark:bg-black rounded-full p-2 lg:p-4 border-2 hover:shadow-xl" target="_blank" rel="noopener noreferrer" href="https://about.me/jnieters" data-tippy-content="@facebook_handle"  aria-label="Aboutme">
								<svg role="img" className="h-8 hover:h-10" viewBox="0 0 24 24" fill="#00A98F" xmlns="http://www.w3.org/2000/svg"><title>About.me icon</title><path d="M19.536 9.15c-1.373 0-2.133 1.014-2.294 2.116h4.608c-.125-1.05-.867-2.115-2.314-2.115m-2.26 3.617c.235 1.156 1.193 1.97 2.532 1.97.725 0 1.77-.27 2.384-.914l1.175 1.35c-1.064 1.11-2.653 1.426-3.74 1.426-2.64 0-4.697-1.906-4.697-4.606 0-2.535 1.894-4.62 4.57-4.62 2.585 0 4.5 1.98 4.5 4.604v.766h-6.723v.023zm-6.487 3.83v-5.69c0-.976-.435-1.536-1.338-1.536-.814 0-1.355.585-1.717 1.007v6.24h-2.35v-5.7c0-.976-.415-1.532-1.318-1.532-.813 0-1.375.586-1.717 1.006v6.24H0V7.508h2.35v1.15c.4-.464 1.302-1.26 2.71-1.26 1.247 0 2.096.525 2.477 1.59.524-.762 1.5-1.59 2.91-1.59 1.7 0 2.69 1.01 2.69 2.962v6.24h-2.353l.005-.006z"/></svg>
							</a>
						</div>
						
						<div className="w-full lg:w-2/5 relative hidden">
							{/* <img src="/images/jim-folio-3.jpg" alt="Jim Nieters" className="rounded-none w-full lg:rounded-lg shadow-2xl hidden lg:block" /> */}
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
				
				<Header siteTitle="Jim Nieters - Work" />
				{/* <div className="dark:bg-gray-800 absolute w-full sticky top-0 z-20">
					<div className="py-4 container mx-auto">
						
						
					</div>
				</div> */}
				<div className="filter-nav hidden lg:inline-block pt-1 mx-auto text-left absolute sticky top-0 z-20">
					<form className="inline-block py-4 flex justify-center">
						<label className={`filter ${ this.state.filter === 'all' ? 'active bg-gray-700' : ''}`}>
							<input className="appearance-none" type="radio" value="all" checked={this.state.filter === 'all'} onChange={this.handleChange} />
							All
						</label>
						<label className={`filter ${ this.state.filter === 'leader' ? 'active bg-leader' : ''}`}>
							<input className="appearance-none" type="radio" value="leader" checked={this.state.filter === 'leader'} onChange={this.handleChange} />
							Leader
						</label>
						<label className={`filter ${ this.state.filter === 'designer' ? 'active bg-designer' : ''}`}>
							<input className="appearance-none" type="radio" value="designer" checked={this.state.filter === 'designer'} onChange={this.handleChange} />
							Designer
						</label>
					</form>
				</div>
				<div className="filter-nav-sm md:hidden pt-1 block mx-auto text-left">
					<form className="py-4 flex justify-center">
						<label className={`filter text-sm py-1 px-3 ${ this.state.filter === 'all' ? 'active' : ''}`}>
							<input className="appearance-none" type="radio" value="all" checked={this.state.filter === 'all'} onChange={this.handleChange} />
							All
						</label>
						<label className={`filter text-sm py-1 px-3 ${ this.state.filter === 'leader' ? 'active' : ''}`}>
							<input className="appearance-none" type="radio" value="leader" checked={this.state.filter === 'leader'} onChange={this.handleChange} />
							Leader
						</label>
						<label className={`filter text-sm py-1 px-3 ${ this.state.filter === 'designer' ? 'active' : ''}`}>
							<input className="appearance-none" type="radio" value="designer" checked={this.state.filter === 'designer'} onChange={this.handleChange} />
							Designer
						</label>
					</form>
				</div>
				<div className="container pt-12 pb-12 mx-auto">
					<div className="flex flex-wrap justify-left">
						{articles.map((article, i) => (
							<ArticleCard key={i} {...article}>
							
							</ArticleCard>
							// <div>{article.slug}</div>
						))}
					</div>
					
				</div>
			</Layout>
		)
	}
}


export default IndexPage

export const query = graphql`
	query {
		allArticlesJson(sort: {fields: order}) {
			nodes {
				id
				article_id
				title
				tagline
				slug
				summary
				category
				order
				updated_at(fromNow: true)
				tags {
					name
					slug
				}
				image {
					childImageSharp {
						fluid {
							...GatsbyImageSharpFluid
						}
					}
				}
			}
		}
	}
`;

