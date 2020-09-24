/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

const siteMetadata = require('./config/metadata')

const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = siteMetadata.siteUrl,
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env

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
        short_name: `Rafa Silveira`,
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
        displayName: NODE_ENV !== 'production'
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

    // robots
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: '*' }],
          },
          'branch-deploy': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null,
          },
          'deploy-preview': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null,
          },
        },
      },
    },

    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: ["Fira Code, Montserrat"],
          urls: ["/fonts/fonts.css"],
        },
      },
    },

    // configurar o netlify a partir do Gatsby
    `gatsby-plugin-netlify`,
    `gatsby-plugin-netlify-cache`,

    // funcionamento offline (precisa ser o último)
    `gatsby-plugin-offline`
  ],
}
