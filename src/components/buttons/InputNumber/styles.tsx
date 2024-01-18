import styled from 'styled-components'

export const InputNumberContainer = styled.div`
  border: none;
  background: ${(props) => props.theme['base-button']};
  border-radius: 6px;
  padding: 0.5rem;
  display: inline-flex;
  gap: 0.25rem;

  & > button {
    background: ${(props) => props.theme['base-button']};
    color: ${(props) => props.theme.purple};
    border: none;
    text-align: center;
    cursor: pointer;
  }
  & > input {
    background: ${(props) => props.theme['base-button']};
    color: ${(props) => props.theme['base-title']};
    width: 1.75rem;
    text-align: center;
    border: none;

    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: bold, 400;
  }

  & > input::-webkit-inner-spin-button,
  & > input::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
`
