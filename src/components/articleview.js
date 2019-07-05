import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import Image from "gatsby-image"


const ArticleView = (article) => (
	<div className={`border-b-2 border-gray-300 dark:border-gray-600 ${article.order%2 ? 'bg-gray-200 dark:bg-gray-800 ' : 'bg-gray-100 dark:bg-gray-800'}`}>
		{/* {JSON.stringify(article)} */}
		<div className="container mx-auto px-5 py-12">
			<Link to={`/${article.category}/${article.slug}`} className="hover:text-blue-700">
				<h3 className="font-medium text-2xl sm:text-2xl md:text-3xl dark:text-blue-300">{article.title}</h3>
			</Link>
			<div className="text-gray-600 w-full xl:w-3/4 text-base lg:text-xl mt-3 mb-8  dark:text-gray-400" dangerouslySetInnerHTML={{ __html: article.summary }}></div>
			{/* {JSON.stringify(index)} */}
			<div className={`md:flex mt-5 ${article.order%2 ? '' : 'md:flex-row-reverse '}`}>
				<div className="w-full md:w-1/2">
					<Image
						fluid={article.image.childImageSharp.fluid}
						alt={article.title}
						className="object-cover h-auto rounded-lg shadow-lg"
					/>
					<div className="text-center mt-5 text-gray-800 text-sm md:text-xl dark:text-gray-400">
						{ article.case_study.images[0].title ? article.case_study.images[0].title : "Image will have a caption here" }
					</div>
					<div className="mb-10 mt-12">
						{(() => {
							if (article.case_study.points) {
								return (
									<div>
										{article.case_study.points.map((point, i) => (
											<div className="border-l-4 border-green-500 dark:border-green-400 pl-4 mb-12" key={i}>
												<div className="uppercase font-semibold mb-2 tracking-wider text-gray-600 dark:text-gray-200">{point.name}</div>
												<div className="text-base dark:text-gray-500"  dangerouslySetInnerHTML={{ __html: point.value }}></div>
											</div>
										))}
									</div>
								)
							}
						})()}
					</div>
				</div>
				<div className={`w-full md:w-1/2 content ${article.order%2 ? 'md:ml-8' : 'md:mr-8'}`}>
					<div className="text-gray-700 text-lg rounded-lg border-red-200 p-4 pl-5 shadow-md bg-white dark:bg-gray-900 mb-8 content">
						<div className="bg-white rounded-full border-black inline-block w-12 h-12  border-1 shadow-md flex items-center -ml-8 -mt-8 dark:bg-gray-700 dark:text-gray-300"><div className="text-center w-full font-medium text-2xl ">1</div></div>
						<div className="color-primary italic -mt-6 ml-6 mb-1 font-semibold tracking-wider dark:text-gray-300 text-base md:text-xl">Problem</div>
						<div className="text-base md:text-xl dark:text-gray-400"  dangerouslySetInnerHTML={{ __html: article.case_study.problem }}></div>
					</div>

					<div className="text-gray-700 text-lg rounded-lg border-red-200 p-4 pl-5 shadow-md bg-white dark:bg-gray-900 mb-8 content">
						<div className="bg-white rounded-full border-black inline-block w-12 h-12  border-1 shadow-md flex items-center -ml-8 -mt-8 dark:bg-gray-700 dark:text-gray-300"><div className="text-center w-full text-2xl">2</div></div>
						<div className="color-primary italic -mt-6 ml-6 mb-1 font-semibold tracking-wider text-base md:text-xl dark:text-gray-300">Solution</div>
						<div className="text-base md:text-xl dark:text-gray-400"  dangerouslySetInnerHTML={{ __html: article.case_study.solution }}></div>
					</div>

					<div className="text-gray-700 text-lg rounded-lg border-red-200 p-4 pl-5 shadow-md bg-white dark:bg-gray-900 mb-5 content">
						<div className="bg-white rounded-full border-black inline-block w-12 h-12  border-1 shadow-md flex items-center -ml-8 -mt-8 dark:bg-gray-700 dark:text-gray-300"><div className="text-center w-full text-2xl">3</div></div>
						<div className="color-primary italic -mt-6 ml-6 mb-1 font-semibold tracking-wider text-base md:text-xl dark:text-gray-300">Impact</div>
						<div className="text-base md:text-xl dark:text-gray-400"  dangerouslySetInnerHTML={{ __html: article.case_study.impact }}></div>
					</div>
					{/* <div className="text-gray-600 text-lg rounded-r-lg border-l-4 border-red-200 p-3 bg-red-100 mt-3 content" dangerouslySetInnerHTML={{ __html: article.case_study.problem }}></div>
					<div className="text-gray-600 text-lg rounded-r-lg border-l-4 border-orange-200 p-3 bg-orange-100 mt-3 content" dangerouslySetInnerHTML={{ __html: article.case_study.solution }}></div>
					<div className="text-gray-600 text-lg rounded-r-lg border-l-4 border-green-200 p-3 bg-green-100 mt-3 content" dangerouslySetInnerHTML={{ __html: article.case_study.impact }}></div> */}
				</div>
				
			</div>

			<div className="my-10 justify-center flex">
				{/* <a href="mailto:jnieters@mac.com" className="bg-purple-600 inline-block cursor-pointer rounded hover:bg-purple-700 text-white font-normal tracking-wide py-3 px-6 text-xl shadow-xl">
							Get In Touch
							</a> */}
				<Link to={`/${article.category}/${article.slug}`} className=" text-xl text-gray-700 flex items-center bg-blue-300 dark:bg-blue-500 dark:text-gray-300 px-8 shadow-lg border-2 border-blue-400 py-2 rounded-full">
					
					<span>Read Full Case Study →</span>
				</Link>

				<Link to={`/contact`} className="font-medium text-xl text-blue-700 flex items-center ml-10 px-8 border-2 shadow-lg border-blue-400 dark:border-gray-300 dark:text-gray-300 py-2 rounded-full">
					
					<span>Or Ask to Chat ↗</span>
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
