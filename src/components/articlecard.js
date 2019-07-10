import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import Image from "gatsby-image"


const ArticleCard = (article) => (
	<div className="w-full md:w-1/2 lg:w-1/3  mb-8">
		<Link to={`/case-studies#${article.slug}`} className="group block border-gray-400 dark:border-gray-800 mx-4 mb-10">
			{/* {JSON.stringify(article)} */}
			
			<Image
				fluid={article.image.childImageSharp.fluid}
				alt={article.title}
				className="w-full object-cover h-48 tra shadow-lg rounded-lg hover:shadow-xl border-2 border-gray-200 dark:border-gray-800 mr-4"
			/>
			<div className="w-full mt-4">
				<div className={`uppercase tracking-wider text-lg font-semibold ${ article.category === 'designer' ? 'text-purple-600 dark:text-purple-400' : 'text-orange-700 dark:text-orange-400' }`}>{article.category}</div>
				<h3 className="font-medium text-xl hover:text-blue-700 dark:text-gray-200 dark-hover: text-blue-700">{article.title}</h3>
				<p className="dark:text-gray-300">{article.tagline}</p>
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
