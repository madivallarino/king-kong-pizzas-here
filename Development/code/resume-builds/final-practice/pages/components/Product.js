import React, { useState, useEffect } from 'react'
import { StarIcon } from "@heroicons/react/24/solid"
import Image from 'next/image'
import Currency from "react-currency-formatter"
const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({id, title, price, description, category, image}) {
    const [rating, setRating] = useState()
    const [hasPrime, setPrimeEnabled] = useState()

    useEffect(() => {
      setRating(
          Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) +
          MIN_RATING
      );
      setPrimeEnabled(Math.random() < 0.5);
  }, []);
  return (
    <div className='relative flex flex-col m-5 bg-white z-30 p-10'>
        <p className='absolute top-2 right-2 text-xs italic text-gray-400'>{category}</p>

        <Image src={image} height={200} width={200} objectFit='contain'/>
        <h4 className='my-3'>{title}</h4>
      <div className='flex'>
        {Array(rating).fill().map(()=> (
            <StarIcon className='h-5 text-yellow-500'/>
        ))}
      </div>
        <p className='text-xs mt-2 line-clamp-2'>{description}</p>

        <div className='mb-5'>
            <Currency quantity={price}/>
        </div>

        {hasPrime && (
            <div className='flex items-center space-x-2 -mt-5'>
                <Image src="https://links.papareact.com/fdw" width={50} height={100} alt="" />
                <p className='text-xs text-gray-500'>FREE Next-day Delivery</p>
            </div>
        )}
        <button className='mt-auto button'>Add To Basket</button>
    </div>
  )
}

export default Product