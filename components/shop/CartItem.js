import Link from 'next/link'
import React from 'react'
import { useDispatch } from 'react-redux'
import { addItemToCart } from '../../actions/cartListAction'
import { deleteFromCart } from '../../actions/cartListAction'

const CartItem = (props) => {
  const dispatch = useDispatch()

  const onAddItemHandler = () => {
    dispatch(addItemToCart({
      title: props.title,
      id: props.id,
      size: props.size,
      price: props.price
    }))
  }

  const onRemoveItemHandler = () => {
    dispatch(deleteFromCart({
      title: props.title,
      id: props.id,
      size: props.size,
      price: props.price,
      quantity: props.quantity,
    }))
  }
  
  return (
    <>
      <div className='cart-item'>
        <div className='cart-info'>
          <Link href={`/item/${props.id}`}><a className='cart-title'>{props.title}</a></Link>
          <span className='cart-size'>SIZE: {props.size}</span>
        </div>
        <span className='cart-price'>{props.price} rub</span>
        <div className='cart-quantity'>
          <button onClick={onRemoveItemHandler}>-</button>
          <span>{props.quantity}</span>
          <button onClick={onAddItemHandler}>+</button>
        </div>
      </div>
      <style jsx>
        {`
          .cart-item {
            display: flex;
            font-weight: bold;
            font-size: 20px;
            justify-content: space-between;
            text-align: center;
            align-items: center;
          }

          .cart-info {
            display: flex;
            flex-direction: column;
            row-gap: 9px;
          }

          .cart-title {
            text-decoration: none;
            color: black;
            width: 410px;
          }
          
          .cart-size {
            color: gray;
          }

          .cart-price {
            color: orange;
          }

          .cart-quantity {
            display: flex;
            gap: 15px;
            align-items: center;
            justify-content: center;
          }
          
          .cart-quantity button {
            cursor: pointer;
            font-size: 20px;
            font-weight: bold;
            border: 1px solid black;
            background: inherit;
            padding: 10px 18px;
            border-radius: 50%;
          }

          .cart-quantity span {
            color: orange;
            font-size: 30px;
          }

          @media screen and (max-width: 768px) {
            .cart-item {
              flex-direction: column;
            }
            .cart-price {
              margin: 7px 0;
            }

          }
          @media screen and (max-width: 400px) {
            .cart-item {
              font-size: 17px;
            }
            .cart-title {
              width: 250px;
            }
            .cart-quantity span {
              font-size: 23px;
            }

            .cart-quantity button {
              font-size: 20px;
              padding: 5px 11px;
            }
          }

          @media screen and (max-width: 270px) {
            .cart-item {
              font-size: 15px;
            }
            .cart-title {
              width: fit-content;
            }
          }
          
        `}
      </style>
    </>
  )
}

export default React.memo(CartItem)
