import React from "react"

import Soon from '../components/soon'
import JsonLD from '../components/jsonLd'
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
      <title>Rafa Silveira</title>
      <description>Opa! Sou o Rafael Bourscheid da Silveira, desenvolvedor JavaScript.</description>
      <JsonLD>
        {{
          "@context": "https://schema.org",
          "@type": "Person",
          "email": `${metadata.email}`,
          "image": "static/me.jpg",
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
          "sameAs" : `${metadata.social.filter(s => s.name !== 'whatsapp').map(({name, url}) => { return url } )}`
        }}
      </JsonLD>
    </Helmet>
    <Soon />
  </main>
</>)
