import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const HeaderMinimal = ({ siteTitle }) => (
	<header className=" bg-transparent border-gray-300 absolute w-full z-10 top-0">
		<div className="container mx-auto py-4 flex items-center justify-between flex-wrap">
			<div className="w-1/4">
				<Link
					to="/"
					className="grey-900 text-3xl font-400 font-serif"
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

HeaderMinimal.propTypes = {
	siteTitle: PropTypes.string,
}

HeaderMinimal.defaultProps = {
	siteTitle: ``,
}

export default HeaderMinimal
