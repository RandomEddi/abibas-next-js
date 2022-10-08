import { combineReducers } from 'redux'
import accountsReducer from './accountsReducer'
import shopListReducer from './shopListReducer'

const rootReducer = combineReducers({
  accounts: accountsReducer,
  shopList: shopListReducer
})

export default rootReducer