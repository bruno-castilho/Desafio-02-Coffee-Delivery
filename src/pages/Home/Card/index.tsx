import { CardContainer, Form, FormButton, FormPrice, Tags } from './styles'
import { ShoppingCartSimple } from 'phosphor-react'
import { InputNumber } from '../../../components/buttons/InputNumber'
import { CoffeesContext } from '../../../context/CoffeesContex'
import { useContext } from 'react'
import * as zod from 'zod'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Coffee } from '../../../reducers/shopping/reducer'

const CardFormValidationSchema = zod.object({
  qnt: zod.number().min(1).max(999),
})

type CardFormData = zod.infer<typeof CardFormValidationSchema>

interface CardProps {
  coffee: Coffee
}

export function Card({ coffee }: CardProps) {
  const { addProduct } = useContext(CoffeesContext)

  const CardForm = useForm<CardFormData>({
    resolver: zodResolver(CardFormValidationSchema),
    defaultValues: {
      qnt: 1,
    },
  })

  const { handleSubmit, register, getValues, setValue } = CardForm

  function handleAddProductInShoppingCart(data: CardFormData) {
    addProduct(coffee.id, data.qnt)
  }

  function handleIncreasesValue() {
    let qnt = Number(getValues('qnt'))
    if (qnt < 999) {
      qnt += 1
      setValue('qnt', qnt)
    }
  }

  function handleDecreasesValue() {
    let qnt = Number(getValues('qnt'))
    if (qnt > 1) {
      qnt -= 1
      setValue('qnt', qnt)
    }
  }

  return (
    <CardContainer>
      <img src={coffee.image} alt={`Imagem ${coffee.name}`} />
      <Tags>
        {coffee.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </Tags>
      <strong>{coffee.name}</strong>
      <p>{coffee.description}</p>
      <Form action="" onSubmit={handleSubmit(handleAddProductInShoppingCart)}>
        <FormPrice>
          <span>R$</span>
          <span>{coffee.price.toFixed(2).replace('.', ',')}</span>
        </FormPrice>
        <FormProvider {...CardForm}>
          <InputNumber
            type="number"
            id="qnt"
            placeholder="1"
            step={1}
            min={1}
            max={999}
            minusButtonFunction={handleDecreasesValue}
            plusButtonFunction={handleIncreasesValue}
            {...register('qnt', { valueAsNumber: true })}
          />
        </FormProvider>

        <FormButton type="submit">
          <ShoppingCartSimple size={22} weight="fill" />
        </FormButton>
      </Form>
    </CardContainer>
  )
}
