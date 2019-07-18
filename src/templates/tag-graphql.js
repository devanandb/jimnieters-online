import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Header from "../components/header"
import SEO from "../components/seo"

import ArticleList from "../components/article-list"

export const query = graphql`
	query($slug: String!) {
		articles: allArticlesJson(filter: {tags: {elemMatch: {slug: {eq: $slug}}}}) {
			nodes {
				id
				title
				tagline
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
				tags {
					name
					slug
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
		tags: allArticlesJson {
			distinct(field: tags___slug)
		}
	}
`;

const Tag = ({ data, props }) => {
	const articles = data.articles.nodes;
	const tags = data.tags.distinct;
	console.log(data);
	// const cat = 'slug';
	return (
		<Layout>
			<SEO
				title='Tags'
				description='All the tags'
				pathname='{`/tag`}'
				article
			/>
			<Header siteTitle="Jim Nieters - Work" />
			<div className="bg-gray-200 pt-20 pb-32 dark:bg-black">
				<div className="container mx-auto px-5 tracking-normal flex tag-cont">
					<div className="w-1/3">
						{/* {tags.map((tag, i) => (
							<Link key={i} className="height-0 hide" activeClassName="block text-sm block font-bold text-black dark:text-blue-500" partiallyActive={true} to={`/tag/${tag}`}>{tag}</Link>
						))} */}
						<div className="sticky top-0">

							{tags.map((tag, i) => (
								<Link key={i} className="inline-block px-4 py-2 tracking-wide mr-5 mb-5 rounded-full dark:bg-gray-900 dark:text-gray-300 bg-white" activeClassName="bg-sp text-white dark:text-gray-100" partiallyActive={true} to={`/tag/${tag}`}>{tag}</Link>
							))}
						</div>
					</div>
					<div className="w-2/3">
						<div className=" tracking-normal">
							{articles.map((node, i) => (
								<ArticleList key={i} {...node}>
								
								</ArticleList>
								
								// <div key={i}>{node}</div>
							))}
						</div>
					</div>
				</div>
				
			</div>
			
			
		</Layout>
	)
};

export default Tag;