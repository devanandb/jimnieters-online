import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import Image from "gatsby-image"


const Card = ({article, mode}) => (
	<Link to={ mode === 'summary' ? `/case-study/${article.slug}` : `/case-study/${article.slug}/detail`} className="block">
		<div className="mt-4 ml-2 mr-0 mb-10">
			<Image
				fluid={article.image.childImageSharp.fluid}
				alt={article.title}
				className="h-48 w-full object-cover rounded-lg shadow-md hover:shadown-xl"
			/>
			<div className="py-4">
				<div className={`font-medium font-title text-xl text-${article.category} leading-relaxed tracking-normal mb-2`}>
					{article.title}
				</div>
				<div className="text-gray-600 dark:text-gray-400 -mt-2 text-lg leading-normal">{article.tagline}</div>
			</div>
		</div>
	</Link>
)

// Card.propTypes = {
// 	siteTitle: PropTypes.object,
// }

// Card.defaultProps = {
// 	siteTitle: ``,
// }

export default Card
