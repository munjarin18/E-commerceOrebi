import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
import Container from '../components/Container';

const MyAccount = () => {
  return (
    <>
    <section className='pb-10 px-3 lg:px-0'>
        <Container>
        <div className=" pt-[5px]">
                    <div className="">
                        <h3 className='font-dmsans text-[49px] font-bold text-[#262626]'>My Account</h3>
                        <p className='font-dmsans text-[12px] font-normal text-[#767676] flex items-center'> <Link to="/">Home</Link> <IoIosArrowForward /> <Link to="/myaccount">My Account</Link> </p>
                    </div>
        </div>

        <div className=" mt-10 flex justify-between">
            <div className="w-[20%]">
                <ul>
                    <li><h3 className='font-dmsans text-[16px] font-normal leading-[30px] text-[#767676] border-b-[1px] border-[#F0F0F0] py-4 hover:font-bold hover:text-[#262626] ease-in-out duration-500'>Dashboard</h3></li>
                    <li><h3 className='font-dmsans text-[16px] font-normal leading-[30px] text-[#767676] border-b-[1px] border-[#F0F0F0] py-4 hover:font-bold hover:text-[#262626] ease-in-out duration-500'>Others</h3></li>
                    <li><h3 className='font-dmsans text-[16px] font-normal leading-[30px] text-[#767676] border-b-[1px] border-[#F0F0F0] py-4 hover:font-bold hover:text-[#262626] ease-in-out duration-500'>Donwloads</h3></li>
                    <li><h3 className='font-dmsans text-[16px] font-normal leading-[30px] text-[#767676] border-b-[1px] border-[#F0F0F0] py-4 hover:font-bold hover:text-[#262626] ease-in-out duration-500'>Addresses</h3></li>
                    <li><h3 className='font-dmsans text-[16px] font-normal leading-[30px] text-[#767676] border-b-[1px] border-[#F0F0F0] py-4 hover:font-bold hover:text-[#262626] ease-in-out duration-500'>Account details</h3></li>
                    <li><h3 className='font-dmsans text-[16px] font-normal leading-[30px] text-[#767676] border-b-[1px] border-[#F0F0F0] py-4 hover:font-bold hover:text-[#262626] ease-in-out duration-500'>Logout</h3></li>
                </ul>
            </div>
            <div className="w-[75%]">
                <div className=" mt-7">
                    <h3 className='font-dmsans text-[16px] font-normal leading-[30px] text-[#767676]'>Hello <span className='text-[#262626]'>admin</span> (not <span className='text-[#262626]'>admin</span>? <span className='text-[#262626]'>Log out</span>)</h3>
                    <p className='font-dmsans text-[16px] font-normal leading-[30px] text-[#767676] w-[80%] mt-[50px]'>From your account dashboard you can view your <span className='text-[#262626]'>recent orders</span>, manage your <span className='text-[#262626]'>shipping and billing addresses</span>, and <span className='text-[#262626]'>edit your password and account details.</span></p>
                </div>
            </div>
        </div>
        </Container>
    </section>
    </>
  )
}

export default MyAccount