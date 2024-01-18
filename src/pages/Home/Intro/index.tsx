import { IntroContainer, Icon, Items, Title, ImgSection } from './styles'
import Imagem from '../../../assets/Imagem.svg'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

export function Intro() {
  return (
    <IntroContainer>
      <section>
        <Title>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </Title>
        <Items>
          <span>
            <Icon iconcolor="ShoppingCart">
              <ShoppingCart size={16} weight="fill" />
            </Icon>
            <p>Compra simples e segura</p>
          </span>
          <span>
            <Icon iconcolor="Package">
              <Package size={16} weight="fill" />
            </Icon>
            <p>Embalagem mantém o café intacto</p>
          </span>
          <span>
            <Icon iconcolor="Timer">
              <Timer size={16} weight="fill" />
            </Icon>
            <p>Entrega rápida e rastreada</p>
          </span>
          <span>
            <Icon iconcolor="Coffee">
              <Coffee size={16} weight="fill" />
            </Icon>
            <p>O café chega fresquinho até você</p>
          </span>
        </Items>
      </section>
      <ImgSection>
        <img src={Imagem} alt="" />
      </ImgSection>
    </IntroContainer>
  )
}
