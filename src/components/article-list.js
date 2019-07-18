import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import Image from "gatsby-image"


const ArticleList = (article) => (
	<div id={`${article.slug}`} className={`mb-4 shadow-sm dark:border-gray-600 group bg-white hover:bg-blue-500 dark:bg-gray-900`}>
		{/* {JSON.stringify(article)} */}
		<div className="w-full p-16 px-20 pb-20 group ">
			{/* <Link to="/" className="text-xl text-blue-700 font-medium">← Back</Link> */}
			<div className={`pt-10 block text-sm font-medium text-${article.category} uppercase`}>{article.category}</div>
			<Link to={`/case-study/${article.slug}`}>
				<h1 className={`title mt-1 font-medium text-3xl sm:text-2xl md:text-3xl lg:text-3xl text-${article.category} dark:text-gray-200 tracking-wide group-hover:text-white`}>{article.title}</h1></Link>
			<div className="text-gray-600 text-xl font-normal mt-1 mb-4">{article.tagline}</div>
			<div className="text-gray-900 hidden font-content font-light w-full text-base lg:text-xl mt-1 mb-8  dark:text-gray-400 " dangerouslySetInnerHTML={{ __html: article.summary }}></div>
			{/* {JSON.stringify(index)} */}
			
		</div>
		<div className="flex hidden justify-start">
			<div className="w-3/4">
				<Image
					fluid={article.image.childImageSharp.fluid}
					alt={article.title}
					className="object-cover h-auto rounded-lg shadow-lg"
				/>
				<div className="italic font-light font-content mt-4 mb-10 text-gray-800 text-sm md:text-xl dark:text-gray-400">
					{ article.case_study.images[0].title ? article.case_study.images[0].title : "Image will have a caption here" }
				</div>
			</div>
		</div>
		<div className={`content hidden summary flex flex-col lg:flex-row`}>
			{
				Object.keys({'problem':'', 'solution':'', 'impact':''}).map((key,i)=>{
					let item = article.case_study[key];
					return (
						<div key={i} className="w-full mr-6 flex mb-5">
							<div className={`flex text-${article.category} align-top`}>
								<div className="text-center font-light font-content text-6xl">
									{i+1}
								</div>
							</div>
							<div className="mt-4">
								<div className={`text-2xl color-sp capitalize font-sans font-normal text-${article.category}`}>&nbsp;{key}</div>
								<div className="text-base md:text-xl font-content font-normal pt-2 text-gray-800 dark:text-gray-400"  dangerouslySetInnerHTML={{ __html: item }}></div>
							</div>
						</div>
					)
				})
			}
		</div>
		<div className="mt-16 flex hidden justify-center flex-wrap">
			{article.tags.map((tag, i)=> (
				<div key={i} className="bg-indigo-100 text-gray-700 mr-5 mb-5 px-3 py-1 rounded-full">{tag.name}</div>
			))}
		</div>
		<div className="my-16 hidden justify-center flex">
			{/* <a href="mailto:jnieters@mac.com" className="bg-purple-600 inline-block cursor-pointer rounded hover:bg-purple-700 text-white font-normal tracking-wide py-3 px-6 text-xl shadow-xl">
						Get In Touch
						</a> */}
			<Link to={`/case-study/${article.slug}/detail`} className="button  hover:shadow-xl hover:bg-black">
				<span>Read Full Case Study →</span>
			</Link>

			<Link to={`/contact`} className="ml-10 mt-2 color-sp capitalize font-medium text-lg dark:text-gray-300">
				Or Ask to Chat ↗
			</Link>
		</div>
	</div>
)

// ArticleList.propTypes = {
// 	siteTitle: PropTypes.object,
// }

// ArticleList.defaultProps = {
// 	siteTitle: ``,
// }

export default ArticleList
