import { ShoppingCartFormData } from '../../pages/ShoppingCart'
import { Product } from './reducer'

export enum ActionTypes {
  ADD_NEW_PRODUCT = 'ADD_NEW_PRODUCT',
  REMOVE_PRODUCT = 'REMOVE_PRODUCT',
  INCREASES_PRODUCT_QNT = 'INCREASES_PRODUCT_QNT',
  DECREASES_PRODUCT_QNT = 'DECREASES_PRODUCT_QNT',
  CREATE_ORDER = 'CREATE_ORDER',
}

export function addNewProductAction(product: Product) {
  return {
    type: 'ADD_NEW_PRODUCT',
    payload: {
      product,
    },
  }
}

export function increasesProductQntAction(indexProduct: number, qnt: number) {
  return {
    type: 'INCREASES_PRODUCT_QNT',
    payload: {
      indexProduct,
      qnt,
    },
  }
}

export function decreasesProductQntAction(indexProduct: number, qnt: number) {
  return {
    type: 'DECREASES_PRODUCT_QNT',
    payload: {
      indexProduct,
      qnt,
    },
  }
}

export function removeProductAction(coffeeId: number) {
  return {
    type: 'REMOVE_PRODUCT',
    payload: {
      coffeeId,
    },
  }
}

export function createOrderAction(data: ShoppingCartFormData) {
  return {
    type: 'CREATE_ORDER',
    payload: {
      data,
    },
  }
}
