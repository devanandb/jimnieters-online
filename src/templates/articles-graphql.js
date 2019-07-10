import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import _ from 'lodash';
import Layout from "../components/layout"
import Header from "../components/header"
import Card from "../components/card"
import SEO from "../components/seo"
import ScrollButton from "../components/scrolltop"
import ArticleView from "../components/articleview"


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
	}
`;

const ArticleSum = ({ data }) => {
	const article = data.article;
	console.log(article);
	const activeArticle = _.find(data.articles.edges, function (x) {return x.node.slug===article.slug});
	return (
		<Layout>
			<SEO
				title={article.title}
				description={article.summary}
				image={article.image.childImageSharp.fluid.src}
				pathname={article.slug}
				article
			/>

			<Header siteTitle="Jim Nieters - Work" />
			<div className="dark:bg-gray-800">
				{/* <div className="container mx-auto px-5">
					<div className="pt-10 block text-xl text-blue-700 font-bold tracking-wider dark:text-blue-300 uppercase">{article.category}</div>
					<h1 className="text-3xl md:text-3xl lg:text-4xl font-medium mb-10  dark:text-white">{article.title}</h1>
				</div> */}
				{/* <div className="container mx-auto px-5 font-content tracking-wide leading-loose md:flex">
					
					<div className="w-full md:w-3/4 pl-0 mr-8 md:text-xl text-gray-900">
						<div className="w-full">
							<Image
								fluid={article.image.childImageSharp.fluid}
								alt={article.title}
								className="h-full w-full object-cover rounded-lg"
							/>
						</div>
						<div className="content mt-10 dark:text-gray-200">
							<div dangerouslySetInnerHTML={{ __html: article.body }}></div>
						</div>
					</div>
					<div className="w-full md:w-1/4">
						<div className="-m-2 ml-2 uppercase text-purple-600 dark:text-blue-400 font-semibold font-sans ">{activeArticle.next ? 'Next Up →' : ''}</div>
						{ activeArticle.next ? <Card article={activeArticle.next} align="left"></Card> : ''}

						<div className="-m-2 ml-2 uppercase text-gray-600 dark:text-gray-300 font-semibold font-sans ">
							
							{activeArticle.previous ? '← Previous' : ''}
						</div>
						{ activeArticle.previous ? <Card article={activeArticle.previous}></Card> : ''}
					</div>
				</div>*/}
			</div> 
			{/* <ScrollButton scrollStepInPx="50" delayInMs="5"/> */}
			<ArticleView {...article}>
						
			</ArticleView>
		</Layout>
	)
};

export default ArticleSum;