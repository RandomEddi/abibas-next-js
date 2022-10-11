const initialState = {
  accounts: {
    accountsList : [],
    currAccount: {},
    authorized: false,
  },

  shopList: {
    itemsList: [],
  },
  
  cartList: {
    cartItemsList: [],
    amount: 0
  },

  ui: {
    itemsLoading: false,
    regLoading: false
  }

}

export default initialState