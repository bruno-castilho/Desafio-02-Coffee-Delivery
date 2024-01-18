import { CoffeCardInfo, CoffeeCardContainer, RemoveButton } from './styles'
import { InputNumber } from '../../../components/buttons/InputNumber'
import { Trash } from 'phosphor-react'
import { CoffeesContext } from '../../../context/CoffeesContex'
import { useContext, useRef } from 'react'
import { Product } from '../../../reducers/shopping/reducer'

interface CoffeCardProps {
  product: Product
}

export function CoffeeCard({ product }: CoffeCardProps) {
  const { qnt, coffee } = product
  const inputRef = useRef<HTMLInputElement>(null)
  const { removeProduct, increasesProductQnt, decreasesProductQnt } =
    useContext(CoffeesContext)

  function handleIncreasesValue() {
    inputRef.current?.stepUp()
    increasesProductQnt(coffee.id, 1)
  }

  function handleDecreasesValue() {
    inputRef.current?.stepDown()
    decreasesProductQnt(coffee.id, 1)
  }

  function handleRemoveProduct() {
    removeProduct(coffee.id)
  }

  const totalPrice = qnt * coffee.price

  return (
    <CoffeeCardContainer>
      <img src={coffee.image} alt="" />

      <div>
        <CoffeCardInfo>
          <label>{coffee.name}</label>
          <span>R$ {totalPrice.toFixed(2).replace('.', ',')}</span>
        </CoffeCardInfo>

        <InputNumber
          type="number"
          id="qnt"
          value={qnt}
          step={1}
          min={1}
          max={999}
          minusButtonFunction={handleDecreasesValue}
          plusButtonFunction={handleIncreasesValue}
          ref={inputRef}
        />
        <RemoveButton type="button" onClick={handleRemoveProduct}>
          <Trash size={16} /> Remover
        </RemoveButton>
      </div>
    </CoffeeCardContainer>
  )
}
