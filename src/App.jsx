import RootLayout from "./components/RootLayout"
import Home from "./pages/Home"
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Product from "./pages/Product"
import ProductDetails from "./pages/ProductDetails"
import Cart from "./pages/Cart"
import Error from "./pages/Error"
import Checkout from "./pages/Checkout"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import MyAccount from "./pages/MyAccount";


let router = createBrowserRouter(createRoutesFromElements(
 <Route element={<RootLayout/>}>
  <Route index element={ <Home/>}></Route>
  <Route path="/product" element={ <Product/>}></Route>
  <Route path="/product/:id" element={ <ProductDetails/>}></Route>
  <Route path="/Cart" element={<Cart/>}></Route>
  <Route path="/Checkout" element={<Checkout/>}></Route>
  <Route path="/About" element={<About/>}></Route>
  <Route path="/Contact" element={<Contact/>}></Route>
  <Route path="/Signup" element={<Signup/>}></Route>
  <Route path="/Login" element={<Login/>}></Route>
  <Route path="/myaccount" element={<MyAccount/>}/>
  <Route path="*" element={<Error />}></Route>
  
  
 </Route> 
))


function App() {


  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
