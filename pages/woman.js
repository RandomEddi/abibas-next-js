import Head from 'next/head'
import Main from '../components/header/Main'
import { useSelector } from 'react-redux'
import Container from '../components/ui/Container'
import ShopItem from '../components/shop/ShopItem'
import { useRouter } from 'next/router'

export default function Woman() {
  const shopItems = useSelector(state => state.shopList.itemsList)
  const router = useRouter()
  const type = router.pathname.replace(/\//gi, '')
  const pageItems = shopItems.filter(a => a.category.includes(type))
  return (
    <>
      <Head>
        <title>Adidas Woman</title>
      </Head>
      <Main>
        <Container>{pageItems.map(item => <ShopItem key={item.id} props={item} />)}</Container>
      </Main>
    </>
  )
}
