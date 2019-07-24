module.exports = {
  siteMetadata: {
    title: `Jim Nieters - Work`,
    description: `I am a ux leader who loves to inspire and be inspired by design. Great design disrupts markets and delights users.`,
    image: '/images/jimbg.png',
    author: `Devanand`,
    siteUrl: 'https://jimnieters.online',
    twitterUsername: 'jimnieters'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./data/`,
      },
    },
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-crisp-chat',
      options: {
        websiteId: 'f0bcff04-529b-42c4-bf62-80edfea7b989',
        enableDuringDevelop: true, // Optional. Disables Crisp Chat during gatsby develop. Defaults to true.
        defer: true, // Optional. Sets the Crisp loading script to defer instead of async. Defaults to false.
        enableImprovedAccessibility: false // Optional. Sets aria-label attribute on pop-up icon for screen readers. Defaults to true.
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Shadows Into Light`,
            subsets: [`latin`],
          },
          {
            family: `Roboto`,
            variants: [`300`, `400`, `500`, `700`]
          },
          {
            family: `PT Serif`,
            variants: [`400`]
          },
          {
            family: 'Lato',
            variants: [`700i`, `900i`]
          }
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `jimnieters`,
        short_name: `jimnieters`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/jimfavicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/images/jimfavicon.png",
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          yandex: false,
          windows: true
        }
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        // Exclude specific pages or groups of pages using glob parameters
        // See: https://github.com/isaacs/minimatch
        // The example below will exclude the single `path/to/page` and all routes beginning with `category`
        exclude: ["/dev-404-page/", `/success/`],
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
            allSitePage {
              edges {
                node {
                  path
                }
              }
            }
        }`,
        serialize: ({ site, allSitePage }) =>
          allSitePage.edges.map(edge => {
            return {
              url: site.siteMetadata.siteUrl + edge.node.path,
              changefreq: `daily`,
              priority: 0.7,
            }
          })
      }
    },
    {
      resolve: 'gatsby-plugin-use-dark-mode',
      options: {
        classNameDark: 'mode-dark',
        classNameLight: 'mode-light',
        storageKey: 'darkMode',
        minify: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-106389519-3",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: false,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "jimnieters.online",
      },
    },
    'gatsby-plugin-netlify-cache',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    // `gatsby-plugin-remove-serviceworker`,
  ],
}
