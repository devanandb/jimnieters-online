import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
	<header className="bg-white border-b-2 border-gray-300">
		<div className="container mx-auto px-5 py-4 flex items-center justify-between flex-wrap">
			<div className="w-1/4">
				<Link
					to="/"
					className="grey-900 text-4xl font-400 font-serif"
				>
					{siteTitle}
				</Link>
			</div>
			<div className="">
				<ul className="flex">
					<li className="ml-10 text-xl hover:text-blue-800">
						<Link 
							to=""
							className=""
						>Design</Link>
					</li>
					<li className="ml-10 text-xl hover:text-blue-800">
						<Link 
							to=""
							className=""
						>Leadership</Link>
					</li>
					<li className="ml-10 text-xl hover:text-blue-800">
						<Link 
							to=""
							className=""
						>About</Link>
					</li>
				</ul>
			</div>
		</div>
	</header>
)

Header.propTypes = {
	siteTitle: PropTypes.string,
}

Header.defaultProps = {
	siteTitle: ``,
}

export default Header
