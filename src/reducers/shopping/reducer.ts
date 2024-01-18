import { produce } from 'immer'
import { ActionTypes } from './actions'
import { ShoppingCartFormData } from '../../pages/ShoppingCart'

export interface Coffee {
  id: number
  image: string
  name: string
  description: string
  tags: string[]
  price: number
}

export interface Product {
  coffee: Coffee
  qnt: number
}

export interface Order extends ShoppingCartFormData {
  products: Product[]
}

interface ShoppingState {
  shoppingCart: Product[]
  order: Order | null
}

export function shoppingReducer(state: ShoppingState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_PRODUCT: {
      return produce(state, (draft) => {
        draft.shoppingCart.push(action.payload.product)
      })
    }

    case ActionTypes.REMOVE_PRODUCT: {
      return produce(state, (draft) => {
        draft.shoppingCart = draft.shoppingCart.filter(
          (product) => product.coffee.id !== action.payload.coffeeId,
        )
      })
    }

    case ActionTypes.INCREASES_PRODUCT_QNT: {
      return produce(state, (draft) => {
        draft.shoppingCart[action.payload.indexProduct].qnt +=
          action.payload.qnt

        if (draft.shoppingCart[action.payload.indexProduct].qnt > 999)
          draft.shoppingCart[action.payload.indexProduct].qnt = 999
      })
    }

    case ActionTypes.DECREASES_PRODUCT_QNT: {
      return produce(state, (draft) => {
        draft.shoppingCart[action.payload.indexProduct].qnt -=
          action.payload.qnt

        if (draft.shoppingCart[action.payload.indexProduct].qnt < 1)
          draft.shoppingCart[action.payload.indexProduct].qnt = 1
      })
    }

    case ActionTypes.CREATE_ORDER: {
      return produce(state, (draft) => {
        draft.order = {
          ...action.payload.data,
          products: draft.shoppingCart,
        }

        draft.shoppingCart = []
      })
    }

    default:
      return state
  }
}
