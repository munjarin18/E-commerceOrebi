import React, { useState } from 'react'
import Container from './Container'
import Logo from "../assets/logo.png"
import Flex from './Flex'
import { RxCross1 } from "react-icons/rx";
import { FaBars } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Header = () => {

   let [show,setShow] = useState(false)


  return (
  <header className='lg:h-[80px] h-[20px]'>
  <Container>
  <Flex className="justify-between items-center lg:h-[80px] h-[20px]">

     <div className="w-1/4">
      <img src={Logo} alt='logo'/>
     </div>
     <div className="w-3/4">
      <ul className={`lg:flex justify-center lg:gap-x-7 z-50 absolute lg:static text-center duration-700 ease-in-out 
       ${show == true ? "bg-[gray]  top-[50px] left-0 w-full" : "top-[50px] left-[-200px]" }`}>
         <li className='font-sans font-bold text-[16px]
         lg:text-[#767676] text-[white]  hover:text-[#262626]'>
          <Link to="/">Home</Link>
         </li>

        <li className='font-sans font-bold text-[16px]
         lg:text-[#767676] text-[white]  hover:text-[#262626]'>
          <Link to="/product">Shop</Link>
         </li>

        <li className='font-sans font-bold text-[16px]
         lg:text-[#767676] text-[white] hover:text-[#262626]'>
            <Link to={"/About"}>About</Link>
         </li>
        <li className='font-sans font-bold text-[16px]
         lg:text-[#767676] text-[white] hover:text-[#262626]'>
            <Link to={"/Contact"}>Contact</Link>
            </li>
        <li className='font-sans font-bold text-[16px]
         lg:text-[#767676] text-[white] hover:text-[#262626]'>Journal</li>
      </ul>
     </div>
     <div className="lg:hidden cursor-pointer" onClick={()=>setShow(!show)}>

      {show ==  true ? <RxCross1 /> : <FaBars />}

     </div>

  </Flex>
   
   </Container>

  </header>
  )
}

export default Header