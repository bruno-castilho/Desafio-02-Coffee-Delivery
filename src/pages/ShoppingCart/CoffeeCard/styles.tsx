import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  width: 100%;
  margin-bottom: 1.5rem;

  & > div {
    display: inline-block;
    margin-left: 20px;
    width: calc(100% - 84px);
  }

  & > img {
    width: 64px;
    height: 64px;
  }
`
export const CoffeCardInfo = styled.div`
  display: flex;
  justify-content: space-between;

  & > label {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 160%;
    display: block;
    margin-bottom: 0.5rem;
  }

  & > span {
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 1rem;
    line-height: 160%;
    margin-left: 30px;
  }
`

export const RemoveButton = styled.button`
  display: inline-flex;
  gap: 0.5rem;
  padding: 0.5rem;
  border: none;
  border-radius: 6px;
  background-color: ${(props) => props.theme['base-button']};
  cursor: pointer;

  color: ${(props) => props.theme['base-text']};
  font-family: 'Roboto', sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 160%;
  text-transform: uppercase;

  margin-left: 0.5rem;

  & > svg {
    color: ${(props) => props.theme.purple};
  }

  &:hover {
    background-color: ${(props) => props.theme['base-hover']};
  }
`
