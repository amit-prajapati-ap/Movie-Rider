import { dummyTrailers } from '@/assets/assets'
import React, { useState } from 'react'
import { BlurCircle } from '..'
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'
import { PlayCircleIcon } from 'lucide-react';

const TrailerSection = () => {
  const plugin = React.useRef(
    Autoplay({
      delay: 2000,
      direction: "forward",
      jumpTo: "start",
      stopOnInteraction: false,
      stopOnMouseEnter: false,
    })
  );
  return (
    <div className='px-6 md:px-12 lg:px-24 xl:px-36 overflow-hidden my-12 max-w-[1550px] mx-auto md:pb-20'>
      <p className='text-gray-300 text-2xl mx-auto font-semibold'>Trailers</p>

      <div className="flex justify-center xs:mx-10 md:mx-0 max-xs:mx-1.5 mt-10">
        <Carousel
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.play}
          className="w-full sm:max-w-[1200px] md:max-w-xl lg:max-w-4xl xl:max-w-6xl"
        >
          <CarouselContent className="-ml-1">
            {dummyTrailers.slice(0, 6).map((trailer, index) => (
              <CarouselItem
                key={index}
                className="pl-3 sm:basis-1/2 xl:basis-1/4 lg:basis-1/3"
              >
                <div className='relative hover:-translate-y-1 duration-300 transition-all max-md:h-60 md:max-h-60 cursor-pointer' onClick={() => window.open(trailer.videoUrl, '_blank')}>
                  <img
                    src={trailer.image}
                    alt=""
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <PlayCircleIcon strokeWidth={1.6} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white w-12 h-12 hover:scale-110 duration-300'/>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious
            className={
              "bg-primary-light hover:bg-primary-dull text-white border border-gray-700"
            }
          />
          <CarouselNext
            className={
              "bg-primary-light hover:bg-primary-dull text-white border border-gray-700"
            }
          />
        </Carousel>
      </div>
    </div>
  )
}

export default TrailerSection
