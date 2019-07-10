import React from "react"
import queryString from 'query-string'
// import { Link } from "gatsby"

import { graphql } from "gatsby"
import Layout from "../components/layout"
import Header from "../components/header"

import HeroImage from "../components/hero-image"
import SEO from "../components/seo"
import ArticleView from "../components/articleview"
import ScrollButton from "../components/scrolltop"
// import CaseStudies from "../components/casestudies"

class CaseStudies extends React.Component {
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

				
				<Header siteTitle="Jim Nieters - Work" />
				{/* <div className="dark:bg-gray-800 absolute w-full sticky top-0 z-20">
					<div className="py-4 container mx-auto">
						
						
					</div>
				</div> */}
				<div className="filter-nav hidden lg:inline-block pt-0 mx-auto text-left absolute sticky top-0 z-20">
					<form className="inline-block py-4 flex justify-center">
						<label className={`filter ${ this.state.filter === 'all' ? 'active' : ''}`}>
							<input className="appearance-none" type="radio" value="all" checked={this.state.filter === 'all'} onChange={this.handleChange} />
							All
						</label>
						<label className={`filter ${ this.state.filter === 'leader' ? 'active' : ''}`}>
							<input className="appearance-none" type="radio" value="leader" checked={this.state.filter === 'leader'} onChange={this.handleChange} />
							Leader
						</label>
						<label className={`filter ${ this.state.filter === 'designer' ? 'active' : ''}`}>
							<input className="appearance-none" type="radio" value="designer" checked={this.state.filter === 'designer'} onChange={this.handleChange} />
							Designer
						</label>
					</form>
				</div>
				<div className="filter-nav-sm md:hidden pt-0 block mx-auto text-left">
					<form className=" py-4 flex justify-center">
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
				<div className="">
					{articles.map((article, i) => (
						<ArticleView key={i} {...article}>
						
						</ArticleView>
						// <div>{article.slug}</div>
					))}
				</div>
				<ScrollButton scrollStepInPx="50" delayInMs="5"/>
			</Layout>
		)
	}
}


export default CaseStudies

export const query = graphql`
	query {
		allArticlesJson {
			nodes {
				id
				article_id
				title
				slug
				summary
				category
				order
				image {
					childImageSharp {
						fluid {
							...GatsbyImageSharpFluid
						}
					}
				}
				case_study {
					problem
					solution
					impact
					points {
						name
						value
					}
					images {
						alt
						title
						src {
							childImageSharp {
								fluid {
									...GatsbyImageSharpFluid
								}
							}
						}
					}
				}
			}
			distinct(field: category)
		}
	}
`;
