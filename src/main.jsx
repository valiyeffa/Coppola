import { createRoot } from 'react-dom/client'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import './assets/sass/style.scss'
import 'animate.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <App />
)
