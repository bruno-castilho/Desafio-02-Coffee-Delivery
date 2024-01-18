import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2.5rem 0rem;

  div {
    display: flex;
    align-items: center;
  }

  & > div {
    gap: 0.75rem;
  }
`

export const ShoppingCartButton = styled(Link)`
  position: relative;
  background-color: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
  border-radius: 6px;
  padding: 0.5rem;

  & > div > p {
    color: ${(props) => props.theme.white};
    font-size: 0.75rem;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
  }

  & > div {
    display: flex;
    justify-content: center;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 1000px;
    background-color: ${(props) => props.theme['yellow-dark']};
    position: absolute;
    right: -0.625rem;
    top: -0.625rem;
  }
`

export const Locale = styled.div`
  color: ${(props) => props.theme['purple-dark']};
  gap: 0.25rem;
`
