import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Rootlayout from './Layouts/Rootlayout.jsx';
import Home from './Pages/Home.jsx';
import './index.css';
import Products from './Pages/Products.jsx';
import About from './Pages/About.jsx';
import Contact from './Pages/Contact.jsx';
import ProductsDetail from './Pages/ProductsDetail.jsx';
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