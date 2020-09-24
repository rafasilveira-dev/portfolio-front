/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

const siteMetadata = require('./config/metadata')

// o que tá aqui vai ser exposto no graphql e pode ser consumido no front
module.exports = {
  /* Your site config here */
  siteMetadata,
  plugins: [
    // SEO
    `gatsby-plugin-react-helmet`,

    // gera o PWA
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rafa Silveira`,
        short_name: `rs.`,
        start_url: `/`,
        background_color: `#333`,
        theme_color: `#61DAFB`,
        display: `standalone`,
        icon: `src/assets/icon.png` // 512x512
      },
    },
    
    // carregando
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `#61DAFB`,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },

    // styled components
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
        displayName: process.env.NODE_ENV !== 'production'
      },
    },

    // cria páginas a partir das rotas (terá uso futuro)
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`,
        ignore: [`**/styles.js`],
      },
    },

    // sitemap (só gera em build)
    `gatsby-plugin-sitemap`,

    // configurar o netlify a partir do Gatsby
    `gatsby-plugin-netlify`,
    `gatsby-plugin-netlify-cache`,

    // funcionamento offline (precisa ser o último)
    `gatsby-plugin-offline`
  ],
}
