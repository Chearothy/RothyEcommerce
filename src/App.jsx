import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Rootlayout from './layouts/Rootlayout.jsx';
import Home from './page/Home.jsx';
import './index.css';
import Products from './page/Products.jsx';
import About from './page/About.jsx';
import Contact from './page/Contact.jsx';
import ProductsDetail from './page/ProductsDetail.jsx';
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