import A from './A'
import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import styles from '../styles/A.module.css'

const Main = (props) => {
  const [isLogged, setIsLogged] = useState(false)
  const router = useRouter()
  useEffect(function() {
    setIsLogged(window.localStorage.getItem('loggin'));
  },[]);

  const logoutHandler = (e) => {
    e.preventDefault()
    localStorage.removeItem('loggin')
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
          <div>
            <A href={'/men'}>MEN</A>
            <A href={'/women'}>WOMEN</A>
            <A href={'/shoes'}>SHOES</A>
          </div>
          <div className='management'>
            {isLogged && <A href='/cart'> &#128722; {localStorage.getItem('loggin').split('@')[0]}</A>}
            {isLogged && <a className={styles.link} href='' onClick={logoutHandler}>LOGOUT</a>}
            {!isLogged && <A href={'/login'}>LOGIN</A>}
          </div>
        </nav>
      </header>
      <main>{props.children}</main>
      <style jsx>
        {`
          .header {
            padding: 0 40px;
            background: black;
            display: flex;
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
            justify-content: space-between;
          }
          .management > a:hover {
            color: rgb(255, 153, 0);
          }
          .navbar > div {
            column-gap: 30px;
            display: flex;
          }
        `}
      </style>
    </>
  )
}

export default Main