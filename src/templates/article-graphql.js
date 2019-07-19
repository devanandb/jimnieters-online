import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import _ from 'lodash';
import Layout from "../components/layout"
import Header from "../components/header"
import Card from "../components/card"
import SEO from "../components/seo"
import ScrollButton from "../components/scrolltop"


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
					tagline
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
					tagline
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
			tagline
			slug
			body
			summary
			published
			order
			featured
			category
			tags {
				slug
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

			<Header siteTitle="work" />
			<div className="dark:bg-gray-800">
				<div className="container mx-auto px-5">
					<div className={`pt-10 block text-xl font-medium text-${article.category} uppercase`}>{article.category}</div>
					<h1 className={`text-3xl md:text-3xl lg:text-4xl font-title  text-${article.category} font-medium dark:text-white`}>{article.title}</h1>
					<div className="text-gray-800 text-2xl font-light mt-1 mb-6  dark:text-gray-100">{article.tagline}</div>
				</div>
				<div className="container mx-auto px-5  tracking-wide leading-loose md:flex">
					
					<div className="w-full md:w-3/4 pl-0 mr-8 md:text-xl text-gray-900">
						<div className="w-full">
							<Image
								fluid={article.image.childImageSharp.fluid}
								alt={article.title}
								className="h-full w-full object-cover rounded-lg shadow-md"
							/>
						</div>
						<div className="content font-content mt-10 dark:text-gray-200 text-xl leading-relaxed">
							<div dangerouslySetInnerHTML={{ __html: article.body }}></div>
						</div>
					</div>
					<div className="w-full md:w-1/4">
						<div className="flex justify-left flex-wrap">
							{article.tags.map((tag, i)=> (
								<Link key={i} to={`/tag/${tag.slug}`} className="bg-indigo-100 text-gray-700 mr-5 mb-5 px-3 py-1 rounded-full">{tag.name}</Link>
							))}
						</div>
						<hr className="border-b-2 mb-10"/>
						{ activeArticle.next ? <div><Link to={`/case-study/${activeArticle.next.slug}`} className="-m-2 ml-2 uppercase color-sp font-semibold font-sans ">Next Up →</Link><Card article={activeArticle.next} align="left"></Card></div> : ''}
						{ activeArticle.previous ? <div><Link to={`/case-study/${activeArticle.previous.slug}`} className="-m-2 ml-2 uppercase color-sp font-semibold font-sans ">← Previous</Link><Card article={activeArticle.previous}></Card></div> : ''}
						
					</div>
				</div>
			</div>
			<ScrollButton scrollStepInPx="50" delayInMs="5"/>
		</Layout>
	)
};

export default Article;