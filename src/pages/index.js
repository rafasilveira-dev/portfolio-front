import React from "react"

import Soon from '../components/soon'
import { Reset } from 'styled-reset'
import global from '../styles/global' 

const GlobalStyle = global

export default () => (<>
  <Reset />
  <GlobalStyle />
  <Soon />
</>)
