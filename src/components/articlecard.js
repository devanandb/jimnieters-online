import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import Image from "gatsby-image"


const ArticleCard = (article) => (
	<div className="w-full mb-8">
		<Link to={`/case-study/${article.frontmatter.slug}`} className="group group-hover:bg-black block border-gray-400 dark:border-gray-800 mx-6 mb-10">
			{/* {JSON.stringify(article)} */}
			<div className="relative h-48">
				<Image
					fluid={article.frontmatter.image.childImageSharp.fluid}
					alt={article.frontmatter.title}
					className="w-full object-cover h-48 tra shadow-lg rounded-lg hover:shadow-xl border-2 border-gray-200 dark:border-gray-800 mr-4"
				/>
				<div className={`uppercase tracking-wider text-sm font-semibold absolute text-white top-0 mt-8 pl-4 py-1 rounded-r pr-4 shadow-lg bg-${ article.frontmatter.category}`}>{article.frontmatter.category}</div>
			</div>
			<div className="w-full mt-4">
				{/* <div className={`uppercase tracking-wider text-sm font-semibold text-white top-0 -mb-1 py-1 text-${ article.category}`}>{article.category}</div> */}
				<h3 className={`tracking-wide font-normal font-title text-${article.frontmatter.category} text-xl hover:text-blue-700 dark:text-gray-200 dark-hover:text-blue-700`}>{article.frontmatter.title}</h3>
				<p className="text-gray-700 dark:text-gray-200 text-lg">{article.frontmatter.tagline}</p>
				{/* {article.tags.map((tag, i) => (
					<div className="inline-block bg-gray-300 px-2 text-sm rounded-lg mr-3 mb-3" key={i}>{tag.name}</div>
				))} */}
				{/* <div className="text-gray-600" dangerouslySetInnerHTML={{ __html: article.summary }}></div> */}
			</div>
		</Link>
	</div>
)

// ArticleCard.propTypes = {
// 	siteTitle: PropTypes.object,
// }

// ArticleCard.defaultProps = {
// 	siteTitle: ``,
// }

export default ArticleCard
