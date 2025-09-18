import { dummyBookingData } from '@/assets/assets'
import { AdminTitle } from '@/components'
import dateFormat from '@/lib/dateFormat'
import React, { useEffect, useState } from 'react'

const ListBookings = () => {
  const currency = import.meta.env.VITE_CURRENCY
  const [bookings, setBookings] = React.useState([])
  const [loading, setLoading] = useState(true)

  const getAllBookings = async () => {
    try {
      setBookings(dummyBookingData)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getAllBookings()
  }, [])

  return !loading ? (
    <>
      <AdminTitle text1={'List'} text2={'Bookings'} />
      <div className='max-w-4xl mt-6 overflow-x-auto'>
        <table className='w-full border-collapse rounded-md overflow-hidden text-nowrap'>
          <thead>
            <tr className='bg-primary-light/20 text-left text-white'>
              <th className='p-2 font-medium pl-5'>User Name</th>
              <th className='p-2 font-medium'>Movie Name</th>
              <th className='p-2 font-medium'>Show Time</th>
              <th className='p-2 font-medium'>Seats</th>
              <th className='p-2 font-medium'>Amount</th>
            </tr>
          </thead>
          <tbody className='text-sm font-light'>
            {bookings.map((item, index) => (
              <tr key={index} className='border-b border-primary-light/20 bg-primary-light/5 even:bg-primary-light/10'>
                <td className='p-2 min-w-45 pl-5'>{item.user.name}</td>
                <td className='p-2'>{item.show.movie.title}</td>
                <td className='p-2'>{dateFormat(item.show.showDateTime)}</td>
                <td className='p-2'>{Object.keys(item.bookedSeats).map((seat) => item.bookedSeats[seat]).join(', ')}</td>
                <td className='p-2'>{currency} {item.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  ) : (
    <div className='w-full flex flex-col gap-1 items-center justify-center'>
      <div className='spinner'></div>
    </div>
  )
}

export default ListBookings
