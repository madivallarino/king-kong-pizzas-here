import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image'

function Banner() {
  return (
    <div className='relative'>
      <div className='absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20'/>
         <Carousel
          autoPlay
          infiniteLoop
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          interval={5000}
        >
          <Image
            loading='lazy' 
            src='https://links.papareact.com/gi1' 
            alt='' 
            height={700}
            width={500}
            />
            
          <Image
            loading='lazy' 
            height={700}
            width={500}
            src='https://links.papareact.com/6ff' 
            alt='' 
          />
           

        
          <Image 
            loading='lazy'  
            height={700}
            width={500} 
            src='https://links.papareact.com/7ma' 
            alt='' 
          />
        </Carousel>
    </div>
  )
}

export default Banner