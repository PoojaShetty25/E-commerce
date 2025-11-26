import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

       <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'} />
       </div>

       <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt=""/>
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
             <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit a optio tempora maiores voluptatibus non est recusandae quam soluta ea magnam incidunt iusto, esse sit ut repudiandae dolorum doloremque. Optio?</p>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea iure dolorem sed sunt recusandae laudantium laboriosam! Corporis nihil quod incidunt recusandae, debitis aliquam quia nemo veritatis. Nobis, debitis sint! Reiciendis.</p>
             <b className='text-gray-800'>Our Mission</b>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel est eveniet hic praesentium tempora accusamus.</p>
          </div>
       </div>
       <div className='text-xl py-4'>
           <Title text1={'WHY'} text2={'CHOOSE US'} />
       </div>
       <div>

        <div className='flex flex-col md:flex-row text-sm mb-20'>
            <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
               <b>Quantity Assurance:</b>
               <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, ratione laudantium corrupti modi nemo et?</p>
            </div>
            <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
               <b>Convenience:</b>
               <p className='text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, error.</p>
            </div>
             <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
               <b>Exceptional Customer Service:</b>
               <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur sapiente, sint expedita laboriosam nostrum quibusdam!</p>
            </div>
        </div>
       </div>
       <NewletterBox/>
    </div>
  )
}

export default About
