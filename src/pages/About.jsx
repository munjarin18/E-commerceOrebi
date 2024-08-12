
import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import About1 from '../assets/About1.png'
import About2 from '../assets/About2.png'





const About = () => {
  return (
  <section className='lg:py-[124px] py-10 px-3'>
   <Container>
    <h2 className='font-sans font-bold text-[49px] text-[#262626]'> About </h2>
    <h3 className='font-sans font-normal text-[#767676]'> Home  {">"}   About</h3>
    <Flex className="justify-between py-[50px]">
    <div className="flex justify-between flex-wrap">
    <div className="lg:w-[49%] w-[100%]">
        <div className="relative group overflow-hidden">
            <img src={About1} alt=''/> 
            <div className="absolute bottom-[40px] left-[50%] translate-x-[-50%] h-[50px] w-[150px] bg-black items-center">
        <h5 className='font-sans font-bold   text-[16px] text-[#fff] text-center leading-[50px]'>Our Brands</h5>
        </div>
        </div>
    </div>
    <div className="lg:w-[49%] w-[100%]">
        <div className="relative group overflow-hidden">
            <img src={About2} alt=''/> 
            <div className="absolute bottom-[40px] left-[50%] translate-x-[-50%] h-[50px] w-[150px] bg-black items-center">
        <h5 className='font-sans font-bold   text-[16px] text-[#fff] text-center leading-[50px]'>Our Brands</h5>
        </div>
        </div>
    </div>
    </div>

    </Flex>
    <div className="font-sans font-normal text-[#262626]  lg:text-[30px] py-8">
        <p>Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.</p>
    </div>
    <div className=" flex justify-between flex-wrap py-12">
        <div className="lg:w-[32%] w-full">
            <h3 className='font-sans font-bold text-[#262626]  text-[25px]'>Our Vision</h3>
            <p className='font-sans font-normal text-[#262626]  text-[16px]
            pt-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
        <div className="lg:w-[32%] w-full">
            <h3 className='font-sans font-bold text-[#262626]  text-[25px]'>Our Story</h3>
            <p className='font-sans font-normal text-[#262626]  text-[16px]
            pt-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
        <div className="lg:w-[32%] w-full">
            <h3 className='font-sans font-bold text-[#262626]  text-[25px]'>Our Brands</h3>
            <p className='font-sans font-normal text-[#262626]  text-[16px]
            pt-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
    </div>
   </Container>
  </section>
  )
}

export default About
