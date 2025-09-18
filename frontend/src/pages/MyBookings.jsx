import { dummyBookingData } from '@/assets/assets'
import { BlurCircle } from '@/components'
import dateFormat from '@/lib/dateFormat'
import timeFormat from '@/lib/timeFormat'
import React, { useEffect, useState } from 'react'

const MyBookings = () => {
  const currency = import.meta.env.VITE_CURRENCY
  const [bookings, setBookings] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getMyBookings = async () => {
    setBookings(dummyBookingData)
    setIsLoading(false)
  }

  useEffect(() => {
    getMyBookings()
  }, [])

  return !isLoading ? (
    <div className='relative px-6 md:px-10 lg:px-20 pt-30 md:pt-40 h-screen overflow-y-auto mx-auto max-w-6xl mb-10 no-scrollbar overflow-x-hidden'>
      <BlurCircle top='100px' left='100px'/>
      <div>
        <BlurCircle bottom='0px' left='600px'/>
      </div>

      <h1 className='text-4xl font-semibold text-center mb-10'>My Bookings</h1>

      {bookings.map((item, index) => (
        <div key={index} className='flex flex-col sm:flex-row justify-between bg-primary-light/8 border border-primary-dull/20 rounded-lg mt-4 p-2 max-w-3xl mx-auto'>
          <div className='flex flex-col sm:flex-row'>
            <img src={item.show.movie.poster_path} alt="" className='sm:max-w-45 aspect-video h-auto object-cover object-bottom rounded' />
            <div className='flex flex-col p-4'>
              <div className="relative group w-fit">
                <p className="font-semibold mt-2 truncate cursor-pointer max-w-[200px]">
                  {item.show.movie.title}
                </p>

                {/* Tooltip */}
                <div className="absolute left-0 top-full mt-1 hidden w-max max-w-sm rounded-md bg-gray-950 px-2 py-1 text-sm text-white shadow-lg group-hover:block z-50">
                  {item.show.movie.title}
                </div>
              </div>
              <p className='text-gray-400 text-sm'>{timeFormat(item.show.movie.runtime)}</p>
              <p className='text-gray-400 text-sm mt-auto'>{dateFormat(item.show.showDateTime)}</p>
            </div>
          </div>

          <div className='flex flex-col sm:items-end sm:text-right justify-between p-4'>
            <div className='flex items-center gap-4'>
              <p className='text-2xl font-semibold mb-3'>{currency}{item.amount}</p>
              {!item.isPaid && <button className='bg-primary-light hover:bg-primary-dull transition duration-200 px-4 py-1.5 mb-3 text-sm rounded-full font-medium cursor-pointer'>Pay Now</button>}
            </div>

            <div className='text-sm'>
              <p><span className='text-gray-400'>Total Tickets: </span>{item.bookedSeats.length}</p>
              <p><span className='text-gray-400'>Seat Number: </span>{item.bookedSeats.join(", ")}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <div className='flex items-center justify-center h-screen'>
      <div className='spinner'></div>
    </div>
  )
}

export default MyBookings
