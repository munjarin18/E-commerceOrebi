import React, { useContext } from 'react'
import { TfiReload } from "react-icons/tfi";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Post = ({ allData }) => {

    return (
        <>
            {allData.map((item) => (


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

        </>
    )
}

export default Post