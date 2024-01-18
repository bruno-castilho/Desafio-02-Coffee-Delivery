import styled from 'styled-components'

export const HomeContainer = styled.main`
  margin-bottom: 9.8125rem;

  & > h1 {
    margin-bottom: 3.375rem;
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    font-weight: 800;
    line-height: 130%;
  }
`

export const CoffeeList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;

  @media (max-width: 700px) {
    justify-content: space-between;
  }
`
