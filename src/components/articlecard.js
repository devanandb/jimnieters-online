import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "gatsby-image"


const ArticleCard = (article) => (
	<div className="w-1/2">
		<Link to={`/content/${article.slug}`} className="group bg-white border-1 block border-gray-400 rounded-lg mr-8 mb-10 shadow-lg hover:shadow-xl">
			{/* {JSON.stringify(article)} */}
			<Image
				fluid={article.image.childImageSharp.fluid}
				alt={article.title}
				className="w-full p-4 object-cover h-56 rounded-t-lg"
			/>
			<div className="p-5 bg-gray-100 rounded-b-lg">
				<h3 className="font-medium text-xl">{article.title}</h3>
				<div className="text-gray-600" dangerouslySetInnerHTML={{ __html: article.summary }}></div>
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
