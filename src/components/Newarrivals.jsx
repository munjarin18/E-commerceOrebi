import React, { useContext} from 'react'
import Container from './Container'
import ArrivaItems from './ArrivaItems'
import { apiData } from './ContextApi'
import Slider from "react-slick";
import { FaLongArrowAltRight , FaLongArrowAltLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';




function SampleNextArrow(props) {
  const { onClick } = props;
  return (
<div onClick={onClick} className='h-[50px] w-[50px] bg-[#787678] rounded-full text-center
     leading-[50px] text-[20px] text-white absolute top-[40%] right-0 lg:right-[-10px] z-50 
     translate-y-[-50%]' >< FaLongArrowAltRight className='inline-block ' /></div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick} className='h-[50px] w-[50px] bg-[#787678] rounded-full text-center
     leading-[50px] text-[20px] text-white absolute top-[40%] left-0 lg:left-[-25px] z-50 
     translate-y-[-50%]' ><FaLongArrowAltLeft className='inline-block ' /></div>
  );
}





const Newarrivals = () => {
  let data = useContext(apiData)

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      
    ]
  };


  return (
    <section>
        <Container>
            <h2 className='text-[#262626] font-sans text-[20px] lg:text-[38px] font-bold'>New Arrivals</h2>
          
            <Slider {...settings} >

            {data.map((item)=>(
             
            <Link to="/product">
             <ArrivaItems item={item}/>
            </Link>

             ))}

            </Slider>
              
        </Container>
    </section>
  )
}

export default Newarrivals