import { ADD_TO_CART, DELETE_FROM_CART, SET_CART } from '../reducers/cartReducer'

export const addItemToCart = (item) => dispath => {
  dispath({
    type: ADD_TO_CART,
    payload: item,
  })
}

export const setCart = (options) => dispath => {
  dispath({
    type: SET_CART,
    payload: {
      cartItemsList: options.cartItemsList,
      amount: options.amount,
    },
  })
}

export const deleteFromCart = (item) => dispath => {
  dispath({
    type: DELETE_FROM_CART,
    payload: item,
  })
}
