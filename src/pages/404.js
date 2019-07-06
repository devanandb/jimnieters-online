import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"


const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Header siteTitle="Jim Nieters - Work" />
    <div className="h-full hero-container -mt-20 bg-cover flex items-center" style={{height: 'calc(100vh - 103px)'}}>
      <div className="container mx-auto px-5">

        <h1 className="text-white dark:text-black text-5xl font-medium"><span className="font-black text-6xl block">404</span>NOT FOUND</h1>
        <p className="text-4xl text-gray-200 w-full md:w-1/2 dark:text-black">You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>
    </div>
    
  </Layout>
)

export default NotFoundPage
