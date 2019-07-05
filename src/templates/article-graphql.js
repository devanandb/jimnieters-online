import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import _ from 'lodash';
import Layout from "../components/layout"
import Header from "../components/header"
import Card from "../components/card"

import Image from "gatsby-image"

export const query = graphql`
	query($slug: String!) {
		articles: allArticlesJson(sort: {order: ASC, fields: order}) {
			edges {
				node {
					slug
				}
				next {
					title
					slug
					category
					image {
						childImageSharp {
							fluid(maxWidth: 320) {
								...GatsbyImageSharpFluid
							}
						}
					}
				}
				previous {
					title
					slug
					category
					image {
						childImageSharp {
							fluid(maxWidth: 320) {
								...GatsbyImageSharpFluid
							}
						}
					}
				}
			}
		}
		article: articlesJson(slug: {eq: $slug}) {
			id
			title
			slug
			body
			summary
			published
			order
			featured
			category
			tags {
				name
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
`;

const Article = ({ data }) => {
	const article = data.article;
	const activeArticle = _.find(data.articles.edges, function (x) {return x.node.slug===article.slug});
	return (
		<Layout>
			<Header siteTitle="Jim Nieters - Work" />
			<div className="container mx-auto px-5">
				<Link to={`/${article.category}`} className="mt-10 block text-2xl text-blue-700 font-medium capitalize">{article.category}/</Link>
				<h1 className="text-3xl md:text-3xl lg:text-4xl font-bold mt-1 mb-10">{article.title}</h1>
			</div>
			<div className="container mx-auto px-5 font-content tracking-wide leading-loose md:flex">
				
				<div className="w-full md:w-3/4 pl-0 mr-8 md:text-xl text-gray-900">
					<div className="w-full">
						<Image
							fluid={article.image.childImageSharp.fluid}
							alt={article.title}
							className="h-full w-full object-cover rounded-lg"
						/>
					</div>
					<div className="content mt-10">
						<div dangerouslySetInnerHTML={{ __html: article.body }}></div>
					</div>
				</div>
				<div className="w-full md:w-1/4">
					<div className="-m-2 ml-2 uppercase text-purple-600 font-semibold font-sans ">{activeArticle.next ? 'Next Up →' : ''}</div>
					{ activeArticle.next ? <Card article={activeArticle.next} align="left"></Card> : ''}

					<div className="-m-2 ml-2 uppercase text-gray-600 font-semibold font-sans ">
						
						{activeArticle.previous ? '← Previous' : ''}
					</div>
					{ activeArticle.previous ? <Card article={activeArticle.previous}></Card> : ''}
				</div>
			</div>
			
		</Layout>
	)
};

export default Article;