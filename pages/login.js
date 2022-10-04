import { Formik, Field, Form } from 'formik'
import Head from "next/head"
import Main from "../components/Main"
import styles from '../styles/form.module.css'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Login = () => {
  const router = useRouter()
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
        onSubmit={(values, {resetForm}) => {
          console.log(values)
          localStorage.setItem('loggin', values.email)
          router.push('/')
          resetForm()
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
            <label htmlFor="password">Password</label>
            <Field
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              />
            <Link href={'/registration'}>
              <a className='registration'>
                If you dont have account
              </a>
            </Link>
            <button className={styles.loginBtn} type="submit">Login</button>
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

          .registration:hover {
            color: rgb(168, 168, 168);
          }
        `}
      </style>
    </>
  )
}

export default Login