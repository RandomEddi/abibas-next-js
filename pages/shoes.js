import Head from 'next/head'
import Main from '../components/header/Main'
import { useSelector } from 'react-redux'
import Container from '../components/ui/Container'
import ShopItem from '../components/shop/ShopItem'
import { useRouter } from 'next/router'
import Loading from '../components/ui/Loading'

export default function Shoes() {
  const router = useRouter()
  const shopItems = useSelector(state => state.shopList.itemsList)
  const type = router.pathname.replace(/\//gi, '')
  const pageItems = shopItems.filter(a => a.category.includes(type))
  const isLoading = useSelector(state => state.loading.itemsLoading)
  return (
    <>
      <Head>
        <title>Adidas Shoes</title>
      </Head>
      <Main>
        <Container>
          {isLoading && <Loading id="1" />}
          {!isLoading && pageItems.map(item => <ShopItem key={item.id} props={item} />)}
        </Container>
      </Main>
    </>
  )
}
