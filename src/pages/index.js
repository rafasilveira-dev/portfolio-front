import React from "react"

import Soon from '../components/soon'
import { Reset } from 'styled-reset'
import global from '../styles/global' 
import { Helmet } from "react-helmet"
import metadata from '../../config/metadata'

const GlobalStyle = global

export default () => (<>
  <Reset />
  <GlobalStyle />
  <main>
    <Helmet>
      <html lang='pt-BR' />
      <title>{metadata.title}</title>

      <meta name="keywords" content="Rafael Bourscheid da Silveira desenvolvedor web front frontend seo freela freelance freelancer programador site app landing page aplicativo landingpage sites javascript react jquery html css" />
      <meta name="description" content={metadata.description} />

      <meta property="og:locale" content="pt_BR" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={metadata.title} />
      <meta property="og:url" content={metadata.siteUrl} />
      <meta property="og:site_name" content={metadata.title} />
      <meta property="og:image" content={`${metadata.siteUrl}/me.jpg`} />
      <meta property="og:description" content="Opa, tudo certo? Eu desenvolvo sites." />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Rafael Silveira | Desenvolvedor web freelance" />
      <meta name="twitter:description" content={metadata.description} />
      <meta name="twitter:url" content={metadata.siteUrl} />
      <meta name="twitter:image" content={`${metadata.siteUrl}/me.jpg`} />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "email": `${metadata.email}`,
          "image": `${metadata.siteUrl}/me.jpg`,
          "jobTitle": "JavaScript Developer",
          "name": "Rafael Bourscheid da Silveira",
          "alumniOf": {
            "@type": "CollegeOrUniversity",
            "name": "Universidade de Caxias do Sul",
            "sameAs": "https://en.wikipedia.org/wiki/University_of_Caxias_do_Sul"
          },
          "birthPlace": {
            "@type": "Place",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Três de Maio",
              "addressRegion": "RS",
              "addressCountry": "Brazil"
            },
          },
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Caxias do Sul",
            "addressRegion": "RS",
            "addressCountry": "Brazil"
          },
          "birthDate": "1997-05-05",
          "height": "72 inches",
          "gender": "male",
          "Description": "Technologist",
          "disambiguatingDescription": "JavaScript developer",
          "nationality": "Brazilian",
          "url": `${metadata.siteUrl}`,
          "sameAs" : metadata.social.filter(s => s.name !== 'whatsapp').map(({name, url}) => { return url })
        })}
      </script>
    </Helmet>
    <Soon />
  </main>
</>)
