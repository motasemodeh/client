import React from 'react'
import {topPicks} from '../data/data'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const TopPicks = () => {
  return (
    <>
    <h1 className='text-orange-500 font-bold text-2xl text-center'>Top Picks</h1>
    <div className='hidden lg:flex max-w-[1520px] m-auto py-4 px-2'>
      <Splide options={{perPage:4, gap: '0.8rem', drag: 'free', arrows: false}}>
      {
        topPicks.map((item) => {
          return(
            <SplideSlide key={item.id}>
            <div className='rounded-3xl relative'>
              <div className='absolute w-full h-full bg-black/60 rounded-3xl text-white px-2'>
                <p className='px-2 mt-2 text-2xl font-bold'>{item.title}</p>
                <p className='px-2'>{item.price}</p>
                <button className='border-solide border-white text-white mx-2 absolute bottom-4 px-4 py-2'>Add To Cart</button>
              </div>
              <img className='h-[200px] w-full object-cover rounded-3xl cursor-pointer hover:scale-105 ease-out duration-300' src={item.img} alt={item.title}/>
            </div>
            </SplideSlide>

          )
        }

        )
      }    
      </Splide>  
    </div>
    </>
  )
}

export default TopPicks
