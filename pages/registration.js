import { Formik, Field, Form } from 'formik'
import Main from '../components/header/Main'
import Head from 'next/head'
import styles from '../styles/form.module.css'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { addAccount } from '../actions/accountsAction'
import Loading from '../components/ui/Loading'

const registration = () => {
  const [passwordIsValid,setPasswordIsValid] = useState(true)
  const [sameEmail, setSameEmail] = useState(false)
  const router = useRouter()
  const dispatch = useDispatch()
  const accountsList = useSelector(state => state.accounts.accountsList)
  const isLoading = useSelector(state => state.loading.regLoading)

  const focusHandler = () => {
    setPasswordIsValid(true)
    setSameEmail(false)
  }
  
  return (
    <>
    <Head>
      <title>Registration</title>
    </Head>
    <Main>
      <Formik
          initialValues={{
            email: '', 
            password: '',
            repetedPassword: '',
          }}
          onSubmit={(values, {resetForm}) => {
            for (const acc of accountsList) {
              if (acc.email === values.email) {
                setSameEmail(true)
                return
              }
            }
            if (values.password === values.repetedPassword) {
              dispatch(addAccount(values))
              document.cookie = `user=${values.email}`
              setPasswordIsValid(true)
              router.push('/')
              resetForm()
            } else {
              setPasswordIsValid(false)
            }
        }}
        >
          <Form className={styles.form}>
            {!sameEmail && <label htmlFor="email">Email Address</label>}
            {sameEmail && <label className='invalid' htmlFor="email">The email is already registered</label>}
            <Field
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              />
            {passwordIsValid && <label htmlFor="password">Password</label>}
            {!passwordIsValid && <label htmlFor="password" className='invalid'>Password must be same</label>}
            <Field
              onFocus={focusHandler}
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              />
            <Field
              onFocus={focusHandler}
              id="repetedPassword"
              name="repetedPassword"
              type="password"
              placeholder="Repeat your password"
              />
            {!isLoading && <button className={styles.loginBtn} type="submit">Register</button>}
            {isLoading && <Loading id="2"/>}
          </Form>
        </Formik>
    </Main>
    <style jsx>
      {`
      .invalid {
        color: red;
      }
      input.invalid:placeholder {
        color: red;
      }
      `}
    </style>
  </>
  )
}

export default registration