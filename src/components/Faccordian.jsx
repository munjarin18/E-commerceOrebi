import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";


const Faccordian = () => {
  let[show, setShow] = useState(false); 
  return(

  <>
<div className="w-[50%]">
<div
 onClick={()=> setShow(!show)}
className=" flex justify-between items-center">
<p className='text-[#000] font-sans text-[18px] lg:text-[18px] font-bold'>
  LFEATURES  & DETAILS
</p>
{show == true ? <RxCross2 /> : <FaPlus />  }


</div>
{show &&
<p className='text-[#000] pt-6 font-sans text-[18px] lg:text-[18px] font-bold'>
SHIPPING & RETURNS 
</p>

}

</div>

<div className="w-[50%] pt-8">
  <span className='text-[#767676]  font-sans text-[18px] lg:text-[18px] font-normal' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</span>
</div>
 
  </>

  )
}

export default Faccordian

