import initialState from "./initialState"

export const SET_SHOP_ITEMS = 'SET_SHOP_ITEMS'
export const ADD_CART_ITEM = 'ADD_CART_ITEM'

const shopListReducer = (state = initialState.shopList, action) => {
  switch (action.type) {
    case SET_SHOP_ITEMS:
      return {
        ...state,
        itemsList: action.payload
      }
    case ADD_CART_ITEM:
      return {
        ...state,
        cartList: [action.payload, ...state.cartList]
      }
    default:
      return state
  }
}

export default shopListReducer