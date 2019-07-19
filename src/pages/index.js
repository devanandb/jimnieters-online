import React from "react"
import queryString from 'query-string'
// import { Link } from "gatsby"

import { graphql } from "gatsby"
import Layout from "../components/layout"
import Header from "../components/header"

import HeroImage from "../components/hero-image"
import SEO from "../components/seo"
import ArticleCard from "../components/articlecard"
import { FaEnvelope, FaFacebookSquare, FaLinkedin, FaTwitterSquare  } from 'react-icons/fa';


class IndexPage extends React.Component {
	constructor(props) {
		super(props);
		let qparams = queryString.parse(this.props.location.search);
		this.state = {
			filter: qparams.category || 'all'
		};
		console.log(this.state.filter);
		
		let category = qparams.category || 'all';
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
		const socialLinks = [
			{
				"name": "linkedin",
				"url": "https://www.linkedin.com/in/jimnieters/en",
				"icon": "Linkedin"
			},
			{
				"name": "facebook",
				"url": "https://www.facebook.com/JimNieters",
				"icon": "Facebook"
			},
			{
				"name": "twitter",
				"url": "https://twitter.com/jimnieters",
				"icon": "Twitter"
			},
			{
				"name": "mail",
				"url": "mailto:jnieters@mac.com",
				"icon": "Envelope"
			}
		]
		return (
			<Layout className="dark:bg-gray-900">
				<SEO title="Home" />
				{/* <HeaderMinimal siteTitle="Jim Nieters - Work" /> */}
				<div className="hero-container sm:small bg-cover">
					<div className="container flex-wrap mx-auto pt-10 lg:my-0 px-8 py-4 lg:pt-32 sm:pt-20 relative">
						<h1 className="text-white dark:text-black font-extrabold font-serif mt-2 tracking-wider text-5xl sm:text-4xl lg:text-6xl">Jim Nieters</h1>
						<p className="mt-1 text-2xl lg:text-5xl font-bold tracking-normal font-title text-gray-100 dark:text-black flex lg:justify-start text-shadow3">User Experience Design Leader</p>
						<p className="mt-1 text-gray-100 dark:text-gray-800 font-title text-xl flex lg:justify-start font-normal lg:pb-10 tracking-wide text-shadow3">San Francisco, Bay Area</p>
						<p className="mt-4 text-2xl md:text-2xl text-gray-100 dark:text-gray-300 w-full md:w-1/2 pb-10 font-normal sm:pb-40 md:pb-20 lg:pb-16 text-shadow2">I am a ux leader who loves to inspire and be inspired by design. Great design disrupts markets and delights users.</p>
						
						<div className="flex flex-wrap w-1/5 md:w-1/2 mb-10">

							{/* {socialLinks.map()} */}
							{socialLinks.map((slink, i) => (
								<a className="mr-3 mb-5 text-gray-200 cursor-pointer shadow-md hover:shadow-lg text-5xl dark:text-gray-800" key={i} target={slink.name !=='mail' ? "_blank" :''} rel="noopener noreferrer" aria-label={slink.name} href={slink.url}>
									{(() => {
										switch (slink.name) {
											case 'linkedin':
												return <FaLinkedin className="" />
											case 'facebook':
												return <FaFacebookSquare className="" />
											case 'twitter':
												return <FaTwitterSquare className="" />
											case 'mail':
												return <FaEnvelope className="" />
											default :
												return null
										}
									})()}
									
								</a>
								// <div>{article.slug}</div>
							))}
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
				
				<Header siteTitle="&nbsp;" />
				{/* <div className="dark:bg-gray-800 absolute w-full sticky top-0 z-20">
					<div className="py-4 container mx-auto">
						
						
					</div>
				</div> */}
				<div className="filter-nav hidden lg:inline-block pt-1 mx-auto text-left absolute sticky top-0 z-20">
					<form className="inline-block py-4 flex justify-center">
						<label className={`filter px-12 ${ this.state.filter === 'all' ? 'active bg-gray-700' : ''}`}>
							<input className="appearance-none" type="radio" value="all" checked={this.state.filter === 'all'} onChange={this.handleChange} />
							All
						</label>
						<label className={`filter px-12 ${ this.state.filter === 'leader' ? 'active bg-leader' : ''}`}>
							<input className="appearance-none" type="radio" value="leader" checked={this.state.filter === 'leader'} onChange={this.handleChange} />
							Leader
						</label>
						<label className={`filter px-12 ${ this.state.filter === 'designer' ? 'active bg-designer' : ''}`}>
							<input className="appearance-none" type="radio" value="designer" checked={this.state.filter === 'designer'} onChange={this.handleChange} />
							Designer
						</label>
					</form>
				</div>
				<div className="filter-nav-sm md:hidden pt-4 block mx-auto text-left">
					<form className="py-4 flex justify-center">
						<label className={`filter text-sm py-1 ${ this.state.filter === 'all' ? 'active bg-sp' : ''}`}>
							<input className="appearance-none" type="radio" value="all" checked={this.state.filter === 'all'} onChange={this.handleChange} />
							All
						</label>
						<label className={`filter text-sm py-1 ${ this.state.filter === 'leader' ? 'active bg-leader' : ''}`}>
							<input className="appearance-none" type="radio" value="leader" checked={this.state.filter === 'leader'} onChange={this.handleChange} />
							Leader
						</label>
						<label className={`filter text-sm py-1 ${ this.state.filter === 'designer' ? 'active bg-designer' : ''}`}>
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

