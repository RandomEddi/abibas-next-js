import Head from 'next/head'
import Main from '../components/header/Main'
import { useSelector } from 'react-redux'
import Container from '../components/ui/Container'
import ShopItem from '../components/shop/ShopItem'

export default function Home() {
  const shopItems = useSelector(state => state.shopList.itemsList)
  return (
    <>
      <Head>
        <title>Adidas</title>
      </Head>
      <Main>
        <Container>
          {shopItems.map(item => <ShopItem key={item.id} props={item} />)}
        </Container>
      </Main>
    </>
  )
}
