import styled from 'styled-components'

export const SuccessContainer = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`
export const InfoSection = styled.section`
  & > h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    font-weight: 800;
    line-height: 130%;

    color: ${(props) => props.theme['yellow-dark']};

    margin-bottom: 0.25rem;
  }

  & > p {
    color: ${(props) => props.theme['base-subtitle']};

    font-family: 'Roboto', sans-serif;
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 130%;

    margin-bottom: 2.5rem;
  }
`

export const DeliveryContent = styled.div`
  width: 32.875rem;
  height: 16.875rem;
  padding: 2.5rem;
  border-radius: 6px 36px;

  border: 1px solid red;

  & > div:not(:last-child) {
    margin-bottom: 2rem;
  }
`
export const DeliverySpec = styled.div`
  display: flex;
  gap: 0.75rem;
`

const ICON_COLORS = {
  CurrencyDollar: 'yellow-dark',
  Timer: 'yellow',
  MapPin: 'purple',
} as const

interface IconProps {
  iconcolor: keyof typeof ICON_COLORS
}

export const DeliverySpecIcon = styled.div<IconProps>`
  color: ${(props) => props.theme.background};
  background: ${(props) => props.theme[ICON_COLORS[props.iconcolor]]};
  padding: 0.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  align-self: center;
`
export const DeliverySpecTxt = styled.div`
  color: ${(props) => props.theme['base-text']};
`

export const ImgSection = styled.section`
  display: flex;
  justify-content: right;

  & > img {
    align-self: flex-end;
  }
`
