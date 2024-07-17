import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import Flex from '../components/Flex';
import Pdetails from "../assets/pdetails.png"
import Container from '../components/Container';
import { FaStar , FaRegStarHalfStroke , FaRegStar } from "react-icons/fa6";
import Faccordian from '../components/Faccordian';
import { BiLogoAmazon } from 'react-icons/bi';
import{ addTocart } from "../components/slice/productSlice";



const ProductDetails = () => {
    let [sigleData, setSingleData ] = useState ([]);
    let ProductId= useParams();
    let dispatch =  useDispatch();
    
 

    let getData = () =>{
        axios.get(`https://dummyjson.com/products/${ProductId.id}`).then((response)=>{
            setSingleData(response.data);
            console.log(response.data);
        })
    }
    
    useEffect(()=>{
      getData()
    },[])
    

    let clientRating = Array.from({length:5},(elm,index)=>{
      let ratingNumber = index + 0.5
      return(
        sigleData.rating > index + 1 ? <FaStar className='text-[#FFD881]' /> : sigleData.rating > ratingNumber ?<FaRegStarHalfStroke /> : <FaRegStar />

      )
    })

    console.log(clientRating);
   
    let handleAddTocart = (item) =>{
    dispatch(addTocart ({...item,qun:1}))


    }


  return (
     <div className="">
     <Container>
     <Flex className="flex-wrap justify-between">
      {sigleData?.images?.map((item)=>(
        <div className="lg:w-[48%] w-[50%] my-4">
         <img src={item} alt="Pdetails" />
        </div>
       ))}
    
        </Flex>
        <div className="">
          <h3 className='text-[#262626] lg:pl-0 pl-4 font-sans lg:text-[20px] font-bold'>Product</h3>
          <div className="flex items-center my-4 lg:pl-0 pl-4">
          {clientRating}
          <div className="lg:pl-3 pl-3">
            <span> Review</span>
          </div>
          </div>
          <h3 className='text-[#262626] font-sans lg:pl-0 pl-4 lg:text-[20px] font-bold'>${sigleData.price}</h3>
          {/* <div className="flex items-center">
            <div className="mr-2">
              <h3 className='text-[#262626] font-sans text-[20px] lg:text-[20px] font-normal'>QUANTITY :</h3>
            </div>
            <div className="flex w-[150px] h-[50px] border-2 border-[#262626] justify-around items-center">
              <div className=""> - </div>
              <div className=""> 0 </div>
              <div className=""> + </div>
            </div>
          </div>
          <div className="flex items-center gap-x-6 py-6 border-b-[1px] border-[#262626]">
            <h3 className='text-[#262626] font-sans text-[20px] lg:text-[20px] font-normal'>STATUS :</h3>
            <h4>0</h4>
          </div> */}
          <div className="my-8">
            <a className='lg:py-[16px] py-4 lg:px-[45px] px-4 border-2 border-[#262626] inline-block hover:bg-[#262626] hover:text-white cursor-pointer duration-300 ease-in-out'>Add to Wish List</a>
            <Link to="/Cart" onClick={()=>handleAddTocart(sigleData)} >
            
            <a  className='py-[16px] px-[45px] border-2 border-[#262626] inline-block hover:bg-[#262626] hover:text-white cursor-pointer ms-4 duration-300 ease-in-out'>Add to Cart</a>

            </Link>
           
          </div>


          
    <Faccordian/>




        

        </div>
    </Container>
     </div>
  )
}

export default ProductDetails