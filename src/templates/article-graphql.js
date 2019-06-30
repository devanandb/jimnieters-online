import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Image from "gatsby-image"

export const query = graphql`
	query($slug: String!) {
		articlesJson(slug: {eq: $slug}) {
			id
			title
			slug
			body
			summary
			published
			order
			featured
			category_id
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
	const article = data.articlesJson;
	return (
		<Layout>
			<div className="relative ">
				<Image
					fluid={article.image.childImageSharp.fluid}
					alt={article.title}
					className="h-64 w-full object-cover"
				/>
				<div className="absolute inset-0 pin z-50 overflow-auto flex">
					<div className="container self-center mx-auto px-5">
						<h1 className=" text-white text-5xl font-bold">{article.title}</h1>
					</div>
				</div>
			</div>
			<div className="content container mx-auto px-5 font-content tracking-wide leading-loose flex">
				<div className="w-3/4 pl-0 p-8 text-xl text-gray-900">
					<div dangerouslySetInnerHTML={{ __html: article.body }}></div>
				</div>
				<div className="w-1/4">
					<div className="mt-10 ml-2 uppercase text-purple-600 font-semibold font-sans">Next Up</div>
					<div className="rounded overflow-hidden shadow-lg mt-4 ml-2 mr-0">
						<Image
							fluid={article.image.childImageSharp.fluid}
							alt={article.title}
							className="h-48 w-full object-cover"
						/>
						<div className="px-6 py-4">
							<div className="font-medium font-sans text-xl text-indigo-800 leading-relaxed tracking-normal mb-2">{article.title}</div>
						
						</div>
						<div className="px-6 py-4 font-sans ">
							<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-normal mr-2 mb-2">#photography</span>
							<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-normal mr-2 mb-2">#travel</span>
							<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-normal">#winter</span>
						</div>
					</div>
				</div>
			</div>
			
		</Layout>
	)
};

export default Article;