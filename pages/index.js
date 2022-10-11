import Head from 'next/head'
import Main from '../components/header/Main'
import { useSelector } from 'react-redux'
import Container from '../components/ui/Container'
import ShopItem from '../components/shop/ShopItem'

export default function Home() {
  const shopItems = useSelector(state => state.shopList.itemsList).sort((i, j) => {return i.category.includes('shoes') - j.category.includes('shoes')})
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
