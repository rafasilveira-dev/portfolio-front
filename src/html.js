import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        <noscript style={{width: '100vw', height: '100vh', background: '#F0DB4F', color: '#323330', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '5%'}}>
          <blockquote style={{background: '#fff', padding: '20px', borderRadius: '6px', boxShadow: '0 5px 15px rgba(0,0,0,0.25)'}}>
            <h1 style={{textAlign: 'center', fontSize: '1.5rem'}}>Esse site precisa de JavaScript para funcionar.</h1>
            <q cite="Fresno, Rashid - Hoje Sou Trovão, parte 2" style={{padding: '6px', borderLeft: '2px solid #e2e2e2', width: '100%'}}>
              Quase 2020<br/>
              Invés de carro voando, o que vejo aí<br/>
              É uma mentalidade do século XIX
            </q>
          </blockquote>
        </noscript>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
