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


let router = createBrowserRouter(createRoutesFromElements(
 <Route element={<RootLayout/>}>
  <Route index element={ <Home/>}></Route>
  <Route path="/product" element={ <Product/>}></Route>
  <Route path="/product/:id" element={ <ProductDetails/>}></Route>
  <Route path="/Cart" element={<Cart/>}></Route>
  <Route path="/Checkout" element={<Checkout/>}></Route>
  <Route path="/About" element={<About/>}></Route>
  <Route path="/Contact" element={<Contact/>}></Route>
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
