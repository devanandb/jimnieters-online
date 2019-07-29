import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import _ from 'lodash';
import Layout from "../components/layout"
import Header from "../components/header"
import Card from "../components/card"
import SEO from "../components/seo"
// import ScrollButton from "../components/scrolltop"
import ArticleView from "../components/articleview"


// import Image from "gatsby-image"

export const query = graphql`
	query($slug: String!) {
		articles: allArticlesJson(sort: {order: ASC, fields: order}) {
			edges {
				node {
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
			order
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
	// const edges = data.articles.edges;
	// console.log('asdasd', data.articles);
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
			{/* <ScrollButton scrollStepInPx="50" delayInMs="5"/> */}
			<ArticleView {...article}>
						
			</ArticleView>
			<div className="container mx-auto mt-10">

				<div className="flex flex-row-reverse flex-wrap justify-center md:justify-center">
					{ activeArticle.next ? <div className="w-full md:w-1/3 lg:w-1/3 mx-5"><Link to={`/case-study/${activeArticle.next.slug}`} className="-m-2 ml-2 uppercase color-sp font-semibold font-sans ">Next Up →</Link><Card article={activeArticle.next} mode="summary"></Card></div> : ''}
					<hr className="" />
					{ activeArticle.previous ? <div className="w-full md:w-1/3 lg:w-1/3 mx-5"><Link to={`/case-study/${activeArticle.previous.slug}`} className="-m-2 ml-2 uppercase color-sp font-semibold font-sans ">← Previous</Link><Card  mode="summary" article={activeArticle.previous}></Card></div> : ''}
				</div>
			</div>
			

			
		</Layout>
	)
};

export default ArticleSum;