import styled, { keyframes } from 'styled-components'

const animate = keyframes`
  0% {
    transform: rotate(-360deg) scale(1);
  }
  50% {
    transform: rotate(90deg) scale(0.8);
  }
  to {
    transform: rotate(360deg) scale(1);
  }
`

export const Wrapper = styled.main`
  background-color: #151716;
  color: #fff;
  width: 100%;
  height: 100%;
  padding: 3rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Logo = styled.img`
  width: 25rem;
  margin-bottom: 2rem;
  animation-name: ${animate};
  animation-duration: 12s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`

export const Title = styled.h1`
  font-size: 2.5rem;
  padding-bottom: 2rem;
`

export const Description = styled.h2`
  font-size: 2rem;
  font-weight: 400;
`

export const Illustration = styled.img`
  margin-top: 3rem;
  width: min(30rem, 100%);
  opacity: 0.6;
`
