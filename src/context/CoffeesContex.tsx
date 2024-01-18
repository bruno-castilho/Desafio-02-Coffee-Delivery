import { ReactNode, createContext, useEffect, useReducer } from 'react'
import coffeeList from '../data/CoffeesList.json'
import {
  Coffee,
  Order,
  Product,
  shoppingReducer,
} from '../reducers/shopping/reducer'
import {
  addNewProductAction,
  createOrderAction,
  decreasesProductQntAction,
  increasesProductQntAction,
  removeProductAction,
} from '../reducers/shopping/actions'
import { ShoppingCartFormData } from '../pages/ShoppingCart'

interface CoffeesContextType {
  coffeeList: Coffee[]
  shoppingCart: Product[]
  order: Order | null
  increasesProductQnt: (coffeeId: number, qnt: number) => void
  decreasesProductQnt: (coffeeId: number, qnt: number) => void
  addProduct: (coffeeId: number, qnt: number) => void
  removeProduct: (coffeeId: number) => void
  createOrder: (data: ShoppingCartFormData) => void
}

export const CoffeesContext = createContext({} as CoffeesContextType)

interface CoffeesContextProviderProps {
  children: ReactNode
}

export function CoffeesContextProvider({
  children,
}: CoffeesContextProviderProps) {
  const [shoppingState, dispatch] = useReducer(
    shoppingReducer,
    {
      shoppingCart: [],
      order: null,
    },
    (initialState) => {
      const storedStateAsJSON = localStorage.getItem(
        '@coofee-delivery:shopping-state-1.0.0',
      )
      if (storedStateAsJSON) return JSON.parse(storedStateAsJSON)

      return initialState
    },
  )

  const { shoppingCart, order } = shoppingState

  useEffect(() => {
    const stateJSON = JSON.stringify(shoppingState)
    localStorage.setItem('@coofee-delivery:shopping-state-1.0.0', stateJSON)
  }, [shoppingState])

  function increasesProductQnt(coffeeId: number, qnt: number) {
    const indexProduct = shoppingCart.findIndex((product) => {
      return product.coffee.id === coffeeId
    })

    if (indexProduct !== -1)
      dispatch(increasesProductQntAction(indexProduct, qnt))
  }

  function decreasesProductQnt(coffeeId: number, qnt: number) {
    const indexProduct = shoppingCart.findIndex((product) => {
      return product.coffee.id === coffeeId
    })

    if (indexProduct !== -1)
      dispatch(decreasesProductQntAction(indexProduct, qnt))
  }

  function addProduct(coffeeId: number, qnt: number) {
    const indexProduct = shoppingCart.findIndex((product) => {
      return product.coffee.id === coffeeId
    })

    if (indexProduct !== -1) {
      dispatch(increasesProductQntAction(indexProduct, qnt))
    } else {
      const coffee = coffeeList.find((coffee) => {
        return coffee.id === coffeeId
      })

      if (coffee) {
        dispatch(
          addNewProductAction({
            coffee,
            qnt,
          }),
        )
      }
    }
  }

  function removeProduct(coffeeId: number) {
    dispatch(removeProductAction(coffeeId))
  }

  function createOrder(data: ShoppingCartFormData) {
    dispatch(createOrderAction(data))
  }

  return (
    <CoffeesContext.Provider
      value={{
        coffeeList,
        shoppingCart,
        order,
        increasesProductQnt,
        decreasesProductQnt,
        addProduct,
        removeProduct,
        createOrder,
      }}
    >
      {children}
    </CoffeesContext.Provider>
  )
}
