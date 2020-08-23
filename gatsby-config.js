require(`dotenv`).config();

const autoprefixer = require(`autoprefixer`);
const tailwindCss = require(`tailwindcss`)(`./tailwind.config.js`);

module.exports = {
  siteMetadata: {
    author: `Sebastien Bailouni`,
    description: `Seb Bailouni's Piece of the Internet`,
    image: ``,
    keywords: `seb,bailouni,portfolio,dev,developer,webdev,internet`,
    title: `Seb Bailouni`,
    titleTemplate: `%s | Seb Bailouni`,
    twitterUsername: `@seba1342`,
    url: `https://seb.bailouni.com`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Seb Bailouni`,
        short_name: `sebbailouni`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `${__dirname}/src/assets/images/favicon.png`
      }
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [autoprefixer, tailwindCss]
      }
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
        // develop: true,
        tailwind: true,
        whitelistPatterns: [/glide/]
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-root-import`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GATSBY_GANALYTICS_ID
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/uploads`,
        name: `uploads`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages/`,
        name: `pages`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets/images`,
        name: `images`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 968,
              sizeByPixelDensity: true,
              withWebp: true
            }
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
            options: {
              destinationDir: `${__dirname}/static`
            }
          },
          `gatsby-remark-lazy-load`
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-netlify`
  ]
};
