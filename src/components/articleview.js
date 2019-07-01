import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "gatsby-image"


const ArticleView = (article) => (
	<div className={`${article.order%2 ? 'bg-gray-200' : ''}`}>
		<div className="container mx-auto mt-6 mb-10 px-5 py-12">
			<Link to={`/content/${article.slug}`} className="hover:text-blue-700">
				<h3 className="font-medium text-3xl">{article.title}</h3>
			</Link>
			<div className="text-gray-600 w-3/4 text-xl mt-3 mb-4" dangerouslySetInnerHTML={{ __html: article.summary }}></div>
			{/* {JSON.stringify(index)} */}
			<div className={`flex mt-5 ${article.order%2 ? 'flex-row-reverse ' : ''}`}>
				<div className={`w-1/2 content ${article.order%2 ? 'ml-8' : 'mr-8'}`}>
					<div className="text-gray-700 text-lg rounded-lg border-red-200 p-4 pl-5 shadow-md bg-white mb-5 content">
						<div className="text-red-600 -m-t-1 mb-1 uppercase font-bold tracking-wider text-sm">Problem</div>
						<div  dangerouslySetInnerHTML={{ __html: article.case_study.problem }}></div>
					</div>

					<div className="text-gray-700 text-lg rounded-lg border-red-200 p-4 pl-5 shadow-md bg-white mb-5 content">
						<div className="text-orange-500 -m-t-1 mb-1 uppercase font-bold tracking-wider text-sm">Solution</div>
						<div  dangerouslySetInnerHTML={{ __html: article.case_study.solution }}></div>
					</div>

					<div className="text-gray-700 text-lg rounded-lg border-red-200 p-4 pl-5 shadow-md bg-white mb-5 content">
						<div className="text-green-500 -m-t-1 mb-1 uppercase font-bold tracking-wider text-sm">Impact</div>
						<div  dangerouslySetInnerHTML={{ __html: article.case_study.impact }}></div>
					</div>
					{/* <div className="text-gray-600 text-lg rounded-r-lg border-l-4 border-red-200 p-3 bg-red-100 mt-3 content" dangerouslySetInnerHTML={{ __html: article.case_study.problem }}></div>
					<div className="text-gray-600 text-lg rounded-r-lg border-l-4 border-orange-200 p-3 bg-orange-100 mt-3 content" dangerouslySetInnerHTML={{ __html: article.case_study.solution }}></div>
					<div className="text-gray-600 text-lg rounded-r-lg border-l-4 border-green-200 p-3 bg-green-100 mt-3 content" dangerouslySetInnerHTML={{ __html: article.case_study.impact }}></div> */}
				</div>
				<div className="w-1/2">
					<Image
						fluid={article.image.childImageSharp.fluid}
						alt={article.title}
						className="object-cover h-auto rounded-lg shadow-lg"
					/>
					<div className="text-center mt-5 text-gray-800 text-xl">
						{ article.case_study.images[0].title ? article.case_study.images[0].title : "Image will have a caption here" }
					</div>
					<div className="mb-10 mt-12">
						{article.case_study.points.map((point, i) => (
							<div className="border-l-4 border-green-500 pl-4" key={i}>
								<div className="uppercase font-semibold mb-2 tracking-wider text-gray-600">{point.name}</div>
								<div className="text-base "  dangerouslySetInnerHTML={{ __html: point.value }}></div>
							</div>
						))}
					</div>
				</div>
			</div>

			<div className="mt-8 text-center">
				{/* <a href="mailto:jnieters@mac.com" className="bg-purple-600 inline-block cursor-pointer rounded hover:bg-purple-700 text-white font-normal tracking-wide py-3 px-6 text-xl shadow-xl">
							Get In Touch
							</a> */}
				<Link to={`/content/${article.slug}`} className="font-medium text-xl text-purple-700 uppercase border-b-2 hover:border-purple-600">Read full case study <span className="text-2xl">»</span>
				</Link>
			</div>
		</div>
	</div>
)

// ArticleView.propTypes = {
// 	siteTitle: PropTypes.object,
// }

// ArticleView.defaultProps = {
// 	siteTitle: ``,
// }

export default ArticleView
