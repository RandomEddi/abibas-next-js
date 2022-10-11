import { Formik, Field, Form } from 'formik'
import Head from 'next/head'
import Main from '../components/header/Main'
import styles from '../styles/form.module.css'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginAccount } from '../actions/accountsAction'

const Login = () => {
  const [formIsValid, setFormIsValid] = useState(true)
  const router = useRouter()
  const dispatch = useDispatch()
  const accounts = useSelector((state) => state.accounts.accountsList)
  
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <Main>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          onSubmit={(values, { resetForm }) => {
            for (const acc of accounts) {
              if (
                values.email.toLowerCase() === acc.email &&
                values.password === acc.password
              ) {
                setFormIsValid(true)
                dispatch(loginAccount(acc))
                router.push('/')
                resetForm()
                return
              } else {
                setFormIsValid(false)
              }
            }
          }}
        >
          <Form className={styles.form}>
            <label htmlFor='email'>Email Address</label>
            <Field id='email' name='email' type='email' placeholder='Email' />
            {formIsValid &&<label htmlFor='password'>Password</label>}
            {!formIsValid &&<label className='invalid' htmlFor='password'>Password or Email Addres is wrong</label>}
            <Field
              id='password'
              name='password'
              type='password'
              placeholder='Password'
            />
            <Link href={'/registration'}>
              <a className='registration'>If you dont have account</a>
            </Link>
            <button className={styles.loginBtn} type='submit'>
              Login
            </button>
          </Form>
        </Formik>
      </Main>
      <style jsx>
        {`
          .registration {
            margin-top: 10px;
            text-decoration: none;
            font-weight: bold;
            color: black;
            font-size: 20px;
          }

          .invalid {
            color: red;
          }

          .registration:hover {
            color: rgb(168, 168, 168);
          }
        `}
      </style>
    </>
  )
}

export default Login
