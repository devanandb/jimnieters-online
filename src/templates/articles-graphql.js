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
		articles: allMarkdownRemark(sort: {order: ASC, fields: frontmatter___order}) {
			edges {
				node {
					frontmatter {
						slug
					}
				}
				next {
					frontmatter {
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
				previous {
					frontmatter {
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
		}
		article: markdownRemark(frontmatter: {slug: {eq: $slug}}) {
			frontmatter {
				title
				tagline
				slug
				summary
				order
				category
				tags
				image {
					childImageSharp {
						fluid {
							...GatsbyImageSharpFluid
						}
					}
				}
				image_caption
				case_study {
					problem
					solution
					impact
					images {
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
			html
		}
	}
`;

const ArticleSum = ({ data }) => {
	const article = data.article.frontmatter;
	// const edges = data.articles.edges;
	// console.log('asdasd', data.articles);
	const activeArticle = _.find(data.articles.edges, function (x) {return x.node.frontmatter.slug===article.slug});
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
					{ activeArticle.next ? <div className="w-full md:w-1/3 lg:w-1/3 mx-5"><Link to={`/case-study/${activeArticle.next.frontmatter.slug}`} className="-m-2 ml-2 uppercase color-sp font-semibold font-sans ">Next Up →</Link><Card article={activeArticle.next.frontmatter} mode="summary"></Card></div> : ''}
					<hr className="" />
					{ activeArticle.previous ? <div className="w-full md:w-1/3 lg:w-1/3 mx-5"><Link to={`/case-study/${activeArticle.previous.frontmatter.slug}`} className="-m-2 ml-2 uppercase color-sp font-semibold font-sans ">← Previous</Link><Card  mode="summary" article={activeArticle.previous.frontmatter}></Card></div> : ''}
				</div>
			</div>
			

			
		</Layout>
	)
};

export default ArticleSum;