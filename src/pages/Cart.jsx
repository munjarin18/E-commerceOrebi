import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import { RxCross2 } from "react-icons/rx";
import cartImage from "../assets/cartsingle.png"
import { useDispatch, useSelector } from 'react-redux';
import { productDecrement, productIncrement, removeProduct } from '../components/slice/productSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';








const Cart = () => {
  let dispatch = useDispatch ()
  let navigate = useNavigate ()
  let data = useSelector((state)=>state.product.cartItem )


  let handleIncrement = (index)=>{
    dispatch(productIncrement(index))
  }

  let handleDecrement = (index)=>{
   dispatch(productDecrement(index))
  }

 let handleRemove = (index) =>{
  dispatch(removeProduct(index))
    console.log(index);
 }
 
 const {totalPrice , totalquantity} = data.reduce((acc , item)=>{
  acc.totalPrice += item.price * item.qun
  acc.totalquantity += item.qun
  return acc
 },{totalPrice:0 , totalquantity:0})

let handleCheckOut = ()=>{
  toast("Wow so easy!");
   setTimeout(()=>{
    navigate("/Checkout")
   },2000)
}



  return (
    <div className="lg:my-20 my-10">
      <Container>
      <h2 className='text-[#262626] font-sans lg:text-[40px] text-[25px] font-bold lg:pl-0 pl-4'>Cart</h2>
      <p className='text-[#262626] font-sans text-[18px] lg:pl-0 pl-4 font-normal'>Home  &#62; Cart</p>
      <Flex className=" lg:my-0 my-2 justify-between bg-[#F5F5F3] h-[60px] items-center ">
      <div className="w-[40%]">
        <h3  className='text-center text-[#262626] font-sans lg:text-[20px] text-[17px] font-bold' > Product </h3>
      </div>
      <div className="w-[15%]">
      <h3 className='text-center text-[#262626] font-sans lg:text-[20px] text-[17px] font-bold'> Price </h3>
      </div>
      <div className="w-[30%]">
      <h3 className='text-center text-[#262626] font-sans lg:text-[20px] text-[17px] font-bold'> Quantity </h3>
      </div>
      <div className="w-[15%]">
      <h3 className='text-center text-[#262626] font-sans lg:text-[20px] text-[17px] font-bold' > Total </h3>
      </div>
      </Flex>
      
      {data.map((item , index)=>
       <Flex className="my-14 items-center">
       <div className="w-[40%]">
         <div className="flex justify-around items-center">
           <div className="" onClick={()=>handleRemove(index)}>
           <RxCross2 />
           </div>
           <div className="">
             <img className='w-[100px] h-[100px]' src={item.thumbnail} alt="cartsingle" />
           </div>
           <div className="">
             <h3 className='text-[#262626] font-sans text-[18px] font-normal'>{item.title} </h3>
           </div>
         </div>
       </div>
       <div className="w-[15%]">
         <h4 className='text-center'>${item.price}</h4>
       </div>
       <div className="w-[30%]">
       <div className="flex w-[150px] h-[50px]  justify-around mx-auto items-center">
             <div className="" onClick={()=> handleDecrement(index)}> - </div>
             <div className=""> {item.qun} </div>
             <div onClick={()=> handleIncrement(index)}  className=""> + </div>
           </div>
       </div>
       <div className="w-[15%]">
         <h4 className='text-center'>${item.price * item.qun}</h4>
       </div>
       </Flex>
      )}

      <div className="flex justify-end">
      <div className="">
     <h2 className='text-[#262626] font-sans text-[22px] font-bold text-end '>Cart totals</h2>
      <div className="flex w-[400px] border-2 border-[#F0F0F0] justify-around">
        <div className="">
          <h3>Subtotal</h3>
        </div>
        <div className="">
          <h3>{totalPrice} $</h3>
        </div>
      </div>
      <div className="flex w-[400px] my-2 border-2 border-[#F0F0F0] justify-around">
        <div className="">
          <h3>Quantity</h3>
        </div>
        <div className="">
        <h3>{totalquantity}</h3>
        </div>
      </div>
      <div className="flex w-[400px] border-2 border-[#F0F0F0] justify-around">
        <div className="">
          <h3>Total</h3>
        </div>
        <div className="">
        <h3>{totalPrice} $</h3>
        </div>
      </div>
      <div className="mt-2" onClick={handleCheckOut}>
        <p className='w-[200px] h-[50px] border-2 text-white bg-[#262626]
            text-center leading-[50px] font-sans
            font-bold text-[14px]'>Proceed to Checkout</p>
      </div>
      </div>
      </div>
      <ToastContainer
      
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      
      />


    </Container>
    </div>
  )
}

export default Cart
