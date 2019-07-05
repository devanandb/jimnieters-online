/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

import "../css/style.css"

const Layout = ({ children }) => {
	// const data = useStaticQuery(graphql`
	// 	query SiteTitleQuery {
	// 		site {
	// 			siteMetadata {
	// 				title
	// 			}
	// 		}
	// 	}
	// `)

	return (
		<>
			
			<div className="font-sans">
				<main>{children}</main>
			</div>
			<footer className="bg-gray-300 dark:bg-gray-900">
				<div className="container mx-auto py-10 px-5 font-sans text-center dark:text-gray-300">
					© {new Date().getFullYear()}, Jim Nieters Portfolio
					{` `}
					{/* <a className="float-right" href="https://www.linkedin.com/in/jimnieters/en">Contact Me</a> */}
				</div>
			</footer>
		</>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
