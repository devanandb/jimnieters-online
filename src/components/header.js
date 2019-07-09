import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import DarkModeToggle from './DarkModeToggle';


const Header = ({ siteTitle }) => (
	<header className="bg-gray-200 dark:bg-gray-900 border-b-2 border-gray-300 dark:border-gray-600 absolute w-full z-10 sticky top-0">
		<div className="container mx-auto py-4 flex items-center px-4 justify-between flex-wrap">
			<div className="w-full py-5 md:py-0 md:w-1/4 text-center md:text-left">
				<Link
					to="/"
					className="text-gray-900 dark:text-gray-100 text-xl md:text-2xl lg:text-3xl font-400 font-serif"
				>
					{siteTitle}
				</Link>
				
			</div>
			<div className="w-full md:w-3/4 text-right">
				<ul className="flex justify-center md:justify-end">
					{/* <li className="text-lg font-medium text-gray-700 dark:text-gray-200 tracking-wider uppercase hover:text-blue-800">
						<Link 
							to="/leader"
							className="px-5 py-5"
							activeClassName="font-bold dark:text-blue-500"
							partiallyActive={true}
						>Leader</Link>
					</li>
					<li className="text-lg font-medium text-gray-700 dark:text-gray-200 tracking-wider uppercase hover:text-blue-800">
						<Link 
							to="/designer"
							className="px-5 py-5"
							activeClassName="font-bold dark:text-blue-500"
							partiallyActive={true}
						>Designer</Link>
					</li> */}
					<li className="text-lg font-medium text-gray-700 dark:text-gray-200 tracking-wider uppercase hover:text-blue-800">
						<Link 
							to="/case-studies"
							className="px-5 py-5"
							activeClassName="font-bold dark:text-blue-500"
							partiallyActive={true}
						>Case Studies</Link>
					</li>
					<li className="text-lg font-medium text-gray-700  dark:text-gray-200 tracking-wider uppercase hover:text-blue-800">
						<Link 
							to="/about"
							className="px-5 py-5"
							activeClassName="font-bold dark:text-blue-500"
							partiallyActive={true}
						>About</Link>
					</li>
					<li className="ml-5 text-lg font-medium text-gray-700 tracking-wider uppercase hover:text-blue-800">
						<div className="" title="Toggle Dark mode"><DarkModeToggle /></div>
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
