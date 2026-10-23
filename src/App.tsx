import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout/Layout"
import Home from "./pages/Home/Home"
import Product from "./pages/Product/Product"
import Category from "./pages/Category/Category"
import Categories from "./pages/Categories/Categories"
import Products from "./pages/Products/Products"
import Contact from "./pages/Contact/Contact"
import NotFound from "./pages/NotFound/NotFound"
import { ShoppingCartContextProvider } from "./context/ShoppingCartItems"
import Cart from "./pages/Cart/Cart"
import Login from "./pages/Login/Login"
import { AccountShopProvider, useAccountShop } from "./context/AccountShop"
import LogicLogin from "./components/LogicLogin/LogicLogin"
import PrivateRoute from "./components/PrivateRoute/PrivateRoute"



function App() {
  const { isLogin } = useAccountShop()
  console.log(isLogin);

  return (

    <Layout>
      <Routes>
        <Route element={<LogicLogin />} >
          <Route element={<Login />} path="/login" />
        </Route>

        <Route element={<Home />} path="/" />
        <Route element={<Product />} path="/products/:id" />
        <Route element={<Category />} path="/category/:id" />
        <Route element={<Categories />} path="/categories" />
        <Route element={<Products />} path="/products" />
        <Route element={<Contact />} path="/contact" />
        <Route element={<NotFound />} path="*" />
        <Route element={<PrivateRoute />}>
          <Route element={<Cart />} path="/cart" />
        </Route>
      </Routes>
    </Layout>

  )
}

export default App
