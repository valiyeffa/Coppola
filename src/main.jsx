import { createRoot } from 'react-dom/client'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../src/assets/sass/style.scss'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './tools/store.js'
import { CartProvider } from 'react-use-cart'
import { WishlistProvider } from 'react-use-wishlist'

createRoot(document.getElementById('root')).render(
  <CartProvider>
    <WishlistProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </WishlistProvider>
  </CartProvider >
)
