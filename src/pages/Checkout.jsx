import React from 'react'
import Container from '../components/Container'
import { Link } from 'react-router-dom'

const CheckOut = () => {
  return (
    <Container className="px-3">
        <div className=" pt-[30px]">
                    <div className="">
                        <h3 className='font-dmsans text-[49px] font-bold text-[#262626]'>Cart</h3>
                        <p className='font-dmsans text-[12px] font-normal text-[#767676] flex items-center'> 
                            <Link className='me-2' to="/">Home</Link>
                             &gt; <Link className='ms-2' to="/checkout">Checkout</Link> </p>
                    </div>
        </div>
    
    <div className=" mt-14">
        <h3 className='font-dmsans text-[16px] font-normal text-[#767676]'>
            Have a coupon? 
        <span className='text-[#262626]'>Click here to enter your code</span></h3>
    </div>


        <div className="mt-20 lg:w-[70%] w-full">
            <div className=""><h3 className='font-dmsans text-[39px] font-bold text-[#262626]'>Billing Details</h3></div>


        <div className=" flex justify-between mt-6">
            <div className=" border-b-2 border-[#F0F0F0] w-[50%] h-[70px] items-center flex">
                <div className="">
                    <h3 
                    className='font-dmsans text-[16px] font-bold text-[#262626] leading-[23px]'>First Name*</h3>

                    <input 
                    type="text" 
                    placeholder='First Name' 
                    required
                    className=' border-none hover:border-none outline-none font-dmsans text-[14px] font-normal text-[#767676]' />
                </div>
            </div>
            
            <div className=" border-b-2 border-[#F0F0F0] w-[45%] h-[70px] items-center flex">
                <div className="">
                    <h3 className='font-dmsans text-[16px] font-bold text-[#262626] leading-[23px]'>Last Name*</h3>

                    <input 
                    type="text" 
                    placeholder='Last Name' 
                    required
                    className=' border-none hover:border-none outline-none font-dmsans text-[14px] font-normal text-[#767676]'                     
                    />
                </div>
            </div>
        </div>


        <div className=" border-b-2 border-[#F0F0F0] h-[70px] items-center flex" >
            <div className="">
                <h3 className='font-dmsans text-[16px] font-bold text-[#262626] leading-[23px]'>Companye Name (optional)</h3>
                <input 
                type="text" 
                placeholder='Company Name' 
                required
                className='outline-none font-dmsans text-[14px] font-normal text-[#767676]'                
                />
            </div>
        </div>


        <div className=" border-b-2 border-[#F0F0F0] h-[70px] items-center flex" >
            <div className="">
                <div className="">
                    <h3 className='font-dmsans text-[16px] font-bold text-[#262626] leading-[23px]'>Country *</h3>
                </div>

                <label className="w-full">
                <select className='outline-none' required>
                    <option 
                    selected="" 
                    className='font-dmsans text-[14px] font-normal text-[#767676]'>Please select</option>

                    <option 
                    value="US" 
                    className='font-dmsans text-[16px] font-normal text-[#767676] leading-[30px]'>S</option>

                    <option 
                    value="CA" 
                    className='font-dmsans text-[16px] font-normal text-[#767676] leading-[30px]'>M</option>

                    <option 
                    value="FR" 
                    className='font-dmsans text-[16px] font-normal text-[#767676] leading-[30px]'>L</option>

                    <option 
                    value="DE" 
                    className='font-dmsans text-[16px] font-normal text-[#767676] leading-[30px]'>XL</option>

                    <option 
                    value="DE" 
                    className='font-dmsans text-[16px] font-normal text-[#767676] leading-[30px]'>XXL</option>

                </select>
                </label>
            </div>
        </div>

        <div className=" border-b-2 border-[#F0F0F0] h-[70px] items-center">
                <div className="w-full">
                    <h3 className='font-dmsans text-[16px] font-bold text-[#262626] leading-[23px]'>Street Address *</h3>
                    <input 
                    type="text" 
                    placeholder='House number and street name' 
                    required
                    className=' outline-none font-dmsans text-[14px] font-normal text-[#767676] w-full border-b-2 border-[#F0F0F0]'                    
                    />
                </div>

                    <div className="items-center">
                    <input 
                    type="text" 
                    placeholder='Apartment, suite, unit etc. (optional)'
                    className='  outline-none font-dmsans text-[14px] font-normal text-[#767676] w-full border-b-2 border-[#F0F0F0] py-3 '                     
                    />
                    </div>
        </div>


        <div className=" border-b-2 border-[#F0F0F0] h-[70px] items-center flex mt-6">
                <div className="w-full">
                    <h3 className='font-dmsans text-[16px] font-bold text-[#262626] leading-[23px]'>Town/City *</h3>
                    <input 
                    type="text" 
                    placeholder='Town/City' 
                    required
                    className=' outline-none font-dmsans text-[14px] font-normal text-[#767676] w-full' 
                    />
                </div>
        </div>

        <div className=" border-b-2 border-[#F0F0F0] h-[70px] items-center flex ">
                <div className="w-full">
                    <h3 className='font-dmsans text-[16px] font-bold text-[#262626] leading-[23px]'>County (optional)</h3>
                    <input 
                    type="text" 
                    placeholder='County'
                    className=' outline-none font-dmsans text-[14px] font-normal text-[#767676] w-full' 
                 />
                </div>
        </div>

        <div className=" border-b-2 border-[#F0F0F0] h-[70px] items-center flex ">
                <div className="w-full">
                    <h3 className='font-dmsans text-[16px] font-bold text-[#262626] leading-[23px]'>Post Code *</h3>
                    <input 
                    type="text" 
                    placeholder='Post Code' 
                    required
                    className=' outline-none font-dmsans text-[14px] font-normal text-[#767676] w-full' 
               />
                </div>
        </div>

        <div className=" border-b-2 border-[#F0F0F0] h-[70px] items-center flex ">
                <div className="w-full">
                    <h3 className='font-dmsans text-[16px] font-bold text-[#262626] leading-[23px]'>Phone *</h3>
                    <input 
                    type="tel" 
                    placeholder='Phone' 
                    required
                    className=' outline-none font-dmsans text-[14px] font-normal text-[#767676] w-full' 
                />
                </div>
        </div>

        <div className=" border-b-2 border-[#F0F0F0] h-[70px] items-center flex ">
                <div className="w-full">
                    <h3 className='font-dmsans text-[16px] font-bold text-[#262626] leading-[23px]'>Email Address *</h3>
                    <input 
                    type="email" 
                    placeholder='Email' 
                    required
                    className=' outline-none font-dmsans text-[14px] font-normal text-[#767676] w-full' 
                   />
                </div>
        </div>
            
        </div>
    </Container>
  )
}

export default CheckOut
