import { SET_SHOP_ITEMS} from '../reducers/shopListReducer'
import axios from 'axios'
import { setItemsLoading, unsetItemsLoading} from './loadingAction'

const FIREBASE_URL = 'https://abibas-5f3cd-default-rtdb.firebaseio.com/shopItems'

export const setShopItems = () => async dispatch => {
  try {
    dispatch(setItemsLoading())
    const response = await axios.get(FIREBASE_URL + '.json')
    const data = response.data
    if (!data) return
    const itemsArray = []
    for (const acc of Object.keys(data)) {
      itemsArray.push({
        imgUrl: data[acc].imgUrl,
        price: data[acc].price,
        title: data[acc].title,
        category: data[acc].category,
        avaibleSize: data[acc].avaibleSize,
        id: acc,
      })
    }
    dispatch(unsetItemsLoading())

    dispatch({
      type: SET_SHOP_ITEMS,
      payload: itemsArray,
    })
  } catch (e) {
    console.log(e)
  }
  
}