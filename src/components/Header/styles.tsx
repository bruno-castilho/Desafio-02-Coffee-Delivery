import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2rem 10rem;

  div {
    display: flex;
    align-items: center;
  }

  & > div {
    gap: 0.75rem;
  }

  a {
    background-color: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
    border-radius: 6px;
    padding: 0.5rem;
  }
`
export const Locale = styled.div`
  color: ${(props) => props.theme['purple-dark']};
  gap: 0.25rem;
`
