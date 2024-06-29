import React from 'react'
import BanImg from "../assets/banner.png"
import Slider from "react-slick";
import Container from './Container';
import Flex from './Flex';
import { IoReload } from "react-icons/io5";
import { FaTruck } from "react-icons/fa";






const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 4000,
        arrows:false,
        appendDots: dots => (
          <div 
            style={{
              borderRadius: "10px",
              padding: "10px",
              position:"absolute",
              left:"70px",
              top:"50%",
              transform:"translateY(-50%)"
            }}
          >
            <ul style={{ margin: "0px" }}> {dots} </ul>
          </div>
        ),
        customPaging: i => (
          <div className='ami'
            style={{
              width: "30px",
              color: "transparent",
              padding:"10px 0",
              borderRight: "3px #fff solid"
            }}
          >
            0{i + 1}
          </div>
        )
      };
  return (

    <>

<Slider {...settings}>

<div className="">
  <img src={BanImg} alt="banner" />
</div>
<div className="">
  <img src={BanImg} alt="banner" />
</div>
<div className="">
  <img src={BanImg} alt="banner" />
</div>
<div className="">
  <img src={BanImg} alt="banner" />
</div>

</Slider>
  <Container>
    <Flex className="lg:justify-between lg:py-4 py-6">
    <div className="gap-x-2 items-center lg:pl-0 pl-2">
       <h2 className='font-sans lg:text-[16px] text-[14px] text-[#6D6D6D]'>
        <span className='font-bold lg:text-[20px] text-[#262626]'>2</span> Two years warranty</h2>
     </div>
     <div className="flex gap-x-2 items-center">
     <div className="">
     <FaTruck />
      </div>   
       <h2 className='font-sans lg:text-[16px] text-[14px] text-[#6D6D6D]'>Free shipping </h2>
     </div>
     <div className="flex gap-x-2 items-center">
      <div className="">
      <IoReload />
      </div>
       <h2 className='font-sans lg:text-[16px] text-[14px] text-[#6D6D6D]'>Return policy in 30 days</h2>
     </div>
    </Flex>
  </Container>
    </>


  
    
      
    
  )
}

export default Banner