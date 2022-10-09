import initialState from './initialState'

export const ADD_TO_CART = 'ADD_TO_CART'
export const SET_CART = 'SET_CART'
export const DELETE_FROM_CART = 'DELETE_FROM_CART'

const cartReducer = (state = initialState.cartList, action) => {
  switch (action.type) {

    case ADD_TO_CART:
      let item = action.payload
      const asd = state.cartItemsList.find(i => i.id === item.id && i.size === item.size)
      if (asd === undefined) {
        item.quantity = 1
      } else {
        let newArrayList = state.cartItemsList.map(i => {
          if (i.id === item.id && i.size === item.size) {
            return {...i, quantity: i.quantity + 1}
          }
          return i
        })
        return {
          ...state,
          cartItemsList: newArrayList,
          amount: state.amount + item.price
        }
      }
      return {
        ...state,
        cartItemsList: [item ,...state.cartItemsList],
        amount: state.amount + item.price
      }

      case SET_CART:
        return {
          ...state,
          cartItemsList: action.payload.cartItemsList,
          amount: action.payload.amount,
        }

      case DELETE_FROM_CART:
        let itemForDelete = action.payload
        itemForDelete.quantity = itemForDelete.quantity - 1
        if (itemForDelete.quantity === 0) {
          return {
            ...state,
            cartItemsList: state.cartItemsList.filter(i => {
              if (i.id === itemForDelete.id && i.size === itemForDelete.size) {return}
              return i
            }
            ),
            amount: state.amount - action.payload.price,
          }  
        }

        return {
          ...state,
          cartItemsList: state.cartItemsList.map(i => {
           if (i.id === itemForDelete.id && i.size === itemForDelete.size) {
            return itemForDelete
           }
           return i 
          }),
          amount: state.amount - action.payload.price,
        }

    default:
      return state
  }
}

export default cartReducer
