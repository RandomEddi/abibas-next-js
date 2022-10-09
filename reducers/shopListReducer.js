import initialState from "./initialState"

export const SET_SHOP_ITEMS = 'SET_SHOP_ITEMS'

const shopListReducer = (state = initialState.shopList, action) => {
  switch (action.type) {
    case SET_SHOP_ITEMS:
      return {
        ...state,
        itemsList: action.payload
      }
    default:
      return state
  }
}

export default shopListReducer