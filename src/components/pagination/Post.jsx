import React, { useContext, useEffect, useState } from 'react'
import { TfiReload } from "react-icons/tfi";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addTocart } from '../slice/productSlice';

const Post = ({ allData,categorySearchFilter,multiList }) => {

    
    let [filterShow , setFilterShow] = useState([])
    let[cateShow , setCateShow] = useState (true)
    let dispatch =useDispatch()



    useEffect(()=>{
     let filterAmi = categorySearchFilter.slice(0,5)
     setFilterShow(filterAmi)
    },[categorySearchFilter])
    
    let handleShow = () =>{

        setFilterShow(categorySearchFilter)
        setCateShow(false)
    }

    let handleHide = () =>{
        let filterAmi = categorySearchFilter.slice(0,5)
        setFilterShow(filterAmi)
        setCateShow(true)
    }

    let handlePcart = (item) =>{
        dispatch(addTocart({...item, qun: 1}))
    }
    

    return (
        <>
        {categorySearchFilter.length > 0 ?
        
      <div className="">
         <div className="flex flex-wrap">
        { filterShow .map((item) => (
            <div className='w-[32%] py-5'>
                <Link to={`/product/${item.id}`}>
                    <div className="">
                        <div className="relative group overflow-hidden ">
                            <img src={item.thumbnail} className='h-[350px]' alt="ssss" />
                            <div className="bg-white absolute left-0 h-[130px] duration-300 ease-in-out
                             bottom-[-120px] w-full group-hover:bottom-[0px] flex items-center justify-end">
                                <ul className='pr-5'>
                                    <li className='flex items-center justify-end  gap-x-4'>Add to Wish List <FaHeart /></li>
                                    <li className='flex items-center justify-end gap-x-4 py-2'>Compare <TfiReload /> </li>
                                    <li className='flex items-center justify-end  gap-x-4'>Add to Cart <FaShoppingCart /> </li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex justify-between py-4">
                            <h2 className='font-sans font-bold text-[18px] text-[#262626]'>{item.title}</h2>
                            <p className='font-sans font-bold text-[16px] text-[#767676]'>${item.price}</p>
                        </div>
                    </div>

                </Link>
            </div>
        ))}
       </div>
       {cateShow ? categorySearchFilter.length > 5 &&
         <button onClick={handleShow} className='w-[148px] h-[50px] border-2 text-white bg-[#262626]
         inline-block text-center leading-[50px] font-sans
         font-bold text-[14px]'>Show all</button>
       :
       <button onClick={handleHide} className='w-[148px] h-[50px] border-2  text-white bg-[#262626]
       inline-block text-center leading-[50px] font-sans
       font-bold text-[14px]'>Back</button>
       }

      </div>
        :
        
        <div className= {`${ multiList == "activeList" ? "": "lg:flex justify-between flex-wrap  pl-10" } `}>
         {     allData.map((item) => (
          
          <div className='w-full lg:w-[32%] py-5'>
         
         <div className="">
             <div className="relative group lg:overflow-hidden ">
             <Link to={`/product/${item.id}`}>
                 <img src={item.thumbnail} className='h-[350px]' alt="ssss" />
                 </Link>
                 <div className="bg-white absolute left-0 h-[130px] duration-300 ease-in-out
                  lg:bottom-[-120px] w-full lg:group-hover:bottom-[0px] bottom-[-100px] flex items-center justify-end">
                     <ul className='pr-5'>
                         <li className='flex items-center justify-end  gap-x-4'>Add to Wish List <FaHeart /></li>
                         <li className='flex items-center justify-end gap-x-4 py-2'>Compare <TfiReload /> </li>
                         <li onClick={()=>handlePcart(item)}  className='flex items-center justify-end  gap-x-4'>Add to Cart <FaShoppingCart /> </li>
                     </ul>
                 </div>
             </div>

             <div className="flex justify-between py-4">
                 <h2 className='font-sans font-bold text-[18px] text-[#262626]'>{item.title}</h2>
                 <p className='font-sans font-bold text-[16px] text-[#767676]'>${item.price}</p>
             </div>
         </div>

         </div>
    
      

  ))}
        </div>

        }



          

        </>
    )
}

export default Post