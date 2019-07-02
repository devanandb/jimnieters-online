import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import Image from "gatsby-image"


const ArticleCard = (article) => (
	<div className="w-1/3  mb-8">
		<Link to={`/content/${article.slug}`} className="group block border-gray-400 mr-12 mb-10">
			{/* {JSON.stringify(article)} */}
			
			<Image
				fluid={article.image.childImageSharp.fluid}
				alt={article.title}
				className="w-full object-cover h-48 tra shadow-lg rounded-lg hover:shadow-xl border-2 border-gray-200 mr-4"
			/>
			<div className="w-full mt-4">
				<div className={`uppercase tracking-wider text-lg font-semibold ${ article.category_id === 1 ? 'text-purple-600' : 'text-orange-700' }`}>{ article.category_id === 1 ? 'Leader' : 'Design'}</div>
				<h3 className="font-medium text-xl hover:text-blue-700">{article.title}</h3>
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
