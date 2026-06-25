import styled, { createGlobalStyle } from 'styled-components'
import { reboot } from 'styled-reboot'

export const GlobalStyle = createGlobalStyle`
${reboot}
html, body {
  width: 100%;
  height: 100%;
}
body {
  min-width: 300px;
  color: #f9f9fa;
  background: #33313f;
  font-weight: 100;
}
#root {
  height: 100%;
}
`

export const Outer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  border: 1px solid #403d4f;
  background: #2d2b37;
  border-radius: 0.5rem;
  min-width: 320px;
`

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const SectionTitle = styled.div`
  font-size: 0.85rem;
  color: #8a879a;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const Label = styled.span`
  font-size: 0.9rem;
  color: #b3b2be;
`

export const Button = styled.button`
  padding: 0.4rem 1rem;
  cursor: pointer;
  background: #6e66a6;
  color: #f9f9fa;
  border: none;
  border-radius: 0.3rem;
  font-size: 0.85rem;
  &:hover {
    background: #585285;
  }
`
