import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import Image from "gatsby-image"


const ArticleView = (article) => (
	<div className={`${article.order%2 ? 'bg-gray-200' : ''}`}>
		<div className="container mx-auto mt-10 px-5 py-12">
			<Link to={`/content/${article.slug}`} className="hover:text-blue-700">
				<h3 className="font-medium text-2xl sm:text-2xl md:text-3xl">{article.title}</h3>
			</Link>
			<div className="text-gray-600 w-full xl:w-3/4 text-base lg:text-xl mt-3 mb-8" dangerouslySetInnerHTML={{ __html: article.summary }}></div>
			{/* {JSON.stringify(index)} */}
			<div className={`md:flex mt-5 ${article.order%2 ? '' : 'md:flex-row-reverse '}`}>
				<div className="w-full md:w-1/2">
					<Image
						fluid={article.image.childImageSharp.fluid}
						alt={article.title}
						className="object-cover h-auto rounded-lg shadow-lg"
					/>
					<div className="text-center mt-5 text-gray-800 text-sm md:text-xl">
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
				<div className={`w-full md:w-1/2 content ${article.order%2 ? 'md:ml-8' : 'md:mr-8'}`}>
					<div className="text-gray-700 text-lg rounded-lg border-red-200 p-4 pl-5 shadow-md bg-white mb-8 content">
						<div className="bg-white rounded-full border-black inline-block w-12 h-12  border-1 shadow-md flex items-center -ml-8 -mt-8"><div className="text-center w-full font-medium text-2xl">1</div></div>
						<div className="color-primary italic -mt-6 ml-6 mb-1 font-semibold tracking-wider text-base md:text-xl">Problem</div>
						<div className="text-base md:text-xl"  dangerouslySetInnerHTML={{ __html: article.case_study.problem }}></div>
					</div>

					<div className="text-gray-700 text-lg rounded-lg border-red-200 p-4 pl-5 shadow-md bg-white mb-8 content">
						<div className="bg-white rounded-full border-black inline-block w-12 h-12  border-1 shadow-md flex items-center -ml-8 -mt-8"><div className="text-center w-full text-2xl">2</div></div>
						<div className="color-primary italic -mt-6 ml-6 mb-1 font-semibold tracking-wider text-base md:text-xl">Solution</div>
						<div className="text-base md:text-xl"  dangerouslySetInnerHTML={{ __html: article.case_study.solution }}></div>
					</div>

					<div className="text-gray-700 text-lg rounded-lg border-red-200 p-4 pl-5 shadow-md bg-white mb-5 content">
						<div className="bg-white rounded-full border-black inline-block w-12 h-12  border-1 shadow-md flex items-center -ml-8 -mt-8"><div className="text-center w-full text-2xl">3</div></div>
						<div className="color-primary italic -mt-6 ml-6 mb-1 font-semibold tracking-wider text-base md:text-xl">Impact</div>
						<div className="text-base md:text-xl"  dangerouslySetInnerHTML={{ __html: article.case_study.impact }}></div>
					</div>
					{/* <div className="text-gray-600 text-lg rounded-r-lg border-l-4 border-red-200 p-3 bg-red-100 mt-3 content" dangerouslySetInnerHTML={{ __html: article.case_study.problem }}></div>
					<div className="text-gray-600 text-lg rounded-r-lg border-l-4 border-orange-200 p-3 bg-orange-100 mt-3 content" dangerouslySetInnerHTML={{ __html: article.case_study.solution }}></div>
					<div className="text-gray-600 text-lg rounded-r-lg border-l-4 border-green-200 p-3 bg-green-100 mt-3 content" dangerouslySetInnerHTML={{ __html: article.case_study.impact }}></div> */}
				</div>
				
			</div>

			<div className="mt-8 justify-center flex">
				{/* <a href="mailto:jnieters@mac.com" className="bg-purple-600 inline-block cursor-pointer rounded hover:bg-purple-700 text-white font-normal tracking-wide py-3 px-6 text-xl shadow-xl">
							Get In Touch
							</a> */}
				<Link to={`/content/${article.slug}`} className="font-medium text-xl text-purple-700 flex items-center hover:underline">
					<img alt="Read Icon" className="hidden md:block md:w-10" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAVQSURBVHhe7Zpdb1RVFIbnyj+gMRGMpIVOWzL02wItJQXUklo0+InaaaVASxtiYkwLhURiiUENQkQJEBESKgQE0kLFQtsZaqn+AOOtF4qgcgl4USXrda8z60zK7D2TSeecfSKZJ3nCedfenP2m0zPpJBPKkydPnjx5vGd+DzXP30a/P7kNMOms9dBa2f7wsaCbbizoATL5VA/9Jtv//yzsQmPBVooXdtPfhd2A68D3ZmfvmbNb6R6fWdBN66RGMBR1UX+4CzB5IG7WtDc3aY/UsUtpFzWXdhKVdNKM+re3uIPmOfNOgP1q3Ky77txkjvBZJZ3YkTgbKNlMLbJkj8gWikW2ABFVREYOzkz5zRWz7rpszwk+27nfZorLyH8qNlFzeQfFyjbR/fJNQNUWekKWHHjGXrls1l2X7TlRqX4TEvejOzLyl+qNtKu6g6i6A3CVpSTu/IdLwIVTQNfuhHzNs3T/b654fb+01LbRqtq3gdp2+kfZ61wrZTmJOz/8GbBCvTpu5mueuVm254zX90vL8nZMKrG8nd6TrK71g5e30R/ummMbnXCcPWunG7I9Z9x7SvSPFVG61xAF1kTpUc58zTqLs1D7Whpa6deGKN2sb6U2GYf4Wq3dUv65MkrNMs6ZdD08p7EVYCVqOSis9Vjzlnr1lRK1HBTWejz3BsBK1HJQWOvRvAFgJWo5KKz1WPcawErUclBY67H+VYCVqGUTu3/GI33X6RPlzb5pwFFd907TXl6TbaFPrwGZlG1GsunhCS+/ArAStWxiYIr2Dkypj8FGaa9sC018C2RSthnJpocnvP4SwErUsol9cbrFr+C+GNXJKLQ/TvWJV5ZuyignsunhCW+uB1iJWjZxZAJgJSZJN58L2fTwhOiLACtRyya+HgNYiUlS5/vVb0QmZZuRbHp4wsYXAFailk0MjwKZlG2huHrOMynbjGTTwxM2twCsRC2bGFflMynbciKbHp6w9XmAlahlEz+qz/+sxCTp5nMhmx6e0NMMsBK1bOKnIYCVmCR1fkA955mUbUay6eEJ76wFWIlaNvHLeYCVmCR1PjUCZFK2Gcmmhye82wSwErUcFNZ69D4LsBK1HBTWeux4BmAlatnEx5OAF8rtjGTTwxN2rQZYiVo2Ma3e6b1Qbmckmx6e8P4qgJWo5aCw1uODRoCVqOWgsNbjw5UAK1HLQWGtx0cNACtRy0Fhrce+evW5XilRy0FhrceBOvVnqVKiloPg8zqaZ63HwWUAK1HLQXBwGe201uPQUoCVqGWb8Ct/qJb6v1hKM9Z6HK0FWInJfHgpGo8+TZeP1NJtdxaEUss/jtUArMRkDsIva+j2sRq6ooy6M6nlHyeqAVZiMh+vppkTVdR7rDLxHSGbHK+inam9fGOwEmAlJvNgxYPfEbLBafXDPllB/ScraSa1l2+crgDYU2XUdLqcxt08WPXgd4TcuW3leP84Ww6YvJDyAzDt8doz5fTX2TK6fKaMNki+K8f7x/klAHsuQv8qt59bQmPOLGL/EXBRHXYmOtCEjPxjOAKwQ5HEd4QuLqbV6pqGIzRzMUL9w8X23gT5LOdMdTZ3GFpCDbLkHyOLAfZSGI/JSM1ouzsPwkuLiUZKqU/q+Mt3JXRvtBQYLXnwmR8tRqOaxdT6XWfdinRfnTc+WkxNUsN/xsIUHysGxsPBPfNXw9THHa4WW3jmU5lYROtiYSBWRDPK/jGLz/zVQnpcndkbC9P9iTBR3OYrP5vJRbRnsggIymtFRKqDnWc+HVMF1DJVSHHlnesLASsW0t2phTQ+XWDh3T5Pnjx58jz0hEL/ASRaa/sTxGIgAAAAAElFTkSuQmCC"></img>
					<span>Read Full Case Study</span>
				</Link>

				<Link to={`/contact`} className="font-medium text-xl text-blue-700 flex items-center ml-10">
					<img alt="Chat Icon" className="hidden md:block w-10" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAATsSURBVHhe7ZpvSF11GMcPQYPofaFMmM111Tl1V1PyT2qLRZu6f25tpXMrNE0HvSjcWiptpSL9gUVj0lYbzJjNUPqztmlK2oioV9XLKAZp0IugzTdCPN9+z/E5dc699/zuut5z7+VyPvDl3O/zfX6/52EwPezO8PHx8fHx8fHxiZGMbuzMOEKzmd20lHkESIrUbHOHLmqUtRLD2udpIKsLSCWpnV6T9bxlXQc1ZncC6zppWX1+KauLMiVKODxb7dDDu/BO2Z3UIJF35HTQbE4HoJ49Uko6ap+j5k7P0YyUvCPQTku57UBuG2VIKekEnqFMc6d2uiUl7yhoA1hiU4aE7VX8LMASmzIkbK+SwwBLbMoQ8175e7Gm/BANl7XSQvkhwEvxjLJWDPFMGe8g0plIknYHukxLRQuGKg8CiVTFQRqU8Q4i9UaStDvQZVpqmmmxphmobqYKKXlG7VNUybPUzAUpxY2Ve2P4A9jyNMAS6zlezYv53q0HAJZYz9HNs7JoknYHukzLticBlljP0c2zsmiSdge6TEvjPoAl1uidpxu98wDrlXn6Wspxq4fOixcx37u7CWCJNUamAbukHLd66Lx4EfO9e/cALLHGlc8Bu6Qct3roPDt71ftB0x4aVlqw+ixxrWk3hrhH2h1YfWLvnAO7AJZY44cJmv9xAmDxZynHrR46z87+nRiycjft3xX5HcLKxd45LTsAlljP0c1raaRFzpp3hL+TtDZQ5crZyO8Qunu1HG4EWGI9Rzcv2i6rOetKWz3AEmv0ztGNvjnA1Fe2n+r2upvc+m310Hl2dBmzmrOudGwHWGKNM+ontl1SDqu7Sdpd7wmdZ0eXMas560r3EwBLrPHJFcAuKYfV3STtrveEzrOjy5jVnHXlhccBlljju0ma/34SYPFnKTvqbnLrt9dD59mxsmiSdge6TMuLWwGWWM/RzbOyaJJ2B7pMS89jAEus5+jmRdtlNWddOf4owBLryrFa2nK8jm5a/WFSGfdIuytWv1gHuoxZzVlX+utosb8O6K9BlZQi0ldLN80+jfrq6FdpjwjPMPtqI7/MWPeIDUOXRzvryolHaPBkDZBInaih12W8AysXG4Yuj3bWlf58rBmsooGBaloYrAa8lDlDzeKZMt6B1Sc2DF0e7WzcGK4CWGJThoTt9VYFwBKbMiRsr1MPAyyxKUPC9jpdRrdPl6v3+2DqfDn6TgVl8k7vliXgy9EzpTQz8hCgdFRKSUft9DLvpJ5fSsk7zgWp/lwpcLaUlt8rpWNnNyfvP0jwbHMHtYu5U5C2S+QtF4J08kIQiE20oJ5DH7n8Kgzl/VLKUmfGzwfpdvhd/+n8ZnpVjiSGi4VUP1pMM0q3RouB/6uLRZH/bc/OaBAlqu/3SOdXpGYX0bR6bpMjqc+lIqocKwLGCvXfD14qpIaxIlqS3qkPk/hXLe6MbwJYYsO4vIm6xgvob+65XEAfjJTgbonSg8mNAEvsv/QbuGtiI73JmXrSRD71SpRefJYPsMSajK2lez7No4/NLI+WlZolSj+u5gIssca1B+i+qwH6xqwH6M8vAqiVKD2ZCtBfUwFg6kFUTedS8HqAfjZ9gH65voHypC19mcmhU7MbAIdy6NvpbLpfWtKbn9RL0Nx6elvpt/n19MdcDr1xrZDuldjHx8fHx8fHx8c7DOMfyRQziY+Ed5AAAAAASUVORK5CYII=" />
					<span>Or Ask to Chat</span>
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
