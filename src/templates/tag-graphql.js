import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Header from "../components/header"
import SEO from "../components/seo"

// import ArticleList from "../components/article-list"
import ArticleCard from "../components/articlecard"


export const query = graphql`
	query($slug: String!) {
		articles: allMarkdownRemark(filter: {frontmatter: {tags: {eq: $slug}}}) {
			nodes {
				frontmatter {
					title
					tagline
					slug
					summary
					category
					order
					tags
					image {
						childImageSharp {
							fluid {
								...GatsbyImageSharpFluid
							}
						}
					}
				}
			}
		}
		tags: allMarkdownRemark {
			distinct(field: frontmatter___tags)
		}
	}
`;

const Tag = ({ data, props }) => {
	const articles = data.articles.nodes;
	const tags = data.tags.distinct;
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
			<div className="bg-gray-200 pt-12 pb-32 -mt-5 dark:bg-black">
				<div className="container mx-auto px-5 tracking-normal tag-cont">
					<div className="">
						<div className="sticky top-0 flex flex-wrap justify-center">
							{tags.map((tag, i) => (
								<Link key={i} className="inline-block px-6 py-2 tracking-wide mr-5 mb-5 rounded-full dark:bg-gray-900 dark:text-gray-300 bg-white" activeClassName="bg-sp text-white dark:text-gray-100" partiallyActive={true} to={`/tag/${tag.replace(/\s+/g, '-').toLowerCase()}`}>{tag}</Link>
							))}
						</div>
					</div>
					<div id="tagView" className="">
						<div className="pt-20 flex flex-wrap">
							{articles.map((node, i) => (
								// <ArticleCard key={i} {...node}>
								
								// </ArticleCard>
								<div key={i} className="w-full md:w-1/2 lg:w-1/3">
									<ArticleCard  {...node}>
									
									</ArticleCard>
								</div>
								
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