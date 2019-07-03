import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
	<header className="bg-gray-200 border-b-2 border-gray-300 absolute w-full z-10 sticky top-0">
		<div className="container mx-auto py-4 flex items-center px-4 justify-between flex-wrap">
			<div className="w-1/4">
				<Link
					to="/"
					className="grey-900 hidden md:block text-xl md:text-2xl lg:text-3xl font-400 font-serif"
				>
					{siteTitle}
				</Link>
				<Link
					to=""
					className="md:hidden">
						<img width="40" className="" src="data:image/png;base64,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"></img>
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
