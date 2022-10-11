import { useState, useCallback } from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import Head from 'next/head'
import Size from '../../components/ui/Size'
import Main from '../../components/header/Main'
import { useDispatch } from 'react-redux'
import { addItemToCart } from '../../actions/cartListAction'

const ItemPage = () => {
  const isAuthorized = useSelector(state => state.accounts.authorized)
  const [selectedSize, setSelectedSize] = useState(null)
  const items = useSelector((state) => state.shopList.itemsList)
  const router = useRouter()
  const dispatch = useDispatch()
  const id = router.query.id
  let btnIsDisabled
  let sizes = []
  const item = items.find((i) => i.id === id)
  if (item === undefined) {
    return (
      <>
        <div className='error'>
          <p>Something went wrong.</p>
          <button onClick={() => router.push('/')}>Go back to the main page.</button>
        </div>
        <style jsx>{`
          .error {
            padding: 0 10px;
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            text-align: center;
          }

          .error p {
            font-weight: bold;
            font-size: 30px;

          }
          .error button {
            max-width: 300px;
            cursor: pointer;
            color: white;
            background: black;
            margin-top: 35px;
            border-radius: 20px;
            padding: 20px 30px;
            font-weight: bold;
            font-size: 23px;
          }
        `}</style>
      </>)
  }
  
  const selectSizeHandler = useCallback((size) => {
    setSelectedSize(size)
  }, [])

  if (item.category.includes('shoes')) {
    for (let i = 38; i <= 45; i++) {
      let disabled = !item.avaibleSize.includes(i.toString())
      let isSelected = selectedSize === i
      sizes.push(
        <Size
          key={i}
          onSelect={selectSizeHandler}
          selectedSize={isSelected}
          disabled={disabled}
        >
          {i}
        </Size>
      )
    }
  } else {
    for (let i of ['xs', 'sm', 'md', 'lg', 'xl']) {
      let disabled = !item.avaibleSize.includes(i.toString())
      let isSelected = selectedSize === i
      sizes.push(
        <Size
          key={i}
          onSelect={selectSizeHandler}
          selectedSize={isSelected}
          disabled={disabled}
        >
          {i}
        </Size>
      )
    }

  }

  const addToCartHandler = () => {
    let itemForCart = {
      price: item.price,
      title: item.title,
      size: selectedSize,
      id: item.id
    }
    dispatch(addItemToCart(itemForCart))
  }

  if (isAuthorized && selectedSize !== null) {
    btnIsDisabled = false
  }
  if (selectedSize === null || !isAuthorized) {
    btnIsDisabled = true
  }
  
  return (
    <>
      <Main>
        <div className='current-item'>
          <div className='current-image'>
            <img src={item.imgUrl} alt={item.title} />
          </div>
          <div className='current-info'>
            <h2 className='current-title'>{item.title}</h2>
            <span className='current-price'>{item.price} rub</span>
            <div className='current-sizes'>{sizes}</div>
            {!isAuthorized && <p className='auth'>You must be authorized!</p>}
            <div className='btns'>
              <button
                className='current-btn back-btn'
                onClick={() => router.back()}
              >
                BACK
              </button>
              <button onClick={addToCartHandler} className='current-btn' disabled={btnIsDisabled}>
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </Main>
      <Head>
        <title>{item.title}</title>
      </Head>
      <style jsx>
        {`
          .auth {
            margin-top: 15px;
            font-weight: bold;
            font-size: 20px;
            color: red;
          }

          .btns {
            display: flex;
            margin-top: 30px;
            justify-content: space-between;
          }

          .back-btn {
            color: orange !important;
          }

          .current-item {
            max-width: 70vw;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .current-image {padding-top: 10px;}
          .current-image img {
            height: 650px;
          }

          .current-info {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            text-align: center;
            max-width: 300px;
          }

          .current-title {
            font-size: 20px;
            font-weight: bold;
            margin-bottom: 15px;
          }

          .current-price {
            text-decoration: double;
            color: orange;
            font-size: 18px;
            font-weight: bold;
          }

          .current-sizes {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-top: 15px;
          }

          .current-btn {
            cursor: pointer;
            border-radius: 15px;
            border: 0;
            font-size: 24px;
            font-weight: bold;
            background: black;
            padding: 15px 20px;
            color: white;
          }

          .current-btn:disabled {
            cursor: unset;
            background: gray;
          }

          @media screen and (max-width: 1400px) {
            .current-item {
              max-width: 80vw;
            }
            .current-image img {
              height: 550px;
            }
          }

          @media screen and (max-width: 1024px) {
            .current-item {
              max-width: 90vw;
            }
            .current-image img {
              height: 500px;
            }
          }

          @media screen and (max-width: 860px) {
            .current-item {
              max-width: 97vw;
            }
            .current-image img {
              height: 450px;
            }
          }



          @media screen and (max-width: 768px) {
            .current-item {
              flex-direction: column;
            }
            .current-image img {
              height: 380px;
            }
          }

          @media screen and (max-width: 368px) {
            .current-image img {
              height: 250px;
            }
            .btns {
              flex-direction: column-reverse;
              row-gap: 15px;
            }
          }

          @media screen and (max-width: 265px) {
            .current-image img {
              height: 150px;
            }
          }
        `}
      </style>
    </>
  )
}

export default ItemPage
