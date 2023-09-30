import React from 'react'

const NewsLetter = () => {
  return (
    <div className='max-w-[1520px] m-auto text-white px-4 py-4 bg-[#24262b] '>
        <div className='mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4'>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Need advice on how to Improve your flow?</h1>
            <p>Sign up to join our newletter and stay up to date.</p>
        </div>
        <div className='my-4'>
            <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                <input className='p-3 flex w-full rounded-md text-black'
                type='email'
                placeholder='email'/>
                <button className='bg-[#00df9a] text-white rounded-md font-medium w-[200px] ml-4 my-6 px-3 py-3 border-none'>Sign Up</button>
            </div>
            <p>we are concerned about the security of your data, Read{''} 
            <span className='tex-white font-bold'>Privacy Policy</span>
            </p>
            <hr className='my-8 bg-gray-700 border-1 gark:bg-gray-700'/>
        </div>
        </div>
    </div>
  )
}

export default NewsLetter
