import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Img1 from "../assets/img1.png"
import Img2 from "../assets/img2.png"
import Img3 from "../assets/img3.png"

const Ads = () => {
  return (

    <section className='lg:py-20 py-9'>
       <Container>
        <Flex className="justify-between">
            <div className="w-[48%]">
                <img src={Img1} alt="img1" />
            </div>
            <div className="w-[48%]">
                <div className="">
                    <img src={Img2} alt="img2" />
                </div>
                <div className=" md:mt-[20px] lg:mt-[30px] xl:mt-[40px] mt-2">
                    <img src={Img3} alt="img3" />
                </div>
            </div>
        </Flex>
    </Container>
    </section>


 
  )
}

export default Ads