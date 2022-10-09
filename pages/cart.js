import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Main from '../components/header/Main'
import Head from 'next/head'
import CartItem from '../components/shop/CartItem'
import { setCart } from '../actions/cartListAction'

const cart = () => {
  const cartItems = useSelector(state => state.cartList.cartItemsList)
  const totalAmount = useSelector(state => state.cartList.amount)
  const dispatch = useDispatch()

  return (
    <>
    <Head>
      <title>Adidas Cart</title>
    </Head>
    <Main>
      <div className='cart'>
        <div className='cart-items'>
          {cartItems.length === 0 && <p className='cart-empty'>Your cart is empty.</p>}
          {cartItems.length > 0 && cartItems.map(item => <CartItem key={item.id + item.size} id={item.id} size={item.size} title={item.title} price={item.price} quantity={item.quantity}/>)}
        </div>
        <div className='cart-management'>
          <span>Total amount: {totalAmount} rub</span>
          <button onClick={() => dispatch(setCart({cartItemsList: [],amount:0}))} disabled={!cartItems.length}>Order</button>
        </div>
      </div>
    </Main>
    <style jsx>
      {`
        .cart-empty {
          color: orange;
          font-weight: bold;
          font-size: 35px;
          text-align: center;
        }

        .cart {
          max-width: 1200px;
          padding: 0 5px;
          margin: 30px auto;
        }

        .cart-management {
          margin-top: 50px;
          display: flex;
          justify-content: space-between;
          font-weight: bold;
          font-size: 30px;
          align-items: center;
        }

        .cart-management button {
          cursor: pointer;
          padding: 10px 15px;
          border-radius: 15px;
          background: black; 
          color: white;
          font-weight: bold;
          font-size: 25px;
        }

        .cart-management button:disabled {
          cursor: unset;
          background: gray;
        }

        .cart-items {
          display: flex;
          flex-direction: column;
          row-gap: 30px;
        }

        @media screen and (max-width: 1220px) {
          .cart {
            max-width: 1000px;
          }
        }

        @media screen and (max-width: 1050px) {
          .cart {
            max-width: 740px;
          }
        }
        @media screen and (max-width: 768px) {
          .cart-management {
            padding: 0 5px;
            font-size: 18px;
          }
        }
      `}
    </style>
    </>
  )
}

export default cart