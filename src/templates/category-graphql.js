import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Header from "../components/header"
import SEO from "../components/seo"

import ArticleView from "../components/articleview"

export const query = graphql`
	query($slug: String!) {
		allArticlesJson(filter: {category: {eq: $slug}}) {
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

const Category = ({ data }) => {
	const articles = data.allArticlesJson.nodes;
	const catName = data.allArticlesJson.distinct[0];
	const cateName = data.allArticlesJson.distinct[0].charAt(0).toUpperCase() + data.allArticlesJson.distinct[0].slice(1);
	const categories = {
		'leader': {
			'title': 'Leader',
			'description':'Jim is a great leader. He inspires world-class design. He inspires us to do the best work of our careers. He speaks the language of business, so he can inspire leaders and stakeholders, and show how great design delights and monetizes'
		},
		'designer': {
			'title': 'Designer',
			'description':'Great design disrupts markets, from consumer electronics and gadgets to apparel and apps. You miss an opportunity if your products or services don’t delight, inspire and engage users emotionally.'
		}
	}
	const cat = categories[catName];
	return (
		<Layout>
			<SEO
				title={cateName}
				description={cat.description}
				pathname={`/${catName}`}
				article
			/>
			<Header siteTitle="Jim Nieters - Work" />
			<div className="dark:bg-black">
				<div className="container mx-auto px-5 pt-10">
					<h1 className="text-purple-700 dark:text-purple-100 text-4xl text-center font-medium capitalize">{catName}</h1>
					{/* <Image
						fluid={article.image.childImageSharp.fluid}
						alt={article.title}
						className="h-64 w-full object-cover"
					/> */}
					{/* <div className="absolute inset-0 pin z-50 overflow-auto flex">
						<div className="container self-center mx-auto px-5">
							<h1 className=" text-white text-5xl font-bold">{cat.title}</h1>
						</div>
					</div> */}
				</div>
				<div className="container mx-auto px-5 tracking-normal flex">
					<div className="w-full md:w-3/4 mx-auto pl-0 p-2 md:p-8 pt-2 text-base md:text-xl text-gray-800 text-center  dark:text-gray-300">
						<div dangerouslySetInnerHTML={{ __html: cat.description }}></div>
					</div>
					{/* {cat.articles} */}
					{/* {JSON.stringify(cat.articles)} */}
				</div>
				<div className="bg-gray-100 dark:bg-gray-900 tracking-normal">
					{articles.map((node, i) => (
						<ArticleView key={i} {...node}>
						
						</ArticleView>
						// <div key={i}>{node}</div>
					))}
				</div>
			</div>
			
			
		</Layout>
	)
};

export default Category;