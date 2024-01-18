import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import Image from '../../assets/Illustration.svg'
import {
  DeliveryContent,
  DeliverySpec,
  DeliverySpecIcon,
  DeliverySpecTxt,
  ImgSection,
  InfoSection,
  SuccessContainer,
} from './styles'
import { useContext } from 'react'
import { CoffeesContext } from '../../context/CoffeesContex'

export function Success() {
  const { order } = useContext(CoffeesContext)
  return (
    <SuccessContainer>
      <InfoSection>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
        <DeliveryContent>
          <DeliverySpec>
            <DeliverySpecIcon iconcolor="MapPin">
              <MapPin size={16} weight="fill" />
            </DeliverySpecIcon>
            <DeliverySpecTxt>
              <p>
                Entrega em Rua{' '}
                {order && (
                  <>
                    <b>
                      {order.street}, {order.number}
                    </b>
                    <br /> {order.neighborhood} - {order.city}, {order.uf}
                  </>
                )}
              </p>
            </DeliverySpecTxt>
          </DeliverySpec>

          <DeliverySpec>
            <DeliverySpecIcon iconcolor="Timer">
              <Timer size={16} weight="fill" />
            </DeliverySpecIcon>
            <DeliverySpecTxt>
              <p>
                Previsão de entrega <br /> <b>20 min - 30 min</b>
              </p>
            </DeliverySpecTxt>
          </DeliverySpec>

          <DeliverySpec>
            <DeliverySpecIcon iconcolor="CurrencyDollar">
              <CurrencyDollar size={16} />
            </DeliverySpecIcon>
            <DeliverySpecTxt>
              <p>
                Pagamento na entrega <br />{' '}
                {order && <b>{order.formOfPayment}</b>}
              </p>
            </DeliverySpecTxt>
          </DeliverySpec>
        </DeliveryContent>
      </InfoSection>
      <ImgSection>
        <img src={Image} alt="" />
      </ImgSection>
    </SuccessContainer>
  )
}
