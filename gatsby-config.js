/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Zelas · Portfolio`,
    siteName: `zelas`,
    description: `Personal website and portfolio of Zakaria El Asri`,
    image: "/Home.png",
    siteUrl: `https://zelas.netlify.app`,
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
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: `G-Z2EGZ900Q7`,
      },
    },
  ],
}
