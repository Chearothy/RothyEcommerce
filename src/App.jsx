import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Rootlayout from './layouts/Rootlayout'
import Home from './page/Home'
import './index.css'
import Products from './page/Products'
import About from './page/About'
import Contact from './page/Contact'
import ProductsDetail from './page/ProductsDetail'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Rootlayout/>}>
        <Route index element={<Home/>}/><Route />
        <Route path="products" element={<Products/>} />
        <Route path="about" element={<About/>} />
        <Route path="contact" element={<Contact/>} />
        <Route path="products/:id" element={<ProductsDetail/>} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App