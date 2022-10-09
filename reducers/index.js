import { combineReducers } from 'redux'
import accountsReducer from './accountsReducer'
import shopListReducer from './shopListReducer'
import cartReducer from './cartReducer'

const rootReducer = combineReducers({
  accounts: accountsReducer,
  shopList: shopListReducer,
  cartList: cartReducer,
})

export default rootReducer