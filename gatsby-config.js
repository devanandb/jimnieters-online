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
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Shadows Into Light`,
            subsets: [`latin`],
          },
          {
            family: `Barlow`,
            variants: [`400`, `500`, `700`]
          },
          {
            family: `PT Serif`,
            variants: [`400`]
          },
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
      resolve: 'gatsby-plugin-use-dark-mode',
      options: {
        classNameDark: 'mode-dark',
        classNameLight: 'mode-light',
        storageKey: 'darkMode',
        minify: true,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    // `gatsby-plugin-remove-serviceworker`,
  ],
}
