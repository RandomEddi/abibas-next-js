import { combineReducers } from 'redux'
import accountsReducer from './accountsReducer'
import shopListReducer from './shopListReducer'
import cartReducer from './cartReducer'
import loadingReducer from './loadingReducer'

const rootReducer = combineReducers({
  accounts: accountsReducer,
  shopList: shopListReducer,
  cartList: cartReducer,
  loading: loadingReducer,
})

export default rootReducer