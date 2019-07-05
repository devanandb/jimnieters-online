import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import Image from "gatsby-image"


const Card = ({article, align}) => (
	<Link to={`/${article.category}/${article.slug}`} className="block">
		<div className="mt-4 ml-2 mr-0 mb-10">
			<Image
				fluid={article.image.childImageSharp.fluid}
				alt={article.title}
				className="h-48 w-full object-cover rounded-lg shadow-md hover:shadown-xl"
			/>
			<div className="py-4">
				<div className="font-medium font-sans text-xl text-blue-700 dark:text-blue-300 leading-relaxed tracking-normal mb-2">
					{article.title}
				</div>
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
