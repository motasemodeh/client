import React from 'react'

const Delivery = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <h3 className='text-orange-500 font-bold text-2xl text-center'>Quick Delivery App</h3>
      <div className='xl:w-[1240px] lg:w-[1000px] md:w-[90%] xl:grid-cols-2 mx-auto grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1'>
        <img className='w-[450px] mx-auto my-4' src='https://res.cloudinary.com/dfn0nhhmq/image/upload/v1695999738/champaEats_Deliveryy_rnqvfo.webp'/>
        <div className='flex flex-col justify-center'>
            <p className='text-orange-700 font-bold'>Get The App</p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
                Effortless Dining Delivered to Your Doorstep
            </h1>
            <p>
            Feel free to customize it to fit the tone and style of your restaurant's brand. If you have any specific information or details you'd like to include in this section, please let me know, and I can help you craft a more tailored heading.
            </p>
            <button className='bg-orange-700 text-white w-[150px] rounded-md font-bold my-6 mx-auto md:mx-0 py-3'>Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Delivery
