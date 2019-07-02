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
					<li className="ml-10 text-lg font-medium text-gray-700 tracking-wider uppercase hover:text-blue-800">
						<Link 
							to="/leader"
							className=""
							activeClassName="font-bold"
						>Leader</Link>
					</li>
					<li className="ml-10 text-lg font-medium text-gray-700 tracking-wider uppercase hover:text-blue-800">
						<Link 
							to="/designer"
							className=""
							activeClassName="font-bold"
						>Designer</Link>
					</li>
					<li className="ml-10 text-lg font-medium text-gray-700 tracking-wider uppercase hover:text-blue-800">
						<Link 
							to="/about"
							className=""
							activeClassName="font-bold"
						>About</Link>
					</li>
					{/* <li className="ml-10 text-lg font-medium text-gray-700 tracking-wider uppercase hover:text-blue-800">
						<Link 
							to="/contact"
							className=""
						>Contact</Link>
					</li> */}
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
