import React from "react"
// import { Link } from "gatsby"

import { graphql } from "gatsby"
import Layout from "../components/layout"
import Header from "../components/header"

import HeroImage from "../components/hero-image"
import SEO from "../components/seo"
import ArticleView from "../components/articleview"
// import CaseStudies from "../components/casestudies"

class CaseStudies extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			articles: this.props.data.allArticlesJson.nodes,
			filter: 'all'
		};
		this.handleChange = this.handleChange.bind(this);
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
			<Layout className="">
				<SEO title="Home" />
				{/* <HeaderMinimal siteTitle="Jim Nieters - Work" /> */}

				
				<Header siteTitle="Jim Nieters - Work" />
				{/* <div className="dark:bg-gray-800 absolute w-full sticky top-0 z-20">
					<div className="py-4 container mx-auto">
						
						
					</div>
				</div> */}
				<div className="filter-nav pt-0 inline-block mx-auto text-left dark:bg-gray-800 absolute sticky top-0 z-20">
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
					{/* <a href="javascript:void(0)" className="bg-gray-200 mr-4 px-4 rounded-lg py-2 bg-blue-600 text-white">All</a>
					<a href="javascript:void(0)" className="bg-gray-200 mr-4 px-4 rounded-lg py-2 hover:bg-blue-600 hover:text-white">Just Leader</a>
					<a href="javascript:void(0)" className="bg-gray-200 mr-4 px-4 rounded-lg py-2 hover:bg-blue-600 hover:text-white">Just Design</a> */}
				</div>
				<div className="">
					{articles.map((article, i) => (
						<ArticleView key={i} {...article}>
						
						</ArticleView>
						// <div>{article.slug}</div>
					))}
				</div>
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
