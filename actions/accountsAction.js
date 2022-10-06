import { NEW_ACCOUNT, SET_ACCOUNTS, LOGOUT, LOGIN } from '../reducers/accountsReducer'
import axios from 'axios'

const FIREBASE_URL = 'https://abibas-5f3cd-default-rtdb.firebaseio.com/accounts'

export const addAccount = (accountData) => {
  return (dispatch) => {
    try {
      axios.post(FIREBASE_URL + '.json', { email:accountData.email, password:accountData.password })
      .then((response) => {
        document.cookie = `user=${response.data.name}; max-age=604800`
        let dataObj = {
            email: accountData.email.toLowerCase().trim(),
            password:accountData.password,
            id:response.data.name
        }
        dispatch({ type: NEW_ACCOUNT, payload: dataObj })
      })
    } catch (e) {
      console.log(e)
    }
  }
}

export const loginAccount = (account) => {
  document.cookie = `user=${account.id}; max-age=604800`
  return {
    type: LOGIN,
    payload: account
  }
}

export const fetchAccounts = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(FIREBASE_URL + '.json')
      const data = response.data
      if (!data) return
      const accountsArray = []
      for (const acc of Object.keys(data)) {
        accountsArray.push({
          email: data[acc].email,
          password: data[acc].password,
          id: acc,
        })
      }
      dispatch({ type: SET_ACCOUNTS, payload: accountsArray })
    } catch (e) {
      console.log(e)
    }
  }
}

export const logoutAccount = () => {
  document.cookie = 'user= ;max-age=-1'
  return {
    type: LOGOUT
  }
}
