import Head from 'next/head'
import Main from '../components/header/Main'
import { useSelector } from 'react-redux'
import Container from '../components/ui/Container'
import ShopItem from '../components/shop/ShopItem'
import { useRouter } from 'next/router'
import Loading from '../components/ui/Loading'

export default function Men() {
  const shopItems = useSelector(state => state.shopList.itemsList)
  const router = useRouter()
  const type = router.pathname.replace(/\//gi, '')
  const pageItems = shopItems.filter(a => a.category.includes(type)).sort((i, j) => {return i.category.includes('shoes') - j.category.includes('shoes')})
  const isLoading = useSelector(state => state.loading.itemsLoading)
  
  return (
    <>
      <Head>
        <title>Adidas Men</title>
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
