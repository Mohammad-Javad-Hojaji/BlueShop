import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout/Layout"
import Home from "./pages/Home/Home"
import Product from "./pages/Product/Product"
import Category from "./pages/Category/Category"


function App() {

  return (
    <Layout>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Product />} path="/products/:id" />
        <Route element={<Category />} path="/category/:id" />
      </Routes>
    </Layout>
  )
}

export default App
