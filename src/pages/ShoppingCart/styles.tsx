import styled from 'styled-components'

export const ShoppingCartContainer = styled.form`
  display: grid;
  grid-template-columns: 1fr 0.75fr;
  grid-column-gap: 2rem;

  margin-top: 2.5rem;

  h1 {
    font-family: 'Roboto', sans-serif;
    font-size: 1.125rem;
    font-weight: bold;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`

export const Container = styled.div`
  padding: 2.5rem;
`

const ICON_COLORS = {
  address: 'yellow-dark',
  payment: 'purple',
} as const

interface IconProps {
  iconcolor: keyof typeof ICON_COLORS
}

export const Description = styled.div<IconProps>`
  width: 35rem;
  display: flex;
  gap: 0.5rem;
  font-family: 'Roboto', sans-serif;

  margin-bottom: 2rem;

  & svg {
    color: ${(props) => props.theme[ICON_COLORS[props.iconcolor]]};
  }

  & p:first-child {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1rem;
    font-weight: 400;
    line-height: 130%;
    margin-bottom: 0.125rem;
  }

  & p:last-child {
    color: ${(props) => props.theme['base-text']};
    font-weight: 400;
    font-size: 0.875rem;
  }
`

export const AddressForm = styled.div`
  width: 35rem;

  & > input {
    margin-bottom: 1rem;
  }
`
export const Input = styled.input`
  padding: 0.75rem;
  border-radius: 4px;
  background: ${(props) => props.theme['base-input']};
  border: 2px solid ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-label']};
  width: 12.5rem;
`
export const InputStreet = styled(Input)`
  width: 100%;
`
export const InputComplement = styled(Input)`
  width: 21.75rem;
  margin-left: 0.75rem;
`
export const InputCity = styled(Input)`
  width: 17.25rem;
  margin-left: 0.75rem;
`
export const InputUF = styled(Input)`
  width: 3.75rem;
  margin-left: 0.75rem;
`

export const PaymentForm = styled.div`
  display: flex;
  width: 35rem;
  gap: 0.75rem;

  & svg {
    color: ${(props) => props.theme.purple};
  }

  & button {
    display: flex;
    gap: 0.75rem;
    cursor: pointer;
    text-transform: uppercase;

    border: 1px solid transparent;
    background-color: ${(props) => props.theme['base-button']};
    border-radius: 6px;
    padding: 1rem;
    flex: 1;
    text-align: left;

    font-size: 0.75rem;
    font-family: 'Roboto', sans-serif;
    line-height: 160%;
    font-weight: 400;
  }

  & button:hover {
    background: ${(props) => props.theme['base-hover']};
  }

  .selected {
    border: 1px solid ${(props) => props.theme.purple};
  }
`

export const PriceInfo = styled.div`
  width: 23rem;
  display: flex;
  justify-content: space-between;

  font-family: 'Robotp', sans-serif;
  color: ${(props) => props.theme['base-text']};
  line-height: 130%;
  font-weight: 400;

  & p {
    font-size: 0.875rem;
  }

  & span {
    font-size: 1rem;
  }

  margin-bottom: 0.75rem;
`

export const TotalPriceInfo = styled(PriceInfo)`
  font-weight: bold;

  & p,
  span {
    font-size: 1.25rem;
  }

  margin-bottom: 0rem;
`

export const SubmitButton = styled.button`
  width: 100%;
  padding: 0.75rem 0.5rem;
  border: none;
  border-radius: 6px;
  background-color: ${(props) => props.theme.yellow};
  cursor: pointer;

  text-transform: uppercase;
  color: ${(props) => props.theme.white};
  font-size: 0.875rem;
  font-family: 'Roboto', sans-serif;
  line-height: 160%;
  font-weight: bold;

  margin-top: 1.5rem;

  &:hover {
    background-color: ${(props) => props.theme['yellow-dark']};
  }
`
