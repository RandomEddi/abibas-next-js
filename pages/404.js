import Main from "../components/Main"
import Head from "next/head"

export default function Error() {
  return (
    <>
      <Head>
        <title>Not Found</title>
      </Head>
      <Main>
        <h1 className="erorPage">
          Ошибка 404 такой страницы не существует.
        </h1>
      </Main>
      <style jsx>
        {`
          .erorPage {
            margin-top: 30px;
            text-align: center;
          }
        `}
      </style>
    </>
  )
};