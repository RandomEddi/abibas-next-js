import A from '../ui/A'
import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import styles from '../../styles/A.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { logoutAccount, loginAccount } from '../../actions/accountsAction'
import { fetchAccounts } from '../../actions/accountsAction'

const Main = (props) => {
  const router = useRouter()
  const dispatch = useDispatch()
  const accountInfo = useSelector(state => state.accounts)
  const accountList = accountInfo.accountsList
  function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }
  
  useEffect(() => {
    dispatch(fetchAccounts())
  }, [])

  useEffect(function() {
    const accId = getCookie('user')
    if (accId !== undefined) {
      for (const acc of accountList) {
        if (acc.id === accId) {
          dispatch(loginAccount(acc))
          break
        } 
      }
    }
  }, [accountList]);

  const logoutHandler = (e) => {
    e.preventDefault()
    dispatch(logoutAccount())
    router.push('/login')
  }

  return (
    <>
      <Head>
        <link rel="icon" href="/icon.jpg" />
      </Head>
      
      <header className='header'>
        <div className="logo">
          <Link href={'/'}>
            <a>
              <img src='/logo.png'></img>
            </a>
          </Link>
        </div>
        <nav className='navbar'>
          <div className='categories'>
            <A href={'/men'}>MEN</A>
            <A href={'/women'}>WOMEN</A>
            <A href={'/shoes'}>SHOES</A>
          </div>
          <div className='management'>
            {accountInfo.authorized && <A href='/cart'><div><span>&#128722;</span><span>{accountInfo.currAccount.email.split('@')[0]}</span></div></A>}
            {accountInfo.authorized && <a className={styles.link} href='' onClick={logoutHandler}>LOGOUT</a>}
            {!accountInfo.authorized && <A href={'/login'}>LOGIN</A>}
          </div>
        </nav>
        {/*TODO: Сделать мобильный навбар */}
        {/* <nav class="mobile-navbar">
          <div class="options">
            <A href={'/men'}>MEN</A>
            <A href={'/women'}>WOMEN</A>
            <A href={'/shoes'}>SHOES</A>
          </div>
        </nav> */}
      </header>
      <main>{props.children}</main>
      <style jsx>
        {`
          .header {
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
            width:100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }

          .management {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }

          .management span:hover {
            color: rgb(255, 153, 0);
          }
          
          .navbar > div {
            column-gap: 30px;
            display: flex;
          }
          .mobile-navbar {
            display: none;
          }
          @media screen and (max-width: 768px) {
            .navbar {
              display: none;
            }
            
          }

        `}
      </style>
    </>
  )
}

export default Main