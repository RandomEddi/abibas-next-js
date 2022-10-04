import { Formik, Field, Form } from 'formik'
import Main from '../components/Main'
import Head from 'next/head'
import styles from '../styles/form.module.css'
import { useState } from 'react'
import { useRouter } from 'next/router'

const registration = () => {
  const [passwordIsValid,setPasswordIsValid] = useState(true)
  const router = useRouter()
  const focusHandler = () => {
    setPasswordIsValid(true)
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
            console.log(values)
            if (values.password === values.repetedPassword) {
              setPasswordIsValid(true)
              localStorage.setItem('loggin', values.email)
              router.push('/')
              resetForm()
            } else {
              setPasswordIsValid(false)
            }
        }}
        >
          <Form className={styles.form}>
            <label htmlFor="email">Email Address</label>
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
            <button className={styles.loginBtn} type="submit">Register</button>
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