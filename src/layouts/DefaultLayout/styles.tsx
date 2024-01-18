import styled from 'styled-components'

export const LayoutContainer = styled.div`
  width: 70rem;
  margin: 0rem auto;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    width: 36rem;
  }
`
