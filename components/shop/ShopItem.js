import Link from 'next/link'
import React from 'react'

const ShopItem = (props) => {
  const { title, imgUrl, price, id } = props.props
  return (
    <>
      <div className='item'>
        <Link href={'item/' + id}>
          <a className='shop-item'>
            <img className='item-image' src={imgUrl} alt={title} />
            <span className='item-price'>{price} rub</span>
            <p className='item-title'>{title}</p>
          </a>
        </Link>
      </div>

      <style jsx>
        {`
          .item {
            display: inline-block;
            width: 340px;
          }

          .shop-item {
            position: relative;
            display: flex;
            flex-direction: column;
            text-decoration: none;
            justify-content: center;
            align-items: center;
            color: black;
            text-align: center;
          }

          .item-price {
            font-weight: bold;
          }

          .item-image {
            height: 240px;
          }
          @media screen and (max-width: 270px) {
            .item-image {
              height: 180px;
            }
          }
        `}
      </style>
    </>
  )
}

export default React.memo(ShopItem)
