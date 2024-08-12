import React from 'react'
import Container from '../components/Container'

const Contact = () => {
  return (
  <section  className="lg:pt-[80px] pt-[20px] lg:pb-[90px] pb-[30px] px-1 lg:px-0">
    <Container>
      <div className="lg:pb-[70px] pb-[10px]">
        <div className="">
          <h2 className='font-sans font-bold text-[47px] text-[#262626]'> Contacts </h2>
          <h3 className='font-sans font-normal text-[16px] text-[#767676]'> Home  {">"}   Contacts </h3>
        </div>
        <div className="py-[80px]">
          <div className="lg:w-[50%] w-full">
            <h3 className='font-sans font-bold text-[34px] text-[#262626]'>Fill up a Form</h3>
            <form action="">
                        <label className='font-sans text-[#262626] text-[16px] font-bold' htmlFor="">Name</label> <br />
                        <input className='w-1/2 pb-4 border-b-[1px] border-[#F0F0F0] mb-[30px] outline-none' type="text" placeholder='Your name here' /><br />
                        <label className='font-sans text-[#262626] text-[16px] font-bold' htmlFor="">Email</label><br />
                        <input className='w-1/2 pb-4 border-b-[1px] border-[#F0F0F0] mb-[30px] outline-none' type="text" placeholder='Your email here' /><br />
                        <label className='font-sans text-[#262626] text-[16px] font-bold' htmlFor="">Message</label><br />
                        <textarea className='w-1/2 pb-20 border-b-[1px] border-[#F0F0F0] outline-none resize-none mb-[30px]' type="text" placeholder='Put your message here' />
                    </form>
                    <button type='Submit' className='font-sans text-[#fff] text-[16px] font-bold px-[60px] py-[15px] bg-[#262626] '>Post</button>
          </div>
          
          <div className="pt-[50px]">
          <iframe className='w-full h-[500px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.673630763058!2d90.38441017410068!3d23.759015088447914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9f6e2087031%3A0x3b73c06310799607!2sFarmgate%20Metro%20Rail%20Station!5e0!3m2!1sen!2sbd!4v1723392716574!5m2!1sen!2sbd"></iframe>
          </div>

        </div>
      </div>
    </Container>
  </section>
  )
}

export default Contact
