import { BrowserRouter, Link, Route, Routes, Navigate } from 'react-router-dom'
import { useState } from 'react'

// pages
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'

function App() {
  const [cartIsEmpty] = useState(false)

  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>The Ninja Clothing Company</h1>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/*" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id/*" element={<ProductDetails />} />
          <Route path="/test" element={(
            <div>
              <h2>test page</h2>
              <p>hello</p>
            </div>
          )} />
          <Route path='/redirect' element={<Navigate to="/about" />} />
          <Route
            path='/checkout'
            element={cartIsEmpty ? <Navigate to="/products" /> : <div>Checkout</div>}
          />
        </Routes>
      </BrowserRouter>
    </div >
  )
}

export default App