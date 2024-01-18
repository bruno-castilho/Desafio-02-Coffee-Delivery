import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 16rem;

  & > img {
    margin-bottom: 1.75rem;
  }

  & > strong {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.25rem;
    font-weight: bold;
    line-height: 130%;

    margin-bottom: 0.5rem;
  }

  & > p {
    font-family: 'roboto', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 130%;

    margin-bottom: 0.5rem;
  }
`

export const Tags = styled.div`
  display: flex;
  gap: 0.625rem;
  margin-bottom: 1.25rem;

  & > span {
    text-transform: uppercase;
    font-family: 'Roboto', sans-serif;
    font-size: 0.625rem;
    font-weight: bold;

    border-radius: 100px;
    padding: 0.25rem 0.5rem;
    color: ${(props) => props.theme['yellow-dark']};
    background: ${(props) => props.theme['yellow-light']};
  }
`

export const Form = styled.form`
  display: flex;
  align-items: center;
`
export const FormPrice = styled.label`
  margin-right: 1.4375rem;

  & > span:first-child {
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    margin-right: 0.1rem;
  }

  & > span:last-child {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.5rem;
    font-weight: bold;
  }
`

export const FormButton = styled.button`
  border: none;
  padding: 0.5rem;
  border-radius: 6px;
  background: ${(props) => props.theme['purple-dark']};
  color: ${(props) => props.theme['base-card']};
  cursor: pointer;

  margin-left: 0.5rem;
`
