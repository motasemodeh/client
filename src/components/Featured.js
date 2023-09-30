import React, { useState } from 'react'
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs' 
import {RxDotFilled} from 'react-icons/rx'

const Featured = () => {
    const slider = [
        {
            url:'https://res.cloudinary.com/dfn0nhhmq/image/upload/v1695925589/samples/food/fish-vegetables.jpg'
        },
        {
            url:'https://res.cloudinary.com/dfn0nhhmq/image/upload/v1695925623/cld-sample-4.jpg'
        },
        {
            url:'https://res.cloudinary.com/dfn0nhhmq/image/upload/v1695925588/samples/food/dessert.jpg'
        }
    ]
    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlider = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slider.length - 1 : currentIndex -1
        setCurrentIndex(newIndex)
    }

    const nextSlider = () => {
        const isLastSlide = currentIndex === slider.length -1
        const newIndex = isLastSlide ? 0 : currentIndex +1
        setCurrentIndex(newIndex)
    }

    const moveToNextSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }

  return (
    <div className='max-w-[1520px] h-[500px] w-full py-4 px-4 relative mx-auto group'>
        <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
        style={{backgroundImage: `url(${slider[currentIndex].url})`}}>
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[50%]  left-5 text-2xl rounded-full p-2 bg-orange-700 text-white'>
                <BsChevronCompactLeft onClick={prevSlider} />
            </div>
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[50%]  right-5 text-2xl rounded-full p-2 bg-orange-700 text-white'>
                <BsChevronCompactRight onClick={nextSlider} />
            </div>
            
        </div>
      <div className='flex top-4 justify-center py-2'>
        {
            slider.map((sliderItems, slideIndex) => (
                <div key={slideIndex} onClick={() => moveToNextSlide (slideIndex)} className='text-2xl cursor-pointer'>
                    <RxDotFilled />
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default Featured
