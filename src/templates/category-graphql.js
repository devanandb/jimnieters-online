import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Header from "../components/header"

import ArticleView from "../components/articleview"

export const query = graphql`
	query($slug: String!) {
		categoriesJson(slug: {eq: $slug}) {
			title
			slug
			description
			articles {
				title
				slug
				summary
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
		}
	}
`;

const Category = ({ data }) => {
	const cat = data.categoriesJson;
	return (
		<Layout>
			<Header siteTitle="Jim Nieters - Work" />

			<div className="container mx-auto px-5 mt-10">
				<h1 className="text-purple-700 text-4xl text-center font-medium">{cat.title}</h1>
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
				<div className="w-3/4 mx-auto pl-0 p-8 pt-2 text-xl text-gray-800 text-center">
					<div dangerouslySetInnerHTML={{ __html: cat.description }}></div>
				</div>
				{/* {cat.articles} */}
				{/* {JSON.stringify(cat.articles)} */}
			</div>
			<div className="bg-gray-100 tracking-normal">
				{cat.articles.map((node, i) => (
					<ArticleView key={i} {...node}>
					
					</ArticleView>
					// <div key={i}>{node.title}</div>
				))}
			</div>
			
		</Layout>
	)
};

export default Category;