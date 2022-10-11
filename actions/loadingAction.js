import { SET_ITEMS_LOADING, SET_REG_LOADING, UNSET_ITEMS_LOADING, UNSET_REG_LOADING } from '../reducers/loadingReducer'


export const setItemsLoading = () => dispath => {
  dispath({
    type: SET_ITEMS_LOADING,
  })
}

export const unsetItemsLoading = () => dispath => {
  dispath({
    type: UNSET_ITEMS_LOADING,
  })
}

export const setRegLoading = () => dispath => {
  dispath({
    type: SET_REG_LOADING,
  })
}
export const unsetRegLoading = () => dispath => {
  dispath({
    type: UNSET_REG_LOADING,
  })
}

