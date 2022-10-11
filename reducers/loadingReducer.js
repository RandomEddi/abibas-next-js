import initialState from "./initialState"

export const SET_ITEMS_LOADING = 'SET_ITEMS_LOADING'
export const UNSET_ITEMS_LOADING = 'UNSET_ITEMS_LOADING'
export const SET_REG_LOADING = 'SET_REG_LOADING'
export const UNSET_REG_LOADING = 'UNSET_REG_LOADING'

const loadingReducer = (state = initialState.ui, action) => {
  switch (action.type) {
    case SET_ITEMS_LOADING:
      return {
        ...state,
        itemsLoading: true
      }
      
    case UNSET_ITEMS_LOADING:
      return {
        ...state,
        itemsLoading: false
      }

    case SET_REG_LOADING:
      return {
        ...state,
        regLoading: true
      }

    case UNSET_REG_LOADING:
      return {
        ...state,
        regLoading: false
      }
      
    default:
      return state
  }
}

export default loadingReducer