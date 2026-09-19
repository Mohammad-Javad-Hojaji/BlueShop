import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout/Layout"
import Home from "./pages/Home/Home"
import Product from "./pages/Product/Product"
import Category from "./pages/Category/Category"
import Categories from "./pages/Categories/Categories"
import Products from "./pages/Products/Products"
import Contact from "./pages/Contact/Contact"


function App() {

  return (
    <Layout>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Product />} path="/products/:id" />
        <Route element={<Category />} path="/category/:id" />
        <Route element={<Categories />} path="/categories" />
        <Route element={<Products />} path="/products" />
        <Route element={<Contact />} path="/contact" />
      </Routes>
    </Layout>
  )
}

export default App
