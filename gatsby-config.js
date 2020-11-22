/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Zakaria El Asri`,
    author: {
      name: `Zakaria El Asri`,
      summary: ``,
    },
    description: `Personal website and portfolio`,
    siteUrl: `https://gatsby-starter-blog-demo.netlify.app/`,
    social: {
      github: `https://github.com/zakariaelas`,
      linkedin: `https://www.linkedin.com/in/zakaria-el-asri-850197169/`,
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /icons/,
        },
      },
    },
  ],
}
