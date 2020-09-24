import React from 'react'

import { Container } from './styles'
import reactIcon from '../../assets/React-icon.svg'

import { useStaticQuery, graphql } from "gatsby"

import { FaEnvelope, FaGithubAlt, FaLinkedinIn, FaTwitter, FaWhatsapp } from 'react-icons/fa'

export default () => {
  const data = useStaticQuery(
    graphql`
    query {
      site {
        siteMetadata {
          title
          social {
            name
            url
          }
        }
      }
    }
  `
  )

  const socials = {
    github: <FaGithubAlt/>,
    linkedin: <FaLinkedinIn/>,
    twitter: <FaTwitter/>,
    email: <FaEnvelope/>,
    whatsapp: <FaWhatsapp/>
  }

  return (
    <Container>
      <img src={reactIcon} alt="React" />
      <h1>rafa silveira</h1>
      <h2>javascript developer</h2>

      <div>
        { data.site.siteMetadata.social.map(item => {
          return (<>
            <a href={item.url} title={`Clique aqui para ir ao meu ${item.name}`} target="_blank" rel="noopener noreferrer external" key={item.name}>
              {socials[item.name]}
            </a>
          </>)
        })}
      </div>

    </Container>
  )
}
