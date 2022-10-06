import '../styles/global.css'
import { wrapper } from '../redux/index'
import { Provider } from 'react-redux'

function MyApp({ Component, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest)
  return (
    <Provider store={store}>
      <Component {...props.pageProps} />
    </Provider>
  )
}

export default MyApp
