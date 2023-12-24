import { MapPin, ShoppingCart } from 'phosphor-react'
import { HeaderContainer, Locale } from './styles'

import logoIgnite from '../../assets/Logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoIgnite} alt="" />
      <div>
        <Locale>
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </Locale>

        <a>
          <ShoppingCart size={22} weight="fill" />
        </a>
      </div>
    </HeaderContainer>
  )
}
