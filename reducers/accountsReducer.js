import initialState from './initialState'

export const SET_ACCOUNTS = 'SET_ACCOUNTS'
export const NEW_ACCOUNT = 'NEW_ACCOUNT'
export const LOGOUT = 'LOGOUT'
export const LOGIN = 'LOGIN'

const accountsReducer = (state = initialState.accounts, action) => {
  switch (action.type) {
    case SET_ACCOUNTS:
        return {
          ...state,
          accountsList:action.payload
        }
    case NEW_ACCOUNT:
      return {
        ...state,
        accountsList: [...state.accountsList, action.payload],
        currAccount: action.payload,
        authorized: true,
      }
    case LOGOUT:
      return {
        ...state,
        currAccount: {},
        authorized: false,
      }
    case LOGIN:
      return {
        ...state,
        currAccount: action.payload,
        authorized: true,
      }
    default:
      return state
  }
}


export default accountsReducer