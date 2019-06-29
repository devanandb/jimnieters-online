import React from "react"
import { graphql } from "gatsby"
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
		<div>
			<h1>{article.title}</h1>
			<Image
				fluid={article.image.childImageSharp.fluid}
				alt={article.title}
			/>
			<div dangerouslySetInnerHTML={{ __html: article.body }}></div>
		</div>
	)
};

export default Article;