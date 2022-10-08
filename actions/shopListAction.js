import { ADD_CART_ITEM, SET_SHOP_ITEMS} from '../reducers/shopListReducer'

export const addItemToCart = (item) => dispath => {
  dispath({
    type: ADD_CART_ITEM,
    payload: item,
  })
}

export const setShopItems = (items) => async dispath => {
  dispath({
    type: SET_SHOP_ITEMS,
    payload: items,
  })
}