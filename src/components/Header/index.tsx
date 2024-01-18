import { MapPin, ShoppingCart } from 'phosphor-react'
import { HeaderContainer, Locale, ShoppingCartButton } from './styles'
import { Link } from 'react-router-dom'

import logoIgnite from '../../assets/Logo.svg'
import { useContext } from 'react'
import { CoffeesContext } from '../../context/CoffeesContex'

export function Header() {
  const { shoppingCart } = useContext(CoffeesContext)

  const qntProducts = shoppingCart.length

  return (
    <HeaderContainer>
      <Link to="/">
        <img src={logoIgnite} alt="" />
      </Link>
      <div>
        <Locale>
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </Locale>

        <ShoppingCartButton to="/carrinho">
          <div>
            <p>{qntProducts}</p>
          </div>
          <ShoppingCart size={22} weight="fill" />
        </ShoppingCartButton>
      </div>
    </HeaderContainer>
  )
}
