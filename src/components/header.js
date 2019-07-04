import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
	<header className="bg-gray-200 border-b-2 border-gray-300 absolute w-full z-10 sticky top-0">
		<div className="container mx-auto py-4 flex items-center px-4 justify-between flex-wrap">
			<div className="w-full md:w-1/4 text-center mb-3 md:text-left">
				<Link
					to="/"
					className="grey-900 text-xl md:text-2xl lg:text-3xl font-400 font-serif"
				>
					{siteTitle}
				</Link>
				
			</div>
			<div className="w-full md:w-3/4 text-right">
				<ul className="flex justify-center md:justify-end">
					<li className="text-lg font-medium text-gray-700 tracking-wider uppercase hover:text-blue-800">
						<Link 
							to="/leader"
							className="px-5 py-5"
							activeClassName="font-bold"
							partiallyActive={true}
						>Leader</Link>
					</li>
					<li className="text-lg font-medium text-gray-700 tracking-wider uppercase hover:text-blue-800">
						<Link 
							to="/designer"
							className="px-5 py-5"
							activeClassName="font-bold"
							partiallyActive={true}
						>Designer</Link>
					</li>
					<li className="text-lg font-medium text-gray-700 tracking-wider uppercase hover:text-blue-800">
						<Link 
							to="/about"
							className="px-5 py-5"
							activeClassName="font-bold"
							partiallyActive={true}
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
