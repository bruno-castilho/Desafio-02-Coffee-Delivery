import styled from 'styled-components'

export const IntroContainer = styled.div`
  min-height: 34rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3.5rem;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`

export const Title = styled.div`
  width: 36.75rem;
  margin-bottom: 4.125rem;

  & > h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 3rem;
    line-height: 130%;
    font-weight: 800;

    margin-bottom: 1rem;

    color: ${(props) => props.theme['base-text']};
  }
  & > p {
    font-family: 'Roboto', sans-serif;
    font-size: 1.25rem;
    line-height: 130%;
    font-weight: 400, bold;

    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const Items = styled.div`
  width: 35.4375rem;
  display: grid;
  row-gap: 1.25rem;
  grid-template-columns: 0.9fr 1fr;

  & > span {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    line-height: 130%;
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;

    color: ${(props) => props.theme['base-text']};
  }
`

const ICON_COLORS = {
  ShoppingCart: 'yellow-dark',
  Package: 'base-text',
  Timer: 'yellow',
  Coffee: 'purple',
} as const

interface IconProps {
  iconcolor: keyof typeof ICON_COLORS
}

export const Icon = styled.div<IconProps>`
  padding: 0.5rem;
  background: ${(props) => props.theme[ICON_COLORS[props.iconcolor]]};
  border-radius: 50%;
  display: flex;
  align-items: center;

  & > svg {
    color: ${(props) => props.theme.background};
  }
`

export const ImgSection = styled.section`
  display: flex;
  justify-content: center;
`
