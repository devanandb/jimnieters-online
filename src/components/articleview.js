import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import Image from "gatsby-image"


const ArticleView = (article) => (
	<div id={`${article.slug}`} className={`border-t-2 dark:border-gray-600 ${article.order%2 ? 'dark:bg-gray-900 ' : 'dark:bg-gray-900'}`}>
		{/* {JSON.stringify(article.tags)} */}
		<div className="container mx-auto px-5 pb-10">
			{/* <Link to="/" className="text-xl text-blue-700 font-medium">← Back</Link> */}
			<div className="pt-10 block text-xl font-medium  color-sp uppercase">{article.category}</div>
			<Link to={`/case-study/${article.slug}/detail`}><h1 className="title font-medium text-3xl sm:text-2xl md:text-3xl lg:text-4xl font-content dark:text-gray-200">{article.title}</h1></Link>
			<div className="">{article.tagline}</div>
			<div className="text-gray-900 font-light w-full text-base lg:text-xl mt-3 mb-8  dark:text-gray-400 " dangerouslySetInnerHTML={{ __html: article.summary }}></div>
			{/* {JSON.stringify(index)} */}
			<div className="flex justify-start">
				<div className="w-3/4 mx-auto">
					<Image
						fluid={article.image.childImageSharp.fluid}
						alt={article.title}
						className="object-cover h-auto rounded-lg shadow-lg"
					/>
					<div className="text-center italic font-light font-content mt-4 mb-10 text-gray-800 text-sm md:text-xl dark:text-gray-400">
						{ article.case_study.images[0].title ? article.case_study.images[0].title : "Image will have a caption here" }
					</div>
				</div>
			</div>
			<div className={`content summary flex`}>
				{
					Object.keys({'problem':'', 'solution':'', 'impact':''}).map((key,i)=>{
						let item = article.case_study[key];
						return (
							// <div key={i} className="text-gray-700 text-lg dark:bg-gray-900 mb-10 content summary flex">
							// 	<div className="bg-white font-bold font-title italic border-1  justify-end pr-6 point border-r-4 dark:bg-gray-700 dark:text-gray-300 color-sp w-1/5 text-right flex items-center">
							// 		<div>
							// 		<div className="text-right font-bold text-4xl">
							// 			0{i+1}
							// 		</div>
							// 		<div className="color-sp font-title font-bold capitalize dark:text-gray-300 text-3xl md:text-2xl">{key}</div>
							// 		</div>
							// 	</div>
							// 	<div className="text-base md:text-xl font-light pl-2 pt-2 text-gray-900 dark:text-gray-400 w-4/5"  dangerouslySetInnerHTML={{ __html: item }}></div>
							// </div>
							<div key={i} className="w-1/3 mx-3 flex">
								<div className="flex color-sp align-top">
									<div className="text-center font-medium font-content text-6xl">
										{i+1}
									</div>
								</div>
								<div className="mt-4">
									<div className="text-2xl color-sp capitalize font-content font-black">&nbsp;{key}</div>
									<div className="text-base md:text-xl font-light pt-2 text-gray-900 dark:text-gray-400"  dangerouslySetInnerHTML={{ __html: item }}></div>
								</div>
							</div>
						)
					})
				}
			</div>
			<div className="mt-16 flex justify-center flex-wrap">
				{article.tags.map((tag, i)=> (
					<div key={i} className="bg-indigo-100 text-gray-700 mr-5 mb-5 px-3 py-1 rounded-full">{tag.name}</div>
				))}
			</div>
			<div className="my-16 justify-center flex">
				{/* <a href="mailto:jnieters@mac.com" className="bg-purple-600 inline-block cursor-pointer rounded hover:bg-purple-700 text-white font-normal tracking-wide py-3 px-6 text-xl shadow-xl">
							Get In Touch
							</a> */}
				<Link to={`/case-study/${article.slug}/detail`} className="button  hover:shadow-xl hover:bg-black">
					<span>Read Full Case Study →</span>
				</Link>

				<Link to={`/contact`} className="ml-10 mt-2 color-sp capitalize font-medium text-lg dark:text-gray-300">
					<span>Or Ask to Chat ↗</span>
				</Link>
			</div>
			{/* <hr className="border-b-2 mx-24"/> */}
			
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
