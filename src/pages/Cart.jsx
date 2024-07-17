import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import { RxCross2 } from "react-icons/rx";
import cartImage from "../assets/cartsingle.png"
import { useDispatch, useSelector } from 'react-redux';
import { productIncrement } from '../components/slice/productSlice';








const Cart = () => {
  let dispatch = useDispatch ()
  let data = useSelector((state)=>state.product.cartItem )


  let handleIncrement = (index)=>{
    dispatch(productIncrement(index))
  }
 

  return (
    <div className="my-20">
      <Container>
      <h2 className='text-[#262626] font-sans text-[40px] font-bold'>Cart</h2>
      <p className='text-[#262626] font-sans text-[18px] font-normal'>Home  &#62; Cart</p>
      <Flex className="justify-between bg-[#F5F5F3] h-[60px] items-center">
      <div className="w-[40%]">
        <h3  className='text-center text-[#262626] font-sans text-[20px] font-bold' > Product </h3>
      </div>
      <div className="w-[15%]">
      <h3 className='text-center text-[#262626] font-sans text-[20px] font-bold'> Price </h3>
      </div>
      <div className="w-[30%]">
      <h3 className='text-center text-[#262626] font-sans text-[20px] font-bold'> Quantity </h3>
      </div>
      <div className="w-[15%]">
      <h3 className='text-center text-[#262626] font-sans text-[20px] font-bold' > Total </h3>
      </div>
      </Flex>
      
      {data.map((item , index)=>
       <Flex className="my-14 items-center">
       <div className="w-[40%]">
         <div className="flex justify-around items-center">
           <div className="">
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
             <div className=""> - </div>
             <div className=""> {item.qun} </div>
             <div onClick={()=> handleIncrement(index)}  className=""> + </div>
           </div>
       </div>
       <div className="w-[15%]">
         <h4 className='text-center'>$44.00</h4>
       </div>
       </Flex>
      
      )}

    </Container>
    </div>
  )
}

export default Cart
