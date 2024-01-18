import { Minus, Plus } from 'phosphor-react'
import { InputNumberContainer } from './styles'
import { InputHTMLAttributes, forwardRef } from 'react'

interface InputNumberProps extends InputHTMLAttributes<HTMLInputElement> {
  minusButtonFunction: () => void
  plusButtonFunction: () => void
}

export const InputNumber = forwardRef<HTMLInputElement, InputNumberProps>(
  function InputNumber(
    { minusButtonFunction, plusButtonFunction, ...props },
    ref,
  ) {
    return (
      <InputNumberContainer>
        <button type="button" onClick={minusButtonFunction}>
          <Minus size={14} weight="bold" />
        </button>
        <input {...props} ref={ref} />
        <button type="button" onClick={plusButtonFunction}>
          <Plus size={14} weight="bold" />
        </button>
      </InputNumberContainer>
    )
  },
)
