import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import {
  AddressForm,
  Container,
  Description,
  Input,
  InputCity,
  InputComplement,
  InputStreet,
  InputUF,
  PaymentForm,
  PriceInfo,
  ShoppingCartContainer,
  SubmitButton,
  TotalPriceInfo,
} from './styles'
import { MouseEvent, useContext, useState } from 'react'
import { CoffeesContext } from '../../context/CoffeesContex'
import { CoffeeCard } from './CoffeeCard'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const ShoppingCartValidationSchema = zod.object({
  cep: zod.string().regex(/^\d{5}-\d{3}$/, { message: 'Digite um CEP válido' }),
  street: zod.string().min(1, { message: 'Informe a rua para a entrega' }),
  number: zod
    .string()
    .min(1, { message: 'Informe o número da casa/apartamento' }),
  complement: zod.string(),
  neighborhood: zod.string().min(1, { message: 'Informe o bairro' }),
  city: zod.string().min(1, { message: 'Informe a cidade' }),
  uf: zod
    .string()
    .length(2)
    .min(1, { message: 'Informe a unidade federativa' }),
  formOfPayment: zod
    .string()
    .min(1, { message: 'Selecione a forma de pagamento' }),
})

export type ShoppingCartFormData = zod.infer<
  typeof ShoppingCartValidationSchema
>

export function ShoppingCart() {
  const navigate = useNavigate()
  const [buttonSelected, setButtonSelected] = useState('')

  const { shoppingCart, createOrder } = useContext(CoffeesContext)

  const ShoppingCartForm = useForm<ShoppingCartFormData>({
    resolver: zodResolver(ShoppingCartValidationSchema),
    defaultValues: {
      cep: '',
      street: '',
      number: '',
      complement: '',
      neighborhood: '',
      city: '',
      uf: '',
      formOfPayment: '',
    },
  })

  const { handleSubmit, register, watch, setValue, getValues } =
    ShoppingCartForm

  const totalProducts = shoppingCart.reduce((value, product) => {
    return value + product.qnt * product.coffee.price
  }, 0)

  const deliveryFee = 3.5

  const total = totalProducts + deliveryFee

  function handleCreateNewOrder(data: ShoppingCartFormData) {
    if (shoppingCart.length !== 0) {
      createOrder(data)
      navigate('/sucesso')
    }
  }

  function handleChooseFormOfPayment(event: MouseEvent<HTMLButtonElement>) {
    const buttonValue = event.currentTarget.value
    const currentValue = getValues('formOfPayment')

    if (buttonValue === currentValue) {
      setButtonSelected('')
      setValue('formOfPayment', '')
    } else {
      setButtonSelected(buttonValue)
      setValue('formOfPayment', buttonValue)
    }
  }

  watch((data, { name, type }) => {
    if (name === 'cep' && type === 'change' && data.cep) {
      let cep = data.cep
      cep = cep.replace(/[^0-9]/g, '')
      cep = cep.substring(0, 8)

      if (cep.length >= 6) cep = cep.substring(0, 5) + '-' + cep.substring(5)

      setValue('cep', cep)
    }
  })

  return (
    <ShoppingCartContainer
      action=""
      onSubmit={handleSubmit(handleCreateNewOrder)}
    >
      <section>
        <h1>Complete seu pedido</h1>
        <Container>
          <Description iconcolor="address">
            <MapPinLine size={22} />
            <div>
              <p>Endereço de Entrega</p>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </Description>
          <AddressForm>
            <Input
              type="text"
              id="cep"
              placeholder="CEP"
              {...register('cep')}
            />
            <InputStreet
              type="text"
              id="street"
              placeholder="Rua"
              {...register('street')}
            />
            <Input
              type="text"
              id="number"
              placeholder="Número"
              {...register('number')}
            />
            <InputComplement
              type="text"
              id="complement"
              placeholder="Complemento"
              {...register('complement')}
            />

            <Input
              type="text"
              id="neighborhood"
              placeholder="Bairro"
              {...register('neighborhood')}
            />
            <InputCity
              type="text"
              id="city"
              placeholder="Cidade"
              {...register('city')}
            />
            <InputUF type="text" id="uf" placeholder="UF" {...register('uf')} />
          </AddressForm>
        </Container>

        <Container>
          <Description iconcolor="payment">
            <CurrencyDollar size={24} />
            <div>
              <p>Pagamento</p>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </Description>
          <PaymentForm>
            <button
              type="button"
              value="Cartão de Crédito"
              className={
                buttonSelected === 'Cartão de Crédito' ? 'selected' : ''
              }
              onClick={handleChooseFormOfPayment}
            >
              <CreditCard size={16} />
              cartão de crédito
            </button>
            <button
              type="button"
              value="Cartão de Débito"
              onClick={handleChooseFormOfPayment}
              className={
                buttonSelected === 'Cartão de Débito' ? 'selected' : ''
              }
            >
              <Bank size={16} /> cartão de débito
            </button>
            <button
              type="button"
              value="Dinheiro"
              onClick={handleChooseFormOfPayment}
              className={buttonSelected === 'Dinheiro' ? 'selected' : ''}
            >
              <Money size={16} />
              dinheiro
            </button>
          </PaymentForm>
        </Container>
      </section>
      <section>
        <h1>Cafés selecionados</h1>
        <Container>
          {shoppingCart.map((product) => (
            <CoffeeCard key={product.coffee.id} product={product} />
          ))}

          <div>
            <PriceInfo>
              <p>Total de itens</p>
              <span>R$ {totalProducts.toFixed(2).replace('.', ',')}</span>
            </PriceInfo>
            <PriceInfo>
              <p>Entrega</p>
              <span>R$ {deliveryFee.toFixed(2).replace('.', ',')}</span>
            </PriceInfo>
            <TotalPriceInfo>
              <p>Total</p>
              <span>R$ {total.toFixed(2).replace('.', ',')}</span>
            </TotalPriceInfo>
          </div>
          <SubmitButton type="submit"> Confirmar Pedido</SubmitButton>
        </Container>
      </section>
    </ShoppingCartContainer>
  )
}
