import A from '../ui/A'
import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import styles from '../../styles/A.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { logoutAccount, loginAccount } from '../../actions/accountsAction'
import { fetchAccounts } from '../../actions/accountsAction'
import { setShopItems } from '../../actions/shopListAction'

const Main = (props) => {
  const router = useRouter()
  const dispatch = useDispatch()
  const accountInfo = useSelector((state) => state.accounts)
  const accountList = accountInfo.accountsList
  function getCookie(name) {
    let matches = document.cookie.match(
      new RegExp(
        '(?:^|; )' +
          name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') +
          '=([^;]*)'
      )
    )
    return matches ? decodeURIComponent(matches[1]) : undefined
  }

  useEffect(() => {
    if (!accountList.length) {
      dispatch(fetchAccounts())

    }
    const test = [
      {
        imgUrl: 'https://static.street-beat.ru/upload/iblock/0c6/0c6267f0dc8a52448cab2d81a1f3319e.jpg',
        price: 17999,
        title: 'Мужские кроссовки adidas Originals Ozweego',
        category: ['man', 'shoes'],
        avaibleSize: ['39', '40', '41', '42'],
        id: '1'
      },
      {
        imgUrl: 'https://static.street-beat.ru/upload/iblock/0c6/0c6267f0dc8a52448cab2d81a1f3319e.jpg',
        price: 17999,
        title: 'Мужские кроссовки adidas Originals Ozweego',
        category: ['man', 'shoes'],
        avaibleSize: ['39', '40', '41', '42'],
        id: '2'
      },
      {
        imgUrl: 'https://static.street-beat.ru/upload/iblock/0c6/0c6267f0dc8a52448cab2d81a1f3319e.jpg',
        price: 17999,
        title: 'Мужские кроссовки adidas Originals Ozweego',
        category: ['man', 'shoes'],
        avaibleSize: ['39', '40', '41', '42'],
        id: '3'
      },
      {
        imgUrl: 'https://static.street-beat.ru/upload/iblock/0c6/0c6267f0dc8a52448cab2d81a1f3319e.jpg',
        price: 17999,
        title: 'Мужские кроссовки adidas Originals Ozweego',
        category: ['man', 'shoes'],
        avaibleSize: ['39', '40', '41', '42'],
        id: '4'
      },
      {
        imgUrl: 'https://static.street-beat.ru/upload/iblock/0c6/0c6267f0dc8a52448cab2d81a1f3319e.jpg',
        price: 17999,
        title: 'Мужские кроссовки adidas Originals Ozweego',
        category: ['man', 'shoes'],
        avaibleSize: ['39', '40', '41', '42'],
        id: '5'
      },
      {
        imgUrl: 'https://static.street-beat.ru/upload/iblock/0c6/0c6267f0dc8a52448cab2d81a1f3319e.jpg',
        price: 17999,
        title: 'Мужские кроссовки adidas Originals Ozweego',
        category: ['woman', 'shoes'],
        avaibleSize: ['39', '40', '41', '42'],
        id: '6'
      },
      {
        imgUrl: 'https://static.street-beat.ru/upload/iblock/0c6/0c6267f0dc8a52448cab2d81a1f3319e.jpg',
        price: 17999,
        title: 'Мужские кроссовки adidas Originals Ozweego',
        category: ['woman', 'shoes'],
        avaibleSize: ['39', '40', '41', '42'],
        id: '7'
      },
      {
        imgUrl: 'https://static.street-beat.ru/upload/resize_cache/iblock/034/500_500_1/0346fdafff73114de2016f9b0da2deee.jpg',
        price: 14999,
        title: 'Женские кроссовки adidas Originals Astir',
        category: ['woman', 'shoes'],
        avaibleSize: ['38', '41', '42'],
        id: '8'
      },
      {
        imgUrl: 'https://static.street-beat.ru/upload/resize_cache/iblock/bcb/500_500_1/bcb4256bf372825aaa1e5242bde7a8bf.jpg',
        price: 10999,
        title: 'Женская худи adidas Originals Graphic Hoodie',
        category: ['woman'],
        avaibleSize: ['38', '41', '42'],
        id: '9'
      },
    ]
    
    dispatch(setShopItems(test))
  }, [])

  useEffect(
    function () {
      const accId = getCookie('user')
      if (accId !== undefined) {
        for (const acc of accountList) {
          if (acc.id === accId) {
            dispatch(loginAccount(acc))
            break
          }
        }
      }
    },
    [accountList]
  )

  function menuOpenHandler() {
    document.querySelector('.nav-menu').classList.toggle('open')
    document.querySelector('.pop-up').classList.toggle('active')
  }

  function menuCloseHandler() {
    document.querySelector('.nav-menu').classList.toggle('open')
    document.querySelector('.pop-up').classList.toggle('active')
  }

  const logoutHandler = (e) => {
    e.preventDefault()
    dispatch(logoutAccount())
    router.push('/login')
  }

  return (
    <>
      <Head>
        <link rel='icon' href='/icon.jpg' />
      </Head>
      <div className='pop-up'>
        <nav>
          <A href={'/man'}>MAN</A>
          <A href={'/woman'}>WOMAN</A>
          <A href={'/shoes'}>SHOES</A>
          {accountInfo.authorized && (
            <A href='/cart'>
              <div className='account-info'>
                <span>{accountInfo.currAccount.email.split('@')[0]}</span>
              </div>
            </A>
          )}
          {accountInfo.authorized && (
            <a className={styles.link} href='' onClick={logoutHandler}>
              LOGOUT
            </a>
          )}
          {!accountInfo.authorized && <A href={'/login'}>LOGIN</A>}
        </nav>
        <div className='close' onClick={menuCloseHandler}>
          <span></span>
          <span></span>
        </div>
      </div>
      <header className='header'>
        <div className='logo'>
          <Link href={'/'}>
            <a>
              <img src='/logo.png'></img>
            </a>
          </Link>
        </div>
        <nav className='navbar'>
          <div className='categories'>
            <A href={'/man'}>MAN</A>
            <A href={'/woman'}>WOMAN</A>
            <A href={'/shoes'}>SHOES</A>
          </div>
          <div className='management'>
            {accountInfo.authorized && (
              <A href='/cart'>
                <div>
                  <span>&#128722;</span>
                  <span>{accountInfo.currAccount.email.split('@')[0]}</span>
                </div>
              </A>
            )}
            {accountInfo.authorized && (
              <a className={styles.link} href='' onClick={logoutHandler}>
                LOGOUT
              </a>
            )}
            {!accountInfo.authorized && <A href={'/login'}>LOGIN</A>}
          </div>
        </nav>
        <div className='nav-menu' onClick={menuOpenHandler}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>
      <main>{props.children}</main>
      <style jsx>
        {`
          .header {
            max-height: 100px;
            padding: 0 40px;
            background: black;
            display: flex;
            justify-content: space-between;
            position: relative;
            top: 0;
            left: 0;
            bottom: 0;
            align-items: center;
          }

          .logo img {
            width: 50%;
          }

          .navbar {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }

          .management {
            display: flex;
            align-items: center;
            justify-content: space-between;
            text-align: center;
          }

          .management div span:first-of-type {
            // padding-bottom: 3px;
          }

          .management span:hover {
            color: rgb(255, 153, 0);
          }
          .management div {
            display: flex;
          }

          .navbar > div {
            column-gap: 30px;
            display: flex;
          }

          .nav-menu {
            display: none;
          }

          .pop-up {
            display: none;
          }

          @media screen and (max-width: 768px) {
            .navbar {
              display: none;
            }

            .nav-menu {
              background: inherit;
              display: flex;
              flex-direction: column;
              row-gap: 3px;
            }

            .nav-menu span {
              background: white;
              height: 4px;
              width: 30px;
            }

            .pop-up {
              position: fixed;
              top: 0;
              left: 0;
              right: 0;
              z-index: 100;
              display: block;
              background: rgba(0, 0, 0, 0.9);
              padding: 25px;
              transform: translateY(-100%);
              transition: all 1s;
            }

            .close {
              position: absolute;
              top: 45px;
              right: 65px;
              display: flex;
              flex-direction: column;
              row-gap: 3px;
            }

            .close span {
              position: absolute;
              background: white;
              height: 4px;
              width: 30px;
            }

            .close span:first-of-type {
              transform: rotate(45deg);
            }

            .close span:last-of-type {
              transform: rotate(-45deg);
            }

            .nav-menu.open {
              display: none;
            }

            .pop-up.active {
              transform: translateY(0);
            }

            .pop-up nav {
              display: flex;
              flex-direction: column;
              justify-align: center;
              align-items: center;
              row-gap: 20px;
            }
          }

          @media screen and (max-width: 814px) {
            .management div span:first-of-type {
              display: none;
            }
          }

          @media screen and (max-width: 260px) {
            .close {
              top: 38px;
              right: 60px;
            }
            .close span {
              width: 20px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Main