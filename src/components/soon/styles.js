import styled, { keyframes } from 'styled-components'


const reactAnimation = keyframes`
  0% { transform: rotate(0) }
  100% { transform: rotate(360deg) }
`

export const Container = styled.div`
  color: ${props => props.theme.primary};
  background: ${props => props.theme.background};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 33%;
    object-fit: contain;
    display: block;
    margin-bottom: 30px;
    animation: ${reactAnimation} 10s linear infinite;

  }

  h1 {
    font-family: 'Fira Code', monospace;
    font-size: 2rem;
    letter-spacing: -0.05em;
    margin-bottom: 1.25rem;
  }

  h2 {
    font-size: 1.25rem;
    margin-bottom: 1.5rem
  }

  div {
    display: flex;
    align-items: center;

    a {
      text-decoration: none;
      color: ${props => props.theme.primary};
      transition: color 0.25s linear;
      font-size: 1.5rem;
      padding: .25rem;

      &:hover {
        color: ${props => props.theme.accent};
      }

      & + a {
        margin-left: .5em;
      }
      
    }
  }
`
